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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateInternetGatewayRequest, CreateInternetGatewayResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateInternetGatewayCommand,
  serializeAws_ec2CreateInternetGatewayCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link CreateInternetGatewayCommand}.
 */
export interface CreateInternetGatewayCommandInput extends CreateInternetGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateInternetGatewayCommand}.
 */
export interface CreateInternetGatewayCommandOutput extends CreateInternetGatewayResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an internet gateway for use with a VPC. After creating the internet gateway,
 * 			you attach it to a VPC using <a>AttachInternetGateway</a>.</p>
 *          <p>For more information about your VPC and internet gateway, see the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon Virtual Private Cloud User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateInternetGatewayCommandInput - {@link CreateInternetGatewayCommandInput}
 * @returns {@link CreateInternetGatewayCommandOutput}
 * @see {@link CreateInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To create an Internet gateway
 * ```javascript
 * // This example creates an Internet gateway.
 * const input = undefined;
 * const command = new CreateInternetGatewayCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InternetGateway": {
 *     "Attachments": [],
 *     "InternetGatewayId": "igw-c0a643a9",
 *     "Tags": []
 *   }
 * }
 * *\/
 * // example id: ec2-create-internet-gateway-1
 * ```
 *
 */
export class CreateInternetGatewayCommand extends $Command<
  CreateInternetGatewayCommandInput,
  CreateInternetGatewayCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: CreateInternetGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateInternetGatewayCommandInput, CreateInternetGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInternetGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateInternetGatewayCommand";
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
  private serialize(input: CreateInternetGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateInternetGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInternetGatewayCommandOutput> {
    return deserializeAws_ec2CreateInternetGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
