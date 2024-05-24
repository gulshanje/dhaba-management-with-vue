<template>
    <div>
        <HeaderPage />
        <div class="container" >
            
        <div class="w-100 p-3" style="background-color: #eee; text-align: left;">
           
        <form >
            <div class="mb-3 mt-3">
      <label >{{ $t('Name')}}</label>
            <input class="form-control" type="text" v-model="dhaba.name" :placeholder="$t('Name')"   />
            </div>
            <div class="mb-3 mt-3" style="text-align: left;">
      <label >{{ $t('Address')}}</label>
            <textarea rows="3" class="form-control" type="text" v-model="dhaba.address" :placeholder="$t('Address')"  />
            </div>
            <div class="mb-3 mt-3" style="text-align: left;">
      <label>{{ $t('Contact')}}</label>
            <input class="form-control" type="text" v-model="dhaba.contact" :placeholder="$t('Contact')"  />
            </div>
            <button class="btn btn-primary" type="button" v-on:click="addDhaba">{{ $t('Add Dhaba')}}</button>
        </form>
        </div>
        </div>

    </div>
</template>

<script>
import HeaderPage from './Header';
import axios from 'axios';
    export default {
        name: "AddPage",
        components: {
            HeaderPage
        },
        data(){
            return {
                dhaba: {
                    name: '',
                    address: '',
                    contact: ''
                }
               
            }
        },
        methods: {
            async addDhaba()
            {
                let result = await axios.post("http://localhost:3000/dhabas", {
                    name: this.dhaba.name,
                    address: this.dhaba.address,
                    contact: this.dhaba.contact
                });
                console.warn('result - ',result)
                
                if(result.status == 201)
                {
                   
                    this.$router.push({name: 'Home'})
                }
            }
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