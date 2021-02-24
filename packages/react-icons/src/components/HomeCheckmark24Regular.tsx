import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HomeCheckmark24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.54 2.53c.83-.7 2.06-.7 2.9 0l6.76 5.7c.5.43.8 1.06.8 1.72v9.8c0 .97-.78 1.75-1.75 1.75H4.75c-.97 0-1.75-.78-1.75-1.75v-9.8c0-.66.3-1.3.8-1.72l6.74-5.7zm1.93 1.15a.75.75 0 00-.96 0l-6.74 5.7a.75.75 0 00-.27.57v9.8c0 .14.11.25.25.25h14.5c.14 0 .25-.11.25-.25v-9.8c0-.22-.1-.43-.27-.57l-6.76-5.7z" fill={primaryFill} /><path d="M15.78 10.72c.3.29.3.76 0 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06l1.47 1.47 3.97-3.97c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
};

export default HomeCheckmark24Regular;