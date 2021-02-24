import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoreHorizontal48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 24a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z" fill={primaryFill} /><path d="M27.25 24a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z" fill={primaryFill} /><path d="M35.5 27.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z" fill={primaryFill} /></svg>;
};

export default MoreHorizontal48Regular;