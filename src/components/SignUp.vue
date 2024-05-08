<template>
  <div>
    <h1>SignUp</h1>
    <div class="register">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
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
