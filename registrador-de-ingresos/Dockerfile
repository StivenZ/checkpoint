FROM python

WORKDIR /app

RUN python -m pip install --upgrade pip

COPY requirements.txt .

RUN pip install -r requirements.txt

EXPOSE 7007

COPY . .

WORKDIR /app/registrador

CMD [ "python", "rest.py" ]