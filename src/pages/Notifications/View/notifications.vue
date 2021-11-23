<template>
  <div class="content">
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
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Notifications</h4>
            <!-- <p class="category">Here is a subtitle for this table</p> -->
          </md-card-header>
          <md-card-content v-if="notification.notification_id== $route.params.id">
            <div :notification="notification">
              <md-table  >
                 <md-table-row>
                      <md-table-cell>Id</md-table-cell>
                      <md-table-cell>Type</md-table-cell>
                      <md-table-cell>Created at</md-table-cell>
                      <md-table-cell>Approved</md-table-cell>
                      <md-table-cell>Action</md-table-cell>
                 </md-table-row>
                <md-table-row
                  slot="md-table-row"
                  class="table-row"
                >
                  <md-table-cell md-label="Id">{{ notification.notification_id }}</md-table-cell>
                  <md-table-cell md-label="type">{{ notification.notifiable_type }}</md-table-cell>
                  <md-table-cell md-label="created at">{{
                    notification.created_at
                  }}</md-table-cell>
                  <md-table-cell md-label="approved">
                    <i
                      v-if="notification.data.notification[0].is_approved == 'Approved'"
                      class="fa fa-check icon_status"
                      style="color: rgb(39, 208, 4)"
                    ></i>
                    <i
                      v-else
                      class="fa fa-times icon_status"
                      style="color: #f20b07"
                    ></i
                  ></md-table-cell>
                  <md-table-cell md-label="Action">
                    <md-button class="md-just-icon md-simple md-primary" @click="approved">
                      <!--  @click="tooltipActive = !tooltipActive" -->
                      <md-icon
                        style="font-size: 25px !important;color: #469510 !important;"
                        >move_to_inbox</md-icon
                      >
                      <md-tooltip md-direction="top">Accept Offer</md-tooltip>
                    </md-button>
                    <md-button class="md-just-icon md-simple md-danger" @click="notApproved">
                      <md-icon>close</md-icon>
                      <md-tooltip md-direction="top">Close Offer</md-tooltip>
                    </md-button>
                  </md-table-cell>

                  <div
                    class="details-not top"
                  >
                    <div class="id">id : {{ notification.data.notification[0].id }}</div>
                    <div class="dis">
                      <div class="md-just-icon md-simple md-danger">
                        <span>{{ notification.data.notification[0].name}}</span>
                        <md-tooltip md-direction="top">name</md-tooltip>
                      </div>
                      <div class="md-just-icon md-simple md-danger">
                        <span>{{ notification.data.notification[0].short_description}}</span>
                        <md-tooltip md-direction="top">discription</md-tooltip>
                      </div>
                    </div>
                    <div class="price">
                      <div class="md-just-icon md-simple md-danger">
                        <span class="main-price">{{ notification.data.notification[0].price}}</span>
                        <md-tooltip md-direction="top">main price</md-tooltip>
                      </div>
                      <div class="md-just-icon md-simple md-danger">
                        <span>{{ notification.data.notification[0].selling_price}} </span>
                        <md-tooltip md-direction="top"
                          >selling price</md-tooltip
                        >
                      </div>
                    </div>
                    <div class="time">
                      <div class="md-just-icon md-simple md-danger">
                        <span>{{ notification.data.notification[0].started_at}} </span>
                        <md-tooltip md-direction="top">start time</md-tooltip>
                      </div>
                      <div class="md-just-icon md-simple md-danger">
                        <span>{{ notification.data.notification[0].ended_at}}</span>
                        <md-tooltip md-direction="top">end time</md-tooltip>
                      </div>
                    </div>
                  </div>
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
.icon_status {
  padding: 10px 15px;
}

.top {
  transform: translate(-50%, 46%);
}

.details-not {
  display: none;
  padding: 20px;
  position: absolute;
  width: 60%;
  z-index: 99;
  top: 50%;
  left: 50%;
  background-color: #f5f5f5;
  border-radius: 5px;
  font-weight: 700;
  color: #777676;
  box-shadow: 1px 1px 10px #3f4241;
}
.top::before {
  content: "";
  position: absolute;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #fff9f9 transparent;
  top: -20px;
  left: 50%;
  z-index: 100;
}
.table-row:hover .details-not {
  display: block;
}
.details-not div {
  margin: 5px 0;
}
.details-not .id {
  display: flex;
  justify-content: center;
  color: #9c27b0;
}
.details-not .dis,
.details-not .price,
.details-not .time {
  display: flex;
  justify-content: space-around;
}
.details-not .dis,
.details-not .time {
  color: #00bcd4;
}
.details-not .price {
  color: rgb(22, 133, 81);
}
.details-not .price .main-price {
  text-decoration-line: line-through;
  color: rgb(214, 55, 55);
  opacity: 0.8;
}
</style>
<style lang="scss" scoped>
.cvs {
  visibility: visible !important;
}
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

<script>
import axios from "axios";
export default {
  name: "simple-table",

  data() {
    return {
      selected: [],
      tooltipActive: false,
      users: [
        {
          id: 1,
          title: "Create Product Request",
          approved: false,
          type: "Products",
          createdat: "2021-09-15 03:10:28",
        },
      ],
       notification: [ ],
    };
  },
    methods:{
  approved(){
        document.getElementById(`sp`).classList.toggle("cvs"); 
   axios
        .put(`/api/offer/approved/${this.notification.data['0'].id }`)
        .then((res) => {
          console.log("approved:",  res);
              document.getElementById(`sp`).classList.toggle("cvs"); 
         alert("Success This Offer Approved ");
         this.fetch();
        })
        .catch(function(error) {
          if (error) {
            console.log("error:", error);
        document.getElementById(`sp`).classList.toggle("cvs"); 
         alert("Sorry Something Wrong !!! we will work to repair this soon");

          }
        });
      },
        notApproved(){
              document.getElementById(`sp`).classList.toggle("cvs"); 
   axios
        .put(`/api/offer/notapproved/${this.notification.data['0'].id }`)
        .then((res) => {
          console.log("notApproved:",  res);
              document.getElementById(`sp`).classList.toggle("cvs"); 
         alert("Success This Offer Closed ");
         this.fetch();
        })
        .catch(function(error) {
          if (error) {
            console.log("error:", error);
        document.getElementById(`sp`).classList.toggle("cvs"); 
         alert("Sorry Something Wrong !!! we will work to repair this soon");
          }
        });
      },
 async  fetch() {
     await  axios
        .get(`/api/notification/${this.$route.params.id}`)
        .then((res) => {
          console.log("notification new:",  res.data.notification[0]);
          this.notification = res.data.notification[0];
      
        })
        .catch(function(error) {
          if (error) {
            console.log("error:", error);
         
          }
        });
    },
  },
  mounted(){
    this.fetch();
  }
};
</script>

