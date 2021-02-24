import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Guitar20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 3.78l1.11-1.12c.23-.22.6-.22.83 0l.9.9c.22.23.22.6 0 .83l-1.12 1.12-1.73-1.73zm-.72.71l-2.53 2.53-.13-.13a2.13 2.13 0 00-3.4.55l-.34.68a.6.6 0 01-.66.32h-.06a3.72 3.72 0 00-3.7 1.4 4.8 4.8 0 00.44 6.27l.49.49a4.8 4.8 0 006.26.44 3.72 3.72 0 001.42-3.7l-.01-.06a.6.6 0 01.32-.66l.68-.34a2.13 2.13 0 00.55-3.4l-.13-.13 2.53-2.53-1.73-1.73zm-5.41 7.14a1.25 1.25 0 111.76-1.76 1.25 1.25 0 01-1.76 1.76z" fill={primaryFill} /></svg>;
};

export default Guitar20Filled;