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

<script src="./menu.js"></script>
<style lang="less" src="./menu.less"></style>
