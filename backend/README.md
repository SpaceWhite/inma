# Backend

Data list
- All hospital data by bureau of public health (https://catalog.data.metro.tokyo.lg.jp/dataset/t000003d0000000437/resource/c8cb2c02-de02-40f2-841d-d64e85938672) / (data/all.csv)
- Hospital data in nakano-ku  (https://catalog.data.metro.tokyo.lg.jp/dataset/t131148d0000000014/resource/fa3a5a50-f2d2-40c8-b1b7-5dc0ec5350ee) / (data/nakano.csv)
- Hospital data in machida-ku (https://catalog.data.metro.tokyo.lg.jp/dataset/t132098d0000000109/resource/173acc4c-281a-4e65-aa35-68cc19068f61) / (data/machida-.xlsx)

JSON Data API (Fake data for testing)
- By using the id (1,2,3), we can get the list of hospital data
- From the list, we can get {longitude, latitude, name of the clinic, address, supported language, examination types, business hours, post number of the clinic, telephone number, dan website}



## Prequisite
python 3


## How to run

Install dependencies
```
pip install -r requirements.txt
```

Run server
```
python3 -m swagger_server
```