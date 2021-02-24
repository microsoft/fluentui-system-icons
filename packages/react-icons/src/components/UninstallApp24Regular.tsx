import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const UninstallApp24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.7 15.15l.08.07c.27.27.29.68.07.98l-.07.08-2.22 2.22 2.22 2.22c.27.26.29.68.07.97l-.07.09a.75.75 0 01-.98.07l-.08-.07-2.22-2.22-2.22 2.22a.75.75 0 01-.98.07l-.08-.07a.75.75 0 01-.07-.98l.07-.08 2.22-2.22-2.22-2.22a.75.75 0 01-.07-.98l.07-.08a.75.75 0 01.98-.07l.08.07 2.22 2.22 2.22-2.22a.75.75 0 01.97-.07zM18.74 3C19.99 3 21 4 21 5.25v5.25c0 1.24-1 2.25-2.25 2.25h-6v6c0 1.24-1 2.25-2.25 2.25H5.25C4.01 21 3 20 3 18.75V5.25C3 4.01 4 3 5.25 3h13.5zm-7.5 9.75H4.5v6c0 .41.34.75.75.75h5.25c.41 0 .75-.34.75-.75v-6zm7.5-8.25h-6v6.75h6c.41 0 .75-.34.75-.75V5.25a.75.75 0 00-.75-.75zm-7.5 0h-6a.75.75 0 00-.75.75v6h6.75V4.5z" fill={primaryFill} /></svg>;
};

export default UninstallApp24Regular;