import { Details } from 'pages/Details/Details';
import { Home } from 'pages/Home';
import { SharedLayout } from 'pages/SharedLayout/SharedLayout';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
