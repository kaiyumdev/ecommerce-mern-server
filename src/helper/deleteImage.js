const deleteImage = async (userImagePath) => {
  try {
    await fs.access(userImagePath);
    await fs.unlink(userImagePath);
    console.log("User image was deleted successfully");
  } catch (error) {
    console.error("User image does not exist");
  }
};

module.exports = { deleteImage };
