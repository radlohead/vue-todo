<template>
  <section>
    Todo list
    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{ todo }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["todos"]
};
</script>
