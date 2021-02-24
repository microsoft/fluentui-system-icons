import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowCircleUp24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12a10 10 0 10-20 0 10 10 0 0020 0zm-14.53.28a.75.75 0 01-.07-.98l.07-.08 4-4a.75.75 0 01.98-.07l.08.07 4 4a.75.75 0 01-.98 1.13l-.08-.07-2.72-2.72v6.7c0 .37-.28.68-.65.73L12 17a.75.75 0 01-.74-.65l-.01-.1V9.56l-2.72 2.72a.75.75 0 01-.98.07l-.08-.07z" fill={primaryFill} /></svg>;
};

export default ArrowCircleUp24Filled;