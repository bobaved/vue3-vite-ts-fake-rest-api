<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import PostTeaser from "./PostTeaser.vue";

export default defineComponent({
  computed: mapState("postModule", {
      // at least my IDE would not let me put the type for the state of module postModule
      // this also leads to warnings in development mode, cause the type of post is Object when passing it to the child component
      // even typecasting it with as Post[] is not helping
      posts: (state: any) => {return state.posts},
  }),
  components: { PostTeaser }
})
</script>

<template>
  <v-card>
    <v-card-title>List of Posts ({{posts.length}})</v-card-title>
    <v-divider></v-divider>
    <v-card-text>    
      <div>
        This List of Posts is provided by Vuex functionality
      </div>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="(post, key) in posts" :key="key">
          <PostTeaser :post="post"/>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-divider></v-divider>
  </v-card>
</template>