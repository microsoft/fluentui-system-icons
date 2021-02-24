import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DualScreenMirror24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.17 9.41a.75.75 0 00-1.34 0l-2.25 4.5a.75.75 0 00.67 1.09h4.5a.75.75 0 00.67-1.09l-2.25-4.5zm-1.7 4.09l1.03-2.07 1.04 2.07h-2.08z" fill={primaryFill} /><path d="M7.5 9c.28 0 .54.16.67.41l2.25 4.5A.75.75 0 019.75 15h-4.5a.75.75 0 01-.67-1.09l2.25-4.5A.75.75 0 017.5 9zm0 2.43L6.46 13.5h2.08L7.5 11.43z" fill={primaryFill} /><path d="M12.75 4h7.5C21.22 4 22 4.8 22 5.75v12.5c0 .96-.78 1.75-1.75 1.75H3.75c-.96 0-1.74-.79-1.74-1.75V5.75C2 4.78 2.79 4 3.76 4h9zm7.5 1.5h-7.5v13h7.5c.14 0 .25-.11.25-.25V5.75a.25.25 0 00-.25-.25zm-9 0h-7.5a.25.25 0 00-.24.25v12.5c0 .13.1.25.25.25h7.5v-13z" fill={primaryFill} /></svg>;
};

export default DualScreenMirror24Regular;