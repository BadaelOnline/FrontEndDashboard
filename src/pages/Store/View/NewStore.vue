<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <CreateStoreForm data-background-color="green"> </CreateStoreForm>
      </div>
    </div>
  </div>
</template>

<script>
import { CreateStoreForm } from "@/pages";

export default {
  name: "newStore",
  components: {
    CreateStoreForm,
  
  },
};
</script>
