import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WindowDevTools24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.05c-.62.63-1 1.5-1 2.45v11A3.5 3.5 0 005.5 20h7.01c.06-.25.15-.5.28-.74l.73-1.26H5.5A1.5 1.5 0 014 16.5V7h14v1.25a4.52 4.52 0 012-.24V5.5c0-.95-.38-1.82-1-2.45V3h-.05c-.63-.62-1.5-1-2.45-1h-11c-.95 0-1.82.38-2.45 1H3v.05z" fill={primaryFill} /><path d="M19.21 9a3.5 3.5 0 01.96.04l-1.65 2.86a1.17 1.17 0 102.02 1.17l1.65-2.86a3.5 3.5 0 01-2.97 5.76l-3.03 5.25a1.46 1.46 0 01-2.53-1.46l3.02-5.24A3.5 3.5 0 0119.21 9z" fill={primaryFill} /><path d="M15.17 13.57a4.5 4.5 0 01-.02-2.1l-2.3-2.3a.5.5 0 10-.7.71l2.64 2.65-2.64 2.65a.5.5 0 00.7.7l2.32-2.3z" fill={primaryFill} /><path d="M9.86 9.18c.2.2.2.51 0 .7L7.2 12.54l2.65 2.65a.5.5 0 11-.71.7l-3-3a.5.5 0 010-.7l3-3c.2-.2.51-.2.7 0z" fill={primaryFill} /></svg>;
};

export default WindowDevTools24Filled;