import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChannelAdd48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 10.5a4 4 0 00-1.31.22A6.25 6.25 0 0112.25 6h23.5C39.2 6 42 8.8 42 12.25v11.8c-.78-.5-1.62-.92-2.5-1.25V12.25a3.75 3.75 0 00-3.75-3.75h-23.5c-1.53 0-2.84.91-3.43 2.22a4 4 0 00-1.32-.22z" fill={primaryFill} /><path d="M22.8 39.5c.33.88.74 1.72 1.24 2.5H12.25A6.25 6.25 0 016 35.75V18.21a3.99 3.99 0 002.5.16v17.38a3.75 3.75 0 003.75 3.75H22.8z" fill={primaryFill} /><path d="M23.74 28.5c.52-.9 1.16-1.75 1.88-2.5h-8.37a1.25 1.25 0 100 2.5h6.49z" fill={primaryFill} /><path d="M7.5 12A2.49 2.49 0 005 14.5 2.5 2.5 0 107.5 12z" fill={primaryFill} /><path d="M17.25 19a1.25 1.25 0 100 2.5h13.5a1.25 1.25 0 100-2.5h-13.5z" fill={primaryFill} /><path d="M46 35a11 11 0 11-22 0 11 11 0 0122 0zm-10-7a1 1 0 10-2 0v6h-6a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6v-6z" fill={primaryFill} /></svg>;
};

export default ChannelAdd48Regular;