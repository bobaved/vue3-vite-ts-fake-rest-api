<script lang="ts">import { defineComponent, Ref, toRefs } from "vue";
import { Post } from "../models/post.model";

export default defineComponent({
  props: {
    post: {
      type: [Post, Object],
      required: true
    }
  },
  setup(props): {post: Ref<Post | Record<string, any>>} {
    const {post} = toRefs(props)
    return {post}
  }

})
</script>

<template>
  <v-card>
    <v-card-subtitle>
      {{post.id}}
    </v-card-subtitle>
    <v-card-title>
      {{post.title}}
    </v-card-title>
    <v-card-text>
      {{post.body}}
    </v-card-text>
  </v-card>
</template>