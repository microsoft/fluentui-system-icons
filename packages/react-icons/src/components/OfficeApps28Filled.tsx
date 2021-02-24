import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OfficeApps28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 20a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm8.5 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-17 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm8.5-8.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm8.5 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-17 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM14 3a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm8.5 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-17 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /></svg>;
};

export default OfficeApps28Filled;