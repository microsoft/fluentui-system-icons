import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const KeyboardShift16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.4 2.2a.5.5 0 00-.8 0L3 8H5.5a.5.5 0 01.5.5V13h4.02V8.5c0-.28.23-.5.5-.5H13L8.4 2.2zm-1.58-.63c.6-.76 1.76-.76 2.36 0l4.6 5.8A1 1 0 0113 9h-1.97v4A1 1 0 0110 14H5.99a1 1 0 01-1-1V9H3a1 1 0 01-.8-1.63l4.6-5.8z" fill={primaryFill} /></svg>;
};

export default KeyboardShift16Regular;