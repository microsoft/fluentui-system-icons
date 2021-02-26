import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GroupDismiss24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 5a2 2 0 11-4 0 2 2 0 014 0zm14 0a2 2 0 11-4 0 2 2 0 014 0zM7 19a2 2 0 11-4 0 2 2 0 014 0zM8 5c0 .17-.01.34-.04.5h4.54a1 1 0 011 1V9h-2A2.5 2.5 0 009 11.5v2H6.5a1 1 0 01-1-1V7.96A3.02 3.02 0 014 7.83v4.67A2.5 2.5 0 006.5 15H9v2.5a2.5 2.5 0 002.5 2.5 6.45 6.45 0 01-.44-1.6 1 1 0 01-.56-.9v-6a1 1 0 011-1h6a1 1 0 01.9.56c.56.08 1.1.23 1.6.44A2.5 2.5 0 0017.5 9H15V6.5A2.5 2.5 0 0012.5 4H7.83A3 3 0 018 5zm15 12.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-5.5-.7l-1.65-1.65a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.65a.5.5 0 00-.7-.7l-1.65 1.64z" fill={primaryFill} /></svg>;
};

export default GroupDismiss24Regular;