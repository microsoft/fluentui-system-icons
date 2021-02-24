import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSyncCircle16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm0 1a5 5 0 100 10A5 5 0 008 3zm1 5h1.5a.5.5 0 01.5.41V10a.5.5 0 01-1 .1V9.75a2.67 2.67 0 01-3.92.09.5.5 0 11.72-.7A1.66 1.66 0 009.33 9H9a.5.5 0 01-.09-1h1.59H9zM8 5.33c.74 0 1.43.3 1.93.83a.5.5 0 11-.73.69A1.66 1.66 0 006.67 7H7a.5.5 0 01.09 1H5.5a.5.5 0 01-.5-.41V6a.5.5 0 011-.09v.33c.5-.56 1.21-.9 2-.9z" fill={primaryFill} /></svg>;
};

export default ArrowSyncCircle16Regular;