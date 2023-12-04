<template>
  <ListView />
</template>

<script>
import ListView from '@/components/ListView.vue';
import getCollection from '@/composables/getCollection';
export default {
  components:{ ListView },
  setup(){
    const { error , playlists } = getCollection('playlists')
    return {playlists}
  }
}
</script>
