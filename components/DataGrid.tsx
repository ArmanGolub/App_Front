import { Box, Grid, GridProps, Pagination, Stack, alpha } from '@mui/material';

import { ListResponse } from '@/types';
import { Empty, Error, Loader } from '@/components';
import theme from '@/theme';

export interface DataGridState {
  isLoading?: boolean;
  isFetching?: boolean;
  isError?: boolean;
  error?: { data: { message: string } };
}

export interface DataGridProps<T> extends DataGridState, Partial<ListResponse<T>> {
  GridProps?: GridProps;
  skeletonItemsLength: number;
  onChangePage?(page: number): void;
  renderHeader?(state: DataGridState): React.ReactNode;
  renderItem(data: T, index: number): React.ReactNode;
  renderSkeletonItem(index: number): React.ReactNode;
}

const DataGrid = <T,>({
  data = [],
  meta,
  isLoading = true,
  isFetching = true,
  isError,
  error,
  GridProps,
  skeletonItemsLength = 5,
  onChangePage,
  renderHeader,
  renderItem,
  renderSkeletonItem,
}: DataGridProps<T>) => {
  return (
    <Stack spacing={4}>
      {renderHeader && renderHeader({ isLoading, isFetching, isError, error })}

      <Box sx={{ position: 'relative' }}>
        <Grid {...GridProps} container>
          {data.map((data, index) => renderItem(data, index))}

          {isLoading &&
            Array.from({ length: skeletonItemsLength }, (_, index) => index).map((index) => renderSkeletonItem(index))}
        </Grid>

        {((!isLoading && isFetching) || isError) && (
          <Box
            sx={{
              position: 'absolute',
              display: 'grid',
              placeItems: 'center',
              inset: 0,
              border: 'none',
              m: '0 !important',
              minHeight: 130,
              zIndex: 1,
              backgroundColor: isFetching
                ? alpha(theme.palette.background.default, 0.5)
                : theme.palette.background.default,
            }}
          >
            {isFetching ? (
              <Loader size={48} />
            ) : (
              <>
                {!isError && !data.length && <Empty title="Нет данных" />}

                {isError && error && (
                  <Error
                    title={
                      error.data && error.data.message ? error.data.message : 'Произошла ошибка с загрузкой данных'
                    }
                  />
                )}
              </>
            )}
          </Box>
        )}
      </Box>

      {Boolean(data.length) && meta && (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Pagination
            size="large"
            count={meta?.last_page}
            page={meta?.current_page}
            boundaryCount={2}
            color="primary"
            shape="rounded"
            onChange={(_, value) => onChangePage && onChangePage(value)}
          />
        </Box>
      )}
    </Stack>
  );
};

export default DataGrid;
