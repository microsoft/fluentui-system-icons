import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WindowInprivate20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3h-9zM16 5.5V6h-1.3l1.15-1.14c.1.2.15.41.15.64zm-.85-1.35L13.29 6h-2.82l2-2h2.03c.23 0 .45.05.65.15zM11.05 4l-2 2H6.22l2-2h2.83zM6.81 4l-2 2H4v-.5C4 4.67 4.67 4 5.5 4h1.3zM4 8.23L5.22 7h2.83L4 11.05V8.23zM9.47 7h2.82l-8.15 8.15A1.5 1.5 0 014 14.5v-2.03L9.47 7zm4.24 0H16v.54L7.54 16H5.5a1.5 1.5 0 01-.65-.14L13.71 7zM16 8.95v2.83L11.78 16H8.95L16 8.95zm0 4.25v1.3c0 .83-.67 1.5-1.5 1.5h-1.3l2.8-2.8z" fill={primaryFill} /></svg>;
};

export default WindowInprivate20Regular;