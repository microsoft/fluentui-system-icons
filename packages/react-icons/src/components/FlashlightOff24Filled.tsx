import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlashlightOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.22 4.22a.75.75 0 01.98-.07l.08.07 16.5 16.5.07.08a.75.75 0 01-1.05 1.05l-.08-.07L17.94 19h-2.19a2.75 2.75 0 01-2.74-2.58v-.17L13 16H3.75c-.92 0-1.67-.7-1.75-1.6V9.74c0-.92.7-1.67 1.6-1.74h.15L6.94 8 4.22 5.28l-.07-.08a.75.75 0 01.07-.98zM21.25 5c.38 0 .7.28.74.65l.01.1v12.5c0 .2-.07.37-.19.5L11.06 8H13v-.25a2.75 2.75 0 012.58-2.74l.17-.01h5.5zm-13 6.25h-2.6a.75.75 0 000 1.5h2.7a.75.75 0 00-.1-1.5z" fill={primaryFill} /></svg>;
};

export default FlashlightOff24Filled;