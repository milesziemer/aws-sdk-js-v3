// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";
import { StreamingBlobTypes } from "@smithy/types";

import { S3ServiceException as __BaseException } from "./S3ServiceException";

/**
 * @public
 * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will
 *          wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
 *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a> in
 *          the <i>Amazon S3 User Guide</i>.</p>
 */
export interface AbortIncompleteMultipartUpload {
  /**
   * @public
   * <p>Specifies the number of days after which Amazon S3 aborts an incomplete multipart
   *          upload.</p>
   */
  DaysAfterInitiation?: number;
}

/**
 * @public
 * @enum
 */
export const RequestCharged = {
  requester: "requester",
} as const;

/**
 * @public
 */
export type RequestCharged = (typeof RequestCharged)[keyof typeof RequestCharged];

/**
 * @public
 */
export interface AbortMultipartUploadOutput {
  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 * @enum
 */
export const RequestPayer = {
  requester: "requester",
} as const;

/**
 * @public
 */
export type RequestPayer = (typeof RequestPayer)[keyof typeof RequestPayer];

/**
 * @public
 */
export interface AbortMultipartUploadRequest {
  /**
   * @public
   * <p>The bucket name to which the upload was taking place. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Key of the object for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Upload ID that identifies the multipart upload.</p>
   */
  UploadId: string | undefined;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>The specified multipart upload does not exist.</p>
 */
export class NoSuchUpload extends __BaseException {
  readonly name: "NoSuchUpload" = "NoSuchUpload";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchUpload, __BaseException>) {
    super({
      name: "NoSuchUpload",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchUpload.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const BucketAccelerateStatus = {
  Enabled: "Enabled",
  Suspended: "Suspended",
} as const;

/**
 * @public
 */
export type BucketAccelerateStatus = (typeof BucketAccelerateStatus)[keyof typeof BucketAccelerateStatus];

/**
 * @public
 * <p>Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Amazon S3
 *             Transfer Acceleration</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface AccelerateConfiguration {
  /**
   * @public
   * <p>Specifies the transfer acceleration status of the bucket.</p>
   */
  Status?: BucketAccelerateStatus | string;
}

/**
 * @public
 * @enum
 */
export const Type = {
  AmazonCustomerByEmail: "AmazonCustomerByEmail",
  CanonicalUser: "CanonicalUser",
  Group: "Group",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * <p>Container for the person being granted permissions.</p>
 */
export interface Grantee {
  /**
   * @public
   * <p>Screen name of the grantee.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>Email address of the grantee.</p>
   *          <note>
   *             <p>Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions: </p>
   *             <ul>
   *                <li>
   *                   <p>US East (N. Virginia)</p>
   *                </li>
   *                <li>
   *                   <p>US West (N. California)</p>
   *                </li>
   *                <li>
   *                   <p> US West (Oregon)</p>
   *                </li>
   *                <li>
   *                   <p> Asia Pacific (Singapore)</p>
   *                </li>
   *                <li>
   *                   <p>Asia Pacific (Sydney)</p>
   *                </li>
   *                <li>
   *                   <p>Asia Pacific (Tokyo)</p>
   *                </li>
   *                <li>
   *                   <p>Europe (Ireland)</p>
   *                </li>
   *                <li>
   *                   <p>South America (São Paulo)</p>
   *                </li>
   *             </ul>
   *             <p>For a list of all the Amazon S3 supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.</p>
   *          </note>
   */
  EmailAddress?: string;

  /**
   * @public
   * <p>The canonical user ID of the grantee.</p>
   */
  ID?: string;

  /**
   * @public
   * <p>URI of the grantee group.</p>
   */
  URI?: string;

  /**
   * @public
   * <p>Type of grantee</p>
   */
  Type: Type | string | undefined;
}

/**
 * @public
 * @enum
 */
export const Permission = {
  FULL_CONTROL: "FULL_CONTROL",
  READ: "READ",
  READ_ACP: "READ_ACP",
  WRITE: "WRITE",
  WRITE_ACP: "WRITE_ACP",
} as const;

/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * @public
 * <p>Container for grant information.</p>
 */
export interface Grant {
  /**
   * @public
   * <p>The person being granted permissions.</p>
   */
  Grantee?: Grantee;

  /**
   * @public
   * <p>Specifies the permission given to the grantee.</p>
   */
  Permission?: Permission | string;
}

/**
 * @public
 * <p>Container for the owner's display name and ID.</p>
 */
export interface Owner {
  /**
   * @public
   * <p>Container for the display name of the owner. This value is only supported in the
   *          following Amazon Web Services Regions:</p>
   *          <ul>
   *             <li>
   *                <p>US East (N. Virginia)</p>
   *             </li>
   *             <li>
   *                <p>US West (N. California)</p>
   *             </li>
   *             <li>
   *                <p>US West (Oregon)</p>
   *             </li>
   *             <li>
   *                <p>Asia Pacific (Singapore)</p>
   *             </li>
   *             <li>
   *                <p>Asia Pacific (Sydney)</p>
   *             </li>
   *             <li>
   *                <p>Asia Pacific (Tokyo)</p>
   *             </li>
   *             <li>
   *                <p>Europe (Ireland)</p>
   *             </li>
   *             <li>
   *                <p>South America (São Paulo)</p>
   *             </li>
   *          </ul>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>Container for the ID of the owner.</p>
   */
  ID?: string;
}

/**
 * @public
 * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
 */
export interface AccessControlPolicy {
  /**
   * @public
   * <p>A list of grants.</p>
   */
  Grants?: Grant[];

  /**
   * @public
   * <p>Container for the bucket owner's display name and ID.</p>
   */
  Owner?: Owner;
}

/**
 * @public
 * @enum
 */
export const OwnerOverride = {
  Destination: "Destination",
} as const;

/**
 * @public
 */
export type OwnerOverride = (typeof OwnerOverride)[keyof typeof OwnerOverride];

/**
 * @public
 * <p>A container for information about access control for replicas.</p>
 */
export interface AccessControlTranslation {
  /**
   * @public
   * <p>Specifies the replica ownership. For default and valid values, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html">PUT bucket
   *             replication</a> in the <i>Amazon S3 API Reference</i>.</p>
   */
  Owner: OwnerOverride | string | undefined;
}

/**
 * @public
 * @enum
 */
export const ServerSideEncryption = {
  AES256: "AES256",
  aws_kms: "aws:kms",
  aws_kms_dsse: "aws:kms:dsse",
} as const;

/**
 * @public
 */
export type ServerSideEncryption = (typeof ServerSideEncryption)[keyof typeof ServerSideEncryption];

/**
 * @public
 */
export interface CompleteMultipartUploadOutput {
  /**
   * @public
   * <p>The URI that identifies the newly created object.</p>
   */
  Location?: string;

  /**
   * @public
   * <p>The name of the bucket that contains the newly created object. Does not return the access point
   *          ARN or access point alias if used.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>The object key of the newly created object.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>If the object expiration is configured, this will contain the expiration date
   *             (<code>expiry-date</code>) and rule ID (<code>rule-id</code>). The value of
   *             <code>rule-id</code> is URL-encoded.</p>
   */
  Expiration?: string;

  /**
   * @public
   * <p>Entity tag that identifies the newly created object's data. Objects with different
   *          object data will have different entity tags. The entity tag is an opaque string. The entity
   *          tag may or may not be an MD5 digest of the object data. If the entity tag is not an MD5
   *          digest of the object data, it will contain one or more nonhexadecimal characters and/or
   *          will consist of less than 32 or more than 32 hexadecimal digits. For more information about
   *          how the entity tag is calculated, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *             integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32 checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;

  /**
   * @public
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * @public
   * <p>Version ID of the newly created object, in case the bucket has versioning turned
   *          on.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>If present, specifies the ID of the Key Management Service (KMS) symmetric encryption customer managed key
   *          that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * @public
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption
   *          with Key Management Service (KMS) keys (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 * <p>Details of the parts that were uploaded.</p>
 */
export interface CompletedPart {
  /**
   * @public
   * <p>Entity tag returned when the part was uploaded.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32 checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;

  /**
   * @public
   * <p>Part number that identifies the part. This is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber?: number;
}

/**
 * @public
 * <p>The container for the completed multipart upload details.</p>
 */
export interface CompletedMultipartUpload {
  /**
   * @public
   * <p>Array of CompletedPart data types.</p>
   *          <p>If you do not supply a valid <code>Part</code> with your request, the service sends back
   *          an HTTP 400 response.</p>
   */
  Parts?: CompletedPart[];
}

/**
 * @public
 */
export interface CompleteMultipartUploadRequest {
  /**
   * @public
   * <p>Name of the bucket to which the multipart upload was initiated.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The container for the multipart upload request information.</p>
   */
  MultipartUpload?: CompletedMultipartUpload;

  /**
   * @public
   * <p>ID for the initiated multipart upload.</p>
   */
  UploadId: string | undefined;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 32-bit CRC32 checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 32-bit CRC32C checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 160-bit SHA-1 digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 256-bit SHA-256 digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created
   *     using a checksum algorithm. For more information,
   *     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm.
   *     For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  SSECustomerKey?: string;

  /**
   * @public
   * <p>The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum
   *     algorithm. For more information,
   *     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  SSECustomerKeyMD5?: string;
}

/**
 * @public
 * <p>Container for all response elements.</p>
 */
export interface CopyObjectResult {
  /**
   * @public
   * <p>Returns the ETag of the new object. The ETag reflects only changes to the contents of an
   *          object, not its metadata.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>Creation date of the object.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32 checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;
}

/**
 * @public
 */
export interface CopyObjectOutput {
  /**
   * @public
   * <p>Container for all response elements.</p>
   */
  CopyObjectResult?: CopyObjectResult;

  /**
   * @public
   * <p>If the object expiration is configured, the response includes this header.</p>
   */
  Expiration?: string;

  /**
   * @public
   * <p>Version of the copied object in the destination bucket.</p>
   */
  CopySourceVersionId?: string;

  /**
   * @public
   * <p>Version ID of the newly created copy.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>, <code>aws:kms:dsse</code>).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>If present, specifies the ID of the Key Management Service (KMS) symmetric encryption customer managed key
   *          that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * @public
   * <p>If present, specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The
   *          value of this header is a base64-encoded UTF-8 string holding JSON with the encryption
   *          context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * @public
   * <p>Indicates whether the copied object uses an S3 Bucket Key for server-side encryption
   *          with Key Management Service (KMS) keys (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 * @enum
 */
export const ObjectCannedACL = {
  authenticated_read: "authenticated-read",
  aws_exec_read: "aws-exec-read",
  bucket_owner_full_control: "bucket-owner-full-control",
  bucket_owner_read: "bucket-owner-read",
  private: "private",
  public_read: "public-read",
  public_read_write: "public-read-write",
} as const;

/**
 * @public
 */
export type ObjectCannedACL = (typeof ObjectCannedACL)[keyof typeof ObjectCannedACL];

/**
 * @public
 * @enum
 */
export const ChecksumAlgorithm = {
  CRC32: "CRC32",
  CRC32C: "CRC32C",
  SHA1: "SHA1",
  SHA256: "SHA256",
} as const;

/**
 * @public
 */
export type ChecksumAlgorithm = (typeof ChecksumAlgorithm)[keyof typeof ChecksumAlgorithm];

/**
 * @public
 * @enum
 */
export const MetadataDirective = {
  COPY: "COPY",
  REPLACE: "REPLACE",
} as const;

/**
 * @public
 */
export type MetadataDirective = (typeof MetadataDirective)[keyof typeof MetadataDirective];

/**
 * @public
 * @enum
 */
export const ObjectLockLegalHoldStatus = {
  OFF: "OFF",
  ON: "ON",
} as const;

/**
 * @public
 */
export type ObjectLockLegalHoldStatus = (typeof ObjectLockLegalHoldStatus)[keyof typeof ObjectLockLegalHoldStatus];

/**
 * @public
 * @enum
 */
export const ObjectLockMode = {
  COMPLIANCE: "COMPLIANCE",
  GOVERNANCE: "GOVERNANCE",
} as const;

/**
 * @public
 */
export type ObjectLockMode = (typeof ObjectLockMode)[keyof typeof ObjectLockMode];

/**
 * @public
 * @enum
 */
export const StorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  GLACIER_IR: "GLACIER_IR",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  OUTPOSTS: "OUTPOSTS",
  REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
  SNOW: "SNOW",
  STANDARD: "STANDARD",
  STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * @public
 */
export type StorageClass = (typeof StorageClass)[keyof typeof StorageClass];

/**
 * @public
 * @enum
 */
export const TaggingDirective = {
  COPY: "COPY",
  REPLACE: "REPLACE",
} as const;

/**
 * @public
 */
export type TaggingDirective = (typeof TaggingDirective)[keyof typeof TaggingDirective];

/**
 * @public
 */
export interface CopyObjectRequest {
  /**
   * @public
   * <p>The canned ACL to apply to the object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * @public
   * <p>The name of the destination bucket.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * @public
   * <p>Indicates the algorithm you want Amazon S3 to use to create the checksum for the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * @public
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * @public
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * @public
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>Specifies the source object for the copy operation. You specify the value in one of two
   *          formats, depending on whether you want to access the source object through an <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">access point</a>:</p>
   *          <ul>
   *             <li>
   *                <p>For objects not accessed through an access point, specify the name of the source bucket
   *                and the key of the source object, separated by a slash (/). For example, to copy the
   *                object <code>reports/january.pdf</code> from the bucket
   *                <code>awsexamplebucket</code>, use <code>awsexamplebucket/reports/january.pdf</code>.
   *                The value must be URL-encoded.</p>
   *             </li>
   *             <li>
   *                <p>For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format <code>arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through access point <code>my-access-point</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf</code>. The value must be URL encoded.</p>
   *                <note>
   *                   <p>Amazon S3 supports copy operations using access points only when the source and destination buckets are in the same Amazon Web Services Region.</p>
   *                </note>
   *                <p>Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf</code>. The value must be URL-encoded.  </p>
   *             </li>
   *          </ul>
   *          <p>To copy a specific version of an object, append <code>?versionId=<version-id></code>
   *          to the value (for example,
   *             <code>awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893</code>).
   *          If you don't specify a version ID, Amazon S3 copies the latest version of the source
   *          object.</p>
   */
  CopySource: string | undefined;

  /**
   * @public
   * <p>Copies the object if its entity tag (ETag) matches the specified tag.</p>
   */
  CopySourceIfMatch?: string;

  /**
   * @public
   * <p>Copies the object if it has been modified since the specified time.</p>
   */
  CopySourceIfModifiedSince?: Date;

  /**
   * @public
   * <p>Copies the object if its entity tag (ETag) is different than the specified ETag.</p>
   */
  CopySourceIfNoneMatch?: string;

  /**
   * @public
   * <p>Copies the object if it hasn't been modified since the specified time.</p>
   */
  CopySourceIfUnmodifiedSince?: Date;

  /**
   * @public
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * @public
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantFullControl?: string;

  /**
   * @public
   * <p>Allows grantee to read the object data and its metadata.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantRead?: string;

  /**
   * @public
   * <p>Allows grantee to read the object ACL.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantReadACP?: string;

  /**
   * @public
   * <p>Allows grantee to write the ACL for the applicable object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantWriteACP?: string;

  /**
   * @public
   * <p>The key of the destination object.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: Record<string, string>;

  /**
   * @public
   * <p>Specifies whether the metadata is copied from the source object or replaced with
   *          metadata provided in the request.</p>
   */
  MetadataDirective?: MetadataDirective | string;

  /**
   * @public
   * <p>Specifies whether the object tag-set are copied from the source object or replaced with
   *          tag-set provided in the request.</p>
   */
  TaggingDirective?: TaggingDirective | string;

  /**
   * @public
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>, <code>aws:kms:dsse</code>).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * @public
   * <p>If the <code>x-amz-storage-class</code> header is not used, the copied object will be stored in the
   *          STANDARD Storage Class by default. The STANDARD storage class provides high durability and
   *          high availability. Depending on performance needs, you can specify a different Storage
   *          Class. Amazon S3 on Outposts only uses the OUTPOSTS Storage Class. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage
   *             Classes</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * @public
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata. This value is unique to each object and is not copied when using the
   *             <code>x-amz-metadata-directive</code> header. Instead, you may opt to provide this
   *          header in combination with the directive.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * @public
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * @public
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>Specifies the KMS ID (Key ID, Key ARN, or Key Alias) to use for object encryption. All GET and PUT requests for an
   *          object protected by KMS will fail if they're not made via SSL or using SigV4. For
   *          information about configuring any of the officially supported Amazon Web Services SDKs and Amazon Web Services CLI, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version">Specifying the
   *             Signature Version in Request Authentication</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * @public
   * <p>Specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The value of
   *          this header is a base64-encoded UTF-8 string holding JSON with the encryption context
   *          key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * @public
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with
   *          server-side encryption using Key Management Service (KMS) keys (SSE-KMS). Setting this header to
   *             <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with
   *          SSE-KMS. </p>
   *          <p>Specifying this header with a COPY action doesn’t affect bucket-level settings for S3
   *          Bucket Key.</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * @public
   * <p>Specifies the algorithm to use when decrypting the source object (for example,
   *          AES256).</p>
   */
  CopySourceSSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source
   *          object. The encryption key provided in this header must be one that was used when the
   *          source object was created.</p>
   */
  CopySourceSSECustomerKey?: string;

  /**
   * @public
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  CopySourceSSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The tag-set for the object destination object this value must be used in conjunction
   *          with the <code>TaggingDirective</code>. The tag-set must be encoded as URL Query
   *          parameters.</p>
   */
  Tagging?: string;

  /**
   * @public
   * <p>The Object Lock mode that you want to apply to the copied object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * @public
   * <p>The date and time when you want the copied object's Object Lock to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * @public
   * <p>Specifies whether you want to apply a legal hold to the copied object.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * @public
   * <p>The account ID of the expected destination bucket owner. If the destination bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>The account ID of the expected source bucket owner. If the source bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedSourceBucketOwner?: string;
}

/**
 * @public
 * <p>The source object of the COPY action is not in the active tier and is only stored in
 *          Amazon S3 Glacier.</p>
 */
export class ObjectNotInActiveTierError extends __BaseException {
  readonly name: "ObjectNotInActiveTierError" = "ObjectNotInActiveTierError";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ObjectNotInActiveTierError, __BaseException>) {
    super({
      name: "ObjectNotInActiveTierError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ObjectNotInActiveTierError.prototype);
  }
}

/**
 * @public
 * <p>The requested bucket name is not available. The bucket namespace is shared by all users
 *          of the system. Select a different name and try again.</p>
 */
export class BucketAlreadyExists extends __BaseException {
  readonly name: "BucketAlreadyExists" = "BucketAlreadyExists";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketAlreadyExists, __BaseException>) {
    super({
      name: "BucketAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketAlreadyExists.prototype);
  }
}

/**
 * @public
 * <p>The bucket you tried to create already exists, and you own it. Amazon S3 returns this error
 *          in all Amazon Web Services Regions except in the North Virginia Region. For legacy compatibility, if you
 *          re-create an existing bucket that you already own in the North Virginia Region, Amazon S3
 *          returns 200 OK and resets the bucket access control lists (ACLs).</p>
 */
export class BucketAlreadyOwnedByYou extends __BaseException {
  readonly name: "BucketAlreadyOwnedByYou" = "BucketAlreadyOwnedByYou";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketAlreadyOwnedByYou, __BaseException>) {
    super({
      name: "BucketAlreadyOwnedByYou",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketAlreadyOwnedByYou.prototype);
  }
}

/**
 * @public
 */
export interface CreateBucketOutput {
  /**
   * @public
   * <p>A forward slash followed by the name of the bucket.</p>
   */
  Location?: string;
}

/**
 * @public
 * @enum
 */
export const BucketCannedACL = {
  authenticated_read: "authenticated-read",
  private: "private",
  public_read: "public-read",
  public_read_write: "public-read-write",
} as const;

/**
 * @public
 */
export type BucketCannedACL = (typeof BucketCannedACL)[keyof typeof BucketCannedACL];

/**
 * @public
 * @enum
 */
export const BucketLocationConstraint = {
  EU: "EU",
  af_south_1: "af-south-1",
  ap_east_1: "ap-east-1",
  ap_northeast_1: "ap-northeast-1",
  ap_northeast_2: "ap-northeast-2",
  ap_northeast_3: "ap-northeast-3",
  ap_south_1: "ap-south-1",
  ap_south_2: "ap-south-2",
  ap_southeast_1: "ap-southeast-1",
  ap_southeast_2: "ap-southeast-2",
  ap_southeast_3: "ap-southeast-3",
  ca_central_1: "ca-central-1",
  cn_north_1: "cn-north-1",
  cn_northwest_1: "cn-northwest-1",
  eu_central_1: "eu-central-1",
  eu_north_1: "eu-north-1",
  eu_south_1: "eu-south-1",
  eu_south_2: "eu-south-2",
  eu_west_1: "eu-west-1",
  eu_west_2: "eu-west-2",
  eu_west_3: "eu-west-3",
  me_south_1: "me-south-1",
  sa_east_1: "sa-east-1",
  us_east_2: "us-east-2",
  us_gov_east_1: "us-gov-east-1",
  us_gov_west_1: "us-gov-west-1",
  us_west_1: "us-west-1",
  us_west_2: "us-west-2",
} as const;

/**
 * @public
 */
export type BucketLocationConstraint = (typeof BucketLocationConstraint)[keyof typeof BucketLocationConstraint];

/**
 * @public
 * <p>The configuration information for the bucket.</p>
 */
export interface CreateBucketConfiguration {
  /**
   * @public
   * <p>Specifies the Region where the bucket will be created. If you don't specify a Region,
   *          the bucket is created in the US East (N. Virginia) Region (us-east-1).</p>
   */
  LocationConstraint?: BucketLocationConstraint | string;
}

/**
 * @public
 * @enum
 */
export const ObjectOwnership = {
  BucketOwnerEnforced: "BucketOwnerEnforced",
  BucketOwnerPreferred: "BucketOwnerPreferred",
  ObjectWriter: "ObjectWriter",
} as const;

/**
 * @public
 */
export type ObjectOwnership = (typeof ObjectOwnership)[keyof typeof ObjectOwnership];

/**
 * @public
 */
export interface CreateBucketRequest {
  /**
   * @public
   * <p>The canned ACL to apply to the bucket.</p>
   */
  ACL?: BucketCannedACL | string;

  /**
   * @public
   * <p>The name of the bucket to create.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The configuration information for the bucket.</p>
   */
  CreateBucketConfiguration?: CreateBucketConfiguration;

  /**
   * @public
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   */
  GrantFullControl?: string;

  /**
   * @public
   * <p>Allows grantee to list the objects in the bucket.</p>
   */
  GrantRead?: string;

  /**
   * @public
   * <p>Allows grantee to read the bucket ACL.</p>
   */
  GrantReadACP?: string;

  /**
   * @public
   * <p>Allows grantee to create new objects in the bucket.</p>
   *          <p>For the bucket and object owners of existing objects, also allows deletions and
   *          overwrites of those objects.</p>
   */
  GrantWrite?: string;

  /**
   * @public
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   */
  GrantWriteACP?: string;

  /**
   * @public
   * <p>Specifies whether you want S3 Object Lock to be enabled for the new bucket.</p>
   */
  ObjectLockEnabledForBucket?: boolean;

  /**
   * @public
   * <p>The container element for object ownership for a bucket's ownership controls.</p>
   *          <p>BucketOwnerPreferred - Objects uploaded to the bucket change ownership to the bucket
   *          owner if the objects are uploaded with the <code>bucket-owner-full-control</code> canned
   *          ACL.</p>
   *          <p>ObjectWriter - The uploading account will own the object if the object is uploaded with
   *          the <code>bucket-owner-full-control</code> canned ACL.</p>
   *          <p>BucketOwnerEnforced - Access control lists (ACLs) are disabled and no longer affect
   *          permissions. The bucket owner automatically owns and has full control over every object in
   *          the bucket. The bucket only accepts PUT requests that don't specify an ACL or bucket owner
   *          full control ACLs, such as the <code>bucket-owner-full-control</code> canned ACL or an
   *          equivalent form of this ACL expressed in the XML format.</p>
   */
  ObjectOwnership?: ObjectOwnership | string;
}

/**
 * @public
 */
export interface CreateMultipartUploadOutput {
  /**
   * @public
   * <p>If the bucket has a lifecycle rule configured with an action to abort incomplete
   *          multipart uploads and the prefix in the lifecycle rule matches the object name in the
   *          request, the response includes this header. The header indicates when the initiated
   *          multipart upload becomes eligible for an abort operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
   *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle
   *          Configuration</a>.</p>
   *          <p>The response also includes the <code>x-amz-abort-rule-id</code> header that provides the
   *          ID of the lifecycle configuration rule that defines this action.</p>
   */
  AbortDate?: Date;

  /**
   * @public
   * <p>This header is returned along with the <code>x-amz-abort-date</code> header. It
   *          identifies the applicable lifecycle configuration rule that defines the action to abort
   *          incomplete multipart uploads.</p>
   */
  AbortRuleId?: string;

  /**
   * @public
   * <p>The name of the bucket to which the multipart upload was initiated. Does not return the
   *          access point ARN or access point alias if used.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>ID for the initiated multipart upload.</p>
   */
  UploadId?: string;

  /**
   * @public
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>If present, specifies the ID of the Key Management Service (KMS) symmetric encryption customer managed key
   *          that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * @public
   * <p>If present, specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The
   *          value of this header is a base64-encoded UTF-8 string holding JSON with the encryption
   *          context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * @public
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption
   *          with Key Management Service (KMS) keys (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * @public
   * <p>The algorithm that was used to create a checksum of the object.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}

/**
 * @public
 */
export interface CreateMultipartUploadRequest {
  /**
   * @public
   * <p>The canned ACL to apply to the object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * @public
   * <p>The name of the bucket to which to initiate the upload</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * @public
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * @public
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * @public
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * @public
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * @public
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantFullControl?: string;

  /**
   * @public
   * <p>Allows grantee to read the object data and its metadata.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantRead?: string;

  /**
   * @public
   * <p>Allows grantee to read the object ACL.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantReadACP?: string;

  /**
   * @public
   * <p>Allows grantee to write the ACL for the applicable object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantWriteACP?: string;

  /**
   * @public
   * <p>Object key for which the multipart upload is to be initiated.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: Record<string, string>;

  /**
   * @public
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * @public
   * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
   *          STANDARD storage class provides high durability and high availability. Depending on
   *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
   *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * @public
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * @public
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * @public
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>Specifies the ID (Key ID, Key ARN, or Key Alias) of the symmetric encryption customer managed key to use for object encryption.
   *          All GET and PUT requests for an object protected by KMS will fail if they're not made via
   *          SSL or using SigV4. For information about configuring any of the officially supported Amazon Web Services
   *          SDKs and Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version">Specifying the Signature Version in Request Authentication</a>
   *          in the <i>Amazon S3 User Guide</i>.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * @public
   * <p>Specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The value of
   *          this header is a base64-encoded UTF-8 string holding JSON with the encryption context
   *          key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * @public
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with
   *          server-side encryption using Key Management Service (KMS) keys (SSE-KMS). Setting this header to
   *             <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with
   *          SSE-KMS.</p>
   *          <p>Specifying this header with an object action doesn’t affect bucket-level settings for S3
   *          Bucket Key.</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters.</p>
   */
  Tagging?: string;

  /**
   * @public
   * <p>Specifies the Object Lock mode that you want to apply to the uploaded object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * @public
   * <p>Specifies the date and time when you want the Object Lock to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * @public
   * <p>Specifies whether you want to apply a legal hold to the uploaded object.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>Indicates the algorithm you want Amazon S3 to use to create the checksum for the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}

/**
 * @public
 */
export interface DeleteBucketRequest {
  /**
   * @public
   * <p>Specifies the bucket being deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface DeleteBucketAnalyticsConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket from which an analytics configuration is deleted.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface DeleteBucketCorsRequest {
  /**
   * @public
   * <p>Specifies the bucket whose <code>cors</code> configuration is being deleted.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface DeleteBucketEncryptionRequest {
  /**
   * @public
   * <p>The name of the bucket containing the server-side encryption configuration to
   *          delete.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface DeleteBucketIntelligentTieringConfigurationRequest {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketInventoryConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket containing the inventory configuration to delete.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface DeleteBucketLifecycleRequest {
  /**
   * @public
   * <p>The bucket name of the lifecycle to delete.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface DeleteBucketMetricsConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket containing the metrics configuration to delete.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The ID used to identify the metrics configuration. The ID has a 64 character limit and
   *          can only contain letters, numbers, periods, dashes, and underscores.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface DeleteBucketOwnershipControlsRequest {
  /**
   * @public
   * <p>The Amazon S3 bucket whose <code>OwnershipControls</code> you want to delete. </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface DeleteBucketPolicyRequest {
  /**
   * @public
   * <p>The bucket name.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface DeleteBucketReplicationRequest {
  /**
   * @public
   * <p> The bucket name. </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface DeleteBucketTaggingRequest {
  /**
   * @public
   * <p>The bucket that has the tag set to be removed.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface DeleteBucketWebsiteRequest {
  /**
   * @public
   * <p>The bucket name for which you want to remove the website configuration. </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface DeleteObjectOutput {
  /**
   * @public
   * <p>Indicates whether the specified object version that was permanently deleted was (true) or was
   *          not (false) a delete marker before deletion. In a simple DELETE, this header indicates whether (true) or
   *          not (false) the current version of the object is a delete marker.</p>
   */
  DeleteMarker?: boolean;

  /**
   * @public
   * <p>Returns the version ID of the delete marker created as a result of the DELETE
   *          operation.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 */
export interface DeleteObjectRequest {
  /**
   * @public
   * <p>The bucket name of the bucket containing the object. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Key name of the object to delete.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device. Required to permanently delete a versioned
   *          object if versioning is configured with MFA delete enabled.</p>
   */
  MFA?: string;

  /**
   * @public
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>Indicates whether S3 Object Lock should bypass Governance-mode restrictions to process
   *          this operation. To use this header, you must have the
   *             <code>s3:BypassGovernanceRetention</code> permission.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>Information about the deleted object.</p>
 */
export interface DeletedObject {
  /**
   * @public
   * <p>The name of the deleted object.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The version ID of the deleted object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Indicates whether the specified object version that was permanently deleted was (true) or was
   *          not (false) a delete marker before deletion. In a simple DELETE, this header indicates whether (true) or
   *          not (false) the current version of the object is a delete marker.</p>
   */
  DeleteMarker?: boolean;

  /**
   * @public
   * <p>The version ID of the delete marker created as a result of the DELETE operation. If you
   *          delete a specific object version, the value returned by this header is the version ID of
   *          the object version deleted.</p>
   */
  DeleteMarkerVersionId?: string;
}

/**
 * @public
 * <p>Container for all error elements.</p>
 */
export interface _Error {
  /**
   * @public
   * <p>The error key.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The version ID of the error.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>The error code is a string that uniquely identifies an error condition. It is meant to
   *          be read and understood by programs that detect and handle errors by type. The following is
   *          a list of Amazon S3 error codes. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html">Error responses</a>.</p>
   *          <ul>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AccessDenied </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Access Denied</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AccountProblem</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> There is a problem with your Amazon Web Services account
   *                      that prevents the action from completing successfully. Contact Amazon Web Services Support
   *                      for further assistance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AllAccessDisabled</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> All access to this Amazon S3 resource has been
   *                      disabled. Contact Amazon Web Services Support for further assistance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AmbiguousGrantByEmailAddress</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The email address you provided is
   *                      associated with more than one account.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AuthorizationHeaderMalformed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The authorization header you provided is
   *                      invalid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> BadDigest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The Content-MD5 you specified did not
   *                      match what we received.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> BucketAlreadyExists</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The requested bucket name is not
   *                      available. The bucket namespace is shared by all users of the system. Please
   *                      select a different name and try again.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> BucketAlreadyOwnedByYou</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The bucket you tried to create already
   *                      exists, and you own it. Amazon S3 returns this error in all Amazon Web Services Regions except in
   *                      the North Virginia Region. For legacy compatibility, if you re-create an
   *                      existing bucket that you already own in the North Virginia Region, Amazon S3 returns
   *                      200 OK and resets the bucket access control lists (ACLs).</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> 409 Conflict (in all Regions except the North
   *                      Virginia Region) </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> BucketNotEmpty</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The bucket you tried to delete is not
   *                      empty.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> CredentialsNotSupported</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> This request does not support
   *                      credentials.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> CrossLocationLoggingProhibited</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Cross-location logging not allowed.
   *                      Buckets in one geographic location cannot log information to a bucket in
   *                      another location.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> EntityTooSmall</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your proposed upload is smaller than the
   *                      minimum allowed object size.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> EntityTooLarge</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your proposed upload exceeds the maximum
   *                      allowed object size.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> ExpiredToken</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The provided token has expired.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> IllegalVersioningConfigurationException </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Indicates that the versioning
   *                      configuration specified in the request is invalid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> IncompleteBody</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You did not provide the number of bytes
   *                      specified by the Content-Length HTTP header</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> IncorrectNumberOfFilesInPostRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> POST requires exactly one file upload per
   *                      request.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InlineDataTooLarge</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Inline data exceeds the maximum allowed
   *                      size.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InternalError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> We encountered an internal error. Please
   *                      try again.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 500 Internal Server Error</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Server</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidAccessKeyId</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The Amazon Web Services access key ID you provided does
   *                      not exist in our records.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidAddressingHeader</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You must specify the Anonymous
   *                      role.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> N/A</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidArgument</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Invalid Argument</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidBucketName</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified bucket is not valid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidBucketState</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The request is not valid with the current
   *                      state of the bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidDigest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The Content-MD5 you specified is not
   *                      valid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidEncryptionAlgorithmError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The encryption request you specified is
   *                      not valid. The valid value is AES256.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidLocationConstraint</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified location constraint is not
   *                      valid. For more information about Regions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro">How to Select
   *                         a Region for Your Buckets</a>. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidObjectState</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The action is not valid for the current
   *                      state of the object.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidPart</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> One or more of the specified parts could
   *                      not be found. The part might not have been uploaded, or the specified entity
   *                      tag might not have matched the part's entity tag.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidPartOrder</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The list of parts was not in ascending
   *                      order. Parts list must be specified in order by part number.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidPayer</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> All access to this object has been
   *                      disabled. Please contact Amazon Web Services Support for further assistance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidPolicyDocument</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The content of the form does not meet the
   *                      conditions specified in the policy document.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRange</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The requested range cannot be
   *                      satisfied.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 416 Requested Range Not
   *                      Satisfiable</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Please use
   *                      <code>AWS4-HMAC-SHA256</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> SOAP requests must be made over an HTTPS
   *                      connection.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not
   *                      supported for buckets with non-DNS compliant names.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not
   *                      supported for buckets with periods (.) in their names.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Accelerate endpoint only
   *                      supports virtual style requests.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Accelerate is not configured
   *                      on this bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Accelerate is disabled on
   *                      this bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not
   *                      supported on this bucket. Contact Amazon Web Services Support for more information.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration cannot be
   *                      enabled on this bucket. Contact Amazon Web Services Support for more information.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidSecurity</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The provided security credentials are not
   *                      valid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidSOAPRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The SOAP request body is invalid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidStorageClass</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The storage class you specified is not
   *                      valid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidTargetBucketForLogging</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The target bucket for logging does not
   *                      exist, is not owned by you, or does not have the appropriate grants for the
   *                      log-delivery group. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidToken</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The provided token is malformed or
   *                      otherwise invalid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidURI</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Couldn't parse the specified URI.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> KeyTooLongError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your key is too long.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MalformedACLError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The XML you provided was not well-formed
   *                      or did not validate against our published schema.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MalformedPOSTRequest </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The body of your POST request is not
   *                      well-formed multipart/form-data.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MalformedXML</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> This happens when the user sends malformed
   *                      XML (XML that doesn't conform to the published XSD) for the configuration. The
   *                      error message is, "The XML you provided was not well-formed or did not validate
   *                      against our published schema." </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MaxMessageLengthExceeded</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your request was too big.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MaxPostPreDataLengthExceededError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your POST request fields preceding the
   *                      upload file were too large.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MetadataTooLarge</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your metadata headers exceed the maximum
   *                      allowed metadata size.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MethodNotAllowed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified method is not allowed
   *                      against this resource.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 405 Method Not Allowed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingAttachment</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> A SOAP attachment was expected, but none
   *                      were found.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> N/A</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingContentLength</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You must provide the Content-Length HTTP
   *                      header.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 411 Length Required</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingRequestBodyError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> This happens when the user sends an empty
   *                      XML document as a request. The error message is, "Request body is empty."
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingSecurityElement</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The SOAP 1.1 request is missing a security
   *                      element.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingSecurityHeader</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your request is missing a required
   *                      header.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoLoggingStatusForKey</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> There is no such thing as a logging status
   *                      subresource for a key.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchBucket</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified bucket does not
   *                      exist.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchBucketPolicy</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified bucket does not have a
   *                      bucket policy.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchKey</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified key does not exist.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchLifecycleConfiguration</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The lifecycle configuration does not
   *                      exist. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchUpload</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified multipart upload does not
   *                      exist. The upload ID might be invalid, or the multipart upload might have been
   *                      aborted or completed.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchVersion </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Indicates that the version ID specified in
   *                      the request does not match an existing version.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NotImplemented</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> A header you provided implies
   *                      functionality that is not implemented.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 501 Not Implemented</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Server</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NotSignedUp</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your account is not signed up for the Amazon S3
   *                      service. You must sign up before you can use Amazon S3. You can sign up at the
   *                      following URL: <a href="http://aws.amazon.com/s3">Amazon S3</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> OperationAborted</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> A conflicting conditional action is
   *                      currently in progress against this resource. Try again.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> PermanentRedirect</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The bucket you are attempting to access
   *                      must be addressed using the specified endpoint. Send all future requests to
   *                      this endpoint.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 301 Moved Permanently</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> PreconditionFailed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> At least one of the preconditions you
   *                      specified did not hold.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 412 Precondition Failed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> Redirect</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Temporary redirect.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 307 Moved Temporarily</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RestoreAlreadyInProgress</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Object restore is already in
   *                      progress.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RequestIsNotMultiPartContent</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Bucket POST must be of the enclosure-type
   *                      multipart/form-data.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RequestTimeout</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your socket connection to the server was
   *                      not read from or written to within the timeout period.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RequestTimeTooSkewed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The difference between the request time
   *                      and the server's time is too large.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RequestTorrentOfBucketError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Requesting the torrent file of a bucket is
   *                      not permitted.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> SignatureDoesNotMatch</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The request signature we calculated does
   *                      not match the signature you provided. Check your Amazon Web Services secret access key and
   *                      signing method. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST
   *                         Authentication</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/SOAPAuthentication.html">SOAP
   *                         Authentication</a> for details.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> ServiceUnavailable</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Service is unable to handle
   *                      request.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 503 Service Unavailable</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Server</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> SlowDown</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Reduce your request rate.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 503 Slow Down</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Server</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> TemporaryRedirect</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You are being redirected to the bucket
   *                      while DNS updates.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 307 Moved Temporarily</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> TokenRefreshRequired</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The provided token must be
   *                      refreshed.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> TooManyBuckets</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You have attempted to create more buckets
   *                      than allowed.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> UnexpectedContent</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> This request does not support
   *                      content.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> UnresolvableGrantByEmailAddress</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The email address you provided does not
   *                      match any account on record.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> UserKeyMustBeSpecified</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The bucket POST must contain the specified
   *                      field name. If it is specified, check the order of the fields.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p></p>
   */
  Code?: string;

  /**
   * @public
   * <p>The error message contains a generic description of the error condition in English. It
   *          is intended for a human audience. Simple programs display the message directly to the end
   *          user if they encounter an error condition they don't know how or don't care to handle.
   *          Sophisticated programs with more exhaustive error handling and proper internationalization
   *          are more likely to ignore the error message.</p>
   */
  Message?: string;
}

/**
 * @public
 */
export interface DeleteObjectsOutput {
  /**
   * @public
   * <p>Container element for a successful delete. It identifies the object that was
   *          successfully deleted.</p>
   */
  Deleted?: DeletedObject[];

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * @public
   * <p>Container for a failed delete action that describes the object that Amazon S3 attempted to
   *          delete and the error it encountered.</p>
   */
  Errors?: _Error[];
}

/**
 * @public
 * <p>Object Identifier is unique value to identify objects.</p>
 */
export interface ObjectIdentifier {
  /**
   * @public
   * <p>Key name of the object.</p>
   *          <important>
   *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
   *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML related object key constraints</a>.</p>
   *          </important>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>VersionId for the specific version of the object to delete.</p>
   */
  VersionId?: string;
}

/**
 * @public
 * <p>Container for the objects to delete.</p>
 */
export interface Delete {
  /**
   * @public
   * <p>The object to delete.</p>
   */
  Objects: ObjectIdentifier[] | undefined;

  /**
   * @public
   * <p>Element to enable quiet mode for the request. When you add this element, you must set
   *          its value to true.</p>
   */
  Quiet?: boolean;
}

/**
 * @public
 */
export interface DeleteObjectsRequest {
  /**
   * @public
   * <p>The bucket name containing the objects to delete. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Container for the request.</p>
   */
  Delete: Delete | undefined;

  /**
   * @public
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device. Required to permanently delete a versioned
   *          object if versioning is configured with MFA delete enabled.</p>
   */
  MFA?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>Specifies whether you want to delete this object even if it has a Governance-type Object
   *          Lock in place. To use this header, you must have the
   *             <code>s3:BypassGovernanceRetention</code> permission.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   *          <p>This checksum algorithm must be the same for all parts and it match the checksum value
   *          supplied in the <code>CreateMultipartUpload</code> request.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}

/**
 * @public
 */
export interface DeleteObjectTaggingOutput {
  /**
   * @public
   * <p>The versionId of the object the tag-set was removed from.</p>
   */
  VersionId?: string;
}

/**
 * @public
 */
export interface DeleteObjectTaggingRequest {
  /**
   * @public
   * <p>The bucket name containing the objects from which to remove the tags. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The key that identifies the object in the bucket from which to remove all tags.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The versionId of the object that the tag-set will be removed from.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface DeletePublicAccessBlockRequest {
  /**
   * @public
   * <p>The Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want to delete.
   *       </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface GetBucketAccelerateConfigurationOutput {
  /**
   * @public
   * <p>The accelerate configuration of the bucket.</p>
   */
  Status?: BucketAccelerateStatus | string;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 */
export interface GetBucketAccelerateConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket for which the accelerate configuration is retrieved.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;
}

/**
 * @public
 */
export interface GetBucketAclOutput {
  /**
   * @public
   * <p>Container for the bucket owner's display name and ID.</p>
   */
  Owner?: Owner;

  /**
   * @public
   * <p>A list of grants.</p>
   */
  Grants?: Grant[];
}

/**
 * @public
 */
export interface GetBucketAclRequest {
  /**
   * @public
   * <p>Specifies the S3 bucket whose ACL is being requested.</p>
   *          <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p>
   *          <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name.
   * If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned.
   * For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of
   *             Error Codes</a>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>A container of a key value name pair.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>Name of the object key.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Value of the tag.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter.
 *          The operator must have at least two predicates in any combination, and an object must match
 *          all of the predicates for the filter to apply.</p>
 */
export interface AnalyticsAndOperator {
  /**
   * @public
   * <p>The prefix to use when evaluating an AND predicate: The prefix that an object must have
   *          to be included in the metrics results.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>The list of tags to use when evaluating an AND predicate.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The filter used to describe a set of objects for analyses. A filter must have exactly
 *          one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided,
 *          all objects will be considered in any analysis.</p>
 */
export type AnalyticsFilter =
  | AnalyticsFilter.AndMember
  | AnalyticsFilter.PrefixMember
  | AnalyticsFilter.TagMember
  | AnalyticsFilter.$UnknownMember;

/**
 * @public
 */
export namespace AnalyticsFilter {
  /**
   * @public
   * <p>The prefix to use when evaluating an analytics filter.</p>
   */
  export interface PrefixMember {
    Prefix: string;
    Tag?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The tag to use when evaluating an analytics filter.</p>
   */
  export interface TagMember {
    Prefix?: never;
    Tag: Tag;
    And?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating an analytics
   *          filter. The operator must have at least two predicates.</p>
   */
  export interface AndMember {
    Prefix?: never;
    Tag?: never;
    And: AnalyticsAndOperator;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    And?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    And: (value: AnalyticsAndOperator) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AnalyticsFilter, visitor: Visitor<T>): T => {
    if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
    if (value.Tag !== undefined) return visitor.Tag(value.Tag);
    if (value.And !== undefined) return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AnalyticsS3ExportFileFormat = {
  CSV: "CSV",
} as const;

/**
 * @public
 */
export type AnalyticsS3ExportFileFormat =
  (typeof AnalyticsS3ExportFileFormat)[keyof typeof AnalyticsS3ExportFileFormat];

/**
 * @public
 * <p>Contains information about where to publish the analytics results.</p>
 */
export interface AnalyticsS3BucketDestination {
  /**
   * @public
   * <p>Specifies the file format used when exporting data to Amazon S3.</p>
   */
  Format: AnalyticsS3ExportFileFormat | string | undefined;

  /**
   * @public
   * <p>The account ID that owns the destination S3 bucket. If no account ID is provided, the
   *          owner is not validated before exporting data.</p>
   *          <note>
   *             <p> Although this value is optional, we strongly recommend that you set it to help
   *             prevent problems if the destination bucket ownership changes. </p>
   *          </note>
   */
  BucketAccountId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bucket to which data is exported.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The prefix to use when exporting data. The prefix is prepended to all results.</p>
   */
  Prefix?: string;
}

/**
 * @public
 * <p>Where to publish the analytics results.</p>
 */
export interface AnalyticsExportDestination {
  /**
   * @public
   * <p>A destination signifying output to an S3 bucket.</p>
   */
  S3BucketDestination: AnalyticsS3BucketDestination | undefined;
}

/**
 * @public
 * @enum
 */
export const StorageClassAnalysisSchemaVersion = {
  V_1: "V_1",
} as const;

/**
 * @public
 */
export type StorageClassAnalysisSchemaVersion =
  (typeof StorageClassAnalysisSchemaVersion)[keyof typeof StorageClassAnalysisSchemaVersion];

/**
 * @public
 * <p>Container for data related to the storage class analysis for an Amazon S3 bucket for
 *          export.</p>
 */
export interface StorageClassAnalysisDataExport {
  /**
   * @public
   * <p>The version of the output schema to use when exporting data. Must be
   *          <code>V_1</code>.</p>
   */
  OutputSchemaVersion: StorageClassAnalysisSchemaVersion | string | undefined;

  /**
   * @public
   * <p>The place to store the data for an analysis.</p>
   */
  Destination: AnalyticsExportDestination | undefined;
}

/**
 * @public
 * <p>Specifies data related to access patterns to be collected and made available to analyze
 *          the tradeoffs between different storage classes for an Amazon S3 bucket.</p>
 */
export interface StorageClassAnalysis {
  /**
   * @public
   * <p>Specifies how data related to the storage class analysis for an Amazon S3 bucket should be
   *          exported.</p>
   */
  DataExport?: StorageClassAnalysisDataExport;
}

/**
 * @public
 * <p>Specifies the configuration and any analyses for the analytics filter of an Amazon S3
 *          bucket.</p>
 */
export interface AnalyticsConfiguration {
  /**
   * @public
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The filter used to describe a set of objects for analyses. A filter must have exactly
   *          one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided,
   *          all objects will be considered in any analysis.</p>
   */
  Filter?: AnalyticsFilter;

  /**
   * @public
   * <p> Contains data related to access patterns to be collected and made available to analyze
   *          the tradeoffs between different storage classes. </p>
   */
  StorageClassAnalysis: StorageClassAnalysis | undefined;
}

/**
 * @public
 */
export interface GetBucketAnalyticsConfigurationOutput {
  /**
   * @public
   * <p>The configuration and any analyses for the analytics filter.</p>
   */
  AnalyticsConfiguration?: AnalyticsConfiguration;
}

/**
 * @public
 */
export interface GetBucketAnalyticsConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket from which an analytics configuration is retrieved.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>Specifies a cross-origin access rule for an Amazon S3 bucket.</p>
 */
export interface CORSRule {
  /**
   * @public
   * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
   */
  ID?: string;

  /**
   * @public
   * <p>Headers that are specified in the <code>Access-Control-Request-Headers</code> header.
   *          These headers are allowed in a preflight OPTIONS request. In response to any preflight
   *          OPTIONS request, Amazon S3 returns any requested headers that are allowed.</p>
   */
  AllowedHeaders?: string[];

  /**
   * @public
   * <p>An HTTP method that you allow the origin to execute. Valid values are <code>GET</code>,
   *             <code>PUT</code>, <code>HEAD</code>, <code>POST</code>, and <code>DELETE</code>.</p>
   */
  AllowedMethods: string[] | undefined;

  /**
   * @public
   * <p>One or more origins you want customers to be able to access the bucket from.</p>
   */
  AllowedOrigins: string[] | undefined;

  /**
   * @public
   * <p>One or more headers in the response that you want customers to be able to access from
   *          their applications (for example, from a JavaScript <code>XMLHttpRequest</code>
   *          object).</p>
   */
  ExposeHeaders?: string[];

  /**
   * @public
   * <p>The time in seconds that your browser is to cache the preflight response for the
   *          specified resource.</p>
   */
  MaxAgeSeconds?: number;
}

/**
 * @public
 */
export interface GetBucketCorsOutput {
  /**
   * @public
   * <p>A set of origins and methods (cross-origin access that you want to allow). You can add
   *          up to 100 rules to the configuration.</p>
   */
  CORSRules?: CORSRule[];
}

/**
 * @public
 */
export interface GetBucketCorsRequest {
  /**
   * @public
   * <p>The bucket name for which to get the cors configuration.</p>
   *          <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p>
   *          <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name.
   * If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned.
   * For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of
   *             Error Codes</a>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>Describes the default server-side encryption to apply to new objects in the bucket. If a
 *          PUT Object request doesn't specify any server-side encryption, this default encryption will
 *          be applied. If you don't specify a customer managed key at configuration, Amazon S3 automatically creates
 *          an Amazon Web Services KMS key in your Amazon Web Services account the first time that you add an object encrypted
 *          with SSE-KMS to a bucket. By default, Amazon S3 uses this KMS key for SSE-KMS. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html">PUT Bucket encryption</a> in
 *          the <i>Amazon S3 API Reference</i>.</p>
 */
export interface ServerSideEncryptionByDefault {
  /**
   * @public
   * <p>Server-side encryption algorithm to use for the default encryption.</p>
   */
  SSEAlgorithm: ServerSideEncryption | string | undefined;

  /**
   * @public
   * <p>Amazon Web Services Key Management Service (KMS) customer Amazon Web Services KMS key ID to use for the default
   *          encryption. This parameter is allowed if and only if <code>SSEAlgorithm</code> is set to
   *             <code>aws:kms</code>.</p>
   *          <p>You can specify the key ID, key alias, or the Amazon Resource Name (ARN) of the KMS
   *          key.</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key Alias: <code>alias/alias-name</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you use a key ID, you can run into a LogDestination undeliverable error when creating
   *          a VPC flow log. </p>
   *          <p>If you are using encryption with cross-account or Amazon Web Services service operations you must use
   *          a fully qualified KMS key ARN. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html#bucket-encryption-update-bucket-policy">Using encryption for cross-account operations</a>.</p>
   *          <important>
   *             <p>Amazon S3 only supports symmetric encryption KMS keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric keys in Amazon Web Services KMS</a> in the <i>Amazon Web Services Key Management Service
   *                Developer Guide</i>.</p>
   *          </important>
   */
  KMSMasterKeyID?: string;
}

/**
 * @public
 * <p>Specifies the default server-side encryption configuration.</p>
 */
export interface ServerSideEncryptionRule {
  /**
   * @public
   * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a
   *          PUT Object request doesn't specify any server-side encryption, this default encryption will
   *          be applied.</p>
   */
  ApplyServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;

  /**
   * @public
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS
   *          (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Setting the
   *             <code>BucketKeyEnabled</code> element to <code>true</code> causes Amazon S3 to use an S3
   *          Bucket Key. By default, S3 Bucket Key is not enabled.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html">Amazon S3 Bucket Keys</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  BucketKeyEnabled?: boolean;
}

/**
 * @public
 * <p>Specifies the default server-side-encryption configuration.</p>
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * @public
   * <p>Container for information about a particular server-side encryption configuration
   *          rule.</p>
   */
  Rules: ServerSideEncryptionRule[] | undefined;
}

/**
 * @public
 */
export interface GetBucketEncryptionOutput {
  /**
   * @public
   * <p>Specifies the default server-side-encryption configuration.</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}

/**
 * @public
 */
export interface GetBucketEncryptionRequest {
  /**
   * @public
   * <p>The name of the bucket from which the server-side encryption configuration is
   *          retrieved.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>A container for specifying S3 Intelligent-Tiering filters. The filters determine the
 *          subset of objects to which the rule applies.</p>
 */
export interface IntelligentTieringAndOperator {
  /**
   * @public
   * <p>An object key name prefix that identifies the subset of objects to which the
   *          configuration applies.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>All of these tags must exist in the object's tag set in order for the configuration to
   *          apply.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The <code>Filter</code> is used to identify objects that the S3 Intelligent-Tiering
 *          configuration applies to.</p>
 */
export interface IntelligentTieringFilter {
  /**
   * @public
   * <p>An object key name prefix that identifies the subset of objects to which the rule
   *          applies.</p>
   *          <important>
   *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
   *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML related object key constraints</a>.</p>
   *          </important>
   */
  Prefix?: string;

  /**
   * @public
   * <p>A container of a key value name pair.</p>
   */
  Tag?: Tag;

  /**
   * @public
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter.
   *          The operator must have at least two predicates, and an object must match all of the
   *          predicates in order for the filter to apply.</p>
   */
  And?: IntelligentTieringAndOperator;
}

/**
 * @public
 * @enum
 */
export const IntelligentTieringStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type IntelligentTieringStatus = (typeof IntelligentTieringStatus)[keyof typeof IntelligentTieringStatus];

/**
 * @public
 * @enum
 */
export const IntelligentTieringAccessTier = {
  ARCHIVE_ACCESS: "ARCHIVE_ACCESS",
  DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS",
} as const;

/**
 * @public
 */
export type IntelligentTieringAccessTier =
  (typeof IntelligentTieringAccessTier)[keyof typeof IntelligentTieringAccessTier];

/**
 * @public
 * <p>The S3 Intelligent-Tiering storage class is designed to optimize storage costs by
 *          automatically moving data to the most cost-effective storage access tier, without
 *          additional operational overhead.</p>
 */
export interface Tiering {
  /**
   * @public
   * <p>The number of consecutive days of no access after which an object will be eligible to be
   *          transitioned to the corresponding tier. The minimum number of days specified for
   *          Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least
   *          180 days. The maximum can be up to 2 years (730 days).</p>
   */
  Days: number | undefined;

  /**
   * @public
   * <p>S3 Intelligent-Tiering access tier. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class
   *             for automatically optimizing frequently and infrequently accessed objects</a> for a
   *          list of access tiers in the S3 Intelligent-Tiering storage class.</p>
   */
  AccessTier: IntelligentTieringAccessTier | string | undefined;
}

/**
 * @public
 * <p>Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.</p>
 *          <p>For information about the S3 Intelligent-Tiering storage class, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class
 *             for automatically optimizing frequently and infrequently accessed
 *          objects</a>.</p>
 */
export interface IntelligentTieringConfiguration {
  /**
   * @public
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Specifies a bucket filter. The configuration only includes objects that meet the
   *          filter's criteria.</p>
   */
  Filter?: IntelligentTieringFilter;

  /**
   * @public
   * <p>Specifies the status of the configuration.</p>
   */
  Status: IntelligentTieringStatus | string | undefined;

  /**
   * @public
   * <p>Specifies the S3 Intelligent-Tiering storage class tier of the configuration.</p>
   */
  Tierings: Tiering[] | undefined;
}

/**
 * @public
 */
export interface GetBucketIntelligentTieringConfigurationOutput {
  /**
   * @public
   * <p>Container for S3 Intelligent-Tiering configuration.</p>
   */
  IntelligentTieringConfiguration?: IntelligentTieringConfiguration;
}

/**
 * @public
 */
export interface GetBucketIntelligentTieringConfigurationRequest {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>Specifies the use of SSE-KMS to encrypt delivered inventory reports.</p>
 */
export interface SSEKMS {
  /**
   * @public
   * <p>Specifies the ID of the Key Management Service (KMS) symmetric encryption customer managed key to use for
   *          encrypting inventory reports.</p>
   */
  KeyId: string | undefined;
}

/**
 * @public
 * <p>Specifies the use of SSE-S3 to encrypt delivered inventory reports.</p>
 */
export interface SSES3 {}

/**
 * @public
 * <p>Contains the type of server-side encryption used to encrypt the inventory
 *          results.</p>
 */
export interface InventoryEncryption {
  /**
   * @public
   * <p>Specifies the use of SSE-S3 to encrypt delivered inventory reports.</p>
   */
  SSES3?: SSES3;

  /**
   * @public
   * <p>Specifies the use of SSE-KMS to encrypt delivered inventory reports.</p>
   */
  SSEKMS?: SSEKMS;
}

/**
 * @public
 * @enum
 */
export const InventoryFormat = {
  CSV: "CSV",
  ORC: "ORC",
  Parquet: "Parquet",
} as const;

/**
 * @public
 */
export type InventoryFormat = (typeof InventoryFormat)[keyof typeof InventoryFormat];

/**
 * @public
 * <p>Contains the bucket name, file format, bucket owner (optional), and prefix (optional)
 *          where inventory results are published.</p>
 */
export interface InventoryS3BucketDestination {
  /**
   * @public
   * <p>The account ID that owns the destination S3 bucket. If no account ID is provided, the
   *          owner is not validated before exporting data. </p>
   *          <note>
   *             <p> Although this value is optional, we strongly recommend that you set it to help
   *             prevent problems if the destination bucket ownership changes. </p>
   *          </note>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the bucket where inventory results will be
   *          published.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Specifies the output format of the inventory results.</p>
   */
  Format: InventoryFormat | string | undefined;

  /**
   * @public
   * <p>The prefix that is prepended to all inventory results.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>Contains the type of server-side encryption used to encrypt the inventory
   *          results.</p>
   */
  Encryption?: InventoryEncryption;
}

/**
 * @public
 * <p>Specifies the inventory configuration for an Amazon S3 bucket.</p>
 */
export interface InventoryDestination {
  /**
   * @public
   * <p>Contains the bucket name, file format, bucket owner (optional), and prefix (optional)
   *          where inventory results are published.</p>
   */
  S3BucketDestination: InventoryS3BucketDestination | undefined;
}

/**
 * @public
 * <p>Specifies an inventory filter. The inventory only includes objects that meet the
 *          filter's criteria.</p>
 */
export interface InventoryFilter {
  /**
   * @public
   * <p>The prefix that an object must have to be included in the inventory results.</p>
   */
  Prefix: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InventoryIncludedObjectVersions = {
  All: "All",
  Current: "Current",
} as const;

/**
 * @public
 */
export type InventoryIncludedObjectVersions =
  (typeof InventoryIncludedObjectVersions)[keyof typeof InventoryIncludedObjectVersions];

/**
 * @public
 * @enum
 */
export const InventoryOptionalField = {
  BucketKeyStatus: "BucketKeyStatus",
  ChecksumAlgorithm: "ChecksumAlgorithm",
  ETag: "ETag",
  EncryptionStatus: "EncryptionStatus",
  IntelligentTieringAccessTier: "IntelligentTieringAccessTier",
  IsMultipartUploaded: "IsMultipartUploaded",
  LastModifiedDate: "LastModifiedDate",
  ObjectAccessControlList: "ObjectAccessControlList",
  ObjectLockLegalHoldStatus: "ObjectLockLegalHoldStatus",
  ObjectLockMode: "ObjectLockMode",
  ObjectLockRetainUntilDate: "ObjectLockRetainUntilDate",
  ObjectOwner: "ObjectOwner",
  ReplicationStatus: "ReplicationStatus",
  Size: "Size",
  StorageClass: "StorageClass",
} as const;

/**
 * @public
 */
export type InventoryOptionalField = (typeof InventoryOptionalField)[keyof typeof InventoryOptionalField];

/**
 * @public
 * @enum
 */
export const InventoryFrequency = {
  Daily: "Daily",
  Weekly: "Weekly",
} as const;

/**
 * @public
 */
export type InventoryFrequency = (typeof InventoryFrequency)[keyof typeof InventoryFrequency];

/**
 * @public
 * <p>Specifies the schedule for generating inventory results.</p>
 */
export interface InventorySchedule {
  /**
   * @public
   * <p>Specifies how frequently inventory results are produced.</p>
   */
  Frequency: InventoryFrequency | string | undefined;
}

/**
 * @public
 * <p>Specifies the inventory configuration for an Amazon S3 bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html">GET Bucket inventory</a> in the <i>Amazon S3 API Reference</i>. </p>
 */
export interface InventoryConfiguration {
  /**
   * @public
   * <p>Contains information about where to publish the inventory results.</p>
   */
  Destination: InventoryDestination | undefined;

  /**
   * @public
   * <p>Specifies whether the inventory is enabled or disabled. If set to <code>True</code>, an
   *          inventory list is generated. If set to <code>False</code>, no inventory list is
   *          generated.</p>
   */
  IsEnabled: boolean | undefined;

  /**
   * @public
   * <p>Specifies an inventory filter. The inventory only includes objects that meet the
   *          filter's criteria.</p>
   */
  Filter?: InventoryFilter;

  /**
   * @public
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Object versions to include in the inventory list. If set to <code>All</code>, the list
   *          includes all the object versions, which adds the version-related fields
   *             <code>VersionId</code>, <code>IsLatest</code>, and <code>DeleteMarker</code> to the
   *          list. If set to <code>Current</code>, the list does not contain these version-related
   *          fields.</p>
   */
  IncludedObjectVersions: InventoryIncludedObjectVersions | string | undefined;

  /**
   * @public
   * <p>Contains the optional fields that are included in the inventory results.</p>
   */
  OptionalFields?: (InventoryOptionalField | string)[];

  /**
   * @public
   * <p>Specifies the schedule for generating inventory results.</p>
   */
  Schedule: InventorySchedule | undefined;
}

/**
 * @public
 */
export interface GetBucketInventoryConfigurationOutput {
  /**
   * @public
   * <p>Specifies the inventory configuration.</p>
   */
  InventoryConfiguration?: InventoryConfiguration;
}

/**
 * @public
 */
export interface GetBucketInventoryConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket containing the inventory configuration to retrieve.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>Container for the expiration for the lifecycle of the object.</p>
 *          <p>For more information see, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html">Managing your storage
 *             lifecycle</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface LifecycleExpiration {
  /**
   * @public
   * <p>Indicates at what date the object is to be moved or deleted. The date value must conform
   *          to the ISO 8601 format. The time is always midnight UTC.</p>
   */
  Date?: Date;

  /**
   * @public
   * <p>Indicates the lifetime, in days, of the objects that are subject to the rule. The value
   *          must be a non-zero positive integer.</p>
   */
  Days?: number;

  /**
   * @public
   * <p>Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set
   *          to true, the delete marker will be expired; if set to false the policy takes no action.
   *          This cannot be specified with Days or Date in a Lifecycle Expiration Policy.</p>
   */
  ExpiredObjectDeleteMarker?: boolean;
}

/**
 * @public
 * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more
 *          predicates. The Lifecycle Rule will apply to any object matching all of the predicates
 *          configured inside the And operator.</p>
 */
export interface LifecycleRuleAndOperator {
  /**
   * @public
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>All of these tags must exist in the object's tag set in order for the rule to
   *          apply.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Minimum object size to which the rule applies.</p>
   */
  ObjectSizeGreaterThan?: number;

  /**
   * @public
   * <p>Maximum object size to which the rule applies.</p>
   */
  ObjectSizeLessThan?: number;
}

/**
 * @public
 * <p>The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A
 *             <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or
 *             <code>And</code> specified.</p>
 */
export type LifecycleRuleFilter =
  | LifecycleRuleFilter.AndMember
  | LifecycleRuleFilter.ObjectSizeGreaterThanMember
  | LifecycleRuleFilter.ObjectSizeLessThanMember
  | LifecycleRuleFilter.PrefixMember
  | LifecycleRuleFilter.TagMember
  | LifecycleRuleFilter.$UnknownMember;

/**
 * @public
 */
export namespace LifecycleRuleFilter {
  /**
   * @public
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   *          <important>
   *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
   *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML related object key constraints</a>.</p>
   *          </important>
   */
  export interface PrefixMember {
    Prefix: string;
    Tag?: never;
    ObjectSizeGreaterThan?: never;
    ObjectSizeLessThan?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>This tag must exist in the object's tag set in order for the rule to apply.</p>
   */
  export interface TagMember {
    Prefix?: never;
    Tag: Tag;
    ObjectSizeGreaterThan?: never;
    ObjectSizeLessThan?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Minimum object size to which the rule applies.</p>
   */
  export interface ObjectSizeGreaterThanMember {
    Prefix?: never;
    Tag?: never;
    ObjectSizeGreaterThan: number;
    ObjectSizeLessThan?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Maximum object size to which the rule applies.</p>
   */
  export interface ObjectSizeLessThanMember {
    Prefix?: never;
    Tag?: never;
    ObjectSizeGreaterThan?: never;
    ObjectSizeLessThan: number;
    And?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more
   *          predicates. The Lifecycle Rule will apply to any object matching all of the predicates
   *          configured inside the And operator.</p>
   */
  export interface AndMember {
    Prefix?: never;
    Tag?: never;
    ObjectSizeGreaterThan?: never;
    ObjectSizeLessThan?: never;
    And: LifecycleRuleAndOperator;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    ObjectSizeGreaterThan?: never;
    ObjectSizeLessThan?: never;
    And?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    ObjectSizeGreaterThan: (value: number) => T;
    ObjectSizeLessThan: (value: number) => T;
    And: (value: LifecycleRuleAndOperator) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: LifecycleRuleFilter, visitor: Visitor<T>): T => {
    if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
    if (value.Tag !== undefined) return visitor.Tag(value.Tag);
    if (value.ObjectSizeGreaterThan !== undefined) return visitor.ObjectSizeGreaterThan(value.ObjectSizeGreaterThan);
    if (value.ObjectSizeLessThan !== undefined) return visitor.ObjectSizeLessThan(value.ObjectSizeLessThan);
    if (value.And !== undefined) return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently
 *          deletes the noncurrent object versions. You set this lifecycle configuration action on a
 *          bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent
 *          object versions at a specific period in the object's lifetime.</p>
 */
export interface NoncurrentVersionExpiration {
  /**
   * @public
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. The value must be a non-zero positive integer. For information about the
   *          noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How
   *             Amazon S3 Calculates When an Object Became Noncurrent</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  NoncurrentDays?: number;

  /**
   * @public
   * <p>Specifies how many noncurrent versions Amazon S3 will retain. If there are this many more
   *          recent noncurrent versions, Amazon S3 will take the associated action. For more information
   *          about noncurrent versions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html">Lifecycle configuration
   *             elements</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  NewerNoncurrentVersions?: number;
}

/**
 * @public
 * @enum
 */
export const TransitionStorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  GLACIER_IR: "GLACIER_IR",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * @public
 */
export type TransitionStorageClass = (typeof TransitionStorageClass)[keyof typeof TransitionStorageClass];

/**
 * @public
 * <p>Container for the transition rule that describes when noncurrent objects transition to
 *          the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>,
 *             <code>GLACIER_IR</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage
 *          class. If your bucket is versioning-enabled (or versioning is suspended), you can set this
 *          action to request that Amazon S3 transition noncurrent object versions to the
 *             <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>,
 *             <code>GLACIER_IR</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage
 *          class at a specific period in the object's lifetime.</p>
 */
export interface NoncurrentVersionTransition {
  /**
   * @public
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How
   *             Amazon S3 Calculates How Long an Object Has Been Noncurrent</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  NoncurrentDays?: number;

  /**
   * @public
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: TransitionStorageClass | string;

  /**
   * @public
   * <p>Specifies how many noncurrent versions Amazon S3 will retain. If there are this many more
   *          recent noncurrent versions, Amazon S3 will take the associated action. For more information
   *          about noncurrent versions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html">Lifecycle configuration
   *             elements</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  NewerNoncurrentVersions?: number;
}

/**
 * @public
 * @enum
 */
export const ExpirationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ExpirationStatus = (typeof ExpirationStatus)[keyof typeof ExpirationStatus];

/**
 * @public
 * <p>Specifies when an object transitions to a specified storage class. For more information
 *          about Amazon S3 lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html">Transitioning
 *             Objects Using Amazon S3 Lifecycle</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface Transition {
  /**
   * @public
   * <p>Indicates when objects are transitioned to the specified storage class. The date value
   *          must be in ISO 8601 format. The time is always midnight UTC.</p>
   */
  Date?: Date;

  /**
   * @public
   * <p>Indicates the number of days after creation when objects are transitioned to the
   *          specified storage class. The value must be a positive integer.</p>
   */
  Days?: number;

  /**
   * @public
   * <p>The storage class to which you want the object to transition.</p>
   */
  StorageClass?: TransitionStorageClass | string;
}

/**
 * @public
 * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
 *          <p>For more information see, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html">Managing your storage
 *             lifecycle</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface LifecycleRule {
  /**
   * @public
   * <p>Specifies the expiration for the lifecycle of the object in the form of date, days and,
   *          whether the object has a delete marker.</p>
   */
  Expiration?: LifecycleExpiration;

  /**
   * @public
   * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
   */
  ID?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>Prefix identifying one or more objects to which the rule applies. This is
   *          no longer used; use <code>Filter</code> instead.</p>
   *          <important>
   *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
   *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML related object key constraints</a>.</p>
   *          </important>
   */
  Prefix?: string;

  /**
   * @public
   * <p>The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A
   *             <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or
   *             <code>And</code> specified. <code>Filter</code> is required if the
   *             <code>LifecycleRule</code> does not contain a <code>Prefix</code> element.</p>
   */
  Filter?: LifecycleRuleFilter;

  /**
   * @public
   * <p>If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not
   *          currently being applied.</p>
   */
  Status: ExpirationStatus | string | undefined;

  /**
   * @public
   * <p>Specifies when an Amazon S3 object transitions to a specified storage class.</p>
   */
  Transitions?: Transition[];

  /**
   * @public
   * <p> Specifies the transition rule for the lifecycle rule that describes when noncurrent
   *          objects transition to a specific storage class. If your bucket is versioning-enabled (or
   *          versioning is suspended), you can set this action to request that Amazon S3 transition
   *          noncurrent object versions to a specific storage class at a set period in the object's
   *          lifetime. </p>
   */
  NoncurrentVersionTransitions?: NoncurrentVersionTransition[];

  /**
   * @public
   * <p>Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently
   *          deletes the noncurrent object versions. You set this lifecycle configuration action on a
   *          bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent
   *          object versions at a specific period in the object's lifetime.</p>
   */
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration;

  /**
   * @public
   * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will
   *          wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
   *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a> in
   *          the <i>Amazon S3 User Guide</i>.</p>
   */
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
}

/**
 * @public
 */
export interface GetBucketLifecycleConfigurationOutput {
  /**
   * @public
   * <p>Container for a lifecycle rule.</p>
   */
  Rules?: LifecycleRule[];
}

/**
 * @public
 */
export interface GetBucketLifecycleConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket for which to get the lifecycle information.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface GetBucketLocationOutput {
  /**
   * @public
   * <p>Specifies the Region where the bucket resides. For a list of all the Amazon S3 supported
   *          location constraints by Region, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a>. Buckets in
   *          Region <code>us-east-1</code> have a LocationConstraint of <code>null</code>.</p>
   */
  LocationConstraint?: BucketLocationConstraint | string;
}

/**
 * @public
 */
export interface GetBucketLocationRequest {
  /**
   * @public
   * <p>The name of the bucket for which to get the location.</p>
   *          <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p>
   *          <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name.
   * If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned.
   * For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of
   *             Error Codes</a>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * @enum
 */
export const BucketLogsPermission = {
  FULL_CONTROL: "FULL_CONTROL",
  READ: "READ",
  WRITE: "WRITE",
} as const;

/**
 * @public
 */
export type BucketLogsPermission = (typeof BucketLogsPermission)[keyof typeof BucketLogsPermission];

/**
 * @public
 * <p>Container for granting information.</p>
 *          <p>Buckets that use the bucket owner enforced setting for Object Ownership don't support
 *          target grants. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html#grant-log-delivery-permissions-general">Permissions server access log delivery</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 */
export interface TargetGrant {
  /**
   * @public
   * <p>Container for the person being granted permissions.</p>
   */
  Grantee?: Grantee;

  /**
   * @public
   * <p>Logging permissions assigned to the grantee for the bucket.</p>
   */
  Permission?: BucketLogsPermission | string;
}

/**
 * @public
 * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys
 *          for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
 *             <i>Amazon S3 API Reference</i>.</p>
 */
export interface LoggingEnabled {
  /**
   * @public
   * <p>Specifies the bucket where you want Amazon S3 to store server access logs. You can have your
   *          logs delivered to any bucket that you own, including the same bucket that is being logged.
   *          You can also configure multiple buckets to deliver their logs to the same target bucket. In
   *          this case, you should choose a different <code>TargetPrefix</code> for each source bucket
   *          so that the delivered log files can be distinguished by key.</p>
   */
  TargetBucket: string | undefined;

  /**
   * @public
   * <p>Container for granting information.</p>
   *          <p>Buckets that use the bucket owner enforced setting for Object Ownership don't support
   *          target grants. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html#grant-log-delivery-permissions-general">Permissions for server access log delivery</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  TargetGrants?: TargetGrant[];

  /**
   * @public
   * <p>A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a
   *          single bucket, you can use a prefix to distinguish which log files came from which
   *          bucket.</p>
   */
  TargetPrefix: string | undefined;
}

/**
 * @public
 */
export interface GetBucketLoggingOutput {
  /**
   * @public
   * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys
   *          for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
   *             <i>Amazon S3 API Reference</i>.</p>
   */
  LoggingEnabled?: LoggingEnabled;
}

/**
 * @public
 */
export interface GetBucketLoggingRequest {
  /**
   * @public
   * <p>The bucket name for which to get the logging information.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter.
 *          The operator must have at least two predicates, and an object must match all of the
 *          predicates in order for the filter to apply.</p>
 */
export interface MetricsAndOperator {
  /**
   * @public
   * <p>The prefix used when evaluating an AND predicate.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>The list of tags used when evaluating an AND predicate.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The access point ARN used when evaluating an <code>AND</code> predicate.</p>
   */
  AccessPointArn?: string;
}

/**
 * @public
 * <p>Specifies a metrics configuration filter. The metrics configuration only includes
 *          objects that meet the filter's criteria. A filter must be a prefix, an object tag, an
 *          access point ARN, or a conjunction (MetricsAndOperator). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html">PutBucketMetricsConfiguration</a>.</p>
 */
export type MetricsFilter =
  | MetricsFilter.AccessPointArnMember
  | MetricsFilter.AndMember
  | MetricsFilter.PrefixMember
  | MetricsFilter.TagMember
  | MetricsFilter.$UnknownMember;

/**
 * @public
 */
export namespace MetricsFilter {
  /**
   * @public
   * <p>The prefix used when evaluating a metrics filter.</p>
   */
  export interface PrefixMember {
    Prefix: string;
    Tag?: never;
    AccessPointArn?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The tag used when evaluating a metrics filter.</p>
   */
  export interface TagMember {
    Prefix?: never;
    Tag: Tag;
    AccessPointArn?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The access point ARN used when evaluating a metrics filter.</p>
   */
  export interface AccessPointArnMember {
    Prefix?: never;
    Tag?: never;
    AccessPointArn: string;
    And?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter.
   *          The operator must have at least two predicates, and an object must match all of the
   *          predicates in order for the filter to apply.</p>
   */
  export interface AndMember {
    Prefix?: never;
    Tag?: never;
    AccessPointArn?: never;
    And: MetricsAndOperator;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    AccessPointArn?: never;
    And?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    AccessPointArn: (value: string) => T;
    And: (value: MetricsAndOperator) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MetricsFilter, visitor: Visitor<T>): T => {
    if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
    if (value.Tag !== undefined) return visitor.Tag(value.Tag);
    if (value.AccessPointArn !== undefined) return visitor.AccessPointArn(value.AccessPointArn);
    if (value.And !== undefined) return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Specifies a metrics configuration for the CloudWatch request metrics (specified by the
 *          metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics
 *          configuration, note that this is a full replacement of the existing metrics configuration.
 *          If you don't include the elements you want to keep, they are erased. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html">PutBucketMetricsConfiguration</a>.</p>
 */
export interface MetricsConfiguration {
  /**
   * @public
   * <p>The ID used to identify the metrics configuration. The ID has a 64 character limit and
   *          can only contain letters, numbers, periods, dashes, and underscores.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Specifies a metrics configuration filter. The metrics configuration will only include
   *          objects that meet the filter's criteria. A filter must be a prefix, an object tag, an
   *          access point ARN, or a conjunction (MetricsAndOperator).</p>
   */
  Filter?: MetricsFilter;
}

/**
 * @public
 */
export interface GetBucketMetricsConfigurationOutput {
  /**
   * @public
   * <p>Specifies the metrics configuration.</p>
   */
  MetricsConfiguration?: MetricsConfiguration;
}

/**
 * @public
 */
export interface GetBucketMetricsConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket containing the metrics configuration to retrieve.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The ID used to identify the metrics configuration. The ID has a 64 character limit and
   *          can only contain letters, numbers, periods, dashes, and underscores.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface GetBucketNotificationConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket for which to get the notification configuration.</p>
   *          <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p>
   *          <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name.
   * If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned.
   * For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of
   *             Error Codes</a>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>A container for specifying the configuration for Amazon EventBridge.</p>
 */
export interface EventBridgeConfiguration {}

/**
 * @public
 * @enum
 */
export const Event = {
  s3_IntelligentTiering: "s3:IntelligentTiering",
  s3_LifecycleExpiration_: "s3:LifecycleExpiration:*",
  s3_LifecycleExpiration_Delete: "s3:LifecycleExpiration:Delete",
  s3_LifecycleExpiration_DeleteMarkerCreated: "s3:LifecycleExpiration:DeleteMarkerCreated",
  s3_LifecycleTransition: "s3:LifecycleTransition",
  s3_ObjectAcl_Put: "s3:ObjectAcl:Put",
  s3_ObjectCreated_: "s3:ObjectCreated:*",
  s3_ObjectCreated_CompleteMultipartUpload: "s3:ObjectCreated:CompleteMultipartUpload",
  s3_ObjectCreated_Copy: "s3:ObjectCreated:Copy",
  s3_ObjectCreated_Post: "s3:ObjectCreated:Post",
  s3_ObjectCreated_Put: "s3:ObjectCreated:Put",
  s3_ObjectRemoved_: "s3:ObjectRemoved:*",
  s3_ObjectRemoved_Delete: "s3:ObjectRemoved:Delete",
  s3_ObjectRemoved_DeleteMarkerCreated: "s3:ObjectRemoved:DeleteMarkerCreated",
  s3_ObjectRestore_: "s3:ObjectRestore:*",
  s3_ObjectRestore_Completed: "s3:ObjectRestore:Completed",
  s3_ObjectRestore_Delete: "s3:ObjectRestore:Delete",
  s3_ObjectRestore_Post: "s3:ObjectRestore:Post",
  s3_ObjectTagging_: "s3:ObjectTagging:*",
  s3_ObjectTagging_Delete: "s3:ObjectTagging:Delete",
  s3_ObjectTagging_Put: "s3:ObjectTagging:Put",
  s3_ReducedRedundancyLostObject: "s3:ReducedRedundancyLostObject",
  s3_Replication_: "s3:Replication:*",
  s3_Replication_OperationFailedReplication: "s3:Replication:OperationFailedReplication",
  s3_Replication_OperationMissedThreshold: "s3:Replication:OperationMissedThreshold",
  s3_Replication_OperationNotTracked: "s3:Replication:OperationNotTracked",
  s3_Replication_OperationReplicatedAfterThreshold: "s3:Replication:OperationReplicatedAfterThreshold",
} as const;

/**
 * @public
 */
export type Event = (typeof Event)[keyof typeof Event];

/**
 * @public
 * @enum
 */
export const FilterRuleName = {
  prefix: "prefix",
  suffix: "suffix",
} as const;

/**
 * @public
 */
export type FilterRuleName = (typeof FilterRuleName)[keyof typeof FilterRuleName];

/**
 * @public
 * <p>Specifies the Amazon S3 object key name to filter on and whether to filter on the suffix or
 *          prefix of the key name.</p>
 */
export interface FilterRule {
  /**
   * @public
   * <p>The object key name prefix or suffix identifying one or more objects to which the
   *          filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and
   *          suffixes are not supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a>
   *          in the <i>Amazon S3 User Guide</i>.</p>
   */
  Name?: FilterRuleName | string;

  /**
   * @public
   * <p>The value that the filter searches for in object key names.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>A container for object key name prefix and suffix filtering rules.</p>
 */
export interface S3KeyFilter {
  /**
   * @public
   * <p>A list of containers for the key-value pair that defines the criteria for the filter
   *          rule.</p>
   */
  FilterRules?: FilterRule[];
}

/**
 * @public
 * <p>Specifies object key name filtering rules. For information about key name filtering, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html">Configuring event
 *             notifications using object key name filtering</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 */
export interface NotificationConfigurationFilter {
  /**
   * @public
   * <p>A container for object key name prefix and suffix filtering rules.</p>
   */
  Key?: S3KeyFilter;
}

/**
 * @public
 * <p>A container for specifying the configuration for Lambda notifications.</p>
 */
export interface LambdaFunctionConfiguration {
  /**
   * @public
   * <p>An optional unique identifier for configurations in a notification configuration. If you
   *          don't provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda function that Amazon S3 invokes when the
   *          specified event type occurs.</p>
   */
  LambdaFunctionArn: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 bucket event for which to invoke the Lambda function. For more information,
   *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported
   *             Event Types</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Events: (Event | string)[] | undefined;

  /**
   * @public
   * <p>Specifies object key name filtering rules. For information about key name filtering, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html">Configuring event
   *             notifications using object key name filtering</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  Filter?: NotificationConfigurationFilter;
}

/**
 * @public
 * <p>Specifies the configuration for publishing messages to an Amazon Simple Queue Service
 *          (Amazon SQS) queue when Amazon S3 detects specified events.</p>
 */
export interface QueueConfiguration {
  /**
   * @public
   * <p>An optional unique identifier for configurations in a notification configuration. If you
   *          don't provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message
   *          when it detects events of the specified type.</p>
   */
  QueueArn: string | undefined;

  /**
   * @public
   * <p>A collection of bucket events for which to send notifications</p>
   */
  Events: (Event | string)[] | undefined;

  /**
   * @public
   * <p>Specifies object key name filtering rules. For information about key name filtering, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html">Configuring event
   *             notifications using object key name filtering</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  Filter?: NotificationConfigurationFilter;
}

/**
 * @public
 * <p>A container for specifying the configuration for publication of messages to an Amazon
 *          Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events.</p>
 */
export interface TopicConfiguration {
  /**
   * @public
   * <p>An optional unique identifier for configurations in a notification configuration. If you
   *          don't provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message
   *          when it detects events of the specified type.</p>
   */
  TopicArn: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 bucket event about which to send notifications. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported
   *             Event Types</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Events: (Event | string)[] | undefined;

  /**
   * @public
   * <p>Specifies object key name filtering rules. For information about key name filtering, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html">Configuring event
   *             notifications using object key name filtering</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  Filter?: NotificationConfigurationFilter;
}

/**
 * @public
 * <p>A container for specifying the notification configuration of the bucket. If this element
 *          is empty, notifications are turned off for the bucket.</p>
 */
export interface NotificationConfiguration {
  /**
   * @public
   * <p>The topic to which notifications are sent and the events for which notifications are
   *          generated.</p>
   */
  TopicConfigurations?: TopicConfiguration[];

  /**
   * @public
   * <p>The Amazon Simple Queue Service queues to publish messages to and the events for which
   *          to publish messages.</p>
   */
  QueueConfigurations?: QueueConfiguration[];

  /**
   * @public
   * <p>Describes the Lambda functions to invoke and the events for which to invoke
   *          them.</p>
   */
  LambdaFunctionConfigurations?: LambdaFunctionConfiguration[];

  /**
   * @public
   * <p>Enables delivery of events to Amazon EventBridge.</p>
   */
  EventBridgeConfiguration?: EventBridgeConfiguration;
}

/**
 * @public
 * <p>The container element for an ownership control rule.</p>
 */
export interface OwnershipControlsRule {
  /**
   * @public
   * <p>The container element for object ownership for a bucket's ownership controls.</p>
   *          <p>BucketOwnerPreferred - Objects uploaded to the bucket change ownership to the bucket
   *          owner if the objects are uploaded with the <code>bucket-owner-full-control</code> canned
   *          ACL.</p>
   *          <p>ObjectWriter - The uploading account will own the object if the object is uploaded with
   *          the <code>bucket-owner-full-control</code> canned ACL.</p>
   *          <p>BucketOwnerEnforced - Access control lists (ACLs) are disabled and no longer affect
   *          permissions. The bucket owner automatically owns and has full control over every object in
   *          the bucket. The bucket only accepts PUT requests that don't specify an ACL or bucket owner
   *          full control ACLs, such as the <code>bucket-owner-full-control</code> canned ACL or an
   *          equivalent form of this ACL expressed in the XML format.</p>
   */
  ObjectOwnership: ObjectOwnership | string | undefined;
}

/**
 * @public
 * <p>The container element for a bucket's ownership controls.</p>
 */
export interface OwnershipControls {
  /**
   * @public
   * <p>The container element for an ownership control rule.</p>
   */
  Rules: OwnershipControlsRule[] | undefined;
}

/**
 * @public
 */
export interface GetBucketOwnershipControlsOutput {
  /**
   * @public
   * <p>The <code>OwnershipControls</code> (BucketOwnerEnforced, BucketOwnerPreferred, or
   *          ObjectWriter) currently in effect for this Amazon S3 bucket.</p>
   */
  OwnershipControls?: OwnershipControls;
}

/**
 * @public
 */
export interface GetBucketOwnershipControlsRequest {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket whose <code>OwnershipControls</code> you want to retrieve.
   *       </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface GetBucketPolicyOutput {
  /**
   * @public
   * <p>The bucket policy as a JSON document.</p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface GetBucketPolicyRequest {
  /**
   * @public
   * <p>The bucket name for which to get the bucket policy.</p>
   *          <p>To use this API operation against an access point, provide the alias of the access point in place of the bucket name.</p>
   *          <p>To use this API operation against an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name.
   * If the Object Lambda access point alias in a request is not valid, the error code <code>InvalidAccessPointAliasError</code> is returned.
   * For more information about <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of
   *             Error Codes</a>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>The container element for a bucket's policy status.</p>
 */
export interface PolicyStatus {
  /**
   * @public
   * <p>The policy status for this bucket. <code>TRUE</code> indicates that this bucket is
   *          public. <code>FALSE</code> indicates that the bucket is not public.</p>
   */
  IsPublic?: boolean;
}

/**
 * @public
 */
export interface GetBucketPolicyStatusOutput {
  /**
   * @public
   * <p>The policy status for the specified bucket.</p>
   */
  PolicyStatus?: PolicyStatus;
}

/**
 * @public
 */
export interface GetBucketPolicyStatusRequest {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket whose policy status you want to retrieve.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * @enum
 */
export const DeleteMarkerReplicationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type DeleteMarkerReplicationStatus =
  (typeof DeleteMarkerReplicationStatus)[keyof typeof DeleteMarkerReplicationStatus];

/**
 * @public
 * <p>Specifies whether Amazon S3 replicates delete markers. If you specify a <code>Filter</code>
 *          in your replication configuration, you must also include a
 *             <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a
 *             <code>Tag</code> element, the <code>DeleteMarkerReplication</code>
 *             <code>Status</code> must be set to Disabled, because Amazon S3 does not support replicating
 *          delete markers for tag-based rules. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>. </p>
 *          <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html">Basic Rule
 *             Configuration</a>. </p>
 *          <note>
 *             <p>If you are using an earlier version of the replication configuration, Amazon S3 handles
 *             replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p>
 *          </note>
 */
export interface DeleteMarkerReplication {
  /**
   * @public
   * <p>Indicates whether to replicate delete markers.</p>
   *          <note>
   *             <p>Indicates whether to replicate delete markers.</p>
   *          </note>
   */
  Status?: DeleteMarkerReplicationStatus | string;
}

/**
 * @public
 * <p>Specifies encryption-related information for an Amazon S3 bucket that is a destination for
 *          replicated objects.</p>
 */
export interface EncryptionConfiguration {
  /**
   * @public
   * <p>Specifies the ID (Key ARN or Alias ARN) of the customer managed Amazon Web Services KMS key stored in
   *          Amazon Web Services Key Management Service (KMS) for the destination bucket. Amazon S3 uses this key to
   *          encrypt replica objects. Amazon S3 only supports symmetric encryption KMS keys. For more
   *          information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric keys in Amazon Web Services
   *             KMS</a> in the <i>Amazon Web Services Key Management Service Developer
   *          Guide</i>.</p>
   */
  ReplicaKmsKeyID?: string;
}

/**
 * @public
 * <p> A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics
 *             <code>EventThreshold</code>. </p>
 */
export interface ReplicationTimeValue {
  /**
   * @public
   * <p> Contains an integer specifying time in minutes. </p>
   *          <p> Valid value: 15</p>
   */
  Minutes?: number;
}

/**
 * @public
 * @enum
 */
export const MetricsStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type MetricsStatus = (typeof MetricsStatus)[keyof typeof MetricsStatus];

/**
 * @public
 * <p> A container specifying replication metrics-related settings enabling replication
 *          metrics and events.</p>
 */
export interface Metrics {
  /**
   * @public
   * <p> Specifies whether the replication metrics are enabled. </p>
   */
  Status: MetricsStatus | string | undefined;

  /**
   * @public
   * <p> A container specifying the time threshold for emitting the
   *             <code>s3:Replication:OperationMissedThreshold</code> event. </p>
   */
  EventThreshold?: ReplicationTimeValue;
}

/**
 * @public
 * @enum
 */
export const ReplicationTimeStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ReplicationTimeStatus = (typeof ReplicationTimeStatus)[keyof typeof ReplicationTimeStatus];

/**
 * @public
 * <p> A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is
 *          enabled and the time when all objects and operations on objects must be replicated. Must be
 *          specified together with a <code>Metrics</code> block. </p>
 */
export interface ReplicationTime {
  /**
   * @public
   * <p> Specifies whether the replication time is enabled. </p>
   */
  Status: ReplicationTimeStatus | string | undefined;

  /**
   * @public
   * <p> A container specifying the time by which replication should be complete for all objects
   *          and operations on objects. </p>
   */
  Time: ReplicationTimeValue | undefined;
}

/**
 * @public
 * <p>Specifies information about where to publish analysis or configuration results for an
 *          Amazon S3 bucket and S3 Replication Time Control (S3 RTC).</p>
 */
export interface Destination {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the
   *          results.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to
   *          change replica ownership to the Amazon Web Services account that owns the destination bucket by
   *          specifying the <code>AccessControlTranslation</code> property, this is the account ID of
   *          the destination bucket owner. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html">Replication Additional
   *             Configuration: Changing the Replica Owner</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  Account?: string;

  /**
   * @public
   * <p> The storage class to use when replicating objects, such as S3 Standard or reduced
   *          redundancy. By default, Amazon S3 uses the storage class of the source object to create the
   *          object replica. </p>
   *          <p>For valid values, see the <code>StorageClass</code> element of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html">PUT Bucket
   *             replication</a> action in the <i>Amazon S3 API Reference</i>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * @public
   * <p>Specify this only in a cross-account scenario (where source and destination bucket
   *          owners are not the same), and you want to change replica ownership to the Amazon Web Services account
   *          that owns the destination bucket. If this is not specified in the replication
   *          configuration, the replicas are owned by same Amazon Web Services account that owns the source
   *          object.</p>
   */
  AccessControlTranslation?: AccessControlTranslation;

  /**
   * @public
   * <p>A container that provides information about encryption. If
   *             <code>SourceSelectionCriteria</code> is specified, you must specify this element.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * @public
   * <p> A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time
   *          when all objects and operations on objects must be replicated. Must be specified together
   *          with a <code>Metrics</code> block. </p>
   */
  ReplicationTime?: ReplicationTime;

  /**
   * @public
   * <p> A container specifying replication metrics-related settings enabling replication
   *          metrics and events. </p>
   */
  Metrics?: Metrics;
}

/**
 * @public
 * @enum
 */
export const ExistingObjectReplicationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ExistingObjectReplicationStatus =
  (typeof ExistingObjectReplicationStatus)[keyof typeof ExistingObjectReplicationStatus];

/**
 * @public
 * <p>Optional configuration to replicate existing source bucket objects. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-what-is-isnot-replicated.html#existing-object-replication">Replicating Existing Objects</a> in the <i>Amazon S3 User Guide</i>.
 *       </p>
 */
export interface ExistingObjectReplication {
  /**
   * @public
   * <p>Specifies whether Amazon S3 replicates existing source bucket objects. </p>
   */
  Status: ExistingObjectReplicationStatus | string | undefined;
}

/**
 * @public
 * <p>A container for specifying rule filters. The filters determine the subset of objects to
 *          which the rule applies. This element is required only if you specify more than one filter. </p>
 *          <p>For example:</p>
 *          <ul>
 *             <li>
 *                <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap
 *                these filters in an <code>And</code> tag. </p>
 *             </li>
 *             <li>
 *                <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements
 *                in an <code>And</code> tag.</p>
 *             </li>
 *          </ul>
 */
export interface ReplicationRuleAndOperator {
  /**
   * @public
   * <p>An object key name prefix that identifies the subset of objects to which the rule
   *          applies.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>An array of tags containing key and value pairs.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>A filter that identifies the subset of objects to which the replication rule applies. A
 *             <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or
 *          an <code>And</code> child element.</p>
 */
export type ReplicationRuleFilter =
  | ReplicationRuleFilter.AndMember
  | ReplicationRuleFilter.PrefixMember
  | ReplicationRuleFilter.TagMember
  | ReplicationRuleFilter.$UnknownMember;

/**
 * @public
 */
export namespace ReplicationRuleFilter {
  /**
   * @public
   * <p>An object key name prefix that identifies the subset of objects to which the rule
   *          applies.</p>
   *          <important>
   *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
   *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML related object key constraints</a>.</p>
   *          </important>
   */
  export interface PrefixMember {
    Prefix: string;
    Tag?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A container for specifying a tag key and value. </p>
   *          <p>The rule applies only to objects that have the tag in their tag set.</p>
   */
  export interface TagMember {
    Prefix?: never;
    Tag: Tag;
    And?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A container for specifying rule filters. The filters determine the subset of objects to
   *          which the rule applies. This element is required only if you specify more than one filter.
   *          For example: </p>
   *          <ul>
   *             <li>
   *                <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap
   *                these filters in an <code>And</code> tag.</p>
   *             </li>
   *             <li>
   *                <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements
   *                in an <code>And</code> tag.</p>
   *             </li>
   *          </ul>
   */
  export interface AndMember {
    Prefix?: never;
    Tag?: never;
    And: ReplicationRuleAndOperator;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    And?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    And: (value: ReplicationRuleAndOperator) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ReplicationRuleFilter, visitor: Visitor<T>): T => {
    if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
    if (value.Tag !== undefined) return visitor.Tag(value.Tag);
    if (value.And !== undefined) return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ReplicaModificationsStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ReplicaModificationsStatus = (typeof ReplicaModificationsStatus)[keyof typeof ReplicaModificationsStatus];

/**
 * @public
 * <p>A filter that you can specify for selection for modifications on replicas. Amazon S3 doesn't
 *          replicate replica modifications by default. In the latest version of replication
 *          configuration (when <code>Filter</code> is specified), you can specify this element and set
 *          the status to <code>Enabled</code> to replicate modifications on replicas. </p>
 *          <note>
 *             <p> If you don't specify the <code>Filter</code> element, Amazon S3 assumes that the
 *             replication configuration is the earlier version, V1. In the earlier version, this
 *             element is not allowed.</p>
 *          </note>
 */
export interface ReplicaModifications {
  /**
   * @public
   * <p>Specifies whether Amazon S3 replicates modifications on replicas.</p>
   */
  Status: ReplicaModificationsStatus | string | undefined;
}

/**
 * @public
 * @enum
 */
export const SseKmsEncryptedObjectsStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type SseKmsEncryptedObjectsStatus =
  (typeof SseKmsEncryptedObjectsStatus)[keyof typeof SseKmsEncryptedObjectsStatus];

/**
 * @public
 * <p>A container for filter information for the selection of S3 objects encrypted with Amazon Web Services
 *          KMS.</p>
 */
export interface SseKmsEncryptedObjects {
  /**
   * @public
   * <p>Specifies whether Amazon S3 replicates objects created with server-side encryption using an
   *          Amazon Web Services KMS key stored in Amazon Web Services Key Management Service.</p>
   */
  Status: SseKmsEncryptedObjectsStatus | string | undefined;
}

/**
 * @public
 * <p>A container that describes additional filters for identifying the source objects that
 *          you want to replicate. You can choose to enable or disable the replication of these
 *          objects. Currently, Amazon S3 supports only the filter that you can specify for objects created
 *          with server-side encryption using a customer managed key stored in Amazon Web Services Key Management Service
 *          (SSE-KMS).</p>
 */
export interface SourceSelectionCriteria {
  /**
   * @public
   * <p> A container for filter information for the selection of Amazon S3 objects encrypted with
   *          Amazon Web Services KMS. If you include <code>SourceSelectionCriteria</code> in the replication
   *          configuration, this element is required. </p>
   */
  SseKmsEncryptedObjects?: SseKmsEncryptedObjects;

  /**
   * @public
   * <p>A filter that you can specify for selections for modifications on replicas. Amazon S3 doesn't
   *          replicate replica modifications by default. In the latest version of replication
   *          configuration (when <code>Filter</code> is specified), you can specify this element and set
   *          the status to <code>Enabled</code> to replicate modifications on replicas. </p>
   *          <note>
   *             <p> If you don't specify the <code>Filter</code> element, Amazon S3 assumes that the
   *             replication configuration is the earlier version, V1. In the earlier version, this
   *             element is not allowed</p>
   *          </note>
   */
  ReplicaModifications?: ReplicaModifications;
}

/**
 * @public
 * @enum
 */
export const ReplicationRuleStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ReplicationRuleStatus = (typeof ReplicationRuleStatus)[keyof typeof ReplicationRuleStatus];

/**
 * @public
 * <p>Specifies which Amazon S3 objects to replicate and where to store the replicas.</p>
 */
export interface ReplicationRule {
  /**
   * @public
   * <p>A unique identifier for the rule. The maximum value is 255 characters.</p>
   */
  ID?: string;

  /**
   * @public
   * <p>The priority indicates which rule has precedence whenever two or more replication rules
   *          conflict. Amazon S3 will attempt to replicate objects according to all replication rules.
   *          However, if there are two or more rules with the same destination bucket, then objects will
   *          be replicated according to the rule with the highest priority. The higher the number, the
   *          higher the priority. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">Replication</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  Priority?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>An object key name prefix that identifies the object or objects to which the rule
   *          applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket,
   *          specify an empty string. </p>
   *          <important>
   *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
   *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML related object key constraints</a>.</p>
   *          </important>
   */
  Prefix?: string;

  /**
   * @public
   * <p>A filter that identifies the subset of objects to which the replication rule applies. A
   *             <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or
   *          an <code>And</code> child element.</p>
   */
  Filter?: ReplicationRuleFilter;

  /**
   * @public
   * <p>Specifies whether the rule is enabled.</p>
   */
  Status: ReplicationRuleStatus | string | undefined;

  /**
   * @public
   * <p>A container that describes additional filters for identifying the source objects that
   *          you want to replicate. You can choose to enable or disable the replication of these
   *          objects. Currently, Amazon S3 supports only the filter that you can specify for objects created
   *          with server-side encryption using a customer managed key stored in Amazon Web Services Key Management Service
   *          (SSE-KMS).</p>
   */
  SourceSelectionCriteria?: SourceSelectionCriteria;

  /**
   * @public
   * <p>Optional configuration to replicate existing source bucket objects. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-what-is-isnot-replicated.html#existing-object-replication">Replicating Existing Objects</a> in the <i>Amazon S3 User Guide</i>.
   *       </p>
   */
  ExistingObjectReplication?: ExistingObjectReplication;

  /**
   * @public
   * <p>A container for information about the replication destination and its configurations
   *          including enabling the S3 Replication Time Control (S3 RTC).</p>
   */
  Destination: Destination | undefined;

  /**
   * @public
   * <p>Specifies whether Amazon S3 replicates delete markers. If you specify a <code>Filter</code>
   *          in your replication configuration, you must also include a
   *             <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a
   *             <code>Tag</code> element, the <code>DeleteMarkerReplication</code>
   *             <code>Status</code> must be set to Disabled, because Amazon S3 does not support replicating
   *          delete markers for tag-based rules. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>. </p>
   *          <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html">Basic Rule
   *             Configuration</a>. </p>
   *          <note>
   *             <p>If you are using an earlier version of the replication configuration, Amazon S3 handles
   *             replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p>
   *          </note>
   */
  DeleteMarkerReplication?: DeleteMarkerReplication;
}

/**
 * @public
 * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
 *          replication configuration is 2 MB.</p>
 */
export interface ReplicationConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that Amazon S3 assumes when
   *          replicating objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html">How to Set Up Replication</a>
   *          in the <i>Amazon S3 User Guide</i>.</p>
   */
  Role: string | undefined;

  /**
   * @public
   * <p>A container for one or more replication rules. A replication configuration must have at
   *          least one rule and can contain a maximum of 1,000 rules. </p>
   */
  Rules: ReplicationRule[] | undefined;
}

/**
 * @public
 */
export interface GetBucketReplicationOutput {
  /**
   * @public
   * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
   *          replication configuration is 2 MB.</p>
   */
  ReplicationConfiguration?: ReplicationConfiguration;
}

/**
 * @public
 */
export interface GetBucketReplicationRequest {
  /**
   * @public
   * <p>The bucket name for which to get the replication information.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * @enum
 */
export const Payer = {
  BucketOwner: "BucketOwner",
  Requester: "Requester",
} as const;

/**
 * @public
 */
export type Payer = (typeof Payer)[keyof typeof Payer];

/**
 * @public
 */
export interface GetBucketRequestPaymentOutput {
  /**
   * @public
   * <p>Specifies who pays for the download and request fees.</p>
   */
  Payer?: Payer | string;
}

/**
 * @public
 */
export interface GetBucketRequestPaymentRequest {
  /**
   * @public
   * <p>The name of the bucket for which to get the payment request configuration</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface GetBucketTaggingOutput {
  /**
   * @public
   * <p>Contains the tag set.</p>
   */
  TagSet: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetBucketTaggingRequest {
  /**
   * @public
   * <p>The name of the bucket for which to get the tagging information.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * @enum
 */
export const MFADeleteStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type MFADeleteStatus = (typeof MFADeleteStatus)[keyof typeof MFADeleteStatus];

/**
 * @public
 * @enum
 */
export const BucketVersioningStatus = {
  Enabled: "Enabled",
  Suspended: "Suspended",
} as const;

/**
 * @public
 */
export type BucketVersioningStatus = (typeof BucketVersioningStatus)[keyof typeof BucketVersioningStatus];

/**
 * @public
 */
export interface GetBucketVersioningOutput {
  /**
   * @public
   * <p>The versioning state of the bucket.</p>
   */
  Status?: BucketVersioningStatus | string;

  /**
   * @public
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This
   *          element is only returned if the bucket has been configured with MFA delete. If the bucket
   *          has never been so configured, this element is not returned.</p>
   */
  MFADelete?: MFADeleteStatus | string;
}

/**
 * @public
 */
export interface GetBucketVersioningRequest {
  /**
   * @public
   * <p>The name of the bucket for which to get the versioning information.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>The error information.</p>
 */
export interface ErrorDocument {
  /**
   * @public
   * <p>The object key name to use when a 4XX class error occurs.</p>
   *          <important>
   *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
   *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML related object key constraints</a>.</p>
   *          </important>
   */
  Key: string | undefined;
}

/**
 * @public
 * <p>Container for the <code>Suffix</code> element.</p>
 */
export interface IndexDocument {
  /**
   * @public
   * <p>A suffix that is appended to a request that is for a directory on the website endpoint
   *          (for example,if the suffix is index.html and you make a request to samplebucket/images/ the
   *          data that is returned will be for the object with the key name images/index.html) The
   *          suffix must not be empty and must not include a slash character.</p>
   *          <important>
   *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
   *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML related object key constraints</a>.</p>
   *          </important>
   */
  Suffix: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Protocol = {
  http: "http",
  https: "https",
} as const;

/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * <p>Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3
 *          bucket.</p>
 */
export interface RedirectAllRequestsTo {
  /**
   * @public
   * <p>Name of the host where requests are redirected.</p>
   */
  HostName: string | undefined;

  /**
   * @public
   * <p>Protocol to use when redirecting requests. The default is the protocol that is used in
   *          the original request.</p>
   */
  Protocol?: Protocol | string;
}

/**
 * @public
 * <p>A container for describing a condition that must be met for the specified redirect to
 *          apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect
 *          to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect
 *          request to another host where you might process the error.</p>
 */
export interface Condition {
  /**
   * @public
   * <p>The HTTP error code when the redirect is applied. In the event of an error, if the error
   *          code equals this value, then the specified redirect is applied. Required when parent
   *          element <code>Condition</code> is specified and sibling <code>KeyPrefixEquals</code> is not
   *          specified. If both are specified, then both must be true for the redirect to be
   *          applied.</p>
   */
  HttpErrorCodeReturnedEquals?: string;

  /**
   * @public
   * <p>The object key name prefix when the redirect is applied. For example, to redirect
   *          requests for <code>ExamplePage.html</code>, the key prefix will be
   *             <code>ExamplePage.html</code>. To redirect request for all pages with the prefix
   *             <code>docs/</code>, the key prefix will be <code>/docs</code>, which identifies all
   *          objects in the <code>docs/</code> folder. Required when the parent element
   *             <code>Condition</code> is specified and sibling <code>HttpErrorCodeReturnedEquals</code>
   *          is not specified. If both conditions are specified, both must be true for the redirect to
   *          be applied.</p>
   *          <important>
   *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
   *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML related object key constraints</a>.</p>
   *          </important>
   */
  KeyPrefixEquals?: string;
}

/**
 * @public
 * <p>Specifies how requests are redirected. In the event of an error, you can specify a
 *          different error code to return.</p>
 */
export interface Redirect {
  /**
   * @public
   * <p>The host name to use in the redirect request.</p>
   */
  HostName?: string;

  /**
   * @public
   * <p>The HTTP redirect code to use on the response. Not required if one of the siblings is
   *          present.</p>
   */
  HttpRedirectCode?: string;

  /**
   * @public
   * <p>Protocol to use when redirecting requests. The default is the protocol that is used in
   *          the original request.</p>
   */
  Protocol?: Protocol | string;

  /**
   * @public
   * <p>The object key prefix to use in the redirect request. For example, to redirect requests
   *          for all pages with prefix <code>docs/</code> (objects in the <code>docs/</code> folder) to
   *             <code>documents/</code>, you can set a condition block with <code>KeyPrefixEquals</code>
   *          set to <code>docs/</code> and in the Redirect set <code>ReplaceKeyPrefixWith</code> to
   *             <code>/documents</code>. Not required if one of the siblings is present. Can be present
   *          only if <code>ReplaceKeyWith</code> is not provided.</p>
   *          <important>
   *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
   *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML related object key constraints</a>.</p>
   *          </important>
   */
  ReplaceKeyPrefixWith?: string;

  /**
   * @public
   * <p>The specific object key to use in the redirect request. For example, redirect request to
   *             <code>error.html</code>. Not required if one of the siblings is present. Can be present
   *          only if <code>ReplaceKeyPrefixWith</code> is not provided.</p>
   *          <important>
   *             <p>Replacement must be made for object keys containing special characters (such as carriage returns) when using
   *          XML requests. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML related object key constraints</a>.</p>
   *          </important>
   */
  ReplaceKeyWith?: string;
}

/**
 * @public
 * <p>Specifies the redirect behavior and when a redirect is applied. For more information
 *          about routing rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html#advanced-conditional-redirects">Configuring advanced conditional redirects</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 */
export interface RoutingRule {
  /**
   * @public
   * <p>A container for describing a condition that must be met for the specified redirect to
   *          apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect
   *          to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect
   *          request to another host where you might process the error.</p>
   */
  Condition?: Condition;

  /**
   * @public
   * <p>Container for redirect information. You can redirect requests to another host, to
   *          another page, or with another protocol. In the event of an error, you can specify a
   *          different error code to return.</p>
   */
  Redirect: Redirect | undefined;
}

/**
 * @public
 */
export interface GetBucketWebsiteOutput {
  /**
   * @public
   * <p>Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3
   *          bucket.</p>
   */
  RedirectAllRequestsTo?: RedirectAllRequestsTo;

  /**
   * @public
   * <p>The name of the index document for the website (for example
   *          <code>index.html</code>).</p>
   */
  IndexDocument?: IndexDocument;

  /**
   * @public
   * <p>The object key name of the website error document to use for 4XX class errors.</p>
   */
  ErrorDocument?: ErrorDocument;

  /**
   * @public
   * <p>Rules that define when a redirect is applied and the redirect behavior.</p>
   */
  RoutingRules?: RoutingRule[];
}

/**
 * @public
 */
export interface GetBucketWebsiteRequest {
  /**
   * @public
   * <p>The bucket name for which to get the website configuration.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * @enum
 */
export const ReplicationStatus = {
  COMPLETE: "COMPLETE",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  REPLICA: "REPLICA",
} as const;

/**
 * @public
 */
export type ReplicationStatus = (typeof ReplicationStatus)[keyof typeof ReplicationStatus];

/**
 * @public
 */
export interface GetObjectOutput {
  /**
   * @public
   * <p>Object data.</p>
   */
  Body?: StreamingBlobTypes;

  /**
   * @public
   * <p>Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If
   *          false, this response header does not appear in the response.</p>
   */
  DeleteMarker?: boolean;

  /**
   * @public
   * <p>Indicates that a range of bytes was specified.</p>
   */
  AcceptRanges?: string;

  /**
   * @public
   * <p>If the object expiration is configured (see PUT Bucket lifecycle), the response includes
   *          this header. It includes the <code>expiry-date</code> and <code>rule-id</code> key-value
   *          pairs providing object expiration information. The value of the <code>rule-id</code> is
   *          URL-encoded.</p>
   */
  Expiration?: string;

  /**
   * @public
   * <p>Provides information about object restoration action and expiration time of the restored
   *          object copy.</p>
   */
  Restore?: string;

  /**
   * @public
   * <p>Creation date of the object.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>Size of the body in bytes.</p>
   */
  ContentLength?: number;

  /**
   * @public
   * <p>An entity tag (ETag) is an opaque identifier assigned by a web server to a specific
   *          version of a resource found at a URL.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32 checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;

  /**
   * @public
   * <p>This is set to the number of metadata entries not returned in <code>x-amz-meta</code>
   *          headers. This can happen if you create metadata using an API like SOAP that supports more
   *          flexible metadata than the REST API. For example, using SOAP, you can create metadata whose
   *          values are not legal HTTP headers.</p>
   */
  MissingMeta?: number;

  /**
   * @public
   * <p>Version of the object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * @public
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * @public
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * @public
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * @public
   * <p>The portion of the object returned in the response.</p>
   */
  ContentRange?: string;

  /**
   * @public
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * @public
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * @public
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>, <code>aws:kms:dsse</code>).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * @public
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: Record<string, string>;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>If present, specifies the ID of the Key Management Service (KMS) symmetric encryption customer managed key
   *          that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * @public
   * <p>Indicates whether the object uses an S3 Bucket Key for server-side encryption with
   *          Key Management Service (KMS) keys (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * @public
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all
   *          objects except for S3 Standard storage class objects.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * @public
   * <p>Amazon S3 can return this if your request involves a bucket that is either a source or
   *          destination in a replication rule.</p>
   */
  ReplicationStatus?: ReplicationStatus | string;

  /**
   * @public
   * <p>The count of parts this object has. This value is only returned if you specify
   *             <code>partNumber</code> in your request and the object was uploaded as a multipart
   *          upload.</p>
   */
  PartsCount?: number;

  /**
   * @public
   * <p>The number of tags, if any, on the object.</p>
   */
  TagCount?: number;

  /**
   * @public
   * <p>The Object Lock mode currently in place for this object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * @public
   * <p>The date and time when this object's Object Lock will expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * @public
   * <p>Indicates whether this object has an active legal hold. This field is only returned if
   *          you have permission to view an object's legal hold status. </p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
}

/**
 * @public
 * @enum
 */
export const ChecksumMode = {
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ChecksumMode = (typeof ChecksumMode)[keyof typeof ChecksumMode];

/**
 * @public
 */
export interface GetObjectRequest {
  /**
   * @public
   * <p>The bucket name containing the object. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When using an Object Lambda access point the hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-object-lambda.<i>Region</i>.amazonaws.com.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Return the object only if its entity tag (ETag) is the same as the one specified;
   *          otherwise, return a 412 (precondition failed) error.</p>
   */
  IfMatch?: string;

  /**
   * @public
   * <p>Return the object only if it has been modified since the specified time; otherwise,
   *          return a 304 (not modified) error.</p>
   */
  IfModifiedSince?: Date;

  /**
   * @public
   * <p>Return the object only if its entity tag (ETag) is different from the one specified;
   *          otherwise, return a 304 (not modified) error.</p>
   */
  IfNoneMatch?: string;

  /**
   * @public
   * <p>Return the object only if it has not been modified since the specified time; otherwise,
   *          return a 412 (precondition failed) error.</p>
   */
  IfUnmodifiedSince?: Date;

  /**
   * @public
   * <p>Key of the object to get.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Downloads the specified range bytes of an object. For more information about the HTTP
   *          Range header, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-range">https://www.rfc-editor.org/rfc/rfc9110.html#name-range</a>.</p>
   *          <note>
   *             <p>Amazon S3 doesn't support retrieving multiple ranges of data per <code>GET</code>
   *             request.</p>
   *          </note>
   */
  Range?: string;

  /**
   * @public
   * <p>Sets the <code>Cache-Control</code> header of the response.</p>
   */
  ResponseCacheControl?: string;

  /**
   * @public
   * <p>Sets the <code>Content-Disposition</code> header of the response</p>
   */
  ResponseContentDisposition?: string;

  /**
   * @public
   * <p>Sets the <code>Content-Encoding</code> header of the response.</p>
   */
  ResponseContentEncoding?: string;

  /**
   * @public
   * <p>Sets the <code>Content-Language</code> header of the response.</p>
   */
  ResponseContentLanguage?: string;

  /**
   * @public
   * <p>Sets the <code>Content-Type</code> header of the response.</p>
   */
  ResponseContentType?: string;

  /**
   * @public
   * <p>Sets the <code>Expires</code> header of the response.</p>
   */
  ResponseExpires?: Date;

  /**
   * @public
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Specifies the algorithm to use to when decrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>Specifies the customer-provided encryption key for Amazon S3 used to encrypt the data. This
   *          value is used to decrypt the object when recovering it and must match the one used when
   *          storing the data. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * @public
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>Part number of the object being read. This is a positive integer between 1 and 10,000.
   *          Effectively performs a 'ranged' GET request for the part specified. Useful for downloading
   *          just a part of an object.</p>
   */
  PartNumber?: number;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>To retrieve the checksum, this mode must be enabled.</p>
   */
  ChecksumMode?: ChecksumMode | string;
}

/**
 * @public
 * <p>Object is archived and inaccessible until restored.</p>
 */
export class InvalidObjectState extends __BaseException {
  readonly name: "InvalidObjectState" = "InvalidObjectState";
  readonly $fault: "client" = "client";
  StorageClass?: StorageClass | string;
  AccessTier?: IntelligentTieringAccessTier | string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidObjectState, __BaseException>) {
    super({
      name: "InvalidObjectState",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidObjectState.prototype);
    this.StorageClass = opts.StorageClass;
    this.AccessTier = opts.AccessTier;
  }
}

/**
 * @public
 * <p>The specified key does not exist.</p>
 */
export class NoSuchKey extends __BaseException {
  readonly name: "NoSuchKey" = "NoSuchKey";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchKey, __BaseException>) {
    super({
      name: "NoSuchKey",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchKey.prototype);
  }
}

/**
 * @public
 */
export interface GetObjectAclOutput {
  /**
   * @public
   * <p> Container for the bucket owner's display name and ID.</p>
   */
  Owner?: Owner;

  /**
   * @public
   * <p>A list of grants.</p>
   */
  Grants?: Grant[];

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 */
export interface GetObjectAclRequest {
  /**
   * @public
   * <p>The bucket name that contains the object for which to get the ACL information. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The key of the object for which to get the ACL information.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>Contains all the possible checksum or digest values for an object.</p>
 */
export interface Checksum {
  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32 checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;
}

/**
 * @public
 * <p>A container for elements related to an individual part.</p>
 */
export interface ObjectPart {
  /**
   * @public
   * <p>The part number identifying the part. This value is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber?: number;

  /**
   * @public
   * <p>The size of the uploaded part in bytes.</p>
   */
  Size?: number;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 32-bit CRC32 checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;
}

/**
 * @public
 * <p>A collection of parts associated with a multipart upload.</p>
 */
export interface GetObjectAttributesParts {
  /**
   * @public
   * <p>The total number of parts.</p>
   */
  TotalPartsCount?: number;

  /**
   * @public
   * <p>The marker for the current part.</p>
   */
  PartNumberMarker?: string;

  /**
   * @public
   * <p>When a list is truncated, this element specifies the last part in the list, as well as
   *          the value to use for the <code>PartNumberMarker</code> request parameter in a subsequent
   *          request.</p>
   */
  NextPartNumberMarker?: string;

  /**
   * @public
   * <p>The maximum number of parts allowed in the response.</p>
   */
  MaxParts?: number;

  /**
   * @public
   * <p>Indicates whether the returned list of parts is truncated. A value of <code>true</code>
   *          indicates that the list was truncated. A list can be truncated if the number of parts
   *          exceeds the limit returned in the <code>MaxParts</code> element.</p>
   */
  IsTruncated?: boolean;

  /**
   * @public
   * <p>A container for elements related to a particular part. A response can contain zero or
   *          more <code>Parts</code> elements.</p>
   */
  Parts?: ObjectPart[];
}

/**
 * @public
 */
export interface GetObjectAttributesOutput {
  /**
   * @public
   * <p>Specifies whether the object retrieved was (<code>true</code>) or was not
   *             (<code>false</code>) a delete marker. If <code>false</code>, this response header does
   *          not appear in the response.</p>
   */
  DeleteMarker?: boolean;

  /**
   * @public
   * <p>The creation date of the object.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>The version ID of the object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * @public
   * <p>An ETag is an opaque identifier assigned by a web server to a specific version of a
   *          resource found at a URL.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>The checksum or digest of the object.</p>
   */
  Checksum?: Checksum;

  /**
   * @public
   * <p>A collection of parts associated with a multipart upload.</p>
   */
  ObjectParts?: GetObjectAttributesParts;

  /**
   * @public
   * <p>Provides the storage class information of the object. Amazon S3 returns this header for all
   *          objects except for S3 Standard storage class objects.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * @public
   * <p>The size of the object in bytes.</p>
   */
  ObjectSize?: number;
}

/**
 * @public
 * @enum
 */
export const ObjectAttributes = {
  CHECKSUM: "Checksum",
  ETAG: "ETag",
  OBJECT_PARTS: "ObjectParts",
  OBJECT_SIZE: "ObjectSize",
  STORAGE_CLASS: "StorageClass",
} as const;

/**
 * @public
 */
export type ObjectAttributes = (typeof ObjectAttributes)[keyof typeof ObjectAttributes];

/**
 * @public
 */
export interface GetObjectAttributesRequest {
  /**
   * @public
   * <p>The name of the bucket that contains the object.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The object key.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The version ID used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Sets the maximum number of parts to return.</p>
   */
  MaxParts?: number;

  /**
   * @public
   * <p>Specifies the part after which listing should begin. Only parts with higher part numbers
   *          will be listed.</p>
   */
  PartNumberMarker?: string;

  /**
   * @public
   * <p>Specifies the algorithm to use when encrypting the object (for example, AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * @public
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>Specifies the fields at the root level that you want returned in the response. Fields
   *          that you do not specify are not returned.</p>
   */
  ObjectAttributes: (ObjectAttributes | string)[] | undefined;
}

/**
 * @public
 * <p>A legal hold configuration for an object.</p>
 */
export interface ObjectLockLegalHold {
  /**
   * @public
   * <p>Indicates whether the specified object has a legal hold in place.</p>
   */
  Status?: ObjectLockLegalHoldStatus | string;
}

/**
 * @public
 */
export interface GetObjectLegalHoldOutput {
  /**
   * @public
   * <p>The current legal hold status for the specified object.</p>
   */
  LegalHold?: ObjectLockLegalHold;
}

/**
 * @public
 */
export interface GetObjectLegalHoldRequest {
  /**
   * @public
   * <p>The bucket name containing the object whose legal hold status you want to retrieve. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The key name for the object whose legal hold status you want to retrieve.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The version ID of the object whose legal hold status you want to retrieve.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * @enum
 */
export const ObjectLockEnabled = {
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ObjectLockEnabled = (typeof ObjectLockEnabled)[keyof typeof ObjectLockEnabled];

/**
 * @public
 * @enum
 */
export const ObjectLockRetentionMode = {
  COMPLIANCE: "COMPLIANCE",
  GOVERNANCE: "GOVERNANCE",
} as const;

/**
 * @public
 */
export type ObjectLockRetentionMode = (typeof ObjectLockRetentionMode)[keyof typeof ObjectLockRetentionMode];

/**
 * @public
 * <p>The container element for specifying the default Object Lock retention settings for new
 *          objects placed in the specified bucket.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>The <code>DefaultRetention</code> settings require both a mode and a
 *                   period.</p>
 *                </li>
 *                <li>
 *                   <p>The <code>DefaultRetention</code> period can be either <code>Days</code> or
 *                      <code>Years</code> but you must select one. You cannot specify
 *                      <code>Days</code> and <code>Years</code> at the same time.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export interface DefaultRetention {
  /**
   * @public
   * <p>The default Object Lock retention mode you want to apply to new objects placed in the
   *          specified bucket. Must be used with either <code>Days</code> or <code>Years</code>.</p>
   */
  Mode?: ObjectLockRetentionMode | string;

  /**
   * @public
   * <p>The number of days that you want to specify for the default retention period. Must be
   *          used with <code>Mode</code>.</p>
   */
  Days?: number;

  /**
   * @public
   * <p>The number of years that you want to specify for the default retention period. Must be
   *          used with <code>Mode</code>.</p>
   */
  Years?: number;
}

/**
 * @public
 * <p>The container element for an Object Lock rule.</p>
 */
export interface ObjectLockRule {
  /**
   * @public
   * <p>The default Object Lock retention mode and period that you want to apply to new objects
   *          placed in the specified bucket. Bucket settings require both a mode and a period. The
   *          period can be either <code>Days</code> or <code>Years</code> but you must select one. You
   *          cannot specify <code>Days</code> and <code>Years</code> at the same time.</p>
   */
  DefaultRetention?: DefaultRetention;
}

/**
 * @public
 * <p>The container element for Object Lock configuration parameters.</p>
 */
export interface ObjectLockConfiguration {
  /**
   * @public
   * <p>Indicates whether this bucket has an Object Lock configuration enabled. Enable
   *             <code>ObjectLockEnabled</code> when you apply <code>ObjectLockConfiguration</code> to a
   *          bucket. </p>
   */
  ObjectLockEnabled?: ObjectLockEnabled | string;

  /**
   * @public
   * <p>Specifies the Object Lock rule for the specified object. Enable the this rule when you
   *          apply <code>ObjectLockConfiguration</code> to a bucket. Bucket settings require both a mode
   *          and a period. The period can be either <code>Days</code> or <code>Years</code> but you must
   *          select one. You cannot specify <code>Days</code> and <code>Years</code> at the same
   *          time.</p>
   */
  Rule?: ObjectLockRule;
}

/**
 * @public
 */
export interface GetObjectLockConfigurationOutput {
  /**
   * @public
   * <p>The specified bucket's Object Lock configuration.</p>
   */
  ObjectLockConfiguration?: ObjectLockConfiguration;
}

/**
 * @public
 */
export interface GetObjectLockConfigurationRequest {
  /**
   * @public
   * <p>The bucket whose Object Lock configuration you want to retrieve.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>A Retention configuration for an object.</p>
 */
export interface ObjectLockRetention {
  /**
   * @public
   * <p>Indicates the Retention mode for the specified object.</p>
   */
  Mode?: ObjectLockRetentionMode | string;

  /**
   * @public
   * <p>The date on which this Object Lock Retention will expire.</p>
   */
  RetainUntilDate?: Date;
}

/**
 * @public
 */
export interface GetObjectRetentionOutput {
  /**
   * @public
   * <p>The container element for an object's retention settings.</p>
   */
  Retention?: ObjectLockRetention;
}

/**
 * @public
 */
export interface GetObjectRetentionRequest {
  /**
   * @public
   * <p>The bucket name containing the object whose retention settings you want to retrieve. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The key name for the object whose retention settings you want to retrieve.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The version ID for the object whose retention settings you want to retrieve.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface GetObjectTaggingOutput {
  /**
   * @public
   * <p>The versionId of the object for which you got the tagging information.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Contains the tag set.</p>
   */
  TagSet: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetObjectTaggingRequest {
  /**
   * @public
   * <p>The bucket name containing the object for which to get the tagging information. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Object key for which to get the tagging information.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The versionId of the object for which to get the tagging information.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;
}

/**
 * @public
 */
export interface GetObjectTorrentOutput {
  /**
   * @public
   * <p>A Bencoded dictionary as defined by the BitTorrent specification</p>
   */
  Body?: StreamingBlobTypes;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 */
export interface GetObjectTorrentRequest {
  /**
   * @public
   * <p>The name of the bucket containing the object for which to get the torrent files.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The object key for which to get the information.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can
 *          enable the configuration options in any combination. For more information about when Amazon S3
 *          considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. </p>
 */
export interface PublicAccessBlockConfiguration {
  /**
   * @public
   * <p>Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket
   *          and objects in this bucket. Setting this element to <code>TRUE</code> causes the following
   *          behavior:</p>
   *          <ul>
   *             <li>
   *                <p>PUT Bucket ACL and PUT Object ACL calls fail if the specified ACL is
   *                public.</p>
   *             </li>
   *             <li>
   *                <p>PUT Object calls fail if the request includes a public ACL.</p>
   *             </li>
   *             <li>
   *                <p>PUT Bucket calls fail if the request includes a public ACL.</p>
   *             </li>
   *          </ul>
   *          <p>Enabling this setting doesn't affect existing policies or ACLs.</p>
   */
  BlockPublicAcls?: boolean;

  /**
   * @public
   * <p>Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this
   *          bucket. Setting this element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on
   *          this bucket and objects in this bucket.</p>
   *          <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't
   *          prevent new public ACLs from being set.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * @public
   * <p>Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this
   *          element to <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket policy if the
   *          specified bucket policy allows public access. </p>
   *          <p>Enabling this setting doesn't affect existing bucket policies.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
   * @public
   * <p>Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting
   *          this element to <code>TRUE</code> restricts access to this bucket to only Amazon Web Service principals and authorized users within this account if the bucket has
   *          a public policy.</p>
   *          <p>Enabling this setting doesn't affect previously stored bucket policies, except that
   *          public and cross-account access within any public bucket policy, including non-public
   *          delegation to specific accounts, is blocked.</p>
   */
  RestrictPublicBuckets?: boolean;
}

/**
 * @public
 */
export interface GetPublicAccessBlockOutput {
  /**
   * @public
   * <p>The <code>PublicAccessBlock</code> configuration currently in effect for this Amazon S3
   *          bucket.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}

/**
 * @public
 */
export interface GetPublicAccessBlockRequest {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want
   *          to retrieve. </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface HeadBucketRequest {
  /**
   * @public
   * <p>The bucket name.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the
   *          bucket name. If the Object Lambda access point alias in a request is not valid, the error code
   *             <code>InvalidAccessPointAliasError</code> is returned. For more information about
   *             <code>InvalidAccessPointAliasError</code>, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error
   *          Codes</a>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>The specified content does not exist.</p>
 */
export class NotFound extends __BaseException {
  readonly name: "NotFound" = "NotFound";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFound, __BaseException>) {
    super({
      name: "NotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFound.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ArchiveStatus = {
  ARCHIVE_ACCESS: "ARCHIVE_ACCESS",
  DEEP_ARCHIVE_ACCESS: "DEEP_ARCHIVE_ACCESS",
} as const;

/**
 * @public
 */
export type ArchiveStatus = (typeof ArchiveStatus)[keyof typeof ArchiveStatus];

/**
 * @public
 */
export interface HeadObjectOutput {
  /**
   * @public
   * <p>Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If
   *          false, this response header does not appear in the response.</p>
   */
  DeleteMarker?: boolean;

  /**
   * @public
   * <p>Indicates that a range of bytes was specified.</p>
   */
  AcceptRanges?: string;

  /**
   * @public
   * <p>If the object expiration is configured (see PUT Bucket lifecycle), the response includes
   *          this header. It includes the <code>expiry-date</code> and <code>rule-id</code> key-value
   *          pairs providing object expiration information. The value of the <code>rule-id</code> is
   *          URL-encoded.</p>
   */
  Expiration?: string;

  /**
   * @public
   * <p>If the object is an archived object (an object whose storage class is GLACIER), the
   *          response includes this header if either the archive restoration is in progress (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html">RestoreObject</a> or an archive copy is already restored.</p>
   *          <p> If an archive copy is already restored, the header value indicates when Amazon S3 is
   *          scheduled to delete the object copy. For example:</p>
   *          <p>
   *             <code>x-amz-restore: ongoing-request="false", expiry-date="Fri, 21 Dec 2012 00:00:00
   *             GMT"</code>
   *          </p>
   *          <p>If the object restoration is in progress, the header returns the value
   *             <code>ongoing-request="true"</code>.</p>
   *          <p>For more information about archiving objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html#lifecycle-transition-general-considerations">Transitioning Objects: General Considerations</a>.</p>
   */
  Restore?: string;

  /**
   * @public
   * <p>The archive state of the head object.</p>
   */
  ArchiveStatus?: ArchiveStatus | string;

  /**
   * @public
   * <p>Creation date of the object.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>Size of the body in bytes.</p>
   */
  ContentLength?: number;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32 checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;

  /**
   * @public
   * <p>An entity tag (ETag) is an opaque identifier assigned by a web server to a specific
   *          version of a resource found at a URL.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>This is set to the number of metadata entries not returned in <code>x-amz-meta</code>
   *          headers. This can happen if you create metadata using an API like SOAP that supports more
   *          flexible metadata than the REST API. For example, using SOAP, you can create metadata whose
   *          values are not legal HTTP headers.</p>
   */
  MissingMeta?: number;

  /**
   * @public
   * <p>Version of the object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * @public
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * @public
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * @public
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * @public
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * @public
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * @public
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>, <code>aws:kms:dsse</code>).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * @public
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: Record<string, string>;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>If present, specifies the ID of the Key Management Service (KMS) symmetric encryption customer managed key
   *          that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * @public
   * <p>Indicates whether the object uses an S3 Bucket Key for server-side encryption with
   *          Key Management Service (KMS) keys (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * @public
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all
   *          objects except for S3 Standard storage class objects.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * @public
   * <p>Amazon S3 can return this header if your request involves a bucket that is either a source or
   *          a destination in a replication rule.</p>
   *          <p>In replication, you have a source bucket on which you configure replication and
   *          destination bucket or buckets where Amazon S3 stores object replicas. When you request an object
   *             (<code>GetObject</code>) or object metadata (<code>HeadObject</code>) from these
   *          buckets, Amazon S3 will return the <code>x-amz-replication-status</code> header in the response
   *          as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>If requesting an object from the source bucket</b>,
   *                Amazon S3 will return the <code>x-amz-replication-status</code> header if the object in
   *                your request is eligible for replication.</p>
   *                <p> For example, suppose that in your replication configuration, you specify object
   *                prefix <code>TaxDocs</code> requesting Amazon S3 to replicate objects with key prefix
   *                   <code>TaxDocs</code>. Any objects you upload with this key name prefix, for
   *                example <code>TaxDocs/document1.pdf</code>, are eligible for replication. For any
   *                object request with this key name prefix, Amazon S3 will return the
   *                   <code>x-amz-replication-status</code> header with value PENDING, COMPLETED or
   *                FAILED indicating object replication status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>If requesting an object from a destination
   *                bucket</b>, Amazon S3 will return the <code>x-amz-replication-status</code> header
   *                with value REPLICA if the object in your request is a replica that Amazon S3 created and
   *                there is no replica modification replication in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>When replicating objects to multiple destination
   *                   buckets</b>, the <code>x-amz-replication-status</code> header acts
   *                differently. The header of the source object will only return a value of COMPLETED
   *                when replication is successful to all destinations. The header will remain at value
   *                PENDING until replication has completed for all destinations. If one or more
   *                destinations fails replication the header will return FAILED. </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Replication</a>.</p>
   */
  ReplicationStatus?: ReplicationStatus | string;

  /**
   * @public
   * <p>The count of parts this object has. This value is only returned if you specify
   *             <code>partNumber</code> in your request and the object was uploaded as a multipart
   *          upload.</p>
   */
  PartsCount?: number;

  /**
   * @public
   * <p>The Object Lock mode, if any, that's in effect for this object. This header is only
   *          returned if the requester has the <code>s3:GetObjectRetention</code> permission. For more
   *          information about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object Lock</a>. </p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * @public
   * <p>The date and time when the Object Lock retention period expires. This header is only
   *          returned if the requester has the <code>s3:GetObjectRetention</code> permission.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * @public
   * <p>Specifies whether a legal hold is in effect for this object. This header is only
   *          returned if the requester has the <code>s3:GetObjectLegalHold</code> permission. This
   *          header is not returned if the specified version of this object has never had a legal hold
   *          applied. For more information about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object Lock</a>.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
}

/**
 * @public
 */
export interface HeadObjectRequest {
  /**
   * @public
   * <p>The name of the bucket containing the object.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Return the object only if its entity tag (ETag) is the same as the one specified;
   *          otherwise, return a 412 (precondition failed) error.</p>
   */
  IfMatch?: string;

  /**
   * @public
   * <p>Return the object only if it has been modified since the specified time; otherwise,
   *          return a 304 (not modified) error.</p>
   */
  IfModifiedSince?: Date;

  /**
   * @public
   * <p>Return the object only if its entity tag (ETag) is different from the one specified;
   *          otherwise, return a 304 (not modified) error.</p>
   */
  IfNoneMatch?: string;

  /**
   * @public
   * <p>Return the object only if it has not been modified since the specified time; otherwise,
   *          return a 412 (precondition failed) error.</p>
   */
  IfUnmodifiedSince?: Date;

  /**
   * @public
   * <p>The object key.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>HeadObject returns only the metadata for an object. If the Range is satisfiable, only
   *          the <code>ContentLength</code> is affected in the response. If the Range is not
   *          satisfiable, S3 returns a <code>416 - Requested Range Not Satisfiable</code> error.</p>
   */
  Range?: string;

  /**
   * @public
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * @public
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>Part number of the object being read. This is a positive integer between 1 and 10,000.
   *          Effectively performs a 'ranged' HEAD request for the part specified. Useful querying about
   *          the size of the part and the number of parts in this object.</p>
   */
  PartNumber?: number;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>To retrieve the checksum, this parameter must be enabled.</p>
   *          <p>In addition, if you enable <code>ChecksumMode</code> and the object is encrypted with
   *          Amazon Web Services Key Management Service (Amazon Web Services KMS), you must have permission to use the
   *             <code>kms:Decrypt</code> action for the request to succeed.</p>
   */
  ChecksumMode?: ChecksumMode | string;
}

/**
 * @public
 */
export interface ListBucketAnalyticsConfigurationsOutput {
  /**
   * @public
   * <p>Indicates whether the returned list of analytics configurations is complete. A value of
   *          true indicates that the list is not complete and the NextContinuationToken will be provided
   *          for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * @public
   * <p>The marker that is used as a starting point for this analytics configuration list
   *          response. This value is present if it was sent in the request.</p>
   */
  ContinuationToken?: string;

  /**
   * @public
   * <p>
   *             <code>NextContinuationToken</code> is sent when <code>isTruncated</code> is true, which
   *          indicates that there are more analytics configurations to list. The next request must
   *          include this <code>NextContinuationToken</code>. The token is obfuscated and is not a
   *          usable value.</p>
   */
  NextContinuationToken?: string;

  /**
   * @public
   * <p>The list of analytics configurations for a bucket.</p>
   */
  AnalyticsConfigurationList?: AnalyticsConfiguration[];
}

/**
 * @public
 */
export interface ListBucketAnalyticsConfigurationsRequest {
  /**
   * @public
   * <p>The name of the bucket from which analytics configurations are retrieved.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The <code>ContinuationToken</code> that represents a placeholder from where this request
   *          should begin.</p>
   */
  ContinuationToken?: string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface ListBucketIntelligentTieringConfigurationsOutput {
  /**
   * @public
   * <p>Indicates whether the returned list of analytics configurations is complete. A value of
   *             <code>true</code> indicates that the list is not complete and the
   *             <code>NextContinuationToken</code> will be provided for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * @public
   * <p>The <code>ContinuationToken</code> that represents a placeholder from where this request
   *          should begin.</p>
   */
  ContinuationToken?: string;

  /**
   * @public
   * <p>The marker used to continue this inventory configuration listing. Use the
   *             <code>NextContinuationToken</code> from this response to continue the listing in a
   *          subsequent request. The continuation token is an opaque value that Amazon S3 understands.</p>
   */
  NextContinuationToken?: string;

  /**
   * @public
   * <p>The list of S3 Intelligent-Tiering configurations for a bucket.</p>
   */
  IntelligentTieringConfigurationList?: IntelligentTieringConfiguration[];
}

/**
 * @public
 */
export interface ListBucketIntelligentTieringConfigurationsRequest {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The <code>ContinuationToken</code> that represents a placeholder from where this request
   *          should begin.</p>
   */
  ContinuationToken?: string;
}

/**
 * @public
 */
export interface ListBucketInventoryConfigurationsOutput {
  /**
   * @public
   * <p>If sent in the request, the marker that is used as a starting point for this inventory
   *          configuration list response.</p>
   */
  ContinuationToken?: string;

  /**
   * @public
   * <p>The list of inventory configurations for a bucket.</p>
   */
  InventoryConfigurationList?: InventoryConfiguration[];

  /**
   * @public
   * <p>Tells whether the returned list of inventory configurations is complete. A value of true
   *          indicates that the list is not complete and the NextContinuationToken is provided for a
   *          subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * @public
   * <p>The marker used to continue this inventory configuration listing. Use the
   *             <code>NextContinuationToken</code> from this response to continue the listing in a
   *          subsequent request. The continuation token is an opaque value that Amazon S3 understands.</p>
   */
  NextContinuationToken?: string;
}

/**
 * @public
 */
export interface ListBucketInventoryConfigurationsRequest {
  /**
   * @public
   * <p>The name of the bucket containing the inventory configurations to retrieve.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The marker used to continue an inventory configuration listing that has been truncated.
   *          Use the <code>NextContinuationToken</code> from a previously truncated list response to
   *          continue the listing. The continuation token is an opaque value that Amazon S3
   *          understands.</p>
   */
  ContinuationToken?: string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface ListBucketMetricsConfigurationsOutput {
  /**
   * @public
   * <p>Indicates whether the returned list of metrics configurations is complete. A value of
   *          true indicates that the list is not complete and the NextContinuationToken will be provided
   *          for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * @public
   * <p>The marker that is used as a starting point for this metrics configuration list
   *          response. This value is present if it was sent in the request.</p>
   */
  ContinuationToken?: string;

  /**
   * @public
   * <p>The marker used to continue a metrics configuration listing that has been truncated. Use
   *          the <code>NextContinuationToken</code> from a previously truncated list response to
   *          continue the listing. The continuation token is an opaque value that Amazon S3
   *          understands.</p>
   */
  NextContinuationToken?: string;

  /**
   * @public
   * <p>The list of metrics configurations for a bucket.</p>
   */
  MetricsConfigurationList?: MetricsConfiguration[];
}

/**
 * @public
 */
export interface ListBucketMetricsConfigurationsRequest {
  /**
   * @public
   * <p>The name of the bucket containing the metrics configurations to retrieve.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The marker that is used to continue a metrics configuration listing that has been
   *          truncated. Use the <code>NextContinuationToken</code> from a previously truncated list
   *          response to continue the listing. The continuation token is an opaque value that Amazon S3
   *          understands.</p>
   */
  ContinuationToken?: string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p> In terms of implementation, a Bucket is a resource. An Amazon S3 bucket name is globally
 *          unique, and the namespace is shared by all Amazon Web Services accounts. </p>
 */
export interface Bucket {
  /**
   * @public
   * <p>The name of the bucket.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Date the bucket was created. This date can change when making changes to your bucket,
   *          such as editing its bucket policy.</p>
   */
  CreationDate?: Date;
}

/**
 * @public
 */
export interface ListBucketsOutput {
  /**
   * @public
   * <p>The list of buckets owned by the requester.</p>
   */
  Buckets?: Bucket[];

  /**
   * @public
   * <p>The owner of the buckets listed.</p>
   */
  Owner?: Owner;
}

/**
 * @public
 * <p>Container for all (if there are any) keys between Prefix and the next occurrence of the
 *          string specified by a delimiter. CommonPrefixes lists keys that act like subdirectories in
 *          the directory specified by Prefix. For example, if the prefix is notes/ and the delimiter
 *          is a slash (/) as in notes/summer/july, the common prefix is notes/summer/. </p>
 */
export interface CommonPrefix {
  /**
   * @public
   * <p>Container for the specified common prefix.</p>
   */
  Prefix?: string;
}

/**
 * @public
 * @enum
 */
export const EncodingType = {
  url: "url",
} as const;

/**
 * @public
 */
export type EncodingType = (typeof EncodingType)[keyof typeof EncodingType];

/**
 * @public
 * <p>Container element that identifies who initiated the multipart upload. </p>
 */
export interface Initiator {
  /**
   * @public
   * <p>If the principal is an Amazon Web Services account, it provides the Canonical User ID. If the
   *          principal is an IAM User, it provides a user ARN value.</p>
   */
  ID?: string;

  /**
   * @public
   * <p>Name of the Principal.</p>
   */
  DisplayName?: string;
}

/**
 * @public
 * <p>Container for the <code>MultipartUpload</code> for the Amazon S3 object.</p>
 */
export interface MultipartUpload {
  /**
   * @public
   * <p>Upload ID that identifies the multipart upload.</p>
   */
  UploadId?: string;

  /**
   * @public
   * <p>Key of the object for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>Date and time at which the multipart upload was initiated.</p>
   */
  Initiated?: Date;

  /**
   * @public
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * @public
   * <p>Specifies the owner of the object that is part of the multipart upload. </p>
   */
  Owner?: Owner;

  /**
   * @public
   * <p>Identifies who initiated the multipart upload.</p>
   */
  Initiator?: Initiator;

  /**
   * @public
   * <p>The algorithm that was used to create a checksum of the object.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}

/**
 * @public
 */
export interface ListMultipartUploadsOutput {
  /**
   * @public
   * <p>The name of the bucket to which the multipart upload was initiated. Does not return the
   *          access point ARN or access point alias if used.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>The key at or after which the listing began.</p>
   */
  KeyMarker?: string;

  /**
   * @public
   * <p>Upload ID after which listing began.</p>
   */
  UploadIdMarker?: string;

  /**
   * @public
   * <p>When a list is truncated, this element specifies the value that should be used for the
   *          key-marker request parameter in a subsequent request.</p>
   */
  NextKeyMarker?: string;

  /**
   * @public
   * <p>When a prefix is provided in the request, this field contains the specified prefix. The
   *          result contains only keys starting with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>Contains the delimiter you specified in the request. If you don't specify a delimiter in
   *          your request, this element is absent from the response.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>When a list is truncated, this element specifies the value that should be used for the
   *             <code>upload-id-marker</code> request parameter in a subsequent request.</p>
   */
  NextUploadIdMarker?: string;

  /**
   * @public
   * <p>Maximum number of multipart uploads that could have been included in the
   *          response.</p>
   */
  MaxUploads?: number;

  /**
   * @public
   * <p>Indicates whether the returned list of multipart uploads is truncated. A value of true
   *          indicates that the list was truncated. The list can be truncated if the number of multipart
   *          uploads exceeds the limit allowed or specified by max uploads.</p>
   */
  IsTruncated?: boolean;

  /**
   * @public
   * <p>Container for elements related to a particular multipart upload. A response can contain
   *          zero or more <code>Upload</code> elements.</p>
   */
  Uploads?: MultipartUpload[];

  /**
   * @public
   * <p>If you specify a delimiter in the request, then the result returns each distinct key
   *          prefix containing the delimiter in a <code>CommonPrefixes</code> element. The distinct key
   *          prefixes are returned in the <code>Prefix</code> child element.</p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * @public
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   *          <p>If you specify the <code>encoding-type</code> request parameter, Amazon S3 includes this
   *          element in the response, and returns encoded key name values in the following response
   *          elements:</p>
   *          <p>
   *             <code>Delimiter</code>, <code>KeyMarker</code>, <code>Prefix</code>,
   *             <code>NextKeyMarker</code>, <code>Key</code>.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 */
export interface ListMultipartUploadsRequest {
  /**
   * @public
   * <p>The name of the bucket to which the multipart upload was initiated. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Character you use to group keys.</p>
   *          <p>All keys that contain the same string between the prefix, if specified, and the first
   *          occurrence of the delimiter after the prefix are grouped under a single result element,
   *             <code>CommonPrefixes</code>. If you don't specify the prefix parameter, then the
   *          substring starts at the beginning of the key. The keys that are grouped under
   *             <code>CommonPrefixes</code> result element are not returned elsewhere in the
   *          response.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding
   *          method to use. An object key can contain any Unicode character; however, the XML 1.0 parser
   *          cannot parse some characters, such as characters with an ASCII value from 0 to 10. For
   *          characters that are not supported in XML 1.0, you can add this parameter to request that
   *          Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * @public
   * <p>Together with <code>upload-id-marker</code>, this parameter specifies the multipart
   *          upload after which listing should begin.</p>
   *          <p>If <code>upload-id-marker</code> is not specified, only the keys lexicographically
   *          greater than the specified <code>key-marker</code> will be included in the list.</p>
   *          <p>If <code>upload-id-marker</code> is specified, any multipart uploads for a key equal to
   *          the <code>key-marker</code> might also be included, provided those multipart uploads have
   *          upload IDs lexicographically greater than the specified
   *          <code>upload-id-marker</code>.</p>
   */
  KeyMarker?: string;

  /**
   * @public
   * <p>Sets the maximum number of multipart uploads, from 1 to 1,000, to return in the response
   *          body. 1,000 is the maximum number of uploads that can be returned in a response.</p>
   */
  MaxUploads?: number;

  /**
   * @public
   * <p>Lists in-progress uploads only for those keys that begin with the specified prefix. You
   *          can use prefixes to separate a bucket into different grouping of keys. (You can think of
   *          using <code>prefix</code> to make groups in the same way that you'd use a folder in a file
   *          system.)</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>Together with key-marker, specifies the multipart upload after which listing should
   *          begin. If key-marker is not specified, the upload-id-marker parameter is ignored.
   *          Otherwise, any multipart uploads for a key equal to the key-marker might be included in the
   *          list only if they have an upload ID lexicographically greater than the specified
   *             <code>upload-id-marker</code>.</p>
   */
  UploadIdMarker?: string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;
}

/**
 * @public
 * <p>Specifies the restoration status of an object. Objects in certain storage classes must
 *          be restored before they can be retrieved. For more information about these storage classes
 *          and how to work with archived objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/archived-objects.html"> Working with archived
 *             objects</a> in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface RestoreStatus {
  /**
   * @public
   * <p>Specifies whether the object is currently being restored. If the object restoration is
   *          in progress, the header returns the value <code>TRUE</code>. For example:</p>
   *          <p>
   *             <code>x-amz-optional-object-attributes: IsRestoreInProgress="true"</code>
   *          </p>
   *          <p>If the object restoration has completed, the header returns the value
   *          <code>FALSE</code>. For example:</p>
   *          <p>
   *             <code>x-amz-optional-object-attributes: IsRestoreInProgress="false",
   *             RestoreExpiryDate="2012-12-21T00:00:00.000Z"</code>
   *          </p>
   *          <p>If the object hasn't been restored, there is no header response.</p>
   */
  IsRestoreInProgress?: boolean;

  /**
   * @public
   * <p>Indicates when the restored copy will expire. This value is populated only if the object
   *          has already been restored. For example:</p>
   *          <p>
   *             <code>x-amz-optional-object-attributes: IsRestoreInProgress="false",
   *             RestoreExpiryDate="2012-12-21T00:00:00.000Z"</code>
   *          </p>
   */
  RestoreExpiryDate?: Date;
}

/**
 * @public
 * @enum
 */
export const ObjectStorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  GLACIER_IR: "GLACIER_IR",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  OUTPOSTS: "OUTPOSTS",
  REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
  SNOW: "SNOW",
  STANDARD: "STANDARD",
  STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * @public
 */
export type ObjectStorageClass = (typeof ObjectStorageClass)[keyof typeof ObjectStorageClass];

/**
 * @public
 * <p>An object consists of data and its descriptive metadata.</p>
 */
export interface _Object {
  /**
   * @public
   * <p>The name that you assign to an object. You use the object key to retrieve the
   *          object.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>Creation date of the object.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>The entity tag is a hash of the object. The ETag reflects changes only to the contents
   *          of an object, not its metadata. The ETag may or may not be an MD5 digest of the object
   *          data. Whether or not it is depends on how the object was created and how it is encrypted as
   *          described below:</p>
   *          <ul>
   *             <li>
   *                <p>Objects created by the PUT Object, POST Object, or Copy operation, or through the
   *                Amazon Web Services Management Console, and are encrypted by SSE-S3 or plaintext, have ETags that
   *                are an MD5 digest of their object data.</p>
   *             </li>
   *             <li>
   *                <p>Objects created by the PUT Object, POST Object, or Copy operation, or through the
   *                Amazon Web Services Management Console, and are encrypted by SSE-C or SSE-KMS, have ETags that are
   *                not an MD5 digest of their object data.</p>
   *             </li>
   *             <li>
   *                <p>If an object is created by either the Multipart Upload or Part Copy operation, the
   *                ETag is not an MD5 digest, regardless of the method of encryption. If an object is
   *                larger than 16 MB, the Amazon Web Services Management Console will upload or copy that object as a
   *                Multipart Upload, and therefore the ETag will not be an MD5 digest.</p>
   *             </li>
   *          </ul>
   */
  ETag?: string;

  /**
   * @public
   * <p>The algorithm that was used to create a checksum of the object.</p>
   */
  ChecksumAlgorithm?: (ChecksumAlgorithm | string)[];

  /**
   * @public
   * <p>Size in bytes of the object</p>
   */
  Size?: number;

  /**
   * @public
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: ObjectStorageClass | string;

  /**
   * @public
   * <p>The owner of the object</p>
   */
  Owner?: Owner;

  /**
   * @public
   * <p>Specifies the restoration status of an object. Objects in certain storage classes must
   *          be restored before they can be retrieved. For more information about these storage classes
   *          and how to work with archived objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/archived-objects.html"> Working with archived
   *             objects</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RestoreStatus?: RestoreStatus;
}

/**
 * @public
 */
export interface ListObjectsOutput {
  /**
   * @public
   * <p>A flag that indicates whether Amazon S3 returned all of the results that satisfied the search
   *          criteria.</p>
   */
  IsTruncated?: boolean;

  /**
   * @public
   * <p>Indicates where in the bucket listing begins. Marker is included in the response if it
   *          was sent with the request.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>When the response is truncated (the <code>IsTruncated</code> element value in the
   *          response is <code>true</code>), you can use the key name in this field as the
   *             <code>marker</code> parameter in the subsequent request to get the next set of objects.
   *          Amazon S3 lists objects in alphabetical order. </p>
   *          <note>
   *             <p>This element is returned only if you have the <code>delimiter</code> request
   *             parameter specified. If the response does not include the <code>NextMarker</code>
   *             element and it is truncated, you can use the value of the last <code>Key</code> element
   *             in the response as the <code>marker</code> parameter in the subsequent request to get
   *             the next set of object keys.</p>
   *          </note>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>Metadata about each object returned.</p>
   */
  Contents?: _Object[];

  /**
   * @public
   * <p>The bucket name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Keys that begin with the indicated prefix.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>Causes keys that contain the same string between the prefix and the first occurrence of
   *          the delimiter to be rolled up into a single result element in the
   *             <code>CommonPrefixes</code> collection. These rolled-up keys are not returned elsewhere
   *          in the response. Each rolled-up result counts as only one return against the
   *             <code>MaxKeys</code> value.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>The maximum number of keys returned in the response body.</p>
   */
  MaxKeys?: number;

  /**
   * @public
   * <p>All of the keys (up to 1,000) rolled up in a common prefix count as a single return when
   *          calculating the number of returns. </p>
   *          <p>A response can contain <code>CommonPrefixes</code> only if you specify a
   *          delimiter.</p>
   *          <p>
   *             <code>CommonPrefixes</code> contains all (if there are any) keys between
   *             <code>Prefix</code> and the next occurrence of the string specified by the
   *          delimiter.</p>
   *          <p>
   *             <code>CommonPrefixes</code> lists keys that act like subdirectories in the directory
   *          specified by <code>Prefix</code>.</p>
   *          <p>For example, if the prefix is <code>notes/</code> and the delimiter is a slash
   *             (<code>/</code>), as in <code>notes/summer/july</code>, the common prefix is
   *             <code>notes/summer/</code>. All of the keys that roll up into a common prefix count as a
   *          single return when calculating the number of returns.</p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * @public
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 * @enum
 */
export const OptionalObjectAttributes = {
  RESTORE_STATUS: "RestoreStatus",
} as const;

/**
 * @public
 */
export type OptionalObjectAttributes = (typeof OptionalObjectAttributes)[keyof typeof OptionalObjectAttributes];

/**
 * @public
 */
export interface ListObjectsRequest {
  /**
   * @public
   * <p>The name of the bucket containing the objects.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>A delimiter is a character that you use to group keys.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding
   *          method to use. An object key can contain any Unicode character; however, the XML 1.0 parser
   *          cannot parse some characters, such as characters with an ASCII value from 0 to 10. For
   *          characters that are not supported in XML 1.0, you can add this parameter to request that
   *          Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * @public
   * <p>Marker is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this
   *          specified key. Marker can be any key in the bucket.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Sets the maximum number of keys returned in the response. By default, the action returns
   *          up to 1,000 key names. The response might contain fewer keys but will never contain more.
   *       </p>
   */
  MaxKeys?: number;

  /**
   * @public
   * <p>Limits the response to keys that begin with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that she or he will be charged for the list objects
   *          request. Bucket owners need not specify this parameter in their requests.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>Specifies the optional fields that you want returned in the response. Fields that you do
   *          not specify are not returned.</p>
   */
  OptionalObjectAttributes?: (OptionalObjectAttributes | string)[];
}

/**
 * @public
 * <p>The specified bucket does not exist.</p>
 */
export class NoSuchBucket extends __BaseException {
  readonly name: "NoSuchBucket" = "NoSuchBucket";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchBucket, __BaseException>) {
    super({
      name: "NoSuchBucket",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchBucket.prototype);
  }
}

/**
 * @public
 */
export interface ListObjectsV2Output {
  /**
   * @public
   * <p>Set to <code>false</code> if all of the results were returned. Set to <code>true</code>
   *          if more keys are available to return. If the number of results exceeds that specified by
   *             <code>MaxKeys</code>, all of the results might not be returned.</p>
   */
  IsTruncated?: boolean;

  /**
   * @public
   * <p>Metadata about each object returned.</p>
   */
  Contents?: _Object[];

  /**
   * @public
   * <p>The bucket name.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p> Keys that begin with the indicated prefix.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>Causes keys that contain the same string between the <code>prefix</code> and the first
   *          occurrence of the delimiter to be rolled up into a single result element in the
   *             <code>CommonPrefixes</code> collection. These rolled-up keys are not returned elsewhere
   *          in the response. Each rolled-up result counts as only one return against the
   *             <code>MaxKeys</code> value.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>Sets the maximum number of keys returned in the response. By default, the action returns
   *          up to 1,000 key names. The response might contain fewer keys but will never contain
   *          more.</p>
   */
  MaxKeys?: number;

  /**
   * @public
   * <p>All of the keys (up to 1,000) rolled up into a common prefix count as a single return
   *          when calculating the number of returns.</p>
   *          <p>A response can contain <code>CommonPrefixes</code> only if you specify a
   *          delimiter.</p>
   *          <p>
   *             <code>CommonPrefixes</code> contains all (if there are any) keys between
   *             <code>Prefix</code> and the next occurrence of the string specified by a
   *          delimiter.</p>
   *          <p>
   *             <code>CommonPrefixes</code> lists keys that act like subdirectories in the directory
   *          specified by <code>Prefix</code>.</p>
   *          <p>For example, if the prefix is <code>notes/</code> and the delimiter is a slash
   *             (<code>/</code>) as in <code>notes/summer/july</code>, the common prefix is
   *             <code>notes/summer/</code>. All of the keys that roll up into a common prefix count as a
   *          single return when calculating the number of returns. </p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * @public
   * <p>Encoding type used by Amazon S3 to encode object key names in the XML response.</p>
   *          <p>If you specify the <code>encoding-type</code> request parameter, Amazon S3 includes this
   *          element in the response, and returns encoded key name values in the following response
   *          elements:</p>
   *          <p>
   *             <code>Delimiter, Prefix, Key,</code> and <code>StartAfter</code>.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * @public
   * <p>
   *             <code>KeyCount</code> is the number of keys returned with this request.
   *             <code>KeyCount</code> will always be less than or equal to the <code>MaxKeys</code>
   *          field. For example, if you ask for 50 keys, your result will include 50 keys or
   *          fewer.</p>
   */
  KeyCount?: number;

  /**
   * @public
   * <p> If <code>ContinuationToken</code> was sent with the request, it is included in the
   *          response.</p>
   */
  ContinuationToken?: string;

  /**
   * @public
   * <p>
   *             <code>NextContinuationToken</code> is sent when <code>isTruncated</code> is true, which
   *          means there are more keys in the bucket that can be listed. The next list requests to Amazon S3
   *          can be continued with this <code>NextContinuationToken</code>.
   *             <code>NextContinuationToken</code> is obfuscated and is not a real key</p>
   */
  NextContinuationToken?: string;

  /**
   * @public
   * <p>If StartAfter was sent with the request, it is included in the response.</p>
   */
  StartAfter?: string;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 */
export interface ListObjectsV2Request {
  /**
   * @public
   * <p>Bucket name to list. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>A delimiter is a character that you use to group keys.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * @public
   * <p>Sets the maximum number of keys returned in the response. By default, the action returns
   *          up to 1,000 key names. The response might contain fewer keys but will never contain
   *          more.</p>
   */
  MaxKeys?: number;

  /**
   * @public
   * <p>Limits the response to keys that begin with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>
   *             <code>ContinuationToken</code> indicates to Amazon S3 that the list is being continued on
   *          this bucket with a token. <code>ContinuationToken</code> is obfuscated and is not a real
   *          key.</p>
   */
  ContinuationToken?: string;

  /**
   * @public
   * <p>The owner field is not present in <code>ListObjectsV2</code> by default. If you want to
   *          return the owner field with each key in the result, then set the <code>FetchOwner</code>
   *          field to <code>true</code>.</p>
   */
  FetchOwner?: boolean;

  /**
   * @public
   * <p>StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this
   *          specified key. StartAfter can be any key in the bucket.</p>
   */
  StartAfter?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that she or he will be charged for the list objects
   *          request in V2 style. Bucket owners need not specify this parameter in their
   *          requests.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>Specifies the optional fields that you want returned in the response. Fields that you do
   *          not specify are not returned.</p>
   */
  OptionalObjectAttributes?: (OptionalObjectAttributes | string)[];
}

/**
 * @public
 * <p>Information about the delete marker.</p>
 */
export interface DeleteMarkerEntry {
  /**
   * @public
   * <p>The account that created the delete marker.></p>
   */
  Owner?: Owner;

  /**
   * @public
   * <p>The object key.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>Version ID of an object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Specifies whether the object is (true) or is not (false) the latest version of an
   *          object.</p>
   */
  IsLatest?: boolean;

  /**
   * @public
   * <p>Date and time the object was last modified.</p>
   */
  LastModified?: Date;
}

/**
 * @public
 * @enum
 */
export const ObjectVersionStorageClass = {
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type ObjectVersionStorageClass = (typeof ObjectVersionStorageClass)[keyof typeof ObjectVersionStorageClass];

/**
 * @public
 * <p>The version of an object.</p>
 */
export interface ObjectVersion {
  /**
   * @public
   * <p>The entity tag is an MD5 hash of that version of the object.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>The algorithm that was used to create a checksum of the object.</p>
   */
  ChecksumAlgorithm?: (ChecksumAlgorithm | string)[];

  /**
   * @public
   * <p>Size in bytes of the object.</p>
   */
  Size?: number;

  /**
   * @public
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: ObjectVersionStorageClass | string;

  /**
   * @public
   * <p>The object key.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>Version ID of an object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Specifies whether the object is (true) or is not (false) the latest version of an
   *          object.</p>
   */
  IsLatest?: boolean;

  /**
   * @public
   * <p>Date and time the object was last modified.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>Specifies the owner of the object.</p>
   */
  Owner?: Owner;

  /**
   * @public
   * <p>Specifies the restoration status of an object. Objects in certain storage classes must
   *          be restored before they can be retrieved. For more information about these storage classes
   *          and how to work with archived objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/archived-objects.html"> Working with archived
   *             objects</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RestoreStatus?: RestoreStatus;
}

/**
 * @public
 */
export interface ListObjectVersionsOutput {
  /**
   * @public
   * <p>A flag that indicates whether Amazon S3 returned all of the results that satisfied the search
   *          criteria. If your results were truncated, you can make a follow-up paginated request by
   *          using the <code>NextKeyMarker</code> and <code>NextVersionIdMarker</code> response
   *          parameters as a starting place in another request to return the rest of the results.</p>
   */
  IsTruncated?: boolean;

  /**
   * @public
   * <p>Marks the last key returned in a truncated response.</p>
   */
  KeyMarker?: string;

  /**
   * @public
   * <p>Marks the last version of the key returned in a truncated response.</p>
   */
  VersionIdMarker?: string;

  /**
   * @public
   * <p>When the number of responses exceeds the value of <code>MaxKeys</code>,
   *             <code>NextKeyMarker</code> specifies the first key not returned that satisfies the
   *          search criteria. Use this value for the key-marker request parameter in a subsequent
   *          request.</p>
   */
  NextKeyMarker?: string;

  /**
   * @public
   * <p>When the number of responses exceeds the value of <code>MaxKeys</code>,
   *             <code>NextVersionIdMarker</code> specifies the first object version not returned that
   *          satisfies the search criteria. Use this value for the <code>version-id-marker</code>
   *          request parameter in a subsequent request.</p>
   */
  NextVersionIdMarker?: string;

  /**
   * @public
   * <p>Container for version information.</p>
   */
  Versions?: ObjectVersion[];

  /**
   * @public
   * <p>Container for an object that is a delete marker.</p>
   */
  DeleteMarkers?: DeleteMarkerEntry[];

  /**
   * @public
   * <p>The bucket name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Selects objects that start with the value supplied by this parameter.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>The delimiter grouping the included keys. A delimiter is a character that you specify to
   *          group keys. All keys that contain the same string between the prefix and the first
   *          occurrence of the delimiter are grouped under a single result element in
   *             <code>CommonPrefixes</code>. These groups are counted as one result against the
   *             <code>max-keys</code> limitation. These keys are not returned elsewhere in the
   *          response.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>Specifies the maximum number of objects to return.</p>
   */
  MaxKeys?: number;

  /**
   * @public
   * <p>All of the keys rolled up into a common prefix count as a single return when calculating
   *          the number of returns.</p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * @public
   * <p> Encoding type used by Amazon S3 to encode object key names in the XML response.</p>
   *          <p>If you specify the <code>encoding-type</code> request parameter, Amazon S3 includes this
   *          element in the response, and returns encoded key name values in the following response
   *          elements:</p>
   *          <p>
   *             <code>KeyMarker, NextKeyMarker, Prefix, Key</code>, and <code>Delimiter</code>.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 */
export interface ListObjectVersionsRequest {
  /**
   * @public
   * <p>The bucket name that contains the objects. </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>A delimiter is a character that you specify to group keys. All keys that contain the
   *          same string between the <code>prefix</code> and the first occurrence of the delimiter are
   *          grouped under a single result element in <code>CommonPrefixes</code>. These groups are
   *          counted as one result against the <code>max-keys</code> limitation. These keys are not
   *          returned elsewhere in the response.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding
   *          method to use. An object key can contain any Unicode character; however, the XML 1.0 parser
   *          cannot parse some characters, such as characters with an ASCII value from 0 to 10. For
   *          characters that are not supported in XML 1.0, you can add this parameter to request that
   *          Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * @public
   * <p>Specifies the key to start with when listing objects in a bucket.</p>
   */
  KeyMarker?: string;

  /**
   * @public
   * <p>Sets the maximum number of keys returned in the response. By default, the action returns
   *          up to 1,000 key names. The response might contain fewer keys but will never contain more.
   *          If additional keys satisfy the search criteria, but were not returned because
   *             <code>max-keys</code> was exceeded, the response contains
   *             <code><isTruncated>true</isTruncated></code>. To return the additional keys,
   *          see <code>key-marker</code> and <code>version-id-marker</code>.</p>
   */
  MaxKeys?: number;

  /**
   * @public
   * <p>Use this parameter to select only those keys that begin with the specified prefix. You
   *          can use prefixes to separate a bucket into different groupings of keys. (You can think of
   *          using <code>prefix</code> to make groups in the same way that you'd use a folder in a file
   *          system.) You can use <code>prefix</code> with <code>delimiter</code> to roll up numerous
   *          objects into a single result under <code>CommonPrefixes</code>. </p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>Specifies the object version you want to start listing from.</p>
   */
  VersionIdMarker?: string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>Specifies the optional fields that you want returned in the response. Fields that you do
   *          not specify are not returned.</p>
   */
  OptionalObjectAttributes?: (OptionalObjectAttributes | string)[];
}

/**
 * @public
 * <p>Container for elements related to a part.</p>
 */
export interface Part {
  /**
   * @public
   * <p>Part number identifying the part. This is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber?: number;

  /**
   * @public
   * <p>Date and time at which the part was uploaded.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>Entity tag returned when the part was uploaded.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>Size in bytes of the uploaded part data.</p>
   */
  Size?: number;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 32-bit CRC32 checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 256-bit SHA-256 digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;
}

/**
 * @public
 */
export interface ListPartsOutput {
  /**
   * @public
   * <p>If the bucket has a lifecycle rule configured with an action to abort incomplete
   *          multipart uploads and the prefix in the lifecycle rule matches the object name in the
   *          request, then the response includes this header indicating when the initiated multipart
   *          upload will become eligible for abort operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle
   *          Configuration</a>.</p>
   *          <p>The response will also include the <code>x-amz-abort-rule-id</code> header that will
   *          provide the ID of the lifecycle configuration rule that defines this action.</p>
   */
  AbortDate?: Date;

  /**
   * @public
   * <p>This header is returned along with the <code>x-amz-abort-date</code> header. It
   *          identifies applicable lifecycle configuration rule that defines the action to abort
   *          incomplete multipart uploads.</p>
   */
  AbortRuleId?: string;

  /**
   * @public
   * <p>The name of the bucket to which the multipart upload was initiated. Does not return the
   *          access point ARN or access point alias if used.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>Upload ID identifying the multipart upload whose parts are being listed.</p>
   */
  UploadId?: string;

  /**
   * @public
   * <p>When a list is truncated, this element specifies the last part in the list, as well as
   *          the value to use for the part-number-marker request parameter in a subsequent
   *          request.</p>
   */
  PartNumberMarker?: string;

  /**
   * @public
   * <p>When a list is truncated, this element specifies the last part in the list, as well as
   *          the value to use for the <code>part-number-marker</code> request parameter in a subsequent
   *          request.</p>
   */
  NextPartNumberMarker?: string;

  /**
   * @public
   * <p>Maximum number of parts that were allowed in the response.</p>
   */
  MaxParts?: number;

  /**
   * @public
   * <p> Indicates whether the returned list of parts is truncated. A true value indicates that
   *          the list was truncated. A list can be truncated if the number of parts exceeds the limit
   *          returned in the MaxParts element.</p>
   */
  IsTruncated?: boolean;

  /**
   * @public
   * <p> Container for elements related to a particular part. A response can contain zero or
   *          more <code>Part</code> elements.</p>
   */
  Parts?: Part[];

  /**
   * @public
   * <p>Container element that identifies who initiated the multipart upload. If the initiator
   *          is an Amazon Web Services account, this element provides the same information as the <code>Owner</code>
   *          element. If the initiator is an IAM User, this element provides the user ARN and display
   *          name.</p>
   */
  Initiator?: Initiator;

  /**
   * @public
   * <p> Container element that identifies the object owner, after the object is created. If
   *          multipart upload is initiated by an IAM user, this element provides the parent account ID
   *          and display name.</p>
   */
  Owner?: Owner;

  /**
   * @public
   * <p>Class of storage (STANDARD or REDUCED_REDUNDANCY) used to store the uploaded
   *          object.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * @public
   * <p>The algorithm that was used to create a checksum of the object.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}

/**
 * @public
 */
export interface ListPartsRequest {
  /**
   * @public
   * <p>The name of the bucket to which the parts are being uploaded. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Sets the maximum number of parts to return.</p>
   */
  MaxParts?: number;

  /**
   * @public
   * <p>Specifies the part after which listing should begin. Only parts with higher part numbers
   *          will be listed.</p>
   */
  PartNumberMarker?: string;

  /**
   * @public
   * <p>Upload ID identifying the multipart upload whose parts are being listed.</p>
   */
  UploadId: string | undefined;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created
   *     using a checksum algorithm. For more information,
   *     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm.
   *     For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  SSECustomerKey?: string;

  /**
   * @public
   * <p>The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum
   *     algorithm. For more information,
   *     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  SSECustomerKeyMD5?: string;
}

/**
 * @public
 */
export interface PutBucketAccelerateConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket for which the accelerate configuration is set.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Container for setting the transfer acceleration state.</p>
   */
  AccelerateConfiguration: AccelerateConfiguration | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}

/**
 * @public
 */
export interface PutBucketAclRequest {
  /**
   * @public
   * <p>The canned ACL to apply to the bucket.</p>
   */
  ACL?: BucketCannedACL | string;

  /**
   * @public
   * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
   */
  AccessControlPolicy?: AccessControlPolicy;

  /**
   * @public
   * <p>The bucket to which to apply the ACL.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864.</a>
   *          </p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   */
  GrantFullControl?: string;

  /**
   * @public
   * <p>Allows grantee to list the objects in the bucket.</p>
   */
  GrantRead?: string;

  /**
   * @public
   * <p>Allows grantee to read the bucket ACL.</p>
   */
  GrantReadACP?: string;

  /**
   * @public
   * <p>Allows grantee to create new objects in the bucket.</p>
   *          <p>For the bucket and object owners of existing objects, also allows deletions and
   *          overwrites of those objects.</p>
   */
  GrantWrite?: string;

  /**
   * @public
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   */
  GrantWriteACP?: string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutBucketAnalyticsConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket to which an analytics configuration is stored.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The configuration and any analyses for the analytics filter.</p>
   */
  AnalyticsConfiguration: AnalyticsConfiguration | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling
 *             Cross-Origin Resource Sharing</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 */
export interface CORSConfiguration {
  /**
   * @public
   * <p>A set of origins and methods (cross-origin access that you want to allow). You can add
   *          up to 100 rules to the configuration.</p>
   */
  CORSRules: CORSRule[] | undefined;
}

/**
 * @public
 */
export interface PutBucketCorsRequest {
  /**
   * @public
   * <p>Specifies the bucket impacted by the <code>cors</code>configuration.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling
   *             Cross-Origin Resource Sharing</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   */
  CORSConfiguration: CORSConfiguration | undefined;

  /**
   * @public
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864.</a>
   *          </p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutBucketEncryptionRequest {
  /**
   * @public
   * <p>Specifies default encryption for a bucket using server-side encryption with different
   *          key options. By default, all buckets have a default encryption configuration that uses
   *          server-side encryption with Amazon S3 managed keys (SSE-S3). You can optionally configure
   *          default encryption for a bucket by using server-side encryption with an Amazon Web Services KMS key
   *          (SSE-KMS) or a customer-provided key (SSE-C). For information about the bucket default
   *          encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Bucket Default Encryption</a>
   *          in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The base64-encoded 128-bit MD5 digest of the server-side encryption
   *          configuration.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>Specifies the default server-side-encryption configuration.</p>
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutBucketIntelligentTieringConfigurationRequest {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Container for S3 Intelligent-Tiering configuration.</p>
   */
  IntelligentTieringConfiguration: IntelligentTieringConfiguration | undefined;
}

/**
 * @public
 */
export interface PutBucketInventoryConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket where the inventory configuration will be stored.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Specifies the inventory configuration.</p>
   */
  InventoryConfiguration: InventoryConfiguration | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a>
 *          in the <i>Amazon S3 User Guide</i>.</p>
 */
export interface BucketLifecycleConfiguration {
  /**
   * @public
   * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
   */
  Rules: LifecycleRule[] | undefined;
}

/**
 * @public
 */
export interface PutBucketLifecycleConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket for which to set the configuration.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
   */
  LifecycleConfiguration?: BucketLifecycleConfiguration;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>Container for logging status information.</p>
 */
export interface BucketLoggingStatus {
  /**
   * @public
   * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys
   *          for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
   *             <i>Amazon S3 API Reference</i>.</p>
   */
  LoggingEnabled?: LoggingEnabled;
}

/**
 * @public
 */
export interface PutBucketLoggingRequest {
  /**
   * @public
   * <p>The name of the bucket for which to set the logging parameters.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Container for logging status information.</p>
   */
  BucketLoggingStatus: BucketLoggingStatus | undefined;

  /**
   * @public
   * <p>The MD5 hash of the <code>PutBucketLogging</code> request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutBucketMetricsConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket for which the metrics configuration is set.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The ID used to identify the metrics configuration. The ID has a 64 character limit and
   *          can only contain letters, numbers, periods, dashes, and underscores.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Specifies the metrics configuration.</p>
   */
  MetricsConfiguration: MetricsConfiguration | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutBucketNotificationConfigurationRequest {
  /**
   * @public
   * <p>The name of the bucket.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>A container for specifying the notification configuration of the bucket. If this element
   *          is empty, notifications are turned off for the bucket.</p>
   */
  NotificationConfiguration: NotificationConfiguration | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>Skips validation of Amazon SQS, Amazon SNS, and Lambda
   *          destinations. True or false value.</p>
   */
  SkipDestinationValidation?: boolean;
}

/**
 * @public
 */
export interface PutBucketOwnershipControlsRequest {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket whose <code>OwnershipControls</code> you want to set.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The MD5 hash of the <code>OwnershipControls</code> request body. </p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>The <code>OwnershipControls</code> (BucketOwnerEnforced, BucketOwnerPreferred, or
   *          ObjectWriter) that you want to apply to this Amazon S3 bucket.</p>
   */
  OwnershipControls: OwnershipControls | undefined;
}

/**
 * @public
 */
export interface PutBucketPolicyRequest {
  /**
   * @public
   * <p>The name of the bucket.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The MD5 hash of the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>Set this parameter to true to confirm that you want to remove your permissions to change
   *          this bucket policy in the future.</p>
   */
  ConfirmRemoveSelfBucketAccess?: boolean;

  /**
   * @public
   * <p>The bucket policy as a JSON document.</p>
   */
  Policy: string | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutBucketReplicationRequest {
  /**
   * @public
   * <p>The name of the bucket</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
   *          replication configuration is 2 MB.</p>
   */
  ReplicationConfiguration: ReplicationConfiguration | undefined;

  /**
   * @public
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   */
  Token?: string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>Container for Payer.</p>
 */
export interface RequestPaymentConfiguration {
  /**
   * @public
   * <p>Specifies who pays for the download and request fees.</p>
   */
  Payer: Payer | string | undefined;
}

/**
 * @public
 */
export interface PutBucketRequestPaymentRequest {
  /**
   * @public
   * <p>The bucket name.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>Container for Payer.</p>
   */
  RequestPaymentConfiguration: RequestPaymentConfiguration | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>Container for <code>TagSet</code> elements.</p>
 */
export interface Tagging {
  /**
   * @public
   * <p>A collection for a set of tags</p>
   */
  TagSet: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutBucketTaggingRequest {
  /**
   * @public
   * <p>The bucket name.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements.</p>
   */
  Tagging: Tagging | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * @enum
 */
export const MFADelete = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type MFADelete = (typeof MFADelete)[keyof typeof MFADelete];

/**
 * @public
 * <p>Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT
 *             Bucket versioning</a> in the <i>Amazon S3 API Reference</i>.</p>
 */
export interface VersioningConfiguration {
  /**
   * @public
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This
   *          element is only returned if the bucket has been configured with MFA delete. If the bucket
   *          has never been so configured, this element is not returned.</p>
   */
  MFADelete?: MFADelete | string;

  /**
   * @public
   * <p>The versioning state of the bucket.</p>
   */
  Status?: BucketVersioningStatus | string;
}

/**
 * @public
 */
export interface PutBucketVersioningRequest {
  /**
   * @public
   * <p>The bucket name.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a
   *          message integrity check to verify that the request body was not corrupted in transit. For
   *          more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device.</p>
   */
  MFA?: string;

  /**
   * @public
   * <p>Container for setting the versioning state.</p>
   */
  VersioningConfiguration: VersioningConfiguration | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * <p>Specifies website configuration parameters for an Amazon S3 bucket.</p>
 */
export interface WebsiteConfiguration {
  /**
   * @public
   * <p>The name of the error document for the website.</p>
   */
  ErrorDocument?: ErrorDocument;

  /**
   * @public
   * <p>The name of the index document for the website.</p>
   */
  IndexDocument?: IndexDocument;

  /**
   * @public
   * <p>The redirect behavior for every request to this bucket's website endpoint.</p>
   *          <important>
   *             <p>If you specify this property, you can't specify any other property.</p>
   *          </important>
   */
  RedirectAllRequestsTo?: RedirectAllRequestsTo;

  /**
   * @public
   * <p>Rules that define when a redirect is applied and the redirect behavior.</p>
   */
  RoutingRules?: RoutingRule[];
}

/**
 * @public
 */
export interface PutBucketWebsiteRequest {
  /**
   * @public
   * <p>The bucket name.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>Container for the request.</p>
   */
  WebsiteConfiguration: WebsiteConfiguration | undefined;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutObjectOutput {
  /**
   * @public
   * <p>If the expiration is configured for the object (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>), the response includes this header. It
   *          includes the <code>expiry-date</code> and <code>rule-id</code> key-value pairs that provide
   *          information about object expiration. The value of the <code>rule-id</code> is
   *          URL-encoded.</p>
   */
  Expiration?: string;

  /**
   * @public
   * <p>Entity tag for the uploaded object.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32 checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
   *     with the object. With multipart uploads, this may not be a checksum value of the object. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;

  /**
   * @public
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>, <code>aws:kms:dsse</code>).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * @public
   * <p>Version of the object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>If <code>x-amz-server-side-encryption</code> has a valid value of <code>aws:kms</code>
   *          or <code>aws:kms:dsse</code>, this header specifies the ID of the Key Management Service (KMS)
   *          symmetric encryption customer managed key that was used for the object. </p>
   */
  SSEKMSKeyId?: string;

  /**
   * @public
   * <p>If present, specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The
   *          value of this header is a base64-encoded UTF-8 string holding JSON with the encryption
   *          context key-value pairs. This value is stored as object metadata and automatically gets
   *          passed on to Amazon Web Services KMS for future <code>GetObject</code> or <code>CopyObject</code>
   *          operations on this object.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * @public
   * <p>Indicates whether the uploaded object uses an S3 Bucket Key for server-side encryption
   *          with Key Management Service (KMS) keys (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 */
export interface PutObjectRequest {
  /**
   * @public
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned
   *             ACL</a>.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * @public
   * <p>Object data.</p>
   */
  Body?: StreamingBlobTypes;

  /**
   * @public
   * <p>The bucket name to which the PUT action was initiated. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p> Can be used to specify caching behavior along the request/reply chain. For more
   *          information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p>
   */
  CacheControl?: string;

  /**
   * @public
   * <p>Specifies presentational information for the object. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc6266#section-4">https://www.rfc-editor.org/rfc/rfc6266#section-4</a>.</p>
   */
  ContentDisposition?: string;

  /**
   * @public
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding">https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding</a>.</p>
   */
  ContentEncoding?: string;

  /**
   * @public
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * @public
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be
   *          determined automatically. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length">https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length</a>.</p>
   */
  ContentLength?: number;

  /**
   * @public
   * <p>The base64-encoded 128-bit MD5 digest of the message (without the headers) according to
   *          RFC 1864. This header can be used as a message integrity check to verify that the data is
   *          the same data that was originally sent. Although it is optional, we recommend using the
   *          Content-MD5 mechanism as an end-to-end integrity check. For more information about REST
   *          request authentication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST Authentication</a>.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>A standard MIME type describing the format of the contents. For more information, see
   *             <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type">https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type</a>.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 32-bit CRC32 checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 32-bit CRC32C checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumCRC32C?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 160-bit SHA-1 digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA1?: string;

  /**
   * @public
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 256-bit SHA-256 digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   */
  ChecksumSHA256?: string;

  /**
   * @public
   * <p>The date and time at which the object is no longer cacheable. For more information, see
   *             <a href="https://www.rfc-editor.org/rfc/rfc7234#section-5.3">https://www.rfc-editor.org/rfc/rfc7234#section-5.3</a>.</p>
   */
  Expires?: Date;

  /**
   * @public
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantFullControl?: string;

  /**
   * @public
   * <p>Allows grantee to read the object data and its metadata.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantRead?: string;

  /**
   * @public
   * <p>Allows grantee to read the object ACL.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantReadACP?: string;

  /**
   * @public
   * <p>Allows grantee to write the ACL for the applicable object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantWriteACP?: string;

  /**
   * @public
   * <p>Object key for which the PUT action was initiated.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: Record<string, string>;

  /**
   * @public
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>, <code>aws:kms:dsse</code>).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * @public
   * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
   *          STANDARD storage class provides high durability and high availability. Depending on
   *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
   *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * @public
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata. For information about object metadata, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a>.</p>
   *          <p>In the following example, the request header sets the redirect to an object
   *          (anotherPage.html) in the same bucket:</p>
   *          <p>
   *             <code>x-amz-website-redirect-location: /anotherPage.html</code>
   *          </p>
   *          <p>In the following example, the request header sets the object redirect to another
   *          website:</p>
   *          <p>
   *             <code>x-amz-website-redirect-location: http://www.example.com/</code>
   *          </p>
   *          <p>For more information about website hosting in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a> and
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html">How to
   *             Configure Website Page Redirects</a>. </p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * @public
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * @public
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * @public
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * @public
   * <p>If <code>x-amz-server-side-encryption</code> has a valid value of <code>aws:kms</code>
   *          or <code>aws:kms:dsse</code>, this header specifies the ID (Key ID, Key ARN, or Key Alias) of the Key Management Service (KMS)
   *          symmetric encryption customer managed key that was used for the object. If you specify
   *             <code>x-amz-server-side-encryption:aws:kms</code> or
   *             <code>x-amz-server-side-encryption:aws:kms:dsse</code>, but do not provide<code>
   *             x-amz-server-side-encryption-aws-kms-key-id</code>, Amazon S3 uses the Amazon Web Services managed key
   *             (<code>aws/s3</code>) to protect the data. If the KMS key does not exist in the same
   *          account that's issuing the command, you must use the full ARN and not just the ID. </p>
   */
  SSEKMSKeyId?: string;

  /**
   * @public
   * <p>Specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The value of
   *          this header is a base64-encoded UTF-8 string holding JSON with the encryption context
   *          key-value pairs. This value is stored as object metadata and automatically gets passed on
   *          to Amazon Web Services KMS for future <code>GetObject</code> or <code>CopyObject</code> operations on
   *          this object.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * @public
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with
   *          server-side encryption using Key Management Service (KMS) keys (SSE-KMS). Setting this header to
   *             <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with
   *          SSE-KMS.</p>
   *          <p>Specifying this header with a PUT action doesn’t affect bucket-level settings for S3
   *          Bucket Key.</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For
   *          example, "Key1=Value1")</p>
   */
  Tagging?: string;

  /**
   * @public
   * <p>The Object Lock mode that you want to apply to this object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * @public
   * <p>The date and time when you want this object's Object Lock to expire. Must be formatted
   *          as a timestamp parameter.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * @public
   * <p>Specifies whether a legal hold will be applied to this object. For more information
   *          about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object Lock</a>.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutObjectAclOutput {
  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 */
export interface PutObjectAclRequest {
  /**
   * @public
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned
   *             ACL</a>.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * @public
   * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
   */
  AccessControlPolicy?: AccessControlPolicy;

  /**
   * @public
   * <p>The bucket name that contains the object to which you want to attach the ACL. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864.></a>
   *          </p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantFullControl?: string;

  /**
   * @public
   * <p>Allows grantee to list the objects in the bucket.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantRead?: string;

  /**
   * @public
   * <p>Allows grantee to read the bucket ACL.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantReadACP?: string;

  /**
   * @public
   * <p>Allows grantee to create new objects in the bucket.</p>
   *          <p>For the bucket and object owners of existing objects, also allows deletions and
   *          overwrites of those objects.</p>
   */
  GrantWrite?: string;

  /**
   * @public
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantWriteACP?: string;

  /**
   * @public
   * <p>Key for which the PUT action was initiated.</p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutObjectLegalHoldOutput {
  /**
   * @public
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

/**
 * @public
 */
export interface PutObjectLegalHoldRequest {
  /**
   * @public
   * <p>The bucket name containing the object that you want to place a legal hold on. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The key name for the object that you want to place a legal hold on.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Container element for the legal hold configuration you want to apply to the specified
   *          object.</p>
   */
  LegalHold?: ObjectLockLegalHold;

  /**
   * @public
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination Amazon S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * @public
   * <p>The version ID of the object that you want to place a legal hold on.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * @public
   * <p>Indicates the algorithm used to create the checksum for the object when using the SDK. This header will not provide any
   *     additional functionality if not using the SDK. When sending this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | string;

  /**
   * @public
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   */
  ExpectedBucketOwner?: string;
}

/**
 * @internal
 */
export const CompleteMultipartUploadOutputFilterSensitiveLog = (obj: CompleteMultipartUploadOutput): any => ({
  ...obj,
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CompleteMultipartUploadRequestFilterSensitiveLog = (obj: CompleteMultipartUploadRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CopyObjectOutputFilterSensitiveLog = (obj: CopyObjectOutput): any => ({
  ...obj,
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CopyObjectRequestFilterSensitiveLog = (obj: CopyObjectRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
  ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMultipartUploadOutputFilterSensitiveLog = (obj: CreateMultipartUploadOutput): any => ({
  ...obj,
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMultipartUploadRequestFilterSensitiveLog = (obj: CreateMultipartUploadRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ServerSideEncryptionByDefaultFilterSensitiveLog = (obj: ServerSideEncryptionByDefault): any => ({
  ...obj,
  ...(obj.KMSMasterKeyID && { KMSMasterKeyID: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ServerSideEncryptionRuleFilterSensitiveLog = (obj: ServerSideEncryptionRule): any => ({
  ...obj,
  ...(obj.ApplyServerSideEncryptionByDefault && {
    ApplyServerSideEncryptionByDefault: ServerSideEncryptionByDefaultFilterSensitiveLog(
      obj.ApplyServerSideEncryptionByDefault
    ),
  }),
});

/**
 * @internal
 */
export const ServerSideEncryptionConfigurationFilterSensitiveLog = (obj: ServerSideEncryptionConfiguration): any => ({
  ...obj,
  ...(obj.Rules && { Rules: obj.Rules.map((item) => ServerSideEncryptionRuleFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetBucketEncryptionOutputFilterSensitiveLog = (obj: GetBucketEncryptionOutput): any => ({
  ...obj,
  ...(obj.ServerSideEncryptionConfiguration && {
    ServerSideEncryptionConfiguration: ServerSideEncryptionConfigurationFilterSensitiveLog(
      obj.ServerSideEncryptionConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const SSEKMSFilterSensitiveLog = (obj: SSEKMS): any => ({
  ...obj,
  ...(obj.KeyId && { KeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InventoryEncryptionFilterSensitiveLog = (obj: InventoryEncryption): any => ({
  ...obj,
  ...(obj.SSEKMS && { SSEKMS: SSEKMSFilterSensitiveLog(obj.SSEKMS) }),
});

/**
 * @internal
 */
export const InventoryS3BucketDestinationFilterSensitiveLog = (obj: InventoryS3BucketDestination): any => ({
  ...obj,
  ...(obj.Encryption && { Encryption: InventoryEncryptionFilterSensitiveLog(obj.Encryption) }),
});

/**
 * @internal
 */
export const InventoryDestinationFilterSensitiveLog = (obj: InventoryDestination): any => ({
  ...obj,
  ...(obj.S3BucketDestination && {
    S3BucketDestination: InventoryS3BucketDestinationFilterSensitiveLog(obj.S3BucketDestination),
  }),
});

/**
 * @internal
 */
export const InventoryConfigurationFilterSensitiveLog = (obj: InventoryConfiguration): any => ({
  ...obj,
  ...(obj.Destination && { Destination: InventoryDestinationFilterSensitiveLog(obj.Destination) }),
});

/**
 * @internal
 */
export const GetBucketInventoryConfigurationOutputFilterSensitiveLog = (
  obj: GetBucketInventoryConfigurationOutput
): any => ({
  ...obj,
  ...(obj.InventoryConfiguration && {
    InventoryConfiguration: InventoryConfigurationFilterSensitiveLog(obj.InventoryConfiguration),
  }),
});

/**
 * @internal
 */
export const GetObjectOutputFilterSensitiveLog = (obj: GetObjectOutput): any => ({
  ...obj,
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetObjectRequestFilterSensitiveLog = (obj: GetObjectRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetObjectAttributesRequestFilterSensitiveLog = (obj: GetObjectAttributesRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetObjectTorrentOutputFilterSensitiveLog = (obj: GetObjectTorrentOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HeadObjectOutputFilterSensitiveLog = (obj: HeadObjectOutput): any => ({
  ...obj,
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const HeadObjectRequestFilterSensitiveLog = (obj: HeadObjectRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListBucketInventoryConfigurationsOutputFilterSensitiveLog = (
  obj: ListBucketInventoryConfigurationsOutput
): any => ({
  ...obj,
  ...(obj.InventoryConfigurationList && {
    InventoryConfigurationList: obj.InventoryConfigurationList.map((item) =>
      InventoryConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const ListPartsRequestFilterSensitiveLog = (obj: ListPartsRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutBucketEncryptionRequestFilterSensitiveLog = (obj: PutBucketEncryptionRequest): any => ({
  ...obj,
  ...(obj.ServerSideEncryptionConfiguration && {
    ServerSideEncryptionConfiguration: ServerSideEncryptionConfigurationFilterSensitiveLog(
      obj.ServerSideEncryptionConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const PutBucketInventoryConfigurationRequestFilterSensitiveLog = (
  obj: PutBucketInventoryConfigurationRequest
): any => ({
  ...obj,
  ...(obj.InventoryConfiguration && {
    InventoryConfiguration: InventoryConfigurationFilterSensitiveLog(obj.InventoryConfiguration),
  }),
});

/**
 * @internal
 */
export const PutObjectOutputFilterSensitiveLog = (obj: PutObjectOutput): any => ({
  ...obj,
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutObjectRequestFilterSensitiveLog = (obj: PutObjectRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
});
