import Vue from "vue";
import Vuex from "vuex";
import listTask from "../mockData/listTask";
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		listTask,
		isShowForm: false,
		stringSearch: "",
		orderBy : 'name',
		orderDir : 'asc',
		taskSelected:null
	},   






	getters:{
		listTaskSearchSort(state){
			// const {stringSearch} = state;
			// var newItem = state.listTask.filter(item =>{
			// 	return item.name.toLowerCase().includes(stringSearch.toLowerCase());
			// });
			// var listTask = [...newItem];
			// listTask.sort(function(a,b){
			// 	var numberSort = state.orderDir === "asc" ? -1 : 1;
			// 	if(a[state.orderBy] < b[state.orderBy]){
			// 		return numberSort;
			// 	}else if (a[state.orderBy] > b[state.orderBy]) {
            //     return numberSort * -1;
            //   }
			// 	return 0;
			// })
			// return listTask;
			// console.log("stringSearch", stringSearch);
			var newItem = [];
			state.listTask.forEach(function(item,index){
			 if (item.name.toLowerCase().includes(state.stringSearch.toLowerCase()) === true) {
         		newItem.push(item);
       		}
		 	
		 });
		 var listTask = [...newItem];
			listTask.sort(function(a,b){
				var numberSort = state.orderDir === "asc" ? -1 : 1;
				if(a[state.orderBy] < b[state.orderBy]){
					return numberSort;
				}else if (a[state.orderBy] > b[state.orderBy]) {
                return numberSort * -1;
              }
				return 0;
			})
		 return listTask;

		 
		
		},

	},





	actions: {
		changeIsShowForm({ commit, state }) {
			// state.isShowForm = true;
			commit("CHANGE_STATUS_BUTTON_ADD", state);
		},
		//nhận giá trị từ input trong component search
		getHandleSearch({ commit, state }, data) {
			commit("GET_VALUE_SEARCH", data);
		},
		//sort
		getHandleSort({ commit, state }, data) {
			commit("GET_HANDLE_SORT", data);
		},
		//delete
		handleDelete({commit, state},data){
			let newListTast = state.listTask.filter(item => item.id !== data.id);
			console.log("newListTast", newListTast);
			commit("DELETE_ITEM", newListTast);
		},
		//add Item
		handleAddItem({commit}, data){
			commit("SUBMIT_ADD_ITEM", data);
		},
		//edit 
		handleEdit({commit}, data){
			commit("MUTATION_EDIT", data);
		},

		// edit xong thì update 

		handleUpdateOfEdit({commit},data){
			commit('UPDATE_ITEM',data)
			  
		}


		

 
	},

	mutations: {
		// thay đổi bật tắt Button addTask
		CHANGE_STATUS_BUTTON_ADD(state) {

			if(state.isShowForm === true){
				state.taskSelected = null;
			}
			state.isShowForm = !state.isShowForm;
		},
		//nhận giá trị từ input trong component search
		GET_VALUE_SEARCH(state, data) {
			state.stringSearch = data;
		},
		// sắp xếp
		GET_HANDLE_SORT(state, data) {
			state.orderBy = data.orderBy;
			state.orderDir = data.orderDir;
		},
		//delete
		DELETE_ITEM(state,newListTast){
			
			state.listTask = newListTast;
			
		},
		// add
		SUBMIT_ADD_ITEM(state, data){
			state.listTask.push(data);
		},
		// edit 
		MUTATION_EDIT(state, data){
			// console.log("taskEdit = ", data);
			state.taskSelected = data;
			console.log("taskSelected");
			state.isShowForm = true;
		},
		// update of edit
		UPDATE_ITEM(state, data){
			// Dùng hàm findIndex để tìm index rồi dùngg  hàm splice để xoá và thay thế giá trị tương ứng
			let index = state.listTask.findIndex(item => item.id === data.id);
			console.log("index", index,data.id);
			if(index !== -1){
				state.listTask.splice(index, 1, data);
			}
		}
		


		
	}
});

export default store;
