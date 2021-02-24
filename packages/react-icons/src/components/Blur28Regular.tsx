import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Blur28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 14a11 11 0 0116.55-9.5H14a9.5 9.5 0 100 19V23h6.33A11 11 0 013 14z" fill={primaryFill} /><path d="M20.98 5.5c.55.45 1.05.95 1.5 1.5H14V5.5h6.98z" fill={primaryFill} /><path d="M24.04 9.5c-.23-.52-.5-1.02-.82-1.5H14v1.5h10.04z" fill={primaryFill} /><path d="M24.43 10.5c.16.49.3.99.39 1.5H14v-1.5h10.43z" fill={primaryFill} /><path d="M25 14c0-.34-.02-.67-.04-1H14v1.5h10.99L25 14z" fill={primaryFill} /><path d="M24.9 15.5c-.07.51-.18 1.01-.31 1.5H14v-1.5h10.9z" fill={primaryFill} /><path d="M23.53 19.5c.28-.48.52-.98.72-1.5H14v1.5h9.53z" fill={primaryFill} /><path d="M22.88 20.5c-.4.54-.84 1.04-1.33 1.5H14v-1.5h8.88z" fill={primaryFill} /></svg>;
};

export default Blur28Regular;