import datetime
import pywhatkit

date,month,year=map(int,input("DOB of your frined? In (dd mm yyyy): ").split())

phone=input("The persons Phone Number(eg- +919876543210): ")

msg=input("The message you wanna send, leave empty if you want just 'Happy birthday': " )
if msg=="":
    msg="Happy Birthday!"

hour_send,min_send=map(int,input("The time at which you want to send the messagein 24 hour format(HH MM) : ").split())

bday=datetime.date(year,month,date)
if datetime.date.today()==bday:
    pywhatkit.sendwhatmsg(phone,msg,hour_send,min_send)
    print("the message will be sent on time")
    print("Make sure to keep your whatsapp logged in your PC and ofcourse keep your PC switched on")

