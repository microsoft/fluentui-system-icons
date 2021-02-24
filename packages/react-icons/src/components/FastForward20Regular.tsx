import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FastForward20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.5a.5.5 0 01.8-.4L10 8.98V4.5a.5.5 0 01.8-.4l7 5.5a.5.5 0 010 .8l-7 5.5a.5.5 0 01-.8-.4v-4.47l-6.2 4.86a.5.5 0 01-.8-.39v-11zm8 9.97L16.7 10 11 5.53v8.94zm-7 0L9.7 10 4 5.53v8.94z" fill={primaryFill} /></svg>;
};

export default FastForward20Regular;