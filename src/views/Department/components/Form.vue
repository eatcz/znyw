<template>
    <div class="form-wrapper">
        <Dialog :width="546" v-show="dialogVisible" :title="title">
            <template #content>
                <el-form ref="ruleFormRef" style="max-width: 600px" :model="form" status-icon label-width="auto"
                    class="demo-ruleForm">
                    <el-form-item label="名称" prop="name">
                        <el-input v-model="form.name" type="text" autocomplete="off" placeholder="请输入名称" />
                    </el-form-item>
                    <el-form-item label="排序" prop="deptSort">
                        <el-input-number v-model="form.deptSort" :min="0" :max="100" />
                    </el-form-item>
                    <!-- <el-form-item label="部门" prop="pid">
                        <el-select placeholder="请选择" v-model="form.pid">
                            <el-option v-for="item in depList" :key="item.id" :label="item.label" :value="item.id" />
                        </el-select>
                    </el-form-item> -->
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
import { ref, computed } from 'vue'
import { ElMessage, type FormInstance } from 'element-plus'
import { addDepartment, updateDepartment } from '../../../api/department'
import type { RuleForm, } from '../types'


const emit = defineEmits(['getDepList', 'load'])

const dialogVisible = ref(false)

const title = computed(() => form.value.id ? '修改' : '新增')

const ruleFormRef = ref<FormInstance>()

const form = ref<RuleForm>({
    name: '',
    pid: 0,
    "deptSort": 0,
    "enabled": true,
    "roles": [
        {
            "dataScope": "",
            "description": "",
            "level": 0
        }
    ]
})

// 显示弹窗
const handleShow = (row: any) => {
    resetForm()
    if (row) {
        form.value = { ...form.value, ...row }
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
                const res = await addDepartment(form.value)
                console.log(res)
                ElMessage({
                    message: '添加成功',
                    type: 'success'
                })
                emit('getDepList')
                emit('load')
                resetForm()
                dialogVisible.value = false
            } else {
                const res = await updateDepartment(form.value)
                // console.log(res)
                ElMessage({
                    message: '修改成功',
                    type: 'success'
                })
                emit('getDepList')
                emit('load')

                resetForm()
                dialogVisible.value = false
            }

        }
    })
}

// 重置form
const resetForm = () => {
    form.value = {
        name: '',
        pid: '',
        "deptSort": 0,
        "enabled": true,
        "roles": [
            {
                "dataScope": "",
                "description": "",
                "level": 0
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