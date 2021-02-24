import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailAllRead20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 17a2.5 2.5 0 01-2-1h9a3.5 3.5 0 003.5-3.5v-6c.6.46 1 1.18 1 2v4a4.5 4.5 0 01-4.5 4.5h-7z" fill={primaryFill} /><path d="M9.24 2.06a.5.5 0 00-.48 0l-5.7 3.07a2 2 0 00-.76.71l.42.2L9 8.95l6.28-2.89.41-.22a2 2 0 00-.74-.7L9.24 2.06z" fill={primaryFill} /><path d="M16 6.8l-.26.14a.5.5 0 01-.03.01l-6.5 3a.5.5 0 01-.42 0l-6.5-3h-.01L2 6.8V12.5A2.5 2.5 0 004.5 15h9a2.5 2.5 0 002.5-2.5V6.9v-.1z" fill={primaryFill} /></svg>;
};

export default MailAllRead20Filled;