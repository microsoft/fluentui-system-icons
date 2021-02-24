import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextEffects24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.54 17.93l.02.07c.11.35.17.7.17 1.05 0 .81-.3 1.58-.92 2.17-.56.54-1.28.85-2.07.85-.61 0-1.19-.19-1.68-.52l-.08-.05-.08-.06a3.47 3.47 0 01-.94-1.23l-.02-.04-.86-2.04H9.95l-.81 1.97c-.2.55-.57 1.06-1.1 1.43-.51.36-1.1.54-1.7.54-.65 0-1.46-.18-2.12-.83a2.89 2.89 0 01-.82-2.08c0-.25.04-.53.07-.68l.03-.22L9.2 4.43l.02-.02c.22-.5.58-1 1.12-1.38a2.88 2.88 0 011.89-.5c.55.03 1.1.2 1.58.52.55.37.92.88 1.13 1.45l5.6 13.43zM13.07 5.22a1 1 0 00-.37-.51 1.05 1.05 0 00-.6-.18.89.89 0 00-.63.16c-.18.12-.32.3-.42.53l-5.61 13.6-.04.34c0 .28.08.5.24.66.16.17.4.25.7.25.2 0 .4-.06.55-.18a.9.9 0 00.38-.5l1.34-3.26h6.8l1.36 3.23c.1.22.23.4.4.53.17.12.36.18.57.18.26 0 .49-.1.68-.29.2-.2.3-.43.3-.73 0-.14-.01-.28-.06-.41L13.07 5.22zM12 7.97l2.57 6.16H9.44L12 7.97z" fill={primaryFill} /></svg>;
};

export default TextEffects24Filled;