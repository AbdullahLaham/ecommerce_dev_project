import { Typography } from '@mui/material'
import React from 'react'

const LatestProducts = () => {
  return (
    <div>
        <Box>
            <Paper sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                <Typography>
                    Latest Products
                </Typography>
                <Button>
                    View All Products
                </Button>
            </Paper>
        </Box>
    </div>
  )
}

export default LatestProducts