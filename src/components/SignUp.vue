<template>
  <div>
    <img class="logo" alt="Vue logo" src="../assets/dhaba.jpeg" />

    <h1>SignUp</h1>
    <div class="register">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password"/>
      <button v-on:click="signUp()">Sign Up</button>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SignUp",
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async signUp()
    {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password
      });
      console.warn('result - ',result)
      if(result.status == 201)
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
.register input, .login input, .add input{
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

.register button, .login button, .add button{
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  background-color: skyblue;
  cursor: pointer;
}
</style>
