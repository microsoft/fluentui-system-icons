import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonCall20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6a4 4 0 118 0 4 4 0 01-8 0zm4-3a3 3 0 100 6 3 3 0 000-6z" fill={primaryFill} /><path d="M2 13a2 2 0 012-2h10a2 2 0 01.81.17c-.1.44-.07.91.1 1.33h-.04A1 1 0 0014 12H4a1 1 0 00-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 009 17c.96 0 1.86-.11 2.65-.33-.14.34-.18.7-.13 1.06-.79.18-1.64.27-2.52.27a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 012 13z" fill={primaryFill} /><path d="M15.83 11.26l.4-.94a.96.96 0 011.08-.59l.1.03.5.16c.49.16.87.58 1 1.11.28 1.27-.07 2.81-1.06 4.63-.99 1.82-2.07 2.9-3.25 3.28a1.4 1.4 0 01-1.32-.27l-.1-.1-.38-.38c-.32-.33-.4-.85-.17-1.26l.05-.09.58-.84a.95.95 0 01.98-.4l.1.02 1.05.35a4.03 4.03 0 001.53-2.46l.03-.22-.88-.83c-.29-.28-.4-.7-.27-1.1l.03-.1z" fill={primaryFill} /></svg>;
};

export default PersonCall20Regular;