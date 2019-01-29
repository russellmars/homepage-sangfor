<template>
  <div class="home">
    <s-first-screen/>
    <s-content />
  </div>
</template>

<script>
// import SNavbar from "@/components/SNavbar";
import SFirstScreen from "@/components/SFirstScreen";
import SContent from "@/components/SContent";
export default {
  name: "home",
  components: {
    // SNavbar,
    SFirstScreen,
    SContent
  },
  mounted() {}
};
</script>
