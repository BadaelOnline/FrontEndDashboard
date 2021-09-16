<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <NewSectionForm data-background-color="green"> </NewSectionForm>
      </div>
    </div>
  </div>
</template>

<script>
import { NewSectionForm } from "@/pages";

export default {
  name: "newsection",
  components: {
    NewSectionForm,
  },
};
</script>
