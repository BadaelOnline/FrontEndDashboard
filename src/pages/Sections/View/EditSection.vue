<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <EditSectionForm data-background-color="green"> </EditSectionForm>
      </div>
    </div>
  </div>
</template>

<script>
import { EditSectionForm } from "@/pages";

export default {
  name: "editsection",
  components: {
    EditSectionForm,
  },
};
</script>
