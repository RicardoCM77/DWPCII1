// importando mongoose
import mongoose from 'mongoose';
// desedtructurando la fn Schema
const { Schema } = mongoose;

// contruir un Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// compilando el esquema para
// generar un modelo
export default mongoose.model('proyect', ProjectSchema);
