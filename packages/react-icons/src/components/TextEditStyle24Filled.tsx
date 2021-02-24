import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextEditStyle24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.06 8.45a3.22 3.22 0 010 4.55l-7.11 7.1c-.27.27-.61.47-.98.57l-4.61 1.3a.75.75 0 01-.92-.94l1.38-4.54c.11-.35.3-.67.56-.93l7.13-7.12a3.22 3.22 0 014.55 0zM8.16 2.37l.04.1 3.25 8.25-1.15 1.16L9.56 10H5.44l-1 2.52a.75.75 0 01-.87.45l-.1-.03a.75.75 0 01-.45-.87l.03-.1 3.76-9.5a.75.75 0 011.34-.1zM7.5 4.79L6.04 8.5h2.92L7.5 4.8z" fill={primaryFill} /></svg>;
};

export default TextEditStyle24Filled;