import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Clipboard16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 13.5v-10C3 2.67 3.67 2 4.5 2h.59zM6.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3zM5.09 3H4.5a.5.5 0 00-.5.5v10c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1z" fill={primaryFill} /></svg>;
};

export default Clipboard16Regular;