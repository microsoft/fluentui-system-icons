import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSunny20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 15.8a.5.5 0 01.49.4v1.3a.5.5 0 01-.99.1v-1.3c0-.28.22-.5.5-.5zm4.73-1.78l.07.06.86.86a.5.5 0 01-.63.76l-.07-.05-.86-.86a.5.5 0 01.63-.77zm-8.83.06c.17.17.19.44.06.64l-.06.07-.86.86a.5.5 0 01-.77-.64l.06-.07.86-.86c.2-.2.51-.2.7 0zM10 5.51a4.49 4.49 0 110 8.98 4.49 4.49 0 010-8.98zm7.5 4a.5.5 0 01.09 1h-1.31a.5.5 0 01-.09-.99h1.31zM3.72 9.5a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1h1.31zm1.25-5.2l.07.06.86.86a.5.5 0 01-.64.77l-.07-.06-.86-.86a.5.5 0 01.64-.77zm10.7.06c.17.18.19.45.05.64l-.06.07-.86.86a.5.5 0 01-.76-.64l.06-.07.86-.86c.2-.2.5-.2.7 0zM10 2a.5.5 0 01.5.41v1.3a.5.5 0 01-1 .1V2.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default WeatherSunny20Filled;