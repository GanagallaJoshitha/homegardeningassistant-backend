const createPost = async (req, res) => {
  res.json({ message: "Post created" });
};

const getAllPosts = async (req, res) => {
  res.json([{ id: 1, title: "How to grow tomatoes?" }]);
};

const addComment = async (req, res) => {
  res.json({ message: "Comment added" });
};

module.exports = {
  createPost,
  getAllPosts,
  addComment,
};