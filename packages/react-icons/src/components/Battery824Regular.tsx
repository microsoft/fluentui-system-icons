import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Battery824Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 6a3 3 0 013 3v1h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v1a3 3 0 01-3 3H5a3 3 0 01-3-3V9a3 3 0 013-3h12zm0 1.5H5c-.78 0-1.42.6-1.5 1.36V15c0 .78.6 1.42 1.36 1.5H17c.78 0 1.42-.6 1.5-1.36V9c0-.78-.6-1.42-1.36-1.5H17zM6 9h8a1 1 0 011 .88V14a1 1 0 01-.88 1H6a1 1 0 01-1-.88V10a1 1 0 01.88-1H14 6z" fill={primaryFill} /></svg>;
};

export default Battery824Regular;