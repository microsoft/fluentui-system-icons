import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlipVertical24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.13 3.86c.23.13.37.38.37.64v6.25c0 .41-.34.75-.75.75H5.25a.75.75 0 01-.36-1.4l11.5-6.26a.75.75 0 01.74.02zM8.2 10H16V5.76L8.2 10z" fill={primaryFill} /><path d="M17.5 19.5a.75.75 0 01-1.1.66L4.9 13.9a.75.75 0 01.35-1.41h11.5c.41 0 .75.34.75.75v6.25z" fill={primaryFill} /></svg>;
};

export default FlipVertical24Regular;