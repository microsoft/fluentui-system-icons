import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowPrevious24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3c-.38 0-.7.28-.74.65l-.01.1v16.5a.75.75 0 001.5.1V3.75A.75.75 0 005.75 3zm13.03.22a.75.75 0 00-.98-.07l-.08.07-8.25 8.25a.75.75 0 00-.07.98l.07.08 8.25 8.25a.75.75 0 001.13-.98l-.07-.08L11.06 12l7.72-7.72c.3-.3.3-.77 0-1.06z" fill={primaryFill} /></svg>;
};

export default ArrowPrevious24Regular;