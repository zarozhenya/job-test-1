import { Home } from 'pages/Home';
import { SharedLayout } from 'pages/SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
