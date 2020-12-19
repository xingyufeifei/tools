var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from "classnames";
var Button = function (props) {
    var _a;
    // 通过 ES6 对象的解构赋值取出所有属性，其中restProps就是除显示定义的剩下所有的属性。
    var btnType = props.btnType, disabled = props.disabled, size = props.size, children = props.children, className = props.className, href = props.href, restProps = __rest(props, ["btnType", "disabled", "size", "children", "className", "href"]) //ES6 rest 语法
    ;
    // 利用 classNames 判断按钮的相应 class 值。
    var classes = classNames('btn', className, (_a = {},
        _a["btn-" + btnType] = btnType,
        _a["btn-" + size] = size,
        _a['disabled'] = (btnType === 'link') && disabled // 由于 a 链接原生不带有 disabled 属性，因此需要手动给它添加一个 disabled 类。通过编写类的样式实现disabled效果
    ,
        _a));
    // 判断如果是 link 类型，则输出 a 链接，否则输出 button。
    if (btnType === 'link' && href) {
        return (React.createElement("a", __assign({}, restProps, { href: href, className: classes }), children));
    }
    else {
        return (React.createElement("button", __assign({}, restProps, { className: classes, disabled: disabled }), children));
    }
};
// 属性默认值
Button.defaultProps = {
    disabled: false,
    btnType: 'default'
};
export default Button;
