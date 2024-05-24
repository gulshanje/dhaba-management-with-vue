<template>
    <div>
        <HeaderPage />
        <div class="container" >
            
            <div class="w-100 p-3" style="background-color: #eee; text-align: left;">
              
        <form>
            <div class="mb-3 mt-3">
      <label for="name">{{ $t('Name')}}</label>
            <input type="text" class="form-control" v-model="dhaba.name" :placeholder="$t('Name')"  name="name" />
            </div>
            <div class="mb-3 mt-3 "  style="text-align: left;">
      <label for="address">{{ $t('Address')}}</label>
            <textarea rows="3" class="form-control" type="text" v-model="dhaba.address" :placeholder="$t('Address')"  name="address" />
            </div>
            <div class="mb-3 mt-3"  style="text-align: left;">
      <label for="contact">{{ $t('Contact')}}</label>
            <input type="text" class="form-control" v-model="dhaba.contact" :placeholder="$t('Contact')"  name="contact" />
            </div>
            <button class="btn btn-primary" type="button" v-on:click="updateDhaba">{{ $t('Update')}}</button>
        </form>
        </div>
        </div>


    </div>
</template>

<script>
import HeaderPage from './Header';
import axios from 'axios';
    export default {
        name: "UpdatePage",
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
            async updateDhaba() {
                console.log("dhaba update");
                let result = await axios.put("http://localhost:3000/dhabas/" + this.$route.params.id, {
                    name: this.dhaba.name,
                    address: this.dhaba.address,
                    contact: this.dhaba.contact
                });
                console.warn('result - ',result)
                
                if(result.status == 200)
                {
                   
                    this.$router.push({name: 'Home'})
                }
            }
        },
        async mounted()
        {
            let userInfo = localStorage.getItem('user-info')
            if(!userInfo)
            {
            this.$router.push({name: 'SignUp'})
            }
            let result = await axios.get("http://localhost:3000/dhabas/" + this.$route.params.id)
            console.log(result);
            console.log(this.$route.params.id);
            this.dhaba=result.data
            
        }
        
    }
</script>

<style scoped>

</style>