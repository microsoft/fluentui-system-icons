import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FoodPizza20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={21} viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.95c0-1.1.9-2.02 2.03-1.95 4.45.27 8.35 1.77 11.4 4.69.87.83.7 2.18-.2 2.87l-.25.18-.4-.44A16.37 16.37 0 004.88 5.5H4v-.56zm0 1.56V17.5a1.5 1.5 0 002.4 1.2L8 17.5a1 1 0 002 0v-2a.5.5 0 011-.06V16a1 1 0 002 0v-2.24c.82-.6 2.09-1.56 3.19-2.4l-.33-.37A15.37 15.37 0 004.87 6.5H4zm4.25 2.74a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.97 2a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-2.96 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /></svg>;
};

export default FoodPizza20Filled;