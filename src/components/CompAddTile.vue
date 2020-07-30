<template>
   <div class="form-group add-task">
        <button 
        v-if="!this.isShowForm"
        v-on:click="handleAddTask"
        type="button" class="btn btn-info btn-block">Add Task</button>
         <button 
         v-else
        v-on:click="handleAddTask"
        type="button" class="btn btn-info btn-block">Close Task</button>
    </div>
</template>

<script>
import { mapActions,mapState} from 'vuex'

export default {
    name:"add-title",
    
    computed: {
        ...mapState([
            'isShowForm'
        ])
    },
  

    methods: {
       ...mapActions([
            'changeIsShowForm'
        ]),
       
        handleAddTask(){
           return this.changeIsShowForm();
        }
    },
}
</script>

<style>

</style>