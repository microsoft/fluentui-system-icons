import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FilterSync24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM14.5 4a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 000-1h-1a2.5 2.5 0 014.03.04.5.5 0 00.8-.59 3.5 3.5 0 00-5.33-.4V4.5a.5.5 0 00-.5-.5zM20 9.95v.55a.5.5 0 001 0v-2a.5.5 0 00-.5-.5h-2a.5.5 0 000 1h1a2.5 2.5 0 01-3.91.11.5.5 0 10-.77.65 3.5 3.5 0 005.18.19zm-6.65 2.55a6.54 6.54 0 01-1.33-1.5H7.5a.75.75 0 000 1.5h5.85zM11 7.5c0-.52.06-1.02.17-1.5H4.5a.75.75 0 000 1.5H11zm2.5 8.5a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h3z" fill={primaryFill} /></svg>;
};

export default FilterSync24Regular;