import router from './router';
import { getToken } from '@/utils/auth';
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    document.title = to.meta.title
      ? '网易云音乐-' + to.meta.title
      : '网易云音乐';
    const token = getToken();

    if (!token) {
      if (to.path == '/login') {
        next();
      } else {
        next('/login');
      }
    } else {
      if (to.path == '/login') {
        next('/');
      } else {
        next();
      }
    }
  }
);
