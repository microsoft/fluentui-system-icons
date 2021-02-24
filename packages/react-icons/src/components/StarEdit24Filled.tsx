import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarEdit24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.2 3.1c-.49-1-1.92-1-2.41 0L8.43 7.88l-5.27.77a1.35 1.35 0 00-.75 2.3l3.81 3.72-.9 5.25a1.35 1.35 0 001.96 1.42l2.94-1.54.3-1.22c.17-.65.5-1.24.98-1.71l5.9-5.9a3.28 3.28 0 014.37-.24c.53-.8.08-1.94-.93-2.08l-5.27-.77L13.2 3.1z" fill={primaryFill} /><path d="M18.1 11.67l-5.9 5.9c-.34.35-.58.78-.7 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.24-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
};

export default StarEdit24Filled;