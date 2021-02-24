import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AppRecent24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 2c1.2 0 2.17.93 2.24 2.1l.01.15V5h1.75c1.2 0 2.17.93 2.24 2.1l.01.15v9.5c0 1.2-.93 2.17-2.1 2.24l-.15.01H18v.75c0 1.2-.93 2.17-2.1 2.24l-.15.01h-7.5c-1.2 0-2.17-.93-2.24-2.1L6 19.75V19H4.25c-1.2 0-2.17-.93-2.24-2.1L2 16.75v-9.5c0-1.2.93-2.17 2.1-2.24L4.25 5H6v-.75c0-1.2.93-2.17 2.1-2.24L8.25 2h7.5zm0 1.5h-7.5c-.38 0-.7.28-.74.65l-.01.1v15.5c0 .38.28.7.65.74l.1.01h7.5c.38 0 .7-.28.74-.65l.01-.1V4.25c0-.38-.28-.7-.65-.74l-.1-.01zM6 6.5H4.25c-.38 0-.7.28-.74.65l-.01.1v9.5c0 .38.28.7.65.74l.1.01H6v-11zm13.75 0H18v11h1.75c.38 0 .7-.28.74-.65l.01-.1v-9.5a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
};

export default AppRecent24Regular;