import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code";

export default {
    ...baseTheme,
    "p > code, li > code": {
        px: 2,
        py: 1,
    },
}