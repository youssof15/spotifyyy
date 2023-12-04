<template>
    <div class="contain">
        <div class="botton"><button v-if="showAddButton===false" @click="showAddButtonF">Add Songs</button></div>
        <div class="addSong" v-if="showAddButton===true">
            <form @submit.prevent="handleSubmit">
            <h4>Add Song</h4>
            <input type="text" required placeholder="Song title" v-model="title">
            <input type="text" required placeholder="Artist" v-model="artist">
            <button @click="handleSubmit">Add</button>
        </form>
        </div>
    </div>
    
    
</template>

<script>
import { ref } from 'vue'
import useDocuments from '@/composables/useDocuments'

    export default {
        props:['element'],
        setup(props){
            const title = ref('')
            const artist = ref('')
            const showAddButton = ref(false)
            const { updateDoc } = useDocuments('playlists',props.element.id)
    
            const showAddButtonF = ()=>{
                showAddButton.value=true}

            const handleSubmit= async()=>{
                const newsong={
                    title:title.value,
                    artist:artist.value,
                    id:Math.floor(Math.random() * 1000000)
                }
                await updateDoc({
                    songs:[...props.element.songs, newsong]
                })
                title.value = ''
                artist.value = ''
                window.location.reload()
            }
            return {title , artist , showAddButton ,showAddButtonF, handleSubmit}
        }
    }
</script>

<style scoped>

    .addSong{
        text-align: center;
        margin-top: 40px ;
    }
    form{
        max-width: 100%;
        text-align: left;
    }
    .botton{
        display: flex;
        width: 100%;
        justify-content: center;
    }
</style>