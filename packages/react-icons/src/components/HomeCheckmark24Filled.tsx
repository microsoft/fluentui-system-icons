import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HomeCheckmark24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.54 2.53c.83-.7 2.06-.7 2.9 0l6.76 5.7c.5.43.8 1.06.8 1.72v9.8c0 .97-.78 1.75-1.75 1.75H4.75c-.97 0-1.75-.78-1.75-1.75v-9.8c0-.66.3-1.3.8-1.72l6.74-5.7zm5.24 9.25a.75.75 0 10-1.06-1.06l-3.97 3.97-1.47-1.47a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z" fill={primaryFill} /></svg>;
};

export default HomeCheckmark24Filled;