<template>
  <section>
    <Header></Header>
    <TodoList></TodoList>
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
  }
};
</script>

