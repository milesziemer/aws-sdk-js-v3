// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeCanariesLastRunCommand,
  DescribeCanariesLastRunCommandInput,
  DescribeCanariesLastRunCommandOutput,
} from "../commands/DescribeCanariesLastRunCommand";
import { SyntheticsClient } from "../SyntheticsClient";
import { SyntheticsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SyntheticsClient,
  input: DescribeCanariesLastRunCommandInput,
  ...args: any
): Promise<DescribeCanariesLastRunCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCanariesLastRunCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeCanariesLastRun(
  config: SyntheticsPaginationConfiguration,
  input: DescribeCanariesLastRunCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCanariesLastRunCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCanariesLastRunCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SyntheticsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Synthetics | SyntheticsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
