import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Camera24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.92 2.5c.8 0 1.54.43 1.94 1.11L16.68 5h2.07C20.55 5 22 6.45 22 8.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 17.75v-9.5C2 6.45 3.46 5 5.25 5h2.08l.88-1.42a2.25 2.25 0 011.91-1.08h3.8zM12 8a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 1.5a3 3 0 110 6 3 3 0 010-6z" fill={primaryFill} /></svg>;
};

export default Camera24Filled;