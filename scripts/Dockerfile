# Use an official Python runtime as a parent image
FROM python:3.8

# Set the working directory in the container
WORKDIR /Users/divitkalathil/Desktop/programming-challenge

# Copy the scripts directory into the container
COPY scripts/ scripts/
COPY data/ data/


# Install any needed dependencies specified in requirements.txt
RUN pip install --no-cache-dir psycopg2

# Run app.py when the container launches
CMD ["python", "scripts/import_data.py"]