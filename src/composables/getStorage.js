import {  projectStorage } from '../firebase/config.js'
import getUser from '@/composables/getUser.js'
import { ref } from 'vue'

const { user } = getUser()
const useStorage = ()=>{
    const error = ref(null)
    const url = ref(null)
    const filePath = ref(null)

    const uploadImage = async (file)=>{
        filePath.value = `covers/${user.value.uid}/${file.name}`
        const storageRef = projectStorage.ref(filePath.value)

        try {
            const res = await storageRef.put(file)
            url.value = await res.ref.getDownloadURL().then(res => res)
        } catch (err) {
            console.log(err.message)
            error.value = err.message
        }
    }
    return {url , filePath , error ,uploadImage}
}

export default useStorage

