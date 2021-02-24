import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextEditStyle24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.06 8.45a3.22 3.22 0 010 4.55l-7.12 7.1c-.26.27-.59.46-.94.57l-4.3 1.29a1 1 0 01-1.24-1.27l1.36-4.22c.11-.34.3-.65.56-.9l7.13-7.13a3.22 3.22 0 014.55 0zm-3.5 1.05l-7.12 7.13a.75.75 0 00-.19.3l-1.07 3.32 3.38-1.02c.12-.03.23-.1.32-.18L19 11.94a1.72 1.72 0 10-2.43-2.44zm-8.4-7.13l.04.1 3.25 8.25-1.15 1.16L9.56 10H5.44l-1 2.52a.75.75 0 01-.87.45l-.1-.03a.75.75 0 01-.45-.87l.03-.1 3.76-9.5a.75.75 0 011.34-.1zM7.5 4.79L6.04 8.5h2.92L7.5 4.8z" fill={primaryFill} /></svg>;
};

export default TextEditStyle24Regular;