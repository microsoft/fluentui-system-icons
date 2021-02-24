import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhonePageHeader24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 6v13.75c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V6h12zm-2.25-4C16.99 2 18 3 18 4.25V5H6v-.75C6 3.01 7 2 8.25 2h7.5z" fill={primaryFill} /></svg>;
};

export default PhonePageHeader24Filled;