// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetReservationCoverageRequest, GetReservationCoverageResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetReservationCoverageCommand,
  serializeAws_json1_1GetReservationCoverageCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetReservationCoverageCommand}.
 */
export interface GetReservationCoverageCommandInput extends GetReservationCoverageRequest {}
/**
 * @public
 *
 * The output of {@link GetReservationCoverageCommand}.
 */
export interface GetReservationCoverageCommandOutput extends GetReservationCoverageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the reservation coverage for your account, which you can use to see how much
 *       of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service,
 *       or Amazon Redshift usage is covered by a reservation. An organization's management account can
 *       see the coverage of the associated member accounts. This supports dimensions, Cost Categories,
 *       and nested expressions. For any time period, you can filter data about reservation usage by
 *       the following dimensions:</p>
 *          <ul>
 *             <li>
 *                <p>AZ</p>
 *             </li>
 *             <li>
 *                <p>CACHE_ENGINE</p>
 *             </li>
 *             <li>
 *                <p>DATABASE_ENGINE</p>
 *             </li>
 *             <li>
 *                <p>DEPLOYMENT_OPTION</p>
 *             </li>
 *             <li>
 *                <p>INSTANCE_TYPE</p>
 *             </li>
 *             <li>
 *                <p>LINKED_ACCOUNT</p>
 *             </li>
 *             <li>
 *                <p>OPERATING_SYSTEM</p>
 *             </li>
 *             <li>
 *                <p>PLATFORM</p>
 *             </li>
 *             <li>
 *                <p>REGION</p>
 *             </li>
 *             <li>
 *                <p>SERVICE</p>
 *             </li>
 *             <li>
 *                <p>TAG</p>
 *             </li>
 *             <li>
 *                <p>TENANCY</p>
 *             </li>
 *          </ul>
 *          <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code>
 *       operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetReservationCoverageCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetReservationCoverageCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetReservationCoverageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetReservationCoverageCommandInput - {@link GetReservationCoverageCommandInput}
 * @returns {@link GetReservationCoverageCommandOutput}
 * @see {@link GetReservationCoverageCommandInput} for command's `input` shape.
 * @see {@link GetReservationCoverageCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p>The requested data is unavailable.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid. Try again without a pagination token.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 *
 */
export class GetReservationCoverageCommand extends $Command<
  GetReservationCoverageCommandInput,
  GetReservationCoverageCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetReservationCoverageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReservationCoverageCommandInput, GetReservationCoverageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReservationCoverageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetReservationCoverageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetReservationCoverageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetReservationCoverageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReservationCoverageCommandOutput> {
    return deserializeAws_json1_1GetReservationCoverageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
