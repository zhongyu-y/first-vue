const props = {
    type: {
        type: Number,
        default: 0
    },
    item: {
        type: Object | Array,
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
        // 唯一值(时间戳)
        let time = new Date().getTime()
        this.item.push({
            "span": 24,
            "children": [],
            "key": `col_${time}`,
        })
    },

    deleteCol(index) {
        if (this.item) {
            this.item.splice(index, 1)
        }
    }
}

export default {
    props: props,
    data: data,
    methods: methods
}