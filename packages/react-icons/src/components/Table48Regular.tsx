import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Table48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M35.75 6C39.2 6 42 8.8 42 12.25v23.5C42 39.2 39.2 42 35.75 42h-23.5A6.25 6.25 0 016 35.75v-23.5C6 8.8 8.8 6 12.25 6h23.5zM8.5 19.5v9H17v-9H8.5zm0 11.5v4.75a3.75 3.75 0 003.75 3.75H17V31H8.5zm11 8.5h9V31h-9v8.5zm11.5 0h4.75a3.75 3.75 0 003.75-3.75V31H31v8.5zm8.5-11v-9H31v9h8.5zm0-11.5v-4.75a3.75 3.75 0 00-3.75-3.75H31V17h8.5zm-11-8.5h-9V17h9V8.5zM17 8.5h-4.75a3.75 3.75 0 00-3.75 3.75V17H17V8.5zm11.5 20v-9h-9v9h9z" fill={primaryFill} /></svg>;
};

export default Table48Regular;