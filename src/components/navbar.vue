<template lang="html">
  <nav>
    <v-app-bar
      app
      absolute
      dark

      shrink-on-scroll
      :src="require('@/assets/banner.png')"
      scroll-target="#scrolling-techniques-4"
    >
    <!-- this is is for changing color of bannger -->
        <!-- <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template> -->

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  <v-spacer></v-spacer>
      <v-toolbar-title class="darky--text " ></v-toolbar-title>

  <v-spacer></v-spacer>

      <template v-slot:extension>

        <v-tabs fixed-tabs centered>
          <v-tab
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            class="darky--text"

            text
            >{{item.title}}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

  </nav>

</template>

<script>
export default {
  name:"navbar",

data: () => ({




  items: [
   { title: 'Dashboard',link:'/'},
   { title: 'Artist Pages', link:'/test'},
   { title: 'Podcast', link:'/#'},
   { title: 'Magazine', link:'/progress'},
   { title: 'Contact', link:'/about'},
   {title:'Login', link:'/login'}

 ],
})
}
</script>

<style lang="css" scoped>
</style>
