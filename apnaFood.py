import uvicorn
from fastapi import FastAPI, File, UploadFile, Form
from fastapi import Query,Body
import smtplib
from random import randint

app = FastAPI(title="Apna Food", version="1.0")
@app.get('/hello')
def hello_world():
        return 'Hello World'

@app.get('/email_otp')
async def send_email_otp(email: str = Query(..., max_length=50, min_length=3)):
        sender = "emailotp@mithranjali.org.in"
        receiver =  email
        password = "Orayiram@2020"
        otp=randint(1000,9999)
        message = """
        Subject: OTP for email verification.

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
