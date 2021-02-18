const props = {
    flowFromData: {
        type: Array,
        required: true,
        default: function () {
            return [];
        }
    }
}

function data() {
    return {
        node: {},
        edge: {},
        type: "",
        isUpdate: false,
        isNodeShow: false,
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
            this.isNodeShow = false;
            const self = this;
            setTimeout(() => {
                self.isNodeShow = true;
            }, 1)
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

    handleCheckedCitiesChange(value) {
        console.log(value)

        // let checkedKeys = data.checkedKeys;
        // let flowFromData = this.flowFromData;
        // let ffDataItem = flowFromData.find(item => {
        //     return item.key == clickData.key
        // });
        // if (ffDataItem) {
        //     ffDataItem["disabled"] = true;
        //     for (var i = 0; i < ffDataItem.children.length; i++) {
        //         let item = ffDataItem.children[i];
        //         item["disabled"] = function (data, node) {
        //             console.log(data, node)
        //         };
        //     }
        // }
        // console.log("clickData: ", clickData, flowFromData)
        // this.node.checkedKeys = checkedKeys;

    },

    hadleCheckboxChange(ffdItem, key, isChecked) {
        let data = ffdItem.children.find(item => {
            return item.key == key
        });
        if (data) {
            // console.log(data, ffdItem, key, isChecked)
            data["disabled"] = isChecked;
            // console.log(data)
            // ffdItem.children = data;

            // let flowFromData = this.flowFromData;
            // let index = flowFromData.find(item => {
            //     return item.key == ffdItem.key
            // });
            // flowFromData[index].children = ffdItem;
        }

    }
}

export default {
    props: props,
    data: data,
    watch: watch,
    methods: methods
}