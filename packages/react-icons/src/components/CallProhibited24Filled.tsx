import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallProhibited24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.93 5.66c-1.96-1.73-5.02-2.6-9.18-2.59-4.16 0-7.13.88-8.9 2.6a2.82 2.82 0 00-.73 2.86l.31 1.03a2.17 2.17 0 002.28 1.51l2.03-.2a1.9 1.9 0 001.71-1.55l.4-2.2a8.1 8.1 0 016.22-.18l.64 2.35c.22.85.98 1.48 1.87 1.57l2.05.2c1.03.1 1.94-.56 2.12-1.53l.2-1.04c.2-1.02-.2-2.1-1.02-2.83z" fill={primaryFill} /><path d="M12 22a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0-1.5a4 4 0 003.3-6.25l-5.55 5.56c.64.44 1.42.69 2.25.69zm-3.3-1.75l5.55-5.56a4 4 0 00-5.56 5.56z" fill={primaryFill} /></svg>;
};

export default CallProhibited24Filled;