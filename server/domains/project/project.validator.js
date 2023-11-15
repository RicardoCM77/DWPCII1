import * as Yup from 'yup';

// creando esquema de validación
const projectSchema = Yup.object().shape({
  name: Yup.string().required('se requiere nombre del proyecto'),
  description: Yup.string()
    .max('la descripción debe no tener mas de 500 caracteres ')
    .required('se requiere ua descripcion de proyecto'),
});

// Middleware de extracción
const getProject = (req) => {
  // Extrayendo datos de petición
  const { name, description } = req.body;
  return {
    name,
    description,
  };
};

export default {
  projectSchema,
  getProject,
};
