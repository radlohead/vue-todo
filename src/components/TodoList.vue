<template>
  <section>
    Todo list
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="`${todo}-${index}`">
        <span>{{ todo }}</span>
        <button v-on:click="removeElement(todo)">X</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["todos"],
  data() {
    return {
      uniqueKey: new Date().getTime()
    };
  },
  methods: {
    removeElement(text) {
      const index = this.todos.findIndex(v => v === text);
      this.todos.splice(index, 1);
    }
  }
};
</script>
