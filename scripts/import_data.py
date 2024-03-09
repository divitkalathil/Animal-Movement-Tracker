import csv
import psycopg2

# Function to connect to the PostgreSQL database
def connect_to_database():
    try:
        conn = psycopg2.connect(
            dbname="test_db",
            user="divitkalathil",
            password="root",
            host="localhost",
            port="5432"
        )
        return conn
    except psycopg2.Error as e:
        print("Error connecting to the database:", e)
        return None

# Function to import data from movements.csv into Movements table
# Function to import data from movements.csv into Movements table
def import_movements_data(conn):
    try:
        cursor = conn.cursor()
        with open('../data/movement.csv', 'r') as file:  # Corrected file path
            reader = csv.DictReader(file)
            for row in reader:
                cursor.execute("""
                    INSERT INTO Movements (new_originpremid, new_destinationpremid, new_numitemsmoved, new_movementreason, new_species, new_shipmentsstartdate)
                    VALUES (%s, %s, %s, %s, %s, %s)
                """, (
                    row['new_originpremid'],
                    row['new_destinationpremid'],
                    row['new_numitemsmoved'],
                    row['new_movementreason'],
                    row['new_species'],
                    row['new_shipmentsstartdate']
                ))
        conn.commit()
        print("Data imported successfully into Movements table.")
    except Exception as e:
        conn.rollback()
        print("Error importing data into Movements table:", e)

# Function to import data from population.csv into Farms table
def import_farms_data(conn):
    try:
        cursor = conn.cursor()
        with open('../data/population.csv', 'r') as file:  # Corrected file path
            reader = csv.DictReader(file)
            for row in reader:
                cursor.execute("""
                    INSERT INTO Farms (premiseid, total_animal)
                    VALUES (%s, %s)
                """, (
                    row['premiseid'],
                    row['total_animal']
                ))
        conn.commit()
        print("Data imported successfully into Farms table.")
    except Exception as e:
        conn.rollback()
        print("Error importing data into Farms table:", e)

if __name__ == "__main__":
    # Connect to the database
    connection = connect_to_database()
    if connection:
        # Import data into Farms table
        import_farms_data(connection)
        # Import data into Movements table
        import_movements_data(connection)
        # Close database connection
        connection.close()
