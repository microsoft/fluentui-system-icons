import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowReplyDown16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.7 8L6.4 5.33a.5.5 0 00-.64-.76l-.07.06-3.56 3.56-.05.08-.03.05-.02.07v.02a.5.5 0 00-.02.1v-.07.12l.02.08.02.07.04.07.05.07 3.55 3.55a.5.5 0 00.77-.63l-.06-.07L3.7 9H8c3.52 0 5.89-1.98 6-4.8v-.2a.5.5 0 00-1 0C13 6.27 11.2 7.9 8.26 8H3.7L6.4 5.33 3.7 8.01z" fill={primaryFill} /></svg>;
};

export default ArrowReplyDown16Regular;