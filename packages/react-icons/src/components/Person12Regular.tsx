import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Person12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a2 2 0 100 4 2 2 0 000-4zM5 3a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /><path d="M8.5 6h-5C2.67 6 2 6.67 2 7.5c0 1.12.46 2.01 1.21 2.61.74.6 1.74.89 2.79.89s2.05-.29 2.79-.89C9.54 9.51 10 8.61 10 7.5 10 6.67 9.33 6 8.5 6zm-5 1h5c.28 0 .5.22.5.5 0 .82-.32 1.42-.84 1.83-.52.43-1.28.67-2.16.67-.88 0-1.64-.24-2.16-.67A2.25 2.25 0 013 7.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default Person12Regular;