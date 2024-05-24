<template>
    <div>
        <HeaderPage />
        <div class="container">
        
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">{{ $t('Name')}}</th>
                <th scope="col">{{ $t('Address')}}</th>
                <th scope="col">{{ $t('Contact')}}</th>
                <th scope="col">{{ $t('Action')}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in dhabas" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.contact }}</td>
                    <td ><router-link style="margin-right: 15px" class="btn btn-success" :to="'/update/'+item.id">{{ $t('Update')}}</router-link>
                    <button class="btn btn-primary" v-on:click="deleteDhaba(item.id)">{{ $t('Delete')}}</button></td>
                </tr>
            
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import HeaderPage from './Header';
    export default {
        name: "HomePage",
        data(){
            return {
                name: '',
                dhabas: []
            }

        },
        methods: {
            async deleteDhaba(id) 
            {
                let result = await axios.delete(`http://localhost:3000/dhabas/`+id)
                if(result.status==200) 
                {
                    this.loadData()
                }
            },
            async loadData()  {
                let userInfo = localStorage.getItem('user-info')
                this.name = JSON.parse(userInfo).name
        
                if(!userInfo)
                {
                this.$router.push({name: 'SignUp'})
                }
                let result = await axios.get(`http://localhost:3000/dhabas`)
                console.log('dhaba list ',result);
                this.dhabas = result.data
            }
            
        },
        components: {
            HeaderPage
        },
        async mounted()
        {
            this.loadData()
        }
        
    }
</script>

<style scoped>

</style>