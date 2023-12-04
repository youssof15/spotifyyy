<template>
    <form @submit.prevent="handleSubmit">
        <h4>Create New Playlist</h4>
        <input type="text" required v-model="title" placeholder="playlist title">
        <textarea required v-model="description" placeholder="playlist description..."></textarea>
        <label>Choose Playlist Cover</label>

        <!-- Event Listener to file change -->
        <input type="file" @change="handleChange">
        <div class="error" v-if="error">{{ error }}</div>
        <button>Create</button>
    </form>
</template>

<script>
import getStorage from '@/composables/getStorage'
import getUser from '@/composables/getUser';
import { timestamp }  from '@/firebase/config'
import { ref } from "vue";
import useCollection from '@/composables/useCollection';
import { useRouter } from 'vue-router'
export default {
    setup(){
        const {url , filePath , err,uploadImage}= getStorage()
        const{er, addDoc} = useCollection('playlists')
        const {user} = getUser()
        const router = useRouter()

        const files = ref(null)
        const error=ref(null)
        const title = ref('')
        const description = ref('')
        const handleSubmit = async() => {
            if(files.value){
            await uploadImage(files.value)
            const res = await addDoc({
                title:title.value,
                description:description.value,
                userId:user.value.uid,
                userName:user.value.displayName,
                filePath:filePath.value,
                songs:[],
                createdAt: timestamp(),
                coverUrl: url.value
            })
            if(!error.value){
                router.push({name:'PlaylistDetails' , params:{id:res.id}})
            }
            }
        }
        const handleChange =(e)=>{
            const fileTypes = ['image/png','image/jpeg','image/jpg']
            const selected = e.target.files[0]
            if(selected && fileTypes.includes(selected.type)){
                files.value = selected
                error.value = null
            }else{
                files.value = null
                error.value = 'File Type Should be (png/jpeg/jpg)'
            }
        }

        return{title,description,handleSubmit,handleChange,error}
    }
}
</script>

<style>

</style>