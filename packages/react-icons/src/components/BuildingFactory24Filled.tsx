import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingFactory24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.92 4.13A2.25 2.25 0 015.17 2h1.16c1.2 0 2.18.93 2.25 2.13l.83 15.5A2.25 2.25 0 017.17 22H4.33a2.25 2.25 0 01-2.24-2.37l.83-15.5z" fill={primaryFill} /><path d="M9.51 22c.6-.62.95-1.49.9-2.43L9.86 9.28l4.66-3.86a.75.75 0 011.23.58v4.24l4.98-4.78A.75.75 0 0122 6v13.75c0 1.24-1 2.25-2.25 2.25H9.51zM13 20.5h5V16a1 1 0 00-1-1h-3a1 1 0 00-1 1v4.5z" fill={primaryFill} /></svg>;
};

export default BuildingFactory24Filled;