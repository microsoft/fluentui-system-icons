import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DockPanelRight16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5c0-1.1.9-2 2-2h8zm1 2a1 1 0 00-1-1h-2v8h2a1 1 0 001-1V5zm-4 7V4H4a1 1 0 00-1 1v6a1 1 0 001 1h5z" fill={primaryFill} /></svg>;
};

export default DockPanelRight16Regular;