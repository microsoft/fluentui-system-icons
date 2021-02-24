import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabInPrivate28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 3A3.5 3.5 0 003 6.5v15A3.5 3.5 0 006.5 25h15a3.5 3.5 0 003.5-3.5v-15A3.5 3.5 0 0021.5 3h-15zM5 6.5C5 5.67 5.67 5 6.5 5h1.3L5 8.34V6.5zm0 4.18L9.76 5h3.14L5 14.42v-3.74zM14.86 5H18L5 20.5v-3.75L14.86 5zm5.1 0h1.54c.46 0 .87.2 1.15.53L7.99 23H6.5c-.47 0-.9-.22-1.17-.57L19.96 5zM23 13.52v3.74L18.18 23h-3.13L23 13.52zm0-6.07v3.74L13.09 23H9.95L23 7.45zM20.14 23L23 19.6v1.9c0 .83-.67 1.5-1.5 1.5h-1.36z" fill={primaryFill} /></svg>;
};

export default TabInPrivate28Filled;