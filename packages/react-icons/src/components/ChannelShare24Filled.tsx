import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChannelShare24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h6c1.8 0 3.25 1.46 3.25 3.25a.75.75 0 01-1.5 0c0-.97-.78-1.75-1.75-1.75h-6c-.97 0-1.75.78-1.75 1.75v6c0 .97.78 1.75 1.75 1.75h5.85a2.75 2.75 0 110 1.5H6.25A3.25 3.25 0 013 12.25v-6zM17.75 10c.97 0 1.75.78 1.75 1.75v6c0 .97-.78 1.75-1.75 1.75h-6c-.97 0-1.75-.78-1.75-1.75a.75.75 0 00-1.5 0c0 1.8 1.46 3.25 3.25 3.25h6c1.8 0 3.25-1.46 3.25-3.25v-6c0-1.8-1.46-3.25-3.25-3.25H11.9a2.75 2.75 0 100 1.5h5.85z" fill={primaryFill} /></svg>;
};

export default ChannelShare24Filled;