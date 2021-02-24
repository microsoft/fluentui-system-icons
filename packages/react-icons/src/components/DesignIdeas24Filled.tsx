import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DesignIdeas24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.57 2.07c.26.13.43.4.43.68 0 .83.31 1.3.7 1.89l.03.04c.33.5.77 1.14.77 2.07 0 .95-.48 1.78-1.2 2.27.19.16.36.36.5.6.48.77.7 1.94.7 3.63 0 1.72-.23 3.77-.6 5.41-.2.82-.42 1.57-.7 2.14a3 3 0 01-.5.77c-.21.21-.53.43-.95.43-.42 0-.74-.22-.94-.43a3 3 0 01-.51-.77c-.28-.57-.5-1.32-.7-2.14-.37-1.64-.6-3.7-.6-5.4 0-1.7.22-2.87.7-3.64.14-.24.31-.44.5-.6A2.75 2.75 0 012 6.75c0-.37 0-1 .38-1.82a8.1 8.1 0 012.4-2.77.75.75 0 01.8-.09z" fill={primaryFill} /><path d="M10 14.92a5.96 5.96 0 01-1.53-.48 23.1 23.1 0 000-2.35c.43.37.96.64 1.53.78V10.5c0-.83.67-1.5 1.5-1.5H15a4 4 0 00-6.58-3.05 5 5 0 00-.84-1.8l-.04-.05A6 6 0 0117 9h3.5c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-4.58zm2 0V19h8v-8h-3.34A6 6 0 0112 14.92zM14.46 11H12v1.87A4 4 0 0014.46 11z" fill={primaryFill} /></svg>;
};

export default DesignIdeas24Filled;