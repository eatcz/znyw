<template>
    <div class="form-wrapper">
        <el-form ref="ruleFormRef" style="max-width: 600px" :model="form" status-icon label-width="auto"
            class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" type="text" autocomplete="off" placeholder="请输入姓名" />
            </el-form-item>
            <el-form-item label="昵称" prop="nickname">
                <el-input v-model="form.nickName" type="text" autocomplete="off" placeholder="请输入姓名" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="text" autocomplete="off" placeholder="请输入姓名" />
            </el-form-item>
            <!-- <el-form-item label="身份证号" prop="idcard">
                <el-input v-model="form.idcard" type="text" autocomplete="off" placeholder="请输入身份证号" />
            </el-form-item> -->
            <el-form-item label="性别" prop="gender">
                <el-select placeholder="请选择" v-model="form.gender">
                    <el-option v-for="item in GENDER" :key="item.id" :value="item.label" />
                </el-select>
            </el-form-item>
            <!-- <el-form-item label="出生日期" prop="birthday">
                <el-date-picker v-model="form.birthday" type="dates" placeholder="请选择出生日期" />
            </el-form-item> -->
            <!-- <el-form-item label="职位" prop="post">
                <el-select placeholder="请选择" v-model="form.post">
                    <el-option :value="1" />
                </el-select>
            </el-form-item>
            <el-form-item label="部门" prop="department">
                <el-select placeholder="请选择" v-model="form.department">
                    <el-option :value="1" />
                </el-select>
            </el-form-item> -->
            <el-form-item label="联系方式" prop="phone">
                <el-input v-model="form.phone" type="text" autocomplete="off" placeholder="请输入姓名" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" type="text" autocomplete="off" placeholder="请输入姓名" />
            </el-form-item>
            <!-- <el-form-item label="教育背景" prop="education">
                <el-select placeholder="请选择" v-model="form.education">
                    <el-option :value="1" />
                </el-select>
            </el-form-item>
            <el-form-item label="工作经历" prop="experience">
                <el-input v-model="form.experience" type="text" autocomplete="off" placeholder="请输入姓名" />
            </el-form-item>
            <el-form-item label="在职状态" prop="status">
                <el-select placeholder="请选择" v-model="form.status">
                    <el-option :value="1" />
                </el-select>
            </el-form-item> -->
            <!-- <el-form-item label="员工编号" prop="number">
                <el-input v-model="form.number" type="text" autocomplete="off" placeholder="请输入姓名" />
            </el-form-item> -->

            <el-form-item>
                <div class="btns">
                    <el-button type="primary" @click="submitForm">
                        确认
                    </el-button>
                    <el-button @click="handleClose">取消</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, inject, computed } from 'vue'
import type { FormInstance } from 'element-plus'
import { GENDER } from '../../../config'
import { addUser } from '../../../api/user'

interface Dialog {
    handleClose: () => boolean
    handleSubmit: () => string
}

const dialog = inject('dialog') as Dialog


interface RuleForm {
    id?: number | string
    username: string
    password: string
    nickName: string
    gender: string
    phone: string | number
    email: string
    // idcard: string
    // gender: string
    // birthday: string
    // post: string
    // department: string
    // phone: string
    // education: string
    // experience: string
    // status: string
    // number: string | number
}

const ruleFormRef = ref<FormInstance>()



const form = reactive<RuleForm>({
    username: '',//用户名
    password: '', //密码
    nickName: '',//用户名
    gender: '', //性别
    phone: '',//手机号
    email: '', //邮箱
    // idcard: '',
    // gender: '', //性别
    // birthday: '',
    // post: '',
    // department: '',
    // phone: '',
    // education: '',
    // experience: '',
    // status: '',
    // number: ''
})

// const formItems = ref([
//     {
//         label: '姓名',
//         prop: 'name'
//     },
//     {
//         label: '身份证号',
//         prop: 'idcard'
//     },
//     {
//         label: '性别',
//         prop: 'age'
//     },
//     {
//         label: '出生日期',
//         prop: 'birthday'
//     },
//     {
//         label: '职位',
//         prop: 'post'
//     },
//     {
//         label: '部门',
//         prop: 'department'
//     },
//     {
//         label: '联系方式',
//         prop: 'phone'
//     },
//     {
//         label: '教育背景',
//         prop: 'education'
//     },
// ])

// 关闭弹窗
const handleClose = () => {
    dialog.handleClose()
}

const submitForm = (id?: string | number) => {
    console.log(`id`, id)
    if (!ruleFormRef.value) return
    ruleFormRef.value.validate(async (valid) => {
        if (valid) {
            if (!id) {
                // dialog.handleSubmit()
                const res = await addUser(form)
                console.log(res)
                handleClose()
                console.log(form)
            } else {
                form.id = id
                console.log(form.id)
            }

        } else {
            console.log('error submit!')
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

defineExpose({
    submitForm
})
</script>

<style scoped lang='scss'>
.btns {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-top: 30px;
}
</style>


<style scoped>
:deep(.el-form-item__label) {
    color: #fff;
}

:deep(.el-input__wrapper) {
    background-color: #000 !important;
    box-shadow: none !important;
    border: 1px solid #0256FF;
}

:deep(.el-input__inner) {
    background-color: #000 !important;
    color: #fff;
}

:deep(.el-button) {
    width: 120px !important;
    /* height: 30px !important; */
    background: rgba(47, 109, 255, 0.2);
    border: none;
    color: #fff;
}

:deep(.el-select__wrapper) {
    background-color: #000 !important;
    box-shadow: none !important;
    border: 1px solid #0256FF;
    color: #fff;
}

:deep(.el-date-editor) {
    width: 100% !important;
}
</style>