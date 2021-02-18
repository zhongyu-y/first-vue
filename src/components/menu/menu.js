import { menus } from "../../config/config";
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
        let menu = this.menus.find(item => {
            return item.key == key;
        });
        console.log(menu, keyPath);
        this.$router.push(menu.url)
    },
};

export default {
    name: name,
    data: data,
    methods: methods,
    mounted: mounted
};