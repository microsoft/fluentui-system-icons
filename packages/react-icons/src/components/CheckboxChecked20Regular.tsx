import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckboxChecked20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.85 7.85a.5.5 0 00-.7-.7L8.5 11.79l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l5-5z" fill={primaryFill} /><path d="M5.68 3A2.68 2.68 0 003 5.68v8.64C3 15.8 4.2 17 5.68 17h8.64C15.8 17 17 15.8 17 14.32V5.68C17 4.2 15.8 3 14.32 3H5.68zM4 5.68C4 4.75 4.75 4 5.68 4h8.64c.93 0 1.68.75 1.68 1.68v8.64c0 .93-.75 1.68-1.68 1.68H5.68C4.75 16 4 15.25 4 14.32V5.68z" fill={primaryFill} /></svg>;
};

export default CheckboxChecked20Regular;