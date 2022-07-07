/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                'nunito': 'Nunito',
            },
            backgroundImage: {
                'upperImage': "url('/src/assets/images/top.svg')",
                'footerImage': "url('/src/assets/images/fundo-footer.png')"
            },
            backgroundSize: {
                '100-auto': '100% auto'
            },
            colors: {
                success: "#0B854A",
                alert: "#C75126",
                error: "#BC1C1C",
                info: "#29598C",
                blue: {
                    700: "#0072EC",
                    600: "#3779BF",
                    500: "#29598C",
                    400: "#3779BF",
                    300: "#0072EC",
                    200: "#6EB1FA",
                    100: "#6EB1FA",
                },
                purple: {
                    700: "#7B37BF",
                    600: "#5A298C",
                    500: "#7B37BF",
                    400: "#7C17E2",
                    300: "#B46EFA",
                    200: "#E7D4FA",
                    100: "#F9F3FF",
                },
                green: {
                    700: "#295146",
                    600: "#11604A",
                    500: "#007756",
                    400: "#36B290",
                    300: "#29CC9F",
                    200: "#17E5AC",
                    100: "#F3FFF9",
                },
                red: {
                    500: "#BC1C1C",
                    400: "#FB2759",
                    300: "#FE688C",
                    200: "#FBA7BB",
                    100: "#FBD0DA",
                },
                "rosa-lacrei": {
                    700: "#650042",
                    600: "#A3096E",
                    500: "#C40E86",
                    400: "#DF1098",
                    300: "#FF4DC2",
                    200: "#F78DCE",
                    100: "#FFC2EA",
                },
                "verde-lacrei": "#018762",
                "verde-lacrei2": "#91D9B7",
            },
        },
    },
    plugins: [],
};