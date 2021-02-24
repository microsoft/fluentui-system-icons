import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PinOff20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.58 8.72L6.9 7.6 2.15 2.85a.5.5 0 11.7-.7l5.9 5.89 3.21 3.22 5.9 5.89a.5.5 0 01-.71.7l-4.76-4.75-1.1 3.32a.5.5 0 01-.83.2l-3.19-3.19L3.71 17H3v-.7H3l3.57-3.57-3.18-3.18a.5.5 0 01.19-.83zm8.02 3.59L7.7 8.4l-3.04 1 5.93 5.93 1.01-3.03z" fill={primaryFill} /><path d="M12.7 10.54l-.03.01.76.75 4.2-1.9a1.5 1.5 0 00.43-2.43l-5.03-5.03a1.5 1.5 0 00-2.42.44L8.7 6.58l.75.75.02-.03 2.05-4.5a.5.5 0 01.8-.15l5.03 5.03a.5.5 0 01-.14.8l-4.51 2.06z" fill={primaryFill} /></svg>;
};

export default PinOff20Regular;