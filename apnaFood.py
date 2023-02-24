import uvicorn
from fastapi import FastAPI, File, UploadFile, Form,Request
from fastapi import Query,Body
import smtplib
from random import randint
import urllib.request
import urllib.parse
import pymongo
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = FastAPI(title="Apna Food", version="1.0")
@app.get('/hello')
def hello_world():
        return 'Hello World'
@app.get('all_vendors')
def send_all_vendors():
       client = pymongo.MongoClient("mongodb+srv://sripriya:"+urllib.parse.quote("Orayiram@2020")+"@cluster0.once1vv.mongodb.net/?retryWrites=true&w=majority", server_api=ServerApi('1'), connect = False)
       mydb = client.Mithranjali
       mycol = mydb["vendor_registrations"]
       x = []
       for i in mycol.find():
              x.append(i)
       print(x)
       return {'all_vendors':x}


@app.post('/insert_vendor')
async def insert_registration(request : Request):
        k = await request.json()
        client = pymongo.MongoClient("mongodb+srv://sripriya:"+urllib.parse.quote("Orayiram@2020")+"@cluster0.once1vv.mongodb.net/?retryWrites=true&w=majority", server_api=ServerApi('1'), connect = False)
        mydb = client.Mithranjali
        mycol = mydb["vendor_registrations"]
        uname = k['name']
        email = k['email']
        password = k['password']
        phnnum = k['phonenumber']
        type_of_org = k['typeoforg']
        cin = k['cin']
        pan = k['pan']
        gst = k['gst']
        udhyam = k['udhyam']
        bank_acc_num = k['accountnumber']
        bank_acc_name = k['accountname']
        ifsc = k['ifsc']
        upi = k['upi']
        country = k['country']
        state = k['state']
        district = k['district']
        sub_district = k['subdistrict']
        addr= k['address']
        pin_code = k['pincode']

        mydict = { "username": uname, "email": email, "mobile" : phnnum, "password" : password, "Organization Details": { "type_of_oraganisation" : type_of_org, "cin" : cin, 'pan' : pan, 'gst' :gst, 'udhyam':udhyam}, "Bank Details" : {'bank_account_number': bank_acc_num, 'bank_account_name' : bank_acc_name, 'bank_ifsc' : ifsc, 'upi_ID' : upi} , "Address Details" : {'country': country, 'state':state, 'district': district, 'sub_district' : sub_district, 'address':addr,"PIN_code":pin_code}, "Status" : "In Progress", "Stage" : "Sub District"  }
        x = mycol.insert_one(mydict)
        print(x)
        


@app.get('/sms_otp')
async def send_sms_otp(phnnum: str = Query(..., max_length=50, min_length=3)):
        otp=randint(1000,9999)
        params = {'apikey': 'NTA2NDZhNjgzNDVhNGYzNTZiMzE2YTczNDQ2YzYxNzk=', 'numbers': phnnum, 'message' : 'Welcome to apnaFood by MITHRANJALI FOUNDATION.\nYour OTP for registration is ' + str(otp) + '.', 'sender': 'MTRJLI'}
        f = urllib.request.urlopen('https://api.textlocal.in/send/?'+ urllib.parse.urlencode(params))
        return {'otp' : otp}

@app.get('/email_otp')
async def send_email_otp(email: str = Query(..., max_length=50, min_length=3)):
        sender = "emailotp@mithranjali.org.in"
        receiver =  email
        password = "Orayiram@2020"
        otp=randint(1000,9999)
        message = """
        Please verify your email. Your OTP is - 
        """ + str(otp)

        try:
            server = smtplib.SMTP("mail.mithranjali.org.in", 587)
            server.ehlo()
            server.starttls()
            server.login(sender, password)
            server.sendmail(sender, receiver, message)
        except Exception as e:
            print("Failed to send email. Error:", e)
        server.quit()
        return {'otp' : otp} 

if __name__ == '__main__':
        uvicorn.run(app)
