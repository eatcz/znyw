import router from "../router";
import { useUserStore } from "../store/modules/user";



router.beforeEach((from, to, next) => {
    console.log(from)
    const userStore = useUserStore()
    console.log(userStore)
    next()
})