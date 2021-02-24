import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Flag48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 10.5h22.1l-4.19 7.38c-.21.39-.21.85 0 1.24l4.2 7.38H12.5v-16zm0 18.5h24.25c.96 0 1.56-1.03 1.09-1.87l-4.9-8.63 4.9-8.63A1.25 1.25 0 0036.75 8h-25.5C10.56 8 10 8.56 10 9.25v29.5a1.25 1.25 0 102.5 0V29z" fill={primaryFill} /></svg>;
};

export default Flag48Regular;