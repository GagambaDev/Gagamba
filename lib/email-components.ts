export const BRAND_DARK = "#09061A";
export const BRAND_DEEP = "#1A0F47";
export const BRAND_PURPLE = "#5B3FD4";
export const BRAND_LAVENDER = "#D5D2F7";
export const BRAND_CYAN = "#00AAFF";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function emailHeader(heading: string): string {
  return `<tr>
      <td style="background:linear-gradient(135deg,${BRAND_DEEP} 0%,${BRAND_PURPLE} 100%);padding:28px 32px;border-bottom:4px solid ${BRAND_CYAN};">
        <p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:0.5px;">Gagamba</p>
        <p style="margin:6px 0 0;color:${BRAND_LAVENDER};font-size:14px;">${escapeHtml(heading)}</p>
      </td>
    </tr>`;
}

export function emailIntro(html: string): string {
  return `<p style="margin:0 0 24px;color:${BRAND_DEEP};font-size:15px;line-height:1.6;">${html}</p>`;
}

export function emailField(label: string, value: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
    <tr>
      <td style="border:1px solid ${BRAND_LAVENDER};border-left:4px solid ${BRAND_PURPLE};border-radius:8px;padding:14px 16px;background-color:#fafaff;">
        <p style="margin:0 0 4px;color:${BRAND_PURPLE};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;">${escapeHtml(label)}</p>
        <p style="margin:0;color:${BRAND_DEEP};font-size:15px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(value)}</p>
      </td>
    </tr>
  </table>`;
}

export function emailSignoff(text: string): string {
  return `<p style="margin:24px 0 0;color:${BRAND_DEEP};font-size:15px;line-height:1.6;">${escapeHtml(text)}</p>`;
}

export function emailFooter(): string {
  return `<tr>
      <td style="padding:20px 32px;background-color:#f6f5fd;border-top:1px solid ${BRAND_LAVENDER};">
        <p style="margin:0;color:#6b6585;font-size:12px;line-height:1.5;text-align:center;">&copy; Team Gagamba &middot; This is an automated message.</p>
      </td>
    </tr>`;
}

export function emailLayout(header: string, body: string, footer: string): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0;padding:0;background-color:${BRAND_DARK};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND_DARK};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;border:1px solid ${BRAND_LAVENDER};overflow:hidden;box-shadow:0 8px 32px rgba(9,6,26,0.4);">
            ${header}
            <tr>
              <td style="padding:32px;">
                ${body}
              </td>
            </tr>
            ${footer}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
