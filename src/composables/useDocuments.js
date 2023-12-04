import { projectfirestore } from "@/firebase/config";
import { ref } from "vue";

const useDocument = (collection,id)=>{
    const isPending = ref(false)
    const error = ref(null)

    let docRef = projectfirestore.collection(collection).doc(id)
    const deleteDoc = async()=>{
        isPending.value = true
        error.value = null
        try {
            const res = await docRef.delete()
            isPending.value = false
            return res
        } catch (err) {
            console.log(err.message)
            isPending.value= false
            error.value = 'could not delete'
        }
    }
    const updateDoc = async(updates)=>{
        isPending.value = true
        try {
            const res = await docRef.update(updates)
            isPending.value = false
            return res
        } catch (err) {
            console.log(err.message)
            isPending.value= false
            error.value = 'could not update'
        }
    }
    return {error , isPending , deleteDoc, updateDoc}
}
export default useDocument