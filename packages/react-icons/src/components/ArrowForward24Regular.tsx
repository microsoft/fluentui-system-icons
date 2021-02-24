import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowForward24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.65 6.3l.07-.08a.75.75 0 01.98-.07l.08.07 5 5c.26.26.29.68.07.97l-.07.09-5 5a.75.75 0 01-1.13-.97l.07-.09 3.71-3.72H3.75a.75.75 0 01-.74-.64l-.01-.1c0-.38.28-.7.65-.75H18.45l-3.73-3.73a.75.75 0 01-.07-.98l.07-.08-.07.08z" fill={primaryFill} /></svg>;
};

export default ArrowForward24Regular;