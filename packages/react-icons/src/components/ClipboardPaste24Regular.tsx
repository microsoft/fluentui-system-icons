import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardPaste24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 2c1.16 0 2.11.88 2.24 2h1.76c1.2 0 2.17.93 2.24 2.1l.01.15c0 .38-.28.7-.65.74h-.1a.75.75 0 01-.74-.64l-.01-.1c0-.38-.28-.7-.65-.74l-.1-.01h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.46-.4-1.87-1H5.25c-.38 0-.7.28-.74.65l-.01.1v13.5c0 .38.28.7.65.75h3.1c.38 0 .7.29.74.65l.01.1c0 .42-.34.75-.75.75h-3c-1.2 0-2.17-.92-2.24-2.1L3 19.76V6.25c0-1.2.93-2.17 2.1-2.24L5.25 4h1.76c.13-1.12 1.08-2 2.24-2h3.5zm6 6c1.2 0 2.17.93 2.24 2.1l.01.15v9.5c0 1.2-.93 2.17-2.1 2.24l-.15.01h-6.5c-1.2 0-2.17-.93-2.24-2.1l-.01-.15v-9.5c0-1.2.93-2.17 2.1-2.24l.15-.01h6.5zm0 1.5h-6.5c-.38 0-.7.28-.74.65l-.01.1v9.5c0 .38.28.7.65.74l.1.01h6.5c.38 0 .7-.28.74-.65l.01-.1v-9.5c0-.38-.28-.7-.65-.74l-.1-.01zm-6-6h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 100-1.5z" fill={primaryFill} /></svg>;
};

export default ClipboardPaste24Regular;