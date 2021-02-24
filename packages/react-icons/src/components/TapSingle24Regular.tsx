import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TapSingle24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 6c1.35 0 2.18.97 2.25 2.33v2.29l2.22.4a3.25 3.25 0 012.6 3.86l-.04.18L17.73 19a2.25 2.25 0 01-1.69 1.61l-.16.03-2.42.35a2.25 2.25 0 01-2.28-1.12l-.08-.16-.03-.06c-.24-.5-.59-.95-1.03-1.28l-.2-.14-1.87-1.26-.1-.06-.1-.05-2.36-1.17a.75.75 0 01-.41-.66 2.5 2.5 0 011.41-2.44c.7-.35 1.64-.33 2.83.02l.26.08V8.5c0-1.46.84-2.51 2.25-2.51zm0 1.5c-.46 0-.71.27-.75.87v5.38c0 .54-.54.9-1.04.7-1.46-.6-2.44-.75-2.87-.53a.97.97 0 00-.51.52l-.04.12 1.9.95.18.1.18.1 1.88 1.26a4.97 4.97 0 011.63 1.8l.12.24.03.06c.12.27.39.43.68.43h.1l2.42-.35c.26-.04.48-.2.58-.45l.04-.1 1.05-3.92c.25-.94-.3-1.9-1.24-2.15l-.07-.01-2.9-.53a.75.75 0 01-.61-.63l-.01-.11V8.51c0-.7-.25-1.01-.75-1.01zm0-5a5.75 5.75 0 015.4 7.75L17 10.2a5.6 5.6 0 00-1.34-.3A4.24 4.24 0 0011.75 4a4.25 4.25 0 00-3.25 7c-.32.02-.6.06-.82.11-.36.09-.6.17-.76.27a5.75 5.75 0 014.83-8.88z" fill={primaryFill} /></svg>;
};

export default TapSingle24Regular;