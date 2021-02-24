import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderZip24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 6.5h-.18L9.65 9.98l-.16.12c-.32.22-.7.36-1.09.4H2v7.4A2.25 2.25 0 004.26 20H15.5v-3.5h-.25a.75.75 0 010-1.5h.25v-1.5h-.25a.75.75 0 010-1.5h.25v-1h-.75a.75.75 0 01-.75-.75V6.5z" fill={primaryFill} /><path d="M15.5 6.5H17v2.75h-1.5V6.5z" fill={primaryFill} /><path d="M18.5 6.5h1.25c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v9c0 1.2-.93 2.17-2.1 2.24l-.15.01H17v-2h.25a.75.75 0 000-1.5H17V15h.25a.75.75 0 000-1.5H17V11h.75c.41 0 .75-.34.75-.75V6.5z" fill={primaryFill} /><path d="M9.5 4.4c-.38-.26-.83-.4-1.3-.4H4.1A2.25 2.25 0 002 6.26V9H8.31c.1-.02.2-.06.3-.11l.08-.06 3.06-2.56-2.1-1.75-.16-.12z" fill={primaryFill} /></svg>;
};

export default FolderZip24Filled;