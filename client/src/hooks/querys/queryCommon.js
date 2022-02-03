export const processData = (data) => {
  if (data) {
    const isSuccess = data?.data.success;
    const realData = data?.data;

    if (isSuccess) return realData.result;
    throw new Error(realData.message);
  }
  return null;
};
