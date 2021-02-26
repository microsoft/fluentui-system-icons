import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignCenterHorizontal48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M44 24.25c0 .69-.56 1.25-1.25 1.25H40v6.25C40 34.1 38.1 36 35.75 36h-5.5A4.25 4.25 0 0126 31.75V25.5h-4v10.25C22 38.1 20.1 40 17.75 40h-5.5A4.25 4.25 0 018 35.75V25.5H5.25a1.25 1.25 0 110-2.5H8V12.25C8 9.9 9.9 8 12.25 8h5.5C20.1 8 22 9.9 22 12.25V23h4v-6.75C26 13.9 27.9 12 30.25 12h5.5C38.1 12 40 13.9 40 16.25V23h2.75c.69 0 1.25.56 1.25 1.25z" fill={primaryFill} /></svg>;
};

export default AlignCenterHorizontal48Filled;