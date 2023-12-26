"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("risk_scenarios", [
      {
        name: "Weak Access Control",
        description:
          "In the event of weak access controls, an attacker can bypass the access control checks and perform an action outside of his or her role.",
        mitigation_strategy:
          "Enforce principle of least privilege. Maintain an access control table for all data assets.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Unprotected Sensitive Data",
        description:
          "In the event of unprotected sensitive data, an attacker can access and exfiltrate those sensitive data in a data breach.",
        mitigation_strategy:
          "Ensure that sensitive data is encrypted in transit and at rest.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Phishing Attacks",
        description:
          "Phishing attacks trick users into divulging sensitive information through deceptive emails or websites.",
        mitigation_strategy:
          "Educate employees about the risks of phishing. Implement email filtering and verification technologies.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Data Leakage via Cloud Storage",
        description:
          "Misconfigured cloud storage can lead to unintentional data exposure or breaches.",
        mitigation_strategy:
          "Regularly review and tighten cloud storage permissions. Use encryption for sensitive data stored in the cloud.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Broken Authentication",
        description:
          "Flaws in authentication mechanisms can allow attackers to compromise user accounts.",
        mitigation_strategy:
          "Implement multi-factor authentication and session management controls. Regularly audit and test authentication processes.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Cross-Site Scripting (XSS)",
        description:
          "XSS attacks allow attackers to inject malicious scripts into webpages viewed by other users.",
        mitigation_strategy:
          "Validate and sanitize all user inputs. Use Content Security Policy headers to prevent the execution of unauthorized scripts.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "SQL Injection",
        description:
          "SQL injection attacks occur when an attacker is able to manipulate a database query through unsanitized user input.",
        mitigation_strategy:
          "Use prepared statements and parameterized queries. Always validate and sanitize user input.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Outdated Software Vulnerabilities",
        description:
          "Using outdated software can expose the system to known vulnerabilities that attackers can exploit.",
        mitigation_strategy:
          "Regularly update all software to the latest versions and apply security patches promptly.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Inadequate Audit Logging",
        description:
          "Without sufficient audit logging, it is challenging to detect or investigate suspicious activities after they occur.",
        mitigation_strategy:
          "Implement comprehensive logging for all system access and changes. Regularly review logs for unusual activity.",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("risk_scenarios", null, {});
  },
};
