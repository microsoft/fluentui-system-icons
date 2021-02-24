import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const InkingToolAccent20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 3H14v3h2a.5.5 0 00.5-.5V3zM13 6V3H3.5v2.5c0 .28.22.5.5.5h9zm-.55 1l-2.4 4.78a.5.5 0 10.9.44L13.56 7h-1.11zM9.5 15.5c0-.18 0-.35.02-.5h.96l.02.5c0 .52-.07.94-.19 1.21-.11.26-.22.29-.31.29-.1 0-.2-.03-.31-.29a3.17 3.17 0 01-.19-1.21z" fill={primaryFill} /></svg>;
};

export default InkingToolAccent20Filled;