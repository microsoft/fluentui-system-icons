import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ScaleFit24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 9.44c.3.27.34.74.06 1.05l-.66.76h2.86a.75.75 0 010 1.5H7.4l.66.76a.75.75 0 01-1.12.98l-1.75-2a.75.75 0 010-.98l1.75-2a.75.75 0 011.05-.07z" fill={primaryFill} /><path d="M15.95 10.5a.75.75 0 011.13-1l1.75 2c.25.29.25.71 0 1l-1.75 2a.75.75 0 01-1.13-1l.66-.75h-2.86a.75.75 0 010-1.5h2.86l-.66-.76z" fill={primaryFill} /><path d="M2 6.25C2 5.01 3 4 4.25 4h15.5C20.99 4 22 5 22 6.25v11.5c0 1.24-1 2.25-2.25 2.25H4.25C3.01 20 2 19 2 17.75V6.25zm2.25-.75a.75.75 0 00-.75.75v11.5c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75V6.25a.75.75 0 00-.75-.75H4.25z" fill={primaryFill} /></svg>;
};

export default ScaleFit24Regular;