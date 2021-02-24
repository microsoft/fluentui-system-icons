import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowForward20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.4 5.31l.07-.08a.75.75 0 01.98-.08l.08.08 4.25 4.24c.26.27.29.68.07.98l-.07.08-4.25 4.24a.75.75 0 01-1.13-.97l.07-.09 2.96-2.96H2.75a.75.75 0 01-.74-.65L2 10c0-.38.28-.7.65-.74l.1-.01h12.68l-2.96-2.96a.75.75 0 01-.07-.98l.07-.08-.07.08z" fill={primaryFill} /></svg>;
};

export default ArrowForward20Filled;