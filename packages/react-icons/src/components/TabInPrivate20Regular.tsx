import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabInPrivate20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3h-9zM4 5.5C4 4.67 4.67 4 5.5 4h.34L4 6.19V5.5zm0 2.24L7.14 4h2.1L4 10.25v-2.5zM10.55 4h2.1L4 14.32V11.8L10.55 4zm3.41 0h.54c.45 0 .86.2 1.13.52L6 16h-.5a1.5 1.5 0 01-1.15-.54L13.96 4zM16 5.64v2.5L9.41 16h-2.1L16 5.64zm0 4.06v2.51L12.82 16h-2.1L16 9.7zm0 4.07v.73c0 .83-.67 1.5-1.5 1.5h-.37L16 13.77z" fill={primaryFill} /></svg>;
};

export default TabInPrivate20Regular;