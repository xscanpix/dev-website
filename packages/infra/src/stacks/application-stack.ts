import { Stack, StackProps } from "aws-cdk-lib";
import { ICertificate } from "aws-cdk-lib/aws-certificatemanager";
import { Construct } from "constructs";
import { DevWebsiteFrontend } from "../constructs/websites/dev-website-frontend";

interface ApplicationStackProps extends StackProps {
  acmCertificate: ICertificate;
  domainNames: string[];
}

export class ApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props: ApplicationStackProps) {
    super(scope, id, props);

    new DevWebsiteFrontend(this, "DevWebsiteFrontend", {
      acmCertificate: props.acmCertificate,
      domainNames: props.domainNames,
    });
  }
}
