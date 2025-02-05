import React from "react";
import clsx from 'clsx';

interface TagProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export const Title : React.FC<TagProps> = ({ id, className, style, children, ...rest}) => {

    return (
        <h1 id={id} className={clsx('title-text', className)} style={style} {...rest}>
            {children}
        </h1>
    );
};
export const Subtitle : React.FC<TagProps> = ({ id, className, style, children, ...rest }) => {

    return (
        <h2 id={id} className={clsx('subtitle-text', className)} style={style} {...rest}>
            {children}
        </h2>
    );
};
export const SectionTitle : React.FC<TagProps> = ({ id, className, style, children, ...rest }) => {

    return (
        <h2 id={id} className={clsx('section-title-text', className)} style={style} {...rest}>
            {children}
        </h2>
    );
};

interface SpacingProps extends TagProps {
    top?: number;
}
export const Spacing : React.FC<SpacingProps> = ({ id, className, style, top, children, ...rest }) => {
    const classes = clsx(
        top && `top-${top}`,
        className
    );
    return (
        <div id={id} className={classes} style={style} {...rest}>
            {children}
        </div>
    );
};
