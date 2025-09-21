exports.validateArticle = (article) => {
  if (!article.title || article.title.length < 3) {
    return 'Title must be at least 3 characters long.';
  }
  if (!article.content || article.content.length < 10) {
    return 'Content must be at least 10 characters long.';
  }
  return null;
};

exports.validateCategory = (category) => {
    if (!category.name || category.name.length < 3) {
        return 'Category name must be at least 3 characters long.';
    }
    return null;
};

exports.validatePage = (page) => {
    if (!page.title || page.title.length < 3) {
        return 'Page title must be at least 3 characters long.';
    }
    if (!page.content || page.content.length < 10) {
        return 'Page content must be at least 10 characters long.';
    }
    if (!page.slug || page.slug.length < 3) {
        return 'Page slug must be at least 3 characters long.';
    }
    return null;
};