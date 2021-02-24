import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CubeSync24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.4 2.51a3.75 3.75 0 00-2.8 0L3.1 5.55c-.67.27-1.1.91-1.1 1.63v9.65c0 .71.43 1.35 1.1 1.62l7.5 3.04c.62.25 1.3.33 1.96.23a6.47 6.47 0 01-1.31-6.01v-4.95l-4.77-1.8a.75.75 0 11.54-1.4L12 9.43l4.98-1.89a.75.75 0 01.54 1.4l-4.77 1.81v2.3a6.48 6.48 0 019.25-.25V7.18c0-.72-.43-1.36-1.1-1.63l-7.5-3.04zm9.6 15a5.5 5.5 0 11-11-.01 5.5 5.5 0 0111 0zM14.5 14a.5.5 0 00-.5.5v2c0 .27.22.5.5.5h2a.5.5 0 100-1h-1a2.5 2.5 0 014.03.03.5.5 0 00.8-.59 3.5 3.5 0 00-5.33-.4v-.55a.5.5 0 00-.5-.5zm5.5 5.94v.55a.5.5 0 001 0v-2a.5.5 0 00-.5-.5h-2a.5.5 0 100 1h1a2.5 2.5 0 01-3.91.11.5.5 0 10-.77.65 3.5 3.5 0 005.18.19z" fill={primaryFill} /></svg>;
};

export default CubeSync24Filled;