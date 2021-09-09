<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <NewCategoriesForm data-background-color="green"> </NewCategoriesForm>
      </div>
    </div>
  </div>
</template>

<script>
import { NewCategoriesForm } from "@/pages";

export default {
  name: "NewCategory",
  components: {
    NewCategoriesForm,
  },
};
</script>
