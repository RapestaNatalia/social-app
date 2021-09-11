# Social App - React

It is a new feed to promote social network activity, I am provided with access to the account’s posts and comments, my job is to integrate that activity into the website.

## Design decisions:

- I fetch all the comments and then I group it by postId and save it into the store, instead of fetching comments by post.
- I have added a Show more button to reduce the amount of information into the screen.
- I always show the last comment by default.
- I have used TypeScript because it reduce code errors.
- I have used tools like testing-library-react and reactstrap to facilitate tests and design.
