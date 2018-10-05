<template>
  <v-card>
    <v-card-title>{{ this.props.title }}</v-card-title>
    <v-card-text>{{ this.props.body }} by: {{ this.props.owner }}</v-card-text>
    <v-card-actions>
      <v-btn flat color="green">Done</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Todo',

  props: {
    body: String,
    title: String,
    owner: String,
    completed: Boolean
  }
} 
</script>

<style>
</style>
