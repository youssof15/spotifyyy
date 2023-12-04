<template>
    <h4 v-if="element" style="text-align: center;">Song List Here</h4>
    <div v-if="!element" class="loading">Loading...</div>
    <div v-if="element" class="playlist-details">
        <div class="playlistinfo">
            <div class="cover">
                <img :src="element.coverUrl">
            </div>
            <h2>{{ element.title }}</h2>
            <p class="username">Created By {{ element.userName }}</p>
            <p class="description"> {{ element.description }}</p>
            <button v-if="checkUser" @click="handleDelete">Delete Playlist</button>
        </div>

        <div class="song-list">
            <div>
                <addSong v-if="checkUser" :element="element" />
            </div>
            <div v-if="!element.songs.length">No Songs To Show.</div>
            <div v-for="song in element.songs" :key="song.id" class="single-song">
                <div class="details">
                    <h3>{{ song.title }}</h3>
                    <p>{{ song.artist }}</p>
                    <!-- passing song.id to get access to the certain song-->
                    <button @click="deleteSong(song.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import addSong from '../playlist/addSong.vue';
import useDocument from '@/composables/useDocuments'
import getUser from '@/composables/getUser';
import getCollection from '@/composables/getCollection';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
export default {
    props:['id'],
    components:{ addSong },
    setup(props){
        const router = useRouter()
        const { error, documents} = getCollection('playlists')
        const route = useRoute()
        const element = ref(null)
        const {user} = getUser()
        const checkUser = ref(false)
        const {err , isPending , deleteDoc, updateDoc} = useDocument('playlists', props.id)
        
        const docVal = async()=>{
            await documents.value
            setTimeout(() => {
                documents.value.forEach(el => {
                if(el.id === route.params.id){
                    element.value=el
                    if(element.value.userId === user.value.uid){
                    checkUser.value = true
                    
                }}})
                }, 1500)}
        docVal()
        const handleDelete = async()=>{
            await deleteDoc()
            router.push('/')
        }
        const deleteSong = async(id)=>{
            const songs = element.value.songs.filter((song)=>song.id != id)
            await updateDoc({songs})
            window.location.reload()
        }

        return { docVal ,element, checkUser,handleDelete,deleteSong}
    }
}
</script>

<style>
    .loading{
        position: relative;
        top: 50%;
        left: 50%;
    }
    .playlist-details{
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 80px;
    }
    .cover{
        overflow: hidden;
        border-radius: 20px;
        position: relative;
        padding: 160px;
    }
    .cover img{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
        max-width: 200%;
        max-height: 200%;
    }
    .playlistinfo{
        text-align: center;
    }
    .playlistinfo h2{
        text-transform: capitalize;
        font-size: 28px;
        margin-top: 20px;
    }
    .playlistinfo p{
        margin-bottom: 20px;
    }
    .username{
        color: #999;
    }
    .description{
        text-align: left;
    }
    .single-song{
        padding:10px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed var(--secondary);
        margin-bottom: 20px;
    }
</style>