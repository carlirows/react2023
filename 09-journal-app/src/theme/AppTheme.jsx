import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purpleTheme } from './purple';


// eslint-disable-next-line react/prop-types
export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
        <CssBaseline />
        {children}
  </ThemeProvider>
  )
}
