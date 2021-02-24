import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cloud24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.09 10.75a5.75 5.75 0 0111.32 0h.09a4 4 0 010 8H6a4 4 0 010-8h.09zm5.66-3.25a4.25 4.25 0 00-4.24 4.04.75.75 0 01-.75.71H6a2.5 2.5 0 000 5h11.5a2.5 2.5 0 000-5h-.76a.75.75 0 01-.75-.71 4.25 4.25 0 00-4.24-4.04z" fill={primaryFill} /></svg>;
};

export default Cloud24Regular;