# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported |
| ------- | --------- |
| 1.0.x   | ✅        |
| < 1.0   | ❌        |

## Reporting a Vulnerability

We take the security of TaskTrial seriously. If you believe you've found a security vulnerability, please follow these steps:

1. **Do not disclose the vulnerability publicly**
2. **Email our security team** at [tasktrial27@gmail.com](mailto:tasktrial27@gmail.com) with:
   - A description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested mitigations (if known)

## What to expect

- **Initial Response**: We'll acknowledge receipt of your report within 48 hours
- **Status Updates**: We'll provide updates on the status of the vulnerability within 5 business days
- **Disclosure Process**: Once the vulnerability is confirmed and fixed, we'll work with you on an appropriate disclosure timeline

## Bounty Program

Currently, we do not offer monetary rewards for vulnerability disclosures. We do acknowledge security researchers in our release notes with their permission.

## Security Requirements for Contributions

All code contributions to this project should follow these security guidelines:

1. Validate all inputs, especially from external sources
2. Use parameterized queries for database operations
3. Implement proper authentication and authorization checks
4. Follow the principle of least privilege
5. Avoid including sensitive information in logs or error messages
6. Use secure hashing algorithms for passwords and sensitive data
7. Keep dependencies updated and check for vulnerabilities regularly

Thank you for helping keep TaskTrial and our users safe!
