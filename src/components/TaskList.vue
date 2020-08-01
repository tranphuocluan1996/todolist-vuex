<template>
  <div class="panel panel-success">
    <div class="panel-heading">List Task</div>
    <table class="table table-hover ">
        <thead>
            <tr>
                <th style="width: 10%" class="text-center">#</th>
                <th>Task</th>
                <th style="width: 20%" class="text-center">Level</th>
                <th style="width: 160px">Action</th>
            </tr>
        </thead>
        <template v-if="listTaskSearchSort">
        <task-item 
         
         v-for="(item, index) in listTaskSearchSort" 
         v-bind:key="item.id"
         v-bind:listTask="item"
         v-bind:index="index+1"
         />
        </template>
        
        
        <!-- <tbody>
           
        </tbody> -->

    </table>
</div>
</template>

<script>
import {mapState} from 'vuex'
import TaskItem from './TaskItem'
import { mapGetters } from 'vuex'
export default {
    name:"task-list",
  
    components:{
        TaskItem
    },
    computed: {
        ...mapState([
            'listTask',
            
        ]),
         ...mapGetters([
            'listTaskSearchSort',
            
        ]),
        
    },
}
</script>

<style>

</style>