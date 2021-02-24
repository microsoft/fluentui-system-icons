import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HeartPulse32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.03 6.12A7.63 7.63 0 002.61 14.5H7.7l2.14-3.74a2.5 2.5 0 014.4.12l2.17 4.32 1.58-2.17a2.5 2.5 0 013.62-.45l2.3 1.92h5.56a7.7 7.7 0 00-12.6-8.27l-.86.86-.97-.97z" fill={primaryFill} /><path d="M15.27 28.68l-8.6-9.18h2.47c.9 0 1.73-.48 2.17-1.26l.54-.94 1.91 3.82a2.5 2.5 0 004.26.35l2.43-3.34.95.8a2.5 2.5 0 001.6.57h2.47l-8.75 9.19a1 1 0 01-1.45 0z" fill={primaryFill} /><path d="M12.9 11.55a1 1 0 00-1.76-.06L8.44 16H2.66a1 1 0 100 2H9a1 1 0 00.86-.49l2.06-3.43 3.19 6.37a1 1 0 001.7.14l3.37-4.64 2.18 1.82A1 1 0 0023 18h6a1 1 0 000-2h-5.64l-2.72-2.27a1 1 0 00-1.45.18l-3.03 4.17-3.27-6.53z" fill={primaryFill} /></svg>;
};

export default HeartPulse32Filled;