import dayjs from 'dayjs';
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
    },
    fixedZero: function (val) {
        return val * 1 < 10 ? `0${val}` : val;
    },
    getTimeDistance: function (type) {
        const now = new Date();
        const oneDay = 1000 * 60 * 60 * 24;
        if (type === 'today') {
            now.setHours(0);
            now.setMinutes(0);
            now.setSeconds(0);
            return [dayjs(now), dayjs(now.getTime() + (oneDay - 1000))];
        }
        if (type === 'week') {
            let day = now.getDay();
            now.setHours(0);
            now.setMinutes(0);
            now.setSeconds(0);

            if (day === 0) {
                day = 6;
            } else {
                day -= 1;
            }
            const beginTime = now.getTime() - day * oneDay;
            return [dayjs(beginTime), dayjs(beginTime + (7 * oneDay - 1000))];
        }
        const year = now.getFullYear();
        if (type === 'month') {
            const month = now.getMonth();
            const nextDate = dayjs(now).add(1, 'months');
            const nextYear = nextDate.year();
            const nextMonth = nextDate.month();
            return [
                dayjs(`${year}-${this.fixedZero(month + 1)}-01 00:00:00`),
                dayjs(dayjs(`${nextYear}-${this.fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
            ];
        }
        return [dayjs(`${year}-01-01 00:00:00`), dayjs(`${year}-12-31 23:59:59`)];
    }
}
export default common;