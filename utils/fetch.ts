export function delay(time: number) {
  return new Promise((res) => {
    setTimeout(() => {
      res("");
    }, time);
  });
}

// API Fetch functions
export const fetchFast = async () => {
  await delay(1000);
  return "Data fetch fast";
};

export const fetchMedium = async () => {
  await delay(2000);
  return "Data fetch medium";
};

export const fetchSlow = async () => {
  await delay(5000);
  return "Data fetch slow";
};
