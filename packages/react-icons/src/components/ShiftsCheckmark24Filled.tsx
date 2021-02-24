import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShiftsCheckmark24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v5.77a6.47 6.47 0 018 .8.8.8 0 010-.07v-6a.75.75 0 011.5 0V12h3.75a.75.75 0 010 1.5h-4.5l-.14-.01a6.47 6.47 0 01.37 7.51h5.77c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25z" fill={primaryFill} /><path d="M12 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-3.15-1.85a.5.5 0 00-.7 0L5.5 18.29l-.9-.9a.5.5 0 00-.7.71l1.25 1.25c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
};

export default ShiftsCheckmark24Filled;