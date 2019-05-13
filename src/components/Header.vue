<template>
  <div>
    Header
    <input type="text" ref="todo">
    <button v-on:click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  methods: {
    addTodo() {
      const todoText = this.$refs.todo.value;

      if (!todoText) return;
      this.$emit("addTodo", todoText);
      this.$refs.todo.value = "";
      console.log("addTodo: ", todoText);
    }
  }
};
</script>