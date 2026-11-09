# Budget strawman

Checked November 9, 2026. This is a planning budget for the team meeting. It is not a quote and it is not the graded budget slide.

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

## Not in the $49,700

- Sales tax.
- A business fiber circuit to replace Qwest / CenturyLink DSL. Get a Quantum Fiber or Lumen quote for Pacific Avenue. Do not invent a monthly price.
- Labor to image 20 PCs and copy floppy disks and CDs, unless the team decides to price it.
- A new copier. The strawman networks the leased Xerox instead of replacing it.
- A new check printer. The dot matrix stays.

## Planning total

$40,038 + $4,000 + $5,640 = $49,678 before tax. The slide says about $49,700.
