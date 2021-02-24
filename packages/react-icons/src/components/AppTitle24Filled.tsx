import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AppTitle24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 20.5h14.5a.75.75 0 01.1 1.5H4.75a.75.75 0 01-.1-1.5h14.6-14.5zM16.25 3A3.75 3.75 0 0120 6.75v8.5A3.75 3.75 0 0116.25 19h-8.5A3.75 3.75 0 014 15.25v-8.5A3.75 3.75 0 017.75 3h8.5z" fill={primaryFill} /></svg>;
};

export default AppTitle24Filled;