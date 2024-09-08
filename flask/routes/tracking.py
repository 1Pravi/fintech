from flask import Blueprint, jsonify
import json

tracking_blueprint = Blueprint('tracking', __name__)


@tracking_blueprint.route('/drugs', methods=['GET'])
def get_drug_data():
    with open('./static/data/drugs.json') as f:
        drugs_data = json.load(f)
    return jsonify(drugs_data)


@tracking_blueprint.route('/vendors', methods=['GET'])
def get_vendor_data():
    # Placeholder for fetching vendor data
    return jsonify({"vendors": "Vendor activity data goes here"})


@tracking_blueprint.route('/consumption', methods=['GET'])
def get_consumption_data():
    with open('./static/data/conn.json') as f:
        drugs_conn = json.load(f)
    return jsonify(drugs_conn)
