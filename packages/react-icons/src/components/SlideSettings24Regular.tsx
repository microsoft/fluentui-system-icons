import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideSettings24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 4A2.75 2.75 0 002 6.75v10.5A2.75 2.75 0 004.75 20h6.75c-.2-.47-.34-.98-.42-1.5H4.75c-.69 0-1.25-.56-1.25-1.25V6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v4.98c.55.29 1.06.65 1.5 1.08V6.75A2.75 2.75 0 0019.25 4H4.75zm9.53 9.98a2 2 0 01-1.44 2.5l-.59.14a5.73 5.73 0 000 1.8l.55.13a2 2 0 011.45 2.51l-.19.63c.44.39.94.7 1.49.93l.49-.52a2 2 0 012.9 0l.5.52a5.28 5.28 0 001.48-.91l-.2-.69a2 2 0 011.44-2.5l.59-.14a5.72 5.72 0 000-1.8l-.55-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 01-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7zM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
};

export default SlideSettings24Regular;