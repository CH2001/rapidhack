#--------------------#
#----- PACKAGES -----#
#--------------------#

# Import kivy dependencies first
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.core.window import Window

# Import kivy UX components
from kivy.uix.image import Image
from kivy.uix.button import Button
from kivy.uix.label import Label
from kivy.graphics import Color, Rectangle

# Import other kivy stuff
from kivy.clock import Clock
from kivy.graphics.texture import Texture
from kivy.logger import Logger

# Face Detection
import cv2
import dlib
from imutils import face_utils
from scipy.spatial import distance
import datetime

# Firebase Database
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

#--------------------------#
#----- INITIALISATION -----#  
#--------------------------#

detect = dlib.get_frontal_face_detector()
predict = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")

(lStart, lEnd) = face_utils.FACIAL_LANDMARKS_68_IDXS['left_eye']
(rStart, rEnd) = face_utils.FACIAL_LANDMARKS_68_IDXS['right_eye']

def eye_aspect_ratio(eye):
    A = distance.euclidean(eye[1], eye[5])
    B = distance.euclidean(eye[2], eye[4])
    C = distance.euclidean(eye[0], eye[3])

    ear = (A+B)/(2.0*C)

    return ear

class CamApp(App):

    def build(self):

        # Database
        self.cred = credentials.Certificate("serviceAccountKeyAlternate.json")
        firebase_admin.initialize_app(self.cred)
        self.db=firestore.client()
        self.collection = self.db.collection("Drowsy_Detect")

        # Main layout components
        Window.size = (280, 610)
        self.cam    = Image(size_hint=(1, .8))
        self.button = Button(text="Start Camera", size_hint=(1, .1))
        self.button.bind(on_press=self.toggle_camera)
        self.label  = Label(text="Idle", font_size="32sp", size_hint=(1, .1))

        with self.label.canvas.before:
            self.label_bg = Color(0.5, 0.5, 0.5, 1)
            self.rect = Rectangle(pos=self.label.pos, size=self.label.size)

        self.label.bind(size=self.update_rect, pos=self.update_rect)

        # Add components to layout
        layout = BoxLayout(orientation="vertical")
        layout.add_widget(self.cam)
        layout.add_widget(self.label)
        layout.add_widget(self.button)

        self.camera_active = False

        self.flag = 0
        self.THRESH      = 0.24
        self.FRAME_CHECK = 10

        return layout

    
    def update_rect(self, instance, value):
        # Update the Rectangle's size and pos when the Label's size and pos change
        self.rect.pos = instance.pos
        self.rect.size = instance.size

    # Run continuously to get camera feed
    def update(self, *args):
        
        # Read frame from opencv
        ret, frame = self.capture.read()

        # Flip horizontal and convert image to texture
        if ret:
            frame = cv2.resize(frame, (0,0), fx=5, fy=5)
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            subjects = detect(gray, 0)

            for subject in subjects:

                shape = predict(gray, subject)
                shape = face_utils.shape_to_np(shape)
                
                leftEye  = shape[lStart:lEnd]
                rightEye = shape[rStart:rEnd]

                leftEar  = eye_aspect_ratio(leftEye)
                rightEar = eye_aspect_ratio(rightEye)

                self.ear = (leftEar + rightEar)/2.0

                leftEyeHull  = cv2.convexHull(leftEye)
                rightEyeHull = cv2.convexHull(rightEye)

                cv2.drawContours(frame, [leftEyeHull], -1, (0, 255, 0), 1)
                cv2.drawContours(frame, [rightEyeHull], -1, (0, 255, 0), 1)

                # If eyes are closed
                if self.ear < self.THRESH:
                    self.flag += 1
                    print(self.flag)
                    self.label.text = "AWAKE"

                    if self.flag == self.FRAME_CHECK:
                        self.label.text = "ASLEEP"
                        self.label_bg.rgba = (1,0,0,1)

                        driver_dict = {
                            "Driver_ID": "D001",
                            "Timestamp": datetime.datetime.now()
                        }

                        self.collection.add(driver_dict)

                    elif self.flag > self.FRAME_CHECK:
                        self.label.text = "ASLEEP"
                        self.label_bg.rgba = (1,0,0,1)
                        

                else:
                    self.flag = 0
                    self.label.text = "AWAKE"
                    self.label_bg.rgba = (0,1,0,1)
            
            buf               = cv2.flip(frame, 0).tostring()
            img_texture       = Texture.create(size=(frame.shape[1], frame.shape[0]), colorfmt="bgr")
            img_texture.blit_buffer(buf, colorfmt="bgr", bufferfmt="ubyte")
            self.cam.texture  = img_texture

    def toggle_camera(self, instance):
        if not self.camera_active:
            self.camera_active = True
            self.button.text = "Stop Camera"
            self.capture = cv2.VideoCapture(0)
            Clock.schedule_interval(self.update, 1.0 / 120.0)
            
        else:
            self.camera_active = False
            self.button.text = "Start Camera"
            self.label.text = "Idle"
            self.label_bg.rgba = (0.5,0.5,0.5,1)
            self.capture.release()
            self.cam.texture = None

if __name__ == '__main__':
    CamApp().run()