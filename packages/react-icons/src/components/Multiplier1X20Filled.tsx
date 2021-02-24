import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier1X20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 6.75a.75.75 0 00-1.39-.4l-.04.08a5.3 5.3 0 01-.58.8 4.8 4.8 0 01-1.13.88.75.75 0 10.78 1.28c.34-.2.62-.4.86-.58v4.44a.75.75 0 001.5 0v-6.5zm2.78 3.47a.75.75 0 10-1.06 1.06l.72.72-.72.72a.75.75 0 101.06 1.06l.72-.72.72.72a.75.75 0 101.06-1.06l-.72-.72.72-.72a.75.75 0 00-1.06-1.06l-.72.72-.72-.72z" fill={primaryFill} /></svg>;
};

export default Multiplier1X20Filled;