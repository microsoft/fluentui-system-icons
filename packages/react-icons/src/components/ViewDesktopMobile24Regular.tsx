import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ViewDesktopMobile24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5zm0 1.5h-7.5a.75.75 0 00-.75.75v15.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75V4.25a.75.75 0 00-.75-.75zm-2.5 14a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5h2.5zM14.5 9a.5.5 0 01.5.4v6.1a.5.5 0 01-.41.5H9.5a.5.5 0 01-.5-.4V9.5a.5.5 0 01.41-.5h5.09zm0-4a.5.5 0 01.5.41V7.5a.5.5 0 01-.41.5H9.5a.5.5 0 01-.5-.4V5.5a.5.5 0 01.41-.5h5.09z" fill={primaryFill} /></svg>;
};

export default ViewDesktopMobile24Regular;