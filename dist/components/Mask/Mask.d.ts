import React from 'react';
import './_styles.scss';
interface BaseMaskProps {
    className?: string;
}
export declare type MaskProps = BaseMaskProps & React.ButtonHTMLAttributes<HTMLElement>;
declare const Mask: React.FC<MaskProps>;
export default Mask;
