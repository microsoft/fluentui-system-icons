import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SwipeUp24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 18c.38 0 .7-.28.74-.64l.01-.1V4.55l2.22 2.22c.27.26.68.29.98.07l.08-.07a.75.75 0 00.07-.98l-.07-.08-3.5-3.5a.75.75 0 00-.98-.07l-.08.07-3.5 3.5a.75.75 0 00.98 1.13l.08-.07 2.22-2.22v12.7c0 .4.34.74.75.74zm0 4a5 5 0 001.75-9.68v1.66a3.5 3.5 0 11-3.5 0v-1.66A5 5 0 0012 22z" fill={primaryFill} /></svg>;
};

export default SwipeUp24Regular;