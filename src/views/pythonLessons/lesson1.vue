<template lang="html">
  <div class="about pa-6">
    <lesson :username="user.username" />
  </div>
</template>

<script>
import Lesson from "@/components/Lesson.vue";


export default {
  components: {
    Lesson
  },
  data() {
    return {
      user: {
        username: '1'
      }
    }
  }
 }



</script>

<style lang="css" scoped>
</style>
