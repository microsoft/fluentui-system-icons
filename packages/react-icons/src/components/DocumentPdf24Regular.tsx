import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentPdf24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 13a.5.5 0 00-.5.5v3a.5.5 0 001 0V16h.5a1.5 1.5 0 000-3h-1zm1 2H8v-1h.5a.5.5 0 110 1z" fill={primaryFill} /><path d="M15 13.5c0-.27.22-.5.5-.5H17a.5.5 0 110 1h-1v1h1a.5.5 0 010 1h-1v.5a.5.5 0 01-1 0v-3z" fill={primaryFill} /><path d="M11.5 13a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h.5a2 2 0 000-4h-.5zm.5 3v-2a1 1 0 010 2z" fill={primaryFill} /><path d="M20 20v-1.16c.6-.29 1-.89 1-1.59v-4.5c0-.7-.4-1.3-1-1.58V9.83a2 2 0 00-.59-1.42L13.6 2.6a.5.5 0 00-.05-.04 2.07 2.07 0 00-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-2 2v7.17c-.6.28-1 .88-1 1.58v4.5c0 .7.4 1.3 1 1.59V20c0 1.1.9 2 2 2h12a2 2 0 002-2zm-2 .5H6a.5.5 0 01-.5-.5v-1h13v1a.5.5 0 01-.5.5zm.5-10.5v1h-13V4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5zm-1.12-1.5H14a.5.5 0 01-.5-.5V4.62l3.88 3.88zm-12.63 4h14.5c.14 0 .25.11.25.25v4.5c0 .14-.11.25-.25.25H4.75a.25.25 0 01-.25-.25v-4.5c0-.14.11-.25.25-.25z" fill={primaryFill} /></svg>;
};

export default DocumentPdf24Regular;