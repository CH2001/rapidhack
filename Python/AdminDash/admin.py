#--------------------#
#----- PACKAGES -----#
#--------------------#

# Basic
import streamlit as st
import pandas as pd
import time
import datetime

# Firebase Database
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

#--------------------------#
#----- INITIALISATION -----#  
#--------------------------#
today = datetime.date.today()

#---------------------#
#----- Functions -----#
#---------------------#

@st.cache_data(ttl=15)
def get_db():
    db = firestore.Client.from_service_account_json("serviceAccountKeyAlternate.json")

    driver_db = db.collection("Driver").stream()
    driver_df = pd.DataFrame([dri.to_dict() for dri in driver_db])
    driver_df = driver_df[['Driver_ID','Name','BusNumber']]

    drowsy_db = db.collection("Drowsy_Detect").stream()
    drowsy_df = pd.DataFrame([dro.to_dict() for dro in drowsy_db])
    return (driver_df, drowsy_df)

def countToday(series):
    return sum(1 for date in series if str(date) == str(today))


def main():

    while True:
        driver_df, drowsy_df = get_db()
        
        drowsy_df['date'] = drowsy_df['Timestamp'].apply(lambda x: x.strftime('%Y-%m-%d'))

        driver_drowsy = drowsy_df[['date','Driver_ID']].groupby("Driver_ID").agg(
            AlarmToday=('date', countToday),
            AlarmAllTime=('date','count')
        ).reset_index()

        driver = pd.merge(driver_df, driver_drowsy, on="Driver_ID")
        driver.index += 1

        drowsy_date = drowsy_df[["date","Driver_ID"]].groupby("date").count()
        drowsy_date = drowsy_date.rename(columns={"Driver_ID":"SleepCount"})
    
    
        try:
            placeholder_1.empty()
            placeholder_2.empty()
            placeholder_3.empty()
            placeholder_4.empty()

        except:
            placeholder_1 = st.empty()
            placeholder_2 = st.empty()
            placeholder_3 = st.empty()
            placeholder_4 = st.empty()

        placeholder_1.title('Total Sleep Today')
        placeholder_2.line_chart(drowsy_date)
        placeholder_3.title('Sleep Monitor by Driver')
        placeholder_4.dataframe(driver)
        
        time.sleep(5)

#----------------#
#----- Main -----#  
#----------------#
if __name__ == "__main__":
    main()










