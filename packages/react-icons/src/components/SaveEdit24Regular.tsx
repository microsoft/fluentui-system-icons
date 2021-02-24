import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SaveEdit24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21H10c0-.2.01-.4.06-.6l.23-.9H7.5v-5.25c0-.41.34-.75.75-.75h6.6l1.44-1.44a2.26 2.26 0 00-.54-.06h-7.5C7.01 12 6 13 6 14.25v5.25h-.25c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25H7v2.75C7 8.49 8 9.5 9.25 9.5h4.5c1.24 0 2.25-1 2.25-2.25V4.52c.36.06.7.23.95.5L19 7.04c.33.33.51.77.51 1.24V10l.21-.01c.44 0 .88.09 1.29.26V8.3c0-.87-.34-1.7-.95-2.3L18 3.95a3.25 3.25 0 00-2.3-.95H5.75zM8.5 7.25V4.5h6v2.75c0 .41-.34.75-.75.75h-4.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M19.72 11c-.6 0-1.18.22-1.62.67l-5.9 5.9c-.35.35-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9A2.29 2.29 0 0019.72 11z" fill={primaryFill} /></svg>;
};

export default SaveEdit24Regular;