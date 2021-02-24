import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cursor20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3.06a1 1 0 011.64-.77l11 9.06a1 1 0 01-.63 1.77h-5.6c-.43 0-.85.2-1.13.52l-3.52 4.07A1 1 0 015 17.06v-14zm12 9.06L6 3.06v14l3.52-4.07a2.5 2.5 0 011.9-.87H17z" fill={primaryFill} /></svg>;
};

export default Cursor20Regular;