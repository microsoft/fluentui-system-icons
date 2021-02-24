import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentLandscape24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12h-6a2 2 0 01-2-2V4H4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h16a2 2 0 002-2v-6z" fill={primaryFill} /><path d="M21.5 10.5H16a.5.5 0 01-.5-.5V4.5l6 6z" fill={primaryFill} /></svg>;
};

export default DocumentLandscape24Filled;