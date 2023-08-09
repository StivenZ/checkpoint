from typing import List
import pymysql
from app import app
from db import mysql
from flask import jsonify, request
from flask_cors import cross_origin
import mysql.connector

dbs = {
  "personal": "personal",
  "registro": "registro",
  "procedures": {
    "allReports": "getAllReports()",
    "allPersons": "getAllPersons()"
  }
}

allAreas = "marketing,ventas,sistemas,admon"
def connect():
  # return pymysql.connect(host='db', user='root', passwd='root', db='empresa')
  conn = mysql.connector.connect(host = "db",
                  user = 'root',
                  password = 'root',
                  database = 'empresa',
                  auth_plugin='mysql_native_password')

  c = conn.cursor()
  return c , conn

# compute seconds in certain day time
def count_time(hora: str):
  total_seconds = 0
  tiempos = hora.split(":")
  total_seconds += (int(tiempos[0]) * 60 * 60) + (int(tiempos[1]) * 60) + int(tiempos[2])
  return total_seconds

# check if person exists
@app.route('/check-person', methods=['POST'])
def check_person():
  if request.method == 'POST':
    response = {}
    data = request.json
    cedula = data.get('cedula')
    print("cedula", cedula)
    query = f"SELECT nombre, tipo FROM {dbs['personal']} WHERE cedula_personal = {cedula};"
    cursor, connection = connect()
    cursor.execute(query)
    datos = cursor.fetchall()

    print("datos type", type(datos))
    print("datos", datos)
    if len(datos) == 0:
      response = {
        "message": "not registered",
      }
    elif len(datos) == 1:
      response = {
        "message": "person exists",
        "person": datos
      }
    connection.close()
    return response


@app.route('/checkpoint', methods=['POST'])
def checkpoint():
  if request.method == 'POST':
    cedula = request.json

    return {
      "checkpoint": "ingreso",
      "message": "request successful",
      "cedula": cedula
    }
  
# TODO: test this endpoint
@app.route('/new-visitor', methods=['POST'])
# @cross_origin()
def new_visitor():
	
  if request.method == 'POST':
    request_data = request.get_json()
    person = {
      'nombre': request_data['nombre'],
      'apellidos': request_data['apellidos'],
      'cedula': request_data['cedula'],
      'tel': request_data['tel'],
    }

    query = f"INSERT INTO {dbs['personal']} (nombre, apellidos, cedula_personal, tel, tipo) VALUES ('{person['nombre']}', '{person['apellidos']}', {person['cedula']}, {person['tel']}, 'visitante');"
    cursor, connection = connect()
    cursor.execute(query)
    connection.commit()
    connection.close()

    return {
      "message": "visitante registrado",
      "visitante": person.nombre
    }


@app.route('/new-person', methods=['POST'])
# @cross_origin()
def new_person():
  request_data = request.get_json()
  person = {
    'nombre': request_data['nombre'],
    'apellidos': request_data['apellidos'],
    'cedula': request_data['cedula'],
    'dob': request_data['dob'],
    'tel': request_data['tel'],
    'email': request_data['email'],
    'tipo': request_data['tipo'],
  }

  if request_data['tipo'] == 'empleado':
    person['area'] = request_data['area']
  else:
    person['area'] = 'none'


  query = f"INSERT INTO {dbs['personal']} (nombre, apellidos, dob, cedula_personal, tel, area, tipo, email) VALUES ('{person['nombre']}', '{person['apellidos']}', '{person['dob']}', {person['cedula']}, {person['tel']}, '{person['area']}', '{person['tipo']}', '{person['email']}');"
  cursor, connection = connect()
  cursor.execute(query)
  connection.commit()
  datos = cursor.execute("SELECT * FROM {dbs['personal']}")
  connection.close()
  return {
	"data": datos
  }

# GET ALL PERSONS
@app.route('/persons', methods=['GET'])
# @cross_origin()
def persons():
  if request.method == 'GET':
    cursor, connection = connect()
    # cursor.callproc(dbs['procedures']["allPersons"])
    cursor.callproc("getAllPersons")
    results = cursor.stored_results()
    parsedResult = []

    for row in results:
      parsedResult = row.fetchall()
    personas = []

    for persona in parsedResult:
      personas.append({
        'nombre': persona[0],
        'apellidos': persona[1],
        'cedula': persona[2],
        'dob': persona[3],
        'tel': persona[4],
        'area': persona[5],
        'tipo': persona[6],
        'email': persona[7],
      })

    connection.close()
    return {
    "data": personas,
    }

