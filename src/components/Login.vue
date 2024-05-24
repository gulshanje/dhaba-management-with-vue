<template>
    <div class="container">
      <select style="width: 100px"  v-model="$i18n.locale" class="form-select" aria-label="Default select example">
                <option v-for="locale in $i18n.availableLocales" :key="`locale - ${locale}`" :value="locale" >{{ locale }}</option>
                
            </select>
      <img class="rounded-pill logo" alt="Vue logo" src="../assets/dhaba.jpeg" />
      <h1>Dhaba</h1>
      <h1>Login</h1>
      <div class="register">
        <input type="email" :placeholder="$t('Email')" v-model="email" required />
        <div class="invalid-feedback">
      Please provide a valid city.
    </div>
        <input type="password" :placeholder="$t('Password')" v-model="password" required/>
        <button v-on:click="login()">{{ $t("Login") }}</button>
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
            localStorage.setItem("user-info", JSON.stringify(result.data[0]))
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
 
  </style>
  