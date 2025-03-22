
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk theme colors
				cyber: {
					'black': '#050A1C',
					'darker': '#0A1128',
					'dark': '#12193B',
					'blue': '#1EAEDB',
					'cyan': '#00FFFF',
					'purple': '#9B30FF',
					'pink': '#FF00FF',
					'green': '#39FF14',
					'yellow': '#FFFF00',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)',
					},
					'50%': { 
						boxShadow: '0 0 15px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5)',
					},
				},
				'text-glow': {
					'0%, 100%': { 
						textShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)',
					},
					'50%': { 
						textShadow: '0 0 15px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5)',
					},
				},
				'neon-pulse': {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.7 },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'grid-background': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '100% 100%' },
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' },
				},
				'blink-caret': {
					'from, to': { borderColor: 'transparent' },
					'50%': { borderColor: '#00FFFF' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(-20px)' },
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'intro-reveal': {
					'0%': { filter: 'blur(10px)', opacity: '0' },
					'100%': { filter: 'blur(0)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'text-glow': 'text-glow 2s infinite',
				'neon-pulse': 'neon-pulse 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'grid-background': 'grid-background 20s ease infinite',
				'typing': 'typing 3.5s steps(40, end)',
				'blink-caret': 'blink-caret .75s step-end infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'flicker': 'flicker 0.5s ease-in-out infinite',
				'intro-reveal': 'intro-reveal 0.8s ease-out forwards',
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
				'neon-glow': 'radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
			},
			backgroundSize: {
				'cyber-grid-size': '20px 20px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
