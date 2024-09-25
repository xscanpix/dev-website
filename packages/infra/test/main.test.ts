import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { ApplicationStack } from "../src/stacks/application-stack";
import { CertificateStack } from "../src/stacks/certificate-stack";

test("Snapshot", () => {
  const app = new App();

  const certificateStack = new CertificateStack(app, "test-certificate", {
    domainName: "example.com",
    subjectAlternativeNames: [],
  });

  const stack = new ApplicationStack(app, "test", {
    crossRegionReferences: true,
    acmCertificate: certificateStack.acmCertificate,
    domainNames: ["example.com"],
  });

  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});
