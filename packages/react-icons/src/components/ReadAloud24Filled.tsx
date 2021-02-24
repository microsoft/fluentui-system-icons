import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadAloud24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.9 4.56l.04.1 5 14a1 1 0 01-1.84.78l-.04-.1L11.5 15H6.49l-1.55 4.34a1 1 0 01-1.92-.56l.04-.12 5-14a1 1 0 011.79-.2l.05.1zm5.96-2.47a11.72 11.72 0 014.68 4.4A11.72 11.72 0 0122 12.72a.75.75 0 01-1.5-.04c.05-2.1-.37-3.92-1.26-5.46a10.23 10.23 0 00-4.1-3.82.75.75 0 11.72-1.32zm-.24 3.6c.97.53 1.75 1.3 2.32 2.3.57.99.85 2.04.82 3.14a.75.75 0 01-1.5-.03c.02-.82-.18-1.6-.62-2.37a4.42 4.42 0 00-1.73-1.72.75.75 0 01.71-1.32zM9 7.97L7.2 13h3.6L9 7.97z" fill={primaryFill} /></svg>;
};

export default ReadAloud24Filled;