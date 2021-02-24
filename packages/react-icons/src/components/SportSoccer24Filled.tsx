import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SportSoccer24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8.24 4.37l3.01 1.8v2.2l-2.79 2.02-2.04-.7-.59-3.54a8.53 8.53 0 012.41-1.78zm-4.62 9.07l2.33-2.33 2.04.7 1.08 3.34-.97 1.58-3.3-.2c-.58-.92-.99-1.97-1.18-3.1zm6.91 6.93l-1.18-2.8.96-1.57h3.37l.91 1.58-1.04 2.78a8.55 8.55 0 01-3.02.01zm8.36-3.4l-3.02-.18-.94-1.63 1.09-3.34 2.01-.7 2.31 2.52a8.46 8.46 0 01-1.45 3.34zm-.72-10.81l-.59 3.53-2.04.7-2.79-2.02v-2.2l3-1.8a8.53 8.53 0 012.42 1.79z" fill={primaryFill} /></svg>;
};

export default SportSoccer24Filled;