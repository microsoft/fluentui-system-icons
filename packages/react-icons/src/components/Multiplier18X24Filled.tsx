import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier18X24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 9.5c0 .66-.24 1.23-.62 1.68A3.5 3.5 0 0113 17.25a3.5 3.5 0 01-2.38-6.07A2.56 2.56 0 0110 9.5c0-1.64 1.47-2.75 3-2.75s3 1.11 3 2.75zm-3-.75c-.68 0-1 .46-1 .75 0 .3.32.75 1 .75.68 0 1-.46 1-.75 0-.3-.32-.75-1-.75zm-1.5 5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM7.75 17a.75.75 0 100-1.5.75.75 0 000 1.5zm9.54-4.7a1 1 0 011.42 0l.79.79.8-.8a1 1 0 011.4 1.42l-.79.79.8.8a1 1 0 01-1.42 1.4l-.79-.79-.8.8a1 1 0 01-1.4-1.42l.79-.79-.8-.8a1 1 0 010-1.4zM6 7.9a1 1 0 00-1.85-.52l-.08.12c-.4.67-.84 1.4-2.08 2.14A1 1 0 103 11.36c.38-.23.7-.46.99-.69V16a1 1 0 002 0V7.9z" fill={primaryFill} /></svg>;
};

export default Multiplier18X24Filled;