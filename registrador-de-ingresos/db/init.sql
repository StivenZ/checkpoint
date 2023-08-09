CREATE DATABASE empresa;

USE empresa;

CREATE TABLE personal (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cedula_personal varchar(50) UNIQUE,
    nombre varchar(50),
    apellidos varchar(50),
    dob DATE,
    tel int,
    email varchar(100),
    tipo varchar(50),
    area varchar(50)
);

CREATE TABLE registro (
    cedula varchar(50),
    fecha DATE,
    hora TIME,
    tipo_registro varchar(50)
);

INSERT INTO personal (nombre, apellidos, cedula_personal, dob, tel, area, tipo, email) VALUES
  ('John', 'Doe', '123456789', '1996-12-25', 1234567, 'marketing', 'empleado', 'john@gmail.com'),
  ('Jane', 'Smith', '987654321', '1990-08-15', 9876543, 'ventas', 'empleado', 'jane@example.com'),
  ('Michael', 'Johnson', '567890129', '1985-03-10', 5678901, 'sistemas', 'empleado', 'michael@example.com'),
  ('David', 'Williams', '654321789', '1999-05-02', 6543219, 'marketing', 'empleado', 'david@example.com'),
  ('Emma', 'Brown', '789012345', '1993-11-18', 7890123, 'ventas', 'empleado', 'emma@example.com'),
  ('Christopher', 'Lee', '456789012', '1988-07-30', 4567890, 'sistemas', 'empleado', 'chris@example.com'),
  ('Olivia', 'Davis', '234567891', '1997-09-05', 2345678, 'admon', 'empleado', 'olivia@example.com'),
  ('James', 'Garcia', '901234567', '1991-04-22', 9012345, 'admon', 'empleado', 'james@example.com'),
  ('Sophia', 'Martinez', '345678901', '1994-12-07', 3456789, 'admon', 'empleado', 'sophia@example.com'),
  ('William', 'Rodriguez', '678901234', '1987-06-14', 6789012, 'admon', 'empleado', 'william@example.com'),
  ('Isabella', 'Lopez', '890123456', '2000-02-11', 8901234, 'admon', 'empleado', 'isabella@example.com'),
  ('Alexander', 'Hernandez', '567890128', '1992-10-26', 5678901, 'admon', 'empleado', 'alexander@example.com'),
  ('Mia', 'Gonzalez', '456789013', '1989-08-09', 4567890, 'admon', 'empleado', 'mia@example.com'),
  ('Ethan', 'Perez', '234567892', '1998-06-03', 2345678, 'admon', 'empleado', 'ethan@example.com'),
  ('Abigail', 'Sanchez', '901234568', '1995-04-17', 9012345, 'admon', 'empleado', 'abigail@example.com'),
  ('Michael', 'Rivera', '345678902', '1986-12-31', 3456789, 'admon', 'empleado', 'michael@example.com'),
  ('Liam', 'Adams', '678901235', '1999-10-28', 6789012, 'admon', 'empleado', 'liam@example.com'),
  ('Emily', 'Campbell', '890123457', '1993-08-14', 8901234, 'admon', 'empleado', 'emily@example.com'),
  ('Noah', 'Murphy', '567890127', '1988-06-27', 5678901, 'admon', 'empleado', 'noah@example.com'),
  ('Ava', 'Cook', '456789014', '1997-05-10', 4567890, 'admon', 'empleado', 'ava@example.com'),
  ('Logan', 'Torres', '234567893', '1991-03-24', 2345678, 'admon', 'empleado', 'logan@example.com'),
  ('Ella', 'Collins', '901234569', '1995-12-09', 9012345, 'admon', 'empleado', 'ella@example.com'),
  ('James', 'Nguyen', '345678903', '1987-10-14', 3456789, 'admon', 'empleado', 'james@example.com'),
  ('Sofia', 'Chang', '678901236', '2000-08-17', 6789012, 'admon', 'empleado', 'sofia@example.com'),
  ('Benjamin', 'Kumar', '567890126', '1994-06-30', 5678901, 'admon', 'empleado', 'benjamin@example.com');

