import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderOpen24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.25C2 5 3 4 4.25 4h3.96c.52 0 1.03.18 1.43.52l2.39 1.98h5.72c1.24 0 2.25 1 2.25 2.25v.75H6.42c-1.03 0-1.93.7-2.18 1.7l-1.92 7.7c.04-.16 0 .01 0 0-.2-.33-.32-.73-.32-1.15V6.25z" fill={primaryFill} /><path d="M3.74 19.38a.5.5 0 00.49.62h14.24c.8 0 1.5-.55 1.7-1.33l1.76-7.05a.5.5 0 00-.48-.62H6.42a.75.75 0 00-.73.57l-1.95 7.8z" fill={primaryFill} /></svg>;
};

export default FolderOpen24Filled;