import * as React from 'react';
import { makeStyles } from "@griffel/react";

const useCellStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'end',
        height: '120px',
        width: '120px',
        backgroundColor: "#ccc",
        marginLeft: '5px',
        marginRight: '5px',
        marginTop: '5px',
        marginBottom: '5px'
    },
    iconZone: {
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'center'
    },
    iconCell: {
        backgroundColor: '#fff',
        flexBasis: '50%',
        flexShrink: '1',
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'end',
        fontSize: '40px',
        marginLeft: '5px',
        marginRight: '5px',
        marginTop: '5px',
        marginBottom: '5px'
    },
    sublabel: {
        display: 'inline-block',
        fontSize: '14px',
        height: '20px'
    },
    mainLabel: {
        fontSize: '14px',
        overflowX: 'hidden',
        textOverflow: 'ellipsis',
        marginLeft: '5px',
        marginRight: '5px',
        marginTop: '5px',
        marginBottom: '5px'
    }
});

export function IconCell({ FontIcon, SvgIcon, name }: { FontIcon?: React.ComponentType, SvgIcon?: React.ComponentType, name: string }) {
    const styles = useCellStyles();

    return <div className={styles.root}>
        <div className={styles.iconZone}>
            <div className={styles.iconCell}>
                {FontIcon ? <FontIcon /> : <span>N/A</span>}
                <span className={styles.sublabel}>font</span>
            </div>
            <div className={styles.iconCell}>
                {SvgIcon ? <SvgIcon /> : <span>N/A</span>}
                <span className={styles.sublabel}>svg</span>
            </div>
        </div>
        <span className={styles.mainLabel} title={name}>{name}</span>
    </div>
}