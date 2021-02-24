import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LockMultiple24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 13.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /><path d="M7.25 5.5a3.5 3.5 0 117 0v1h1c1.24 0 2.25 1 2.25 2.25v7.5c0 1.24-1 2.25-2.25 2.25h-9c-1.24 0-2.25-1-2.25-2.25v-7.5C4 7.51 5 6.5 6.25 6.5h1v-1zm5.5 0a2 2 0 10-4 0v1h4v-1zM5.5 8.75v7.5c0 .41.34.75.75.75h9c.41 0 .75-.34.75-.75v-7.5a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75z" fill={primaryFill} /><path d="M9.75 21c-.98 0-1.81-.63-2.12-1.5h8.12a2.75 2.75 0 002.75-2.75v-6.62c.87.3 1.5 1.14 1.5 2.12v4.5C20 19.1 18.1 21 15.75 21h-6z" fill={primaryFill} /></svg>;
};

export default LockMultiple24Regular;