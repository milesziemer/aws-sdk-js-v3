// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetTraceSummariesCommand,
  GetTraceSummariesCommandInput,
  GetTraceSummariesCommandOutput,
} from "../commands/GetTraceSummariesCommand";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: XRayClient,
  input: GetTraceSummariesCommandInput,
  ...args: any
): Promise<GetTraceSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTraceSummariesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetTraceSummaries(
  config: XRayPaginationConfiguration,
  input: GetTraceSummariesCommandInput,
  ...additionalArguments: any
): Paginator<GetTraceSummariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTraceSummariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
