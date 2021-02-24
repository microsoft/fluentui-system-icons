import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadingModeMobile24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 2c1.2 0 2.17.93 2.24 2.1l.01.15v15.5c0 1.19-.93 2.16-2.1 2.24H6.25c-1.2 0-2.17-.92-2.24-2.09L4 19.75V4.25c0-1.19.93-2.16 2.1-2.24h11.65zm0 1.5H6.25c-.38 0-.7.28-.74.65l-.01.1v15.5c0 .38.28.7.65.74h11.6c.38 0 .7-.27.74-.64l.01-.1V4.25c0-.38-.28-.7-.65-.74h-.1zm-5.5 9.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6zm4-3a.75.75 0 01.1 1.5h-8.6a.75.75 0 01-.1-1.5h8.6zm0-3a.75.75 0 01.1 1.5h-8.6a.75.75 0 01-.1-1.5h8.6z" fill={primaryFill} /></svg>;
};

export default ReadingModeMobile24Regular;