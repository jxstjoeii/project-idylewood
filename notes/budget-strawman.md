# Budget strawman

Checked November 9, 2026. Sales tax, labor, and fiber added November 16, 2026. This is a planning budget for the team meeting. It is not a quote and it is not the graded budget slide.

Prices in the "Vendor page" column were read from the vendor's site or a current retail listing that day. Prices in the "Estimate" column were not checked against a product page. Replace every estimate before December 9.

## Vendor-page prices

| Item | Qty | Unit | Line | Where it came from |
| --- | ---: | ---: | ---: | --- |
| Dell Pro Micro desktop (QCM1250), Core Ultra 5 235T, Windows 11 Pro, 16 GB RAM, 512 GB SSD | 20 | $1,526 | $30,520 | Dell.com, November 9, 2026. Bought from Dell so each PC carries Dell's warranty (the page lists 12 months basic onsite after remote diagnosis, upgradable to 36 months at extra cost). Replaces an earlier Amazon price of about $890. The page showed a sold-out / technical-issue notice that day, so confirm at checkout. |
| Dell PowerEdge T160 with Windows Server 2025 Essentials | 1 | $3,199 | $3,199 | Dell.com order code `pe_t160_15330_os_vi_vp`. Listed config: Xeon 6315P, 16 GB, 2x 2 TB SATA, 3 years ProSupport. A second Dell listing the same day showed $3,119. Confirm at checkout. |
| UniFi Cloud Gateway Ultra (UCG-Ultra) | 1 | $129 | $129 | store.ui.com |
| UniFi Standard 24 PoE (USW-24-POE, 95W) | 1 | $379 | $379 | store.ui.com |
| UniFi Lite 8 PoE (USW-Lite-8-PoE, 52W) | 1 | $109 | $109 | store.ui.com |
| UniFi U7 Lite access point (U7-Lite) | 2 | $99 | $198 | store.ui.com. Rated coverage is about 1,250 square feet each. |
| Dell Pro 24 Plus monitor (P2425H) | 20 | $184.99 | $3,700 | Dell.com, part 210-BMGH. 3-year limited warranty with Advanced Exchange. Listed $199.99, on sale $184.99, temporarily out of stock that day. |
| Dell Pro 3 wired keyboard and mouse (KM300C) | 20 | $19.99 | $400 | Dell.com, 1-year limited warranty. |
| Tripp Lite SmartRack 12U wall-mount cabinet (SRW12U) | 1 | $481.79 | $482 | Staples. Fits gear up to 16.5 in. deep: gateway, both switches, patch panel. The T160 tower sits on the closet floor. |
| APC Back-UPS Pro 1500VA (BR1500MS2) | 1 | $339.99 | $340 | Staples. For the server, gateway, and both switches. |
| UniFi 24-port blank keystone patch panel | 1 | $29 | $29 | store.ui.com |
| UniFi Cat6 keystone jack, 12-pack | 2 | $29 | $58 | store.ui.com. 24 jacks for the closet side of the 20 drops. Wall-plate jacks are assumed in the installer's per-drop price. |
| Cat6 patch cord, 3 ft, 10-pack | 3 | $46.96 | $141 | Staples. Closet patch cords. |
| USB 3.5-inch floppy drive | 1 | $22.09 | $22 | Walmart.com (Duixinghas). Migration tool. |
| Dell DW316 external DVD drive | 1 | $63.99 | $64 | Staples. Out of stock that day. Migration tool. |
| WD Elements Portable 2 TB | 2 | $133.99 | $268 | Walmart.com. Drive prices are high this year; shop around. |
| **Vendor-page subtotal** |  |  | **$40,038** | Line amounts rounded to the dollar. The kickoff slide rounds this to $40,000. |

Port count behind the two switches: 20 PCs, 1 server, 1 Xerox, 1 check printer, and 2 access points is 25 device ports, plus a link between the switches. A single 24-port switch does not leave a spare. The 24-port switch takes the desks. The 8-port switch takes the access points, the server, and both printers.

Confirm that Windows Server 2025 Essentials covers 20 users before anyone buys the server. The published T160 config is 16 GB of RAM and two hard drives. Ask Dell whether those two drives are mirrored before relying on them for client files.