INSERT INTO registro (cedula, fecha, hora, tipo_registro) VALUES
  ('123456789', '2023-07-23', '08:50:00', 'INGRESO'),
  ('987654321', '2023-07-23', '08:51:00', 'INGRESO'),
  ('567890129', '2023-07-23', '08:55:00', 'INGRESO'),
  ('654321789', '2023-07-23', '09:00:00', 'INGRESO'),
  ('789012345', '2023-07-23', '09:01:00', 'INGRESO'),
  ('456789012', '2023-07-23', '09:05:00', 'INGRESO'),
  ('234567891', '2023-07-23', '09:10:00', 'INGRESO'),
  ('901234567', '2023-07-23', '09:15:00', 'INGRESO'),
  ('345678901', '2023-07-23', '09:20:00', 'INGRESO'),
  ('678901234', '2023-07-23', '09:25:00', 'INGRESO'),
  ('890123456', '2023-07-23', '09:30:00', 'INGRESO'),
  ('567890128', '2023-07-23', '09:35:00', 'INGRESO'),
  ('456789013', '2023-07-23', '14:05:00', 'INGRESO'),
  ('234567892', '2023-07-23', '14:05:00', 'INGRESO'),
  ('456789012', '2023-07-23', '15:06:00', 'SALIDA'),
  ('234567891', '2023-07-23', '15:40:00', 'SALIDA'),
  ('901234567', '2023-07-23', '15:56:00', 'SALIDA'),
  ('345678901', '2023-07-23', '15:59:00', 'SALIDA'),
  ('678901234', '2023-07-23', '16:25:00', 'SALIDA'),
  ('890123456', '2023-07-23', '16:30:00', 'SALIDA'),
  ('567890128', '2023-07-23', '16:36:00', 'SALIDA'),
  ('456789013', '2023-07-23', '16:40:00', 'SALIDA'),
  ('345678901', '2023-07-23', '16:59:00', 'INGRESO'),
  ('234567892', '2023-07-23', '17:50:00', 'SALIDA'),
  ('345678901', '2023-07-23', '18:34:00', 'SALIDA'),
  ('789012345', '2023-07-23', '15:01:00', 'SALIDA'),
  ('654321789', '2023-07-23', '16:00:00', 'SALIDA'),
  ('567890129', '2023-07-23', '16:55:00', 'SALIDA'),
  ('987654321', '2023-07-23', '16:56:00', 'SALIDA'),
  ('123456789', '2023-07-23', '16:56:00', 'SALIDA'),
  ('123456789', '2023-07-24', '08:50:00', 'INGRESO'),
  ('987654321', '2023-07-24', '08:51:00', 'INGRESO'),
  ('567890129', '2023-07-24', '08:55:00', 'INGRESO'),
  ('654321789', '2023-07-24', '09:00:00', 'INGRESO'),
  ('789012345', '2023-07-24', '09:01:00', 'INGRESO'),
  ('456789012', '2023-07-24', '09:05:00', 'INGRESO'),
  ('234567891', '2023-07-24', '09:10:00', 'INGRESO'),
  ('901234567', '2023-07-24', '09:15:00', 'INGRESO'),
  ('345678901', '2023-07-24', '09:20:00', 'INGRESO'),
  ('678901234', '2023-07-24', '09:25:00', 'INGRESO'),
  ('890123456', '2023-07-24', '09:30:00', 'INGRESO'),
  ('567890128', '2023-07-24', '09:35:00', 'INGRESO'),
  ('456789013', '2023-07-24', '14:05:00', 'INGRESO'),
  ('234567892', '2023-07-24', '14:05:00', 'INGRESO'),
  ('456789012', '2023-07-24', '15:06:00', 'SALIDA'),
  ('234567891', '2023-07-24', '15:40:00', 'SALIDA'),
  ('901234567', '2023-07-24', '15:56:00', 'SALIDA'),
  ('345678901', '2023-07-24', '15:59:00', 'SALIDA'),
  ('678901234', '2023-07-24', '16:25:00', 'SALIDA'),
  ('890123456', '2023-07-24', '16:30:00', 'SALIDA'),
  ('567890128', '2023-07-24', '16:36:00', 'SALIDA'),
  ('456789013', '2023-07-24', '16:40:00', 'SALIDA'),
  ('345678901', '2023-07-24', '16:59:00', 'INGRESO'),
  ('234567892', '2023-07-24', '17:50:00', 'SALIDA'),
  ('345678901', '2023-07-24', '18:34:00', 'SALIDA'),
  ('789012345', '2023-07-24', '18:01:00', 'SALIDA'),
  ('654321789', '2023-07-24', '18:00:00', 'SALIDA'),
  ('567890129', '2023-07-24', '18:55:00', 'SALIDA'),
  ('987654321', '2023-07-24', '18:51:00', 'SALIDA'),
  ('123456789', '2023-07-24', '18:50:00', 'SALIDA'),
  ('123456789', '2023-07-25', '08:50:00', 'INGRESO'),
  ('987654321', '2023-07-25', '08:51:00', 'INGRESO'),
  ('567890129', '2023-07-25', '08:55:00', 'INGRESO'),
  ('654321789', '2023-07-25', '09:00:00', 'INGRESO'),
  ('789012345', '2023-07-25', '09:01:00', 'INGRESO'),
  ('456789012', '2023-07-25', '09:05:00', 'INGRESO'),
  ('234567891', '2023-07-25', '09:10:00', 'INGRESO'),
  ('901234567', '2023-07-25', '09:15:00', 'INGRESO'),
  ('345678901', '2023-07-25', '09:20:00', 'INGRESO'),
  ('678901234', '2023-07-25', '09:25:00', 'INGRESO'),
  ('890123456', '2023-07-25', '09:30:00', 'INGRESO'),
  ('567890128', '2023-07-25', '09:35:00', 'INGRESO'),
  ('456789013', '2023-07-25', '14:05:00', 'INGRESO'),
  ('234567892', '2023-07-25', '14:05:00', 'INGRESO'),
  ('456789012', '2023-07-25', '15:06:00', 'SALIDA'),
  ('234567891', '2023-07-25', '15:40:00', 'SALIDA'),
  ('901234567', '2023-07-25', '15:56:00', 'SALIDA'),
  ('345678901', '2023-07-25', '15:59:00', 'SALIDA'),
  ('678901234', '2023-07-25', '16:25:00', 'SALIDA'),
  ('890123456', '2023-07-25', '16:30:00', 'SALIDA'),
  ('567890128', '2023-07-25', '16:36:00', 'SALIDA'),
  ('456789013', '2023-07-25', '16:40:00', 'SALIDA'),
  ('345678901', '2023-07-25', '16:59:00', 'INGRESO'),
  ('234567892', '2023-07-25', '17:50:00', 'SALIDA'),
  ('345678901', '2023-07-25', '18:34:00', 'SALIDA'),
  ('789012345', '2023-07-25', '21:01:00', 'SALIDA'),
  ('654321789', '2023-07-25', '21:00:00', 'SALIDA'),
  ('567890129', '2023-07-25', '22:55:00', 'SALIDA'),
  ('987654321', '2023-07-25', '23:51:00', 'SALIDA'),
  ('123456789', '2023-07-25', '23:55:00', 'SALIDA');


