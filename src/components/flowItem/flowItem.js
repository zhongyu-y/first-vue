const props = {
    node: Object,
    isconnect: Boolean,
}
function data() {
    return {
        mouseEnter: false,
    };
}
const computed = {
    // 节点容器样式
    flowNodeContainer: {
        get() {
            return {
                top: this.node.top,
                left: this.node.left,
                boxShadow: this.mouseEnter ? "#66a6e0 0px 0px 12px 0px" : "",
            };
        },
    },
    iconClass() {
        if (this.node.type == 1) {
            return "el-icon-help";
        } else if (this.node.type == 2) {
            return "el-icon-s-help";
        } else if (this.node.type == 3) {
            return "el-icon-user";
        } else if (this.node.type == 4) {
            return "el-icon-s-tools";
        }  else if (this.node.type == 5) {
            return "el-icon-paperclip";
        }  else if (this.node.type == 6) {
            return "el-icon-copy-document";
        }
    },
};
const methods = {
    // 删除节点
    deleteNode() {
        this.$emit("delete-node", this.node.id);
    },
    // 编辑节点
    editNode() {
        this.$emit("edit-node", this.node.id);
    },
    // 鼠标进入
    showDelete() {
        this.mouseEnter = true;
    },
    // 鼠标离开
    hideDelete() {
        this.mouseEnter = false;
    },
    // 鼠标移动后抬起
    changeNodeSite() {
        this.$emit("changeNodeSite", {
            nodeId: this.node.id,
            left: this.$refs.node.style.left,
            top: this.$refs.node.style.top,
        });
    },
}

export default {
    props: props,
    data: data,
    computed: computed,
    methods: methods
}