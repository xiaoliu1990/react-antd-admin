var common = {
    // 根据某个属性值从路由查找拥有该属性值的name
    getTitle: function (menuList, key, value) {
        return menuList.filter((item) => {
            return item[key] === value;
        });
    },
    //过滤html
    fiterHtml: function (s) {
        var s = s.replace(/<\s*script[^>]*>(.|[\r\n])*?<\s*\/script[^>]*>/gi, '');
        s = s.replace(/<\s*style[^>]*>(.|[\r\n])*?<\s*\/style[^>]*>/gi, '');
        s = s.replace(/<\/?[^>]+>/g, '');
        s = s.replace(/\&[a-z]+;/gi, '');
        s = s.replace(/nbsp;/ig, '');
        return s;
    },
    //防抖
    debounce: function (func, wait, immediate) {
        let timeout, args, context, timestamp, result;
        const later = function () {
            // 据上一次触发时间间隔
            const last = +new Date() - timestamp;
            // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
            if (last < wait && last > 0) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
                if (!immediate) {
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                }
            }
        }
    }
}
export default common;