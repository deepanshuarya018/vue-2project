import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        users: [],
        currentPage: 1,
        pageSize: 5,
    },
    getters: {
        users: (state) => state.users,
        currentPage: (state) => state.currentPage,
        pageSize: (state) => state.pageSize
    },
    actions:{
        fetchUsers({ commit }) {
            axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
              commit('setUsers', res && res.data);
            })
        }
    },
    mutations:{
        setUsers(state, users) {
            state.users = users;
        },
        previousPage(state) {
            if (state.currentPage > 1) {
                state.currentPage--;
            }
        },
        nextPage(state) {
            const lastPage = Math.ceil(state.users.length / state.pageSize);
            if (state.currentPage < lastPage) {
                state.currentPage++;
            }
        },
        setSearchQuery(state, query) {
            state.searchQuery = query;
            state.currentPage = 1;
        }
    }
})