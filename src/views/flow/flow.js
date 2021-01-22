
import flowDraw from '../flowDraw/flowDraw.vue';
import flowFrom from '../flowFrom/flowFrom.vue';

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

}

const methods = {

}
// components
export default {
    components: components,
    data: data,
    mounted: mounted,
    methods: methods
}