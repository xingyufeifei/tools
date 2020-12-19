import React from 'react';
import classNames from "classnames";
// 定义按钮大小类型
export type ButtonSize = 'lg' | 'df' |'sm';

// 定义按钮type种类
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

// 定义Button组件基础入参属性
interface BaseButtonProps {
  className: string;
  disabled: boolean;
  size: ButtonSize;
  btnType: ButtonType;
  children: React.ReactNode;
  href: string;
}

// 定义按钮的基础类型与原生按钮的联合类型
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;

// 定义按钮的基础类型与原生A标签的联合类型
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

// 执行 Partial，相当于所有属性都变为可选,如 {disabled?:boolean,...}.
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;


const Button: React.FC<ButtonProps> = (props) => {
  // 通过 ES6 对象的解构赋值取出所有属性，其中restProps就是除显示定义的剩下所有的属性。
  const {
    btnType,
    disabled,
    size,
    children,
    className,
    href,
    ...restProps //ES6 rest 语法
  } = props;

	// 利用 classNames 判断按钮的相应 class 值。
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType, // btnType 参数存在时则动态添加 `btn-${btnType}` 类
    [`btn-${size}`]: size, // size 参数存在时动态添加 `btn-${size}` 类
    'disabled': (btnType === 'link') && disabled // 由于 a 链接原生不带有 disabled 属性，因此需要手动给它添加一个 disabled 类。通过编写类的样式实现disabled效果
  })

	// 判断如果是 link 类型，则输出 a 链接，否则输出 button。
  if(btnType === 'link' && href){
    return (
      <a
        {...restProps}
        href={href}
        className={classes}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        {...restProps}
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
}
// 属性默认值
Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}
export default Button;
