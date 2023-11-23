import 'styled-components/native'

declare module 'styled-components/native' {
    export interface DefaultTheme {
        colors: {
            primary: string
            secondary: string
            tertiary: string
            neutral: string
            grey: string
        }

        fontFamily: {
            regular: string
            bold: string
        }

        fontSize: {
            /**
             * 12px
             */
            xs: string
            /**
             * 14px
             */
            sm: string
            /**
             * 16px
             */
            base: string
            /**
             * 18px
             */
            lg: string
            /**
             * 20px
             */
            xl: string
            /**
             * 24px
             */
            '2xl': string
            /**
             * 30px
             */
            '3xl': string
            /**
             * 36px
             */
            '4xl': string
            /**
             * 48px
             */
            '5xl': string
            /**
             * 64px
             */
            '6xl': string
        }
    }
}