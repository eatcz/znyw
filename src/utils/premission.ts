import { getToken } from ".";
import router from "../router";
import { useUserStore } from "../store/modules/user";

router.beforeEach((to, from, next) => {
    console.log(to)
  const userStore = useUserStore();
    const token = userStore.token;
    const localToken = getToken()

  // 如果用户已登录并且尝试访问登录页，重定向到首页
  if (token && token !== '' || localToken) {
    if (to.path === '/login') {
      next('/');  // 重定向到首页
    } else {
      next();  // 继续正常的路由导航
    }
  } else {
    // 如果用户未登录并且访问的不是登录页，重定向到登录页
    if (to.path !== '/login') {
      next('/login');
    } else {
      next();  // 如果访问的是登录页，允许进入
    }
  }
});
