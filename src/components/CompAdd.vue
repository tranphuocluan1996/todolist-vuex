<template>
  <div>
    <comp-add-title />
    <!-- ADD : END -->

   <comp-add-toggle
   v-bind:isShowForm="isShowForm"
    />
  </div>
</template>

<script>

import CompAddTitle from './CompAddTile'
import CompAddToggle from './CompAddToggle'
import {mapState} from 'vuex'
export default {
    name:"form-add",
    components:{
        CompAddTitle,
        CompAddToggle
    },
   
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState([
            'isShowForm'
        ])
    },
}
</script>

<style>

</style>