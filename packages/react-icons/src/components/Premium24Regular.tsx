import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Premium24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 3c.24 0 .46.12.6.3l.06.1 3.26 6.02.04.1.01.03.02.1v.1c0 .07 0 .14-.02.2l-.05.13-.03.06a.76.76 0 01-.08.1l.06-.07-.02.03-9.25 10.5a.72.72 0 01-.3.24l-.1.03-.08.02L12 21h-.1l-.12-.03a.72.72 0 01-.17-.08h-.01a.67.67 0 01-.13-.1l-9.3-10.55-.02-.04-.04-.06a.74.74 0 01-.1-.3L2 9.75v-.07l.02-.08.02-.1.02-.05.03-.06 3.25-6a.75.75 0 01.56-.38L6 3h12zm-3 7.5H9l3 7.69 3-7.69zm-7.61 0H4.4l5.35 6.07-2.37-6.07zm12.2 0H16.6l-2.37 6.07 5.35-6.07zm-10.62-6H6.44L4.01 9h3.52l1.44-4.5zm4.48 0h-2.9L9.1 9h5.79l-1.44-4.5zm4.1 0h-2.52L16.47 9h3.52l-2.44-4.5z" fill={primaryFill} /></svg>;
};

export default Premium24Regular;