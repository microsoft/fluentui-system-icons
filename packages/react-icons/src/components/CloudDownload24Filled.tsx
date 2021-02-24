import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudDownload24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.25 14h-1.51V8.72l-.01-.17v-.03a1.75 1.75 0 00-3.5.23l.01 5.25H6.01a4 4 0 11.33-7.99 6 6 0 0111.32 0h.07L18 6a4 4 0 110 8h-2.75z" fill={primaryFill} /><path d="M12.74 8.75v9.71l2.65-2.66.09-.07a.75.75 0 011.05 1.05l-.07.08-3.93 3.93-.08.07c-.26.2-.62.2-.89 0l-.1-.07-3.92-3.93-.07-.08a.75.75 0 010-.89l.07-.09.09-.07c.26-.2.62-.2.88 0l.1.07 2.63 2.64V8.75a.75.75 0 011.5-.1v.1z" fill={primaryFill} /></svg>;
};

export default CloudDownload24Filled;