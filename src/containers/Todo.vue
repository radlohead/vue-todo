<template>
  <section>
    <h1>{{ this.$store.state.moduleA }}</h1>
    <span>customCount: {{ customCount }}</span>
    <span>getCount: {{ getCount }}</span>
    <Header v-on:addTodo="addTodo"></Header>
    <TodoList v-bind:todos="todos"></TodoList>
    <Footer></Footer>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
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
      this.customCount,
      this.getCount
    );
  },
  computed: {
    // ...mapState({
    //   count: state => state.moduleA.count,
    //   a: "moduleA"
    // }),
    ...mapState(["moduleA", "moduleB"]),
    ...mapGetters("moduleA", ["getCount"]),
    customCount() {
      return this.moduleA.count;
    }
  }
};
</script>

