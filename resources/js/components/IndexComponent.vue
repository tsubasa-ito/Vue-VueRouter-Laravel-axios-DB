<template>
<div>
   <h1 class="mt-3">Posts</h1>
       <div class="row">
           <div class="col-md-10"></div>
           <div class="col-md-2 mb-3">
             <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Task</router-link>
           </div>
       </div>
       <table class="table table-hover">
           <thead>
           <tr>
               <th>ID</th>
               <th>Task</th>
               <th>Deadline</th>
               <th>Comment</th>
               <th>Edit</th>
               <th>Delete</th>
           </tr>
           </thead>
           <tbody>
               <tr v-for="task in tasks" :key="task.id">
                   <td>{{ task.id }}</td>
                   <td>{{ task.title }}</td>
                   <td>{{ task.deadline }}</td>
                   <td>{{ task.comment }}</td>
                   <td><router-link :to="{name: 'edit', params: { id: task.id }}" class="btn btn-primary">Edit</router-link></td>
                   <td><button class="btn btn-danger" @click.prevent="deleteTask(task.id)">Delete</button></td>
               </tr>
           </tbody>
       </table>
   </div>
</template>

<script>
    export default {
        data() {
           return {
               tasks: []
           }
       },
       created() {
           const uri = '/api/tasks';
           this.axios.get(uri).then(response => {
               this.tasks = response.data.data;
           });
       },
       methods: {
           deleteTask(id)
           {
               const uri = `/api/task/delete/${id}`;
               this.axios.delete(uri).then(response => {
                   this.tasks.splice(this.tasks.indexOf(id), 1);
               });
           }
       }
    }
</script>
