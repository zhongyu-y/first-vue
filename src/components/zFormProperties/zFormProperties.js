const props = {
    type: {
        type: Number,
        default: 0
    },
    item: {
        type: Object,
    },
    data: {
        type: Array,
        default: function () {
            return []
        }
    },
}

function data() {
    return {
        num: 1,
    }
}

const methods = {
    /**
     * 添加表单正则校验
     */
    addRules() {
        if (this.item) {
            this.item.rules.push({
                pattern: "",
                message: "",
            })
        }
    },

    /**
     * 删除表单正则校验
     */
    delRules(index) {
        if (this.item) {
            this.item.rules.splice(index, 1)
        }
    },

    /**
     * 添加栅格，且这个栅格总和不大于24
     */
    addCol() {
        if (this.item) {
            const children = this.item.children; // 栅格组
            let span = 0; // 当前栅格总和
            let maxSpan = 24; // 最大栅格数
            for (let i = 0; i < children.length; i++) {
                const column = children[i];
                span += Number(column.span);
            }
            if (span >= maxSpan) {
                // 当前栅格总和 大于等于 最大栅格数时不允许添加栅格
                return false
            } else {
                let col = {
                    list: [],
                    span: maxSpan - span
                }
                this.item.children.push(col)
            }
        }
    },

    deleteCol(index) {
        if (this.item) {
            this.item.children.splice(index, 1)
        }
    }
}

export default {
    props: props,
    data: data,
    methods: methods
}