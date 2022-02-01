<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { PostActionTypes } from '../store/modules/postModule';
import { useStore } from '../store/store'

export default defineComponent({
  props: {
    msg: String
  },
  setup(props) {

    const store = useStore();
    store.dispatch('postModule/' + PostActionTypes.FETCH_POSTS)
    const {msg} = toRefs(props)

    return {msg}
  }

})

</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Hallo liebes FitX Team!
  </p>

  <p>Das ist eine kleine Vue App, die ich jetzt in sehr kurzer Zeit als kleinen Vorführzweck hingezimmert habe.</p>

  <p>Ich benutze hier die API von <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSON Placeholder</a>.</p>
  <p>Das ist eine kleine Test-API.</p>
  <p>
    Dieser Text befindet sich hier noch in der 
    <code>components/HelloWorld.vue</code>, die aber auch das "Fetching" der Post Daten triggert für die Liste an Posts (siehe unten).
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
