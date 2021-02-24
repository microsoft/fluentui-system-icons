import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentBriefcase24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4.25c0-.41.34-.75.75-.75H12V8c0 1.1.9 2 2 2h4.5v9.75c0 .41-.34.75-.75.75H14V22h3.75c1.24 0 2.25-1 2.25-2.25V9.66c0-.46-.18-.9-.51-1.23L13.57 2.5A1.75 1.75 0 0012.34 2H6.25C5.01 2 4 3 4 4.25v7.34c.16-.06.32-.09.5-.09h1V4.25zM17.44 8.5H14a.5.5 0 01-.5-.5V4.56l3.94 3.94z" fill={primaryFill} /><path d="M3.75 13.25c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75V15h.5c1.24 0 2.25 1 2.25 2.25v3.5c0 1.24-1 2.25-2.25 2.25h-7.5C2.01 23 1 22 1 20.75v-3.5C1 16.01 2 15 3.25 15h.5v-1.75zm5 .75h-3.5v1h3.5v-1zm-5.5 2.5a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75h-7.5z" fill={primaryFill} /></svg>;
};

export default DocumentBriefcase24Regular;