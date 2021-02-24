import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextAsterisk20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 2.5a.5.5 0 00-1 0v6.3L5.05 4.33a.5.5 0 10-.7.71L8.78 9.5H2.5a.5.5 0 000 1h6.3l-4.46 4.45a.5.5 0 10.71.7l4.45-4.44v6.29a.5.5 0 001 0v-6.3l4.45 4.46a.5.5 0 10.7-.71l-4.44-4.45h6.29a.5.5 0 000-1h-6.3l4.46-4.45a.5.5 0 10-.71-.7L10.5 8.78V2.5z" fill={primaryFill} /></svg>;
};

export default TextAsterisk20Regular;