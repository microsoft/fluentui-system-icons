import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Broom20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.91 2.18c.2.2.2.51 0 .7L13.3 7.5a5.6 5.6 0 00-.7-.7l4.6-4.62c.2-.2.51-.2.71 0z" fill={primaryFill} /><path d="M12.25 7.84a4.5 4.5 0 00-6.36 0l-.42.42 6.36 6.36.42-.42a4.5 4.5 0 000-6.36z" fill={primaryFill} /><path d="M1.74 10.6l2.9-1.75 6.5 6.5a.5.5 0 00.1.08L9.5 18.35a.5.5 0 01-.78.1l-7.07-7.08a.5.5 0 01.1-.78z" fill={primaryFill} /></svg>;
};

export default Broom20Filled;