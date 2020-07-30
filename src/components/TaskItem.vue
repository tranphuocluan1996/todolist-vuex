<template>
   <tbody>
      <tr>
            <td class="text-center">{{index}}</td>
            <td>{{listTask.name}}</td>
            <td class="text-center"><span v-bind:class="getColorButtonLevel">{{listTask.level}}</span></td>
            <td>
                <button
                v-on:click="handleClickEdit" 
                type="button" class="btn btn-warning">Edit</button>
                <button
               
                v-on:click="handleDeleteButton"
                 type="button" class="btn btn-danger">Delete</button>
            </td>
        </tr>
       
   </tbody>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name:"task-item",
    props:{
        listTask:{type:Object, default:{}},
        index:{type:Number, default:0}
    },
 
    methods: {
        ...mapActions([
            'handleDelete',
            'changeIsShowForm',
            'handleEdit'
            
        ]),
        handleDeleteButton(){
           let data = this.listTask

           this.handleDelete(data);
        },
        handleClickEdit(taskEdit){
           
           let data = this.listTask
           console.log('data',data);
           this.handleEdit(data);

        }
    },

    computed: {
        ...mapState([
            'taskSelected'
        ]),
        // badge badge-danger
        getColorButtonLevel(){
            switch (this.listTask.level) {
                case 'High':
                    return "badge badge-warning"
                break;
                case 'Normal':
                    return "badge badge-info"
                break;
                case 'Medium':
                    return "badge badge-danger"
                break;
            
                default:
                    return ''
                break;
            }
        }
    },
    
}
</script>

<style>

</style>