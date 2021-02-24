import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarEdit24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.2 3.1c-.49-1-1.92-1-2.41 0L8.43 7.88l-5.27.77a1.35 1.35 0 00-.75 2.3l3.81 3.72-.9 5.25a1.35 1.35 0 001.96 1.42l2.95-1.55.3-1.21c.07-.28.17-.55.3-.8l-3.98 2.1.87-5.04c.07-.43-.07-.88-.4-1.2L3.68 10.1l5.05-.74c.44-.06.82-.34 1.02-.74L12 4.04l2.26 4.57c.2.4.57.68 1.01.74l4.45.65c.73 0 1.46.24 2.05.72.53-.79.08-1.93-.93-2.07l-5.27-.77L13.2 3.1z" fill={primaryFill} /><path d="M18.1 11.67l-5.9 5.9c-.34.35-.58.78-.7 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.24-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
};

export default StarEdit24Regular;