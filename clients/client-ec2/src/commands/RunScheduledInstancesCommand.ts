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
import {
  RunScheduledInstancesRequest,
  RunScheduledInstancesRequestFilterSensitiveLog,
  RunScheduledInstancesResult,
} from "../models/models_6";
import {
  deserializeAws_ec2RunScheduledInstancesCommand,
  serializeAws_ec2RunScheduledInstancesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link RunScheduledInstancesCommand}.
 */
export interface RunScheduledInstancesCommandInput extends RunScheduledInstancesRequest {}
/**
 * @public
 *
 * The output of {@link RunScheduledInstancesCommand}.
 */
export interface RunScheduledInstancesCommandOutput extends RunScheduledInstancesResult, __MetadataBearer {}

/**
 * @public
 * <p>Launches the specified Scheduled Instances.</p>
 *          <p>Before you can launch a Scheduled Instance, you must purchase it and obtain an identifier using <a>PurchaseScheduledInstances</a>.</p>
 *          <p>You must launch a Scheduled Instance during its scheduled time period. You can't stop or reboot a Scheduled Instance,
 *          but you can terminate it as needed. If you terminate a Scheduled Instance before the current scheduled time period ends,
 *          you can launch it again after a few minutes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-scheduled-instances.html">Scheduled Instances</a>
 *          in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RunScheduledInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RunScheduledInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RunScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RunScheduledInstancesCommandInput - {@link RunScheduledInstancesCommandInput}
 * @returns {@link RunScheduledInstancesCommandOutput}
 * @see {@link RunScheduledInstancesCommandInput} for command's `input` shape.
 * @see {@link RunScheduledInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To launch a Scheduled Instance in a VPC
 * ```javascript
 * // This example launches the specified Scheduled Instance in a VPC.
 * const input = {
 *   "InstanceCount": 1,
 *   "LaunchSpecification": {
 *     "IamInstanceProfile": {
 *       "Name": "my-iam-role"
 *     },
 *     "ImageId": "ami-12345678",
 *     "InstanceType": "c4.large",
 *     "KeyName": "my-key-pair",
 *     "NetworkInterfaces": [
 *       {
 *         "AssociatePublicIpAddress": true,
 *         "DeviceIndex": 0,
 *         "Groups": [
 *           "sg-12345678"
 *         ],
 *         "SubnetId": "subnet-12345678"
 *       }
 *     ]
 *   },
 *   "ScheduledInstanceId": "sci-1234-1234-1234-1234-123456789012"
 * };
 * const command = new RunScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceIdSet": [
 *     "i-1234567890abcdef0"
 *   ]
 * }
 * *\/
 * // example id: ec2-run-scheduled-instances-1
 * ```
 *
 * @example To launch a Scheduled Instance in EC2-Classic
 * ```javascript
 * // This example launches the specified Scheduled Instance in EC2-Classic.
 * const input = {
 *   "InstanceCount": 1,
 *   "LaunchSpecification": {
 *     "IamInstanceProfile": {
 *       "Name": "my-iam-role"
 *     },
 *     "ImageId": "ami-12345678",
 *     "InstanceType": "c4.large",
 *     "KeyName": "my-key-pair",
 *     "Placement": {
 *       "AvailabilityZone": "us-west-2b"
 *     },
 *     "SecurityGroupIds": [
 *       "sg-12345678"
 *     ]
 *   },
 *   "ScheduledInstanceId": "sci-1234-1234-1234-1234-123456789012"
 * };
 * const command = new RunScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceIdSet": [
 *     "i-1234567890abcdef0"
 *   ]
 * }
 * *\/
 * // example id: ec2-run-scheduled-instances-2
 * ```
 *
 */
export class RunScheduledInstancesCommand extends $Command<
  RunScheduledInstancesCommandInput,
  RunScheduledInstancesCommandOutput,
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
  constructor(readonly input: RunScheduledInstancesCommandInput) {
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
  ): Handler<RunScheduledInstancesCommandInput, RunScheduledInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RunScheduledInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RunScheduledInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RunScheduledInstancesRequestFilterSensitiveLog,
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
  private serialize(input: RunScheduledInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RunScheduledInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RunScheduledInstancesCommandOutput> {
    return deserializeAws_ec2RunScheduledInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
