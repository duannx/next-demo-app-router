export function delay(time: number) {
  return new Promise((res) => {
    setTimeout(() => {
      res("");
    }, time);
  });
}

// API Fetch functions
export const fetchFast = async () => {
  await fetch('http://localhost:3001/api/fast')
  return "Data fetch fast";
};

export const fetchMedium = async () => {
  await fetch('http://localhost:3001/api/medium')
  return "Data fetch medium";
};

export const fetchSlow = async () => {
  await fetch('http://localhost:3001/api/slow')
  return "Data fetch slow";
};
