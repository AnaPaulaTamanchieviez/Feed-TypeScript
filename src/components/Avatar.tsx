import {ImgHTMLAttributes} from 'react';

import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    // src: string;  opcional ja que essas sao as standards e ja vem do ImgHTMLAttributes
    // alt?:string;
}

export function Avatar ({hasBorder=true, ...props}:AvatarProps) {
    return (
        <img 
        className={hasBorder? styles.avatarWithBorder : styles.avatar} 
        {...props}
        />
    );
}