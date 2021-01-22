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

<script src="./app.js"></script>
<style lang="less" src="./app.less"></style>
