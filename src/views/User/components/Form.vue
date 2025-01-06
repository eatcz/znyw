<template>
    <div class="form-wrapper">
        <Dialog :width="546" v-show="dialogVisible" :title="title">
            <template #content>
                <el-form ref="ruleFormRef" style="max-width: 600px" :model="form" status-icon label-width="auto"
                    class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username" type="text" autocomplete="off" placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item label="昵称" prop="nickname">
                        <el-input v-model="form.nickName" type="text" autocomplete="off" placeholder="请输入昵称" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" type="text" autocomplete="off" placeholder="请输入密码" />
                    </el-form-item>
                    <el-form-item label="性别" prop="gender">
                        <el-select placeholder="请选择" v-model="form.gender">
                            <el-option v-for="item in GENDER" :key="item.id" :value="item.label" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="联系方式" prop="phone">
                        <el-input v-model="form.phone" type="text" autocomplete="off" placeholder="请输入联系方式" />
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="form.email" type="text" autocomplete="off" placeholder="请输入邮箱" />
                    </el-form-item>
                    <el-form-item label="部门" prop="dept">
                        <el-select placeholder="请选择" v-model="form.dept.id">
                            <el-option v-for="item in GENDER" :key="item.id" :value="item.label" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="是否启用" prop="email">
                        <el-switch v-model="form.enabled" />
                    </el-form-item>
                    <el-form-item label="是否为领导" prop="email">
                        <el-switch v-model="form.leader" />
                    </el-form-item>
                    <el-form-item>
                        <div class="btns">
                            <el-button type="primary" @click="handleSubmit">
                                确认
                            </el-button>
                            <el-button @click="handleClose">取消</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </template>
        </Dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, inject, onMounted } from 'vue'
import { ElMessage, type FormInstance } from 'element-plus'
import { GENDER } from '../../../config'
import { addUser, updateUser } from '../../../api/user'
import { getDepartment } from '../../../api/department'
import type { RuleForm, } from '../types'

onMounted(() => {
    getDepartmentList()
})

// const getUserList = inject('getUserList')

const emit = defineEmits(['getUserList'])

const dialogVisible = ref(false)

const title = computed(() => form.value.id ? '修改' : '新增')


// interface RuleForm {
//     id?: number | string
//     username: string
//     password: string
//     nickName: string
//     gender: string
//     phone: string | number
//     email: string
//     enabled: boolean
//     leader: boolean
// }

const ruleFormRef = ref<FormInstance>()

const form = ref<RuleForm>({
    // id: '',
    username: '',//用户名
    password: '', //密码
    nickName: '',//用户名
    gender: '', //性别
    phone: '',//手机号
    email: '', //邮箱
    enabled: true,//是否启用
    leader: false, //是否为领导
    dept: {
        id: 2
        // name: '', //部门名称
        // pid: 0, //上级部门
    },
    jobs: [{
        id: 11,
        name: '',
        // enabled: false,
        // jobSort: 0
    }],
    roles: [
        {
            id: 3,
            dataScope: '',
            description: '',
            // level: 0
        }
    ]
})

// 显示弹窗
const handleShow = (row: any) => {
    // resetForm()
    if (row) {
        form.value = { ...row }
    }
    dialogVisible.value = true
}

// 关闭弹窗
const handleClose = () => {
    dialogVisible.value = false
}

// 提交
const handleSubmit = () => {
    ruleFormRef.value!.validate(async (valid) => {
        if (valid) {
            if (!form.value.id) {
                const res = await addUser(form.value)
                // if (res) {
                ElMessage({
                    message: '添加成功',
                    type: 'success'
                })
                emit('getUserList')
                resetForm()
                dialogVisible.value = false
                // }

            } else {
                const res = await updateUser(form.value)
                ElMessage({
                    message: '修改成功',
                    type: 'success'
                })
                emit('getUserList')
                resetForm()
                dialogVisible.value = false
            }

        }
    })

}

const department = ref([])

const getDepartmentList = async () => {
    const res = await getDepartment() as any
    department.value = res.content
}

// 重置form
const resetForm = () => {
    form.value = {
        // id: '',
        username: '',//用户名
        password: '', //密码
        nickName: '',//用户名
        gender: '', //性别
        phone: '',//手机号
        email: '', //邮箱
        enabled: true,//是否启用
        leader: false, //是否为领导
        dept: {
            // name: '', //部门名称
            // pid: 0, //上级部门
        },
        jobs: [{
            name: '',
            // enabled: false,
            // jobSort: 0
        }],
        roles: [
            {
                id: 3,
                dataScope: '',
                description: '',
                // level: 0
            }
        ]
    }
}

defineExpose({
    handleShow,
    handleClose
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