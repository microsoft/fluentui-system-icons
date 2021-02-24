import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Shifts30Minutes24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 5.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-5.5 0a2 2 0 114 0 2 2 0 01-4 0z" fill={primaryFill} /><path d="M8.75 10c-1.24 0-2.25 1-2.25 2.25v.5a.75.75 0 001.5 0v-.5c0-.41.34-.75.75-.75h6.5c.41 0 .75.34.75.75v.5a.75.75 0 001.5 0v-.5c0-1.24-1-2.25-2.25-2.25h-6.5z" fill={primaryFill} /><path d="M6.5 17a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M5.5 21.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M10.11 16.53c-.27.06-.52.2-.67.33a.75.75 0 11-.92-1.19c.27-.2.71-.48 1.25-.6a2.33 2.33 0 011.88.32 2.27 2.27 0 01.62 3.03 2.1 2.1 0 01-.08 2.86c-.6.6-1.4.77-2.08.73a3.12 3.12 0 01-1.85-.7.75.75 0 01.99-1.12c.17.15.52.3.94.32.4.02.73-.09.94-.3a.6.6 0 00.12-.62c-.07-.2-.23-.34-.5-.34h-.5a.75.75 0 110-1.5h.5c.12 0 .17-.04.21-.08.05-.04.1-.14.13-.28.05-.3-.07-.61-.28-.75a.83.83 0 00-.7-.11z" fill={primaryFill} /><path d="M16.5 15a2.2 2.2 0 00-1.99 1.08c-.38.65-.51 1.5-.51 2.42 0 .92.13 1.77.51 2.42A2.2 2.2 0 0016.5 22a2.2 2.2 0 001.99-1.08c.38-.64.51-1.5.51-2.42 0-.93-.13-1.78-.51-2.42A2.2 2.2 0 0016.5 15zm-1 3.5c0-.83.12-1.35.3-1.64.13-.23.32-.36.7-.36.39 0 .57.13.7.35.18.3.3.81.3 1.65 0 .84-.12 1.36-.3 1.65-.13.22-.31.35-.7.35-.38 0-.57-.13-.7-.35-.18-.3-.3-.82-.3-1.65z" fill={primaryFill} /></svg>;
};

export default Shifts30Minutes24Regular;