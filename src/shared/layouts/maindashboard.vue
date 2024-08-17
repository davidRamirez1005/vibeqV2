<template>
  <div className="horizontalMenucontainer">
    <Switcher />
    <div className="page">
      <Header />
      <Sidebar />
      <div className="main-content app-content">
        <div className="container-fluid">
          <router-view />
        </div>
      </div>
      <Rightsidebar />
      <Footer />
    </div>
    <Backtotop />
  </div>
</template>
<script>
import Header from "../components/header/header.vue";
import Footer from "../components/footer/footer.vue";
import Rightsidebar from "../components/rightsidebar/rightsidebar.vue";
import Sidebar from "../components/sidebar/sidebar.vue";
import Switcher from "../components/switcher/switcher.vue";
import Backtotop from "../components/backtotop/backtotop.vue";
export default {
  beforeCreate() {
  },
  components: {
    Header,
    Rightsidebar,
    Footer,
    Sidebar,
    Switcher,
    Backtotop,
  },
};
</script>
