const Blogs = require("../models/blog");
const mongoose = require("mongoose");

exports.index = async (req, res, next) => {
  const blog = await Blogs.find();

  res.status(200).json({
    message: "successfully loaded",
    data: blogs,
  });
};

exports.add = async (req, res, next) => {
  const { task, detail, isActive, created } = req.body;

  const blog = new Blog({
    task: task,
    detail: detail,
    isActive: isActive,
    created: created,
  });

  await blog.save();

  res.status(201).json({
    message: "Successfully added",
  });
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;

  await Blog.findByIdAndDelete(id);

  res.status(201).json({
    message: "Successfully removed",
  });
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { title, detail } = req.body;

  await Blogs.findByIdAndUpdate(id, {
    title: title,
    detail: detail,
  });

  res.status(201).json({
    message: "Successfully updated",
  });
};
