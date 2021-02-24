import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitHorizontal28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 13a.75.75 0 000 1.5h22.5a.75.75 0 000-1.5H2.75zM24 4.75A2.75 2.75 0 0021.25 2H6.75A2.75 2.75 0 004 4.75V12h1.5V4.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25V12H24V4.75zm-18.5 18V15.5H4v7.25a2.75 2.75 0 002.75 2.75h14.5A2.75 2.75 0 0024 22.75V15.5h-1.5v7.25c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
};

export default SplitHorizontal28Regular;