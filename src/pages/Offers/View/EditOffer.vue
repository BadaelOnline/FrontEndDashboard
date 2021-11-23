<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <EditOfferForm data-background-color="green"> </EditOfferForm>
      </div>
    </div>
  </div>
</template>

<script>
import { EditOfferForm } from "@/pages";

export default {
  name: "EditCategory",
  components: {
    EditOfferForm,
  },
};
</script>
