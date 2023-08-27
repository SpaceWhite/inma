# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.hospital import Hospital  # noqa: E501
from swagger_server.models.hospital_list import HospitalList  # noqa: E501
from swagger_server.test import BaseTestCase


class TestHospitalController(BaseTestCase):
    """HospitalController integration test stubs"""

    def test_get_hospital(self):
        """Test case for get_hospital

        Get hospital detail
        """
        query_string = [('language', 'language_example')]
        response = self.client.open(
            '/api/v1/hospital/{hospital_id}'.format(hospital_id=789),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_hospital_list(self):
        """Test case for get_hospital_list

        Get list of hospital
        """
        query_string = [('longitude', 1.2),
                        ('latitude', 1.2),
                        ('language', 'language_example')]
        response = self.client.open(
            '/api/v1/hospital',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
