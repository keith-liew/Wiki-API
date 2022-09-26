# Wiki-API
> A simple Express.js and MongoDB RESTful API

<!-- Live demo [_here_](https://www.example.com).  If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Results](#results)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [P.S.](#postscripts)


## General Information
- It is a practical project
- The API is build according to the RESTful archietecture
- It is created for self-education purpose only


## Technologies Used
- body-parser: ^1.20.0
- express: ^4.18.1
- mongoose: ^6.6.1
- dotenv: ^16.0.2


## Features
- Perform CRUD function to the database with HTTP requests


## Results
- http://localhost/v1/articles (v1, without params)
1. GET request
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 1710
ETag: W/"6ae-aCy5fg0wLMphevlG7xqV+sldev4"
Date: Mon, 26 Sep 2022 13:21:09 GMT
Connection: close

[
  {
    "_id": "633008ecad5fe5428092c1a3",
    "title": "REST",
    "content": "REST is short for Representational State Transfer, It's an architectural style for designing APIs.",
    "__v": 0,
    "createdAt": "2022-09-26T12:46:51.094Z",
    "updatedAt": "2022-09-26T12:46:51.094Z"
  },
  {
    "_id": "633008ecad5fe5428092c1a4",
    "title": "API",
    "content": "API stand for Application Programming Interface. It is a set of subroutine definition, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks which are then put together by the programmer.",
    "__v": 0,
    "createdAt": "2022-09-26T12:46:51.095Z",
    "updatedAt": "2022-09-26T12:46:51.095Z"
  },
  {
    "_id": "633008ecad5fe5428092c1a5",
    "title": "Bootstrap",
    "content": "This is a gramework developed by Twitter that contains pre-made front-end templates for web design",
    "__v": 0,
    "createdAt": "2022-09-26T12:46:51.095Z",
    "updatedAt": "2022-09-26T12:46:51.095Z"
  },
  {
    "_id": "633008ecad5fe5428092c1a6",
    "title": "DOM",
    "content": "The Document Object Model is like an API for interacting with our HTML",
    "__v": 0,
    "createdAt": "2022-09-26T12:46:51.095Z",
    "updatedAt": "2022-09-26T12:46:51.095Z"
  },
  {
    "_id": "63300a1311052d6e0fd8fab2",
    "title": "New request",
    "content": "New postman article content post for testing. Rolling!",
    "updatedAt": "2022-09-25T12:57:22.557Z",
    "createdAt": "2022-09-25T12:57:22.557Z",
    "__v": 0
  },
]
```
2. POST request with form data
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 13
ETag: W/"d-OW6VUklVXnRyrMNkUoiFX0sLDrk"
Date: Mon, 26 Sep 2022 14:19:19 GMT
Connection: close

Article saved
```
3. DELETE request
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 16
ETag: W/"10-7HY26Lsn0JINn1+0ErDKOpXYkc4"
Date: Mon, 26 Sep 2022 14:22:48 GMT
Connection: close

Articles deleted
```

- http://localhost/v1/articles/Postman%20article%20title%20post%20test (v1, with params)

<sub>Please remember submit another post request from previous section whenever a DELETE request or UPDATE/PUT request is submitted </sub>
1. GET request
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 248
ETag: W/"f8-94+IX7w7ye2SVeRpZGkck/GckCg"
Date: Mon, 26 Sep 2022 14:33:29 GMT
Connection: close

{
  "_id": "6331b83532618e64235139f1",
  "title": "Postman article title post test",
  "content": "Postman article content post for testing. Everything set and ready to go.",
  "createdAt": "2022-09-26T14:33:25.904Z",
  "updatedAt": "2022-09-26T14:33:25.904Z",
  "__v": 0
}
```
2. PUT request with form data
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 15
ETag: W/"f-Nop2H4LIgk7Vbj5SXthPw3Y6xm4"
Date: Mon, 26 Sep 2022 14:35:43 GMT
Connection: close

Article updated
```
3. PATCH request with form data
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 15
ETag: W/"f-Nop2H4LIgk7Vbj5SXthPw3Y6xm4"
Date: Mon, 26 Sep 2022 14:36:51 GMT
Connection: close

Article updated
```

4. DELETE request
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 15
ETag: W/"f-uC1bjXNYH3Ok+nBCXcd8sm9BuVM"
Date: Mon, 26 Sep 2022 14:38:26 GMT
Connection: close

Article deleted
```

- http://localhost/v2/articles (v2, without params)
1. GET request
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 1461
ETag: W/"5b5-d2sbaw3T3CRHKvRmnh7GqhdnEds"
Date: Mon, 26 Sep 2022 14:40:09 GMT
Connection: close

[
  {
    "_id": "633008ecad5fe5428092c1a3",
    "title": "REST",
    "content": "REST is short for Representational State Transfer, It's an architectural style for designing APIs.",
    "__v": 0,
    "createdAt": "2022-09-26T14:40:05.176Z",
    "updatedAt": "2022-09-26T14:40:05.176Z"
  },
  {
    "_id": "633008ecad5fe5428092c1a4",
    "title": "API",
    "content": "API stand for Application Programming Interface. It is a set of subroutine definition, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks which are then put together by the programmer.",
    "__v": 0,
    "createdAt": "2022-09-26T14:40:05.178Z",
    "updatedAt": "2022-09-26T14:40:05.178Z"
  },
  {
    "_id": "633008ecad5fe5428092c1a5",
    "title": "Bootstrap",
    "content": "This is a gramework developed by Twitter that contains pre-made front-end templates for web design",
    "__v": 0,
    "createdAt": "2022-09-26T14:40:05.179Z",
    "updatedAt": "2022-09-26T14:40:05.179Z"
  },
  {
    "_id": "633008ecad5fe5428092c1a6",
    "title": "DOM",
    "content": "The Document Object Model is like an API for interacting with our HTML",
    "__v": 0,
    "createdAt": "2022-09-26T14:40:05.180Z",
    "updatedAt": "2022-09-26T14:40:05.180Z"
  },
  {
    "_id": "63300a1311052d6e0fd8fab2",
    "title": "New request",
    "content": "New postman article content post for testing. Rolling!",
    "updatedAt": "2022-09-25T12:57:22.557Z",
    "createdAt": "2022-09-25T12:57:22.557Z",
    "__v": 0
  }
]
```
2. POST request with form data
```javascript
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 248
ETag: W/"f8-cLYYS3uIFR6ZJljsWAnmcmfmVGE"
Date: Mon, 26 Sep 2022 14:40:52 GMT
Connection: close

{
  "title": "Postman article title post test",
  "content": "Postman article content post for testing. Everything set and ready to go.",
  "_id": "6331b9f49bbba7697a8a498d",
  "createdAt": "2022-09-26T14:40:52.383Z",
  "updatedAt": "2022-09-26T14:40:52.383Z",
  "__v": 0
}
```
3. DELETE request
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 30
ETag: W/"1e-o45+wiDjxY8FgGTEGIJRlayxVwI"
Date: Mon, 26 Sep 2022 14:41:57 GMT
Connection: close

{
  "message": "Deleted articles"
}
```

- http://localhost/v2/articles/Postman%20article%20title%20post%20test (v2, with params)

<sub>Please remember submit another post request from previous section whenever a DELETE request or UPDATE/PUT request is submitted </sub>
1. GET request
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 248
ETag: W/"f8-+M/JT9WVKBpO3sVdprs1AC/n9pg"
Date: Mon, 26 Sep 2022 14:45:05 GMT
Connection: close

{
  "_id": "6331baef9bbba7697a8a4997",
  "title": "Postman article title post test",
  "content": "Postman article content post for testing. Everything set and ready to go.",
  "createdAt": "2022-09-26T14:45:03.547Z",
  "updatedAt": "2022-09-26T14:45:03.547Z",
  "__v": 0
}
```

2. PUT request with form data
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 228
ETag: W/"e4-/LD0gC6GnX4nlK0ikaoTIX/DwOE"
Date: Mon, 26 Sep 2022 14:45:36 GMT
Connection: close

{
  "_id": "6331baef9bbba7697a8a4997",
  "title": "Replace with validation is on",
  "content": "Replace a new docoment to the collection with validation is on.",
  "updatedAt": "2022-09-26T14:45:36.306Z",
  "createdAt": "2022-09-26T14:45:36.306Z"
}
```

3. PATCH request with form data
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 256
ETag: W/"100-x2VVi64/ePcC/dV8dkpkXSi5iic"
Date: Mon, 26 Sep 2022 14:46:19 GMT
Connection: close

{
  "_id": "6331bb389bbba7697a8a499c",
  "title": "New Patch request. Patch the title only",
  "content": "Postman article content post for testing. Everything set and ready to go.",
  "createdAt": "2022-09-26T14:46:16.223Z",
  "updatedAt": "2022-09-26T14:46:19.194Z",
  "__v": 0
}
```

4. DELETE request
```javascript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 29
ETag: W/"1d-pSpcLKvAOTh4vjBMIIinMzdwi0M"
Date: Mon, 26 Sep 2022 14:46:57 GMT
Connection: close

{
  "message": "Deleted article"
}
```

- Whenever article is not found
```javascript
HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 31
ETag: W/"1f-jxn1KAkzoaLspH5Zm7vAw9A771w"
Date: Mon, 26 Sep 2022 14:48:17 GMT
Connection: close

{
  "message": "Article not found"
}
```

## Setup
- Project environment:
    - [Node.js](https://nodejs.org/en/) installed
    - [MongoDB Shell](https://www.mongodb.com/docs/mongodb-shell/) installed


## Usage
- On project terminal
    - install dependencies `npm install`
    - start the app `npm app.js`
- On Mongodb Shell
    - start the database server `mongosh`


## Project Status
Project is: _complete_


## Room for Improvement
Room for improvement:
- Maybe implement some sort of security in future

## Acknowledgements
- This project was inspired by Angela Yu.
- This project was based on [this course](https://www.udemy.com/course/the-complete-web-development-bootcamp/) on Udemy.
- And also [this tutorial](https://www.youtube.com/watch?v=fgTGADljAeg) on Youtube.


## Postscripts
- A set of default json data is added for the purpose of create data at ease.
- Two version of .rest file is created for the purpose of create http requests at ease. <sub>It can only be used with the REST Client extension from Visual Studio Code </sub>
