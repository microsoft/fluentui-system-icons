import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentEdit24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3.5a.75.75 0 00-.75.75v15.5c0 .41.34.75.75.75h3.78c-.1.55 0 1.07.27 1.5H6.25C5.01 22 4 21 4 19.75V4.25C4 3.01 5 2 6.25 2h6.09c.46 0 .9.18 1.23.51l5.92 5.92c.33.32.51.77.51 1.23V10h-6a2 2 0 01-2-2V3.5H6.25zm7.25 1.06V8c0 .28.22.5.5.5h3.44L13.5 4.56z" fill={primaryFill} /><path d="M19.71 11a2.28 2.28 0 011.62 3.9l-5.9 5.9c-.35.35-.78.6-1.25.71l-1.83.46c-.8.2-1.52-.52-1.32-1.32l.46-1.83c.12-.47.36-.9.7-1.25l5.9-5.9a2.28 2.28 0 011.62-.67z" fill={primaryFill} /></svg>;
};

export default DocumentEdit24Regular;