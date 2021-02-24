import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PaneOpen24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 12a.5.5 0 01-.5.5H12.7l1.65 1.65a.5.5 0 01-.71.7l-2.5-2.5a.5.5 0 010-.7l2.5-2.5a.5.5 0 01.7.7l-1.64 1.65h4.79c.27 0 .5.22.5.5z" fill={primaryFill} /><path d="M4.75 4A2.75 2.75 0 002 6.75v10.5A2.75 2.75 0 004.75 20h14.5A2.75 2.75 0 0022 17.25V6.75A2.75 2.75 0 0019.25 4H4.75zM9 18.5v-13h10.25c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H9z" fill={primaryFill} /></svg>;
};

export default PaneOpen24Filled;