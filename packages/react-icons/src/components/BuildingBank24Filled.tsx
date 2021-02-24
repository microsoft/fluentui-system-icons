import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingBank24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.97 2.32a1.75 1.75 0 012.06 0l7.42 5.42c.98.71.48 2.26-.73 2.26H4.28a1.25 1.25 0 01-.73-2.26l7.42-5.42zM13 6.25a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M11.25 16h-2v-5h2v5z" fill={primaryFill} /><path d="M14.75 16h-2v-5h2v5z" fill={primaryFill} /><path d="M18.5 16h-2.25v-5h2.25v5z" fill={primaryFill} /><path d="M18.75 17H5.25C4.01 17 3 18 3 19.25v.5c0 .41.34.75.75.75h16.5c.41 0 .75-.34.75-.75v-.5c0-1.24-1-2.25-2.25-2.25z" fill={primaryFill} /><path d="M7.75 16H5.5v-5h2.25v5z" fill={primaryFill} /></svg>;
};

export default BuildingBank24Filled;