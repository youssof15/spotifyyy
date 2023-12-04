<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="displayName" placeholder="display name">
        <input type="email" v-model="email" placeholder="email">
        <input type="password" v-model="password" placeholder="password">
        <div class="error" v-if="error"> {{ error }}</div>
        <button v-if="!isPending">Sign up</button>
        <button v-if="isPending" disabled>Loading</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';
import { useRouter } from 'vue-router';

export default {
    setup(){
        const router = useRouter()
        const email = ref('')
        const password = ref('')
        const displayName = ref('')
        const {error , signup ,isPending} = useSignup()

        const handleSubmit = async ()=>{
            const res = await signup(email.value,password.value,displayName.value)
            if(!error.value){
                console.log('user signed up')
            }
        router.push({name:'userplaylist'})
        }
        return{email,password,handleSubmit,error,isPending,displayName}
    }
}
</script>

<style>

</style>