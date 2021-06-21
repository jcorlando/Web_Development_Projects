#!/usr/bin/python3.8
from flask import Flask
from flask_cors import CORS
import pandas as pd
import yfinance as yf
import numpy as np

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

    return("Hello From Python API")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
