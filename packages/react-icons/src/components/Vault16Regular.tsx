import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Vault16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M11.5 8c0 .23-.05.45-.15.65l.5.5a.5.5 0 01-.7.7l-.5-.5a1.5 1.5 0 01-1.3 0l-.5.5a.5.5 0 01-.7-.7l.5-.5a1.5 1.5 0 010-1.3l-.5-.5a.5.5 0 11.7-.7l.5.5a1.5 1.5 0 011.3 0l.5-.5a.5.5 0 01.7.7l-.5.5c.1.2.15.42.15.65zm-1 0a.5.5 0 10-1 0 .5.5 0 001 0z" fill={primaryFill} /><path d="M1 5.5A2.5 2.5 0 013.5 3h9A2.5 2.5 0 0115 5.5v5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 10.5v-5zM3.5 4C2.67 4 2 4.67 2 5.5v5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-9z" fill={primaryFill} /></svg>;
};

export default Vault16Regular;