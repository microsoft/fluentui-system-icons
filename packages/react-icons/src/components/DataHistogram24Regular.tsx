import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataHistogram24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 5.25C8.5 4 9.5 3 10.75 3h2.5c1.24 0 2.25 1 2.25 2.25v1.77h3.25c1.24 0 2.25 1 2.25 2.24v11c0 .4-.34.74-.75.74H3.75a.75.75 0 01-.75-.75v-7.99c0-1.24 1-2.25 2.25-2.25H8.5V5.25zM10 19.5h4V5.25a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75V19.5zm-1.5-7.99H5.25a.75.75 0 00-.75.75v7.24h4v-7.99zm7 8h4V9.25a.75.75 0 00-.75-.75H15.5v11z" fill={primaryFill} /></svg>;
};

export default DataHistogram24Regular;