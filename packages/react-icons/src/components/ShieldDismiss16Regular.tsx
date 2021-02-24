import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShieldDismiss16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.65 2.15c.2-.2.5-.2.7 0A5.71 5.71 0 0012.5 4a.5.5 0 01.5.41V7.5c0 3.22-1.64 5.4-4.84 6.47a.5.5 0 01-.32 0C4.74 12.94 3.1 10.85 3 7.8V4.5c0-.28.22-.5.5-.5 1.53 0 2.9-.61 4.15-1.85zM8 3.19a6.7 6.7 0 01-3.71 1.76L4 4.98V7.5c0 2.64 1.22 4.4 3.74 5.37l.26.1.26-.1c2.43-.93 3.65-2.61 3.74-5.1V4.98a6.64 6.64 0 01-4-1.8zM6.09 6.22l.06-.07a.5.5 0 01.64-.06l.07.06L8 7.29l1.15-1.14a.5.5 0 01.64-.06l.07.06c.17.17.19.44.05.63l-.06.07L8.71 8l1.14 1.15c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06L8 8.71 6.85 9.85a.5.5 0 01-.63.06l-.07-.06a.5.5 0 01-.06-.63l.06-.07L7.29 8 6.15 6.85a.5.5 0 01-.06-.63l.06-.07-.06.07z" fill={primaryFill} /></svg>;
};

export default ShieldDismiss16Regular;