import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiselect20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.82 3.12c.21.17.24.49.06.7l-2.5 3a.5.5 0 01-.66.1l-1.5-1a.5.5 0 01.56-.84l1.12.75 2.22-2.65a.5.5 0 01.7-.06z" fill={primaryFill} /><path d="M18 5.5a.5.5 0 01-.5.5h-9a.5.5 0 010-1h9c.28 0 .5.22.5.5z" fill={primaryFill} /><path d="M18 15.5a.5.5 0 01-.5.5h-9a.5.5 0 010-1h9c.28 0 .5.22.5.5z" fill={primaryFill} /><path d="M17.5 11a.5.5 0 000-1h-9a.5.5 0 000 1h9z" fill={primaryFill} /><path d="M6.88 13.82a.5.5 0 00-.76-.64L3.9 15.83l-1.12-.75a.5.5 0 10-.56.84l1.5 1c.22.14.5.1.66-.1l2.5-3z" fill={primaryFill} /></svg>;
};

export default Multiselect20Regular;