import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Code20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.97 3.68a.5.5 0 00-.94-.36l-5 13a.5.5 0 10.94.36l5-13z" fill={primaryFill} /><path d="M5.83 6.12c.2.18.23.5.05.7L3.16 10l2.72 3.17a.5.5 0 01-.76.66l-3-3.5a.5.5 0 010-.66l3-3.5a.5.5 0 01.7-.05z" fill={primaryFill} /><path d="M14.17 14.38a.5.5 0 01-.05-.7l2.72-3.18-2.72-3.17a.5.5 0 11.76-.66l3 3.5a.5.5 0 010 .66l-3 3.5a.5.5 0 01-.7.05z" fill={primaryFill} /></svg>;
};

export default Code20Regular;