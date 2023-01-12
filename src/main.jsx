import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { store } from './app/store'
import { Provider } from 'react-redux'
import { registerLicense } from '@syncfusion/ej2/base';
registerLicense('Mgo+DSMBaFt/QHRqVVhjVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9iS3xQd0ZmX3pacXRTRA==;Mgo+DSMBPh8sVXJ0S0J+XE9HflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xSdEdgWHxbdnFRR2JeUw==;ORg4AjUWIQA/Gnt2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhWn5ddXJQQmFfV0Y=;ODA5OTk5QDMyMzAyZTM0MmUzMGRKdk9ydEhuc1pwMDMvVUYzRjhMbXlQVHg2R1AvMTF2MjZkRmRTRmFqN2c9;ODEwMDAwQDMyMzAyZTM0MmUzMFQwT1JENXo1alQ5TlZ4eXBEcmNaTkEyb3pTeE80NEp5bXRqMUVLK2psVms9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdERhW3xfc3FTQ2ReUEJ0;ODEwMDAyQDMyMzAyZTM0MmUzMGtDZTFuRnlUZHhZVTVaM3M5UDFMM1lPK0NGR0c1YkkzTTBqd3lEWnBReDg9;ODEwMDAzQDMyMzAyZTM0MmUzMGtkN1pXNzE0bDBNRU93eWhTZW1hTCtmVUZJWngvTnAxWkZCdVhRTnE4dFU9;Mgo+DSMBMAY9C3t2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhWn5ddXJQQmNcUkY=;ODEwMDA1QDMyMzAyZTM0MmUzMFhWMzJ4dWFHU0xqaTFpVzBmTXJyb0ltQm5VdGY5S3dOaVRMZ2c3RkRrWFE9;ODEwMDA2QDMyMzAyZTM0MmUzMFVLQytzdVJ1NVBLRzk3aU45aDlNeSs0OHhJUVVUWnlwYUIrcFhodTkzdU09;ODEwMDA3QDMyMzAyZTM0MmUzMGtDZTFuRnlUZHhZVTVaM3M5UDFMM1lPK0NGR0c1YkkzTTBqd3lEWnBReDg9');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
