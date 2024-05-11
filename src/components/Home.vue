<template>
    <div>
        <HeaderPage />
        <h1>Home page view</h1>

    </div>
</template>

<script>
import HeaderPage from './Header';
    export default {
        name: "HomePage",
        components: {
            HeaderPage
        },
        mounted()
        {
            let userInfo = localStorage.getItem('user-info')
            if(!userInfo)
            {
            this.$router.push({name: 'SignUp'})
            }
        }
        
    }
</script>

<style scoped>

</style>