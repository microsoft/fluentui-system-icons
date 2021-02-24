import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonCall20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /><path d="M4 11a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18c.88 0 1.73-.09 2.52-.27-.06-.43.02-.88.23-1.27l.01-.02.08-.14.59-.86c.44-.66 1.23-1 2.02-.83l.02.01.16.04.53.18a3.2 3.2 0 00.7-1.2l-.48-.46a2.07 2.07 0 01-.57-2A2 2 0 0014 11H4z" fill={primaryFill} /><path d="M15.83 11.26l.4-.94a.96.96 0 011.08-.59l.1.03.5.16c.49.16.87.58 1 1.11.28 1.27-.07 2.81-1.06 4.63-.99 1.82-2.07 2.9-3.25 3.28a1.4 1.4 0 01-1.32-.27l-.1-.1-.38-.38c-.32-.33-.4-.85-.17-1.26l.05-.09.58-.84a.95.95 0 01.98-.4l.1.02 1.05.35a4.03 4.03 0 001.53-2.46l.03-.22-.88-.83c-.29-.28-.4-.7-.27-1.1l.03-.1z" fill={primaryFill} /></svg>;
};

export default PersonCall20Filled;