import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShareScreenStart28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.25C2 6.01 3 5 4.25 5h19.5C24.99 5 26 6 26 7.25v13.5c0 1.24-1 2.25-2.25 2.25H4.25C3.01 23 2 22 2 20.75V7.25zm2.25-.75a.75.75 0 00-.75.75v13.5c0 .41.34.75.75.75h19.5c.41 0 .75-.34.75-.75V7.25a.75.75 0 00-.75-.75H4.25z" fill={primaryFill} /><path d="M14 8.62c.2 0 .39.08.53.22l3.25 3.26a.75.75 0 01-1.06 1.06l-1.97-1.98v7.45a.75.75 0 11-1.5 0v-7.45l-1.97 1.98a.75.75 0 11-1.06-1.06l3.25-3.26a.75.75 0 01.53-.22z" fill={primaryFill} /></svg>;
};

export default ShareScreenStart28Regular;