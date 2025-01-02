<template>
    <div class="user-wrapper">
        <div class="title-wrapper">
            <h3 class="title">人员列表</h3>
            <div class="button-wrapper">
                <!-- <div class="button" v-for="item in fnList" :key="item.id"> -->
                <div class="button" @click="handleAdd">
                    <img :src="getImageUrl('users')" alt="">
                    <span>新增</span>
                </div>
                <div class="button">
                    <img :src="getImageUrl('import')" alt="">
                    <span>导入</span>
                </div>
            </div>
        </div>

        <div class="table-wrapper">
            <el-table :data="tableData" style="width: 100%" :row-style="table_row_style"
                :header-row-style="table_header_row_style">
                <el-table-column prop="username" label="姓名" align="center" width="180">
                </el-table-column>
                <el-table-column prop="job_status" label="在职状态" align="center" width="180">
                    <template #default="scope">
                        <p style="color: #67C23A;">{{ scope.row.status }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="level" align="center" label="职级">
                    <template #default="scope">
                        <el-tag type="success">{{ scope.row.level }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="contact_information" align="center" label="联系方式">
                    <template #default="scope">
                        <p>{{ scope.row.contact_information }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="department" align="center" label="部门">
                    <template #default="scope">
                        <p> {{ scope.row.department }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="status" align="center" label="状态">
                    <template #default="scope">
                        <p> {{ scope.row.status }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="certificate" align="center" label="证书">
                    <template #default="scope">
                        <p> {{ scope.row.certificate }}</p>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作">
                    <template #default>
                        <el-link :underline="false" type="primary" @click="handleShowDetail">查看详情</el-link>
                        <el-link :underline="false" type="primary" style="margin: 0 15px;"
                            @click="handleUpdate">修改</el-link>
                        <el-link :underline="false" type="primary" @click="handleDelete">删除</el-link>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background layout="prev, pager, next" :total="1000" />
            </div>
        </div>
    </div>


    <Dialog :width="766" :height="592" v-show="detaildialogVisible" title="人员信息">
        <template #content>
            <Information />
        </template>

        <template #footer>
            <div class="btn" @click="handleDetailClose">关闭</div>
        </template>
    </Dialog>

    <Dialog :width="546" v-show="dialogVisible" :title="title">

        <template #content>
            <Form ref="formRef" />
        </template>
    </Dialog>
</template>

<script setup lang='ts'>
import { computed, onMounted, provide, ref } from 'vue'
import { getImageUrl } from '../../utils'
import { getUser } from '../../api/user'
import Dialog from '../../components/Dialog.vue'
import Form from './components/Form.vue'
import { ElMessage, ElMessageBox, } from 'element-plus'
import Information from './components/Information.vue'

provide('dialog', {
    handleClose: () => dialogVisible.value = false,
    handleSubmit: () => console.log('submit')
})

onMounted(() => {
    // getUserList()
})

const formRef = ref(null)

// 查看详情弹窗
const detaildialogVisible = ref(false)

// 新增/修改弹窗
const dialogVisible = ref(false)

const currentId = ref('')

const title = computed(() => currentId.value === '' ? '新增人员' : '修改')



// 用户列表
const userList = ref([])

const getUserList = async () => {
    const { data } = await getUser()
    console.log(data)
}

const tableData = [
    {
        username: '张XX',
        job_status: '在职',
        level: '高级',
        contact_information: '18612345678',
        department: '技术部',
        status: '在职',
        certificate: 'xxx证书'

    },

]

// 新增
const handleAdd = () => {
    dialogVisible.value = true
}

// 查看详情
const handleShowDetail = () => {
    detaildialogVisible.value = true
}

// 修改
const handleUpdate = () => {
    currentId.value = '1'
    dialogVisible.value = true
    // console.log(`修改`)
    console.log(formRef.value)
}

// 删除
const handleDelete = () => {
    ElMessageBox.confirm('确定要删除吗?', '提示:', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    }).then(() => {
        ElMessage({
            type: 'success',
            message: `删除成功!`
        })
    })
}

// 关闭弹窗
const handleDetailClose = () => {
    detaildialogVisible.value = false
}

const table_row_style = {
    backgroundColor: '#071c53',
    opacity: 1,
    border: '1px solid red',
    color: '#fff'
}

const table_header_row_style = {
    background: '#0b2f89',
}
</script>

<style scoped lang='scss'>
.user-wrapper {

    .title-wrapper {
        display: flex;
        justify-content: space-between;
        padding-bottom: 7px;
        border-bottom: 1px solid #0e9cff;

        .title {
            font-size: 18px;
            color: #fff;
            font-weight: bold;
        }

        .button-wrapper {
            display: flex;
            gap: 12px;

            .button {
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 140px;
                border-radius: 4px;
                opacity: 1;
                padding: 3.5px 6px;
                gap: 4px;
                background: rgba(47, 109, 255, 0.2);
                color: #fff;

                box-sizing: border-box;
                border: 1px solid #2F6DFF;
            }
        }
    }

    .pagination {
        position: absolute;
        right: 16px;
        bottom: 16px;

    }

}


.btn {
    cursor: pointer;
    width: 120px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgba(47, 109, 255, 0.2);
    border-radius: 4px;
    opacity: 1;
    box-sizing: border-box;
    border: 1px solid #2F6DFF;
    color: #fff;
}

.table-row-bg {
    background-color: #000;
}
</style>

<style scoped>
:deep(.el-table td.el-table__cell) {
    border-bottom: none;
}

:deep(.el-table th.el-table__cell) {
    background: none;
}

:deep(.is-leaf) {
    border-bottom: none !important;
}

:deep(.el-table::before) {
    height: 0px;
}

/* 
:deep(.el-table__row:hover) {
    background-color: red !important;
} */

:deep(.el-pager li) {
    color: #fff;
    background: rgba(22, 92, 255, 0.4) !important;
}

:deep(.btn-prev) {
    color: #fff;
    background: rgba(22, 92, 255, 0.4) !important;
}

:deep(.btn-next) {
    color: #fff;
    background: rgba(22, 92, 255, 0.4) !important;
}

:deep(.el-dialog) {
    /* background: rgba(47, 109, 255, 0.2) !important; */
    color: #fff;
    box-sizing: border-box;
    border: 1px solid #2F6DFF;
    opacity: 1 !important;
}

:deep(.el-message-box__title) {
    text-align: center !important;
}
</style>