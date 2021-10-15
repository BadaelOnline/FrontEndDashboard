<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Routes Plathform Controler</h4>
            <!-- <p class="category">Here is a subtitle for this table</p> -->
          </md-card-header>
          <md-card-content>
         
               <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Status">    
            <i v-if="item.Status" class="fa fa-check icon_status" style="color: rgb(39, 208, 4)"></i>
            <i v-else class="fa fa-times icon_status" style="color: #f20b07"></i></md-table-cell>
        <md-table-cell md-label="Action"> 
         <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button>
      </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
       
         
          </md-card-content>
        </md-card>
      </div>


    </div>
  </div>
</template>
<style scoped>
.icon_status{
    padding: 10px 15px;
}
</style>
<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: [],
      users: [
        {
          id: 1,
          name: "Home",
          Status: true,
         
        },
       {
          id: 2,
          name: "Products",
          Status: true,
        
        },
        {
          id: 3,
          name: "Stores",
          Status: false,
         
        },
        {
          id: 4,
          name: "Offers",
          Status: true,
       
        },
       {
          id: 5,
          name: "Resturants",
          Status: false,
        
        },
        {
          id: 6,
          name: "Company",
          Status: false,
         
        },
      ],
    };
  },
};
</script>

