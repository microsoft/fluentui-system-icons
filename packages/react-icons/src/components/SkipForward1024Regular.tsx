import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SkipForward1024Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 2.5c.41 0 .75.34.75.75v5.5c0 .41-.34.75-.75.75h-5.5a.75.75 0 010-1.5h3.9a8.33 8.33 0 00-4.12-3.06A9.69 9.69 0 004.4 9.1a.75.75 0 11-1.32-.72 11.18 11.18 0 0112.88-4.88 9.61 9.61 0 014.53 3.14v-3.4c0-.41.34-.75.75-.75zM16 11c-1.32 0-2.25.64-2.8 1.63-.52.93-.7 2.15-.7 3.37 0 1.22.18 2.44.7 3.37.55 1 1.48 1.63 2.8 1.63 1.32 0 2.25-.64 2.8-1.63.53-.93.7-2.15.7-3.37 0-1.22-.17-2.44-.7-3.37A3.05 3.05 0 0016 11zm-2 5c0-1.12.17-2.03.5-2.64.31-.55.76-.86 1.5-.86s1.19.31 1.5.86c.33.6.5 1.52.5 2.64a5.6 5.6 0 01-.5 2.64c-.31.55-.76.86-1.5.86s-1.19-.31-1.5-.86A5.6 5.6 0 0114 16zm-4.5-4.25a.75.75 0 00-1.39-.4v.01a3.44 3.44 0 01-.15.22 6.88 6.88 0 01-2.1 2.03.75.75 0 10.78 1.28c.52-.31.98-.69 1.36-1.06v6.42a.75.75 0 001.5 0v-8.5z" fill={primaryFill} /></svg>;
};

export default SkipForward1024Regular;