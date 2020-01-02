#!/usr/bin/python3

# /****************************************************************************
# @file:get_item.py
# @author:ebayboy@163.com
# @date:2020-01-02 17:10
# @version 1.0
# @description: python file
# @Copyright (c)  all right reserved
# **************************************************************************/

from requests import get, put

show = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']

for item in show:
    url = "http://cdn.uneedzf.com/wepyBook/constellation/" + item + ".jpg"
    print(url)
    resp=get(url)
    with open(item+".jpg", "wb") as f:
        f.write(resp.content)
