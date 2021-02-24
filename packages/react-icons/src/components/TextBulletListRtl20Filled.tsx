import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBulletListRtl20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 6.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM13 5.25a.75.75 0 00-.75-.75h-9.5a.75.75 0 000 1.5h9.5c.41 0 .75-.34.75-.75zM12.25 9a.75.75 0 010 1.5h-9.5a.75.75 0 010-1.5h9.5zm0 4.5a.75.75 0 010 1.5h-9.5a.75.75 0 010-1.5h9.5zm3.25-3.75a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm1.25 5.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" fill={primaryFill} /></svg>;
};

export default TextBulletListRtl20Filled;