import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabDesktopArrowClockwise24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3A2.75 2.75 0 003 5.75v5.35a6.98 6.98 0 017.77-1.53 1.75 1.75 0 013.23.93v1.9a6.97 6.97 0 01-1.1 8.6h5.35A2.75 2.75 0 0021 18.25V8h-7.75C12.01 8 11 7 11 5.75V3H5.75z" fill={primaryFill} /><path d="M12.5 3v2.75c0 .41.34.75.75.75H21v-.75A2.75 2.75 0 0018.25 3H12.5z" fill={primaryFill} /><path d="M13 13.25c0 .41-.34.75-.75.75H9.5a.75.75 0 010-1.5h1.33l-.02-.01A4.5 4.5 0 1012.5 16a.75.75 0 011.5 0 6 6 0 11-2.5-4.87v-.63a.75.75 0 01.75-.75c.41 0 .75.34.75.75v2.75z" fill={primaryFill} /></svg>;
};

export default TabDesktopArrowClockwise24Filled;