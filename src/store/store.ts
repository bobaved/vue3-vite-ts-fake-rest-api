// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, ModuleTree } from 'vuex'
import { Post } from '../models/post.model'

import postModule from './modules/postModule'

// define your typings for the store state
export interface State {
  posts: Post[]
}

const modules: ModuleTree<State> = {
  postModule
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules,
  state: {
    posts: []
  }
})

store.registerModule('postWhateverModule', postModule)

export function useStore () {
  return baseUseStore(key)
}