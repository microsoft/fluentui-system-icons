import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlagOff28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.4 1.55l.07-.08a.75.75 0 01.98-.07l.08.07 20 20a.75.75 0 01-.98 1.13l-.08-.07L17.94 18H5.5v6.25a.75.75 0 01-1.5.1V4.06L2.47 2.53a.75.75 0 01-.07-.98l.07-.08-.07.08zM7.06 3h16.19c.56 0 .9.58.68 1.06l-.05.09-4 6.35 4 6.35c.3.47 0 1.07-.53 1.14l-.1.01h-1.19l-15-15z" fill={primaryFill} /></svg>;
};

export default FlagOff28Filled;