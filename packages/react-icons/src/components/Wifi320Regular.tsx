import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wifi320Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.89 11.85c.35.36.64.8.85 1.26a.5.5 0 11-.92.4 3.03 3.03 0 00-5.56-.01.5.5 0 01-.92-.4 4.03 4.03 0 016.54-1.24zm-1.93 1.94a1.3 1.3 0 11-1.83 1.83 1.3 1.3 0 011.83-1.83z" fill={primaryFill} /></svg>;
};

export default Wifi320Regular;