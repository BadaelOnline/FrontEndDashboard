<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <EditCutomeForm data-background-color="green"> </EditCutomeForm>
      </div>
    </div>
  </div>
</template>

<script>
import { EditCutomeForm } from "@/pages";

export default {
  name: "EditCutome",
  components: {
    EditCutomeForm,
  },
};
</script>
