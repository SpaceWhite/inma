import connexion
import six

from swagger_server.models.hospital import Hospital  # noqa: E501
from swagger_server.models.hospital_list import HospitalList  # noqa: E501
from swagger_server import util


def get_hospital(id, language=None):  # noqa: E501
    """Get hospital detail

    Get hospital detail by &#x60;id&#x60; # noqa: E501

    :param id: 
    :type id: int
    :param language: 
    :type language: str

    :rtype: Hospital
    """
    return 'do some magic!'


def get_hospital_list(longitude=None, latitude=None):  # noqa: E501
    """Get list of hospital

     # noqa: E501

    :param longitude: 
    :type longitude: float
    :param latitude: 
    :type latitude: float

    :rtype: HospitalList
    """
    return 'do some magic!'
