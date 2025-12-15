import Box from '@mui/material/Box';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  LabelList,
  Legend,
} from 'recharts';
import data from '../../../../data.json';
import {
  Grid,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { currencyFormat } from 'containers/Overview/Overview';

interface BudgetData {
  name: string;
  value: number;
  color: string;
}

export const BudgetsOverview = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const budgetsData = data.budgets?.map((budget) => ({
    name: budget.category,
    value: budget.maximum,
    color: budget.theme,
  }));

  console.log({ budgetsData });
  // TODO: Fix issue where legend is rendering outside of container or below the pie chart rather than middle, this is fixed after changing sizes of the app going between tablet size and regular app
  return (
    <>
      {budgetsData && (
        <ResponsiveContainer
          width={isMobile ? 303 : 364}
          height={isMobile ? 374 : 302}
        >
          <PieChart>
            <Pie
              data={budgetsData}
              dataKey="value"
              innerRadius={60}
              style={{ minWidth: isMobile ? 303 : 364, minHeight: 302 }}
            >
              {budgetsData.map((entry) => (
                <Cell key={`cell-${entry.name}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              layout={isMobile ? 'horizontal' : 'vertical'}
              verticalAlign={isMobile ? 'bottom' : 'middle'}
              align={isMobile ? 'center' : 'right'}
              wrapperStyle={
                isMobile
                  ? {}
                  : {
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
              }
              payload={budgetsData}
              content={({ payload }) => {
                return (
                  <Box
                    width={isMobile ? 303 : 101}
                    maxHeight={220}
                    sx={{
                      display: 'flex',
                      flexWrap: isMobile ? 'wrap' : 'nowrap',
                      flexDirection: isMobile ? 'row' : 'column',
                      gap: isMobile ? '0 16px' : '8px',
                    }}
                  >
                    {payload?.map((entry: BudgetData) => (
                      <Box
                        key={`item-${entry.name}`}
                        width={isMobile ? 143 : 101}
                        height={43}
                        sx={{
                          display: 'flex',
                          justifyContent: isMobile ? '' : 'space-between',
                          gap: isMobile ? 2 : 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 4,
                            height: 43,
                            backgroundColor: entry.color,
                          }}
                        />
                        <Grid2
                          display="flex"
                          flexDirection="column"
                          justifyContent="space-between"
                          maxHeight={43}
                          width={81}
                        >
                          <Typography variant="caption" noWrap>
                            {entry.name}
                          </Typography>
                          <Typography variant="subtitle3" fontWeight={800}>
                            {currencyFormat.format(entry.value)}
                          </Typography>
                        </Grid2>
                      </Box>
                    ))}
                  </Box>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
