<template>
    <div class="login_form flex item-center mx-auto">
        <el-form ref="ruleFormRef" :model="form" :rules="loginFormRules" label-width="120px" class="demo-ruleForm"
            status-icon>
            <el-form-item prop="name">
                <el-input prefix-icon="UserFilled" size="large" v-model="form.username" placeholder="请输入账号" />
            </el-form-item>
            <el-form-item prop="name">
                <el-input type="password" :show-password="true" prefix-icon="Lock" size="large" v-model="form.password"
                    placeholder="请输入密码" />
            </el-form-item>
            <el-form-item prop="name">
                <el-input prefix-icon="InfoFilled" size="large" v-model="form.code" placeholder="请输入验证码" />
            </el-form-item>
            <el-form-item>
                <div class="code">
                    <img :src="codeUrl" alt="">
                </div>
            </el-form-item>
        </el-form>
        <footer class="flex px-5 mt-5">
            <el-button type="default" size="large">重置</el-button>
            <el-button type="primary" size="large" @click="toLogin">登录</el-button>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { loginFormRules } from '../../../config/rules';
import { code, login } from '../../../api/login';
import { setToken } from '../../../utils';


onMounted(() => {
    getCode()
})

let form = reactive<any>({
    username: import.meta.env.VITE_USERNAME,
    password: import.meta.env.VITE_PASSWORD,
    code: import.meta.env.VITE_APP_LOGIN_VERIFICATION_CODE,
    uuid: ''
})

// 获取验证码

const codeUrl = ref<string>('')

const getCode = async () => {
    const { img, uuid } = await code()
    codeUrl.value = img
    form.uuid = uuid
    console.log(img, uuid)
}

const toLogin = async () => {
    // console.log(form)
    // const res = await login(form)
    // console.log(res)
    if (form.username == 'eatcz' && form.password == 123456) {
        alert('登录成功')
        setToken('123465')
    }
}
</script>

<style lang="scss" scoped>
.login_form {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    width: 30%;
    max-height: 420px;
    padding: 20px;
    background-color: '#fff';
    box-shadow: rgba(0, 0, 0, 0.1) 0 2px 10px 2px;
    ;
    border-radius: 10px;

}

.code {
    display: flex;
    justify-content: flex-end;
    width: 100%;

}

footer {
    width: 100%;
    gap: 1.25rem
        /* 20/16 */
    ;
    justify-content: space-around;
}

@media screen and (min-width: 48rem
    /* 768/16 */
) {
    .login_form {
        width: 30%;
    }
}
</style>
<style scoped>
.el-form {
    width: 100%;
}

:deep(.el-form-item__content) {
    width: 100%;
    margin-left: 0 !important;
}

:deep(.el-button) {
    flex: auto;
    border-radius: 20px;
}
</style>