## Estimate, not yet priced

| Item | Planning amount | Why it is still an estimate |
| --- | ---: | --- |
| Cabling, 20 Cat6 drops at about $200 installed | $4,000 | Labor. Needs a Tacoma low-voltage contractor quote. Downtown buildings vary. |

## Microsoft 365, first year

Business Standard, annual commitment, about $23.50 per user per month. That figure comes from a November 1, 2026 summary of Microsoft's US list prices (Business Standard with Copilot). Twenty people for twelve months is $5,640. The kickoff slide rounds this to $5,600.

Open microsoft.com and replace this number before the graded budget. Other November 2026 pages still show Business Premium near $22 per user per month, so the public pages do not all agree. The plan choice is more stable than the dollar: accountants need desktop Excel, so Business Basic is the wrong plan.

## Mail option B: Exchange Server on-site (not in the total)

Microsoft 365 is option A and is in the total. Option B keeps mail in the office on Exchange Server Subscription Edition.

- Exchange SE runs only on Windows Server 2019, 2022, or 2025 Standard or Datacenter, not Essentials (Microsoft's Exchange supportability matrix). So it needs a second server running Windows Server Standard, plus Windows Server CALs.
- Microsoft recommends 128 GB of RAM for a Mailbox server. The T160 in this budget has 16 GB.
- The Exchange server license and 20 Standard CALs require active Software Assurance.
- Microsoft does not publish a US list price for Exchange SE licenses. Get a licensing partner quote; do not invent a number.

The project has no budget cap (school project, not a real install), so B is shown as a real alternative, not ruled out on cost.

## IT setup labor (estimate)

Rate: $125 an hour, the middle of the $100–149 an hour that US IT services firms charge (Clutch, updated September 2026). Hours are the team's estimate.

| Task | Hours |
| --- | ---: |
| Closet and network: cabinet, UPS, gateway, switches, patch panel, access points, configuration | 12 |
| Server: Windows Server, Active Directory, DNS, DHCP, file shares, print queue, backups | 16 |
| 20 PCs: image, join to the domain, set up at the desk, 1.5 hours each | 30 |
| Microsoft 365: domain, DNS records, multi-factor sign-in, mailboxes, Hotmail forwarding | 10 |
| Data migration: old PC files, floppies, CDs | 20 |
| Printers: network the Xerox and the check printer | 4 |
| Staff training and go-live support | 8 |
| Project management and documentation | 10 |
| **Total** | **110 hours × $125 = $13,750** |

Cabling labor stays at $4,000 (20 drops at about $200 installed), listed above.

## Fiber

Quantum Fiber Business, 1 Gig symmetrical, $75 a month on quantumfiber.com's Tacoma business page (shown as $50 a month on a promo with AutoPay). No annual contract. The budget uses $75 so a promo ending does not break it. Twelve months is $900. Install and static IP fees are not listed on the page; a static IP matters mostly for mail option B. Confirm the Pacific Avenue address is served.

## Sales tax

Tacoma's combined rate is 10.5% since July 1, 2026 (Washington Department of Revenue, Pierce County local rate change notice, location code 2717). It was 10.4% from April 1, 2026.

The budget applies 10.5% to everything, including labor and the first year of Microsoft 365 and fiber, to keep it simple. Washington taxes equipment, network cabling installation, and digital automated services, but the Department of Revenue lists some IT technical support as not taxable, so the real tax could be a little lower.

## Year-one total

| Piece | Amount |
| --- | ---: |
| Equipment (vendor pages) | $40,038 |
| Cabling labor (estimate) | $4,000 |
| IT setup labor (estimate) | $13,750 |
| Microsoft 365, year one | $5,640 |
| Quantum Fiber, 12 months | $900 |
| **Before tax** | **$64,328** |
| Sales tax, 10.5% | $6,754 |
| **Year one, with tax** | **$71,082** (about $71,100) |

After year one: Microsoft 365 $470 a month plus fiber $75 a month is $545, about $602 a month with tax.

## Not in the $71,100

- A new copier. The strawman networks the leased Xerox instead of replacing it.
- A new check printer.
- Fiber install or static IP fees.
- Mail option B (Exchange on-site) licensing and its second server.

