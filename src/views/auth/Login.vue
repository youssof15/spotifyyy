<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" v-model="email" placeholder="email">
        <input type="password" v-model="password" placeholder="password">
        <div class="error" v-if="error"> {{ error }}</div>
        <button v-if="!isPending">Log in</button>
        <button v-if="isPending" disabled>Loading</button>
    </form>
</template>

<script>
import {useRouter} from 'vue-router'
import { ref } from 'vue';
import useLogin from '@/composables/useLogin';

export default {
    setup(){
        const router = useRouter()
        const email = ref('')
        const password = ref('')
        const {error , login ,isPending} = useLogin()

        const handleSubmit = async ()=>{
            const res = await login (email.value,password.value)
            if(!error.value){
                console.log('user logged in')
            }
        router.push({name:'userplaylist'})
        }
        return{email,password,handleSubmit,error,isPending}
    }
}
</script>

<style>

</style>