const sendStatusOk = () => {
  const statusJson = JSON.stringify({
    status: 200,
    message: 'Welcome to the home page',
  });

  return statusJson;
};

export { sendStatusOk };
