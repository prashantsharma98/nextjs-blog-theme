export const getGlobalData = () => {
  const name = 'Prashant Sharma';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Next.js Blog Theme';
  const footerText = 'All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
