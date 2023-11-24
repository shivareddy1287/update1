const generateToken = require("../../config/token/generateToken");

const expressAsyncHandler = require("express-async-handler");
const validateMongodbID = require("../../utils/validateMongodbID");
const Asset = require("../../model/asset/Asset");

//----------------------------------------------------------------
// create asset
//----------------------------------------------------------------

const createAssetCtrl = expressAsyncHandler(async (req, res) => {
  // Business Logic
  console.log(req?.body, "created");
  try {
    const user = await Asset.create({
      ...req?.body,
    });
    res.json(user);

    // res.json("user controllers");
  } catch (error) {
    res.json(error);
  }
  // try {
  //   const asset = await Asset.create({ user: userId, addedBy: adminId });
  //   res.json(asset);
  // } catch (error) {
  //   console.error(error);
  //   res.json(error);
  // }
});

//----------------------------------------------------------------
// Fetch Assets
//----------------------------------------------------------------

const fetchAssetsCtrl = expressAsyncHandler(async (req, res) => {
  const id = req.query.id;
  const query = {}; // Initialize an empty query object
  console.log(query, "query", "id", id, "asset");
  if (id) {
    query.user = id; // Add a filter for the user ID if provided
  }
  console.log(query, "query", "id", id, "asset");
  try {
    const assets = await Asset.find(query)
      .populate("user")
      .populate("addedBy")
      .populate("ModifiedBy");
    res.json(assets);
  } catch (error) {
    console.log(error);
  }
});

//----------------------------------------------------------------
// user details
//----------------------------------------------------------------

const fetchSingleAsset = expressAsyncHandler(async (req, res) => {
  // console.log(req.headers);
  const { id } = req.params;
  validateMongodbID(id);

  try {
    const user = await Asset.findById(id)
      .populate("user")
      .populate("addedBy")
      .populate("ModifiedBy");

    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

//----------------------------------------------------------------
// Update Asset
//----------------------------------------------------------------

const updateAssetCtrl = expressAsyncHandler(async (req, res) => {
  console.log(req?.params?.id, "params");
  // const { _id } = req?.user;
  // console.log(req?.body, "req?.body");

  // validateMongodbID(_id);
  try {
    const user = await Asset.findByIdAndUpdate(
      req?.params?.id,
      {
        ...req?.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

//----------------------------------------------------------------
// delete the user
//----------------------------------------------------------------

const deleteAssetCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  console.log(id);
  // if (!id) throw new Error("Please provide user ID");

  // check isf user id is valid
  validateMongodbID(id);
  try {
    const deletedUser = await Asset.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = {
  createAssetCtrl,
  fetchAssetsCtrl,
  fetchSingleAsset,
  updateAssetCtrl,
  deleteAssetCtrl,
};
