import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Connector24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 4c.41 0 .75.34.75.75v2.77l1.87 2.82c.09.12.13.27.13.41v4.5c0 .41-.34.75-.75.75H9v3.25a.75.75 0 01-1.5.1V16h-2v3.26a.75.75 0 01-1.5.1V16H2.75a.75.75 0 01-.75-.75v-4.5c0-.14.05-.29.13-.41L4 7.52V4.75c0-.41.34-.75.75-.75h3.5zm7 0h4.5c.38 0 .7.28.74.65l.01.1V8h.75c.41 0 .75.34.75.75v4.5c0 .14-.04.29-.13.41L20 16.48v2.77c0 .41-.34.75-.75.75h-3.5a.75.75 0 01-.75-.75v-2.77l-1.87-2.82a.75.75 0 01-.13-.41v-4.5c0-.41.34-.75.75-.75h.75V4.75c0-.38.29-.7.65-.74h4.6-4.5zM19 5.5h-3V8h3V5.5z" fill={primaryFill} /></svg>;
};

export default Connector24Filled;