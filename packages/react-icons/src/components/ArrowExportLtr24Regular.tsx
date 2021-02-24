import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowExportLtr24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 4.5c.38 0 .7.28.75.65v13.1a.75.75 0 01-1.5.1V5.26c0-.41.34-.75.75-.75zm12.9 1.8l.07-.08a.75.75 0 01.98-.07l.08.07 5 5c.26.26.29.68.07.97l-.07.09-5 5a.75.75 0 01-1.13-.97l.07-.09 3.71-3.72H5.75a.75.75 0 01-.74-.64v-.1c0-.38.28-.7.64-.75H19.45l-3.73-3.73a.75.75 0 01-.07-.98l.07-.08-.07.08z" fill={primaryFill} /></svg>;
};

export default ArrowExportLtr24Regular;