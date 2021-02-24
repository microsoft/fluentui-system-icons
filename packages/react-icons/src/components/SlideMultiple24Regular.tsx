import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideMultiple24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 17H4.25C3.01 17 2 16 2 14.75v-9A2.75 2.75 0 014.75 3h12C17.99 3 19 4 19 5.25V6.5h.75c1.24 0 2.25 1 2.25 2.25v9.5c0 1.24-1 2.25-2.25 2.25h-12c-1.24 0-2.25-1-2.25-2.25V17zm-2-11.25v9c0 .41.34.75.75.75H5.5V8.75c0-1.24 1-2.25 2.25-2.25h9.75V5.25a.75.75 0 00-.75-.75h-12c-.69 0-1.25.56-1.25 1.25zm3.5 3v9.5c0 .41.34.75.75.75h12c.41 0 .75-.34.75-.75v-9.5a.75.75 0 00-.75-.75h-12a.75.75 0 00-.75.75z" fill={primaryFill} /></svg>;
};

export default SlideMultiple24Regular;