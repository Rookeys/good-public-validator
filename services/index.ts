import axios from "axios";

export const getTranslateBadToGood = async (text: string) => {
  const response = await axios
    .post("http://localhost:8000/bad2good", {
      text,
    })
    .then((res) => res.data);

  return response;
};

export const getChecklist = async (text: string) => {
  const response = await axios
    .post("http://localhost:8000/check_list", {
      text,
    })
    .then((res) => res.data);

  return response;
};

export const getSummary = async (text: string) => {
  const response = await axios
    .post("http://localhost:8000/summarize", {
      text,
    })
    .then((res) => res.data);

  return response;
};

export const getWhyBadRequest = async (text: string) => {
  const response = await axios
    .post("http://localhost:8000/why_bad_request", {
      text,
    })
    .then((res) => res.data);

  return response;
};

export const getValidation = async (text: string) => {
  const response = await axios
    .post("http://localhost:8000/valid_flag", {
      text,
    })
    .then(res => res.data);

  return response;
};
