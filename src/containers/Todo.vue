<template>
  <section>
    <Header v-on:addTodo="addTodo"></Header>
    <TodoList v-bind:todos="todos"></TodoList>
    <Footer></Footer>
  </section>
</template>

<script>
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
    }
  },
  data() {
    return {
      todos: []
    };
  }
};
</script>

