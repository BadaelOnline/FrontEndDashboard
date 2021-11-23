<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <md-field>
        <label>Search</label>
        <md-input v-model="search" type="text"></md-input>
      </md-field>
    </li>
    <li>
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        <i class="material-icons">dashboard</i>
        <p>Dashboard</p></a
      >
    </li>

    <li>
      <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
          <i class="material-icons">notifications</i>
          <span class="notification">{{approvedNotification.length}}</span>
          <p>Notifications</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
          <li  v-for="item in Notification"
                        :key="item.pr"
                        :id="item.id"
                        :notifiable_type="item.notifiable_type"
                        :parent="item.parent"
                        :data="item.data"
                        @click="readNotification(item.notification_id)"
          ><a href="#">{{ item.data.message }}</a></li>
        
        </ul>
      </drop-down>
    </li>
    <li>
      <a href="#" data-toggle="dropdown" class="dropdown-toggle"
        ><i class="material-icons">person</i>
        <p>Profile</p></a
      >
    </li>
  </ul>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: null,
    };
  },
    methods: {
    // read notification
     readNotification(i) {  
       var self = this;   
          document.getElementById(`sp`).classList.toggle("cvs"); 
          axios
            .put(`/api/notification/${i}`)
            .then(function(response) {
              if (response.statusText == "OK") {
              console.log(response);
               setTimeout(() => {
           self.$router.push({name:'Notifications', params:{id:i}});
            document.getElementById(`sp`).classList.toggle("cvs"); 
             self.$store.dispatch("loadNotification");
             
              }, 1000);
              }
            })
            .catch(function(error) {
              if (error.response) {
                console.log(error.response.data);
              }
            });
    },
    },
    computed: {
    ...mapState({
      Notification: (state) => state.All.Notification,
      total_page: (state) => state.All.total_page,
    }),
     approvedNotification() {
        return this.Notification.filter((el) => {
         return  el.read_at == null;
        });
    },
 
    
  },
  mounted() {
    this.$store.dispatch("loadNotification");
  },
};
</script>
