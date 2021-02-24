import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBulletListLtr24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.25 16a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm3.5.5h14.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h14.6-14.5zM3.25 11a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm3.5.5h14.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h14.6-14.5zM3.25 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm3.5.5h14.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h14.6-14.5z" fill={primaryFill} /></svg>;
};

export default TextBulletListLtr24Regular;