<template>
<div class="col-12">
        <div class="input-group">
            <input
            v-bind:value="stringSearch"
            v-on:input="handleSearch"
            type="text" class="form-control" placeholder="Search for..." />
            <span class="input-group-append">
                <button 
                v-on:click="handleClickClear"
                class="btn btn-info" type="button">Clear!</button>
            </span>
        </div>
</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    name:"comp-search",
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState([
            'stringSearch',
            'listTask'
        ]),

    },
    methods: {
        ...mapActions([
            'getHandleSearch'
        ]),
        handleSearch(e){
            console.log('giá trị nhập trong ô input =',e.target);
          
            this.getHandleSearch(e.target.value)
        },

        //clear input search 
        handleClickClear(){
           this.getHandleSearch('')
        }
    },
     
}
</script>

<style>

</style>