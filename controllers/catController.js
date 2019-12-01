"use strict";

const catModel = require("../models/catModel");

const resize = require("../utils/resize");

const imageMeta = require("../utils/imageMeta");

// const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();

  await res.json(cats);
};

const cat_create_post = async (req, res) => {
  try {
    // create thumbnail

    await resize.makeThumbnail(
      req.file.path,

      "thumbnails/" + req.file.filename,

      { width: 160, height: 160 }
    );

    // get coordinates

    const coords = await imageMeta.getCoordinates(req.file.path);

    console.log("coords", coords);

const cat_get = async (req, res) => {
  const params = [req.params.id];

  const cat = await catModel.getCat(params);

  await res.json(cat[0]);
};

const cat_update_put = async (req, res) => {
  const params = [
    req.body.name,

      req.body.age,

      req.body.weight,

      req.body.owner,

    req.body.id
  ];

  console.log("update", params);

  const user = await catModel.updateCat(params);

  await res.json(user);
};

const cat_get = async (req, res) => {
  const params = [req.params.id];

  console.log("delete", params);

  const cat = await catModel.deleteCat(params);

  await res.json(cat);
};

module.exports = {
  cat_list_get,

  cat_create_post,

  cat_get
};
