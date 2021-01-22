<template>
    <el-form-item
        v-if="
            !(record.options.hidden === true) &&
            [
                'input',
                'textarea',
                'date',
                'time',
                'number',
                'radio',
                'checkbox',
                'select',
                'rate',
                'switch',
                'slider',
                'uploadImg',
                'uploadFile',
                'cascader',
                'treeSelect',
            ].includes(record.type)
        "
        class="z-form-item"
        :label="record.label"
        label-width="6vw"
    >
        <el-input
            v-model="record.options.defaultValue"
            :placeholder="record.options.placeholder"
            readonly
            v-if="record.type == 'input'"
            :disabled="record.options.disabled"
        ></el-input>
        <el-input
            type="textarea"
            rows="4"
            readonly
            v-if="record.type == 'textarea'"
            :autosize="{
                minRows: record.options.minRows,
                maxRows: record.options.maxRows,
            }"
            :placeholder="record.options.placeholder"
            v-model="record.options.defaultValue"
            :disabled="record.options.disabled"
        ></el-input>
        <el-input-number
            controls-position="right"
            v-if="record.type == 'number'"
            :placeholder="record.options.placeholder"
            :min="record.options.min"
            :max="record.options.max"
            :step="record.options.step"
            v-model="record.options.defaultValue"
            :disabled="record.options.disabled"
            readonly
        ></el-input-number>
        <el-select
            v-if="record.type == 'select'"
            :placeholder="record.options.placeholder"
            v-model="record.options.defaultValue"
            :disabled="record.options.disabled"
            :clearable="record.options.clearable"
            readonly
        >
            <el-option
                v-for="item in record.options.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
        </el-select>
        <el-checkbox-group
            v-if="record.type == 'checkbox'"
            v-model="record.options.defaultValue"
            :disabled="record.options.disabled"
        >
            <el-checkbox
                v-for="item in record.options.options"
                :key="item.value"
                :label="item.label"
            >
            </el-checkbox>
        </el-checkbox-group>
        <el-radio-group
            v-if="record.type == 'radio'"
            v-model="record.options.defaultValue"
            :disabled="record.options.disabled"
        >
            <el-radio
                v-for="item in record.options.options"
                :key="item.value"
                :label="item.value"
            >
                {{ item.label }}
            </el-radio>
        </el-radio-group>
        <el-date-picker
            v-model="record.options.defaultValue"
            :placeholder="record.options.placeholder"
            :disabled="record.options.disabled"
            :clearable="record.options.clearable"
            :format="record.options.format"
            v-if="record.type == 'date'"
        >
        </el-date-picker>

        <el-date-picker
            v-model="record.options.defaultValue"
            type="datetime"
            :placeholder="record.options.placeholder"
            :disabled="record.options.disabled"
            :clearable="record.options.clearable"
            :format="record.options.format"
            v-if="record.type == 'time'"
        >
        </el-date-picker>

        <el-rate
            v-if="record.type == 'rate'"
            v-model="record.options.defaultValue"
            :max="record.options.max"
            :disabled="record.options.disabled"
            :allow-half="record.options.allowHalf"
        ></el-rate>
        <el-slider
            v-if="record.type == 'slider'"
            v-model="record.options.defaultValue"
            :min="record.options.min"
            :max="record.options.max"
            :step="record.options.step"
            :disabled="record.options.disabled"
            :show-input="record.options.showInput"
        ></el-slider>
        <el-upload
            v-if="record.type == 'uploadFile'"
            :action="record.options.action"
            :disabled="record.options.disabled"
            :multiple="record.options.multiple"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :limit="record.options.limit"
            :on-exceed="handleExceed"
            :headers="record.options.headers"
            :data="record.options.data"
            :name="record.options.fileName"
            :file-list="record.options.defaultValue"
        >
            <el-button size="small" type="primary">{{
                record.options.placeholder
            }}</el-button>
        </el-upload>

        <el-upload
            v-if="record.type == 'uploadImg'"
            :action="record.options.action"
            :disabled="record.options.disabled"
            :multiple="record.options.multiple"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :limit="record.options.limit"
            :on-exceed="handleExceed"
            list-type="picture-card"
            accept="image/*"
            :headers="record.options.headers"
            :data="record.options.data"
            :name="record.options.fileName"
            :file-list="record.options.defaultValue"
        >
            <!-- <el-button size="small" type="primary">{{record.options.placeholder}}</el-button> -->
            <i class="el-icon-plus"></i>
        </el-upload>

        <el-cascader
            v-if="record.type == 'cascader'"
            v-model="record.options.defaultValue"
            :placeholder="record.options.placeholder"
            :options="record.options.options"
            :clearable="record.options.clearable"
            :props="record.options.props"
            :filterable="record.options.filterable"
        ></el-cascader>
    </el-form-item>
</template>

<script src="./formItem.js"></script>
<style lang="less" src="./formItem.less"></style>
