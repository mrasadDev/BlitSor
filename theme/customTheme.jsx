import { createTheme, rem } from '@mantine/core'

export const theme = createTheme({
	colors: {
		lightgray: ['#eeee', '#dce4f5', '#b9c7e2', '#94a8d0', '#748dc1', '#5f7cb8', '#5474b4', '#44639f', '#39588f', '#2d4b81'],
		blue: ['#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045'],
		sidebar: ['#f9fafb', '#dce4f5', '#b9c7e2', '#94a8d0', '#748dc1', '#5f7cb8', '#5474b4', '#44639f', '#39588f', '#2d4b81'],
		tableHeader: ['#f9fafb', '#f9fafb', '#f9fafb', '#f9fafb', '#748dc1', '#5f7cb8', '#5474b4', '#44639f', '#39588f', '#2d4b81'],
		mainContent: ['#ffffff', '#f7f7f7', '#ededed', '#e3e3e3', '#d9d9d9', '#cfcfcf', '#c5c5c5', '#bbbbbb', '#b1b1b1', '#a7a7a7'],
		button: ['#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045', '#FF0045'],
		searchBar: ['#f2f2f2', '#e6e6e6', '#d9d9d9', '#cccccc', '#bfbfbf', '#b3b3b3', '#a6a6a6', '#999999', '#8c8c8c', '#808080'],
	},

	shadows: {
		md: '1px 1px 3px rgba(0, 0, 0, .25)',
		xl: '5px 5px 3px rgba(0, 0, 0, .25)',
	},

	headings: {
		fontFamily: 'Manrope',
		sizes: {
			h1: { fontSize: rem(36) },
		},
	},
})
