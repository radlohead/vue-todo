<template>
  <section>
    <h1>{{ this.$store.state }}</h1>
    <Header v-on:addTodo="addTodo"></Header>
    <TodoList v-bind:todos="todos"></TodoList>
    <Footer></Footer>
  </section>
</template>

<script>
import store from "../store";
import Header from "@/components/Header.vue";
import TodoList from "@/components/TodoList.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    TodoList,
    Footer
  },
  methods: {
    addTodo(text) {
      this.todos.push({
        text,
        isActive: false
      });
    },
    test() {
      return store.state;
    }
  },
  data() {
    return {
      todos: [],
      test2: store.state
    };
  },
  mounted() {
    console.log("store state: ", JSON.parse(JSON.stringify(store.state)));
  }
};
</script>

