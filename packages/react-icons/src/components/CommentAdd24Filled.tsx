import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.02 3A6.5 6.5 0 0022 11.19v3.56c0 1.8-1.46 3.25-3.25 3.25h-5.79l-5.38 3.82A1 1 0 016 21v-3h-.75A3.25 3.25 0 012 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77zm5.48-2a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1.5h-.09a.5.5 0 00-.4.41L17 3v3H13.9a.5.5 0 00-.4.41l-.01.09v.09c.05.2.2.36.41.4L14 7h3v3.09c.05.2.2.36.41.4l.09.01h.09a.5.5 0 00.4-.41L18 10V7h3.09a.5.5 0 00.4-.41l.01-.09v-.09a.5.5 0 00-.41-.4L21 6h-3V2.91a.5.5 0 00-.41-.4l-.09-.01z" fill={primaryFill} /></svg>;
};

export default CommentAdd24Filled;