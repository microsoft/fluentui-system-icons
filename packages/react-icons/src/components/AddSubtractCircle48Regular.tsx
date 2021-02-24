import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AddSubtractCircle48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 30.75c0-.69.56-1.25 1.25-1.25h7.5a1.25 1.25 0 110 2.5h-7.5c-.69 0-1.25-.56-1.25-1.25zm-7-17.5a1.25 1.25 0 00-2.5 0V16h-3a1.25 1.25 0 100 2.5h3v2.75a1.25 1.25 0 102.5 0V18.5h2.75a1.25 1.25 0 100-2.5H19v-2.75zM24 44a20 20 0 110-40 20 20 0 010 40zm0-2.5a17.5 17.5 0 0013.23-28.96L12.54 37.23A17.43 17.43 0 0024 41.5zm-13.23-6.04l24.69-24.69a17.5 17.5 0 00-24.69 24.69z" fill={primaryFill} /></svg>;
};

export default AddSubtractCircle48Regular;