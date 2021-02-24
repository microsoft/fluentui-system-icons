import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUpload20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 3a.5.5 0 00.09-1H4a.5.5 0 00-.09 1H15zM9.5 18a.5.5 0 00.5-.41V5.7l3.64 3.65c.17.18.44.2.64.06l.07-.06a.5.5 0 00.06-.63l-.06-.07-4.5-4.5A.5.5 0 009.6 4L9.5 4a.5.5 0 00-.4.2L4.64 8.64a.5.5 0 00.64.76l.07-.06L9 5.71V17.5c0 .28.22.5.5.5z" fill={primaryFill} /></svg>;
};

export default ArrowUpload20Regular;