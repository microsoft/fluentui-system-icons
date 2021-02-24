import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideMultipleArrowRight24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 17h-.25C3.01 17 2 16 2 14.75v-9A2.75 2.75 0 014.75 3h12C17.99 3 19 4 19 5.25v.25h-1.5v-.25a.75.75 0 00-.75-.75h-12c-.69 0-1.25.56-1.25 1.25v9c0 .41.34.75.75.75h.25V17z" fill={primaryFill} /><path d="M7.75 6.5c-1.24 0-2.25 1-2.25 2.25v9.5c0 1.24 1 2.25 2.25 2.25h3.98a6.46 6.46 0 01-.56-1.5H7.75a.75.75 0 01-.75-.75v-9.5c0-.41.34-.75.75-.75h12c.41 0 .75.34.75.75v2.98c.55.29 1.06.65 1.5 1.08V8.75c0-1.24-1-2.25-2.25-2.25h-12z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5-.5a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L19.29 17H14.5z" fill={primaryFill} /></svg>;
};

export default SlideMultipleArrowRight24Regular;