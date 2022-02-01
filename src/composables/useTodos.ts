import { onMounted, ref, Ref } from "vue";
import { Todo } from "../models/todo.model";

export default function useTodos(): {
  todos: Ref<Todo[]>;
  fetchTodos: () => Promise<void>
} {

  const todos = ref([])
  const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos').then(
      (response) => {
        return response.json()
      }
    )

    todos.value = response
  }

  onMounted(fetchTodos)
  return {todos, fetchTodos }
}