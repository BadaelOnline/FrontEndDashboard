<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">New Store</h4>
        
        <p class="category">Complete your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
<form @submit="formSubmit" enctype="multipart/form-data">
                        <!-- <strong>Name:</strong>
                        <input type="text" class="form-control" v-model="name">
                        <strong>File:</strong>
                        <input type="file" class="form-control" v-on:change="onFileChange"> -->
    
                        <button class="btn btn-success">Submit</button>
        </form>
         
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>

import axios from 'axios';
export default {
  name: "CreateStoreForm",
   components: {

  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
     products: {
    "product": [
        {
            "local": "ar",
            "name": "afefr",
            "meta": "arefe",
            "short_des": "ar ar",
            "long_des": "ar ar"
        },
        {
            "local": "en",
            "name": "efen",
            "meta": "efefen",
            "short_des": "en en",
            "long_des": "en en"
        },
        {
            "local": "fr",
            "name": "ffer",
            "meta": "ffefr",
            "short_des": "fr fr",
            "long_des": "fr fr"
        }
    ],
    "brand_id": "1",
    "barcode": "mobiles",
    "slug": "mobiles",
    "rating_id": 1,
    "offer_id": 1,
    "is_active": 1,
    "is_appear": 1,
    "category": [
        {
            "category_id": 1
        },
        {
            "category_id": 2
        },
        {
            "category_id": 3
        }
    ],
        "sections": [
        {
            "section_id": 1
        },
        {
            "section_id": 2
        },
        {
            "section_id": 3
        },
                {
            "section_id": 4
        },
                {
            "section_id": 5
        },
                {
            "section_id": 6
        },
                        {
            "section_id": 7
        },
                        {
            "section_id": 8
        },
                        {
            "section_id": 9
        }
    ],
    "CustomFieldValue": [
        {
            "custom_field_value_id": 1
        },
        {
            "custom_field_value_id": 2
        },
        {
            "custom_field_value_id": 3
        }
    ],
    "images": [
        {
            "image": "{{fahed3}}",
            "is_cover": 1
        },
        {
            "image": "{{fahed2}}",
            "is_cover": 0
        },
        {
            "image": "{{feahd1}}",
            "is_cover": 0
        }
    ]
}
    };
  },
          submit() {
            axios.post( "/api/products/create",
            this.products);

            console.log(JSON.stringify(this.stores));
        },
  computed: {
   
  },
  mounted() {
  
  },
};
</script>
<style></style>
