import React from 'react'
import classNames from 'classnames'

import "./_styles.scss";

interface BaseCardProps {
    clsssname: string,
    size: string,
    title: string,
    cover:any,
}

export type CardProps = Partial<BaseCardProps & React.HTMLAttributes<HTMLElement>>

const Card: React.FC<CardProps> = (props) => {
    const {
        className,
        children,
        size,
        title,
        cover,
        ...restProps
    } = props;

    const classes = classNames('card', className, {
        [`card-${size}`]: size, // size 参数存在时动态添加 `btn-${size}` 类
    })
    const classesheader = classNames("card-header",{
        [`none`]: !title, // size 参数存在时动态添加 `card-header-${none}` 类
    })
    const classescover = classNames("card-cover",{
        [`none`]: !cover, // cover 参数存在时动态添加 `card-cover-${none}` 类
    })
    return (<div {...restProps} className={classes}>
        <div className={classesheader}>
            <div className={"card-header-title"}>{title}</div>
        </div>
        <div className={classescover}>{cover}</div>
        <div className={"card-body"}> {children}</div>

    </div>)
}

export default Card