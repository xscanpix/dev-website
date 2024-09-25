import { Stack, StackProps } from "aws-cdk-lib";
import { Certificate, ICertificate } from "aws-cdk-lib/aws-certificatemanager";
import { Construct } from "constructs";

interface CertificateStackProps extends StackProps {
  domainName: string;
  subjectAlternativeNames: string[];
  certificateArn?: string;
}

export class CertificateStack extends Stack {
  readonly acmCertificate: ICertificate;

  constructor(scope: Construct, id: string, props: CertificateStackProps) {
    super(scope, id, props);

    if (props.certificateArn) {
      this.acmCertificate = Certificate.fromCertificateArn(
        this,
        "AcmCertificate",
        props.certificateArn,
      );
    } else {
      this.acmCertificate = new Certificate(this, "AcmCertificate", {
        domainName: props.domainName,
        subjectAlternativeNames: props.subjectAlternativeNames,
      });
    }
  }
}
