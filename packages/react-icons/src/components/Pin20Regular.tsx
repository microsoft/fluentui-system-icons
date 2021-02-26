import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Pin20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.12 3.14a2 2 0 013.2-.52l4.06 4.05a2 2 0 01-.52 3.2l-3.46 1.74a1.5 1.5 0 00-.72.78L11.25 16a1 1 0 01-1.64.33L7 13.7 3.7 17H3v-.7L6.3 13l-2.62-2.61a1 1 0 01.34-1.64L7.6 7.32c.34-.14.62-.4.78-.72l1.73-3.46zm2.5.19a1 1 0 00-1.6.26L9.29 7.04a2.5 2.5 0 01-1.31 1.2L4.39 9.69l5.93 5.93 1.43-3.59a2.5 2.5 0 011.2-1.3l3.46-1.74a1 1 0 00.26-1.6l-4.05-4.05z" fill={primaryFill} /></svg>;
};

export default Pin20Regular;