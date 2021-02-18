export const url = "http://localhost:8089"

export const menus = [
    {
        key: "1",
        title: "创建列表",
        url: "/flow/list",
        children: []
    }
]

export const nodeList = [
    {
        type: "1",
        enName: "start",
        title: "开始节点",
        icon: "el-icon-help",
    },
    {
        type: "2",
        enName: "end",
        title: "结束节点",
        icon: "el-icon-s-help",
    },
    {
        type: "3",
        enName: "from",
        title: "表单节点",
        icon: "el-icon-user",
    },
    {
        type: "4",
        enName: "examine",
        title: "审批节点",
        icon: "el-icon-s-tools",
    },
    {
        type: "5",
        enName: "choose",
        title: "选择网关",
        icon: "el-icon-paperclip"
    },
    {
        type: "6",
        enName: "parallel",
        title: "并行网关",
        icon: "el-icon-copy-document"
    }
]

// 自定义表单控件
export const fromControls = [
    {
        key: 1,
        title: "布局控件",
        copyName: "layoutItem",
        height: 64,
        children: [
            {
                "icon": "&#xe622;",
                "type": "grid",
                "label": "栅格布局",
                "children": [
                    {
                        "span": 12,
                        "children": []
                    },
                    {
                        "span": 12,
                        "children": []
                    }
                ],
                "options": {
                    "gutter": 0
                }
            }
        ]
    },
    {
        key: 2,
        title: "基础组件",
        copyName: "fromItem",
        children: [
            {
                "type": "input",
                "icon": "&#xe620;",
                "label": "输入框",
                "options": {
                    "type": "text",
                    "width": "100%",
                    "defaultValue": "",
                    "placeholder": "请输入",
                    "clearable": false,
                    "maxLength": null,
                    "hidden": false,
                    "disabled": false
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ],
                "serve": {
                    "target_table": "",
                    "target_table_field": ""
                }
            },
            {
                "type": "textarea",
                "icon": "&#xe60b;",
                "label": "文本框",
                "options": {
                    "width": "100%",
                    "minRows": 4,
                    "maxRows": 6,
                    "maxLength": null,
                    "defaultValue": "",
                    "clearable": false,
                    "hidden": false,
                    "disabled": false,
                    "placeholder": "请输入"
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "number",
                "label": "数字输入框",
                "icon": "&#xe61a;",
                "options": {
                    "width": "100%",
                    "defaultValue": 0,
                    "min": -Infinity,
                    "max": Infinity,
                    "precision": null,
                    "step": 1,
                    "hidden": false,
                    "disabled": false,
                    "placeholder": "请输入"
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "select",
                "label": "下拉选择器",
                "icon": "&#xe623;",
                "options": {
                    "width": "100%",
                    "multiple": false,
                    "disabled": false,
                    "clearable": false,
                    "hidden": false,
                    "placeholder": "请选择",
                    "defaultValue": "",
                    "dynamicKey": "",
                    "dynamic": false,
                    "options": [
                        {
                            "value": "1",
                            "label": "下拉框1"
                        },
                        {
                            "value": "2",
                            "label": "下拉框2"
                        }
                    ],
                    "showSearch": false
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "checkbox",
                "label": "多选框",
                "icon": "&#xe605;",
                "options": {
                    "disabled": false,
                    "hidden": false,
                    "defaultValue": [],
                    "dynamicKey": "",
                    "dynamic": false,
                    "options": [
                        {
                            "value": "1",
                            "label": "选项1"
                        },
                        {
                            "value": "2",
                            "label": "选项2"
                        },
                        {
                            "value": "3",
                            "label": "选项3"
                        }
                    ]
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "radio",
                "label": "单选框",
                "icon": "&#xe609;",
                "options": {
                    "disabled": false,
                    "hidden": false,
                    "defaultValue": "",
                    "dynamicKey": "",
                    "dynamic": false,
                    "options": [
                        {
                            "value": "1",
                            "label": "选项1"
                        },
                        {
                            "value": "2",
                            "label": "选项2"
                        },
                        {
                            "value": "3",
                            "label": "选项3"
                        }
                    ]
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "date",
                "label": "日期选择框",
                "icon": "&#xe60a;",
                "options": {
                    "width": "100%",
                    "defaultValue": "",
                    "rangeDefaultValue": [],
                    "range": false,
                    "showTime": false,
                    "disabled": false,
                    "hidden": false,
                    "clearable": false,
                    "placeholder": "请选择",
                    "rangePlaceholder": [
                        "开始时间",
                        "结束时间"
                    ],
                    "type": "date",
                    "format": "yyyy-MM-dd"
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "time",
                "label": "时间选择框",
                "icon": "&#xe613;",
                "options": {
                    "width": "100%",
                    "defaultValue": "",
                    "disabled": false,
                    "hidden": false,
                    "clearable": false,
                    "placeholder": "请选择",
                    "format": "yyyy-MM-dd HH:mm:ss"
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "rate",
                "label": "评分",
                "icon": "&#xe611;",
                "options": {
                    "defaultValue": 0,
                    "max": 10,
                    "disabled": false,
                    "hidden": false,
                    "allowHalf": false
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "slider",
                "label": "滑动输入条",
                "icon": "&#xe617;",
                "options": {
                    "width": "100%",
                    "defaultValue": 0,
                    "disabled": false,
                    "hidden": false,
                    "min": 0,
                    "max": 100,
                    "step": 1,
                    "showInput": false
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "uploadFile",
                "label": "上传文件",
                "icon": "&#xe618;",
                "options": {
                    "defaultValue": [],
                    "multiple": false,
                    "disabled": false,
                    "hidden": false,
                    "drag": false,
                    "downloadWay": "a",
                    "dynamicFun": "",
                    "width": "100%",
                    "limit": 3,
                    "data": {},
                    "fileName": "file",
                    "headers": {},
                    "action": "http://cdn.kcz66.com/uploadFile.txt",
                    "placeholder": "点击上传"
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "uploadImg",
                "label": "上传图片",
                "icon": "&#xe61e;",
                "options": {
                    "defaultValue": [],
                    "multiple": false,
                    "hidden": false,
                    "disabled": false,
                    "width": "100%",
                    "data": {},
                    "limit": 3,
                    "placeholder": "上传",
                    "fileName": "image",
                    "headers": {},
                    "action": "http://cdn.kcz66.com/upload-img.txt",
                    "listType": "picture-card"
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "treeSelect",
                "label": "树选择器",
                "icon": "&#xe61c;",
                "options": {
                    "disabled": false,
                    "multiple": false,
                    "hidden": false,
                    "clearable": false,
                    "showSearch": false,
                    "treeCheckable": false,
                    "placeholder": "请选择",
                    "dynamicKey": "",
                    "dynamic": true,
                    "options": [
                        {
                            "value": "1",
                            "label": "选项1",
                            "children": [
                                {
                                    "value": "11",
                                    "label": "选项11"
                                }
                            ]
                        },
                        {
                            "value": "2",
                            "label": "选项2",
                            "children": [
                                {
                                    "value": "22",
                                    "label": "选项22"
                                }
                            ]
                        }
                    ]
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "cascader",
                "label": "级联选择器",
                "icon": "&#xe60d;",
                "options": {
                    "disabled": false,
                    "hidden": false,
                    "filterable": false,
                    "placeholder": "请选择",
                    "clearable": false,
                    "dynamicKey": "",
                    "dynamic": true,
                    "props": {
                        "multiple": false,
                        "expandTrigger": "click" // 次级菜单的展开方式 click/hover
                    },
                    "options": [
                        {
                            "value": "1",
                            "label": "选项1",
                            "children": [
                                {
                                    "value": "11",
                                    "label": "选项11"
                                }
                            ]
                        },
                        {
                            "value": "2",
                            "label": "选项2",
                            "children": [
                                {
                                    "value": "22",
                                    "label": "选项22"
                                }
                            ]
                        }
                    ]
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "batch",
                "label": "动态表格",
                "icon": "&#xe603;",
                "list": [],
                "options": {
                    "scrollY": 0,
                    "disabled": false,
                    "hidden": false,
                    "showLabel": false,
                    "hideSequence": false,
                    "width": "100%"
                },
            },
            {
                "type": "editor",
                "label": "富文本",
                "icon": "&#xe608;",
                "list": [],
                "options": {
                    "height": 300,
                    "placeholder": "请输入",
                    "defaultValue": "",
                    "chinesization": true,
                    "hidden": false,
                    "disabled": false,
                    "showLabel": false,
                    "width": "100%"
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "switch",
                "label": "开关",
                "icon": "&#xe619;",
                "options": {
                    "defaultValue": false,
                    "hidden": false,
                    "disabled": false
                },
                "rules": [
                    {
                        "required": false,
                        "message": "必填项"
                    }
                ]
            },
            {
                "type": "button",
                "label": "按钮",
                "icon": "&#xe602;",
                "options": {
                    "type": "primary",
                    "handle": "submit",
                    "dynamicFun": "",
                    "hidden": false,
                    "disabled": false
                },
            },
            {
                "type": "alert",
                "label": "警告提示",
                "icon": "&#xe621;",
                "options": {
                    "type": "success",
                    "description": "",
                    "showIcon": false,
                    "banner": false,
                    "hidden": false,
                    "closable": false
                },
            },
            {
                "type": "text",
                "label": "文字",
                "icon": "&#xe61d;",
                "options": {
                    "textAlign": "center",
                    "alignItems": "center",
                    "justifyContent": "center",
                    "hidden": false,
                    "showRequiredMark": false
                },
            },
            {
                "type": "html",
                "label": "HTML",
                "icon": "&#xe604;",
                "options": {
                    "hidden": false,
                    "defaultValue": "<strong>HTML</strong>"
                },
            }
        ]
    },
    {
        key: 3,
        title: "特殊组件",
        copyName: "fromItem",
        children: []
    }
]