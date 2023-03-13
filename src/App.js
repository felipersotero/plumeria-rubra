import React from 'react';
import AuthRoutes from "./routes/routes";

import { DataProvider } from './contexts/context';

export default function App() {
   return (
      <DataProvider>
         <AuthRoutes />
      </DataProvider>
   );
}