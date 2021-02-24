import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wand20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 2c.28 0 .5.22.5.5V3h.5a.5.5 0 110 1H17v.5a.5.5 0 11-1 0V4h-.5a.5.5 0 010-1h.5v-.5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M6.5 6a.5.5 0 000-1H6v-.5a.5.5 0 00-1 0V5h-.5a.5.5 0 000 1H5v.5a.5.5 0 001 0V6h.5z" fill={primaryFill} /><path d="M15.5 15a.5.5 0 100-1H15v-.5a.5.5 0 10-1 0v.5h-.5a.5.5 0 000 1h.5v.5a.5.5 0 001 0V15h.5z" fill={primaryFill} /><path d="M13.43 6.57a1.91 1.91 0 00-2.7 0l-8.17 8.16a1.91 1.91 0 102.7 2.7l8.17-8.16c.75-.74.75-1.96 0-2.7zm-2 .7a.91.91 0 011.3 1.3l-.48.47-1.3-1.29.48-.48zm-1.18 1.19l1.3 1.29-6.99 6.98a.91.91 0 01-1.3-1.29l6.99-6.98z" fill={primaryFill} /></svg>;
};

export default Wand20Regular;