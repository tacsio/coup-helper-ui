export default function parseError(error) {
  if (error.response === undefined) {
    return ["Unable to connect with service."];
  }

  const status = error.response.status;
  const data = error.response.data;

  let parsedErrors = [];

  if (status === 400) {
    data.forEach((it) => {
      const formatted = `${it.name}: ${it.error}`;
      parsedErrors.push(formatted);
    });
  } else if (status === 403) {
    parsedErrors.push(data.error);
  }

  //* TODO melhorar parsing dos erros

  return parsedErrors;
}
