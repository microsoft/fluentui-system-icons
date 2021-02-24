import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUpload24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 3.5a.75.75 0 100-1.5h-13a.75.75 0 100 1.5h13zM11.65 22h.1c.38 0 .7-.28.74-.64l.01-.1V7.55l3.72 3.73c.27.27.68.29.98.07l.08-.07a.75.75 0 00.07-.98l-.07-.08-5-5a.75.75 0 00-.97-.07l-.09.07-5 5a.75.75 0 00.98 1.13l.08-.07L11 7.58v13.67c0 .38.28.7.65.75z" fill={primaryFill} /></svg>;
};

export default ArrowUpload24Regular;