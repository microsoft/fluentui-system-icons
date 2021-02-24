import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PointScan24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 2c.38 0 .7.28.74.65l.01.1v4.8A6.25 6.25 0 0116.46 13h4.79a.75.75 0 01.1 1.5H16.45A6.25 6.25 0 0111 19.96v1.29a.75.75 0 01-1.5.1V19.95a6.25 6.25 0 01-5.46-5.45H2.75a.75.75 0 01-.1-1.5H4.05A6.25 6.25 0 019.5 7.54V2.75c0-.41.34-.75.75-.75zM9.5 14.5H5.56a4.75 4.75 0 003.94 3.94V14.5zm5.44 0H11v3.94a4.75 4.75 0 003.94-3.94zM9.5 9.06A4.75 4.75 0 005.56 13H9.5V9.06zm1.5 0V13h3.94a4.75 4.75 0 00-3.72-3.9L11 9.06z" fill={primaryFill} /></svg>;
};

export default PointScan24Regular;