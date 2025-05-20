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
import { Grid, Grid2, Typography } from '@mui/material';
import { currencyFormat } from 'containers/Overview/Overview';

interface BudgetData {
  name: string;
  value: number;
  color: string;
}

export const BudgetsOverview = () => {
  const budgetsData = data.budgets?.map((budget) => ({
    name: budget.category,
    value: budget.maximum,
    color: budget.theme,
  }));

  console.log({ budgetsData });
  return (
    <ResponsiveContainer width={364} height={302}>
      <PieChart>
        <Pie
          data={budgetsData}
          dataKey="value"
          innerRadius={60}
          style={{ minWidth: 364, minHeight: 302 }}
        >
          {budgetsData.map((entry) => (
            <Cell key={`cell-${entry.name}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          payload={budgetsData}
          content={({ payload }) => {
            return (
              <>
                {payload && payload?.length > 0 ? (
                  <Box
                    width={101}
                    maxHeight={220}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                    }}
                  >
                    {payload.map((entry: BudgetData) => (
                      <Box
                        key={`item-${entry.name}`}
                        width={101}
                        height={43}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: 1,
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
                ) : null}
              </>
            );
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
