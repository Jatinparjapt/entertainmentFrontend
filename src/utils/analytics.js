import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-LB2PY8QFYH"); // Replace with your Measurement ID
};

export const logPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};
