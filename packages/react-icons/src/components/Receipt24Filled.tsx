import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Receipt24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 6.25C4 5.01 5 4 6.25 4h8.5C15.99 4 17 5 17 6.25V14h3.5v3.25c0 1.8-1.46 3.25-3.25 3.25h-11c-1.24 0-2.25-1-2.25-2.25v-12zM17 19h.25c.97 0 1.75-.78 1.75-1.75V15.5h-2V19zM7.75 8a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm0 3.5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm0 3.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" fill={primaryFill} /></svg>;
};

export default Receipt24Filled;