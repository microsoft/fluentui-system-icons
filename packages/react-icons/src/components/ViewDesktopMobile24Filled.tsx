import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ViewDesktopMobile24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5zm-2.5 16h-2.5a.75.75 0 00-.1 1.5h2.6a.75.75 0 000-1.5zm1.25-9h-5a.5.5 0 00-.5.5v6c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5zm0-4h-5a.5.5 0 00-.5.5v2c0 .27.22.5.5.5h5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
};

export default ViewDesktopMobile24Filled;