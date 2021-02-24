import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardTextRtl24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 9a.75.75 0 000 1.5h8A.75.75 0 0016 9H8zm3.25 4.75c0-.41.34-.75.75-.75h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75zM10 17a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6zm5.99-13a2.25 2.25 0 00-2.24-2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76zm0 .1l.01.15V4.1zm-5.74 2.4h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H6.25a.75.75 0 01-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1zm0-3h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
};

export default ClipboardTextRtl24Regular;