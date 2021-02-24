import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EditOff20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l5.53 5.53-4.04 4.04-.12.13a2 2 0 00-.4.76l-1.1 4.06-.02.08a.5.5 0 00.63.53l4.06-1.1.16-.06a2 2 0 00.72-.46l4.04-4.04 5.54 5.53a.5.5 0 00.7-.7l-15-15zm12.76 6.17l-2.58 2.59-3.94-3.94 2.59-2.59 3.93 3.94zm-2.37-5.5a2.78 2.78 0 014.07 3.8l-.13.13-.86.86-3.94-3.93.86-.86z" fill={primaryFill} /></svg>;
};

export default EditOff20Filled;