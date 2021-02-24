import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookNumber20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.61 8h.98l-.2 1h-.98l.2-1z" fill={primaryFill} /><path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 100-1H6a1 1 0 01-1-1h10.5a.5.5 0 00.5-.5V4a2 2 0 00-2-2H6zm5.6 3.51a.5.5 0 01.4.59l-.19.9h.94a.5.5 0 010 1h-1.14l-.2 1h1.1a.5.5 0 110 1h-1.3L11 11.1a.5.5 0 01-.98-.2l.18-.9h-.98l-.22 1.1a.5.5 0 11-.98-.2l.18-.9h-.94a.5.5 0 010-1H8.4l.2-1H7.5a.5.5 0 010-1h1.29l.22-1.1a.5.5 0 01.98.2l-.18.9h.98l.22-1.1a.5.5 0 01.59-.39z" fill={primaryFill} /></svg>;
};

export default BookNumber20Filled;