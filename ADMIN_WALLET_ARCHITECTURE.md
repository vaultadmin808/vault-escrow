# VAULT — Admin and wallet architecture (design only)

## Roles
- OWNER: platform configuration, appoint/revoke admins, freeze operations.
- DISPUTE_ADMIN: review evidence and manage disputes; no automatic payout authority.
- RELEASE_ADMIN: approve eligible releases.
- REFUND_ADMIN: approve eligible refunds.
- SUPPORT_ADMIN: support and limited read access.
- AUDITOR: read-only audit and reconciliation access.

Grant explicit least-privilege permissions such as `release:approve` and `refund:approve`. Require MFA for admin accounts. Record every privileged action in an append-only audit trail. Consider dual approval for high-value releases/refunds.

## Deal wallet rules
Buyer refund and seller payout destinations are captured per deal, never silently reused. Once funding is detected, destination changes should be locked except through a controlled, audited exception. Validate address/network compatibility and use cryptographic ownership challenges where supported; syntax checks alone do not prove ownership.

Never store seed phrases or private keys in the bot, website, database, or source repository. Production signing must use a vetted custody provider or separately secured MPC/HSM signing service. No signing or transfers exist in this starter.

## Private deal rooms
A bot cannot independently create a Telegram group. An authorized human account creates a private group, adds the bot as administrator, and grants the permissions needed to manage invite links. The backend should bind the group chat ID to exactly one deal, issue controlled invite links, verify membership, and avoid posting full wallet addresses or sensitive personal data in group chat.
