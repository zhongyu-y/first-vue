
import flowDraw from '../flowDraw/flowDraw.vue';
import flowFrom from '../flowFrom/flowFrom.vue';
import { flowInfo } from "../../network/api";
// -- COMPONENTS -- 
const components = {
    "flowDraw": flowDraw,
    "flowFrom": flowFrom
}

function data() {
    return {
        activeName: "flowFrom"
        // activeName: "flowDraw"
    }
}

function mounted() {
    let self = this;
    let history = this.$router.history;
    if (history) {
        let current = history.current;
        if (current) {
            let params = current.params;
            if (params) {
                let id = params.id;
                console.log(id)
                flowInfo({ id: id }).then((data) => {
                    self.saveData(data.formData, data.flowData)
                })
            }
        }
    }
    console.log()
}

const methods = {
    /**
     * 缓存表单和流程图数据
     */
    saveData(formData, flowData) {
        // 打开 创建Web Sql
        var db = openDatabase('fromdb', '1.0', 'Test DB', 1024 * 1024 * 1024);
        db.transaction(function (tx) {
            //删除历史表单表
            tx.executeSql('DROP TABLE IF EXISTS FORMS');
            //创建新的表单表（id 唯一值用于缓存的key, text 表单数据）
            tx.executeSql('CREATE TABLE IF NOT EXISTS FORMS (id unique, text)');
            //给表格赋值
            tx.executeSql(`INSERT INTO FORMS (id, text) VALUES (1, '` + formData + `')`);
            //给表格赋值
            tx.executeSql(`INSERT INTO FORMS (id, text) VALUES (2, '` + flowData + `')`);
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