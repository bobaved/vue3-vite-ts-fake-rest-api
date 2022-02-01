import { onMounted, ref, Ref } from "vue";
import { Post } from "../models/post.model";

export default function usePosts(): {
  posts: Ref<Post[]>;
  fetchPosts: () => Promise<void>
} {

  const posts = ref([])
  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts').then(
      (response) => {
        return response.json()
      }
    )

    posts.value = response
  }

  onMounted(fetchPosts)
  return { posts, fetchPosts }
}