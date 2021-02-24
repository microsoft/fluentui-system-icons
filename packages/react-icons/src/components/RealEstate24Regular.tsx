import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const RealEstate24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 12.46a1 1 0 01.35-.76l2.82-2.42a.5.5 0 01.66 0l2.82 2.42a1 1 0 01.35.76v3.04a.5.5 0 01-.5.5h-1.75a.25.25 0 01-.25-.25V14.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.25c0 .14-.11.25-.25.25H10.5a.5.5 0 01-.5-.5v-3.04z" fill={primaryFill} /><path d="M7 21.03v-2.78c.63.47 1.4.75 2.25.75h8.5a3.75 3.75 0 003.75-3.75V7.32A2 2 0 0020 4H6.73A2 2 0 003 5v16.03c0 .54.43.97.97.97h2.06c.54 0 .97-.43.97-.97zM5 4.5a.5.5 0 01.49.4l.12.6H20a.5.5 0 010 1H5.5v14h-1V5c0-.28.22-.5.5-.5zm4.25 13c-1.24 0-2.25-1-2.25-2.25V8h13v7.25c0 1.24-1 2.25-2.25 2.25h-8.5z" fill={primaryFill} /></svg>;
};

export default RealEstate24Regular;