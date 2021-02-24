import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudDownload48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M34.44 16.1c.01.1.09.16.18.16a7.37 7.37 0 110 14.73h-5.37a1.25 1.25 0 110-2.5h5.56a4.7 4.7 0 004.7-4.72 4.7 4.7 0 00-4.7-4.72h-1.42c-.76 0-1.41-.59-1.41-1.34A8 8 0 0024 9.5a8.04 8.04 0 00-7.97 8.2c0 .76-.66 1.35-1.41 1.35H13.2a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.73h5.55a1.25 1.25 0 110 2.49H13.4a7.37 7.37 0 110-14.73c.09 0 .16-.07.18-.16C14.15 11.07 17.73 7 24 7s9.86 4.1 10.44 9.1z" fill={primaryFill} /><path d="M30.83 34.98l-5.65 5.65c-.5.5-1.28.5-1.77 0l-5.66-5.65a1.25 1.25 0 011.77-1.77L23 36.69V23.26c.07-.63.6-1.12 1.25-1.12h.13c.63.07 1.12.6 1.12 1.25v13.39l3.57-3.57a1.25 1.25 0 111.76 1.77z" fill={primaryFill} /></svg>;
};

export default CloudDownload48Regular;