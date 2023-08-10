# Checkpoint

Checkpoint is an application to help business owners and admins to see in real time how many people is in the company's facility.
They could also filter people by name, role, date, and time. They could easily see how many hours have been spent in the facility
for each filtered group.

These features can help organizations manage reports and schedules, and handle urgency situations such as evacuations.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will guide you through setting up and running the project on your local machine.
Open "registrador-de-ingresos" and "time-monitor" on two different terminals.

### Prerequisites

Before you begin, make sure you have the following installed:
In the "time-monitor" make sure you have:

- node v16.14.2 or higher
- npm 8.5.0 or higher

In the "registrador-de-ingresos" terminal make sure you have:

- docker
Also make sure docker is installed and running. You can check it by running the following command:
```bash
# check installation
docker --version

#check if running
docker ps
```

if no error logs then we're ready to go!

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/StivenZ/checkpoint.git

   cd ./checkpoint/time-monitor/
   npm install
   npm start

   # in another terminal:
   cd ./checkpoint/registrador-de-ingresos/
   docker-compose up --build

   # to shut down containers
   docker-compose down
   ```

## Usage

The main page is used as the checkpoint where employees can check-in with their IDs (cedula in Colombia).
Click on "iniciar sesión"
Select any role and enter any number to login. Authentication and Authorization are still work in progress.
Once logged in, check the records on the tables that represent mock data of employees flow in and out.
Use the filters to see the time worked by selection.