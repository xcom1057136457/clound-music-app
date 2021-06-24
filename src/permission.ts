import router from "./router";
import { getToken } from "@/utils/auth";

router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = to.meta.title ? "网易云音乐-" + to.meta.title : "网易云音乐";
  let token = getToken();
  setTimeout(() => {
    window.scroll(0, 0);
  }, 0);
  if (!token) {
    if (to.path == "/login") {
      next();
    } else {
      next("/login");
    }
  } else {
    if (to.path == "/login") {
      next("/");
    } else {
      next();
    }
  }
});

router.beforeEach(() => {})
