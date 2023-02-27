const dev = {
  API_BASE_URL: 'http://localhost:8000/api/v1'
};

const prod = {
  API_BASE_URL: 'http://example.com/api/v1'
};

const getEnv = () => {
  // eslint-disable-next-line no-undef
  switch (process.env.NODE_ENV) {
    case 'development':
      return dev;
    case 'production':
      return prod;
    default:
      break;
  }
};

export const env = getEnv();
