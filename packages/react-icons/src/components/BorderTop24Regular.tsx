import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BorderTop24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25a.75.75 0 001.5 0v-.5c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 001.5 0v-.5A2.75 2.75 0 0018.25 3H5.75A2.75 2.75 0 003 5.75v.5z" fill={primaryFill} /><path d="M4.5 10.75a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z" fill={primaryFill} /><path d="M19.5 10.75a.75.75 0 011.5 0v2.5a.75.75 0 01-1.5 0v-2.5z" fill={primaryFill} /><path d="M14 20.25c0 .41-.34.75-.75.75h-2.5a.75.75 0 010-1.5h2.5c.41 0 .75.34.75.75z" fill={primaryFill} /><path d="M6.25 21a.75.75 0 000-1.5h-.5c-.69 0-1.25-.56-1.25-1.25v-.5a.75.75 0 00-1.5 0v.5A2.75 2.75 0 005.75 21h.5z" fill={primaryFill} /><path d="M17 20.25c0 .41.34.75.75.75h.5A2.75 2.75 0 0021 18.25v-.5a.75.75 0 00-1.5 0v.5c0 .69-.56 1.25-1.25 1.25h-.5a.75.75 0 00-.75.75z" fill={primaryFill} /></svg>;
};

export default BorderTop24Regular;