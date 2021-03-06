import wepy from 'wepy';
import Tips from '../utils/Tips';
export default class base extends wepy.mixin {
  loaded() {
    this.init = true;
    this.$apply();
    Tips.loaded();
  }
  // 卸载清理
  onUnload() {
    Object.assign(this, this.def);
  }
  checkFunctionAuth(funName) {
    this.limit = wepy.getStorageSync('limit');
    // 默认开放功能
    if (this.limit == null) {
      return true;
    }
    if (!this.limit.versionConfig.every(item => item != funName)) {
      Tips.alert('尚未开放');
      return false;
    }
    return true;
  }
  methods = {
    nopen() {
      Tips.alert('尚未开放');
    },
  };
}
