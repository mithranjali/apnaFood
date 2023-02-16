from flask import Flask
import smtplib
from random import randint

app = Flask(__name__)
@app.route('/hello')
def hello_world():
        return 'Hello World'

@app.route('/')
def send_email_otp():
        sender = "emailotp@mithranjali.org.in"
        receiver = "sripriyamaturi8@gmail.com"
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
        

if __name__ == '__main__':
        app.run()
