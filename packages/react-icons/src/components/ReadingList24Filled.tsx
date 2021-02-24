import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadingList24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 18a1 1 0 01.12 2H7a1 1 0 01-.12-2H20zm-3-3a1 1 0 01.12 2H4a1 1 0 01-.12-2H17zm3-3a1 1 0 01.12 2H7a1 1 0 01-.12-2H20zM6 5a3 3 0 012.78 1.87 1 1 0 01-1.8.86l-.05-.1A1 1 0 106 9h11.5a1 1 0 01.12 2H6a3 3 0 010-6zm14 1a1 1 0 01.12 2H11a1 1 0 01-.12-2H20z" fill={primaryFill} /></svg>;
};

export default ReadingList24Filled;