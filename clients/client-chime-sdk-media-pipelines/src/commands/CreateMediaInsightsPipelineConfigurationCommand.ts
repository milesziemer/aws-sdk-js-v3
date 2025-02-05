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

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import {
  CreateMediaInsightsPipelineConfigurationRequest,
  CreateMediaInsightsPipelineConfigurationRequestFilterSensitiveLog,
  CreateMediaInsightsPipelineConfigurationResponse,
  CreateMediaInsightsPipelineConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateMediaInsightsPipelineConfigurationCommand,
  serializeAws_restJson1CreateMediaInsightsPipelineConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateMediaInsightsPipelineConfigurationCommand}.
 */
export interface CreateMediaInsightsPipelineConfigurationCommandInput
  extends CreateMediaInsightsPipelineConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaInsightsPipelineConfigurationCommand}.
 */
export interface CreateMediaInsightsPipelineConfigurationCommandOutput
  extends CreateMediaInsightsPipelineConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>A structure that contains the static configurations for a media insights
 *          pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaInsightsPipelineConfigurationCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaInsightsPipelineConfigurationCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const command = new CreateMediaInsightsPipelineConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateMediaInsightsPipelineConfigurationCommandInput - {@link CreateMediaInsightsPipelineConfigurationCommandInput}
 * @returns {@link CreateMediaInsightsPipelineConfigurationCommandOutput}
 * @see {@link CreateMediaInsightsPipelineConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateMediaInsightsPipelineConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 *
 */
export class CreateMediaInsightsPipelineConfigurationCommand extends $Command<
  CreateMediaInsightsPipelineConfigurationCommandInput,
  CreateMediaInsightsPipelineConfigurationCommandOutput,
  ChimeSDKMediaPipelinesClientResolvedConfig
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
  constructor(readonly input: CreateMediaInsightsPipelineConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMediaPipelinesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateMediaInsightsPipelineConfigurationCommandInput,
    CreateMediaInsightsPipelineConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        CreateMediaInsightsPipelineConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "CreateMediaInsightsPipelineConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMediaInsightsPipelineConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMediaInsightsPipelineConfigurationResponseFilterSensitiveLog,
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
  private serialize(
    input: CreateMediaInsightsPipelineConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMediaInsightsPipelineConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMediaInsightsPipelineConfigurationCommandOutput> {
    return deserializeAws_restJson1CreateMediaInsightsPipelineConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
