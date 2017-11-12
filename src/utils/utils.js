const handleFormat = (value, format = "yyyy-MM-dd HH:mm") => {
    const handleFix = (str) => {
        str = "" + (str || "");
        return str.length <= 1? "0" + str : str;
    };
    const maps = {
        'yyyy': function(date){return date.getFullYear()},
        'MM': function(date){return handleFix(date.getMonth() + 1); },
        'dd': function(date){ return handleFix(date.getDate()) },
        'HH': function(date){ return handleFix(date.getHours()) },
        'mm': function(date){ return handleFix(date.getMinutes())}
    };
    const trunk = new RegExp(Object.keys(maps).join('|'),'g');

    value = new Date(value);

    return format.replace(trunk, (capture) => {
        return maps[capture]? maps[capture](value): "";
    });
};

const judgeOverdue = (time) => {
    const now = (new Date()).valueOf();
    return now > time;
};

const utils = {
    handleFormat,
    judgeOverdue
};

export default utils;