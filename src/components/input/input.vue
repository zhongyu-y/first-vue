<template>
    <el-input
        class="z-input"
        autocomplete="off"
        :placeholder="placeholder"
        :disabled="disabled"
        :type="type"
        :clearable="clearable"
        :maxlength="maxLength"
        :minlength="minLength"
        v-model="value"
        @change="handleChange($event, record.model)"
    >
    </el-input>
</template>

<script src="./input.js"></script>
<style lang="less" src="./input.less"></style>
