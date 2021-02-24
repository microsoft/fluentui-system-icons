import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Connector24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 4c.38 0 .7.28.74.65l.01.1v2.77l1.87 2.82c.07.1.1.2.12.3l.01.11v4.5c0 .38-.28.7-.65.74l-.1.01H9v3.25a.75.75 0 01-1.5.1V16h-2v3.26a.75.75 0 01-1.5.1V16H2.75a.75.75 0 01-.74-.65v-4.6c0-.1.02-.22.06-.32l.06-.1L4 7.54V4.74a.75.75 0 011.5-.1v3.1c0 .11-.02.22-.07.32l-.05.1-1.88 2.81v3.52h6v-3.52L7.63 8.17a.75.75 0 01-.12-.31l-.01-.11v-3c0-.41.34-.75.75-.75zm7 0h4.5c.38 0 .7.28.74.65l.01.1V8h.75c.38 0 .7.28.74.65l.01.1v4.5c0 .1-.02.22-.07.32l-.06.1-1.87 2.8v2.78a.75.75 0 01-1.5.1v-3.1c0-.11.02-.22.07-.32l.06-.1 1.87-2.81V9.5h-6v3.52l1.88 2.81c.06.1.1.2.11.31l.01.11v3a.75.75 0 01-1.5.1v-2.87l-1.87-2.82a.75.75 0 01-.12-.3V8.75c0-.38.27-.7.64-.74l.1-.01h.75V4.75c0-.38.29-.7.65-.74h4.6-4.5zM19 5.5h-3V8h3V5.5z" fill={primaryFill} /></svg>;
};

export default Connector24Regular;