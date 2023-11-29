<template>
  <div class="bg-color">
    <div class="container">
      <div class="row">
        <div class="col-6"></div>
        <div class="col-6 mx-auto">
          <div class="bg-white rounded-3 mt-5 w-75">
            <form class="p-3">
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" required />
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <router-link class="w-100" to="/firstpage">
                <button class="w-100 mt-3" type="submit">
                  Login
                </button></router-link
              >
            </form>

            <p>
              Don't have an account? <a href="#" id="signup-link">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="form-container pe-2" id="login-form">
            <h1>Login</h1>
            <form>
              <label for="username">Username</label>
              <input type="text" id="username" name="username" required />
              <label for="password">Password</label>
              <input type="password" id="password" name="password" required />
              <router-link class="w-100" to="/firstpage">
                <button class="w-100" type="submit">Login</button></router-link
              >
            </form>
            <p>
              Don't have an account? <a href="#" id="signup-link">Sign up</a>
            </p>
          </div> -->
</template>
<script></script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.bg-color {
  font-family: "Open Sans", sans-serif;
  background-color: #6d736f;
  height: 100vh;
}
input:focus {
  border: none;
}
.form-container {
  /* margin: 0 auto; */
  padding: 10px;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #fff;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 36px;
  color: #b38bff;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 15px;
}

input {
  padding: 12px;
  border: none;
  /* border-radius: 5px; */

  font-size: 14px;
  color: black;
  border-bottom: 2px solid lightgray;
}

button {
  padding: 10px;
  background-color: skyblue;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.2s ease-in-out;
}

a {
  text-decoration: none;
  color: skyblue;
  font-size: 18px;
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: #8c5fb2;
}

p {
  text-align: center;
  margin: 8px;
}
</style>