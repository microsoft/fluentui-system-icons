import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarThreeQuarter28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.3 3.9L18 9.37l6.01.88a1.45 1.45 0 01.8 2.47l-4.35 4.24 1.03 6a1.45 1.45 0 01-2.1 1.52L14 21.64l-5.38 2.83a1.45 1.45 0 01-2.1-1.52l1.02-6-4.35-4.24c-.86-.84-.39-2.3.8-2.47l6.02-.88 2.7-5.45a1.45 1.45 0 012.6 0zm1.7 6.6v11.03l3 1.57-1.02-5.92c-.08-.47.07-.95.41-1.28l4.3-4.2-5.94-.86a1.45 1.45 0 01-.75-.34z" fill={primaryFill} /></svg>;
};

export default StarThreeQuarter28Filled;