
function data() {
    return {
        node: {},
        edge: {},
        type: "",
        isUpdate: false
    };
}
const watch = {
    edge: {
        handler() {
            if (this.isUpdate) {
                this.$emit('line-save', this.edge);
            }
        },
        deep: true
    }
}
const methods = {
    init(type, data, selData) {
        this.type = type;
        this.isUpdate = false;
        if (type === "node") {
            data.nodeList.filter((node) => {
                if (node.id === selData) {
                    this.node = node;
                }
            })
        } else if (type === "edge") {
            data.edgeList.filter((item) => {
                if (item.from === selData.sourceId && item.to === selData.targetId) {
                    this.edge = item;
                }
            })
            this.$nextTick(function () {
                this.isUpdate = true;
            });
        }
    },
}

export default {
    data: data,
    watch: watch,
    methods: methods
}