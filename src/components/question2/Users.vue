<template>
    <div>
      <input type="text" v-model="searchQuery" placeholder="Search">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginatedUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button @click="previousPage">Previous</button>
        <button @click="nextPage">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import {mapGetters} from 'vuex';
  export default {
    data () {
        return {
            searchQuery: ''
        }
    },
    computed: {
      ...mapGetters([
        'users',
        'currentPage',
        'pageSize',
      ]),
      paginatedUsers() {
        const filteredUsers = this.users && this.users.filter(user => {
            return Object.values(user).some(value => {
                if (typeof value === 'object' && value !== null) {
                return Object.values(value).some(subValue => {
                    if (typeof subValue === 'string') {
                    return subValue.includes(this.searchQuery);
                    } else {
                    return false;
                    }
                });
                } else if (typeof value === 'string') {
                return value.includes(this.searchQuery);
                } else {
                return false;
                }
            });
        });
        const startIndex = (this.currentPage - 1) * this.pageSize;
        return filteredUsers.slice(startIndex, startIndex + this.pageSize);
      }
    },
    methods: {
      previousPage() {
        this.$store.commit('previousPage');
      },
      nextPage() {
        this.$store.commit('nextPage');
      }
    },
    created () {
      this.$store.dispatch('fetchUsers')
    }
  }
  </script>
  