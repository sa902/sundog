<template lang="html">
      <v-footer class="darky" padless>
     <v-col
       class="text-center"
       cols="12"
     >
     <v-card-text class="test">
       <v-btn
         v-for="icon in icons"
         :key="icon.logo"
         :href="icon.link"
         class="mx-4 sun--text"
         icon
       >
         <v-icon size="24px">
           {{ icon.logo }}
         </v-icon>
       </v-btn>
     </v-card-text >

       <div class="sun--text">{{ new Date().getFullYear() }} — <strong class="lightskin--text" >big sam</strong></div>
     </v-col>
    </v-footer>

</template>

<script>
export default {
  name:"Footer",
  data: () => ({
    icons: [
       {logo: 'mdi-facebook',link:"https://www.facebook.com/sundogsocial"},
       {logo:'mdi-twitter', link:'https://twitter.com/sundogsocial'},
       {logo:'mdi-instagram',link:'https://instagram.com/sundogsocial'},
     ],


  })
}
</script>

<style lang="css" scoped>
</style>
