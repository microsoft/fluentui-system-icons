import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonTag20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6a4 4 0 116.65 3h-.14c-.8 0-1.52.38-1.98.96A4 4 0 015 6zm4-3a3 3 0 100 6 3 3 0 000-6zm.05 8H4.01A2 2 0 002 13c0 1.7.83 2.97 2.14 3.8A9.14 9.14 0 009 18c.8 0 1.58-.07 2.31-.22l-.85-.87c-.47.06-.95.09-1.46.09a8.16 8.16 0 01-4.33-1.05A3.36 3.36 0 013 13a1 1 0 011-1h5v-.48c0-.18.02-.35.05-.52zm.95 3.4c0 .39.15.77.43 1.05l3.04 3.1c.58.59 1.52.6 2.12.03l2.95-2.84c.6-.58.62-1.55.02-2.15l-3.1-3.14a1.5 1.5 0 00-1.08-.45h-2.87c-.83 0-1.51.68-1.51 1.51v2.88zm2.75-.9a.75.75 0 110-1.5.75.75 0 010 1.5z" fill={primaryFill} /></svg>;
};

export default PersonTag20Regular;