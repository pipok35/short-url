# Short-url

short-url is an application for shortening long urls.

## Stack

React + Express + MongoDB

## Installation without Docker

```bash
npm install
cd client
npm install
```

### Start server
from the root folder of the project:
```bash
npm run server
```

### Start client

```bash
cd client
npm start
```

### Start full app (server + client)
from the root folder of the project:
```bash
npm run dev
```

## Launch with Docker

```bash
docker-compose up
```

## Env variables

create .env file in project root directory and write your data there

```bash
PORT = YOUR_PORT
MONGO_URL = 'YOUR MONGO_URL'
```

## Usage
Insert a long url, enter any domain name and click the button "сократить"
