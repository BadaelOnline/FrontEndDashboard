<template>
  <md-toolbar md-elevation="0" class="md-transparent">
        <svg
      :id="`sp`"
      class="spinner"
      width="65px"
      height="65px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="path"
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
    <div class="md-toolbar-row" style="justify-content: space-between;">
      <div>
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <!-- <md-button @click="add" class="md-info">add notifications</md-button>
      <md-button @click="clean" class="md-primary">clean notifications</md-button> -->
      <div class="">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <li class="md-list-item">
            <a
              href="#/notifications"
              class="md-list-item-router md-list-item-container md-button-clean dropdown"
            >
              <div class="md-list-item-content">
                <drop-down>
                  <md-button
                    slot="title"
                    class="md-button md-just-icon md-simple"
                    data-toggle="dropdown"
                  >
                    <i class="fa fa-globe" aria-hidden="true"></i>
                  </md-button>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li>
                      <a
                        id="en"
                        href=""
                        class="md-list-item-container"
                        @click="enlang()"
                        >English</a
                      >
                    </li>
                    <li>
                      <a
                        id="ar"
                        href=""
                        class="md-list-item-container"
                        @click="arlang()"
                        >العربية</a
                      >
                    </li>
                  </ul>
                </drop-down>
              </div>
            </a>
          </li>
          <md-list>
            <li class="md-list-item">
              <a
                href="#/notifications"
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <drop-down>
                    <md-button
                      slot="title"
                      class="md-button md-just-icon md-simple"
                      data-toggle="dropdown"
                    >
                      <md-icon>notifications</md-icon>
                      <span class="notification">{{
                       approvedNotification.length
                      }}</span>
                      <p class="hidden-lg hidden-md">Notifications</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li
                        v-for="item in Notification"
                        :key="item.pr"
                        :id="item.id"
                        :notifiable_type="item.notifiable_type"
                        :parent="item.parent"
                        :data="item.data"
                         :class="{ non_read: item.read_at == null }"
                      >
             
                          <div class="contain-not" @click="readNotification(item.notification_id)">
                            <!--  @click="approve(item.id)"
                            to="{ path: `/admin/notifications/${item.id}`, params: { id: id } }"
                             -->
                            <div style="display: flex;">
                              <span class="type">{{
                                item.notifiable_type
                              }}</span>
                              <span class="time"
                                >{{ item.created_at.slice(0, 13) }} <br />
                                {{
                                  item.created_at.slice(
                                    14,
                                    item.created_at.length
                                  )
                                }}
                              </span>
                            </div>
                            <div class="message">{{ item.data.message }}</div>
                         
                          </div>
                   
                      </li>
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li>

            <md-list-item href="#/user">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    const lang = localStorage.getItem("lang") || "en";
    const page = window.localStorage.getItem("page") || 1;
    return {
      page: page,
      lang: lang,
     
    };
  },
  props:['id'],
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
    // this function for notifications
    add() {
      this.$notify({
        group: "foo", //  group to use multi notifications
        title: "notifications",
        duration: -5000, //  if this option is negative  like -1000 notification will stay forever or until clicked
        speed: 1000,
        type: "info", // error , warn , success , info
        text:
          "notifications message example..you can also click on this message for clean it.",
      });
    },

    // methods for clean all notifications
    clean() {
      this.$notify({
        group: "foo",
        clean: true,
      });
    },
    arlang() {
      localStorage.setItem("lang", "ar");
    },
    enlang() {
      localStorage.setItem("lang", "en");
    },
    // act() {
    // var ar = document.getElementById("title_lang2");
    // var en = document.getElementById("title_lang1");
    // if (localStorage.getItem("lang1") == "ar") {
    //   en.classList.remove("act");
    //   ar.classList.toggle("act");
    //   arabic.style.display = "block";
    //   english.style.display = "none";
    // } else {
    //   ar.classList.remove("act");
    //   en.classList.toggle("act");
    //   arabic.style.display = "none";
    //   english.style.display = "block";
    // }
    // },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
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

<style scoped lang="css">
.non_read{
  background-color: #b9d5b2;
}
.cvs {
  visibility: visible !important;
}
.contain-not {
  height: auto;
  display: grid;
  align-content: space-between;
  box-shadow: 1px 1px 8px #d5d1ec;
  padding: 10px;
  margin: 5px;
}
.contain-not .type {
  opacity: 0.5;
  margin-right: auto;
}
.contain-not .time {
  opacity: 0.7;
  color: #49a54d;
}
.contain-not .message {
  font-weight: 500;
  margin-top: 20px;
  opacity: 0.9;
}
.md-toolbar .dropdown-menu {
  width: 500px;
}
.md-toolbar .dropdown-menu li > a:hover .contain-not .time {
  color: #ffffff !important;
  background-color: #55ae59 !important;
  -webkit-box-shadow: 0 12px 20px -10px #55ae59;
  box-shadow: 0 12px 20px -10px #55ae59;
}
.md-toolbar .dropdown-menu li > a {
  padding: 0;
  margin: 0;
}
.md-toolbar .dropdown-menu li > a:hover,
.md-toolbar .dropdown-menu li > a:focus {
  color: #ffffff !important;
  background-color: #55ae59 !important;
  -webkit-box-shadow: 0 12px 20px -10px #55ae59;
  box-shadow: 0 12px 20px -10px #55ae59;
}
.dropdown-menu {
  overflow-y: scroll;
  height: 320px;
  scrollbar-width: none;
}
</style>
<style lang="scss" scoped>
$offset: 187;
$duration: 1.4s;

.spinner {
  animation: rotator $duration linear infinite;
  position: absolute;
  z-index: 50;
  visibility: hidden;
  left: 50%;
  top: 250%;
}
.spin-hide {
  display: none;
}
@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash $duration ease-in-out infinite,
    colors ($duration * 4) ease-in-out infinite;
}

@keyframes colors {
  0% {
    stroke: #4285f4;
  }
  25% {
    stroke: #de3e35;
  }
  50% {
    stroke: #f7c223;
  }
  75% {
    stroke: #1b9a59;
  }
  100% {
    stroke: #4285f4;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: $offset;
  }
  50% {
    stroke-dashoffset: $offset/4;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform: rotate(450deg);
  }
}
</style>
