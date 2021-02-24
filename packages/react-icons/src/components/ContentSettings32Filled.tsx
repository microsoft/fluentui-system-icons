import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ContentSettings32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4a5 5 0 00-5 5v14a5 5 0 005 5h5a9.88 9.88 0 01-1.37-2.5H9A2.5 2.5 0 016.5 23V10h19v2.63A10 10 0 0128 14V9a5 5 0 00-5-5H9zm7 10v-1a1 1 0 00-1-1H9a1 1 0 00-1 1v10a1 1 0 001 1h3.2c-.13-.65-.2-1.32-.2-2h-2v-8h4v2c.57-.76 1.25-1.43 2-2zm4.67 16.35l-.03-.16a4 4 0 00-5.02-2.9c-.56-.71-1-1.53-1.31-2.41a4 4 0 000-5.76c.3-.88.75-1.7 1.31-2.41a4 4 0 005.02-2.9l.03-.16a7.97 7.97 0 012.66 0l.03.16a4 4 0 005.02 2.9c.56.71 1 1.53 1.31 2.41a4 4 0 000 5.76c-.3.88-.75 1.7-1.31 2.41a4 4 0 00-5.02 2.9l-.03.16a7.97 7.97 0 01-2.66 0zM22 24.31A2.27 2.27 0 0024.23 22c0-1.27-1-2.3-2.23-2.3a2.27 2.27 0 00-2.23 2.3c0 1.27 1 2.3 2.23 2.3z" fill={primaryFill} /></svg>;
};

export default ContentSettings32Filled;