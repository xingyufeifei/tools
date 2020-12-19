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
import classNames from 'classnames';
import "./_styles.scss";
var Card = function (props) {
    var _a, _b, _c;
    var className = props.className, children = props.children, size = props.size, title = props.title, cover = props.cover, restProps = __rest(props, ["className", "children", "size", "title", "cover"]);
    var classes = classNames('card', className, (_a = {},
        _a["card-" + size] = size,
        _a));
    var classesheader = classNames("card-header", (_b = {},
        _b["none"] = !title,
        _b));
    var classescover = classNames("card-cover", (_c = {},
        _c["none"] = !cover,
        _c));
    return (React.createElement("div", __assign({}, restProps, { className: classes }),
        React.createElement("div", { className: classesheader },
            React.createElement("div", { className: "card-header-title" }, title)),
        React.createElement("div", { className: classescover }, cover),
        React.createElement("div", { className: "card-body" },
            " ",
            children)));
};
export default Card;
