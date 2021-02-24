import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlagOff16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.3 10l4.85 4.85a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L3 3.71v9.79a.5.5 0 001 0V10h5.3zm-1-1H4V4.7L8.3 9zm3.73 0h-.9l1 1H13a.5.5 0 00.4-.8L11.12 6l2.3-3.2A.5.5 0 0013 2H4.12l1 1h6.9L10.1 5.7a.5.5 0 000 .6L12.03 9z" fill={primaryFill} /></svg>;
};

export default FlagOff16Regular;