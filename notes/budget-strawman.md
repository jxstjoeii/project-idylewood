# Budget strawman

Checked November 9, 2026. This is a planning budget for the team meeting. It is not a quote and it is not the graded budget slide.

Prices in the "Vendor page" column were read from the vendor's site or a current retail listing that day. Prices in the "Estimate" column were not checked against a product page. Replace every estimate before December 9.

## Vendor-page prices

| Item | Qty | Unit | Line | Where it came from |
| --- | ---: | ---: | ---: | --- |
| Dell Pro Micro desktop, Windows 11 Pro, 16 GB RAM, 512 GB SSD | 20 | $890 | $17,800 | Amazon listings around $889.99 on November 9, 2026. Example configs used a Core Ultra 5. Treat $890 as a street price for that class of PC, not a cart total. |
| Dell PowerEdge T160 with Windows Server 2025 Essentials | 1 | $3,199 | $3,199 | Dell.com order code `pe_t160_15330_os_vi_vp`. Listed config: Xeon 6315P, 16 GB, 2x 2 TB SATA, 3 years ProSupport. A second Dell listing the same day showed $3,119. Confirm at checkout. |
| UniFi Cloud Gateway Ultra (UCG-Ultra) | 1 | $129 | $129 | store.ui.com |
| UniFi Standard 24 PoE (USW-24-POE, 95W) | 1 | $379 | $379 | store.ui.com |
| UniFi Lite 8 PoE (USW-Lite-8-PoE, 52W) | 1 | $109 | $109 | store.ui.com |
| UniFi U7 Lite access point (U7-Lite) | 2 | $99 | $198 | store.ui.com. Rated coverage is about 1,250 square feet each. |
| **Vendor-page subtotal** |  |  | **$21,814** | The kickoff slide rounds this to $21,800. |

Port count behind the two switches: 20 PCs, 1 server, 1 Xerox, 1 check printer, and 2 access points is 25 device ports, plus a link between the switches. A single 24-port switch does not leave a spare. The 24-port switch takes the desks. The 8-port switch takes the access points, the server, and both printers.

Confirm that Windows Server 2025 Essentials covers 20 users before anyone buys the server. The published T160 config is 16 GB of RAM and two hard drives. Ask Dell whether those two drives are mirrored before relying on them for client files.

## Estimates, not yet priced

| Item | Planning amount | Why it is still an estimate |
| --- | ---: | --- |
| 20 monitors, about $150 each | $3,000 | No model picked. A 24-inch business monitor is the target. |
| 20 USB keyboard and mouse kits, about $25 | $500 | No model picked. |
| Cabling, 20 Cat6 drops at about $200 installed | $4,000 | Needs a Tacoma low-voltage quote. Downtown buildings vary. |
| Patch panel, jacks, patch cables | $300 | Depends on the cabling quote. |
| Small wall cabinet for the closet | $250 | No model picked. |
| UPS for the closet | $200 | No model picked. Size it for the server, gateway, and both switches. |
| USB floppy drive, external DVD drive, two external backup disks | $250 | Migration tools, not production gear. |
| **Estimate subtotal** | **$8,500** | The kickoff slide uses this number. |

## Microsoft 365, first year

Business Standard, annual commitment, about $23.50 per user per month. That figure comes from a November 1, 2026 summary of Microsoft's US list prices (Business Standard with Copilot). Twenty people for twelve months is $5,640. The kickoff slide rounds this to $5,600.

Open microsoft.com and replace this number before the graded budget. Other November 2026 pages still show Business Premium near $22 per user per month, so the public pages do not all agree. The plan choice is more stable than the dollar: accountants need desktop Excel, so Business Basic is the wrong plan.

## Not in the $36,000

- Sales tax.
- A business fiber circuit to replace Qwest / CenturyLink DSL. Get a Quantum Fiber or Lumen quote for Pacific Avenue. Do not invent a monthly price.
- Labor to image 20 PCs and copy floppy disks and CDs, unless the team decides to price it.
- A new copier. The strawman networks the leased Xerox instead of replacing it.
- A new check printer. The dot matrix stays.

## Planning total

$21,814 + $8,500 + $5,640 = $35,954 before tax. The slide says about $36,000.
