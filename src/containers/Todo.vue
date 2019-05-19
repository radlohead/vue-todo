<template>
  <section>
    <h1>{{ this.$store.state.moduleA }}</h1>
    <h2>{{ customCount }}</h2>
    <Header v-on:addTodo="addTodo"></Header>
    <TodoList v-bind:todos="todos"></TodoList>
    <Footer></Footer>
  </section>
</template>

<script>
import { mapState } from "vuex";
import store from "../store";
import Header from "@/components/Header.vue";
import TodoList from "@/components/TodoList.vue";
import Footer from "@/components/Footer.vue";
import moduleA from "../store/modules/moduleA";

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
      todos: [],
      test2: store.state
    };
  },
  mounted() {
    console.log(
      "store state: ",
      JSON.parse(JSON.stringify(store.state)),
      this.customCount
    );
  },
  computed: {
    // ...mapState({
    //   count: state => state.moduleA.count,
    //   a: "moduleA"
    // }),
    ...mapState(["moduleA", "moduleB"]),
    customCount() {
      return `customCount: ${this.moduleA.count}`;
    }
  }
};
</script>

