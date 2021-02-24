import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Earth16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 8a7 7 0 1114 0A7 7 0 011 8zm7-6h-.05c.09.18.19.4.28.63.24.65.46 1.6.07 2.43-.36.77-.98.97-1.45 1.1h-.07c-.45.13-.64.17-.77.38-.13.2-.1.43.04.9l.03.1c.06.19.13.4.16.6.04.26.06.58-.1.89-.16.3-.38.51-.63.65-.23.13-.47.17-.66.2l-.07.02c-.36.06-.54.1-.71.28-.14.15-.22.4-.27.77l-.05.46v.08l-.07.53-.03.11a5.98 5.98 0 007.4 1.03 3.16 3.16 0 01-.26-.28c-.23-.3-.54-.81-.43-1.41.05-.29.2-.53.35-.72a4.98 4.98 0 01.62-.61l.32-.31.12-.15.04-.05c.05-.17-.01-.3-.09-.35-.05-.04-.2-.1-.44.05l-.26.16a.99.99 0 01-.27.12.53.53 0 01-.63-.36.64.64 0 01-.03-.2 1.15 1.15 0 01.01-.19c.03-.21.07-.52-.06-.98-.1-.37-.23-.66-.38-.94a9.15 9.15 0 01-.2-.42c-.08-.2-.18-.46-.16-.73.02-.32.18-.58.44-.78.32-.24.72-.78 1.06-1.33.17-.27.31-.51.41-.7l.02-.03A5.97 5.97 0 008 2z" fill={primaryFill} /></svg>;
};

export default Earth16Filled;