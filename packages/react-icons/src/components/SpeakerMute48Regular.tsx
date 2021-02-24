import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SpeakerMute48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.08 6.42A1.75 1.75 0 0128 7.72v32.56c0 1.51-1.8 2.31-2.92 1.3l-8.2-7.36c-.88-.79-2-1.22-3.18-1.22H9a5.25 5.25 0 01-5.25-5.25v-7.5C3.75 17.35 6.1 15 9 15h4.7c1.17 0 2.3-.43 3.18-1.22l8.2-7.36zm.42 2.98l-6.95 6.25a7.25 7.25 0 01-4.85 1.85H9a2.75 2.75 0 00-2.75 2.75v7.5A2.75 2.75 0 009 30.5h4.7c1.79 0 3.51.66 4.85 1.85l6.95 6.25V9.4z" fill={primaryFill} /><path d="M32.37 18.37a1.25 1.25 0 011.76 0L38 22.23l3.87-3.86a1.25 1.25 0 111.76 1.76L39.77 24l3.86 3.87a1.25 1.25 0 01-1.76 1.76L38 25.77l-3.87 3.86a1.25 1.25 0 01-1.76-1.76L36.23 24l-3.86-3.87a1.25 1.25 0 010-1.76z" fill={primaryFill} /></svg>;
};

export default SpeakerMute48Regular;