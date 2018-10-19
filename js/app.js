window.app = {
	/**
	 * 后端服务器地址
	 */
	serverUrl:'http://192.168.2.1:8080',
	/**
	 * 图片服务器地址
	 */
	ImgserverUrl:'http://10.211.55.10:88/xiaoxi/',
	/**
	 * 判断字符串是否为空
	 * @param {Object} str
	 */
	isNotNull :function(str) {
		if(str != null && str != "" && str != undefined) {
			return true;
		}
		
		return false;
		
	},
	
	showToast: function(msg,type) {
		plus.nativeUI.toast(msg,{
			icon: "image/"+type+".png",
			verticalAlign:"center"
		})
	},
	
	/**
	 * 保存用户全局对象,保存到应用缓存中
	 * @param {Object} user
	 */
	setUserGlobalInfo:function(user) {
		var userInfoStr = JSON.stringify(user);
		plus.storage.setItem("userInfo",userInfoStr);
	},
	/**
	 * 
	 * 获取用户全局对象
	 */
	getUserGlobalInfo:function() {
		var userInfoStr = plus.storage.getItem("userInfo");
		return JSON.parse(userInfoStr);
	},
	/**
	 * 退出登录,移除用户全局对象
	 */
	userLogout:function() {
		plus.storage.removeItem("userInfo");
	},
	
	/**
	 * 保存用户的通讯录列表
	 * @param {Object} contactList
	 */
	setContactList: function(contactList) {
		var contactListStr = JSON.stringify(contactList);
		plus.storage.setItem("contactList",contactListStr);
	},
	/**
	 * 获取本地缓存中的联系人列表
	 * @param {Object} contactList
	 */
	getContactList: function(contactList) {
		var contactListStr =  plus.storage.getItem("contactList");
		if(!this.isNotNull(contactListStr)) {
			return [];
		}
		return JSON.parse(contactListStr);
	}
	
}
