import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const InkingTool16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 1.48a.5.5 0 10-1 0v2c0 .82.68 1.5 1.5 1.5h.24l3.28 6.47a1 1 0 00.55.5c-.03.3-.06.66-.06.97 0 .43.1.92.31 1.3.21.4.6.77 1.17.78H8c.58 0 .97-.38 1.18-.77.22-.4.31-.88.31-1.3 0-.32-.03-.68-.06-.99a1 1 0 00.55-.49l3.28-6.47h.25c.83 0 1.5-.68 1.5-1.5v-2a.5.5 0 00-1 0v2a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-2zM8.44 12a7.99 7.99 0 01.06.92c0 .3-.07.61-.19.83-.1.2-.22.25-.3.25-.08 0-.2-.05-.3-.25a1.79 1.79 0 01-.2-.83c0-.26.03-.58.06-.86l.01-.06h.86zm3.7-7.02L9.1 11H6.9L3.86 4.98h8.28z" fill={primaryFill} /></svg>;
};

export default InkingTool16Regular;