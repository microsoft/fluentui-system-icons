import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSort28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.22 9.97l5.75-5.75.08-.07.06-.04.08-.04.1-.04.1-.02h.06L8.5 4h.06l.09.01.1.03.1.04.05.03.06.05.07.06 5.75 5.75a.75.75 0 01-.98 1.13l-.08-.07-4.47-4.47v16.69a.75.75 0 01-1.5.1V6.56l-4.47 4.47a.75.75 0 01-.98.07l-.08-.07a.75.75 0 01-.07-.98l.07-.08zM19.5 4c.38 0 .7.28.74.65l.01.1v16.69l4.47-4.47.08-.07a.75.75 0 011.05 1.05l-.07.08-5.73 5.73a.75.75 0 01-1.03.07l-.07-.07-5.73-5.73-.07-.08a.75.75 0 01-.01-.89l.08-.09.08-.07c.26-.2.62-.2.89-.01l.09.08 4.47 4.47V4.65A.75.75 0 0119.5 4z" fill={primaryFill} /></svg>;
};

export default ArrowSort28Regular;