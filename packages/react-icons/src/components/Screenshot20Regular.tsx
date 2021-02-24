import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Screenshot20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 5C5.67 5 5 5.67 5 6.5v2a.5.5 0 001 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 000-1h-2z" fill={primaryFill} /><path d="M11.5 5a.5.5 0 000 1h2c.28 0 .5.22.5.5v2a.5.5 0 001 0v-2c0-.83-.67-1.5-1.5-1.5h-2z" fill={primaryFill} /><path d="M6 11.5a.5.5 0 00-1 0v2c0 .83.67 1.5 1.5 1.5h2a.5.5 0 000-1h-2a.5.5 0 01-.5-.5v-2z" fill={primaryFill} /><path d="M15 11.5a.5.5 0 00-1 0v2a.5.5 0 01-.5.5h-2a.5.5 0 000 1h2c.83 0 1.5-.67 1.5-1.5v-2z" fill={primaryFill} /><path d="M3 5c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm1 0v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1z" fill={primaryFill} /></svg>;
};

export default Screenshot20Regular;