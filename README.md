# Blog-API

## .env file
 
 Creat a .env filr and add Environment Variable
 
 ```env
  PORT=YOUR PORT (Default port is 8000)
  DATABASE=DB_URL
  JWT_SECRET=RANDOM_STRING
 ```
 
# Create an User
 
### Send a Post Request to: 
     
Post: [http://localhost:8000/api/signup]( http://localhost:8000/api/signup)  
    
Body: 
    
```JSON
           {
              "name": "test1",
              "email": "test1@test.com",
              "password": "test123"
           }    
```


# User Login

### Send a Post Request to: 
     
Post: [http://localhost:8000/api/singin](http://localhost:8000/api/singin)  
    
Body: 
    
```JSON
           {
              "name": "test1",
              "password": "test123"
           }    
```

# Create a Post

### Send a Post Request to: 
     
Post: [http://localhost:8000/api/post/create/:uesrId](http://localhost:8000/api/post/create/::uesrId)  

Headers: 
    
```
         Key: Authorization Value: Bearer YOUR_TOKEN
         Key: Content-Type  Value: application/json
```
    
Body: 

    
```JSON
           {
              "title": "First Post",
              "content": "This is the Content",
              "tags": ["a", "n", "sf"]
          }  
```


# Update a Post

### Send a Put Request to: 
     
Put: [http://localhost:8000/api/post/update/:postId/:userId](http://localhost:8000/api/post/update/:postId/:userId)  

Headers: 
    
```
         Key: Authorization Value: Bearer YOUR_TOKEN
         Key: Content-Type  Value: application/json
```
    
Body: 

 All are optional, you can set any of those or update all
 ```JSON   
          {
              "title": "First Post", 
              "content": "This is the Content",
              "tags": ["a", "n", "sf"]
          }  
```


# Delete a Post

### Send a Delete Request to: 
     
Delete: [http://localhost:8000/api/post/delete/:postId/:userId](http://localhost:8000/api/post/delete/:postId/:userId)  

Headers: 
    
```
         Key: Authorization Value: Bearer YOUR_TOKEN
         Key: Content-Type  Value: application/json
```
    
    
# Add Comment to a Post

### Send a Post Request to: 
     
Post: [http://localhost:8000/api/comment/:postId/:userId](http://localhost:8000/api/comment/:postId/:userId)  

Headers: 
    
```
         Key: Authorization Value: Bearer YOUR_TOKEN
         Key: Content-Type  Value: application/json
```
    
Body: 

 ```JSON   
          {
              "comment": "Your Comment"
          }  
```

    
 
 
