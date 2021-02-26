import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailInboxCheckmark16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.85-1.85L9.5 6.29l-.65-.64a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 00-.7-.7zM10.62 11a5.5 5.5 0 01-1.13-.1c-.32.39-.8.6-1.49.6-.9 0-1.43-.36-1.74-.97A2.55 2.55 0 016 9.5a.5.5 0 00-.5-.5H3V5.5C3 4.67 3.67 4 4.5 4h.7c.1-.35.24-.68.4-1H4.5A2.5 2.5 0 002 5.5v7A2.5 2.5 0 004.5 15h7a2.5 2.5 0 002.5-2.5V9.74c-.3.26-.64.48-1 .66v2.1c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 12.5V10h2.04l.04.17c.06.26.15.53.29.8.47.95 1.34 1.53 2.63 1.53 1.28 0 2.15-.57 2.62-1.5z" fill={primaryFill} /></svg>;
};

export default MailInboxCheckmark16Regular;