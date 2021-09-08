<?php
// This file was auto-generated from sdk-root/src/data/acm/2015-12-08/api-2.json
return [ 'version' => '2.0', 'metadata' => [ 'apiVersion' => '2015-12-08', 'endpointPrefix' => 'acm', 'jsonVersion' => '1.1', 'protocol' => 'json', 'serviceAbbreviation' => 'ACM', 'serviceFullName' => 'AWS Certificate Manager', 'signatureVersion' => 'v4', 'targetPrefix' => 'CertificateManager', ], 'operations' => [ 'AddTagsToCertificate' => [ 'name' => 'AddTagsToCertificate', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'AddTagsToCertificateRequest', ], 'errors' => [ [ 'shape' => 'ResourceNotFoundException', ], [ 'shape' => 'InvalidArnException', ], [ 'shape' => 'InvalidTagException', ], [ 'shape' => 'TooManyTagsException', ], ], ], 'DeleteCertificate' => [ 'name' => 'DeleteCertificate', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'DeleteCertificateRequest', ], 'errors' => [ [ 'shape' => 'ResourceNotFoundException', ], [ 'shape' => 'ResourceInUseException', ], [ 'shape' => 'InvalidArnException', ], ], ], 'DescribeCertificate' => [ 'name' => 'DescribeCertificate', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'DescribeCertificateRequest', ], 'output' => [ 'shape' => 'DescribeCertificateResponse', ], 'errors' => [ [ 'shape' => 'ResourceNotFoundException', ], [ 'shape' => 'InvalidArnException', ], ], ], 'GetCertificate' => [ 'name' => 'GetCertificate', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'GetCertificateRequest', ], 'output' => [ 'shape' => 'GetCertificateResponse', ], 'errors' => [ [ 'shape' => 'ResourceNotFoundException', ], [ 'shape' => 'RequestInProgressException', ], [ 'shape' => 'InvalidArnException', ], ], ], 'ListCertificates' => [ 'name' => 'ListCertificates', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'ListCertificatesRequest', ], 'output' => [ 'shape' => 'ListCertificatesResponse', ], ], 'ListTagsForCertificate' => [ 'name' => 'ListTagsForCertificate', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'ListTagsForCertificateRequest', ], 'output' => [ 'shape' => 'ListTagsForCertificateResponse', ], 'errors' => [ [ 'shape' => 'ResourceNotFoundException', ], [ 'shape' => 'InvalidArnException', ], ], ], 'RemoveTagsFromCertificate' => [ 'name' => 'RemoveTagsFromCertificate', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'RemoveTagsFromCertificateRequest', ], 'errors' => [ [ 'shape' => 'ResourceNotFoundException', ], [ 'shape' => 'InvalidArnException', ], [ 'shape' => 'InvalidTagException', ], ], ], 'RequestCertificate' => [ 'name' => 'RequestCertificate', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'RequestCertificateRequest', ], 'output' => [ 'shape' => 'RequestCertificateResponse', ], 'errors' => [ [ 'shape' => 'LimitExceededException', ], [ 'shape' => 'InvalidDomainValidationOptionsException', ], ], ], 'ResendValidationEmail' => [ 'name' => 'ResendValidationEmail', 'http' => [ 'method' => 'POST', 'requestUri' => '/', ], 'input' => [ 'shape' => 'ResendValidationEmailRequest', ], 'errors' => [ [ 'shape' => 'ResourceNotFoundException', ], [ 'shape' => 'InvalidStateException', ], [ 'shape' => 'InvalidArnException', ], [ 'shape' => 'InvalidDomainValidationOptionsException', ], ], ], ], 'shapes' => [ 'AddTagsToCertificateRequest' => [ 'type' => 'structure', 'required' => [ 'CertificateArn', 'Tags', ], 'members' => [ 'CertificateArn' => [ 'shape' => 'Arn', ], 'Tags' => [ 'shape' => 'TagList', ], ], ], 'Arn' => [ 'type' => 'string', 'max' => 2048, 'min' => 20, 'pattern' => 'arn:[\\w+=/,.@-]+:[\\w+=/,.@-]+:[\\w+=/,.@-]*:[0-9]+:[\\w+=,.@-]+(/[\\w+=/,.@-]+)*', ], 'CertificateBody' => [ 'type' => 'string', 'max' => 524288, 'min' => 1, 'pattern' => '-{5}BEGIN CERTIFICATE-{5}\\u000D?\\u000A([A-Za-z0-9/+]{64}\\u000D?\\u000A)*[A-Za-z0-9/+]{1,64}={0,2}\\u000D?\\u000A-{5}END CERTIFICATE-{5}(\\u000D?\\u000A)?', ], 'CertificateChain' => [ 'type' => 'string', 'max' => 2097152, 'min' => 1, 'pattern' => '(-{5}BEGIN CERTIFICATE-{5}\\u000D?\\u000A([A-Za-z0-9/+]{64}\\u000D?\\u000A)*[A-Za-z0-9/+]{1,64}={0,2}\\u000D?\\u000A-{5}END CERTIFICATE-{5}\\u000D?\\u000A)*-{5}BEGIN CERTIFICATE-{5}\\u000D?\\u000A([A-Za-z0-9/+]{64}\\u000D?\\u000A)*[A-Za-z0-9/+]{1,64}={0,2}\\u000D?\\u000A-{5}END CERTIFICATE-{5}(\\u000D?\\u000A)?', ], 'CertificateDetail' => [ 'type' => 'structure', 'members' => [ 'CertificateArn' => [ 'shape' => 'Arn', ], 'DomainName' => [ 'shape' => 'DomainNameString', ], 'SubjectAlternativeNames' => [ 'shape' => 'DomainList', ], 'DomainValidationOptions' => [ 'shape' => 'DomainValidationList', ], 'Serial' => [ 'shape' => 'String', ], 'Subject' => [ 'shape' => 'String', ], 'Issuer' => [ 'shape' => 'String', ], 'CreatedAt' => [ 'shape' => 'TStamp', ], 'IssuedAt' => [ 'shape' => 'TStamp', ], 'Status' => [ 'shape' => 'CertificateStatus', ], 'RevokedAt' => [ 'shape' => 'TStamp', ], 'RevocationReason' => [ 'shape' => 'RevocationReason', ], 'NotBefore' => [ 'shape' => 'TStamp', ], 'NotAfter' => [ 'shape' => 'TStamp', ], 'KeyAlgorithm' => [ 'shape' => 'KeyAlgorithm', ], 'SignatureAlgorithm' => [ 'shape' => 'String', ], 'InUseBy' => [ 'shape' => 'InUseList', ], 'FailureReason' => [ 'shape' => 'FailureReason', ], ], ], 'CertificateStatus' => [ 'type' => 'string', 'enum' => [ 'PENDING_VALIDATION', 'ISSUED', 'INACTIVE', 'EXPIRED', 'VALIDATION_TIMED_OUT', 'REVOKED', 'FAILED', ], ], 'CertificateStatuses' => [ 'type' => 'list', 'member' => [ 'shape' => 'CertificateStatus', ], ], 'CertificateSummary' => [ 'type' => 'structure', 'members' => [ 'CertificateArn' => [ 'shape' => 'Arn', ], 'DomainName' => [ 'shape' => 'DomainNameString', ], ], ], 'CertificateSummaryList' => [ 'type' => 'list', 'member' => [ 'shape' => 'CertificateSummary', ], ], 'DeleteCertificateRequest' => [ 'type' => 'structure', 'required' => [ 'CertificateArn', ], 'members' => [ 'CertificateArn' => [ 'shape' => 'Arn', ], ], ], 'DescribeCertificateRequest' => [ 'type' => 'structure', 'required' => [ 'CertificateArn', ], 'members' => [ 'CertificateArn' => [ 'shape' => 'Arn', ], ], ], 'DescribeCertificateResponse' => [ 'type' => 'structure', 'members' => [ 'Certificate' => [ 'shape' => 'CertificateDetail', ], ], ], 'DomainList' => [ 'type' => 'list', 'member' => [ 'shape' => 'DomainNameString', ], 'max' => 100, 'min' => 1, ], 'DomainNameString' => [ 'type' => 'string', 'max' => 253, 'min' => 1, 'pattern' => '^(\\*\\.)?(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])$', ], 'DomainValidation' => [ 'type' => 'structure', 'required' => [ 'DomainName', ], 'members' => [ 'DomainName' => [ 'shape' => 'DomainNameString', ], 'ValidationEmails' => [ 'shape' => 'ValidationEmailList', ], 'ValidationDomain' => [ 'shape' => 'DomainNameString', ], ], ], 'DomainValidationList' => [ 'type' => 'list', 'member' => [ 'shape' => 'DomainValidation', ], 'max' => 1000, 'min' => 1, ], 'DomainValidationOption' => [ 'type' => 'structure', 'required' => [ 'DomainName', 'ValidationDomain', ], 'members' => [ 'DomainName' => [ 'shape' => 'DomainNameString', ], 'ValidationDomain' => [ 'shape' => 'DomainNameString', ], ], ], 'DomainValidationOptionList' => [ 'type' => 'list', 'member' => [ 'shape' => 'DomainValidationOption', ], 'max' => 100, 'min' => 1, ], 'FailureReason' => [ 'type' => 'string', 'enum' => [ 'NO_AVAILABLE_CONTACTS', 'ADDITIONAL_VERIFICATION_REQUIRED', 'DOMAIN_NOT_ALLOWED', 'INVALID_PUBLIC_DOMAIN', 'OTHER', ], ], 'GetCertificateRequest' => [ 'type' => 'structure', 'required' => [ 'CertificateArn', ], 'members' => [ 'CertificateArn' => [ 'shape' => 'Arn', ], ], ], 'GetCertificateResponse' => [ 'type' => 'structure', 'members' => [ 'Certificate' => [ 'shape' => 'CertificateBody', ], 'CertificateChain' => [ 'shape' => 'CertificateChain', ], ], ], 'IdempotencyToken' => [ 'type' => 'string', 'max' => 32, 'min' => 1, 'pattern' => '\\w+', ], 'InUseList' => [ 'type' => 'list', 'member' => [ 'shape' => 'String', ], ], 'InvalidArnException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'String', ], ], 'exception' => true, ], 'InvalidDomainValidationOptionsException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'String', ], ], 'exception' => true, ], 'InvalidStateException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'String', ], ], 'exception' => true, ], 'InvalidTagException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'String', ], ], 'exception' => true, ], 'KeyAlgorithm' => [ 'type' => 'string', 'enum' => [ 'RSA_2048', 'EC_prime256v1', ], ], 'LimitExceededException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'String', ], ], 'exception' => true, ], 'ListCertificatesRequest' => [ 'type' => 'structure', 'members' => [ 'CertificateStatuses' => [ 'shape' => 'CertificateStatuses', ], 'NextToken' => [ 'shape' => 'NextToken', ], 'MaxItems' => [ 'shape' => 'MaxItems', ], ], ], 'ListCertificatesResponse' => [ 'type' => 'structure', 'members' => [ 'NextToken' => [ 'shape' => 'NextToken', ], 'CertificateSummaryList' => [ 'shape' => 'CertificateSummaryList', ], ], ], 'ListTagsForCertificateRequest' => [ 'type' => 'structure', 'required' => [ 'CertificateArn', ], 'members' => [ 'CertificateArn' => [ 'shape' => 'Arn', ], ], ], 'ListTagsForCertificateResponse' => [ 'type' => 'structure', 'members' => [ 'Tags' => [ 'shape' => 'TagList', ], ], ], 'MaxItems' => [ 'type' => 'integer', 'max' => 1000, 'min' => 1, ], 'NextToken' => [ 'type' => 'string', 'max' => 320, 'min' => 1, 'pattern' => '[\\u0009\\u000A\\u000D\\u0020-\\u00FF]*', ], 'RemoveTagsFromCertificateRequest' => [ 'type' => 'structure', 'required' => [ 'CertificateArn', 'Tags', ], 'members' => [ 'CertificateArn' => [ 'shape' => 'Arn', ], 'Tags' => [ 'shape' => 'TagList', ], ], ], 'RequestCertificateRequest' => [ 'type' => 'structure', 'required' => [ 'DomainName', ], 'members' => [ 'DomainName' => [ 'shape' => 'DomainNameString', ], 'SubjectAlternativeNames' => [ 'shape' => 'DomainList', ], 'IdempotencyToken' => [ 'shape' => 'IdempotencyToken', ], 'DomainValidationOptions' => [ 'shape' => 'DomainValidationOptionList', ], ], ], 'RequestCertificateResponse' => [ 'type' => 'structure', 'members' => [ 'CertificateArn' => [ 'shape' => 'Arn', ], ], ], 'RequestInProgressException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'String', ], ], 'exception' => true, ], 'ResendValidationEmailRequest' => [ 'type' => 'structure', 'required' => [ 'CertificateArn', 'Domain', 'ValidationDomain', ], 'members' => [ 'CertificateArn' => [ 'shape' => 'Arn', ], 'Domain' => [ 'shape' => 'DomainNameString', ], 'ValidationDomain' => [ 'shape' => 'DomainNameString', ], ], ], 'ResourceInUseException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'String', ], ], 'exception' => true, ], 'ResourceNotFoundException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'String', ], ], 'exception' => true, ], 'RevocationReason' => [ 'type' => 'string', 'enum' => [ 'UNSPECIFIED', 'KEY_COMPROMISE', 'CA_COMPROMISE', 'AFFILIATION_CHANGED', 'SUPERCEDED', 'CESSATION_OF_OPERATION', 'CERTIFICATE_HOLD', 'REMOVE_FROM_CRL', 'PRIVILEGE_WITHDRAWN', 'A_A_COMPROMISE', ], ], 'String' => [ 'type' => 'string', ], 'TStamp' => [ 'type' => 'timestamp', ], 'Tag' => [ 'type' => 'structure', 'required' => [ 'Key', ], 'members' => [ 'Key' => [ 'shape' => 'TagKey', ], 'Value' => [ 'shape' => 'TagValue', ], ], ], 'TagKey' => [ 'type' => 'string', 'max' => 128, 'min' => 1, 'pattern' => '[\\p{L}\\p{Z}\\p{N}_.:\\/=+\\-@]*', ], 'TagList' => [ 'type' => 'list', 'member' => [ 'shape' => 'Tag', ], 'max' => 50, 'min' => 1, ], 'TagValue' => [ 'type' => 'string', 'max' => 256, 'min' => 0, 'pattern' => '[\\p{L}\\p{Z}\\p{N}_.:\\/=+\\-@]*', ], 'TooManyTagsException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'String', ], ], 'exception' => true, ], 'ValidationEmailList' => [ 'type' => 'list', 'member' => [ 'shape' => 'String', ], ], ],];
