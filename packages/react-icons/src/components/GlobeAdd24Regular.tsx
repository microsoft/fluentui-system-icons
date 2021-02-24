import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GlobeAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM12 2a10 10 0 019.97 10.78 6.52 6.52 0 00-1.47-1.05v.18-.32a8.5 8.5 0 00-.23-1.59H16.9l.07 1.02c-.52.04-1.02.14-1.49.3-.01-.45-.05-.9-.1-1.32H8.6a18.97 18.97 0 00.14 5h2.76c-.2.48-.34.98-.42 1.5H9.06c.6 2.22 1.6 3.74 2.66 3.97a6.5 6.5 0 001.06 1.5A10 10 0 1112 2zm5.5 12h-.09a.5.5 0 00-.4.4l-.01.1V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09zm-9.99 2.5H4.79a8.53 8.53 0 004.1 3.41 11.41 11.41 0 01-1.38-3.4zM3.74 10v.02a8.52 8.52 0 00.3 4.98h3.18a20.3 20.3 0 01-.13-5H3.75h-.01zm5.14-5.9h-.02a8.53 8.53 0 00-4.6 4.4H7.3c.31-1.75.86-3.28 1.58-4.4zM12 3.5h-.11c-1.27.12-2.5 2.12-3.06 5h6.34c-.58-2.96-1.86-5-3.17-5zm3.12.6l.1.16A12.64 12.64 0 0116.7 8.5h3.05c-.9-2-2.57-3.6-4.63-4.4z" fill={primaryFill} /></svg>;
};

export default GlobeAdd24Regular;