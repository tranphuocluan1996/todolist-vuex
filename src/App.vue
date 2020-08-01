<template>
  <div id="app">
  <div class="container">

		<!-- TITLE : START -->
		<div class="page-header">
			<h1>Project TodoList Basic <small>Use Vue</small></h1>
			<hr class="my-4">
		</div>
		<!-- TITLE : END -->


		<div class="row">
			<!-- CONTROL (SEARCH + SORT + ADD) : START -->
			<div class="col-12 col-lg-6">
				<div class="row">
					<!-- SORT : START -->
					<comp-sort-by />
					<!-- SORT : END -->

					<!-- SEARCH : START -->
					<comp-search 
				
					/>
					<!-- SEARCH : END -->
				</div>
			</div>
			<!-- CONTROL (SEARCH + SORT + ADD) : END -->

			<!-- FORM : START -->
			<div class="col-12 col-lg-6">
				<!-- ADD : START -->
				<comp-add />
			</div>
			<!-- FORM : END -->
		</div>

		<!-- LIST : START -->

		<task-list />
	</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import TaskList from './components/TaskList'
import CompAdd from './components/CompAdd'
import CompSearch from './components/CompSearch'
import CompSortBy from './components/CompSortBy'
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  computed: {
	  ...mapState([
		  'listTask'
	  ])
  },
	watch: {
		listTask: function (newTasks) {
			var taskString =  JSON.stringify(newTasks);
				localStorage.setItem('tasks',taskString)
		}

		
	},






  components:{
	  CompSortBy,
	  CompSearch,
	  CompAdd,
	  TaskList
  }
}
</script>

<style>

body {
    padding: 100px 0;
}
.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    vertical-align: middle;
}

.container > .row {
    margin-top: 20px;
    margin-bottom: 30px;
}

span.badge-medium {
	padding: 11px 10px;
    margin: 0px 8px;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
}

@media (max-width: 992px) {
    .add-task {
        margin-top: 50px;
    }
}

</style>
