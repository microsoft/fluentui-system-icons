import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CameraOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.22 2.22c.3-.3.77-.3 1.06 0l18.5 18.5a.75.75 0 01-1.06 1.06l-.95-.94c-.32.1-.66.16-1.02.16H5.25A3.25 3.25 0 012 17.75v-9.5c0-1.4.89-2.6 2.14-3.05L2.22 3.28a.75.75 0 010-1.06zm11.6 12.66a3 3 0 01-4.2-4.2L8.55 9.6a4.5 4.5 0 006.34 6.34l-1.07-1.07z" fill={primaryFill} /><path d="M16.44 13.26a4.5 4.5 0 00-5.2-5.2L7.65 4.47l.55-.9a2.25 2.25 0 011.92-1.07h3.8c.8 0 1.54.43 1.94 1.11L16.68 5h2.07C20.55 5 22 6.46 22 8.25v9.5c0 .32-.05.64-.14.93l-5.42-5.42z" fill={primaryFill} /></svg>;
};

export default CameraOff24Filled;