// import type { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";

// export default {
//     darkMode: ["class"],
//     content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//   	extend: {
// 		fontFamily: {
// 			sans: ['Jetbrains Mono' , ...defaultTheme.fontFamily.sans],
// 		},
//   		colors: {
// 			bodyColor: "#1c1c22",
// 			lightSky: "#ff66b3",
// 			hoverColor: "#c55f8f",
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))'
//   			},
//   			sidebar: {
//   				DEFAULT: 'hsl(var(--sidebar-background))',
//   				foreground: 'hsl(var(--sidebar-foreground))',
//   				primary: 'hsl(var(--sidebar-primary))',
//   				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
//   				accent: 'hsl(var(--sidebar-accent))',
//   				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
//   				border: 'hsl(var(--sidebar-border))',
//   				ring: 'hsl(var(--sidebar-ring))'
//   			}
//   		},
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		}
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;



import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
            },
			textStroke: {
				'1': '1px',
			  },
			  textStrokeColor: {
				'light-sky': '#3b82f6',
			  },
            colors: {
                bodyColor: "#0a0a0f",
                lightSky: "#3b82f6",  // Changed from pink to blue
                hoverColor: "#2563eb",  // Darker blue for hover
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(215, 80%, 50%)',  // Deep blue
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(210, 20%, 25%)',  // Cool gray
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(213, 15%, 20%)',  // Dark slate
                    foreground: 'hsl(213, 10%, 70%)'
                },
                accent: {
                    DEFAULT: 'hsl(200, 80%, 50%)',  // Teal blue
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(0, 80%, 50%)',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(213, 15%, 30%)',
                input: 'hsl(213, 15%, 20%)',
                ring: 'hsl(215, 80%, 50%)',
                chart: {
                    '1': 'hsl(215, 80%, 50%)',  // Blue
                    '2': 'hsl(200, 80%, 50%)',  // Teal
                    '3': 'hsl(170, 80%, 50%)',  // Green
                    '4': 'hsl(40, 80%, 50%)',   // Amber
                    '5': 'hsl(10, 80%, 50%)'    // Orange
                },
                sidebar: {
                    DEFAULT: 'hsl(210, 20%, 15%)',  // Dark slate
                    foreground: 'hsl(210, 10%, 80%)',
                    primary: 'hsl(215, 80%, 50%)',
                    'primary-foreground': 'hsl(0, 0%, 100%)',
                    accent: 'hsl(200, 80%, 50%)',
                    'accent-foreground': 'hsl(0, 0%, 100%)',
                    border: 'hsl(210, 20%, 25%)',
                    ring: 'hsl(215, 80%, 50%)'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;