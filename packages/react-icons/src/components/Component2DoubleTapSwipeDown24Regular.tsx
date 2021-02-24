import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Component2DoubleTapSwipeDown24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8c.38 0 .7.28.74.65l.01.1v10.7l2.22-2.21a.75.75 0 01.98-.08l.08.08c.27.26.3.68.07.97l-.07.09-3.5 3.5a.75.75 0 01-.98.07l-.08-.07-3.5-3.5a.75.75 0 01.98-1.14l.08.08 2.22 2.21V8.75c0-.41.34-.75.75-.75zm0-6a7 7 0 011.75 13.78v-1.56a5.5 5.5 0 10-3.5 0v1.56A7 7 0 0112 2zm0 2.5a4.5 4.5 0 011.75 8.65v-1.71a3 3 0 10-3.5 0v1.7A4.5 4.5 0 0112 4.5z" fill={primaryFill} /></svg>;
};

export default Component2DoubleTapSwipeDown24Regular;