import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const IosArrowLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.73 3.69a1 1 0 10-1.46-1.38l-8.5 9a1 1 0 000 1.38l8.5 9a1 1 0 101.46-1.38L4.88 12l7.85-8.31z" fill={primaryFill} /></svg>;
};

export default IosArrowLeft24Filled;