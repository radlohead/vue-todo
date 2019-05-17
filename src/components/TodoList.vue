<template>
  <section>
    Todo list
    <ul>
      <li v-for="(todo, index) in todos2" v-bind:key="`${todo}-${index}`">
        <span class="todo" ref="todo">{{ todo.text }}</span>
        <input
          type="text"
          class="todo__edit"
          ref="todoInput"
          v-on:keyup.enter="editInput($event.target.value, index)"
        >
        <button v-on:click="editTodo(todo, index)">수정</button>
        <button v-on:click="removeElement(todo)">X</button>
      </li>
    </ul>
  </section>
</template>

<script>
import Vue from "vue";

export default {
  props: ["todos"],
  data() {
    return {
      uniqueKey: new Date().getTime(),
      todos2: this.todos
    };
  },
  methods: {
    removeElement(text) {
      const index = this.todos2.findIndex(v => v === text);
      this.todos2.splice(index, 1);
    },
    editTodo(todo, index) {
      this.$refs.todo[index].classList.add("hidden");
      this.$refs.todoInput[index].classList.add("active");
      this.$refs.todoInput[index].value = todo.text;
    },
    editInput(value, index) {
      this.$refs.todo[index].classList.remove("hidden");
      this.$refs.todoInput[index].classList.remove("active");
      this.$set(this.todos[index], "text", value);
    }
  }
};
</script>

<style>
.todo.hidden {
  display: none;
}
.todo__edit {
  display: none;
}
.todo__edit.active {
  display: block;
}
</style>

