import {tailwind} from "@theme-ui/presets"
import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";

const headingStyles = {
    h1: {
        ...tailwind.styles.h1,
        color: `heading`,
        fontSize: [5, 6, 7],
        mt: 2,
    },
    h2: {
        ...tailwind.styles.h2,
        color: `heading`,
        fontSize: [4, 5, 6],
        mt: 60,
    },
    h3: {
        ...tailwind.styles.h3,
        color: `heading`,
        fontSize: [3, 4, 5],
        mt: 3,
    },
    h4: {
        ...tailwind.styles.h4,
        color: `heading`,
        fontSize: [2, 3, 4],
    },
    h5: {
        ...tailwind.styles.h5,
        color: `heading`,
        fontSize: [1, 2, 3],
    },
    h6: {
        ...tailwind.styles.h6,
        color: `heading`,
        fontSize: 1,
        mb: 2,
    },
};

const Theme = {
    ...baseTheme,
    colors: {
        ...baseTheme.colors,
        primary: `#42A5F5`,
        codeBackground: tailwind.colors.gray[2],
        modes: {
            dark: {
                ...baseTheme.colors.modes.dark,
                primary: `#42A5F5`,
                heading: tailwind.colors.gray[3],
                codeBackground: tailwind.colors.gray[8],
            },
        },
    },
    styles: {
        ...baseTheme.styles,
        ...headingStyles,
        inlineCode: {
            color: `text`,
            backgroundColor: `codeBackground`
        }
    },
    text: {
        ...baseTheme.text,
        ...headingStyles
    }
}

export default Theme