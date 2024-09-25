import { App, Aspects } from "aws-cdk-lib";
import { AwsSolutionsChecks } from "cdk-nag";
import { ApplicationStack } from "./stacks/application-stack";
import { CertificateStack } from "./stacks/certificate-stack";

/* eslint-disable @typescript-eslint/no-floating-promises */
(async () => {
  const app = new App();

  const certificateStack = new CertificateStack(app, "infra-dev-certificate", {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: "us-east-1",
    },
    domainName: "svantenilsson.dev",
    subjectAlternativeNames: ["www.svantenilsson.dev"],
    certificateArn:
      "arn:aws:acm:us-east-1:770483801770:certificate/4a474bad-627d-4547-8b3b-a36021f4f0ac",
  });

  // Use this to deploy your own sandbox environment (assumes your CLI credentials)
  new ApplicationStack(app, "infra-dev-sandbox", {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
    acmCertificate: certificateStack.acmCertificate,
    domainNames: ["svantenilsson.dev", "www.svantenilsson.dev"],
    crossRegionReferences: true,
  });

  Aspects.of(app).add(new AwsSolutionsChecks());

  app.synth();
})();
