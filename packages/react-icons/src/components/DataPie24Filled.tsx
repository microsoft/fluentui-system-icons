import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataPie24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 4.25c.41 0 .75.34.75.75v8h8c.38 0 .7.28.74.65l.01.1c0 4.97-4.03 8.5-9 8.5a9 9 0 01-9-9c0-4.97 3.53-9 8.5-9zm3-2.5a9 9 0 019 9c0 .41-.34.75-.75.75h-8.25a.75.75 0 01-.75-.75V2.5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default DataPie24Filled;