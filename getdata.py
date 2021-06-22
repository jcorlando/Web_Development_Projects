#!/usr/bin/python3.8
from flask import Flask
from flask_cors import CORS
import pandas as pd
import yfinance as yf
import numpy as np
import json
import datetime

app = Flask(__name__)
CORS(app)

@app.route('/')
def get_api_data():
    #####################################
    # Crypto Price Analysis Program
    # Using the python "yfinance" Library
    #####################################

    ################## Program Constants #####################
    ################ 1 Minute Constants ###############
    _1D_ = -1440    # <----- These are Minute Constants
    _2D_ = -2880    # <----- These are Minute Constants
    ################ 1 Minute Constants ###############
    ################## 1 Hour Constants ###############
    _5DAY_ = -120   # <----- These are Hourly Constants
    _15DAY_ = -360  # <----- These are Hourly Constants
    _1MO_ = -744    # <----- These are Hourly Constants
    _3MO_ = -2232   # <----- These are Hourly Constants
    ################## 1 Hour Constants ###############
    ################ Daily Constants #################
    _6MO_ = -180    # <----- These are Daily Constants
    _1Y_ = -365     # <----- These are Daily Constants
    _2Y_ = -730     # <----- These are Daily Constants
    _5Y_ = -1825    # <----- These are Daily Constants
    ################ Daily Constants #################
    ################## Changeable Constants ##################
    #############################################
    # Popular Tickers: DOGE-USD, BTC-USD, ETH-USD
    #############################################
    _TICKER_ = "DOGE-USD"   # <----- Change these Constants 
    _MINPERIOD_ = _2D_      # <----- to View Specific Data 
    _HOURPERIOD_ = _3MO_    # <----- Specific to your Program
    _DAYPERIOD_ = _6MO_     # <----- 
    ################## Changeable Constants ##################
    ################## Program Constants #####################

    #######################################################
    # use "period" instead of start/end
    # valid periods: 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
    # (optional, default is '1mo')
    #######################################################

    #################################################################
    # fetch data by interval (including intraday if period < 60 days)
    # valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
    # (optional, default is '1d')
    #################################################################

    ################## Donwload Data Using the Supplied Constant ##################
    minute_data = yf.download(_TICKER_, period="5d", interval="1m", progress=False)
    hour_data = yf.download(_TICKER_, period="1y", interval="1h", progress=False)
    day_data = yf.download(_TICKER_, period="max", progress=False)
    ################## Donwload Data Using the Supplied Constant ##################


    ########################## Assign Variables, Configure, and Plot (Minute Plot) ############################
    #---------------------Calculate X-Axis-------------------------------
    x_axis_data = (minute_data.index.tolist())[_MINPERIOD_:]

    i = 0
    json_return = '{"data_1_1_x":['
    while i < len(x_axis_data):
        json_return = json_return + '"' + str(x_axis_data[i])[0:16] + '"'
        if(i != len(x_axis_data) - 1):
            json_return = json_return + ', '
        i = i + 1
    json_return = json_return + "],"
    #---------------------Calculate X-Axis-------------------------------



    #---------------------Calculate Original data-------------------------------
    y_axis_data = json.dumps((pd.Series(minute_data['Close']).tolist())[_MINPERIOD_:])
    json_return = json_return + ' "data_1_1_y":' + y_axis_data + ","
    #---------------------Calculate Original data-------------------------------


    #------------------------------Calculate 2Hr Moving Average---------------------------------------------
    y_axis_1_2_data = json.dumps( (minute_data["Close"].rolling(window=120).mean().tolist())[_MINPERIOD_:] ) 
    json_return = json_return + ' "data_1_2_y":' + y_axis_1_2_data + "," 
    #------------------------------Calculate 2Hr Moving Average---------------------------------------------


    #------------------------------Calculate 4Hr Moving Average---------------------------------------------
    y_axis_1_3_data = json.dumps( (minute_data["Close"].rolling(window=240).mean().tolist())[_MINPERIOD_:] ) 
    json_return = json_return + ' "data_1_3_y":' + y_axis_1_3_data  + "," 
    #------------------------------Calculate 4Hr Moving Average---------------------------------------------


    #------------------------------Calculate 8Hr Moving Average---------------------------------------------
    y_axis_1_4_data = json.dumps( (minute_data["Close"].rolling(window=480).mean().tolist())[_MINPERIOD_:] ) 
    json_return = json_return + ' "data_1_4_y":' + y_axis_1_4_data  + "," 
    #------------------------------Calculate 8Hr Moving Average---------------------------------------------

    #------------------------------Calculate 16Hr Moving Average---------------------------------------------
    y_axis_1_5_data = json.dumps( (minute_data["Close"].rolling(window=960).mean().tolist())[_MINPERIOD_:] ) 
    json_return = json_return + ' "data_1_5_y":' + y_axis_1_5_data  + "," 
    #------------------------------Calculate 16Hr Moving Average---------------------------------------------


    #------------------------------Calculate 32Hr Moving Average---------------------------------------------
    y_axis_1_6_data = json.dumps( (minute_data["Close"].rolling(window=1920).mean().tolist())[_MINPERIOD_:] ) 
    json_return = json_return + ' "data_1_6_y":' + y_axis_1_6_data
    #------------------------------Calculate 32Hr Moving Average---------------------------------------------
    ########################## Assign Variables, Configure, and Plot (Minute Plot) ############################



    ########################## Assign Variables, Configure, and Plot (Hourly Plot) ############################
    #---------------------Calculate X-Axis-------------------------------
    x_axis_data = (hour_data.index.tolist())[_HOURPERIOD_:]

    i = 0
    json_return = json_return + ',"data_2_1_x":['
    while i < len(x_axis_data):
        json_return = json_return + '"' + str(x_axis_data[i])[0:16] + '"'
        if(i != len(x_axis_data) - 1):
            json_return = json_return + ', '
        i = i + 1
    json_return= json_return + "],"
    #---------------------Calculate X-Axis-------------------------------

    #---------------------Calculate Original data-------------------------------
    y_axis_2_1 = json.dumps(  (pd.Series(hour_data['Close']).tolist())[_HOURPERIOD_:]  )
    json_return = json_return + ' "data_2_1_y":' + y_axis_2_1 + ","
    #---------------------Calculate Original data-------------------------------


    #---------------------Plots for 12-Hr Moving Average-------------------------------
    y_axis_2_2 = json.dumps( (hour_data["Close"].rolling(window=12).mean().tolist())[_HOURPERIOD_:] )
    json_return = json_return + ' "data_2_2_y":' + y_axis_2_2 + ","
    #---------------------Plots for 12-Hr Moving Average-------------------------------


    #---------------------Plots for 24-Hr Moving Average-------------------------------
    y_axis_2_3 = json.dumps( (hour_data["Close"].rolling(window=24).mean().tolist())[_HOURPERIOD_:] )
    json_return = json_return + ' "data_2_3_y":' + y_axis_2_3 + ","
    #---------------------Plots for 24-Hr Moving Average-------------------------------


    #---------------------Plots for 5-Day Moving Average-------------------------------
    y_axis_2_4 = json.dumps( (hour_data["Close"].rolling(window=120).mean().tolist())[_HOURPERIOD_:] )
    json_return = json_return + ' "data_2_4_y":' + y_axis_2_4 + ","
    #---------------------Plots for 5-Day Moving Average-------------------------------


    #---------------------Plots for 10-Day Moving Average-------------------------------
    y_axis_2_5 = json.dumps( (hour_data["Close"].rolling(window=240).mean().tolist())[_HOURPERIOD_:] )
    json_return = json_return + ' "data_2_5_y":' + y_axis_2_5 + ","
    #---------------------Plots for 10-Day Moving Average-------------------------------


    #---------------------Plots for 25-Day Moving Average-------------------------------
    y_axis_2_6 = json.dumps( (hour_data["Close"].rolling(window=600).mean().tolist())[_HOURPERIOD_:] )
    json_return = json_return + ' "data_2_6_y":' + y_axis_2_6 + ","
    #---------------------Plots for 25-Day Moving Average-------------------------------


    #---------------------Plots for 50-Day Moving Average-------------------------------
    y_axis_2_7 = json.dumps( (hour_data["Close"].rolling(window=1200).mean().tolist())[_HOURPERIOD_:] )
    json_return = json_return + ' "data_2_7_y":' + y_axis_2_7 
    #---------------------Plots for 50-Day Moving Average-------------------------------
    ########################## Assign Variables, Configure, and Plot (Hourly Plot) ############################


    ########################## Assign Variables, Configure, and Plot (Daily Plot) ############################
    #---------------------Calculate X-Axis-------------------------------
    x_axis_data = (day_data.index.tolist())[_DAYPERIOD_:]

    i = 0
    json_return = json_return + ',"data_3_1_x":['
    while i < len(x_axis_data):
        json_return = json_return + '"' + str(x_axis_data[i])[0:16] + '"'
        if(i != len(x_axis_data) - 1):
            json_return = json_return + ', '
        i = i + 1
    json_return= json_return + "],"
    #---------------------Calculate X-Axis-------------------------------

    #---------------------Calculate Original data-------------------------------
    y_axis_3_1 = json.dumps(  (pd.Series(day_data['Close']).tolist())[_DAYPERIOD_:]  )
    json_return = json_return + ' "data_3_1_y":' + y_axis_3_1 + ","
    #---------------------Calculate Original data-------------------------------


    #---------------------Plots for 5-Day Moving Average-------------------------------
    y_axis_3_2 = json.dumps( (day_data["Close"].rolling(window=5).mean().tolist())[_DAYPERIOD_:] )
    json_return = json_return + ' "data_3_2_y":' + y_axis_3_2 + ","
    #---------------------Plots for 5-Day Moving Average-------------------------------


    #---------------------Plots for 10-Day Moving Average-------------------------------
    y_axis_3_3 = json.dumps( (day_data["Close"].rolling(window=10).mean().tolist())[_DAYPERIOD_:] )
    json_return = json_return + ' "data_3_3_y":' + y_axis_3_3 + ","
    #---------------------Plots for 10-Day Moving Average-------------------------------


    #---------------------Plots for 25-Day Moving Average-------------------------------
    y_axis_3_4 = json.dumps( (day_data["Close"].rolling(window=25).mean().tolist())[_DAYPERIOD_:] )
    json_return = json_return + ' "data_3_4_y":' + y_axis_3_4 + ","
    #---------------------Plots for 25-Day Moving Average-------------------------------


    #---------------------Plots for 50-Day Moving Average-------------------------------
    y_axis_3_5 = json.dumps( (day_data["Close"].rolling(window=50).mean().tolist())[_DAYPERIOD_:] )
    json_return = json_return + ' "data_3_5_y":' + y_axis_3_5 + ","
    #---------------------Plots for 50-Day Moving Average-------------------------------


    #---------------------Plots for 100-Day Moving Average-------------------------------
    y_axis_3_6 = json.dumps( (day_data["Close"].rolling(window=100).mean().tolist())[_DAYPERIOD_:] )
    json_return = json_return + ' "data_3_6_y":' + y_axis_3_6 + ","
    #---------------------Plots for 100-Day Moving Average-------------------------------


    #---------------------Plots for 200-Day Moving Average-------------------------------
    y_axis_3_7 = json.dumps( (day_data["Close"].rolling(window=200).mean().tolist())[_DAYPERIOD_:] )
    json_return = json_return + ' "data_3_7_y":' + y_axis_3_7 
    #---------------------Plots for 200-Day Moving Average-------------------------------
    ########################## Assign Variables, Configure, and Plot (Daily Plot) ############################


    json_return = json_return + "}"
    return(json_return)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)


