import menu from "./components/menu/menu.vue";
import header from "./components/header/header.vue";

// -- COMPONENTS -- 
const components = {
    "z-menu": menu,
    "z-header": header
}

// -- DATA --
const data = function () {
    return {

    }
};

// -- MOUNTED --
function mounted() {
    let history = this.$router.history;
    if (history) {
        let current = history.current
        if (current && current.path && current.path != "/flow") {
            // this.$router.push("/flow")
        }
    }
}

// -- METHODS --
const methods = {

};

export default {
    components: components,
    data: data,
    mounted: mounted,
    methods: methods
};