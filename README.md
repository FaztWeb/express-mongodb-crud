# CRUD with Nodejs, Express and Mongodb

![](docs/screenshot.png)

This is a Multi page application using nodejs mongodb and handlebars

### Installation with docker-compose (Recommended)

```bash
git clone https://github.com/FaztWeb/express-mongodb-crud
cd express-mongodb-crud
docker-compose up
```

### Installation (Manually)

#### Requirements

* You need mongodb installed and running on your computer. or alternatively you can use docker

```bash
git clone https://github.com/FaztWeb/express-mongodb-crud
cd express-mongodb-crud
npm install
npm run build
npm start
```

Now you can visit: <a target="_blank" href="http://localhost:3000">http://localhost:3000</a>

### Todo

* [ ] add search input to find tasks
* [ ] add usert authentication and authorization
* [ ] add docker configuration for production
* [ ] add github actions setup
* [ ] add connect-mongo to store session in db
* [ ] remove babel with es modules
* [ ] add error handling
* [ ] add a validation library for user input
