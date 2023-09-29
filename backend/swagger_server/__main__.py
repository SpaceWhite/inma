#!/usr/bin/env python3

import connexion

from swagger_server import encoder
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from .controllers.hospital_controller import db
import os

basedir = os.path.abspath(os.path.dirname(__file__))

def main():
    app = connexion.App(__name__, specification_dir='./swagger/')
    CORS(app.app)
    app.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, '../data/database.sqlite')
    print(app.app.config['SQLALCHEMY_DATABASE_URI'] )
    db.init_app(app.app)
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'Swagger Hospital map - OpenAPI 3.0'}, pythonic_params=True)
    app.run(port=8080)

if __name__ == '__main__':
    main()
