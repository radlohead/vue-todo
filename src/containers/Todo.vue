<template>
  <section>
    <h1>{{ this.$store.state.moduleA }}</h1>
    <span>customCount: {{ customCount }}</span>
    <span>getCount: {{ getCount }}</span>
    <button @click="muCount">click</button>
    <span>muCount: {{ todoC }}</span>
    <input type="text" v-model="todoC">
    <button @click="countAsync">countAsync click</button>
    <button @click="count2Async(10)">count2Async click</button>
    <button @click="testCount2">testCount2 click</button>
    <button @click="count3Async">count3Async click</button>
    <div>muTitle: {{ title }}</div>
    <Header v-on:addTodo="addTodo"></Header>
    <TodoList v-bind:todos="todos"></TodoList>
    <Footer></Footer>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
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
    ...mapMutations("moduleA", ["muCount", "muTitle"]),
    ...mapActions("moduleA", ["countAsync", "count2Async", "count3Async"]),
    addTodo(text) {
      this.todos.push({
        text,
        isActive: false
      });
    },
    testMethod() {
      return "adfadfafadfadfa";
    },
    testCount2() {
      this.$store.dispatch("moduleA/countAsync").then(res => {
        console.log("testCount2", res);
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
    },
    todoC() {
      return this.$store.state.moduleA.count;
    },
    title() {
      return this.$store.state.moduleA.title;
    }
  }
};
</script>

