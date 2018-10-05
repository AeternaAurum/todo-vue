<template>
  <div>
    <content v-for="todo in this.computedTodos.todos" :key="todo._id">
      <v-btn depressed color="blue">Populate</v-btn>
      <v-card>
        <v-card-title primary-title>{{todo.title}}</v-card-title>
        <v-card-text>{{todo.body}} by {{todo.owner}}</v-card-text>
        <v-card-actions>
          <v-btn depressed color="green">Done</v-btn>
        </v-card-actions>
      </v-card>
      <!-- <Todo :title="todo.title" :body="todo.body" :owner="todo.owner" :completed="false"></Todo> -->
    </content>
  </div>

</template>

<script>
  import Todo from '@/components/Todo.vue'

  export default {
    components: {
      Todo
    },
    name: 'todos',
    data() {
      return {
        todos: []
      }
    },
    computed: {
      computedTodos() {
        return this.todos;
      }
    },
    methods: {
      getData() {

      }
    },
    mounted() {
      axios.get('http://localhost:5000/todo/todos').then(res => this.todos = res.data)
      this.$nextTick(() => {
        console.log('Todos', this.todos.todos);
        
      })
      
    }
  }
</script>

<style>

content {
  display: flex;
  justify-content: center
}

.v-card {
  max-width: 400px;
}

</style>
