import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Drag24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 16a1 1 0 011 .88V18.58l.3-.29a1 1 0 011.31-.08l.1.08a1 1 0 01.08 1.32l-.08.1-2 2-.05.04-.06.05-.12.08-.1.05-.11.03-.12.03h-.27l-.11-.02-.11-.03-.08-.03-.1-.06-.1-.06a1.01 1.01 0 01-.09-.08l-2-2a1 1 0 011.32-1.5l.1.08.29.3V17a1 1 0 01.88-1H12zm6.3-6.7a1 1 0 011.31-.09l.1.08 2 2 .04.05.05.07.08.1.05.12.03.1.03.12v.27l-.02.11-.03.11-.03.08-.06.1-.07.1-.07.09-2 2a1 1 0 01-1.5-1.32l.08-.1.3-.29H17a1 1 0 01-1-.88V12a1 1 0 01.88-1H18.58l-.29-.3a1 1 0 01-.08-1.31l.08-.1zm-14 0a1 1 0 011.49 1.31l-.08.1-.3.29H7a1 1 0 011 .88V12a1 1 0 01-.88 1H5.4l.3.3a1 1 0 01.08 1.31l-.08.1a1 1 0 01-1.32.08l-.1-.08-2-2-.1-.11-.07-.12-.05-.1-.03-.11-.03-.12v-.06l-.01-.1v-.08l.02-.11.03-.11.04-.11.06-.1.06-.1a1 1 0 01.08-.09l2-2zm7.7-.05a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm-.15-7.24h.32l.14.04.11.04.1.06.1.07.09.07 2 2a1 1 0 01-1.32 1.5l-.1-.08-.29-.3V7a1 1 0 01-.88 1H12a1 1 0 01-1-.88V5.4l-.3.3a1 1 0 01-1.31.08l-.1-.08a1 1 0 01-.08-1.32l.08-.1 2-2 .11-.1.12-.06.1-.06.11-.03.12-.03z" fill={primaryFill} /></svg>;
};

export default Drag24Filled;