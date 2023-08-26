with open("../data/all.csv") as all_csv:
    all_hospitals = all_csv.read().split("\n")

with open("../data/nakano.csv") as nakano_csv:
    nakano_hospitals = nakano_csv.read().split("\n")


phone1 = []
for i, hospital1 in enumerate(all_hospitals):
    hospital1 = hospital1.split(",")
    if len(hospital1) > 4:
        phone1.append(hospital1[4])

phone2 = []
for i, hospital2 in enumerate(nakano_hospitals):
    hospital2 = hospital2.split(",")
    if len(hospital2) > 11:
        phone2.append(hospital2[11])

data = {}
phone3 = list(set(phone1).intersection(phone2))
for i, hospital in enumerate(all_hospitals):
    hospital = hospital.split(",")
    if len(hospital) > 4:
        phone = hospital[4]
        if phone in phone3:
            data[phone] = {
                "name": hospital[1],
                "address": hospital[2],
                "postOffice": hospital[3],
                "phone": hospital[4],
                "website": hospital[5],
                "languages": hospital[37],
            }

for i, hospital in enumerate(nakano_hospitals):
    hospital = hospital.split(",")
    if len(hospital) <= 11 or i == 0:
        continue
    phone = hospital[11]
    if data.get(phone, ""):
        data[phone]["types"] = (";".join(hospital[22:])).split(";")

print(data)


