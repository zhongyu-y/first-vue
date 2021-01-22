import { formList, layoutList, fromControls } from '../../components/config';
import zFormItem from '../../components/formItem/formItem.vue'
import zFormProperties from '../../components/zFormProperties/zFormProperties.vue'

import draggable from 'vuedraggable'

const components = {
    draggable,
    zFormItem,
    zFormProperties
}

function data() {
    return {
        formList: formList,
        layoutList: layoutList,
        fromControls: fromControls,
        activeCollapse: [1, 2], // 右侧折叠面板默认打开组
        datas: [{
            "key": "grid_12312313423",
            "icon": "&#xe622;",
            "type": "grid",
            "label": "栅格布局",
            "columns": [
                {
                    "span": 12,
                    "list": []
                },
                {
                    "span": 12,
                    "list": []
                }
            ],
            "options": {
                "gutter": 0
            }
        }],
        selectIndex: 0,
        selectItem: null
    }
}

function mounted() {
    // let time = new Date().getTime()
    // let datas = [
    //     {
    //         "key": "grid_" + time,
    //         "icon": "&#xe622;",
    //         "type": "grid",
    //         "label": "栅格布局",
    //         "columns": [
    //             {
    //                 "span": 12,
    //                 "list": []
    //             },
    //             {
    //                 "span": 12,
    //                 "list": []
    //             }
    //         ],
    //         "options": {
    //             "gutter": 0
    //         }
    //     }
    // ]
    // this.datas = datas;
}

const methods = {
    log: function (evt) {
        console.log(evt)
        // window.console.log(evt);
    },
    cloneDog(item) {
        console.log(item)
        item = JSON.parse(JSON.stringify(item))
        let time = new Date().getTime()
        item["key"] = `${item.type}_${time}`
        return item;
    },
    colClick(e, item) {
        console.log("======", item)
        this.stopPropagation(e);
        this.selectIndex = 1;
        this.selectItem = item;
        // document.getElementById("grid-row").className = "grid-row action"
    },
    stopPropagation(e) {
        e = e || window.event;
        if (e.stopPropagation) { //W3C阻止冒泡方法  
            e.stopPropagation();
        } else {
            e.cancelBubble = true; //IE阻止冒泡方法  
        }
    },
    saveClick() {
        console.log(JSON.stringify(this.datas))
    },
    formItemClick(e, item) {
        this.stopPropagation(e)
        this.selectIndex = 2;
        // document.getElementById("grid-row").className = "grid-row"
        this.selectItem = item;
    },
    onDelete() {
        console.log("清空数据")
    },
    onChrome() {
        console.log("弹框预览")
    },
    onSave() {
        console.log("保存",)
        var db = openDatabase('fromdb', '1.0', 'Test DB', 1024 * 1024 * 1024);
        console.log(db)
        // let time = new Date().getTime()
        let data = JSON.stringify(this.datas)
        db.transaction(function (tx) {
            console.log(tx, data)
            //开发测试
            tx.executeSql('DROP TABLE IF EXISTS FORMS');
            tx.executeSql('CREATE TABLE IF NOT EXISTS FORMS (id unique, text)');

            tx.executeSql(`INSERT INTO FORMS (id, text) VALUES (1, '` + data + `')`);


            var IsDropQLGXRW = 'select text from FORMS where id=1';
            tx.executeSql(IsDropQLGXRW, [], function (tx, results) {
                console.log(tx, results)
                if (results.rows.length > 0) {
                    var text = results.rows.item(0).text;
                    console.log(JSON.parse(text))
                }
                //     //     tx.executeSql(`INSERT INTO FORMS (text) VALUES ('`+data+`')`);
                //     // } else {
                //     //     tx.executeSql(`INSERT INTO FORMS (text) VALUES ('`+data+`')`);
                //     // }
                //     // console.log(tx, results.rows.length, )
                //     // var isdrop = results.rows.item(0).sql; 
                //     // var dropflag = isdrop.indexOf("QLGXRWNumber");
                //     // if (dropflag == -1) {
                //     //     //不包含
                //     //     console.log("删除QLGXRW...");
                //         // tx.executeSql('DROP TABLE IF EXISTS FORMS');
                //     // } 
            }, null);
            // tx.executeSql('CREATE TABLE IF NOT EXISTS FORMS (id unique, text)');
            // tx.executeSql(`INSERT INTO FORMS (text) VALUES ('`+data+`')`);
            // tx.executeSql('DROP TABLE LOGS');
            // msg = '<p>数据表已创建，且插入了两条数据。</p>';
            // document.querySelector('#status').innerHTML =  msg;
        })
        // let time = new Date().getTime()
        // let filename = `${time}.json`
        // let data = Object.assign(this.datas)
        // console.log(data)
        // if (typeof data === "object") {
        //     data = JSON.stringify(data)
        // }
        // var blob = new Blob([data], { type: 'text/json' }),
        //     e = document.createEvent('MouseEvents'),
        //     a = document.createElement('a')
        // a.download = filename
        // a.href = window.URL.createObjectURL(blob)
        // a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        // e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        // a.dispatchEvent(e)

    },
    addDatas() {
        const { datas } = this;
        let time = new Date().getTime()
        datas.push({
            "span": 24,
            "key": "grid_" + time,
            "list": []
        })
        this.datas = datas;
    }
}

export default {
    components: components,
    data: data,
    methods: methods,
    mounted: mounted,
}