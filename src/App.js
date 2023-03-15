import React from 'react';
import GeneralRoutes from "./routes/routes";

import { DataProvider } from './contexts/context';

export default function App() {
   return (
      <DataProvider>
         <GeneralRoutes />
      </DataProvider>
   );
}