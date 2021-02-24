import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardImage24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2c1.16 0 2.11.87 2.24 2h1.76c1.2 0 2.17.93 2.24 2.1l.01.15v1.5a.75.75 0 01-1.5.1v-1.6c0-.38-.28-.7-.65-.74l-.1-.01h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.46-.4-1.87-1H6.25c-.38 0-.7.28-.74.65l-.01.1v13.5c0 .38.28.7.65.75h1.6a.75.75 0 01.1 1.5h-1.6c-1.2 0-2.17-.92-2.24-2.1L4 19.76V6.25c0-1.2.93-2.17 2.1-2.24L6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5zm5 8c1.8 0 3.25 1.46 3.25 3.25v5.5c0 1.8-1.46 3.25-3.25 3.25h-5.5A3.25 3.25 0 0110 18.75v-5.5c0-1.8 1.46-3.25 3.25-3.25h5.5zm.59 10.4l-2.81-2.8a.75.75 0 00-.98-.08l-.08.07-2.8 2.8c.18.07.37.11.58.11h5.5c.2 0 .4-.04.59-.1l-2.81-2.8 2.8 2.8zm-.59-8.9h-5.5c-.97 0-1.75.78-1.75 1.75v5.5c0 .2.04.4.1.59l2.8-2.81a2.25 2.25 0 013.06-.12l.13.12 2.8 2.8c.07-.18.11-.37.11-.58v-5.5c0-.97-.78-1.75-1.75-1.75zM18 13a1 1 0 110 2 1 1 0 010-2zm-4.25-9.5h-3.5a.75.75 0 100 1.5h3.5a.75.75 0 100-1.5z" fill={primaryFill} /></svg>;
};

export default ClipboardImage24Regular;