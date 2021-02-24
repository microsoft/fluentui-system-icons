import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cast24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.25C2 5.01 3 4 4.25 4h15.5C20.99 4 22 5 22 6.25v11.5c0 1.24-1 2.25-2.25 2.25H4.25C3.01 20 2 19 2 17.75V6.25zm2.25-.75a.75.75 0 00-.75.75v11.5c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75V6.25a.75.75 0 00-.75-.75H4.25z" fill={primaryFill} /><path d="M7 16a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M5 12.75c0-.41.33-.75.75-.75 2.34 0 4.24 1.9 4.24 4.25a.75.75 0 01-1.5 0 2.75 2.75 0 00-2.74-2.75.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M5 9.74c0-.41.33-.75.75-.75 4 0 7.25 3.25 7.25 7.26a.75.75 0 01-1.5 0 5.75 5.75 0 00-5.75-5.76.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
};

export default Cast24Regular;