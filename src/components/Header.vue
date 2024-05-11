<template>
    <div class="nav-bar">
        <a href="home">Home</a>
        <a href="home">Add Dhaba</a>
        <a href="home">Update</a>
        <a v-on:click="logout()" href="#">Logout</a>
    </div>
</template>

<script>
    export default {
        name: 'HeaderPage',
        methods: {
            logout()
            {
                localStorage.clear()
                this.$router.push({name: "Login"})
            }
        }
    }
</script>

<style scoped>
body{
    padding: 0px;
    margin: 0px;
}
.nav-bar{
    background-color: #333;
    overflow: hidden;
}
.nav-bar a{
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 18px 14px;
    text-decoration: none;
    font-size: 18px;
    margin-right: 5px;
}
.nav-bar a:hover{
    background-color: #ddd;
    color: #222;
}
</style>