const mongoose = require("mongoose");

const ProgrammeOperatoireSchema = new mongoose.Schema({
  compte: { type: String, required: true },
  debut: { type: Date, required: true },
  fin: { type: Date, required: true },
  patient: { type: String},
  typeActe: { type: String, required: true },
  lieuAccouchement: [{ type: String }],
  observation: { type: String },
  praticien: { type: String },
});

const ProgrammeOperatoire = mongoose.model('ProgrammeOperatoire', ProgrammeOperatoireSchema);

module.exports = ProgrammeOperatoire;