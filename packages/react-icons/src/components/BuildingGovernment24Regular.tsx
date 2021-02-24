import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingGovernment24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 11.75a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2z" fill={primaryFill} /><path d="M11.75 11c.41 0 .75.34.75.75v2a.75.75 0 01-1.5 0v-2c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M9.5 11.75a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2z" fill={primaryFill} /><path d="M5.75 15.5c.41 0 .75.34.75.75v2.5a.75.75 0 01-1.5 0v-2.5c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M19 16.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z" fill={primaryFill} /><path d="M11.75 2h3.75c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-3v1.02A7 7 0 0119 13h.75c1.24 0 2.25 1 2.25 2.25v6c0 .41-.34.75-.75.75H2.75a.75.75 0 01-.75-.75v-6C2 14.01 3 13 4.25 13H5a7 7 0 016-6.93V2.75c0-.41.34-.75.75-.75zM12 7.5A5.5 5.5 0 006.5 13v.75c0 .41-.34.75-.75.75h-1.5a.75.75 0 00-.75.75v5.25h6v-2.75c0-.41.34-.75.75-.75h3.5c.41 0 .75.34.75.75v2.75h6v-5.25a.75.75 0 00-.75-.75h-1.5a.75.75 0 01-.75-.75V13A5.5 5.5 0 0012 7.5zm1 11h-2v2h2v-2z" fill={primaryFill} /></svg>;
};

export default BuildingGovernment24Regular;