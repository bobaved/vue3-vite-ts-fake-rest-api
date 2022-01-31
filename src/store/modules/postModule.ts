import { ActionContext, ActionTree, GetterTree, MutationTree, Module } from "vuex"
import { Post } from "../../models/post.model"
import { State } from "../store"

export enum PostMutationTypes {
  SET_POSTS = 'SET_POSTS'
}

export enum PostActionTypes {
  FETCH_POSTS = 'FETCH_POSTS'
}

export interface PostState {
  posts: Post[]
}

export interface PostGetters {
  getPostById: (state: State) => (id: number) => Post | undefined;
}

export interface PostActions {
  [PostActionTypes.FETCH_POSTS]: (context: ActionContext<PostState, State>) => Promise<void>
}

export interface PostMutations<S = PostState> {
  [PostMutationTypes.SET_POSTS](state: S, payload: Post[]): void
}

const state: PostState = {
  posts: []
}

const getters: GetterTree<PostState, State> & PostGetters = {
  getPostById: (state) => (id) => {
    return state.posts.find( post => post.id === id)
  }
}

const actions: ActionTree<PostState, State> & PostActions = {
  [PostActionTypes.FETCH_POSTS]: async (context) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts').then(
      (response) => {
        return response.json()
      }
    )

    context.commit(PostMutationTypes.SET_POSTS, response)
  }
}

const mutations: MutationTree<PostState> & PostMutations = {
  [PostMutationTypes.SET_POSTS](state, payload){
    state.posts = payload
  }
}

const module: Module<PostState, State> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

export default module