// import createError from 'http-errors';
// Impornting winston logger
// import log from './config/winston'; 

// Importando enrutador home
import homeRouter from './domains/home/home.router';

// Función que agrega rutas
const addRoutes = (app) => {
  // Agregando enrutado de Home
  app.use('/', homeRouter);
  return app;
};

// Exportando objeto
export default { addRoutes };
