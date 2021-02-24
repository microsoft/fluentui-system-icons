import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DockPanelRight20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 4c1.1-.02 2 .9 2 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h12zm1 2a1 1 0 00-1-1h-3v10h3a1 1 0 001-1V6zm-5 9V5H4a1 1 0 00-1 1v8a1 1 0 001 1h8z" fill={primaryFill} /></svg>;
};

export default DockPanelRight20Regular;