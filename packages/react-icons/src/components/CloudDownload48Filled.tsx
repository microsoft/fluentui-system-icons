import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudDownload48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 7.01c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73H27.5v-7.61a3.25 3.25 0 00-2.92-3.24h-.05l-.23-.01h-.05a3.25 3.25 0 00-3.23 2.92v.05l-.02.23V31h-7.61a7.37 7.37 0 110-14.73h.16c.52-5.1 4.12-9.26 10.45-9.26z" fill={primaryFill} /><path d="M25.18 40.63l5.65-5.65a1.25 1.25 0 10-1.76-1.77l-3.57 3.57v-13.4c0-.64-.5-1.17-1.12-1.24h-.13c-.65 0-1.18.49-1.24 1.12v.13L23 36.69l-3.48-3.48a1.25 1.25 0 10-1.77 1.77l5.66 5.65c.49.5 1.28.5 1.77 0z" fill={primaryFill} /></svg>;
};

export default CloudDownload48Filled;