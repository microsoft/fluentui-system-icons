import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const News24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 20H5.25a3.25 3.25 0 01-3.24-3.07L2 16.75V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h12.5c1.2 0 2.17.93 2.24 2.1l.01.15V7h.75c1.2 0 2.17.93 2.24 2.1l.01.15v7.5a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25h13.5zm-13.5-1.5h13.5c.92 0 1.67-.7 1.74-1.6l.01-.15v-7.5c0-.38-.28-.7-.65-.74l-.1-.01H19v7.75c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-10c0-.38-.28-.7-.65-.74l-.1-.01H4.25c-.38 0-.7.28-.74.65l-.01.1v10.5c0 .92.7 1.67 1.6 1.74l.15.01h13.5-13.5zm7-4h3a.75.75 0 01.1 1.5h-3.1a.75.75 0 01-.1-1.5h3.1-3zm-3-3.5c.4 0 .74.34.74.75v3.5c0 .41-.33.75-.75.75h-3.5a.75.75 0 01-.74-.75v-3.5c0-.41.33-.75.75-.75h3.5zm-.76 1.5h-2v2h2v-2zm3.76-1.5h3a.75.75 0 01.1 1.5h-3.1a.75.75 0 01-.1-1.49h3.1-3zm-6.5-3.5h9.5a.75.75 0 01.1 1.5h-9.6a.75.75 0 01-.1-1.5h9.6-9.5z" fill={primaryFill} /></svg>;
};

export default News24Regular;