import connexion
import six

from swagger_server.models.hospital import Hospital  # noqa: E501
from swagger_server.models.hospital_list import HospitalList  # noqa: E501
from swagger_server.models.supported_languages import SupportedLanguages  # noqa: F401,E501
from swagger_server import util


def get_hospital(hospital_id, language=None):  # noqa: E501
    """Get hospital detail

    Get hospital detail by &#x60;id&#x60; # noqa: E501

    :param hospital_id: 
    :type hospital_id: int
    :param language: 
    :type language: str

    :rtype: Hospital
    """
    #return 'do some magic!'
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

    data = [{
        "id":1,
        'longitude': 35.6577,
        'latitude': 136.87870,
        'name': "クリニックA",
        'supported_languages': ["en"],
    }, {
        "id":2,
        'longitude': 35.4577,
        'latitude': 136.87870,
        'name': "クリニックB",
        'supported_languages': ["ch", "kr"],
    }, {
        "id":3,
        'longitude': 32.6557534,
        'latitude': 133.87450,
        'name': "クリニックC",
        'supported_languages': [],
    }]

    return HospitalList(data)