import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailInboxArrowUp24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 4c-.2.47-.34.98-.42 1.5H6.25c-.97 0-1.75.78-1.75 1.75V14H9c.38 0 .7.28.74.65l.01.1a2.25 2.25 0 004.5 0c0-.41.34-.75.75-.75h4.5v-1.73a6.52 6.52 0 001.5-1.08v7.56c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 18.75V7.25C3 5.45 4.46 4 6.25 4h4.25zm6-3a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.13 2.02L16.54 3h-.11l-.06.02-.08.03-.07.04-.06.04-2.51 2.52-.06.07a.5.5 0 000 .56l.06.07.07.06c.17.12.4.12.56 0l.07-.06L16 4.71v5.38c.05.2.2.36.41.4l.09.01h.09a.5.5 0 00.4-.41L17 10V4.7l1.65 1.65.07.06a.5.5 0 00.7-.7l-.07-.06-2.54-2.55-.05-.03-.07-.03-.06-.02z" fill={primaryFill} /></svg>;
};

export default MailInboxArrowUp24Filled;