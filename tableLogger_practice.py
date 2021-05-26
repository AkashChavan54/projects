from table_logger import TableLogger
from datetime import datetime
import math
import random


def solve(a,b):
  for i in range(1, 100000):
    time_start = datetime.now()
    tbl(x, datetime.now(), "entity_name", i, "pass/fail", datetime.now() - time_start, "true/false")
  return(a+b)

def abx(a,b):
  for i in range(150, 100,-1):
    time_start = datetime.now()
    tbl2(x, datetime.now(), "entity_name", i, "pass/fail")
  return(a-b)

x=datetime.now()
tbl = TableLogger(timestamp=False,columns=["start",'end_time','entity_name',"row_count","test_case_result","time_for_test_case","primary_key_check_flag"], border=True, csv=True, formatters=None, float_format=None, colwidth=None, default_colwidth=None, file='test1.csv', encoding='utf-8')
tbl2 = TableLogger(timestamp=True,columns=["start",'end_time','entity_name',"row_count","test_case_result"], border=True, csv=True, formatters=None, float_format=None, colwidth=None, default_colwidth=None, file='test2.csv', encoding='utf-8')

for i in range(50):
  time_start=datetime.now()
  tbl(time_start , datetime.now() , "entity_name" ,i , "pass/fail" , datetime.now()-time_start , "true/false" )



print(solve(5,10))
abx(10,6)
