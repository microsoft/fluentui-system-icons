import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleCommunity28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 18c.97 0 1.75.78 1.75 1.75v2.11c-.32 2.13-2.23 3.15-5.43 3.15-3.2 0-5.14-1.01-5.56-3.11l-.01-.15v-2c0-.97.78-1.75 1.75-1.75h7.5zm.5-6h6c.97 0 1.75.78 1.75 1.75v2.11c-.32 2.13-2.23 3.15-5.43 3.15h-.17a2.75 2.75 0 00-2.47-2l-.18-.01h-.92a4.5 4.5 0 001.41-5zm-14.5 0h6A4.5 4.5 0 0011 16.85l.17.15h-.92c-1.26 0-2.33.85-2.65 2h-.03c-3.2 0-5.14-1-5.56-3.1L2 15.75v-2c0-.97.78-1.75 1.75-1.75zM14 10a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm6.5-6a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm-13 0a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill={primaryFill} /></svg>;
};

export default PeopleCommunity28Filled;