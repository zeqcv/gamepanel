import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Servers from "../views/Servers.vue";
import Billing from "../views/Billing.vue";
import Kirala from "../views/Kirala.vue";
import Hesaplar from "../views/Hesaplar.vue";
import Sistem from "../views/SistemDurumu.vue";
import Files from "../views/FileManager.vue";
import Profil from "../views/Profile.vue";
import Kayit from "../views/Kayit.vue";
import Giris from "../views/Giris.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/giris",
    meta: {
      title: "Rustopic ⚔️ Home"
  },
  },
  {
    path: "/anasayfa",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      title: "Rustopic ⚔️ Home"
  },
  },
  {
    path: "/kirala",
    name: "Kirala",
    component: Kirala,
    meta: {
      title: "Rustopic ⚔️ Home"
  },
  },
  {
    path: "/sunucular",
    name: "Servers",
    component: Servers,
    meta: {
      title: "Rustopic ⚔️ Home"
  },
  },
  {
    path: "/ödemeler",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/webftp",
    name: "File Manager",
    component: Files,
  },
  {
    path: "/hesaplar",
    name: "Hesaplar",
    component: Hesaplar,
  },
  {
    path: "/sistem",
    name: "Sistem",
    component: Sistem,
  },
  {
    path: "/profil",
    name: "Profile",
    component: Profil,
  },
  {
    path: "/giris",
    name: "Signin",
    component: Giris,
  },
  {
    path: "/kayit",
    name: "Signup",
    component: Kayit,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
