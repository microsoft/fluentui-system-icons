import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretRight24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.07 18.84c-.8.7-2.07.13-2.07-.94V6.1a1.25 1.25 0 012.07-.94l6.31 5.52c.8.7.8 1.94 0 2.64l-6.3 5.52zm-.57-1.5l5.9-5.15a.25.25 0 000-.38l-5.9-5.16v10.7z" fill={primaryFill} /></svg>;
};

export default CaretRight24Regular;