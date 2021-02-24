import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Share24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 4h3.46a.75.75 0 01.1 1.5H6.75c-1.2 0-2.17.93-2.25 2.1v9.65c0 1.2.92 2.17 2.1 2.24l.15.01h9.5c1.19 0 2.16-.93 2.24-2.1v-.65a.75.75 0 011.5-.1v.6c0 2-1.56 3.64-3.54 3.74l-.2.01h-9.5c-2 0-3.64-1.57-3.75-3.55v-9.7c0-2 1.57-3.64 3.55-3.74l.2-.01h3.46-3.46zm7.75 2.52V3.75c0-.62.7-.96 1.19-.61l.08.07 6 5.75c.27.27.3.7.07 1l-.08.08-5.99 5.75a.75.75 0 01-1.26-.43v-2.83l-.35.03c-2.4.25-4.7 1.33-6.92 3.26a.75.75 0 01-1.23-.66c.66-5.32 3.44-8.25 8.2-8.62l.3-.02V3.75v2.77zM16 5.51v1.74c0 .41-.34.75-.75.75-3.87 0-6.27 1.68-7.31 5.16l-.08.28.35-.24a12.68 12.68 0 017.04-2.2c.38 0 .7.28.74.65l.01.1v1.74l4.16-3.99-4.16-4z" fill={primaryFill} /></svg>;
};

export default Share24Regular;