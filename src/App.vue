<!--
 * @Description: 
 * @Autor: Zhongyu
 * @Date: 2021-01-22 15:09:19
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-11 10:30:31
-->
<template>
	<div id="app" class="app">
		<el-container class="container-whole">
			<el-aside class="aside-menu">
				<div class="logo"></div>
				<z-menu></z-menu>
			</el-aside>

			<el-container class="container-not-menu">
				<el-header style="text-align: right; font-size: 12px">
					<z-header></z-header>
				</el-header>

				<el-main>
					<div class="main-conetnt">
						<router-view></router-view>
					</div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import menu from './components/Menu';
import header from './components/Header';

export default {
	components: {
		'z-menu': menu,
		'z-header': header,
	},
	data() {
		return {};
	},
	mounted() {
		let history = this.$router.history;
		if (history) {
			let current = history.current;
			if (current && current.path && current.path != '/flow') {
				// this.$router.push("/flow")
			}
		}
	},
	methods: {},
};
</script>
<style lang="less">
@import './app.less';
</style>