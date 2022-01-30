import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const boardLabelSchema = new Schema(
  {
    labelId: {
      type: Schema.Types.ObjectId,
      ref: 'Label',
      required: true,
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
      required: true,
    },
  },
  { timestamps: true }
);

const BoardLabel = model('BoardLabel', boardLabelSchema);

export { BoardLabel };
