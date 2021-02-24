import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Icons24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.1 9.6c.23-.26.42-.55.58-.85H20a2 2 0 002-2 1 1 0 00-1-1h-2.8A4.75 4.75 0 109.45 9H4.5C3.67 9 3 9.67 3 10.5v.75a7 7 0 007 7h.97l.05-.12A4.55 4.55 0 0110.5 16c0-1.24.61-2.46 1.48-3.39.9-.95 2.2-1.73 3.79-1.94.87-.11 1.65-.17 2.35-.18a4.02 4.02 0 00-1.02-.9z" fill={primaryFill} /><path d="M12.24 17.95a6.97 6.97 0 00-1.23 3.25.75.75 0 001.5.1c.03-.52.24-1.21.64-1.95.6.62 1.52 1.15 2.85 1.15 1.3 0 2.28-.45 3-1.19.7-.7 1.1-1.62 1.4-2.48.14-.44.27-.88.38-1.29l.05-.21.27-.93c.1-.34.2-.61.32-.82.1-.21.2-.3.26-.34a.75.75 0 00-.22-1.35 13.5 13.5 0 00-5.56-.23 5.33 5.33 0 00-3.2 1.64 4.14 4.14 0 00-1.2 2.7c0 .38.06.72.15 1.02a9.9 9.9 0 015.73-4 .5.5 0 01.24.97 8.9 8.9 0 00-5.38 3.96z" fill={primaryFill} /></svg>;
};

export default Icons24Filled;