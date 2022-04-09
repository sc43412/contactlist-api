# Contact-API 
this API impliments the CRUD for contact lists inventory. It stores name and phone no  of a person. it can create, read, update and delete the product.First at you need to authenticate to use this api .first you have to sign up.then you have to login.after login you will get a Bearer token .use that token to every request to get acess the crud operation of our contact list.

## How to setup on local machine
To use this repository your machine should have [node](https://nodejs.org/en/), npm, [monogodb](https://docs.mongodb.com/manual/installation/) and [git](https://git-scm.com/downloads). 
1. check pre-requisits by these.
```go
node --version
npm --version
git --version
```
2. Now clone this repository
```go
git clone https://github.com/sc43412/contactlist-api.git
```
3. Change directory to contactList-API
```go
cd ContactList/
```

3. Install dependencies
```go
npm i --save
```
4. Start mongo db this command may differ... system to system.
```go
sudo systemctl start mongod
or start the server on task manager in windows system
```
5. That's... it  run the application
```go
npm start
```
6. click (http://localhost:8000).

7. install express,mongoose,jsonwebtoken,passport,passport-jwt.

## How to test this api using vs-code
1. i assume your system has vs-code and rest-client  and postman preinstalled.
2. this api already contain one file called route-testing which has all the routes that it support.
3. you just have to click on send request only.
4. remember to change the id for different delete and update.


