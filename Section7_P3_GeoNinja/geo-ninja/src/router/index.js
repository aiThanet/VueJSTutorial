import Vue from "vue";
import Router from "vue-router";
import ViewProfile from "@/components/profile/ViewProfile";
import GoogleMap from "@/components/home/GoogleMap";
import Signup from "@/components/auth/Signup";
import Login from "@/components/auth/Login";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "GoogleMap",
      component: GoogleMap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/profile/:id",
      name: "ViewProfile",
      component: ViewProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  // check to see if route requires auth
  console.log("from");
  console.log(from);
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser;
    if (user) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
