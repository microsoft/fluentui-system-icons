import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowEnterUp24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 21.25c0 .41-.34.75-.75.75h-6.5A3.75 3.75 0 019 18.25V4.59L5.28 8.3a.75.75 0 01-.98.08l-.08-.08a.75.75 0 01-.07-.97l.07-.09 5-5a.75.75 0 01.98-.07l.08.07 5 5a.75.75 0 01-.98 1.14l-.08-.08L10.5 4.6v13.66c0 1.19.93 2.17 2.1 2.24l.15.01h6.5c.41 0 .75.34.75.75z" fill={primaryFill} /></svg>;
};

export default ArrowEnterUp24Regular;