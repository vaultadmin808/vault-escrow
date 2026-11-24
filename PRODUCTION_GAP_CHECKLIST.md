# Production gap checklist

This starter is not ready to handle customer funds. Before launch, implement and independently review:
- PostgreSQL persistence and migrations.
- Admin authentication, MFA, role-based access control, and session security.
- Admin dashboard backed by authenticated APIs.
- Approval queue, dual-approval rules, and append-only audit events.
- Telegram user identity binding, group authorization, and private deal-room lifecycle.
- Per-deal wallet address validation and custody-provider integration.
- Blockchain indexer, deposit confirmations, reorganization handling, and transaction reconciliation.
- Double-entry ledger and balance reconciliation.
- Secure release/refund signing and withdrawal limits.
- Dispute evidence handling, customer support, monitoring, backups, incident response.
- Legal/regulatory, AML/KYC, sanctions, privacy, consumer-protection, and tax review for every jurisdiction served.
- Independent security audit and penetration testing.

Keep all real deposits, releases, and refunds disabled until these are complete.
