import kivy

from kivy.app import App
from kivy.core.window import Window
from kivy.uix.boxlayout import BoxLayout

class MyRoot(BoxLayout):
    
    def __init__(self):
        super(MyRoot, self).__init__()

class DriverApp(App):
    
    def build(self):
        return MyRoot()
    
driverApp = DriverApp()
driverApp.run()