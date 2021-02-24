import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Video360Off20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 11a1 1 0 100-2 1 1 0 000 2zM2.85 2.15a.5.5 0 10-.7.7l1.18 1.19A1.7 1.7 0 002 5.7v8.6a1.7 1.7 0 001.97 1.68c3.7-.6 7.46-.64 11.17-.13l2 2a.5.5 0 00.71-.7l-1.18-1.19-6.12-6.12-1.39-1.39L6.01 5.3 4.86 4.15l-2-2zM13 13.7v.9l-1-.06V12.7l1 1zM10.3 11H9a1 1 0 00-1 1v2.55l-1 .06V12H5a1 1 0 00-1 1v1.96l-.19.03A.7.7 0 013 14.3V5.7a.7.7 0 01.81-.7l.58.1 5.9 5.9zm3.82 1L16 13.88V13a1 1 0 00-1-1h-.88zm2.73 2.73l.71.71c.27-.3.44-.7.44-1.14V5.7a1.7 1.7 0 00-1.97-1.68c-3.17.51-6.38.62-9.57.32l1.09 1.09c2.88.18 5.78.04 8.64-.42a.7.7 0 01.81.69v8.6a.7.7 0 01-.15.43zM14 11a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default Video360Off20Regular;