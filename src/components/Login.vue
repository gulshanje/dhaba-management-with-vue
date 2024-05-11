<template>
    <div>
      <img class="logo" alt="Vue logo" src="../assets/dhaba.jpeg" />
  
      <h1>Login</h1>
      <div class="register">
        <input type="text" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password"/>
        <button v-on:click="login()">Login</button>
        <p>
            <router-link to="/sign-up" />
        </p>
  
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "LoginPage",
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async login()
      {
        
        let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
        console.warn(result)
        if(result.status == 200 && result.data.length > 0)
        {
            localStorage.setItem("user-info", JSON.stringify(result.data))
            this.$router.push({name: 'Home'})
        }
      }
    },
    mounted()
    {
        let userInfo = localStorage.getItem('user-info')
        if(userInfo)
        {
        this.$router.push({name: 'Home'})
        }
    }
  };
  </script>
  
  <style scoped>
  .register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
    cursor: pointer;
  }
  
  .register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
  }
  </style>
  