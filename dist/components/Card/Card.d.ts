import React from 'react';
import "./_styles.scss";
interface BaseCardProps {
    clsssname: string;
    size: string;
    title: string;
    cover: any;
}
export declare type CardProps = Partial<BaseCardProps & React.HTMLAttributes<HTMLElement>>;
declare const Card: React.FC<CardProps>;
export default Card;
