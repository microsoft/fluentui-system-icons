import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PageFit24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 4A3.75 3.75 0 0122 7.75v8.5A3.75 3.75 0 0118.25 20H5.75A3.75 3.75 0 012 16.25v-8.5A3.75 3.75 0 015.75 4h12.5zm0 1.5H5.75c-1.24 0-2.25 1-2.25 2.25v8.5c0 1.24 1 2.25 2.25 2.25h12.5c1.24 0 2.25-1 2.25-2.25v-8.5c0-1.24-1-2.25-2.25-2.25zm0 7.5c.41 0 .75.34.75.75V15a2 2 0 01-2 2h-1.25a.75.75 0 010-1.5H17a.5.5 0 00.5-.5v-1.25c0-.41.34-.75.75-.75zm-12.5 0c.41 0 .75.34.75.75V15c0 .28.22.5.5.5h1.25a.75.75 0 010 1.5H7a2 2 0 01-2-2v-1.25c0-.41.34-.75.75-.75zM7 7h1.25a.75.75 0 01.1 1.5H7a.5.5 0 00-.5.41v1.34a.75.75 0 01-1.5.1V9a2 2 0 011.85-2H7zm10 0a2 2 0 012 2v1.25a.75.75 0 01-1.5 0V9a.5.5 0 00-.5-.5h-1.25a.75.75 0 010-1.5H17z" fill={primaryFill} /></svg>;
};

export default PageFit24Regular;