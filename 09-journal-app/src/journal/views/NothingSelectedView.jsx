import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'

export const NothingSelectedView = () => {
  return (
    <Grid 
        container 
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3}}
    >
        <Grid item xs={12} sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
            <StarOutline sx={{ fontSize: 100 }} />
        </Grid>
        <Grid item xs={12} sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
            <Typography color='white' variant='h5'>Select or Create a note</Typography>
        </Grid>
    </Grid>
  )
}
