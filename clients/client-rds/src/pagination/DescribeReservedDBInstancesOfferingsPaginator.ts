// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeReservedDBInstancesOfferingsCommand,
  DescribeReservedDBInstancesOfferingsCommandInput,
  DescribeReservedDBInstancesOfferingsCommandOutput,
} from "../commands/DescribeReservedDBInstancesOfferingsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeReservedDBInstancesOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedDBInstancesOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedDBInstancesOfferingsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeReservedDBInstancesOfferings(
  config: RDSPaginationConfiguration,
  input: DescribeReservedDBInstancesOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedDBInstancesOfferingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedDBInstancesOfferingsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
