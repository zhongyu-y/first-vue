import { jsPlumb } from 'jsplumb';
import { nodeList } from '../../config/config';
import zFlowItem from '../../components/flowItem/flowItem.vue';
import zFlowDetail from '../../components/flowDetail/flowDetail.vue';
import zFlowToolbar from '../../components/flowToolbar/flowToolbar.vue';
import { flowAdd } from '../../network/api'

// -- COMPONENTS -- 
const components = {
    zFlowItem,
    zFlowDetail,
    zFlowToolbar,
}

function data() {
    return {
        nodeList: nodeList,
        index: 1,
        // 默认设置参数
        jsplumbSetting: {
            Container: "flowContent",

            // 动态锚点、位置自适应
            Anchors: ["TopCenter", "RightMiddle", "BottomCenter", "LeftMiddle"],

            // 连线的样式 StateMachine、Flowchart,有四种默认类型：Bezier（贝塞尔曲线），Straight（直线），Flowchart（流程图），State machine（状态机）
            Connector: "Flowchart",
            //这个是鼠标拉出来的线的属性
            ConnectionOverlays: [
                ["Label", {  //标签参数设置
                    location: 0.5,
                    id: "label",
                    label: "23",
                    cssClass: "csslabel", //hover时label的样式名
                    visible: true
                }]
            ],

            //如果请求不存在的Anchor、Endpoint或Connector，是否抛异常
            DoNotThrowErrors: false,
            //通过jsPlumb.draggable拖拽元素时的默认参数设置
            DragOptions: { cursor: 'pointer', zIndex: 2000 },
            //target Endpoint放置时的默认参数设置
            DropOptions: {},
            // 鼠标不能拖动删除线
            ConnectionsDetachable: false,
            // 删除线的时候节点不删除
            DeleteEndpointsOnDetach: false,
            // 连线的端点
            Endpoint: ["Dot", { radius: 0 }],
            // 线端点的样式
            EndpointStyle: {
                fill: 'transparent',
                stroke: '#999999',
                radius: 2.5,
                strokeWidth: 1
            },
            Endpoints: [null, null],
            EndpointStyles: [null, null], //连线的source和target端点的样式
            //端点hover时的样式
            EndpointHoverStyle: {
                radius: 3,
                strokeWidth: 1
            },
            //连线的source和target端点hover时的样式
            EndpointHoverStyles: [{
                fill: 'transparent',
                stroke: '#409eff',
                radius: 3,
                strokeWidth: 2,
            }, {
                fill: 'transparent',
                stroke: '#409eff',
                radius: 3,
                strokeWidth: 2,
            }],
            //连线hover时的样式
            // HoverPaintStyle: {
            //     fill: 'transparent',
            //     stroke: '#409eff',
            //     radius: 3,
            //     strokeWidth: 2,
            // },
            EndpointOverlays: [], //端点的叠加物
            LogEnabled: true, //是否打开jsPlumb的内部日志记录
            LabelStyle: { color: "black" }, //标签的默认样式，用css写法。
            // PaintStyle: {stroke: '#1565C0', strokeWidth: 1, joinstyle: 'round'},
            // 绘制线
            PaintStyle: {
                stroke: "#409eff",
                strokeWidth: 1.5,
                joinstyle: 'round'
            },
            // 绘制箭头
            Overlays: [
                [
                    "Arrow",
                    {
                        width: 5,
                        length: 5,
                        location: 1,
                    },
                ],
            ],
            MaxConnections: -1,
            RenderMode: "svg",
        },
        // jsplumb连接参数
        jsplumbConnectOptions: {
            isSource: true,
            isTarget: true,

            // 动态锚点、提供了4个方向 Continuous、AutoDefault
            anchor: "Continuous",
        },
        jsplumbCommon: {
            isSource: true,
            isTarget: true,
        },
        // 是否加载完毕
        loadEasyFlowFinish: false,
        // 数据
        data: {
            flowInfo: {
                Id: "03a519a0-765e-47f3-841d-67d1521ee0a0",
                Name: "我的流程",
                Remark: "",
            },
            nodeList: [
                {
                    id: "1a0617e8-19af-404c-810f-3dadf2a956af",
                    label: "起点",
                    top: "30px",
                    left: "120px",
                    checkedKeys: [],
                    type: 1,
                },
                {
                    id: "de761d10-7590-4590-986a-e4d6fb41895c",
                    label: "终点",
                    top: "480px",
                    left: "120px",
                    checkedKeys: [],
                    type: 2,
                },
                {
                    id: "7a18417d-d428-4b5d-93ff-c6cf8ab0a604",
                    label: "人工活动",
                    top: "180px",
                    left: "120px",
                    checkedKeys: [],
                    type: 3,
                },
                {
                    id: "ee0f9f4c-5020-46e2-85a4-da088efc553d",
                    label: "自动活动",
                    top: "330px",
                    left: "120px",
                    checkedKeys: [],
                    type: 4,
                }
            ],
            edgeList: [
                {
                    from: "1a0617e8-19af-404c-810f-3dadf2a956af",
                    fromAnchor: [0.5, 1],
                    toAnchor: [0.5, 0],
                    to: "7a18417d-d428-4b5d-93ff-c6cf8ab0a604",
                    label: "",
                    id: "3bc94584-0c30-4491-9769-1593b8996f23",
                    Remark: "",
                },
                {
                    from: "7a18417d-d428-4b5d-93ff-c6cf8ab0a604",
                    fromAnchor: [0.5, 1],
                    toAnchor: [0.5, 0],
                    to: "ee0f9f4c-5020-46e2-85a4-da088efc553d",
                    label: "",
                    id: "7a487112-11a1-4042-8012-7cab33f6797a",
                    Remark: "",
                },
                {
                    from: "ee0f9f4c-5020-46e2-85a4-da088efc553d",
                    fromAnchor: [0.5, 1],
                    toAnchor: [0.5, 0],
                    to: "de761d10-7590-4590-986a-e4d6fb41895c",
                    label: "",
                    id: "9d7f3831-b417-4724-bc24-e6a67deb4de4",
                    Remark: "",
                }
            ],
        },
        currentItem: "", //临时存添加的元素
        isConnect: false, //判断是否连接
        timer: null, //定时器,判断单双击,
        currentConnect: "", //当前的连接线
        currentEdge: "", //当前连接线数据
        editType: "", //编辑的类型

        submitFromData: null,  // 可提交的表单数据
        flowFromData: [], // 和流程图绑定的表单数据
    }
}

