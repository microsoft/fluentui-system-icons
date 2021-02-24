import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CompassNorthwest28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.7 8.08c-1.01-.39-2 .6-1.62 1.62l1.92 5a5.75 5.75 0 003.3 3.3l5 1.92c1.01.39 2-.6 1.62-1.62l-1.92-5a5.75 5.75 0 00-3.3-3.3l-5-1.92zm1.7 6.07L9.68 9.68l4.47 1.72a4.25 4.25 0 012.45 2.45l1.72 4.47-4.47-1.72a4.25 4.25 0 01-2.45-2.45z" fill={primaryFill} /><path d="M14 2a12 12 0 100 24 12 12 0 000-24zm-1 1.55v.7a.75.75 0 001.5 0v-.74A10.5 10.5 0 0124.45 13h-.7a.75.75 0 000 1.5h.74a10.5 10.5 0 01-9.99 9.99v-.74a.75.75 0 00-1.5 0v.7a10.5 10.5 0 01-9.49-9.95h.74a.75.75 0 000-1.5h-.7C4.02 8 8 4.02 13 3.55z" fill={primaryFill} /></svg>;
};

export default CompassNorthwest28Regular;