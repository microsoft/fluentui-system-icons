import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarLineHorizontal320Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.9 2.9a1 1 0 00-1.8 0L7.17 6.8l-4.31.63a1 1 0 00-.56 1.7l3.12 3.05-.73 4.3a1 1 0 001.45 1.05L11 14.98V13.5c0-.83.67-1.5 1.5-1.5a1.5 1.5 0 110-3 1.5 1.5 0 01-.07-3L10.9 2.9z" fill={primaryFill} /><path d="M12.5 10a.5.5 0 000 1h5a.5.5 0 100-1h-5z" fill={primaryFill} /><path d="M12 7.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M12.5 13a.5.5 0 000 1h5a.5.5 0 100-1h-5z" fill={primaryFill} /></svg>;
};

export default StarLineHorizontal320Filled;