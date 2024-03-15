import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import topNavDash from './components/topNav/topNavDash.vue';
import topNav from './components/topNav/topNav.vue';
import Login from './views/Login.vue'
import Calendar from './views/Calendar.vue'
import Dashboard from './views/Dashboard.vue'
import Help from './views/Help.vue'
import Profile from './views/Profile.vue'
import Search from './views/Search.vue'
import Settings from './views/Settings.vue'
import Tools from './views/Tools.vue'
import Tracker from './views/Tracker.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './styles/normalize.css';
import './styles/global.css';

const routes = [
  { path: '/', component: Login },
  { path: '/calendar', component: Calendar },
  { path: '/dashboard', component: Dashboard },
  { path: '/help', component: Help },
  { path: '/profile', component: Profile },
  { path: '/search', component: Search },
  { path: '/settings', component: Settings },
  { path: '/tools', component: Tools },
  { path: '/tracker', component: Tracker },
];

const router = createRouter({
  history: createWebHashHistory(), // Assuming you want hash-based routing
  routes,
});

const app = createApp(App); // Updated
app.use(router);
app.component('NavBar', NavBar); // Register the NavBar component
app.mount('#app');
