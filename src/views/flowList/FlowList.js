import { flowList } from "../../network/api";


// -- DATA --
const data = function () {
    return {
        tableData: [],
        formInline: {
            name: ""
        }
    }
};

// -- MOUNTED --
function mounted() {
    flowList().then((data) => {
        console.log(data)
        this.tableData = data;
    })
}

// -- METHODS --
const methods = {
    onSubmit() {

    },

    handleClick(row) {
        console.log(row)
        this.$router.push(`/create/flow/${row.id}`)
    }
};

export default {
    data: data,
    mounted: mounted,
    methods: methods
};