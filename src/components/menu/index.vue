<!--
 * @Description: 
 * @Autor: Zhongyu
 * @Date: 2021-02-04 15:04:00
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-11 10:28:36
-->
<template>
	<div class="z-menu">
		<el-menu :default-active="activeIndex" @select="handleSelect">
			<template v-for="(menu, index) in menus">
				<el-menu-item :key="index" :index="menu.key">
					{{ menu.title }}
				</el-menu-item>
			</template>
		</el-menu>
	</div>
</template>

<script>
import { menus } from '../../config/config';
export default {
	name: 'menu',
	data() {
		return {
			activeIndex: '1',
			menus: menus,
		};
	},
	mounted() {},
	methods: {
		handleSelect(key, keyPath) {
			let menu = this.menus.find(item => {
				return item.key == key;
			});
			console.log(menu, keyPath);
			this.$router.push(menu.url);
		},
	},
};
</script>
<style lang="less">
@import './index.less';
</style>
