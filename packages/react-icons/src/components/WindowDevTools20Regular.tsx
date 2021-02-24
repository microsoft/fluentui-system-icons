import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WindowDevTools20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h9A2.5 2.5 0 0116 4.5v2.21c-.34.03-.68.1-1 .22V6H3v7.5c0 .83.67 1.5 1.5 1.5h6.7l-.45.76-.12.24H4.5A2.5 2.5 0 012 13.5v-9zM4.5 3C3.67 3 3 3.67 3 4.5V5h12v-.5c0-.83-.67-1.5-1.5-1.5h-9z" fill={primaryFill} /><path d="M13.87 9.1c-.56.97-.46 2.14.15 3l-2.4 4.16a1.16 1.16 0 002 1.16l2.41-4.17a2.78 2.78 0 002.36-4.58l-1.3 2.27a.93.93 0 01-1.61-.92l1.3-2.27c-1.12-.21-2.3.3-2.9 1.34z" fill={primaryFill} /><path d="M12.56 11.15c-.12-.69-.06-1.4.21-2.08l-1.92-1.92a.5.5 0 10-.7.7L12.29 10l-2.14 2.15a.5.5 0 10.7.7l1.71-1.7z" fill={primaryFill} /><path d="M8.35 7.85a.5.5 0 00-.7-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7L6.21 10l2.14-2.15z" fill={primaryFill} /></svg>;
};

export default WindowDevTools20Regular;