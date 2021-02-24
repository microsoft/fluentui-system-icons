import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NetworkCheck24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.05 15.42l6.26-8.48a.7.7 0 011.23.57l-.03.1-3.87 9.8a2.07 2.07 0 11-3.74-1.76l.07-.12.08-.11 6.26-8.48-6.26 8.48zm3.8-2.62l-2.6 3.51-.03.06a.57.57 0 00.22.78l.07.03c.26.1.55 0 .7-.24l.04-.08 1.6-4.06zm-1.75-1.93l-1.23 1.66a3.33 3.33 0 00-2.29 3.03.75.75 0 01-1.5-.07 4.82 4.82 0 015.02-4.62zm4.17 2.75c.28.59.43 1.22.46 1.87a.75.75 0 01-1.38.44l.92-2.3zm-2.24-5.37l-.96 1.31a6.22 6.22 0 00-7.16 4.41.75.75 0 01-1.44-.4 7.7 7.7 0 019.56-5.32zm3.51 2.14a7.65 7.65 0 011.8 3.15.75.75 0 01-1.44.42 6.23 6.23 0 00-.88-1.84l-.1-.14.62-1.59zm-1.56-4.54l-.09.06c-.12.08-.23.18-.33.3l-.1.11-.54.73a9.14 9.14 0 00-11.54 5.32.75.75 0 11-1.4-.54 10.64 10.64 0 0114-5.97zm2.63 1.56a10.65 10.65 0 013.22 4.41.75.75 0 11-1.4.55 9.17 9.17 0 00-2.32-3.4l.38-.97c.07-.2.11-.39.12-.59z" fill={primaryFill} /></svg>;
};

export default NetworkCheck24Regular;