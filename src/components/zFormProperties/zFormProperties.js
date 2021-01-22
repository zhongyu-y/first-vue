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
        console.log(this.item)
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
            const columns = this.item.columns;
            let span = 0;
            let maxSpan = 24;
            for (let i = 0; i < columns.length; i++) {
                const column = columns[i];
                span += Number(column.span);
            }
            if (span >= maxSpan) {
                return
            } else {
                let col = {
                    list: [],
                    span: maxSpan - span
                }
                this.item.columns.push(col)
            }
        }
    }
}

export default {
    props: props,
    data: data,
    methods: methods
}