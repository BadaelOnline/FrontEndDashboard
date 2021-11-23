<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <NewOfferForm data-background-color="green"> </NewOfferForm>
      </div>
    </div>
  </div>
</template>

<script>
import { NewOfferForm } from "@/pages";

export default {
  name: "NewCategory",
  components: {
    NewOfferForm,
  },
};
</script>
