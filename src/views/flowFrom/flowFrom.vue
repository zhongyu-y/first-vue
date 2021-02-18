<template>
    <div id="flow-from" class="flow-from">
        <!-- flowFrom -->
        <el-row>
            <el-col :span="6" class="el-col-left">
                <div class="grid-content left">
                    <el-collapse v-model="activeCollapse">
                        <el-collapse-item
                            :title="item.title"
                            :name="item.key"
                            v-for="(item, index) in fromControls"
                            :key="index"
                        >
                            <draggable
                                class="list-group"
                                :list="item.children"
                                :group="{
                                    name: item.copyName,
                                    pull: 'clone',
                                    put: false,
                                }"
                                :clone="cloneDog"
                                @change="log"
                            >
                                <div
                                    class="item"
                                    v-for="(children, index) in item.children"
                                    :key="index"
                                >
                                    <span class="icon iconfont" v-html="children.icon">
                                        {{ children.icon }}
                                    </span>
                                    <span>
                                        {{ children.label }}
                                    </span>
                                </div>
                            </draggable>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </el-col>
            <el-col :span="12" class="el-col-middle">
                <div class="grid-content middle">
                    <div id="middle-title" class="middle-title">
                        <div class="anticon anticon-delete">
                            <el-tooltip content="清空" placement="top">
                                <span class="icon iconfont" @click="onDelete"
                                    >&#xe624;</span
                                >
                            </el-tooltip>
                        </div>
                        <div class="anticon anticon-chrome">
                            <el-tooltip content="预览" placement="top">
                                <span class="icon iconfont" @click="onChrome"
                                    >&#xe626;</span
                                >
                            </el-tooltip>
                        </div>
                        <div class="anticon anticon-save">
                            <el-tooltip content="保存" placement="top">
                                <span class="icon iconfont" @click="onSave"
                                    >&#xe625;</span
                                >
                            </el-tooltip>
                        </div>
                    </div>

                    <el-form ref="form" label-width="80px">
                        <draggable
                            class="layout-group"
                            :list="datas"
                            group="layoutItem"
                            @change="log"
                        >
                            <template></template>
                            <el-row
                                v-for="(item, i) in datas"
                                class="grid-row"
                                :key="i"
                                :id="item.key"
                                :class="{
                                    action:
                                        selectItem != null && selectItem.key == item.key,
                                }"
                            >
                                <el-col
                                    v-for="(column, j) in item.children"
                                    :span="column.span"
                                    :key="j"
                                    class="grid-col"
                                    :style="{ height: item.height + 'px' }"
                                >
                                    <div
                                        style="height: 100%"
                                        @click="colClick($event, item)"
                                    >
                                        <draggable
                                            class="list-group"
                                            :list="column.children"
                                            group="fromItem"
                                            @change="log"
                                            @remove="fromRemove(item.key)"
                                            @add="fromAdd(item.key)"
                                        >
                                            <div
                                                v-for="(list, k) in column.children"
                                                :key="k"
                                                @click="formItemClick($event, list)"
                                                class="item-group"
                                                :id="list.key"
                                                :style="{
                                                    height:
                                                        list.key.indexOf('text_') != -1
                                                            ? `calc(100% / ${column.children.length} - 10px)`
                                                            : 'auto',
                                                }"
                                                :class="{
                                                    action:
                                                        selectItem != null &&
                                                        selectItem.key == list.key,
                                                }"
                                            >
                                                <z-form-item :record="list"></z-form-item>

                                                <div class="item-delete">
                                                    <i
                                                        class="el-icon-delete"
                                                        @click="itemDelete(i, j, k)"
                                                    ></i>
                                                </div>
                                            </div>
                                        </draggable>
                                    </div>
                                </el-col>
                                <div class="row-delete">
                                    <i class="el-icon-delete" @click="rowDelete(i)"></i>
                                </div>
                            </el-row>
                        </draggable>
                    </el-form>
                </div>
            </el-col>
            <el-col :span="6" class="el-col-right">
                <div class="grid-content right">
                    <z-form-properties
                        :type="selectType"
                        :item="selectItem"
                        :data="datas"
                    ></z-form-properties>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script src="./flowFrom.js"></script>
<style lang="less" src="./flowFrom.less"></style>
