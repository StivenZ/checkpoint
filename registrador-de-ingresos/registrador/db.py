from app import app
from flaskext.mysql import MySQL

mysql = MySQL()

# MySQL configurations
app.config["CORS_HEADERS"] = "Content-Type"
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'empresa'
app.config['MYSQL_DATABASE_HOST'] = 'db'
mysql.init_app(app)