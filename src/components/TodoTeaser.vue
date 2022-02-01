<script lang="ts">import { defineComponent, toRefs } from "vue";
import { Post } from "../models/post.model";
import { Todo } from "../models/todo.model";

export default defineComponent({
  props: {
    todo: {
      type: Todo,
      required: true
    }
  },
  setup(props) {
    const {todo} = toRefs(props)

    return {todo}
  }

})
</script>

<template>
  <v-card>
    <v-card-subtitle>
      {{todo.id}}
    </v-card-subtitle>
    <v-card-title>
      {{todo.title}}
    </v-card-title>
    <v-card-text v-if="todo.completed">
      It's Done!
    </v-card-text>
    <v-card-text v-else>
      Not completed yet :(
    </v-card-text>
  </v-card>
</template>