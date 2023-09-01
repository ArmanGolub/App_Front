import { useState } from 'react';
import { Box, Button, Grid, Stack } from '@mui/material';

import { Icon } from '@/components';

import { CreateFact, DeleteFact, FactItem, ViewFact } from './components';

const FactsPage = () => {
  const [createFactModal, setOpenedCreateFactModal] = useState(false);
  const [viewFactModal, setOpenedViewFactModal] = useState(false);
  const [deleteFactDialog, setOpenedDeleteFactDialog] = useState(false);

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ justifyContent: 'space-between' }}>
        <Button startIcon={<Icon name="Sort" />} size="medium">
          Сортировка
        </Button>

        <Button endIcon={<Icon name="Add" />} size="medium" onClick={() => setOpenedCreateFactModal(true)}>
          Добавить новый факт
        </Button>
      </Stack>

      <Box>
        <Grid container spacing={2.5}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((key) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={key}>
              <FactItem onClick={() => setOpenedViewFactModal(true)} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <CreateFact open={createFactModal} onClose={() => setOpenedCreateFactModal(false)} />
      <ViewFact
        open={viewFactModal}
        onDelete={() => setOpenedDeleteFactDialog(true)}
        onClose={() => setOpenedViewFactModal(false)}
      />
      <DeleteFact open={deleteFactDialog} onClose={() => setOpenedDeleteFactDialog(false)} />
    </>
  );
};

export default FactsPage;
