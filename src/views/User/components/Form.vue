<template>
    <div class="form-wrapper">
        <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon label-width="auto"
            class="demo-ruleForm">
            <el-form-item v-for="(item, index) in formItems" :key="index" :label="item.label" :prop="item.prop">
                <!-- <el-input v-model="ruleForm[item.prop]" type="text" autocomplete="off" /> -->
            </el-form-item>

            <el-form-item>
                <div class="btns">
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        确认
                    </el-button>
                    <el-button @click="resetForm(ruleFormRef)">取消</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

interface RuleForm {
    name: string
    idcard: string
    age: string
    birthday: string
    post: string
    department: string
    phone: string
    education: string
}

const props = defineProps({
    close: Function
})

console.log(props)

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive<RuleForm>({
    name: '',
    idcard: '',
    age: '',
    birthday: '',
    post: '',
    department: '',
    phone: '',
    education: ''
})

const formItems = ref([
    {
        label: '姓名',
        prop: 'name'
    },
    {
        label: '身份证号',
        prop: 'idcard'
    },
    {
        label: '性别',
        prop: 'age'
    },
    {
        label: '出生日期',
        prop: 'birthday'
    },
    {
        label: '职位',
        prop: 'post'
    },
    {
        label: '部门',
        prop: 'department'
    },
    {
        label: '联系方式',
        prop: 'phone'
    },
    {
        label: '教育背景',
        prop: 'education'
    },
])


const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    // props.close()
}
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
</style>