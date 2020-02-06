import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";

export default {
    ...baseTheme,
    colors: {
        ...baseTheme.colors,
        primary: `#42A5F5`,
        modes: {
            dark: {
                ...baseTheme.colors.modes.dark,
                primary: `#42A5F5`,
            },
        },
    },
}
