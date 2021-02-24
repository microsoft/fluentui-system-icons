import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FontDecrease20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.05 3.28a.5.5 0 01.67-.23l1.78.9 1.78-.9a.5.5 0 11.44.9l-2 1a.5.5 0 01-.44 0l-2-1a.5.5 0 01-.23-.67z" fill={primaryFill} /><path d="M10 4.75c.3 0 .59.19.7.48l3.5 9a.75.75 0 01-1.4.54l-.98-2.52H8.18l-.98 2.52a.75.75 0 01-1.4-.54l3.5-9a.75.75 0 01.7-.48zm-1.24 6h2.48L10 7.57l-1.24 3.18z" fill={primaryFill} /></svg>;
};

export default FontDecrease20Filled;