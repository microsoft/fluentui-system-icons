import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FontDecrease24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.8 7.4l.07.1.05.12 3.75 9a1 1 0 01-1.8.87l-.04-.1-1-2.39h-3.66l-1 2.38a1 1 0 01-1.2.58l-.1-.04a1 1 0 01-.58-1.2l.04-.1 3.75-9a1 1 0 011.72-.23zm-.8 3.2L11 13h2l-1-2.4zm8.88-7.26c.2.31.15.72-.13.97l-.08.07-2.25 1.5a.75.75 0 01-.74.05l-.1-.06-2.25-1.5a.75.75 0 01.74-1.3l.1.06L18 4.35l1.84-1.22a.75.75 0 011.04.2z" fill={primaryFill} /></svg>;
};

export default FontDecrease24Filled;