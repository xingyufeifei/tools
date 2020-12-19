import React from 'react';
import classNames from "classnames";
import './_styles.scss'

interface BaseMaskProps {
    className?: string;
  }
export type MaskProps =BaseMaskProps & React.ButtonHTMLAttributes<HTMLElement>;
// 利用 classNames 判断按钮的相应 class 值。
const Mask: React.FC<MaskProps> = (props) => {
    const {
        className,
        ...restProps //ES6 rest 语法
      } = props;

    const classes = classNames('m-mask', className)

    return <div className={classes} {...restProps} />;
}


export default Mask;
