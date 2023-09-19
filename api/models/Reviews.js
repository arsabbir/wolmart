import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    rating: {
      type: Number,
     default: 0,
    },
    review: {
      type: String,
      default: null,
    },
// customer:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"Customer",
// },

    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Review", reviewSchema);
