from flask import Flask, jsonify
from flask_cors import CORS
import cash

app = Flask(__name__)
CORS(app)


@app.route('/api/summary')
def summary():
    return jsonify(cash.get_summary())


@app.route('/api/line')
def line_chart():
    return jsonify(cash.line_chart_data())


@app.route('/api/bar')
def bar_chart():
    return jsonify(cash.bar_chart_data())


@app.route('/api/transactions')
def transactions():
    return jsonify(cash.transaction_table())


if __name__ == '__main__':
    app.run(debug=True)
