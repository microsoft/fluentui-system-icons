import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FastForward20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.4a.5.5 0 01.81-.39L10 8.96V4.5a.5.5 0 01.8-.4l7 5.5a.5.5 0 010 .8l-7 5.5a.5.5 0 01-.8-.4v-4.47l-6.2 4.86a.5.5 0 01-.8-.39V4.4z" fill={primaryFill} /></svg>;
};

export default FastForward20Filled;