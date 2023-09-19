import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    productPhotos: {
      type: [String],
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    productType: {
      type: String,
      enum: ["simple", "variable", "group", "external"],
      default: "simple",
    },
    reviews: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reviews",
      default: null,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    longDesc: {
      type: String,
      required: true,
    },
    specification: {
      type: String,
      default: null,
    },
    categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    tags: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
      default: null,
    },
    productSimple: {
      regularPrice: {
        type: Number,
        required: true,
      },
      salePrice: {
        type: Number,
        required: true,
        default: 0,
      },
      productPhotos: {
        type: [String],
        required: true,
        default: null,
      },

      stock: {
        type: Number,
        default: 0,
      },
    },
    productVariable: {
      regularPrice: {
        type: Number,
      },
      salePrice: {
        type: Number,
        required: true,
        default: 0,
      },
      productPhotos: {
        type: [String],
        required: true,
        default: null,
      },

      stock: {
        type: Number,
        default: 0,
      },
      link: {
        type: String,
        default: null,
      },
    },
    productGroup: {
      name: {
        type: String,
        // required:true,
      },

      regularPrice: {
        type: Number,
        // required:true,
      },
      salePrice: {
        type: Number,
        required: true,
        default: 0,
      },
      productPhotos: {
        type: [String],
        required: true,
        default: null,
      },

      stock: {
        type: Number,
        default: 0,
      },
    },

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

export default mongoose.model("Product", productSchema);
