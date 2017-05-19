IF NOT EXIST dist ( md dist )
start /b ng build -w
sleep 15 && copy src\electron\* dist && electron .
