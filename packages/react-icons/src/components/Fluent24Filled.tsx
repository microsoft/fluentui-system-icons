import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fluent24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.41 2.5h.13l.11.02.07.03 6 3a.5.5 0 010 .9L13.62 9l5.1 2.55a.5.5 0 010 .9l-5.76 2.84.04 5.7a.5.5 0 01-.75.44l-6-3.5A.5.5 0 016 17.5V5.96l.02-.1.02-.06.01-.03a.5.5 0 01.06-.09l.07-.06.07-.05 6.08-3.04.08-.02z" fill="#000" /></svg>;
};

export default Fluent24Filled;