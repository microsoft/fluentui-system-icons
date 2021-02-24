import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabInprivateAccount24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.86 6a3 3 0 013-3h12a3 3 0 013 3v4.2A3.99 3.99 0 0014 13c0 1.2.52 2.27 1.35 3h-.41c-.92 0-1.66.44-2.13.96-.47.5-.81 1.2-.81 1.98v.39c0 .6.13 1.16.37 1.67H5.86a3 3 0 01-3-3V6z" fill={primaryFill} /><path d="M18 10a3 3 0 102.24 5H18v-1h2.83a3 3 0 00.17-1h-3v-1h2.83a3 3 0 00-.6-1H18v-1z" fill={primaryFill} /><path d="M13.54 17.63c.33-.35.82-.63 1.4-.63h6.12c.58 0 1.07.28 1.4.63.1.12.2.24.27.37H18v1h5v.33c0 .23-.03.45-.08.67H18v1h4.47c-.25.37-.59.71-1 1H18v1c-2.96 0-5-1.71-5-3.67v-.39c0-.48.22-.96.54-1.3z" fill={primaryFill} /></svg>;
};

export default TabInprivateAccount24Filled;