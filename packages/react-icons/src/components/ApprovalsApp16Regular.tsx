import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ApprovalsApp16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.85.15a.5.5 0 10-.7.7L8.3 2A6.5 6.5 0 1015 8.5v-.04a.47.47 0 00-.48-.46h-.04a.5.5 0 00-.48.5A5.5 5.5 0 118.29 3L7.15 4.15a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2zm4 6c.2.2.2.5 0 .7l-3 3a.5.5 0 01-.7 0l-1.5-1.5a.5.5 0 11.7-.7L8.5 8.79l2.65-2.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
};

export default ApprovalsApp16Regular;