import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabInprivateAccount20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h4.66c-.1-.33-.16-.69-.16-1.06v-.32c0-.68.29-1.3.69-1.76.4-.44 1.02-.84 1.81-.86h.05A3.49 3.49 0 0115 7c.74 0 1.43.23 2 .63V5.5A2.5 2.5 0 0014.5 3h-9z" fill={primaryFill} /><path d="M12.55 14h4.9c.46 0 .86.24 1.12.53.12.14.22.3.3.47H15v1h4c0 .35-.1.68-.24 1H15v1h2.99c-.71.6-1.75 1-2.99 1-2.37 0-4-1.43-4-3.06v-.32c0-.4.17-.8.43-1.1.27-.28.66-.52 1.12-.52z" fill={primaryFill} /><path d="M12.5 10.5A2.5 2.5 0 0017 12h-2v-1h2.45a2.51 2.51 0 000-1H15V9h2a2.5 2.5 0 00-4.5 1.5z" fill={primaryFill} /></svg>;
};

export default TabInprivateAccount20Filled;