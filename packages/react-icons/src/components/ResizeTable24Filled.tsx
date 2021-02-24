import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ResizeTable24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 2h5a.75.75 0 010 1.5h-5c-.97 0-1.75.78-1.75 1.75v2.96c-.58.2-1.1.55-1.5.99V5.25C2 3.45 3.46 2 5.25 2z" fill={primaryFill} /><path d="M15.79 20.5c-.2.58-.55 1.1-.99 1.5h3.95c1.8 0 3.25-1.46 3.25-3.25v-5a.75.75 0 00-1.5 0v5c0 .97-.78 1.75-1.75 1.75h-2.96z" fill={primaryFill} /><path d="M21.25 11c.41 0 .75-.34.75-.75v-5C22 3.45 20.54 2 18.75 2h-5a.75.75 0 000 1.5h5c.97 0 1.75.78 1.75 1.75v5c0 .41.34.75.75.75z" fill={primaryFill} /><path d="M7 9h3v3.5H7V9z" fill={primaryFill} /><path d="M7 14h3v3.5H7V14z" fill={primaryFill} /><path d="M11.5 14v3.5H15V14h-3.5z" fill={primaryFill} /><path d="M7 19h3v3H7v-3z" fill={primaryFill} /><path d="M11.5 19v3h.75A2.75 2.75 0 0015 19.25V19h-3.5z" fill={primaryFill} /><path d="M11.5 9v3.5H15v-.75A2.75 2.75 0 0012.25 9h-.75z" fill={primaryFill} /><path d="M5.5 9h-.75A2.75 2.75 0 002 11.75v.75h3.5V9z" fill={primaryFill} /><path d="M5.5 14H2v3.5h3.5V14z" fill={primaryFill} /><path d="M5.5 19H2v.25A2.75 2.75 0 004.75 22h.75v-3z" fill={primaryFill} /></svg>;
};

export default ResizeTable24Filled;