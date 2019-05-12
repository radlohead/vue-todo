<template>
  <section>
    <Header v-on:addTodo="addTodo"></Header>
    <TodoList></TodoList>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import TodoList from "@/components/TodoList.vue";
import Footer from "@/components/Footer.vue";

const todo = {
  list: []
};

export default {
  components: {
    Header,
    TodoList,
    Footer
  },
  methods: {
    addTodo(text) {
      todo.list.push(text);
      console.log("addTodo: ", text, todo.list);
    }
  }
};
</script>