# GET ALL REPORTS
@app.route('/reports', methods=['GET'])
# @cross_origin()
def reports():
  if request.method == 'GET':
    cursor, connection = connect()
    # cursor.callproc(dbs['procedures']["allPersons"])
    cursor.callproc("getAllReports")
    results = cursor.stored_results()
    parsedResult = []

    for row in results:
      parsedResult = row.fetchall()
    registros = []
    for registro in parsedResult:
      registros.append({
        'cedula': registro[0],
        'fecha': registro[1],
        'hora': registro[2],
        'tipo_registro': registro[3],
      })

    connection.close()
    return {
    "data": registros
    }

@app.route('/persons-count', methods=['GET'])
# @cross_origin()
def persons_count():
  if request.method == 'GET':
    cursor, connection = connect()
    query = f"SELECT COUNT(DISTINCT cedula_personal) FROM {dbs['personal']}"
    cursor.execute(query)
    datos = cursor.fetchall()
    connection.close()
    return {
    "data": datos[0][0],
    }


# TODO: test endpoint
@app.route('/filter', methods=['POST'])
def filter():
  if request.method == 'POST':
    request_data = request.get_json()

    # if request_data['tipo'] == 'empleado' and len(request_data['area']) != 0:
    #   filters['area'] = request_data['area']
    # else:
    #   filters['area'] = 'none'

    cursor, connection = connect()
    registros = []
    if len(request_data['cedula']) != 0:
      for cedula in request_data['cedula']:
        cursor.callproc("filterReport", [cedula if len(cedula) != 0 else "none"])
        results = cursor.stored_results()
        parsedResult = []
        for row in results:
          parsedResult = row.fetchall()
        for registro in parsedResult:
          registros.append({
            'nombre': registro[0],
            'apellidos': registro[1],
            'tipo': registro[2],
            'area': registro[3],
            'cedula': registro[4],
            'registro': {
              'fecha': registro[5],
              'hora': registro[6],
              'tipo_registro': registro[7],
            },
          })

    connection.close()
    return {
    "data": registros
    }

# TODO: test endpoint
@app.route('/full-filter', methods=['POST'])
def full_filter():
  if request.method == 'POST':
    request_data = request.get_json()

    cursor, connection = connect()
    registros = []
    cedulas_list = ""
    areas = ""
    fecha_desde = ""
    fecha_hasta = ""
    hora_desde = ""
    hora_hasta = ""

    if request_data.get('areas') != None and len(request_data['areas']) == 0:
      areas = allAreas
    if request_data.get('fechas') != None:
      fecha_desde = request_data['fechas']['desde']
      fecha_hasta = request_data['fechas']['hasta']
    if request_data.get('horas') != None:
      hora_desde = request_data['horas']['desde']
      hora_hasta = request_data['horas']['hasta']

    if len(request_data['cedula']) != 0:
      for cedula in request_data['cedula']:
        if len(cedula) > 0:
          cedulas_list += f"{cedula},"
    if len(request_data['areas']) != 0:
      for area in request_data['areas']:
        if len(area) > 0:
          areas += f"{area},"
    cursor.callproc("fullFilter", [cedulas_list, fecha_desde, fecha_hasta, hora_desde, hora_hasta, areas])

    results = cursor.stored_results() 
    parsedResult = []
    for row in results:
      parsedResult = row.fetchall()

    ingreso_counter = 0
    egreso_counter = 0
    for registro in parsedResult:
      if registro[5] == "INGRESO":
        ingreso_counter += count_time(registro[4])
      else:
        egreso_counter += count_time(registro[4])

      registros.append({
        'nombre': registro[0],
        'apellidos': registro[1],
        'cedula': registro[2],
        'registro': {
          'fecha': registro[3],
          'hora': registro[4],
          'tipo_registro': registro[5],
        },
        'tipo': registro[6],
        'area': registro[7],
      })
    connection.close()

    return {
    "data": registros,
    'horas': egreso_counter - ingreso_counter
    }


# GET ALL REPORTS DETAILS
@app.route('/reports-details', methods=['GET'])
def reports_details():
  if request.method == 'GET':
    cursor, connection = connect()
    cursor.callproc("getAllReportsDetails")
    results = cursor.stored_results()
    parsedResult = []

    for row in results:
      parsedResult = row.fetchall()
    registros = []
    for registro in parsedResult:
      registros.append({
        'nombre': registro[0],
        'apellidos': registro[1],
        'cedula': registro[2],
        'registro': registro[3],
        'tipo_registro': registro[4],
      })

    connection.close()
    return {
    "data": registros
    }
# main driver function
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=7007)