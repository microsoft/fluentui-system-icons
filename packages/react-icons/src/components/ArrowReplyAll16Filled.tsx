import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowReplyAll16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.32 3.18c.26.27.29.69.07.98l-.07.09L7.06 6.5h1.19c3.65 0 6.13 2.08 6.25 5.04v.21a.75.75 0 01-1.5 0C13 9.62 11.3 8.09 8.5 8H7.07l2.26 2.26a.75.75 0 01-.98 1.13l-.08-.07-3.54-3.54-.07-.08-.04-.06-.05-.1-.03-.08-.02-.07v-.06l-.01-.1v-.06l.02-.09.03-.1.05-.1.03-.05.03-.04.06-.07 3.54-3.54c.29-.29.76-.29 1.06 0zm-8.1 3.54l3.5-3.5a.75.75 0 011.13.98l-.07.08-2.97 2.97 2.97 2.97a.75.75 0 01-.98 1.13l-.08-.07-3.5-3.5a.75.75 0 01-.07-.98l.07-.08 3.5-3.5-3.5 3.5z" fill={primaryFill} /></svg>;
};

export default ArrowReplyAll16Filled;