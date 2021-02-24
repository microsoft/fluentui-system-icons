import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const News28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 5.75V20.5a.5.5 0 001 .09V7h1.25c.92 0 1.67.7 1.74 1.6l.01.15v12a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25a3.25 3.25 0 01-3.24-3.07L2 20.75v-15c0-.92.7-1.67 1.6-1.74L3.76 4h16.5c.92 0 1.67.7 1.74 1.6l.01.15V20.5 5.75zM9.75 13h-2.5c-.92 0-1.67.71-1.74 1.61l-.01.14v2.5c0 .92.7 1.67 1.6 1.74l.15.01h2.5c.91 0 1.67-.7 1.74-1.6v-2.65c0-.91-.7-1.67-1.6-1.74h-.14zm8 4.5h-3.6a.75.75 0 000 1.5h3.7a.75.75 0 000-1.5h-.1zm-10.5-3h2.5c.11 0 .21.09.24.2v2.55c0 .12-.08.22-.19.24l-.05.01h-2.5a.25.25 0 01-.24-.2L7 17.26v-2.5c0-.11.08-.21.2-.24h2.55-2.5zm10.5-1.5h-3.5l-.1.01a.75.75 0 000 1.49h3.7a.75.75 0 000-1.49h-.1zm0-4.5H6.15a.75.75 0 000 1.49h11.7a.75.75 0 000-1.49h-.1z" fill={primaryFill} /></svg>;
};

export default News28Filled;