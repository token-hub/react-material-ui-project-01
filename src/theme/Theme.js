import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#17a2b8',
			contrastText: "#fff"
		},
		secondary: {
			main: '#343a40',
			contrastText: "#fff"
		}
	}
})

export default theme