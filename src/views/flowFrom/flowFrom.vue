<template>
    <div id="flow-from" class="flow-from">
        <!-- flowFrom -->
        <el-row>
            <el-col :span="6" class="el-col-left">
                <div class="grid-content left">
                    <el-collapse v-model="activeCollapse">
                        <el-collapse-item :title="item.title" :name="item.key" v-for="(item, index) in fromControls" :key="index">
                            <draggable
                                class="list-group"
                                :list="item.children"
                                :group="{ name: 'layoutItem', pull: 'clone', put: false }"
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
                            <el-row
                                v-for="(item, i) in datas"
                                class="grid-row"
                                :key="i"
                            >
                                <el-col
                                    v-for="(column, j) in item.columns"
                                    :span="column.span"
                                    :key="j"
                                    class="grid-col"
                                >
                                    <div @click="colClick($event, item)">
                                        <draggable
                                            class="list-group"
                                            :list="column.list"
                                            group="fromItem"
                                            @change="log"
                                        >
                                            <div
                                                v-for="(list, k) in column.list"
                                                :key="k"
                                                @click="formItemClick($event, list)"
                                                class="item-group"
                                                :class="{
                                                    action:
                                                        selectItem != null &&
                                                        selectItem.key == list.key,
                                                }"
                                            >
                                                <z-form-item :record="list"></z-form-item>
                                            </div>
                                        </draggable>
                                    </div>
                                </el-col>
                            </el-row>
                        </draggable>
                    </el-form>
                </div>
            </el-col>
            <el-col :span="6" class="el-col-right">
                <div class="grid-content right">
                    <z-form-properties
                        :type="selectIndex"
                        :item="selectItem"
                        :data="datas"
                        @addRow="addDatas"
                    ></z-form-properties>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script src="./flowFrom.js"></script>

<style lang="less" src="./flowFrom.less"></style>
