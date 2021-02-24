import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HomePerson24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.55 2.53c.84-.7 2.06-.7 2.9 0l6.75 5.7c.5.42.8 1.05.8 1.71v2.82a2.99 2.99 0 00-1.5-.72v-2.1c0-.22-.1-.43-.27-.57l-6.75-5.7a.75.75 0 00-.96 0l-6.75 5.7a.75.75 0 00-.27.57v9.8c0 .15.11.26.25.26h3.5c.14 0 .25-.11.25-.25v-5.5c0-.97.78-1.75 1.75-1.75h3.5c.97 0 1.75.78 1.75 1.75v2.88c-.87.3-1.5 1.14-1.5 2.12v-5a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25v5.5c0 .96-.78 1.75-1.75 1.75h-3.5C3.78 21.5 3 20.7 3 19.75v-9.8c0-.67.3-1.3.8-1.73l6.75-5.69zM19 13a2 2 0 100 4 2 2 0 000-4zm-4 6.25c0-.69.56-1.25 1.25-1.25h5.5c.69 0 1.25.56 1.25 1.25v.3a2.03 2.03 0 01-.07.45c-.06.29-.2.66-.46 1.04-.54.78-1.58 1.46-3.47 1.46-1.89 0-2.93-.68-3.47-1.46a2.99 2.99 0 01-.53-1.49v-.3z" fill={primaryFill} /></svg>;
};

export default HomePerson24Regular;