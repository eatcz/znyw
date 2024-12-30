import { defineStore } from "pinia";

export interface State {
    isShowLeftMenu: boolean;
    isShowRightMenu: boolean;
    isShowVehicles: boolean;
    isShowEvaluation: boolean;
    isShowEmergencyCommend: boolean;
    isShowBaseInfo: boolean, //是否显示项目基本信息
    isShowSituation: boolean, //是否显示项目情况
    isShowInformationSummary: boolean, //是否显示专业信息汇总
    isShowPersonalBaseInfo: boolean,//是否显示人员基础信息
    isShowProductInfo: boolean, //是否显示生产信息汇总
    isShowSpecialCertificate: boolean, //是否显示特种证件统计
    isShowImportantInfo: boolean, //是否显示项目重要信息
    currentShow:number | null | boolean
}

export const useMenuStore = defineStore("system", {
    state: (): State => ({
        isShowLeftMenu: true, //是否显示左侧菜单
        isShowRightMenu: true, // 是否显示右侧菜单
        isShowVehicles: true, //是否显示人、车、物
        isShowEvaluation: true, //是否显示指标测评
        isShowEmergencyCommend: true, //是否显示指标测评
        isShowBaseInfo: true, //是否显示项目基本信息
        isShowSituation: true, //是否显示项目情况
        isShowInformationSummary: true, //是否显示专业信息汇总
        isShowPersonalBaseInfo: true,//是否显示人员基础信息
        isShowProductInfo: true, //是否显示生产信息汇总
        isShowSpecialCertificate: true, //是否显示特种证件统计
        isShowImportantInfo: true, //是否显示项目重要信息
        currentShow: null, //当前显示的菜单
    }),

    actions: {
        // 切换左侧菜单显示/隐藏
        toggleLeftMenu() {
            this.isShowLeftMenu = !this.isShowLeftMenu;
        },
        // 切换右侧菜单显示/隐藏
        toggleRightMenu() {
            this.isShowRightMenu = !this.isShowRightMenu;
        },
        toggleSideMenu(index: number) {
            console.log(index)
            switch (index) {
                case 0:
                    this.isShowVehicles = !this.isShowVehicles
                    this.isShowEvaluation = false
                    break
                case 1:
                    this.isShowEvaluation = !this.isShowEvaluation
                    this.isShowVehicles = false
            }
        },
        setSideMenuShow(index: number) {
            this.currentShow === index ? this.currentShow = null : this.currentShow = index
        },
sidemenuShow(meta: keyof State) {
    const state = this as State; // 显式指定 this 的类型
    state[meta] = !state[meta]
}



    }
});