<template>
  <div class="collapse navbar-collapse w-auto h-auto h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/anasayfa" :class="getRoute() === 'anasayfa' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'لوحة القيادة' : 'Anasayfa'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/sunucular" :class="getRoute() === 'sunucular' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Sunucular'">
          <template v-slot:icon>
            <i class="fa fa-server text-warning text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/kirala" :class="getRoute() === 'kirala' ? 'active' : ''" :navText="this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Kirala'
          ">
          <template v-slot:icon>
            <i class="ni ni-shop text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/webftp" :class="getRoute() === 'files' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الفواتیر' : 'Dosya Yöneticisi'">
          <template v-slot:icon>
            <i class="fa fa-file-archive-o text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/ödemeler" :class="getRoute() === 'billing' ? 'active' : ''" :navText="this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Ödemeler'
          ">
          <template v-slot:icon>
            <i class="ni ni-credit-card text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/hesaplar" :class="getRoute() === 'accounts' ? 'active' : ''" :navText="this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Hesaplar'
          ">
          <template v-slot:icon>
            <i class="ni ni-circle-08 text-danger text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/sistem" :class="getRoute() === 'system' ? 'active' : ''" :navText="this.$store.state.isRTL ? 'الواقع الافتراضي' : 'Sistem Durumu'
          ">
          <template v-slot:icon>
            <i class="fa fa-bar-chart text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="mt-3 nav-item">
        <h6 v-if="this.$store.state.isRTL" class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'">
          صفحات المرافق
        </h6>
        <h6 v-else class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'">
          ACCOUNT
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-item url="/profil" :class="getRoute() === 'profil' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'حساب تعريفي' : 'Profil'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/giris" :class="getRoute() === 'giris' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'تسجيل الدخول' : 'Giriş Yap'">
          <template v-slot:icon>
            <i class="ni ni-single-copy-04 text-danger text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/kayit" :class="getRoute() === 'kayit' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'اشتراك' : 'Kayıt Ol'">
          <template v-slot:icon>
            <i class="ni ni-collection text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavItem from "./SidenavItem.vue";
import SidenavCard from "./SidenavCard.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String
  },
  data() {
    return {
      title: "Argon Dashboard 2",
      controls: "dashboardsExamples",
      isActive: "active"
    };
  },
  components: {
    SidenavItem,
    SidenavCard
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    }
  }
};
</script>
