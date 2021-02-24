import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailAllRead20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.76 2.06a.5.5 0 01.48 0l5.7 3.07A2 2 0 0116 6.9v5.6a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 012 12.5V6.9a2 2 0 011.05-1.77l5.71-3.07zm.24 1L3.53 6.03a1 1 0 00-.32.26L9 8.95l5.79-2.67a1 1 0 00-.32-.26L9 3.07zm6 4.22L9.21 9.95a.5.5 0 01-.42 0L3 7.28v5.22c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7.28z" fill={primaryFill} /><path d="M6.5 17a2.5 2.5 0 01-2-1h9a3.5 3.5 0 003.5-3.5v-6c.6.46 1 1.18 1 2v4a4.5 4.5 0 01-4.5 4.5h-7z" fill={primaryFill} /></svg>;
};

export default MailAllRead20Regular;