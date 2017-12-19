var environment = {};
if (process.env.NODE_ENV === "development") {
  // url to send api requests to;
  environment.apiUrl = 'http://localhost:5000';
} else if (process.env.NODE_ENV === "production") {
  // url to send api requests to
  environment.apiUrl = 'http://rgsupportwofapi.azurewebsites.net';
}

export const ENV = environment;
