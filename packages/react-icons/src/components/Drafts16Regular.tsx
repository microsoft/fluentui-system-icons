import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Drafts16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.27 2a2.62 2.62 0 113.71 3.7l-7.47 7.5a1.5 1.5 0 01-.55.35l-3.97 1.41a.75.75 0 01-.96-.96l1.42-3.96c.08-.2.2-.4.35-.55L10.27 2zm3 .7a1.62 1.62 0 00-2.3 0l-.77.79 2.29 2.3.78-.8c.64-.63.64-1.65 0-2.29zm-1.49 3.8L9.5 4.2l-5.98 6a.5.5 0 00-.11.18l-1.25 3.46 3.47-1.24a.5.5 0 00.19-.11l5.97-6z" fill={primaryFill} /><path d="M8.86 2H1.5a.5.5 0 000 1h6.36l1-1z" fill={primaryFill} /><path d="M6.86 4H1.5a.5.5 0 000 1h4.37l1-1z" fill={primaryFill} /><path d="M4.87 6H1.5a.5.5 0 000 1h2.37l1-1z" fill={primaryFill} /></svg>;
};

export default Drafts16Regular;