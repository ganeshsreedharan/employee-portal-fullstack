# employee-portal-fullstack
This project aims at setting up an employee portal with Spring Boot and Angular 7 UI.

## Technologies used
- Front End: Angular 7, Bootstrap, Typescript,protractor for e2e , Jasmine, Karma
- Back End: Java, Spring Boot, Rest API, Swagger, Junit, Mockito

## Getting started

To run the final server, build the jar:
```
./gradlew build
```

and run the server:

```
java -jar build/libs/employee-portal-0.0.1-SNAPSHOT.jar 
```
Navigate to `http://localhost:8080` to see the Employee portal.

## Development

When developing we can run server and front end seperatly
```
Start the Spring Boot Server on http://localhost:8080
./gradlew bootRun 
```
```
Start the Angular  development server on http://localhost:4200 .
./gradlew npm_start
or
cd frontend && ng serve
```

## Testing

For running unit test cases for frontend and backend modules
### Back end - configured with junit and mockito
```
./gradlew test
```
### Testing the front end module  -configured with jasmin and karma.
```
cd frontend
ng test
```
### End to end testing for front end module with protractor .
```
ng test
```
### Swagger UI
```
Once the server is up and running you an see the swagger ui on http://localhost:8080/swagger-ui.html#/
```
