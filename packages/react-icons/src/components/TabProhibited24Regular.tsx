import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabProhibited24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h6.27c-.3-.46-.53-.97-.7-1.5H5.74c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v5.56c.53.18 1.04.42 1.5.71V5.75A2.75 2.75 0 0018.25 3H5.75z" fill={primaryFill} /><path d="M17.5 23a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm-3.3-3.25a4 4 0 015.56-5.56l-5.57 5.56zm1.05 1.06l5.56-5.56a4 4 0 01-5.56 5.56z" fill={primaryFill} /></svg>;
};

export default TabProhibited24Regular;