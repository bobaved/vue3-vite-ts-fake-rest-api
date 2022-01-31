<script lang="ts">import { defineComponent } from "vue";
import PostList from "./PostList.vue";

export default defineComponent({ components: { PostList } })
</script>

<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
      >
        <PostList />
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of two columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
