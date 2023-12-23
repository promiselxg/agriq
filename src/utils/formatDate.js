export const formatCreatedAt = (createdAt) => {
  const date = new Date(createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const formatDateShort = (createdAt) => {
  const date = new Date(createdAt);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();

  return { day, month };
};

export const extractDayAndMonth = (dateTimeString) => {
  const date = new Date(dateTimeString);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  return { day, month };
};
