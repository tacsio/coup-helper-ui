export default function parseError(error) {
  if (error.response === undefined) {
    return ["Unable to connect with service."];
  }

  const status = error.response.status;
  const data = error.response.data;

  console.log(data);
  console.log(status);
  let parsedErrors = [];

  if (status === 400) {
    data.forEach((it) => {
      const formatted = `${it.name}: ${it.error}`;
      parsedErrors.push(formatted);
    });
  }

  //* TODO melhorar parsing dos erros

  return parsedErrors;
}
