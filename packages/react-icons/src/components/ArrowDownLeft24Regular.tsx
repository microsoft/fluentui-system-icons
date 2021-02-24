import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowDownLeft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.4 20.92a.75.75 0 01-.4-.56v-7.6a.75.75 0 011.5-.11v5.8L19.72 3.21c.27-.27.68-.3.98-.07l.08.07c.27.27.29.68.07.98l-.07.08L5.56 19.5h5.69c.38 0 .7.29.74.65l.01.1c0 .38-.28.7-.65.75H3.7a.72.72 0 01-.23-.05l-.07-.03z" fill={primaryFill} /></svg>;
};

export default ArrowDownLeft24Regular;