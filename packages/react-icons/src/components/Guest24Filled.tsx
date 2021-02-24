import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Guest24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2c1.16 0 2.11.88 2.24 2h1.76c1.2 0 2.17.93 2.24 2.1l.01.15v13.5c0 1.2-.93 2.17-2.1 2.25H6.25c-1.2 0-2.17-.92-2.24-2.1L4 19.76V6.25c0-1.2.93-2.17 2.1-2.24L6.25 4h1.76c.13-1.12 1.08-2 2.24-2h3.5zm0 4.5h-3.5c-.78 0-1.46-.4-1.87-1H6.25c-.38 0-.7.28-.74.65l-.01.1v13.5c0 .38.28.7.65.75h11.6c.38 0 .7-.28.74-.64l.01-.1V6.24c0-.38-.28-.7-.65-.74l-.1-.01h-2.13c-.4.6-1.09 1-1.87 1zm1 7.5c.69 0 1.25.56 1.25 1.25v.5c0 1.84-1.47 2.75-4 2.75-2.53 0-4-.91-4-2.76v-.5c0-.68.56-1.24 1.25-1.24h5.5zM12 8a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm1.75-4.5h-3.5a.75.75 0 100 1.5h3.5a.75.75 0 100-1.5z" fill={primaryFill} /></svg>;
};

export default Guest24Filled;