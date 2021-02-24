import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBulletListRtl24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.75 16a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-3.5.5H2.75a.75.75 0 00-.1 1.5h14.6a.75.75 0 00.1-1.5h-.1zm3.5-5.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-3.5.5H2.75a.75.75 0 00-.1 1.5h14.6a.75.75 0 00.1-1.5h-.1zm3.5-5.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-3.5.5H2.75a.75.75 0 00-.1 1.5h14.6a.75.75 0 00.1-1.5h-.1z" fill={primaryFill} /></svg>;
};

export default TextBulletListRtl24Regular;