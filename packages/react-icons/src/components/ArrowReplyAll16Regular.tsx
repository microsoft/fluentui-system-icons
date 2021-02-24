import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowReplyAll16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.39 3.61c.17.17.2.44.06.64l-.06.07L6.7 7H8c3.52 0 5.89 1.98 6 4.8v.2a.5.5 0 01-1 0c0-2.27-1.8-3.9-4.74-4H6.7l2.69 2.68a.5.5 0 01-.64.77l-.07-.06-3.56-3.57-.05-.07-.03-.06-.02-.06L5 7.57v-.2l.03-.06.04-.08.05-.07 3.55-3.55c.2-.2.51-.2.7 0zM2.15 7.15l3.5-3.5a.5.5 0 01.76.63l-.06.07L3.21 7.5l3.14 3.15a.5.5 0 01-.63.76l-.07-.06-3.5-3.5a.5.5 0 01-.06-.63l.06-.07 3.5-3.5-3.5 3.5z" fill={primaryFill} /></svg>;
};

export default ArrowReplyAll16Regular;