import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookUpLeft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 19.25c0 .41.34.75.75.75H14c1.98 0 3.5-.82 4.52-2.07A7.05 7.05 0 0020 13.5c0-1.58-.48-3.2-1.48-4.43A5.63 5.63 0 0014 7H7.56l2.47-2.47a.75.75 0 10-1.06-1.06L5.22 7.22c-.3.3-.3.77 0 1.06l3.75 3.75a.75.75 0 101.06-1.06L7.56 8.5H14c1.52 0 2.62.61 3.36 1.52a5.56 5.56 0 011.14 3.48c0 1.3-.4 2.56-1.14 3.48A4.13 4.13 0 0114 18.5H7.75a.75.75 0 00-.75.75z" fill={primaryFill} /></svg>;
};

export default ArrowHookUpLeft24Regular;