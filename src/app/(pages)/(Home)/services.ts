import { AxiosError } from "axios";

import { fetchEventsUserProps, fetchInfoUserProps, fetchReposUserProps } from "./@types";
import { httpRequest } from "@/app/utils/types";
import { ENDPOINTS } from "@/app/utils/endpoints";

export const fetchInfoUser = async ({
  userName,
  request,
}: fetchInfoUserProps) => {
  const url = `${ENDPOINTS.USER.GITHUB.DELETE_INFO}/${userName}`;

  const requestConfig: httpRequest = {
    url,
    method: "get",
    headers: {},
    body: null,
  };
  try {
    await request(requestConfig);
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;
    const errorMessage =
      _error.response?.data?.message || "An unexpected error occurred";
    throw new Error(errorMessage);
  }
};
export const fetchReposUser = async ({
  userName,
  request,
}: fetchReposUserProps) => {
  const url = `${ENDPOINTS.USER.GITHUB.DELETE_INFO}/${userName}/repos`;

  const requestConfig: httpRequest = {
    url,
    method: "get",
    headers: {},
    body: null,
  };
  try {
    await request(requestConfig);
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;
    const errorMessage =
      _error.response?.data?.message || "An unexpected error occurred";
    throw new Error(errorMessage);
  }
};
export const fetchEventsUser = async ({
  userName,
  request,
}: fetchEventsUserProps) => {
  const url = `${ENDPOINTS.USER.GITHUB.DELETE_INFO}/${userName}/events`;

  const requestConfig: httpRequest = {
    url,
    method: "get",
    headers: {},
    body: null,
  };
  try {
    await request(requestConfig);
  } catch (error) {
    const _error = error as AxiosError<{ message: string }>;
    const errorMessage =
      _error.response?.data?.message || "An unexpected error occurred";
    throw new Error(errorMessage);
  }
};
