<!-- sap-cloud-sdk-logo -->
<!-- This block is inserted by scripts/replace-common-readme.ts. Do not adjust it manually. -->
<a href="https://sap.com/s4sdk"><img src="https://help.sap.com/doc/2324e9c3b28748a4ae2ad08166d77675/1.0/en-US/logo-with-js.svg" alt="SAP Cloud SDK for JavaScript Logo" height="122.92" width="226.773"/></a>
<!-- sap-cloud-sdk-logo-stop -->

# @sap-cloud-sdk/mail-client (experimental)
With the SAP Cloud SDK mail client you can leverage the connectivity and destination services on SAP BTP to send e-mails from your application.

## This package is experimental
The API of this package is not stable and will likely change in future versions.

## Installation

```
$ npm install @sap-cloud-sdk/mail-client
```

## Usage

Use the `sendMail` function to send e-mails.

```ts
sendMail(destination, { from: 'from@sap.com', to: 'to@sap.com', subject: 'subject', text: 'text' });
```

<!-- sap-cloud-sdk-common-readme -->
<!-- This block is inserted by scripts/replace-common-readme.ts. Do not adjust it manually. -->
## Support

The recommended way to get in touch with us is to create an issue on [GitHub](https://github.com/SAP/cloud-sdk-js/issues).
Select the issue category `Bug`, `Feature` or `Question` depending on the nature of your request.
We try to provide fixes, features and answers as soon as possible.

## Contribute

If you would like to contribute to the SAP Cloud SDK, please make yourself familiar with our [contributing guidelines](https://github.com/SAP/cloud-sdk-js/blob/main/CONTRIBUTING.md) and follow the given instructions.

## Links

- [Github](https://github.com/SAP/cloud-sdk-js)
- [Github - Releases](https://github.com/SAP/cloud-sdk-js/releases)

<br>

- [SAP Cloud SDK Documentation portal](https://sap.github.io/cloud-sdk/)
- [SAP Cloud SDK Documentation portal - Getting started guide](https://sap.github.io/cloud-sdk/docs/js/getting-started)
- [SAP Cloud SDK Documentation portal - API documentation](https://sap.github.io/cloud-sdk/docs/js/api-reference-js-ts)

<br>

- [developers.sap.com - Product Overview](https://developers.sap.com/topics/cloud-sdk.html)
- [developers.sap.com - Tutorials](https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:javascript)

## License

The SAP Cloud SDK is released under the [Apache License Version 2.0.](http://www.apache.org/licenses/)
<!-- sap-cloud-sdk-common-readme-stop -->