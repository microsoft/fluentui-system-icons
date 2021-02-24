import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadingList24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 18h13a.75.75 0 01.1 1.5H7a.75.75 0 01-.1-1.5H7zm10-3a.75.75 0 01.1 1.5H4a.75.75 0 01-.1-1.5H17zm3-3a.75.75 0 01.1 1.5H7a.75.75 0 01-.1-1.5H20zM6 5c1.13 0 2.13.69 2.55 1.72a.75.75 0 01-1.35.65l-.04-.09A1.25 1.25 0 106 9h11.5a.75.75 0 01.1 1.5H6A2.75 2.75 0 016 5zm14 1a.75.75 0 01.1 1.5H11a.75.75 0 01-.1-1.5H20z" fill={primaryFill} /></svg>;
};

export default ReadingList24Regular;