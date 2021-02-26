import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailInboxCheckmark16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.85-1.85L9.5 6.29l-.65-.64a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 00-.7-.7zM14 9.75a5.48 5.48 0 01-4.5 1.16c-.33.38-.8.59-1.5.59-.9 0-1.43-.36-1.74-.97A2.55 2.55 0 016 9.5a.5.5 0 00-.5-.5H3V5.5C3 4.67 3.67 4 4.5 4h.7c.1-.35.24-.68.4-1H4.5A2.5 2.5 0 002 5.5v7A2.5 2.5 0 004.5 15h7a2.5 2.5 0 002.5-2.5V9.74z" fill={primaryFill} /></svg>;
};

export default MailInboxCheckmark16Filled;