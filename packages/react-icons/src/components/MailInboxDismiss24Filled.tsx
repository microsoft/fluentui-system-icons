import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailInboxDismiss24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7L17.21 6.5l1.64-1.65a.5.5 0 00-.7-.7L16.5 5.79l-1.65-1.64z" fill={primaryFill} /><path d="M19.5 14v-1.73a6.52 6.52 0 001.5-1.08v7.56c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 18.75V7.25C3 5.45 4.46 4 6.25 4h4.25c-.2.47-.34.98-.42 1.5H6.25c-.97 0-1.75.78-1.75 1.75V14H9c.38 0 .7.28.74.65l.01.1a2.25 2.25 0 004.5 0c0-.41.34-.75.75-.75h4.5z" fill={primaryFill} /></svg>;
};

export default MailInboxDismiss24Filled;