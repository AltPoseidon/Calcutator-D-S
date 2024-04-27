from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/process_data', methods=['POST'])
def process_data():
    # Retrieve data from the request
    data = request.json['data']
    
    # Process the data (example: reversing a string)
    result = data[::-1]

    # Return the result as JSON
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)