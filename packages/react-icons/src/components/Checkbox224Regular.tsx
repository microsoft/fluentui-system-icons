import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Checkbox224Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 2A2.75 2.75 0 0120 4.75v8.79a3.7 3.7 0 00-1.5.1V4.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.59c-.36.39-.7.88-.9 1.5H4.75A2.75 2.75 0 012 17.25V4.75A2.75 2.75 0 014.75 2h12.5zM9 13.44l6.47-6.47a.75.75 0 011.13.98l-.07.08-7 7a.75.75 0 01-.98.07l-.08-.07-3-3a.75.75 0 01.98-1.13l.08.07L9 13.44zm9.56 2.97c.27-.3.76-.47 1.13-.4.17.04.3.12.38.22.09.11.18.31.18.68 0 .55-.35.83-1.19 1.44-.74.53-1.81 1.32-1.81 2.9 0 .41.34.75.75.75h3a.75.75 0 000-1.5h-2.06a3.45 3.45 0 011.13-1.03c.67-.48 1.68-1.2 1.68-2.56 0-.63-.17-1.18-.5-1.6a2.1 2.1 0 00-1.27-.76 2.8 2.8 0 00-2.54.86.75.75 0 001.12 1z" fill={primaryFill} /></svg>;
};

export default Checkbox224Regular;