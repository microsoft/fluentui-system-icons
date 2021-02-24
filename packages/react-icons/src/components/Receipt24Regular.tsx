import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Receipt24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 6.25C4 5.01 5 4 6.25 4h8.5C15.99 4 17 5 17 6.25V14h3.5v3.25c0 1.8-1.46 3.25-3.25 3.25h-10A3.25 3.25 0 014 17.25v-11zm13 9.25V19h.25c.97 0 1.75-.78 1.75-1.75V15.5h-2zM15.5 19V6.25a.75.75 0 00-.75-.75h-8.5a.75.75 0 00-.75.75v11c0 .97.78 1.75 1.75 1.75h8.25zM7 8.75c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5A.75.75 0 017 8.75zm0 3.5c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm0 3.5c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
};

export default Receipt24Regular;