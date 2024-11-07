export default defineEventHandler(async (event) => {
  console.log(capitalizeFirstLetter('hello from the API'))
  const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://example.com/avatar'
  };
  return;
})