-- GET ALL REPORTS
DELIMITER //
CREATE PROCEDURE getAllReports()
BEGIN
SELECT cedula, DATE_FORMAT(fecha, '%Y-%m-%d'), TIME_FORMAT(hora, '%T'), tipo_registro
FROM registro;
END //
DELIMITER ;

-- GET ALL PERSONS
DELIMITER //
CREATE PROCEDURE getAllPersons()
BEGIN
SELECT nombre, apellidos, cedula_personal, dob, tel, area, tipo, email
FROM personal;
END //
DELIMITER ;

-- FILTER REPORTS
DELIMITER //
CREATE PROCEDURE filterReport(
IN cedula_id VARCHAR(50)
)
BEGIN
IF cedula_id = "none" THEN
SELECT nombre, apellidos, tipo, area, cedula, DATE_FORMAT(fecha, '%Y-%m-%d') AS mysql_date, TIME_FORMAT(hora, '%T') AS mysql_time, tipo_registro
FROM personal JOIN registro
ON personal.cedula_personal = registro.cedula;
ELSE
SELECT nombre, apellidos, tipo, area, cedula, DATE_FORMAT(fecha, '%Y-%m-%d') AS mysql_date, TIME_FORMAT(hora, '%T') AS mysql_time, tipo_registro
FROM personal JOIN registro
ON personal.cedula_personal = registro.cedula
WHERE registro.cedula = cedula_id;
END IF;
END //
DELIMITER ;

