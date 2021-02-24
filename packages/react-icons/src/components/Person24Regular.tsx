import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Person24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 14C19 14 20 15 20 16.25v.57c0 .9-.32 1.76-.9 2.44C17.53 21.1 15.15 22 12 22c-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 01-.9-2.43v-.58C4 15 5.01 14 6.25 14h11.5zm0 1.5H6.25a.75.75 0 00-.75.75v.58c0 .53.2 1.05.54 1.46C7.3 19.75 9.26 20.5 12 20.5c2.74 0 4.7-.75 5.96-2.21.35-.41.54-.93.54-1.47v-.57a.75.75 0 00-.75-.75zM12 2a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill={primaryFill} /></svg>;
};

export default Person24Regular;