FROM python:3.11-alpine

RUN pip install boto3

COPY ship_logs.py /ship_logs.py
COPY config.py /config.py

CMD ["python", "/ship_logs.py"]