-- GET ALL REPORTS DETAILS (reports + person details)
DELIMITER //
CREATE PROCEDURE getAllReportsDetails()
BEGIN
SELECT nombre, apellidos, cedula, DATE_FORMAT(fecha, '%Y-%m-%d'), TIME_FORMAT(hora, '%T'), tipo_registro FROM personal JOIN registro
ON personal.cedula_personal = registro.cedula
WHERE personal.cedula_personal = cedula;
END //
DELIMITER ;

-- FULL FILTER
DELIMITER //
CREATE PROCEDURE fullFilter(
IN cedulas TEXT,
IN fecha_desde VARCHAR(50),
IN fecha_hasta VARCHAR(50),
IN hora_desde VARCHAR(50),
IN hora_hasta VARCHAR(50),
IN areas TEXT
)
BEGIN
SELECT nombre, apellidos, cedula, DATE_FORMAT(fecha, '%Y-%m-%d'), TIME_FORMAT(hora, '%T'), tipo_registro, tipo, area
FROM personal JOIN registro
ON personal.cedula_personal = registro.cedula
WHERE fecha BETWEEN IF(fecha_desde = '', "1000-01-01", fecha_desde) AND IF(fecha_hasta = '', "9999-12-31", fecha_hasta)
AND hora BETWEEN IF(hora_desde = '', "00:00:00", hora_desde) AND IF(hora_hasta = '', "23:59:59", hora_hasta)
AND IF(cedulas != "", FIND_IN_SET(cedula_personal, cedulas), cedulas != 'none')
AND IF(areas != "", FIND_IN_SET(area, areas), areas != 'none');
END //
DELIMITER ;

-- FULL FILTER ALL PERSON (CEDULAS = 0)
DELIMITER //
CREATE PROCEDURE allPersonsFullFilter(
IN fecha_desde VARCHAR(50),
IN fecha_hasta VARCHAR(50),
IN hora_desde VARCHAR(50),
IN hora_hasta VARCHAR(50),
IN areas TEXT
)
BEGIN
SELECT nombre, apellidos, cedula, DATE_FORMAT(fecha, '%Y-%m-%d'), TIME_FORMAT(hora, '%T'), tipo_registro, tipo, area
FROM personal JOIN registro
ON personal.cedula_personal = registro.cedula
WHERE fecha BETWEEN IF(fecha_desde = 'none', "1000-01-01", fecha_desde) AND IF(fecha_hasta = 'none', "9999-12-31", fecha_hasta)
AND hora BETWEEN IF(hora_desde = 'none', "00:00:00", hora_desde) AND IF(hora_hasta = 'none', "23:59:59", hora_hasta)
AND FIND_IN_SET(area, areas);
END //
DELIMITER ;

-- CALL fullFilter("123456789,987654321", "none", "none", "none", "none", "marketing");