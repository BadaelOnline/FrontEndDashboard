<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row" style="justify-content: space-between;">
      <div>
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
        <md-button @click="add" class="md-info">add notifications</md-button>
      <md-button @click="clean" class="md-primary">clean notifications</md-button>
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
          <div class="md-autocomplete">
            <md-autocomplete
              class="search"
              v-model="selectedEmployee"
              :md-options="employees"
            >
              <label>Search...</label>
            </md-autocomplete>
          </div>
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
                      <span class="notification">5</span>
                      <p class="hidden-lg hidden-md">Notifications</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="#">Mike John responded to your email</a></li>
                      <li><a href="#">You have 5 new tasks</a></li>
                      <li><a href="#">You're now friend with Andrew</a></li>
                      <li><a href="#">Another Notification</a></li>
                      <li><a href="#">Another One</a></li>
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
export default {
  data() {
    const lang = localStorage.getItem("lang") || "en";

    return {
      lang: lang,
      selectedEmployee: null,  
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone",
      ],
    };
  },
  methods: {
     // this function for notifications
      add () {
  this.$notify({
      group: 'foo', //  group to use multi notifications
      title: 'notifications',
      duration: -5000, //  if this option is negative  like -1000 notification will stay forever or until clicked
      speed: 1000,
      type: 'info',  // error , warn , success , info 
      text: 'notifications message example..you can also click on this message for clean it.',
    });
    },
     
      
    // methods for clean all notifications
   clean () {
     this.$notify({
        group: 'foo',
        clean: true
      })
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

};
</script>

<style scoped lang="css">
.md-toolbar .dropdown-menu li > a:hover,
.md-toolbar .dropdown-menu li > a:focus {
  color: #ffffff !important;
  background-color: #55ae59 !important;
  -webkit-box-shadow: 0 12px 20px -10px #55ae59;
  box-shadow: 0 12px 20px -10px #55ae59;
}
</style>
