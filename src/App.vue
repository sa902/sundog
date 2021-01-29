<template>
  <v-app id="inspire">

<navbar />

<!-- #f2d4ba -->
    <v-main class="sun">
      <v-container>
        <v-row>
          <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list color="transparent">
              <v-list-item
                v-for="link in sublinks"
                :key="link.title"
                :to="link.link"
                link
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{link.title}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="my-2"></v-divider>

              <v-list-item
                link
                color="grey lighten-4"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    Refresh
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Footer />

  </v-app>
</template>


<script>
import HelloWorld from './components/HelloWorld';
import navbar from './components/navbar';
import pdf from 'vue-pdf';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    HelloWorld,
    navbar,
    pdf,
    Footer

  },

  data: () => ({
    links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],

  
     sublinks:[
       { title: 'Intro', icon: 'mdi-format-list-checks' , link:'/pythonLessons/intro'},
       { title: 'Lesson 1', icon: 'mdi-help-box', link:'/pythonLessons/lesson1'},
     ],



  }),
};
</script>
<style lang="css" scoped>
  .test {
  color: '#f2d4ba';
}
</style>
