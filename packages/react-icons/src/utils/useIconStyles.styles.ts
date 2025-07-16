import { makeStyles } from "@griffel/react";

export const useStyles = makeStyles({
    root: {
        display: 'inline',
        lineHeight: 0,

        "@media (forced-colors: active)": {
          forcedColorAdjust: 'auto',
        }
    },
    rtl : {
      transform: 'scaleX(-1)'
    }
});