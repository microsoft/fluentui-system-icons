import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentArrowRight12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM6.5 3a.5.5 0 000 1h2.8l-.65.65a.5.5 0 10.7.7l1.5-1.5A.5.5 0 0011 3.5a.5.5 0 00-.15-.35l-1.5-1.5a.5.5 0 10-.7.7l.64.65H6.5z" fill={primaryFill} /><path d="M8.5 8c.92 0 1.77-.28 2.48-.75A2 2 0 019 9H6.65l-2.87 1.92A.5.5 0 013 10.5V9a2 2 0 01-2-2V3c0-1.1.9-2 2-2h1.76A4.5 4.5 0 008.5 8z" fill={primaryFill} /></svg>;
};

export default CommentArrowRight12Filled;