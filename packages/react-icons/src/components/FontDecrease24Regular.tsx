import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FontDecrease24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.58 7.29l.07.09.05.1 3.75 9.5a.75.75 0 01-1.35.64l-.05-.09-1-2.52h-4.1l-1 2.52a.75.75 0 01-.88.45l-.1-.03a.75.75 0 01-.45-.87l.03-.1 3.75-9.5a.75.75 0 011.28-.2zM12 9.8l-1.46 3.7h2.92L12 9.8zm8.88-6.46c.2.31.15.72-.13.97l-.08.07-2.25 1.5a.75.75 0 01-.74.05l-.1-.06-2.25-1.5a.75.75 0 01.74-1.3l.1.06L18 4.35l1.84-1.22a.75.75 0 011.04.2z" fill={primaryFill} /></svg>;
};

export default FontDecrease24Regular;