import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ScaleFit24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 4C3.01 4 2 5 2 6.25v11.5C2 18.99 3 20 4.25 20h15.5c1.24 0 2.25-1 2.25-2.25V6.25C22 5.01 21 4 19.75 4H4.25zm3.74 5.44c.32.27.35.74.07 1.05l-.66.76h2.86a.75.75 0 010 1.5H7.4l.66.76a.75.75 0 01-1.12.98l-1.75-2a.75.75 0 010-.98l1.75-2a.75.75 0 011.05-.07zm7.96 1.05a.75.75 0 011.13-.98l1.75 2c.25.28.25.7 0 .98l-1.75 2a.75.75 0 01-1.13-.98l.66-.76h-2.86a.75.75 0 010-1.5h2.86l-.66-.76z" fill={primaryFill} /></svg>;
};

export default ScaleFit24Filled;