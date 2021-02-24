import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonSwap24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 14c.98 0 1.82.62 2.12 1.5H4.25a.75.75 0 00-.75.75v.57c0 .54.2 1.06.54 1.46C5.29 19.75 7.26 20.5 10 20.5h.16c.09.18.2.35.35.5l.94.93c-.47.05-.95.07-1.45.07-3.15 0-5.54-.9-7.1-2.74a3.75 3.75 0 01-.9-2.44v-.57C2 15 3 14 4.25 14h11.5z" fill={primaryFill} /><path d="M10 2a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill={primaryFill} /><path d="M14.78 17.78a.75.75 0 00-1.06-1.06l-2.5 2.5a.75.75 0 000 1.06l2.5 2.5a.75.75 0 001.06-1.06l-1.22-1.22h6.88l-1.22 1.22a.75.75 0 001.06 1.06l2.5-2.5a.75.75 0 000-1.06l-2.5-2.5a.75.75 0 10-1.06 1.06L20.44 19h-6.88l1.22-1.22z" fill={primaryFill} /></svg>;
};

export default PersonSwap24Regular;