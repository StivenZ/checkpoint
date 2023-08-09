from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)
# app.config["CORS_HEADERS"] = "Content-Type"
# resources = {r"/api/*": {"origins": "*"}}
# CORS(app, resources={r"/*": {"origins": "*"}})
# app.config['JSON_SORT_KEYS'] = False