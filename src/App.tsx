import './App.css';
import { FC, useCallback, useEffect, useState } from 'react';
import { AppDispatch, useSelector, zennTrendSelector } from './repository/store';
import { useDispatch } from 'react-redux';
import { additional, subtraction } from './repository/counterSlice';
import { ZennTrendItem } from './type/zennTrend';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { fetchZennTrend } from './repository/zennApiSlice';

const TrendCard: FC<{ item: ZennTrendItem }> = ({ item }) => {
  return (
    <Grid item xs={6}>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe">{item.emoji}</Avatar>}
          title={item.title}
          sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start' }}
        />
        <CardActions>
          <CardContent sx={{ display: 'flex', justifyContent: 'start', textAlign: 'start' }}>
            <Typography variant="body2" color="text.secondary">
              user: {item.user.name} <br /> category: {`${item.topics.map((t) => t.displayName)}`}
            </Typography>
          </CardContent>
        </CardActions>
      </Card>
    </Grid>
  );
};

const App: FC = () => {
  const count = useSelector((state) => state.counter.count);
  // const [trends, setTrends] = useState<Array<ZennTrendItem>>([]);
  const dispatch: AppDispatch = useDispatch();
  const trends = useSelector(zennTrendSelector);
  const fetchTrends = useCallback(() => {
    dispatch(fetchZennTrend());
  }, [dispatch]);

  useEffect(() => {
    if (trends.length === 0) return fetchTrends();
    return;
  }, [fetchTrends, trends]);

  // const [count, setCount] = useState<number>(0);
  // const addition = (num: number) => {
  //   if (Number.isNaN(num)) return;
  //   setCount(count + num);
  // };
  // const subtraction = (num: number) => {
  //   if (Number.isNaN(num)) return;
  //   setCount(count - num);
  // };

  return (
    <div className="App">
      <Box sx={{ m: 2 }}>
        <h1>Count: {count}</h1>
        {/* <button onClick={() => addition(1)}>Up</button>
      <button onClick={() => subtraction(1)}>Down</button> */}
        <button onClick={() => dispatch(additional(1))}>Up</button>
        <button onClick={() => dispatch(subtraction(1))}>Down</button>
        {trends.length === 0 ? (
          <></>
        ) : (
          <Grid container justifyContent="center" alignItems="center" sx={{ display: 'flex' }} spacing={2}>
            {trends.map((item) => {
              return <TrendCard item={item} key={item.id} />;
            })}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default App;
