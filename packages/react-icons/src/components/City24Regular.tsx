import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const City24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2c.41 0 .75.33.75.75V4h2c.97 0 1.75.78 1.75 1.75V11h2.25c.97 0 1.75.78 1.75 1.75v7.5c0 .97-.78 1.75-1.75 1.75H5.25c-.97 0-1.75-.78-1.75-1.75v-8.43c0-.62.33-1.2.86-1.5L7.5 8.45V5.75C7.5 4.78 8.28 4 9.25 4h2V2.75c0-.42.34-.75.75-.75zM9 8.02c.81.12 1.5.8 1.5 1.73V20.5h3v-7.75c0-.88.65-1.61 1.5-1.73V5.75a.25.25 0 00-.25-.25h-5.5a.25.25 0 00-.25.25v2.27zm6.25 4.48a.25.25 0 00-.25.25v7.75h3.75c.14 0 .25-.11.25-.25v-7.5a.25.25 0 00-.25-.25h-3.5zM8.62 9.54l-3.5 2.07a.25.25 0 00-.12.21v8.43c0 .14.11.25.25.25H9V9.75c0-.2-.21-.31-.38-.21z" fill={primaryFill} /></svg>;
};

export default City24Regular;