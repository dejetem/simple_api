## Prerequisites:
- Node v~12.16.0
- npm v~6.14.5
- MongoDB Atlas URI

## Setup:
- `cd server`
- `run npm install`
- `update MongoDB Atlas URI in .env`
- `run npm start`

## Api
- Base `http://localhost:8000/api/thing`

## Api routes are in the routes folder

### - getAllThing
- get('/') 

### - createThing
- post('/') 

### - getOneThing
- get('/:id') 

### - modifyThing
- put('/:id') 

### - deleteThing
- delete('/:id') 

## Test API endpoint on swagger [http://localhost:8000/api-docs/]

