import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Money16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 7a2 2 0 11-4 0 2 2 0 014 0zM8 7a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M1 4.25C1 3.56 1.56 3 2.25 3h9.5c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25h-9.5C1.56 11 1 10.44 1 9.75v-5.5zM2.25 4a.25.25 0 00-.25.25V5h.5a.5.5 0 00.5-.5V4h-.75zM2 9.75c0 .14.11.25.25.25H3v-.5a.5.5 0 00-.5-.5H2v.75zm2-.25v.5h6v-.5c0-.83.67-1.5 1.5-1.5h.5V6h-.5A1.5 1.5 0 0110 4.5V4H4v.5C4 5.33 3.33 6 2.5 6H2v2h.5C3.33 8 4 8.67 4 9.5zm7 .5h.75c.14 0 .25-.11.25-.25V9h-.5a.5.5 0 00-.5.5v.5zm1-5v-.75a.25.25 0 00-.25-.25H11v.5c0 .28.22.5.5.5h.5z" fill={primaryFill} /><path d="M4.5 13a1.5 1.5 0 01-1.43-1.04c.14.03.28.04.43.04h8.25C12.99 12 14 11 14 9.75V5.09c.58.2 1 .76 1 1.41v3.25c0 1.8-1.46 3.25-3.25 3.25H4.5z" fill={primaryFill} /></svg>;
};

export default Money16Regular;