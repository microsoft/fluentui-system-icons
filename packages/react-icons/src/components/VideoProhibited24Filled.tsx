import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoProhibited24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 17.5a6.5 6.5 0 015-6.33V8.25C16 6.45 14.54 5 12.75 5h-7.5A3.25 3.25 0 002 8.25v8.5C2 18.55 3.46 20 5.25 20h6.25a6.48 6.48 0 01-.5-2.5zm6.5-6.5c1.75 0 3.33.69 4.5 1.81V7.04a1 1 0 00-1.65-.76L17 9.13v1.89l.5-.02zm5.5 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-9.5 0c0 .83.26 1.6.7 2.25l5.55-5.56a4 4 0 00-6.25 3.3zm4 4a4 4 0 003.3-6.25l-5.55 5.56c.64.44 1.42.69 2.25.69z" fill={primaryFill} /></svg>;
};

export default VideoProhibited24Filled;