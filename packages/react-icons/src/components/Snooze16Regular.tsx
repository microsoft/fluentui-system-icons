import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Snooze16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 8h2.5c.4 0 .62.43.43.75l-.05.07L5.07 11H6.5a.5.5 0 01.09 1H4a.5.5 0 01-.43-.75l.05-.07L5.43 9H4a.5.5 0 01-.09-1H6.5 4zm5-5h3.5c.38 0 .6.4.45.71l-.04.08L9.96 8h2.54a.5.5 0 01.09 1H9a.5.5 0 01-.45-.71l.04-.08L11.54 4H9a.5.5 0 01-.09-1h3.59H9z" fill={primaryFill} /></svg>;
};

export default Snooze16Regular;