# Programming challenge

Brief description of the project.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Stopping the Application](#stopping-the-application)
- [Contributing](#contributing)
- [License](#license)

## Description

In food animal systems, animals move to different farms as they age. Each farm has a unique ID and must keep a record of the movement of animals from one farm to another. Here, we present some fictitious records of movements among pig farms.

## Mandatory
 #### Task needs to run with "docker compose up"

*Description of the data folder* 

*	*movements*: all records of animal movements 
    -  new_originpremid - column with the ID of the origin farm 
    -  new_destinationpremid - column with the ID of the destination farm 
    -  new_numitemsmovedcolumn - column with the number of moved animals

*	*population*: complete list of the farms
    -  premiseid - column with the ID of the farms
    -  total_animal - column with the current number of animals for the farm
 
   ## Challenge
The challenge is to create a system to visualize the movement records. This
system have to follow the requirements bellow:

- Has to be composed of 3 components: a REST API, a SPA WEB client, and a
  relational database;
- The relational database can be any database that you like, PostgreSQL, MariaDB
  etc..;
- The data provided in this repo should be imported into the database;
- The REST API has to written in Java, Python or Typescript. It can use any
  framework/library that you desire;
- The Web Client have to written in Typecript, and you can use any *SPA
  framework/library* that you desire, ex Angular, React, etc...;
- Your submitted project should include instructions on how to run it;

The submitted project will be evaluated considering your experience. For example, a
person with a background in backend development will be evaluated with higher
expectations of the API and database code. A UI person will be evaluated with
higher expectations on the design of the UI.

## Prerequisites

Docker and Docker Compose.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/divitkalathil/Machado-Labs-Assignment.git
    ```

2. Navigate to the root directory of the project:

    ```bash
    cd project
    ```

3. Build the Docker containers:

    ```bash
    docker-compose build
    ```

## Usage

1. Start the Docker containers:

    ```bash
    docker-compose up -d
    ```

   This command will start the PostgreSQL database, pgAdmin, Python application, Express.js server, and React application containers in detached mode.

2. Access the pgAdmin interface:

    Navigate to `http://localhost:5050` in your web browser. Use the provided credentials to log in.

3. Execute PostgreSQL queries:

    Use the following command to connect to the PostgreSQL database container and open a PostgreSQL shell for the `test_db` database:

    ```bash
    docker-compose exec db psql -U divitkalathil -d test_db
    ```

4. Interact with the Python application, Express.js server, and React application as per their functionalities.

## Stopping the Application

To stop the Docker containers, run:

```bash
docker-compose down
