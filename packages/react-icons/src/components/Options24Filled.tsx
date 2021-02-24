import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Options24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 13.5a3.25 3.25 0 013.16 2.5h9.34a.75.75 0 01.1 1.5h-9.44a3.25 3.25 0 01-6.32 0H2.75a.75.75 0 01-.1-1.5h2.94a3.25 3.25 0 013.16-2.5zm6.5-9.5a3.25 3.25 0 013.16 2.5h2.84a.75.75 0 01.1 1.5h-2.94a3.25 3.25 0 01-6.32 0H2.75a.75.75 0 01-.1-1.5h9.44A3.25 3.25 0 0115.25 4z" fill={primaryFill} /></svg>;
};

export default Options24Filled;