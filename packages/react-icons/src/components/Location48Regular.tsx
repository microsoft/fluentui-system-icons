import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Location48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 15.5a6 6 0 100 12 6 6 0 000-12zm-3.5 6a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" fill={primaryFill} /><path d="M37 32L26.91 42.7a4 4 0 01-5.82 0L11 32h.04l-.02-.02-.02-.03A17.05 17.05 0 017 21a17 17 0 1130 10.95l-.02.03-.02.02H37zm-1.94-1.62a14.5 14.5 0 10-22.11 0l.3.36L22.91 41c.59.63 1.59.63 2.18 0l9.66-10.25.3-.36z" fill={primaryFill} /></svg>;
};

export default Location48Regular;