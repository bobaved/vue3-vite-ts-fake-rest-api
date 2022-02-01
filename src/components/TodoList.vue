<script lang="ts">
import { defineComponent } from 'vue'
import useTodos from '../composables/useTodos';
import TodoTeaser from './TodoTeaser.vue';

export default defineComponent({
    setup(props) {
        const { todos, fetchTodos } = useTodos();
        return { todos, fetchTodos };
    },
    components: { TodoTeaser }
})

</script>

<template>
  <v-card>
    <v-card-title>List of Todos ({{todos.length}})</v-card-title>
    <v-divider></v-divider>
    <v-card-text>    
      <div>
        This List of Todos if provided by a Composable
      </div>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="(todo, key) in todos" :key="key">
          <TodoTeaser :todo="todo"/>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-divider></v-divider>
  </v-card>
</template>