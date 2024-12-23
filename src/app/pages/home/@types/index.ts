import {
  httpRequest,
  httpClientResponse,
  gitHubUserResponse,
} from "@/app/utils/types";

export type fetchInfoUserProps = {
  userName: string;
  request: (
    data: httpRequest
  ) => Promise<httpClientResponse<gitHubUserResponse>>;
};
export type fetchEventsUserProps = {
  userName: string;
  request: (
    data: httpRequest
  ) => Promise<httpClientResponse<httpClientResponse>>;
};

export type fetchReposUserProps = fetchEventsUserProps;
