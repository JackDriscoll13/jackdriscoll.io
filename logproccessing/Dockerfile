FROM python:3.11-alpine

RUN pip install boto3

COPY send_logs.py /send_logs.py
COPY s3_config.py /s3_config.py

CMD ["python", "/send_logs.py"]