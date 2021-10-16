<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <md-menu
        class="lang"
        md-size="medium"
        :md-offset-x="127"
        :md-offset-y="-36"
      >
        <!-- <md-button md-menu-trigger notifications
          >Languages
      
          <select class="cu_1" v-model="lang" @change="handleChange($event)">
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </md-button> -->

        <!-- <md-menu-content> -->

        <!-- </md-menu-content> -->
      </md-menu>
      <sidebar-link to="/admin/dashboard">
         <md-icon>home</md-icon>
        <p>Dashboard</p>
      </sidebar-link> 
        <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
         <md-icon>dashboard</md-icon>
          <p class="setting-title"> Sections</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
          <li> <sidebar-link to="/admin/products" >
        <md-icon>person</md-icon>
        <p>Products</p>
      </sidebar-link>
         </li>
      <li> <sidebar-link to="/admin/categories">
        <md-icon>person</md-icon>
        <p>Categories</p>
      </sidebar-link>  </li>
      <li> <sidebar-link to="/admin/brands">
        <md-icon>person</md-icon>
        <p>Brands</p>
      </sidebar-link>  </li>
      <li> <sidebar-link to="/admin/sections">
        <md-icon>person</md-icon>
        <p>Section</p>
      </sidebar-link>  </li>
         <li> <sidebar-link to="/admin/customefeilds">
        <md-icon>person</md-icon>
        <p>Custome Feilds</p>
      </sidebar-link>  </li>
      <li><sidebar-link to="/admin/stores" class="disable">
        <md-icon>person</md-icon>
        <p>Stores</p>
      </sidebar-link>  </li>
      <li> <sidebar-link to="/admin/doctors" class="disable">
        <md-icon>person</md-icon>
        <p>Doctors</p>
      </sidebar-link>  </li>
      <li> <sidebar-link to="/admin/restaurants" class="disable">
        <md-icon>person</md-icon>
        <p>Restaurant</p>
      </sidebar-link>  </li>
      <li> <sidebar-link to="/admin/offers" class="disable">
        <md-icon>person</md-icon>
        <p>Offers</p>
      </sidebar-link>  </li>
   
          
        </ul>
      </drop-down>
         <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
          <i class="fa fa-cog"></i>
          <p class="setting-title">  Plathform Setting</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
         <li> <sidebar-link to="/admin/handelserver">
        <md-icon>content_paste</md-icon>
        <p>handel server</p>
      </sidebar-link>  </li>
      <li> <sidebar-link to="/admin/handelroutes">
       <md-icon>library_books</md-icon>
        <p>handel pages</p>
      </sidebar-link>  </li>
                <li> <sidebar-link to="/admin/style">
      <md-icon>bubble_chart</md-icon>
        <p> style</p>
      </sidebar-link>  </li>
                          <li> <sidebar-link to="/admin/headerhandel">
      <md-icon>bubble_chart</md-icon>
        <p> Header</p>
      </sidebar-link>  </li>
                      <li> <sidebar-link to="/admin/footerhandel">
      <md-icon>bubble_chart</md-icon>
        <p> Footer</p>
      </sidebar-link>  </li>
        </ul>
      </drop-down>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
      sidebarBackground: "blue",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
  },
  methods: {
    // handleChange(event) {
    //   localStorage.setItem("lang", event.target.value);
    //   window.location.reload();
    // },
  },
};
</script>

<style scoped>
.dropdown-toggle::after {
    display: none;
}
.dropdown-toggle{
  display: flex;
  gap: 20px;
  padding: 10px 35px;
  cursor: pointer;
  }
.setting-title {
  display: flex !important;
  justify-content: center !important;
  color: #fff;
  
}
.dropdown-menu{
  background-color: #3f4345;
  padding-bottom: 20px;
}
.disable[data-v-6253ecfd] {
  cursor: default;
  pointer-events: none;
  opacity: 0.3;
}
.lang {
  padding-left: 20px;
}
select {
  border: none;
  background-color: #9d9596;
  color: white;
  padding-left: 20px;
  appearance: none;
  cursor: pointer;
  width: 90px;
}
.md-button .md-button-content {
  cursor: none;
}
</style>
