import mongoose, { Schema } from "mongoose";

const petbookingSchema = new Schema(
  {
    userid: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
);

const PetbookingData = mongoose.model("Petbooking", petbookingSchema);
export default PetbookingData;
