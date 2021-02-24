import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Whiteboard24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.99 4l-1.5 1.5H5.1c-.9.08-1.61.83-1.61 1.75v2.24l2.61-1.64c1-.63 2.32-.37 3 .57l.1.14c.4.63.46 1.4.17 2.08l-.08.17-1.21 2.28a.75.75 0 00.93 1.05l.1-.04 1.76-1a.75.75 0 01.83 1.25l-.09.06-1.76 1a2.25 2.25 0 01-3.17-2.87l.07-.15 1.21-2.28a.75.75 0 00-.96-1.04l-.1.05-3.41 2.14v5.5c0 .96.78 1.74 1.75 1.74h13.5c.97 0 1.75-.78 1.75-1.75v-7.3l1.5-1.5v8.8c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 16.75v-9.5a3.25 3.25 0 013.07-3.24L5.25 4h10.74zm5.19-.46l.13.13.12.13c.76.89.72 2.23-.13 3.07l-4.28 4.28c-.26.26-.58.45-.94.56l-2.33.7a1 1 0 01-1.24-1.27l.74-2.29c.11-.34.3-.65.56-.9l4.29-4.29a2.27 2.27 0 013.08-.12zm-2.02 1.19L14.86 9a.75.75 0 00-.18.3l-.45 1.39 1.42-.43c.12-.03.23-.1.31-.18l4.28-4.28.08-.08a.77.77 0 00-1.16-1z" fill={primaryFill} /></svg>;
};

export default Whiteboard24Regular;