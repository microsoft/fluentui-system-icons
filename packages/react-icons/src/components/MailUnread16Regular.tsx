import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailUnread16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3h7.17c-.09.25-.14.51-.16.8L10 4H3a1 1 0 00-1 1v.2l5.5 2.74 3.47-1.73a3 3 0 001 .61L7.73 8.95a.5.5 0 01-.36.03l-.08-.03L2 6.3V11a1 1 0 001 1h9a1 1 0 001-1V7a3 3 0 001-.17V11a2 2 0 01-2 2H3a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm10 3l-.22-.01-.18-.03-.06-.01-.1-.03a1.99 1.99 0 01-.31-.12l-.17-.09a2 2 0 01-.95-1.54L11 4v-.09l.01-.12.02-.15.05-.19.05-.15.06-.15.08-.15a2 2 0 112.87 2.65l-.15.09-.14.07-.2.08-.05.02-.15.04-.12.02-.16.02L13 6z" fill={primaryFill} /></svg>;
};

export default MailUnread16Regular;