import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Image28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.47 15.72l.09-.07c.26-.19.61-.2.87 0l.1.07 8.92 8.8c-.5.3-1.08.48-1.7.48H6.25c-.62 0-1.2-.18-1.7-.48l8.92-8.8.09-.07-.09.07zM21.75 3C23.55 3 25 4.46 25 6.25v15.5c0 .63-.18 1.21-.48 1.7l-8.94-8.8-.13-.11c-.83-.7-2.06-.71-2.9 0l-.13.11-8.94 8.8c-.3-.49-.48-1.07-.48-1.7V6.25C3 4.45 4.46 3 6.25 3h15.5zM19 7a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 1.5a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
};

export default Image28Filled;