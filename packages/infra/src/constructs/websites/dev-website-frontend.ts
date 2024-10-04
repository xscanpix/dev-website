import { ICertificate } from "aws-cdk-lib/aws-certificatemanager";
import { NagSuppressions } from "cdk-nag";
import { Construct } from "constructs";

import { StaticWebsite, StaticWebsiteOrigin } from "./static-website";

/**
 * Website construct props
 */
export interface DevWebsiteFrontendProps {
  readonly domainNames: string[];
  readonly acmCertificate: ICertificate;
}

/**
 * Construct to deploy a Static Website
 */
export class DevWebsiteFrontend extends Construct {
  constructor(scope: Construct, id: string, props?: DevWebsiteFrontendProps) {
    super(scope, id);

    const website = new StaticWebsite(this, id, {
      websiteContentPath: "../website/dist",
      distributionProps: {
        certificate: props?.acmCertificate,
        domainNames: props?.domainNames,
        defaultBehavior: {
          origin: new StaticWebsiteOrigin(),
        },
      },
      webAclProps: {
        disable: true,
      },
    });

    NagSuppressions.addResourceSuppressions(
      website,
      [
        {
          id: "AwsPrototyping-CloudFrontDistributionGeoRestrictions",
          reason:
            "Suppressed to allow unrestricted access. Not recommended in production.",
        },
      ],
      true,
    );
  }
}
