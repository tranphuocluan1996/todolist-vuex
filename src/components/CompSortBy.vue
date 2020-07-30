<template>
<div class="col-12">
    <div class="form-group">
        <b-dropdown text="Sort by">
            <b-dropdown-item 
            v-on:click="handleSort('name','asc')"
            >Name ASC</b-dropdown-item>
            <b-dropdown-item
             v-on:click="handleSort('name','desc')"
            >Name DESC</b-dropdown-item>
            <b-dropdown-item 
             v-on:click="handleSort('level','asc')"
            active>Level ASC</b-dropdown-item>
            <b-dropdown-item 
             v-on:click="handleSort('level','desc')"
            >Level Desc</b-dropdown-item>	
        </b-dropdown>
        <span class="sort badge badge-success badge-medium">{{this.orderBy}} - {{this.orderDir}}</span>	
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
export default {
    name:"comp-sort-by",
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState([
            'orderDir',
            'orderBy',
            
        ])
    },
    methods: {
        ...mapActions([
            'getHandleSort',
            
        ]),
        handleSort(orderBy, orderDir){
            console.log(orderBy,'-',orderDir);
          let data = {
                orderBy:orderBy,
                orderDir:orderDir

            }
            this.getHandleSort(data)
        }
    },
   
}
</script>

<style>
    .sort {
        text-transform: uppercase;
    }
</style>