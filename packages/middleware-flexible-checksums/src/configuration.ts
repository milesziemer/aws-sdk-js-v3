import {
  BodyLengthCalculator,
  ChecksumConstructor,
  Encoder,
  GetAwsChunkedBody,
  GetAwsChunkedEncodingStream,
  HashConstructor,
  StreamHasher,
} from "@aws-sdk/types";

export interface PreviouslyResolved {
  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder: Encoder;

  /**
   * A function that can calculate the length of a body.
   */
  bodyLengthChecker: BodyLengthCalculator;

  /**
   * A function that returns Readable Stream which follows aws-chunked encoding stream.
   *
   * @deprecated Use getAwsChunkedBody
   */
  getAwsChunkedEncodingStream: GetAwsChunkedEncodingStream;

  /**
   * A constructor for a class implementing the {@link Hash} interface that computes MD5 hashes.
   * @internal
   */
  md5: ChecksumConstructor | HashConstructor;

  /**
   * A constructor for a class implementing the {@link Hash} interface that computes SHA1 hashes.
   * @internal
   */
  sha1: ChecksumConstructor | HashConstructor;

  /**
   * A constructor for a class implementing the {@link Hash} interface that computes SHA256 hashes.
   * @internal
   */
  sha256: ChecksumConstructor | HashConstructor;

  /**
   * A function that, given a hash constructor and a stream, calculates the hash of the streamed value.
   * @internal
   */
  streamHasher: StreamHasher<any>;

  /**
   * A function that returns AsyncIterable which follows aws-chunked encoding stream.
   * If provided, it is used instead of getAwsChunkedEncodingStream.
   * @internal
   */
  getAwsChunkedBody?: GetAwsChunkedBody;
}
