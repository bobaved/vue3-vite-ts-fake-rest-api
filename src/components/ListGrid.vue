<script lang="ts">import { defineComponent } from "vue";
import PostList from "./PostList.vue";
import TodoList from "./TodoList.vue";

export default defineComponent({ components: { PostList, TodoList } })
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
        <TodoList />
      </v-col>
    </v-row>
  </v-container>
</template>
