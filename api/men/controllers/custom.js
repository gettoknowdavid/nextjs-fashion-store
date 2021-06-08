module.exports = {
  findTypeBySlug: async (ctx) => {
    const { slug } = ctx.params;
    return slug;
  },
};
