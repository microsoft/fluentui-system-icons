import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DesktopMac16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h8a2 2 0 012 2v6a2 2 0 01-2 2H9.5v.5c0 .28.22.5.5.5h.5a.5.5 0 010 1H5a.5.5 0 010-1h.5a.5.5 0 00.5-.5V12H4a2 2 0 01-2-2V4zm1 6a1 1 0 001 1h8a1 1 0 001-1H3zm10-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v5h10zm-4.5 3.5V12H7v.5c0 .18-.03.34-.09.5H8.6a1.5 1.5 0 01-.09-.5z" fill={primaryFill} /></svg>;
};

export default DesktopMac16Regular;