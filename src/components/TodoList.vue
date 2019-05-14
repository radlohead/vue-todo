<template>
  <section>
    Todo list
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="`${todo}-${index}`">{{ todo }}</li>
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
  }
};
</script>