function mounted() {
    this.jsPlumb = jsPlumb.getInstance();

    this.initFromData();
    this.init()
}



const methods = {
    initFromData() {
        const lesf = this;
        var db = openDatabase('fromdb', '1.0', 'Test DB', 1024 * 1024 * 1024);
        db.transaction(function (tx) {
            //查询表单数据
            var IsDropQLGXRW = 'select text from FORMS where id=1';
            tx.executeSql(IsDropQLGXRW, [], function (tx, results) {

                // 判断是否查询成功
                if (results.rows.length > 0) {
                    var text = results.rows.item(0).text;
                    if (text != "" && text != null && JSON.parse(text)) {
                        lesf.submitFromData = JSON.parse(text);
                        let flowFromData = [];
                        let jsonText = JSON.parse(text);
                        for (var i = 0; i < jsonText.length; i++) {
                            let json = jsonText[i];
                            let childrens = [];
                            for (let j = 0; j < json.children.length; j++) {
                                const children = json.children[j];
                                childrens = childrens.concat(children.children)
                            }
                            json.children = childrens;
                            flowFromData.push(json)
                        }
                        lesf.flowFromData = flowFromData;
                    }
                }
            }, null);
        })
    },

    init() {
        const _this = this;
        this.jsPlumb.ready(function () {
            // 导入默认配置
            _this.jsPlumb.importDefaults(_this.jsplumbSetting);
            // 会使整个jsPlumb立即重绘。
            _this.jsPlumb.setSuspendDrawing(false, true);
            // 初始化节点
            _this.loadEasyFlow();

            // 单点连接线（编辑label）,
            _this.jsPlumb.bind("click", function (conn) {
                clearTimeout(this.timer);
                _this.editEdge(conn);

                // this.timer = setTimeout(function () {
                //     // 这里采用执行自定义事件的方式
                //     console.log("click", conn);
                //     _this.editLine(conn);
                // }, 300); // 延迟300ms执行单击事件,区分双击事件
                // console.log(conn.getOverlay("label-1"));
                // conn.getOverlay("label-1").setLabel('大肥肚'); //初始化label
            });

            // 双击连接线（删除）,
            _this.jsPlumb.bind("dblclick", function (conn) {
                clearTimeout(this.timer);

                _this
                    .$confirm("确定删除所点击的线吗?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning",
                    })
                    .then(() => {
                        _this.jsPlumb.deleteConnection(conn);
                    })
                    .catch(() => { });
            });

            //连线
            _this.jsPlumb.bind("connection", function (evt) {
                // console.log("connection", evt);
                let from = evt.source.id;
                let to = evt.target.id;
                let fromAnchor = [
                    evt.sourceEndpoint.anchor.x,
                    evt.sourceEndpoint.anchor.y,
                ];
                let toAnchor = [
                    evt.targetEndpoint.anchor.x,
                    evt.targetEndpoint.anchor.y,
                ];
                if (_this.loadEasyFlowFinish) {
                    _this.data.edgeList.push({
                        from: from,
                        fromAnchor: fromAnchor,
                        toAnchor: toAnchor,
                        to: to,
                        label: "",
                        id: _this.getUUID(),
                        Remark: "",
                    });
                }
                setTimeout(function () {
                    _this.editEdge(evt.connection);
                }, 100);
            });

            // 删除连线 (当拖动一个连线出现后，却没有连接到目标端点就放弃时)
            _this.jsPlumb.bind("connectionDetached", function (evt) {
                console.log("connectionDetached", evt);
                _this.deleteEdge(evt.sourceId, evt.targetId);
            });

            // 改变线的连接节点
            _this.jsPlumb.bind("connectionMoved", function (evt) {
                console.log("connectionMoved", evt);
                _this.changeEdge(evt.originalSourceId, evt.originalTargetId);
            });

            // 单击endpoint 端点单击事件
            jsPlumb.bind("endpointClick", function (evt) {
                console.log("endpointClick", evt);
            });

            // 双击endpoint 端点双击事件
            jsPlumb.bind("endpointDblClick", function (evt) {
                console.log("endpointDblClick", evt);
            });

            // contextmenu 右键 鼠标右键事件
            _this.jsPlumb.bind("contextmenu", function (evt) {
                console.log("contextmenu", evt);
            });

            // beforeDrop 连接建立前事件
            _this.jsPlumb.bind("beforeDrop", function (evt) {
                console.log("beforeDrop", evt);
                let from = evt.sourceId;
                let to = evt.targetId;
                if (from === to) {
                    _this.$message.error("不能连接自己");
                    return false;
                }
                if (_this.hasEdge(from, to)) {
                    _this.$message.error("不能重复连线");
                    return false;
                }
                if (_this.hashOppositeEdge(from, to)) {
                    _this.$message.error("不能回环哦");
                    return false;
                }
                return true;
            });

            // beforeDetach 连接断开前事件
            _this.jsPlumb.bind("beforeDetach", function (evt) {
                console.log("beforeDetach", evt);
            });
        });
    },
    // 加载流程图
    loadEasyFlow() {
        // 初始化节点
        for (var i = 0; i < this.data.nodeList.length; i++) {
            let node = this.data.nodeList[i];
            // 设置可拖拽
            this.jsPlumb.draggable(node.id, {
                containment: "parent",
            });
            // console.log("----")
            this.addNodePoint(node.id);
        }

        // 初始化连线
        for (var j = 0; j < this.data.edgeList.length; j++) {
            let edge = this.data.edgeList[j];
            let anchor = [edge.fromAnchor, edge.toAnchor];
            let connection = this.jsPlumb.connect({
                source: edge.from,
                anchor: anchor,
                target: edge.to
            }, this.jsplumbCommon)
            connection.getOverlay("label").setLabel(edge.label); //初始化label
        }
        this.$nextTick(function () {
            this.loadEasyFlowFinish = true;
        });

        // [].concat()
    },

    /**
     * 添加节点上面连线的点
     * @param id 节点ID
     */
    addNodePoint(id) {
        //上
        this.jsPlumb.addEndpoint(
            id,
            {
                anchors: ["Top"],
            },
            this.jsplumbCommon
        );
        // 下
        this.jsPlumb.addEndpoint(
            id,
            {
                anchors: ["Bottom"],
            },
            this.jsplumbCommon
        );
        //右
        this.jsPlumb.addEndpoint(
            id,
            {
                anchors: ["Right"],
            },
            this.jsplumbCommon
        );
        //左
        this.jsPlumb.addEndpoint(
            id,
            {
                anchors: ["Left"],
            },
            this.jsplumbCommon
        );
    },

    // 添加新的节点
    addNode(temp) {
        const { nodeList } = this.data;
        let index = nodeList.findIndex((node) => {
            return node.type == temp.type
        })
        if (index != -1 && (temp.type == "1" || temp.type == "2")) {
            this.$message.error(`${temp.label}唯一节点`);
            return false;
        }
        this.data.nodeList.push(temp);
        this.$nextTick(function () {
            this.jsPlumb.draggable(temp.id, {
                containment: "parent",
            });
            this.addNodePoint(temp.id);
        });
    },

    // 删除线
    deleteEdge(from, to) {
        this.data.edgeList = this.data.edgeList.filter(function (edge) {
            return edge.from !== from && edge.to !== to;
        });
    },

    // 改变连线
    changeEdge(oldFrom, oldTo) {
        this.deleteEdge(oldFrom, oldTo);
    },

    // 改变节点的位置
    changeNodeSite(data) {
        for (var i = 0; i < this.data.nodeList.length; i++) {
            let node = this.data.nodeList[i];
            if (node.id === data.nodeId) {
                node.left = data.left;
                node.top = data.top;
            }
        }
    },

    //删除节点
    deleteNode(nodeId) {
        this.$confirm("确定要删除节点" + nodeId + "?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
            closeOnClickModal: false,
        })
            .then(() => {
                this.data.nodeList.forEach((item, index) => {
                    if (item.id === nodeId) {
                        this.data.nodeList.splice(index, 1);
                    }
                });

                this.$nextTick(function () {
                    this.jsPlumb.removeAllEndpoints(nodeId);
                });
            })
            .catch(() => { });
        return true;
    },

    //编辑节点
    editNode(nodeId) {
        //console.log('编辑节点', nodeId)
        this.editType = "node";
        this.$nextTick(function () {
            this.$refs.flowDrawForm.init("node", this.data, nodeId);
        });
    },

    // 编辑连线
    editEdge(conn) {
        // console.log(conn)
        this.editType = "edge";
        this.currentConnect = conn;
        this.$nextTick(function () {
            this.$refs.flowDrawForm.init("edge", this.data, conn);
        });
    },

    //删除线
    delEdge(conn) {
        this.$confirm("确定删除所点击的线吗?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
        })
            .then(() => {
                this.jsPlumb.deleteConnection(conn);
            })
            .catch(() => { });
    },

    // 是否具有该线
    hasEdge(from, to) {
        for (var i = 0; i < this.data.edgeList.length; i++) {
            var edge = this.data.edgeList[i];
            if (edge.from === from && edge.to === to) {
                return true;
            }
        }
        return false;
    },
    // 是否含有相反的线
    hashOppositeEdge(from, to) {
        return this.hasEdge(to, from);
    },
    // 刷新线的label
    edgeLabelSave(edge) {
        // console.log(this.currentConnect)
        this.currentConnect.getOverlay("label").setLabel(edge.label);
    },
    drag(item) {
        this.currentItem = item;
    },
    drop(event) {
        const { currentItem } = this;
        //event.preventDefault();
        // var _obj = this.$refs.flowContent;
        var temp = {
            id: this.getUUID(),
            label: currentItem.title,
            top: event.offsetY + "px",
            left: event.offsetX + "px",
            type: currentItem.type,
            icon: currentItem.icon,
        };
        this.addNode(temp);
        this.editNode(temp.id);
    },
    allowDrop(event) {
        event.preventDefault();
    },
    getUUID() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid;
    },
    saveData() {
        console.log(this.jsPlumb);
        console.log(this.jsPlumb.Defaults);
        console.log("线", this.jsPlumb.getConnections());
        console.log(this.data);
        console.log(JSON.stringify(this.data));
        flowAdd({
            name: "测试流程",
            userCode: "1001",
            formData: JSON.stringify(this.submitFromData),
            flowData: JSON.stringify(this.data),
        })
    },
}
// components
export default {
    components: components,
    data: data,
    mounted: mounted,
    methods: methods
}