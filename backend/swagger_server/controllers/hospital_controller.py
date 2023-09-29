import connexion
import six

from swagger_server.models.hospital import Hospital  # noqa: E501
from swagger_server.models.hospital_list import HospitalList  # noqa: E501
from swagger_server.models.supported_languages import SupportedLanguages  # noqa: F401,E501
from swagger_server import util
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
import ast
db = SQLAlchemy()

def get_hospital(hospital_id, language=None):  # noqa: E501
    """Get hospital detail

    Get hospital detail by &#x60;id&#x60; # noqa: E501

    :param hospital_id: 
    :type hospital_id: int
    :param language: 
    :type language: str

    :rtype: Hospital
    """

    data = [{
        "id":1,
        'longitude': 35.6577,
        'latitude': 136.87870,
        'name': "クリニッexamination_typesクA",
        'address': "中野",
        'supported_languages': ["en"],
        'examination_types': ["doctor", "dentist"],
        'business_hours': [{
                            "day": "Wednesday",
                            "from": "10:00",
                            "to":"12:00"
                            }
                            ],
        'post_number': "910-0283",
        'telephone': "873496329",
        'website': "XXX.gmail.com"
    }, {
        "id":2,
        'longitude': 35.4577,
        'latitude': 136.87870,
        'name': "クリニックB",
        'address': "中野",
        'supported_languages': ["kr","ch"],
        'examination_types': ["doctor"],
        'business_hours': [{
                            "day": "Tuesday",
                            "from": "12:00",
                            "to":"17:00"
                            }
                            ],
        'post_number': "910-0383",
        'telephone': "8734456329",
        'website': "XXX.gmail.com"
    }, {
        "id":3,
        'longitude': 32.6557534,
        'latitude': 133.87450,
        'name': "クリニックC",
        'address': "中野",
        'supported_languages': ["en"],
        'examination_types': ["doctor"],
        'business_hours': [{
                            "day": "Monday",
                            "from": "15:00",
                            "to":"17:00"
                            }
                            ],
        'post_number': "910-0283",
        'telephone': "8734534329",
        'website': "XXX.gmail.com"
    }]
    return Hospital(**(data[hospital_id]))

#, **(data2[hospital_id]),**(data3[hospital_id])
def get_hospital_list(longitude=None, latitude=None, language=None):  # noqa: E501
    """Get list of hospital

     # noqa: E501

    :param longitude: 
    :type longitude: float
    :param latitude: 
    :type latitude: float
    :param language: 
    :type language: str

    :rtype: HospitalList
    """
    #Test if database is running or not
    test = db.session.execute(text('SELECT * FROM hospital limit 1'))
    print(test)
    data_try = db.session.execute(text('''SELECT 
                                       json_group_array(
                                       json_object(
                                       'name', name,
                                       'address', address,
                                       'telephone', telephone
                                       'examination_type', examination_type,
                                       'supported_languages', supported_languages
                                       )
                                       )
                                       FROM hospital where supported_languages = '中国語' ''' )).fetchall()
    for i in data_try :
        for j in i:
            data = ast.literal_eval(j)

    return HospitalList(data)