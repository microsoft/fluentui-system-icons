import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LinkEdit24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 5.75A.75.75 0 009.25 5h-2.5A5 5 0 007 15h2.36a.75.75 0 00-.11-1.5H6.8a3.5 3.5 0 01.2-7h2.36a.75.75 0 00.64-.75zM22 10a5 5 0 00-5-5h-2.36a.75.75 0 00.1 1.5h2.46a3.5 3.5 0 013.3 3.6c.51.12 1 .37 1.43.75.04-.27.07-.56.07-.85zm-5-.75H6.9a.75.75 0 00.1 1.5h10.1a.75.75 0 00-.1-1.5zm1.1 2.42l-5.9 5.9c-.35.34-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
};

export default LinkEdit24Regular;