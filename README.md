## CSCE 41333: Exam 2: Practice (Single Page Application-SPA)

### Instructions

Create a **Single Page Application(SPA)** using *HTML/JavaScript/BootStrap CSS* that interface with NodeJS/Express/MySQL2 Web API.  Your main page, **home.html** and *all of your JavaScript and CSS files* should be in the **public** directory.  Your application will provide a **Order Management page** that calls the Web API to **display the list of orders*, and a **form that allows you to add a new order** using the Web API.  Test your application in the browser to ensure it works correctly.


### REST API Endpoints

| HTTP Method | Endpoint | Description | Payload Body (JSON) |
| ----------- | -------- | ----------- | ------------------- |
| GET | /api/orders | Retrieve all orders | None |
| GET | /api/orders/:id | Retrieve order by orderID | None |
| POST | /api/orders | Create new order | " { ""orderDesc"", ""quantity"", ""unitCost"" }" | 

#### Create MySQL Database
```
sudo mysql < exam2Practice.sql
```

#### Run the WEB API
```
node server.js
```
