<template>
    <div class="navbar">
        <nav>
            <img src="@\assets\logo.png">
            <h1><router-link :to="{name:'Home'}">Spotifyyy</router-link></h1>
            <div class="links">
                <router-link :to="{name:'CreatePlaylist'}">Create Playlist </router-link>
                <router-link v-if="user" :to="{name:'userplaylist'}">My Playlists</router-link>
                <span v-if="user" style="margin:0 15px">Hi there {{ user.displayName }}</span>
                <button @click="handleSignout" v-if="user">Log out</button>
                <router-link class="btn" :to="{name:'Signup'}" v-if="!user">Sign Up</router-link>
                <router-link class="btn" :to="{name:'Login'}" v-if="!user">Log in </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
    setup(){
        const showButtons = ref(false)
        const router = useRouter()
        const {error, logout, isPending} = useLogout()
        const handleSignout = async ()=>{
            await logout()
            showButtons.value = true
            router.push({name:'Login'})
        }
    
        const {user}= getUser()
        if(user.value){
            showButtons.value=true
        }
        else{showButtons.value=false}
    return{error, isPending,handleSignout,showButtons,user}
    }
}
</script>

<style scoped>
.navbar{
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
}
nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}
nav h1{
    margin-left: 20px;
}
nav .links{
    margin-left: auto;
}
nav .links a , button{
    margin-left: 16px;
    font-size: 14x;
}
img{
    width: 60px;
    margin: 0;
}
</style>