import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FontIncrease24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.6 4.28l.05.09.05.1 5.37 13.5a.75.75 0 01-1.35.65l-.04-.1-1.6-4.02H8.93l-1.6 4.03a.75.75 0 01-.89.45l-.1-.03a.75.75 0 01-.44-.88l.03-.1 5.38-13.5a.75.75 0 011.28-.2zm-.6 2.5L9.53 13h4.96l-2.47-6.22zm5.68-3.71c.2-.1.44-.1.64 0l.1.06 2.25 1.5.08.06a.75.75 0 01-.82 1.24l-.1-.06L18 4.65l-1.84 1.22-.1.06a.75.75 0 01-.81-1.24l.08-.07 2.26-1.5.1-.05z" fill={primaryFill} /></svg>;
};

export default FontIncrease24Regular;