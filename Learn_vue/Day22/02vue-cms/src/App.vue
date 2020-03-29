<template>
    <div class="app-container">
        <!-- 顶部 header 区域 -->
        <!-- 中间的路由区域 -->
        <!-- 底部的tabBar区域 -->
        <mt-header fixed title="kk的项目"></mt-header>
		<transition>
			<router-view></router-view>
		</transition>
        	<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-hwk" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-hwk" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-hwk" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-hwk" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>
<script>

export default {

}
</script>
<style lang="scss" scoped>
.mint-header{
	z-index: 99;
}
.app-container{
    padding-top: 40px;
	overflow-x: hidden;
	padding-bottom: 50px;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}
.mui-bar-tab .mui-tab-item-hwk .mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-hwk {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-hwk .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-hwk .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>