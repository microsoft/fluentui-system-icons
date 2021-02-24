import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Chat24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 11-4.59 18.89L3.6 21.96a1.25 1.25 0 01-1.54-1.54l1.06-3.83A10 10 0 0112 2zm0 1.5a8.5 8.5 0 00-7.43 12.64l.15.27-1.1 3.98 3.98-1.11.27.15A8.5 8.5 0 1012 3.5zM8.75 13h4.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6-4.5zm0-3.5h6.5a.75.75 0 01.1 1.5h-6.6a.75.75 0 01-.1-1.5h6.6-6.5z" fill={primaryFill} /></svg>;
};

export default Chat24Regular;