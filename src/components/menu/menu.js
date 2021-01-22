import { menus } from "../config";
// -- NANE -- 
const name = "z-menu"

// -- DATA --
const data = function () {
    return {
        activeIndex: "1",
        menus: menus,
    };
};

// -- MOUNTED --
function mounted() {
}


// -- METHODS --
const methods = {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
};

export default {
    name: name,
    data: data,
    methods: methods,
    mounted: mounted
};