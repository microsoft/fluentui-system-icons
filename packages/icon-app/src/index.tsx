import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as fontsModule from '@fluentui/react-icons/lib/fonts';
// @ts-ignore
import * as svgModule from '@fluentui/react-icons/lib/svg';
import { makeStyles } from "@griffel/react";

const fontComponents = filterModuleImports(fontsModule);
const svgComponents = filterModuleImports(svgModule);

function main() {
    const rootDiv = document.createElement('div');
    document.body.append(rootDiv);

    ReactDOM.render(<MainComponent />, rootDiv);


}

const useRootStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
});

function MainComponent() {
    const styles = useRootStyles();
    return (<div className={styles.root}>
        {Object.keys(fontComponents).map(name => <IconCell FontIcon={fontComponents[name]} SvgIcon={svgComponents[name]} name={name} key={name} />)}
    </div>)
}

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

function IconCell({ FontIcon, SvgIcon, name }: { FontIcon: React.ComponentType, SvgIcon: React.ComponentType, name: string }) {
    const styles = useCellStyles()
    return <div className={styles.root}>
        <div className={styles.iconZone}>
            <div className={styles.iconCell}><FontIcon /><span className={styles.sublabel}>font</span></div>
            <div className={styles.iconCell}><SvgIcon /><span className={styles.sublabel}>svg</span></div>
        </div>
        <span className={styles.mainLabel} title={name}>{name}</span>
    </div>
}

function filterModuleImports(mod: Record<string, unknown>): Record<string, React.ComponentType> {
    const importsToFilter = new Set(['wrapIcon', 'bundleIcon', 'useIconState', 'iconFilledClassName', 'iconRegularClassName', 'iconLightClassName', '_esModule']);
    const components: Record<string, React.ComponentType> = {};

    for (const [name, possibleComponent] of Object.entries(mod)) {
        if (!importsToFilter.has(name)) {
            components[name] = possibleComponent as React.ComponentType;
        }
    }

    return components;
}

main();