import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudDownload24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.99 8c.38 0 .7.28.74.65l.01.1v9.71l2.65-2.66.09-.07a.75.75 0 011.05 1.05l-.07.08-3.93 3.93-.08.07c-.26.2-.62.2-.89 0l-.09-.07-3.93-3.93-.07-.08a.75.75 0 010-.89l.07-.09.09-.07c.26-.2.62-.2.88 0l.1.07 2.63 2.64V8.75c0-.41.34-.75.75-.75zm-.24-6a6 6 0 015.69 4.09h.1a3.96 3.96 0 010 7.91h-2.8a.75.75 0 010-1.5h2.8a2.46 2.46 0 10-.5-4.87.75.75 0 01-.86-.48l-.03-.1-.05-.2a4.5 4.5 0 00-8.7 0l-.05.18v.02a.75.75 0 01-.4.52l-.1.04-.05.01-.06.02h-.17l-.1-.01a2.46 2.46 0 10-.66 4.87H8.75a.75.75 0 01.1 1.5h-2.9a3.96 3.96 0 010-7.92h.1A6 6 0 0111.75 2z" fill={primaryFill} /></svg>;
};

export default CloudDownload24Regular;