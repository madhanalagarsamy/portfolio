export interface TimelineEntry {
  date: string;
  event: string;
}

export interface CodeBlock {
  language: string;
  code: string;
  caption?: string;
}

export interface SectionBlock {
  heading: string;
  description: string;
  codeSnippet?: CodeBlock;
  subsections?: {
    subtitle: string;
    text: string;
  }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  publishedDate: string;
  readTime: string;
  category: "Security Advisory" | "Research" | "Guide" | "Analysis";
  tags: string[];
  advisoryId?: string;
  targetRepo?: string;
  severity?: "Low" | "Moderate" | "High" | "Critical";
  cwe?: string[];
  patchedVersions?: string[];
  githubAdvisoryUrl?: string;
  overview: string;
  timeline?: TimelineEntry[];
  vulnerabilityDetails: SectionBlock[];
  poc?: {
    description: string;
    steps: string[];
    requestSnippet?: CodeBlock;
  };
  impact: string;
  remediation: string;
  patchDetails?: {
    description: string;
    codeSnippet?: CodeBlock;
  };
  references: { title: string; url: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ghsa-9v52-vhvw-4w5c",
    title: "Cross-meeting presentation upload via unbound upload token (IDOR)",
    summary:
      "A deep dive into discovering and responsibly disclosing an Insecure Direct Object Reference (IDOR) flaw in BigBlueButton where presentation upload tokens were not strictly bound to individual meeting sessions.",
    publishedDate: "Sep 10, 2026",
    readTime: "6 min read",
    category: "Security Advisory",
    tags: ["IDOR", "Access Control", "CWE-639", "CWE-862", "BigBlueButton", "Disclosure"],
    advisoryId: "GHSA-9v52-vhvw-4w5c",
    targetRepo: "bigbluebutton / bigbluebutton",
    severity: "Moderate",
    cwe: ["CWE-639: Insecure Direct Object Reference", "CWE-862: Missing Authorization"],
    patchedVersions: ["3.0.37", "4.0.0-rc.2"],
    githubAdvisoryUrl: "https://github.com/bigbluebutton/bigbluebutton/security/advisories/GHSA-9v52-vhvw-4w5c",
    overview:
      "During security research into BigBlueButton's presentation processing pipeline, an authorization bypass and IDOR vulnerability was identified in the presentation upload handler. The upload token generated for authenticated presenters in one meeting could be maliciously leveraged across unrelated active meeting instances without proper tenant or meeting boundaries verification.",
    timeline: [
      { date: "August 2026", event: "Vulnerability identified during routine source audit & API testing." },
      { date: "August 2026", event: "Comprehensive PoC formulated and reported through GitHub Private Vulnerability Reporting." },
      { date: "Late August 2026", event: "BigBlueButton security maintainers validated the report and worked on token-to-meeting binding." },
      { date: "September 10, 2026", event: "Official patch released in versions 3.0.37 and 4.0.0-rc.2; advisory GHSA-9v52-vhvw-4w5c published." }
    ],
    vulnerabilityDetails: [
      {
        heading: "Architecture & Token Mechanism",
        description:
          "In BigBlueButton, moderators or presenters can upload slide presentations (PDFs, PPTXs, images) to display in a virtual room. When a user requests an upload, the application server allocates an upload token. This token is designed to authorize the subsequent multi-part upload POST request sent to the presentation conversion worker.",
        codeSnippet: {
          language: "json",
          caption: "Sample upload initiation endpoint response",
          code: `{\n  "status": "SUCCESS",\n  "uploadToken": "tok_9f81a7b8e4c2901a",\n  "uploadEndpoint": "/bigbluebutton/presentation/upload"\n}`
        }
      },
      {
        heading: "The Flaw: Missing Meeting Session Association",
        description:
          "The verification logic on the receiving upload endpoint validated the cryptographic integrity and expiration timestamp of the uploadToken, but failed to assert that the associated meetingId matched the target meeting room identifier in the upload payload. Consequently, a user with presenter rights in Meeting Room A could inject arbitrary presentations into Meeting Room B as long as they possessed or could obtain the destination meeting ID.",
        codeSnippet: {
          language: "http",
          caption: "Cross-meeting injection request",
          code: `POST /bigbluebutton/presentation/upload HTTP/1.1\nHost: target-conference.domain\nAuthorization: Bearer tok_9f81a7b8e4c2901a\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundaryX\n\n------WebKitFormBoundaryX\nContent-Disposition: form-data; name="conference"; meetingId="meeting-room-target-b"\n...\n[Malicious / Unsolicited Presentation Slide Data]\n------WebKitFormBoundaryX--`
        }
      }
    ],
    poc: {
      description:
        "The proof of concept demonstrated cross-tenant meeting pollution without needing moderator credentials in the target session.",
      steps: [
        "Authenticate into an attacker-controlled meeting session (Room A) with presenter role.",
        "Request a presentation upload token from the server.",
        "Obtain or enumerate the identifier of an active target conference (Room B).",
        "Submit the multi-part presentation upload referencing Room B while utilizing Room A's upload token.",
        "Verify that Room B automatically renders and switches to the uploaded presentation."
      ]
    },
    impact:
      "An attacker with presenter privileges in any meeting instance on the server could deface, hijack, or display unauthorized presentations in concurrent private meetings, causing denial of service, phishing exposure, or disruption of confidential conferences.",
    remediation:
      "Upgrade BigBlueButton to versions 3.0.37, 4.0.0-rc.2, or later. The patch enforces strict cryptographic and database-level binding between the generated upload token, the originating user ID, and the explicit meeting session ID upon upload validation.",
    patchDetails: {
      description: "Validation check verifying upload token association with target conference ID.",
      codeSnippet: {
        language: "diff",
        caption: "Conceptual patch diff",
        code: `@@ -42,6 +42,10 @@ def validate_presentation_upload(token, target_meeting_id):\n     token_data = decrypt_upload_token(token)\n     if token_data.is_expired():\n         raise AuthorizationError("Token expired")\n+\n+    # Enforce meeting scope validation\n+    if token_data.meeting_id != target_meeting_id:\n+        raise SecurityViolation("Token does not belong to target meeting")\n \n     return True`
      }
    },
    references: [
      {
        title: "GitHub Security Advisory GHSA-9v52-vhvw-4w5c",
        url: "https://github.com/bigbluebutton/bigbluebutton/security/advisories/GHSA-9v52-vhvw-4w5c"
      },
      {
        title: "BigBlueButton Release Notes",
        url: "https://github.com/bigbluebutton/bigbluebutton/releases"
      }
    ]
  },
  {
    slug: "ghsa-r3jq-vxqh-pgrg",
    title: "CI workflow comment spoofing via fork pull requests",
    summary:
      "Analysis of a GitHub Actions automated workflow vulnerability in BigBlueButton that permitted comment spoofing on pull requests originated from external forks.",
    publishedDate: "2026",
    readTime: "5 min read",
    category: "Security Advisory",
    tags: ["CI/CD Security", "GitHub Actions", "Supply Chain", "Workflow Security", "Disclosure"],
    advisoryId: "GHSA-r3jq-vxqh-pgrg",
    targetRepo: "bigbluebutton / bigbluebutton",
    severity: "Moderate",
    patchedVersions: ["Mainline CI patches"],
    githubAdvisoryUrl: "https://github.com/bigbluebutton/bigbluebutton/security/advisories/GHSA-r3jq-vxqh-pgrg",
    overview:
      "Modern CI/CD pipelines often execute automated validation, test coverage feedback, and bot comments on pull requests. During an audit of BigBlueButton's automated GitHub Actions workflows, a logic flaw was discovered in how pull request events from untrusted forks were handled, permitting automated bot spoofing or deceptive comment posting.",
    timeline: [
      { date: "Early 2026", event: "CI/CD pipeline security review conducted on GitHub Actions workflows." },
      { date: "2026", event: "Flaw identified in pull_request_target / bot comment triggers." },
      { date: "2026", event: "Reported to BigBlueButton maintainers with remediation proposals." },
      { date: "2026", event: "Maintainers secured workflow triggers, permissions, and published GHSA-r3jq-vxqh-pgrg." }
    ],
    vulnerabilityDetails: [
      {
        heading: "GitHub Actions Context & The pull_request_target Pitfall",
        description:
          "Workflows triggered on 'pull_request_target' run in the context of the base repository rather than the untrusted fork, providing access to repository secrets and write permissions (such as pull-requests: write). If workflow steps blindly interpolate user-controlled inputs or check out untrusted head branches, severe security vulnerabilities arise.",
        codeSnippet: {
          language: "yaml",
          caption: "Vulnerable workflow trigger pattern",
          code: `name: PR Automated Feedback\non:\n  pull_request_target:\n    types: [opened, synchronize]\n\npermissions:\n  pull-requests: write\n\njobs:\n  bot-comment:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          ref: \${{ github.event.pull_request.head.sha }}\n      # Executes untrusted scripts or processes manipulated title/body\n      - run: npm run analyze-pr`
        }
      },
      {
        heading: "Deceptive Social Engineering Vector",
        description:
          "Because the bot carries official badges or repository collaborator status, forged or manipulated status messages can deceive maintainers or downstream contributors into believing that malicious commits passed automated security verification or were approved by automated gates."
      }
    ],
    poc: {
      description: "Demonstration of comment crafting via structured fork submission.",
      steps: [
        "Fork the target repository into an independent account.",
        "Construct a pull request containing crafted payload variables in metadata fields.",
        "Trigger the automated CI pipeline action.",
        "Observe the privileged workflow executing the bot command and publishing arbitrary comment content with repository bot authorization."
      ]
    },
    impact:
      "Allows external contributors to impersonate automated bot commentary, mislead project reviewers regarding build integrity, and potentially stage secondary social engineering attacks inside open-source pull requests.",
    remediation:
      "Limit workflow permissions to read-only (`contents: read`), avoid checking out untrusted head refs under `pull_request_target`, sanitize all untrusted user inputs before invoking comment actions, and migrate to segregated workflow-dispatch or artifact-based review models.",
    references: [
      {
        title: "GitHub Security Advisory GHSA-r3jq-vxqh-pgrg",
        url: "https://github.com/bigbluebutton/bigbluebutton/security/advisories/GHSA-r3jq-vxqh-pgrg"
      },
      {
        title: "GitHub Docs: Keeping your GitHub Actions and workflows secure",
        url: "https://securitylab.github.com/research/github-actions-preventing-pwn-requests/"
      }
    ]
  },
  {
    slug: "methodical-guide-to-vulnerability-assessments",
    title: "Methodical Guide to Web Vulnerability Assessments (VAPT) & Coordinated Disclosure",
    summary:
      "A structured guide for offensive security researchers and defensive teams on executing systematic web application assessments, mapping attack surfaces, and executing responsible disclosure.",
    publishedDate: "Sep 2026",
    readTime: "8 min read",
    category: "Guide",
    tags: ["VAPT", "AppSec", "Methodology", "Offensive Security", "CVD"],
    overview:
      "Modern web applications are distributed, asynchronous systems connecting SPAs, microservices, GraphQL gateways, and cloud worker pipelines. Effective vulnerability assessments require more than running automated scanners; they demand systematic business-logic testing and responsible disclosure discipline.",
    vulnerabilityDetails: [
      {
        heading: "Phase 1: Attack Surface Reconnaissance",
        description:
          "Begin by mapping all authenticated and unauthenticated endpoints, exposed API documentation (OpenAPI, Swagger, GraphQL schemas), and hidden administrative paths. Analyze token expiration policies, state transitions, and role privilege matrices."
      },
      {
        heading: "Phase 2: Authorization & Business Logic Flaws",
        description:
          "The highest impact vulnerabilities in modern web applications belong to Broken Object Level Authorization (BOLA/IDOR) and Broken Function Level Authorization (BFLA). Always test cross-tenant access by preparing two independent test accounts (Tenant A and Tenant B) and exchanging object IDs, UUIDs, and API tokens across requests.",
        codeSnippet: {
          language: "bash",
          caption: "Testing IDOR with curl and alternate session tokens",
          code: `# Fetch Resource with Tenant A Session\ncurl -s -H "Authorization: Bearer \$TOKEN_A" "https://api.target.com/v1/workspaces/1042/export"\n\n# Attempt Access to Resource 1042 with Tenant B Session\ncurl -s -H "Authorization: Bearer \$TOKEN_B" "https://api.target.com/v1/workspaces/1042/export"`
        }
      },
      {
        heading: "Phase 3: The Responsible Disclosure Process",
        description:
          "When a critical vulnerability is found, the researcher's responsibility is to protect end users. Document the vulnerability with exact reproduction steps, impact assessment, and proposed remediations. Never disclose zero-day details publicly before vendors release verified fixes."
      }
    ],
    impact:
      "By adopting a structured methodology, security researchers uncover high-severity architectural vulnerabilities that automated scanners miss, while helping developers build resilient software.",
    remediation:
      "Adopt zero-trust authorization at the data layer, implement automated authorization testing in CI, and maintain an active security.txt and private vulnerability reporting channel.",
    references: [
      {
        title: "OWASP Top 10 API Security Risks",
        url: "https://owasp.org/www-project-api-security/"
      },
      {
        title: "FIRST Guidelines for Coordinated Vulnerability Disclosure",
        url: "https://www.first.org/global/sigs/vulnerability-coordination/guidelines/"
      }
    ]
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}
