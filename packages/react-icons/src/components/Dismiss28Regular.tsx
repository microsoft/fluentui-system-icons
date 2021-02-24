import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Dismiss28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.52 3.72l.1-.1a1.25 1.25 0 011.66-.1l.1.1L14 12.23l8.62-8.61a1.25 1.25 0 011.76 1.76L15.77 14l8.61 8.62c.46.45.49 1.17.1 1.66l-.1.1c-.45.46-1.17.49-1.66.1l-.1-.1L14 15.77l-8.62 8.61a1.25 1.25 0 01-1.76-1.76L12.23 14 3.62 5.38a1.25 1.25 0 01-.1-1.66l.1-.1-.1.1z" fill={primaryFill} /></svg>;
};

export default Dismiss28Regular;