<template>
  <Pageheader heading=" Full Calendar" :maintitle='["Advanced-UI", "Calendar"]' />
  <div>
    <Calendardata />
  </div>
</template>

<script>
import Pageheader from "../../../shared/components/pageheader/Pageheader.vue";
import Calendardata from "./datacalendar.vue";
export default {
  components: { Pageheader, Calendardata },
  data() {
    return {
    };
  },
};
</script>

<style scoped></style>
