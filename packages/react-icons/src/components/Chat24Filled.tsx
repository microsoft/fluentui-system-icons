import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Chat24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 11-4.64 18.86l-4.3 1.12a.85.85 0 01-1.03-1.04l1.11-4.29A10 10 0 0112 2zm1.25 11h-4.6a.75.75 0 000 1.5H13.35a.75.75 0 000-1.5h-.1zm2-3.5h-6.6a.75.75 0 000 1.5H15.35a.75.75 0 000-1.5h-.1z" fill={primaryFill} /></svg>;
};

export default Chat24Filled;