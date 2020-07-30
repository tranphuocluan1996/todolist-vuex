<template>
   <form 
   v-if="isShowForm"
   action="" method="POST" class="form-inline justify-content-between">
        <div class="form-group">
            <label class="sr-only" for="">label</label>
            <input
            v-model="taskName" 
            type="text" class="form-control" placeholder="Task Name" />
        </div>
        <div class="form-group">
            <label class="sr-only" for="">label</label>
            <select v-model="level"  name="ds" class="form-control" required="required">
                <option value="">Lựa chọn level</option>
                <option value="Normal">Normal</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        </div>

        <!-- Nút thêm mới -->
        <button 
        v-if="taskSelected === null"
        v-on:click="handleAddItemInListTask"
        type="button" class="btn btn-primary">Submit</button>


        <!-- nút chỉnh sửa -->

        <button 
        v-else
        v-on:click="handleUpdate"
        type="button" class="btn btn-primary">UpDate</button>
        
        <button 
        v-on:click="handleClickCancel"
        type="button" class="btn btn-secondary">Cancel</button>
    </form>
</template>

<script>
import { mapActions,mapState} from 'vuex';
import uuidv4 from 'uuid/v4';
export default {
    name:"add-toggle",
    data() {
        return {
            taskName:'',
            level:''
        }
    },
   
    props:{
        isShowForm:{type:Boolean, default:false}
    },
    computed: {
        ...mapState([
            'taskSelected',
            
        ])
    },
  
    watch: {
        taskSelected:function(newData,oldData ){
            if(newData !== null){
                this.taskName = newData.name;
                this.level = newData.level
            }
        }
    },
    methods: {
         ...mapActions([
            'changeIsShowForm',
            'handleAddItem',
            'handleUpdateOfEdit'
        ]),

        //chỉnh sửa 

        handleUpdate(){
            let data = {
                id:this.taskSelected.id,
                taskName:this.taskName,
                level:this.level
            }
            this.handleUpdateOfEdit(data);
          
            console.log('handleUpdate',this.taskSelected);
        },
        //thêm task
        handleAddItemInListTask(){
            let data = {
                id: uuidv4(),
                name:this.taskName,
                level:this.level
            }
            this.handleAddItem(data);
            this.handleClickCancel();


        },

        handleClickCancel(){
             this.changeIsShowForm();

            this.handleReset();
           
        },
        handleReset(){
             //reset lại data
            this.taskName = '';
            this.level = ''
        },

    },

}
</script>

<style>

</style>