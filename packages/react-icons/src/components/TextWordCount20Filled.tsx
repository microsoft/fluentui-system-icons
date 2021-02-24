import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextWordCount20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.98 14.54c-.26.27-.55.51-.86.7a.5.5 0 11-.54-.83 3.33 3.33 0 001.4-1.79.5.5 0 011 .11v5.77a.5.5 0 01-1 0v-3.96z" fill={primaryFill} /><path d="M7.59 13.23c-.63 0-1.1.54-1.1 1.07a.5.5 0 01-1 0 2.1 2.1 0 012.1-2.07c.72 0 1.42.33 1.8.91.42.61.44 1.41-.05 2.21-.24.4-.58.71-.92.97l-.5.35-.07.05-.4.28c-.43.32-.74.6-.88 1h2.59a.5.5 0 010 1H6a.5.5 0 01-.5-.5c0-1.17.7-1.82 1.36-2.3l.43-.3.07-.05.46-.33c.29-.22.51-.44.67-.69.3-.51.24-.89.08-1.13a1.18 1.18 0 00-.98-.47z" fill={primaryFill} /><path d="M12.06 13.5a.92.92 0 00-.28.42.5.5 0 11-.96-.28c.08-.27.25-.62.6-.9.34-.3.83-.5 1.49-.5 1.32 0 2.1.93 2.1 1.8 0 .35-.07.87-.43 1.32a1.8 1.8 0 01-.22.22 1.65 1.65 0 01.65 1.34 2 2 0 01-.68 1.62c-.42.35-.95.46-1.42.46-.45 0-.9-.07-1.27-.3-.39-.24-.65-.6-.81-1.09a.5.5 0 01.94-.32c.1.3.25.46.4.55.15.1.38.16.74.16.33 0 .6-.08.78-.23.17-.14.32-.38.32-.84 0-.2-.05-.32-.11-.41a.78.78 0 00-.32-.24c-.3-.13-.68-.16-.94-.16a.5.5 0 010-1c.71 0 1.02-.22 1.16-.4.16-.19.21-.45.21-.68 0-.28-.29-.8-1.1-.8-.44 0-.7.12-.85.25z" fill={primaryFill} /><path d="M2 9.25c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.25z" fill={primaryFill} /><path d="M2 4.25c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.25z" fill={primaryFill} /><path d="M16 14.25c0-.41.34-.75.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
};

export default TextWordCount20Filled;