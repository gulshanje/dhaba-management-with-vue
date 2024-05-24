<template>
    <div class="container">
    <div class="nav-bar">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
           
                <a class="navbar-brand" href="#">
                <img src="../assets/dhaba.jpeg" alt="Avatar Logo" style="width:40px;" class="rounded-pill"> 
                </a>
            
             
        <router-link class="nav-link"  :class="$route.name == 'Add' ? 'active':''"  to="/">{{ $t('Home')}}</router-link>
        <router-link class="nav-link"  :class="$route.name == 'Add' ? 'active':''" to="add">{{ $t('Add Dhaba')}}</router-link>
        <a v-on:click="logout()" href="#">{{ $t('Logout')}}</a>
       
            <select style="width: 100px"  v-model="$i18n.locale" class="form-select" aria-label="Default select example">
                <option v-for="locale in $i18n.availableLocales" :key="`locale - ${locale}`" :value="locale" >{{ locale }}</option>
                
            </select>
        
    
        </nav>
       
   
    </div>
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