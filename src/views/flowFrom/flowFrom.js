import { fromControls } from '../../config/config';
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
        fromControls: fromControls,
        activeCollapse: [1, 2], // 右侧折叠面板默认打开组
        datas: [], // 表单组
        selectType: 0, // 选择的类型 1,栅格布局，2 表单组件，其他则无选中
        selectItem: null  // 选择item
    }
}

function mounted() {
    console.log(this.$router)

    this._initFrom();
}

const methods = {

    _initFrom() {
        const self = this;
        // 打开 创建Web Sql
        var db = openDatabase('fromdb', '1.0', 'Test DB', 1024 * 1024 * 1024);
        db.transaction(function (tx) {
            //查询表单数据
            var IsDropQLGXRW = 'select text from FORMS where id=1';
            tx.executeSql(IsDropQLGXRW, [], function (tx, results) {
                // console.log(tx, results)
                // 判断是否查询成功
                if (results.rows.length > 0) {
                    var text = results.rows.item(0).text;
                    if (text != "" && text != null && JSON.parse(text)) {
                        self.datas = JSON.parse(text);
                    }
                }
            }, null);
        })
    },

    /**
     * 点击本层防止出发父层
     */
    _stopPropagation(e) {
        e = e || window.event;
        if (e.stopPropagation) { //W3C阻止冒泡方法  
            e.stopPropagation();
        } else {
            e.cancelBubble = true; //IE阻止冒泡方法  
        }
    },

    log: function () {
        // console.log(evt)
        // window.console.log(evt);
    },

    fromRemove(rowId) {
        this.colHeight(rowId)
    },

    fromAdd(rowId) {
        this.colHeight(rowId)
    },

    /**
     * 通过选择的row的获取高重新计算出col的高
     */
    colHeight(key) {
        let row = document.getElementById(key);
        for (let i = 0; i < row.children.length; i++) {
            const children = row.children[i];
            children.style.height = "auto"
        }

        let datas = JSON.parse(JSON.stringify(this.datas))
        // console.log(row)
        let offsetHeight = row.offsetHeight;
        let index = datas.findIndex((data) => {
            return data.key == row.id;
        })
        if (Number(offsetHeight) < 64) {
            offsetHeight = 64;
        }
        datas[index]["height"] = offsetHeight;
        this.datas = datas
    },

    cloneDog(item) {
        // 深拷贝item
        let newItem = JSON.parse(JSON.stringify(item))
        let time = new Date().getTime()
        // 给item添加上唯一值(时间戳)
        newItem["key"] = `${item.type}_${time}`
        return newItem;
    },

    /**
     * 点击相应的栅格布局
     */
    colClick(e, item) {
        this._stopPropagation(e);
        this.selectType = 1;
        this.selectItem = item;
    },

    /**
     * 点击相应的表单组件
     */
    formItemClick(e, item) {
        this._stopPropagation(e)
        this.selectType = 2;
        // document.getElementById("grid-row").className = "grid-row"
        this.selectItem = item;
    },

    /**
     * 清空数据
     */
    onDelete() {
        // console.log("清空数据")
        this.datas = [];
    },

    /**
     * 预览表单
     */
    onChrome() {
        // console.log("弹框预览")
    },

    /**
     * 缓存表单
     */
    onSave() {
        // console.log("保存",)
        // 打开 创建Web Sql
        var db = openDatabase('fromdb', '1.0', 'Test DB', 1024 * 1024 * 1024);
        // let time = new Date().getTime()
        let data = JSON.stringify(this.datas)
        db.transaction(function (tx) {
            //删除历史表单表
            tx.executeSql('DROP TABLE IF EXISTS FORMS');
            //创建新的表单表（id 唯一值用于缓存的key, text 表单数据）
            tx.executeSql('CREATE TABLE IF NOT EXISTS FORMS (id unique, text)');
            //给表格赋值
            tx.executeSql(`INSERT INTO FORMS (id, text) VALUES (1, '` + data + `')`);
        })
    },

    itemDelete(i, j, k) {
        let datas = JSON.parse(JSON.stringify(this.datas))
        let list = datas[i].children[j].children;
        list.splice(k, 1)
        datas[i].children[j].children = list;

        this.datas = datas;
        const self = this;
        setTimeout(function () {
            self.colHeight(datas[i].key)
        }, 100)
    },

    rowDelete(i) {
        let datas = JSON.parse(JSON.stringify(this.datas))
        let list = datas.splice(i, 1);
        this.datas = list;
    }
}

export default {
    components: components,
    data: data,
    methods: methods,
    mounted: mounted,
}