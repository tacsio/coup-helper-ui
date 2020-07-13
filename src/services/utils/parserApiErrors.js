export default function parseError(error) {
  console.log(error);

  if (error.response === undefined) {
    return ["Unable to connect with service."];
  }

  const status = error.response.status;
  const data = error.response.data;

  let parsedErrors = [];

  //* TODO melhorar parsing dos erros
  if (status === 400) {
    data.forEach((it) => parsedErrors.push(`${it.name}: ${it.error}`));
  } else if (status === 403) {
    parsedErrors.push(data.error);
  }

  const errorObj = {
    message: parsedErrors.join(" "),
    type: "danger",
    duration: 3000,
    icon: "danger",
  };

  return errorObj;
}
