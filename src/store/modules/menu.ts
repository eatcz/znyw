import { defineStore } from "pinia";

interface State {
    isShowLeftMenu: boolean;
    isShowRightMenu: boolean;
    isShowVehicles: boolean;
    isShowEvaluation: boolean;
    isShowEmergencyCommend: boolean;
    currentShow: number | null
}

export const useMenuStore = defineStore("system", {
    state: (): State => ({
        isShowLeftMenu: true, //是否显示左侧菜单
        isShowRightMenu: true, // 是否显示右侧菜单
        isShowVehicles: true, //是否显示人、车、物
        isShowEvaluation: true, //是否显示指标测评
        isShowEmergencyCommend: true, //是否显示指标测评
        currentShow:null, //当前显示的菜单
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
            this.currentShow === index ?  this.currentShow = null : this.currentShow = index
        }
    }
});