import time
import boto3
from datetime import datetime
import os
from s3_config import AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_DEFAULT_REGION, S3_BUCKET_NAME

def ship_logs(log_file, log_type):
    s3 = boto3.client('s3',
                      aws_access_key_id=AWS_ACCESS_KEY_ID,
                      aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
                      region_name=AWS_DEFAULT_REGION)
    

    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    s3_key = f"{log_type}-{timestamp}.log"
    
    with open(log_file, 'rb') as file:
        s3.upload_fileobj(file, S3_BUCKET_NAME, s3_key)
    
    
    
    # Truncate the log file after shipping
    open(log_file, 'w').close()
    print(f"\tShipped {log_type} logs to S3: {s3_key} and truncated the log file.")

def main():
    while True:
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{current_time}] Shipping logs to s3...")
        ship_logs('/var/log/nginx/access.log', 'access')
        ship_logs('/var/log/nginx/error.log', 'error')
        
        # Wait for 5 minutes before the next shipment
        time.sleep(300)

if __name__ == "__main__":
    main()