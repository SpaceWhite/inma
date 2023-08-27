from sklearn.preprocessing import LabelEncoder

le = LabelEncoder()

with open("data/all.csv") as all_csv:
    all_hospitals = all_csv.read().split("\n")[1:]

with open("data/nakano.csv") as nakano_csv:
    nakano_hospitals = nakano_csv.read().split("\n")[1:]

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
remove_li = ["0", "1", "173", "199", "37", "110", "415", "116", "3", "92", "37"]
unique_val = []

for i, hospital in enumerate(nakano_hospitals):
    hospital = hospital.split(",")
    if len(hospital) <= 11 or i == 0:
        continue
    phone = hospital[11]
    if data.get(phone, ""):
        data[phone]["types"] = (";".join(hospital[22:])).split(";")
        data[phone]["types"] = ("、".join(data[phone]["types"])).split("、")
        for rem in remove_li :
            if rem in data[phone]["types"]:
                p = data[phone]["types"].index(rem)
                data[phone]["types"] = data[phone]["types"][:p]
        
        for j in data[phone]["types"]:
            if j not in unique_val:
                unique_val.append(j)
        
        if len(data[phone]["languages"]) < 1:
            data[phone]["languages"] = data[phone]["languages"].replace("", "japanese")
        if len(data[phone]["website"]) < 1:
            data[phone]["website"] = data[phone]["website"].replace("", "Not available")
        
        data[phone]["longitude"] = hospital[10]
        data[phone]["latitude"] = hospital[9]
        
        data[phone]["types_cat"] = le.fit_transform(data[phone]["types"])

        #print(data[phone]["types"], data[phone]["types_cat"]) 
            
print(len(unique_val))
#print(data)