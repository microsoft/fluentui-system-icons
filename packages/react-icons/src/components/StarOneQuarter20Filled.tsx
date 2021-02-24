import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarOneQuarter20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.9 2.9a1 1 0 00-1.8 0L8 5.13l-.83 1.68-4.31.63a1 1 0 00-.56 1.7l3.13 3.05-.74 4.3a1 1 0 001.45 1.05L10 15.51l3.86 2.03a1 1 0 001.45-1.05l-.73-4.3 3.12-3.05a1 1 0 00-.55-1.7l-4.32-.63L10.9 2.9zM8 15.43V7.37a1 1 0 00.07-.12L10 3.35l1.93 3.9c.15.3.43.5.76.55l4.31.63-3.12 3.04a1 1 0 00-.29.89l.74 4.3-3.86-2.03a1 1 0 00-.93 0l-1.54.8z" fill={primaryFill} /></svg>;
};

export default StarOneQuarter20Filled;