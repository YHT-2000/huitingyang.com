# Huiting Yang Academic Homepage

Static academic homepage for `www.huitingyang.com`.

## Deployment

Recommended GitHub Pages settings:

- Repository: public
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`
- Custom domain: `www.huitingyang.com`
- HTTPS: Enforce HTTPS after GitHub finishes certificate provisioning

Recommended DNS records at Cloudflare:

| Type | Name | Target / Content | Proxy |
|---|---|---|---|
| CNAME | `www` | `<github-username>.github.io` | DNS only |
| A | `@` | `185.199.108.153` | DNS only |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |

The `CNAME` file in this repository sets the GitHub Pages custom domain to:

```text
www.huitingyang.com
```
