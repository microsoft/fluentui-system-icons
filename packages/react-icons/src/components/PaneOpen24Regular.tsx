import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PaneOpen24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 12a.5.5 0 00-.5-.5H12.7l1.65-1.65a.5.5 0 00-.71-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7l-1.64-1.65h4.79a.5.5 0 00.5-.5z" fill={primaryFill} /><path d="M4.75 20A2.75 2.75 0 012 17.25V6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75zM3.5 17.25c0 .7.56 1.25 1.25 1.25H8v-13H4.75c-.69 0-1.25.56-1.25 1.25v10.5zm6-11.75v13h9.75c.69 0 1.25-.56 1.25-1.25V6.75c0-.7-.56-1.25-1.25-1.25H9.5z" fill={primaryFill} /></svg>;
};

export default PaneOpen24Regular;