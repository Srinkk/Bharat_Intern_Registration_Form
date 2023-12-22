const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="css/bootstrap.min.css" type = " text/css"/>
      <title>Registration Form</title>
  </head>
  <body>
      <div class="container">
          <div class="row"> 
          <div class  =" col-md-10">   
          <div class="d-inline justify-content-center">
              <div class="form-container">
                  <h1 class="d-flex justify-content-center">Registration Form</h1>
                  <h4 class="d-flex justify-content-center">Fill out the fields</h4>
                  <!-- <h4 class="d-flex justify-content-center"> Already have an account ? 
                      <a href="Login_new.php">Login</a> 
                  </h4> -->
                  <hr class="mb-3">
                  <form >
                  <div class="mb-3">
                      <label class="form-label"><b><h5>Email Id</h5></b></label>
                      <input class="form-control" type="'email" name="Email" placeholder="abc@gmail.com">
                  </div>
                  <div class="mb-3">
                      <label class="form-label"><b><h5>First name</h5></b></label>
                      <input class="form-control" type="'text" name="F_name" placeholder="">
                  </div>
                  <div class="mb-3">
                      <label class="form-label"><b><h5>Last name</h5></b></label>
                      <input class="form-control" type="'text" name="L_name" placeholder="">
                  </div>
                  <div class="mb-3">
                      <label class="form-label"><b><h5>Username</h5></b></label>
                      <input class="form-control" type="'text" name="User_name" placeholder="">
                  </div>
                  <div class="mb-3">
                      <label class="form-label"><b><h5>Password</h5></b></label>
                      <input class="form-control" type="password" name="Password" placeholder="must be 8-16 characters long">
                  </div>
                  <button  class="register_button" type="submit">Register</button>
                  </form>
              </div>
          </div>
          </div> 
          </div> 
          
      </div>
  </body>
  </html>`);
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});