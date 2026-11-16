// Project Idylewood owner proposal. Presented December 9, 2026.
// Same visual system as the November 9 kickoff deck.
// Usage: node slides/build-proposal.js

const pptxgen = require("pptxgenjs");
const path = require("path");

const C = {
  green: "005035",
  gold: "A49665",
  goldDark: "6B5A32",
  red: "802F2D",
  ink: "101820",
  body: "333333",
  bodyMuted: "4C5258",
  muted: "A6ACB3",
  lightGray: "E8E8E8",
  cream: "FAF5E0",
  white: "FFFFFF",
  band: "F7F6F2",
};

const F = {
  title: "Cambria",
  body: "Calibri",
  label: "Arial Narrow",
};

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "Project Idylewood";
pres.author = "Project Idylewood";
pres.subject = "IT upgrade proposal for the Pacific Avenue accounting firm. December 9, 2026.";

const W = 13.333;
const PAGES = 12;

function addHeader(slide, section) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: W, h: 0.36,
    fill: { color: C.green }, line: { color: C.green, width: 0 },
  });
  slide.addText("PROJECT IDYLEWOOD", {
    x: 0.5, y: 0.04, w: 5.2, h: 0.28,
    fontFace: F.label, fontSize: 12, color: C.gold, charSpacing: 1.6, margin: 0, valign: "middle",
  });
  slide.addText(section, {
    x: W - 6.4, y: 0.04, w: 5.9, h: 0.28,
    fontFace: F.label, fontSize: 12, color: C.white, align: "right", charSpacing: 1.4, margin: 0, valign: "middle",
  });
}

function addFooter(slide, pageNum) {
  slide.addShape(pres.shapes.LINE, {
    x: 0.5, y: 7.08, w: W - 1.0, h: 0,
    line: { color: C.lightGray, width: 0.75 },
  });
  slide.addText(`${pageNum}  /  ${PAGES}`, {
    x: 0.5, y: 7.14, w: 2.2, h: 0.26,
    fontFace: F.label, fontSize: 11, color: C.muted, margin: 0,
  });
  slide.addText("PROPOSAL  ·  DECEMBER 9, 2026", {
    x: W - 5.4, y: 7.14, w: 4.9, h: 0.26,
    fontFace: F.label, fontSize: 11, color: C.muted, align: "right", charSpacing: 1.1, margin: 0,
  });
}

function addTitle(slide, text) {
  slide.addText(text, {
    x: 0.5, y: 0.48, w: W - 1.0, h: 0.46,
    fontFace: F.title, fontSize: 26, bold: true, color: C.ink, margin: 0, valign: "middle",
  });
}

// ---------------------------------------------------------------------------
// 1. Title
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.green };
  s.addText("PROPOSAL FOR THE OWNER  ·  DECEMBER 9, 2026", {
    x: 0.7, y: 1.55, w: 11.5, h: 0.32,
    fontFace: F.label, fontSize: 14, color: C.gold, charSpacing: 2.2, margin: 0,
  });
  s.addText("Project Idylewood", {
    x: 0.7, y: 2.05, w: 11.5, h: 0.9,
    fontFace: F.title, fontSize: 52, bold: true, color: C.white, margin: 0,
  });
  s.addText("An IT upgrade for the accounting firm on Pacific Avenue, downtown Tacoma.", {
    x: 0.7, y: 3.1, w: 11, h: 0.45,
    fontFace: F.body, fontSize: 20, italic: true, color: C.white, margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 3.8, w: 2.1, h: 0.06,
    fill: { color: C.gold }, line: { width: 0 },
  });
  s.addText("Twenty people. One locked closet. A network that can be explained.", {
    x: 0.7, y: 4.1, w: 11, h: 0.35,
    fontFace: F.body, fontSize: 16, color: C.cream, margin: 0,
  });
  s.addText("Planning budget about $49,700 before tax. Not a bid.", {
    x: 0.7, y: 4.55, w: 11, h: 0.32,
    fontFace: F.body, fontSize: 16, color: C.white, margin: 0,
  });
  s.addText("JOEII  ·  JEREMY  ·  RAY", {
    x: 0.7, y: 5.45, w: 11, h: 0.32,
    fontFace: F.label, fontSize: 14, color: C.gold, charSpacing: 2.2, margin: 0,
  });
  s.addNotes("Speaker: Joeii. Thirty seconds. Introduce the team: Joeii opens and closes, Jeremy covers the equipment, Ray covers the install timeline. Then say this is a proposal for the owner, not a shopping list. The number on this slide is a planning total. The ask is the last slide. Do not apologize for the CRTs. Move on.");
}

// ---------------------------------------------------------------------------
// 2. Overview
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "OVERVIEW");
  addTitle(s, "What the office is, and what it becomes");

  const cols = [
    {
      h: "TODAY",
      lines: [
        "20 PCs on Windows XP, 7, and 10",
        "Files on each PC, a flash drive, floppies, and CDs",
        "Hotmail for work mail",
        "DSL from Qwest / CenturyLink",
        "20 inkjets, and a Xerox that is not networked",
        "A key for every employee, and a janitor every evening",
      ],
    },
    {
      h: "AFTER",
      lines: [
        "20 identical Windows 11 PCs",
        "One file server, and a second copy offsite",
        "Microsoft 365 on a domain the firm owns",
        "Fiber, after a Pacific Avenue quote",
        "One networked Xerox, one check printer",
        "A closet lock the janitor does not hold",
      ],
    },
  ];
  cols.forEach((col, i) => {
    const x = 0.5 + i * 6.4;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.15, w: 6.15, h: 4.55,
      fill: { color: C.white }, line: { color: C.lightGray, width: 0.75 },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.15, w: 6.15, h: 0.42,
      fill: { color: C.green }, line: { width: 0 },
    });
    s.addText(col.h, {
      x: x + 0.2, y: 1.15, w: 5.7, h: 0.42,
      fontFace: F.label, fontSize: 14, color: C.gold, charSpacing: 1.4, margin: 0, valign: "middle",
    });
    col.lines.forEach((line, n) => {
      const y = 1.75 + n * 0.6;
      s.addText(line, {
        x: x + 0.25, y, w: 5.7, h: 0.5,
        fontFace: F.body, fontSize: 15, color: C.ink, margin: 0, valign: "middle",
      });
    });
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.9, w: W - 1.0, h: 1.0,
    fill: { color: C.green }, line: { width: 0 },
  });
  s.addText("The server gives every PC a name and an address. The gateway is the door to the internet. That pair is the service.", {
    x: 0.75, y: 5.9, w: W - 1.5, h: 1.0,
    fontFace: F.body, fontSize: 16, italic: true, color: C.white, margin: 0, valign: "middle",
  });
  addFooter(s, 2);
  s.addNotes("Speaker: Joeii. Two minutes. Read down the left column, then the right. Then read the green bar slowly. If someone says the assignment wants the server to provide internet, this is the answer: DNS and DHCP come from Windows Server, and the UniFi gateway routes and filters. We are not making the file server into the office router. The goal line from the brief is current systems, a small network, and server services that give the office internet access.");
}

// ---------------------------------------------------------------------------
// 3. Network
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "EQUIPMENT");
  addTitle(s, "The network, from the street to the desk");

  const boxes = [
    { k: "CIRCUIT", t: "Fiber, after a quote", d: "Replace Qwest / CenturyLink DSL. Do not invent the monthly price. Ask Quantum Fiber or Lumen for Pacific Avenue." },
    { k: "DOOR", t: "Cloud Gateway Ultra", d: "UniFi UCG-Ultra, $129. It routes, filters, and keeps guest Wi-Fi off the office network." },
    { k: "SWITCHES", t: "24 ports, plus 8", d: "USW-24-PoE, $379, for the desks. USW-Lite-8-PoE, $109, for the closet. One 24-port switch is not enough." },
    { k: "WI-FI", t: "Two U7 Lite", d: "$99 each on the Ubiquiti store. About 1,250 square feet of rated coverage each. Staff SSID and a guest SSID." },
  ];
  boxes.forEach((b, i) => {
    const x = 0.5 + i * 3.2;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.15, w: 3.05, h: 3.15,
      fill: { color: C.white }, line: { color: C.lightGray, width: 0.75 },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.15, w: 3.05, h: 0.08,
      fill: { color: C.green }, line: { width: 0 },
    });
    s.addText(b.k, {
      x: x + 0.16, y: 1.35, w: 2.75, h: 0.24,
      fontFace: F.label, fontSize: 12, color: C.green, charSpacing: 1.1, margin: 0,
    });
    s.addText(b.t, {
      x: x + 0.16, y: 1.62, w: 2.75, h: 0.55,
      fontFace: F.body, fontSize: 16, bold: true, color: C.ink, margin: 0, valign: "top",
    });
    s.addText(b.d, {
      x: x + 0.16, y: 2.25, w: 2.75, h: 1.85,
      fontFace: F.body, fontSize: 13, color: C.bodyMuted, margin: 0, valign: "top",
    });
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: W - 1.0, h: 2.35,
    fill: { color: C.band }, line: { width: 0 },
  });
  s.addText("WHY TWO SWITCHES", {
    x: 0.75, y: 4.65, w: 11.8, h: 0.28,
    fontFace: F.label, fontSize: 13, color: C.green, charSpacing: 1.2, margin: 0,
  });
  s.addText("Twenty PCs, the server, the Xerox, the check printer, and two access points is 25 device ports, plus a link between the switches. The 24-port switch takes the desks. The 8-port switch takes the closet. Prices are Ubiquiti store list prices viewed November 9, 2026.", {
    x: 0.75, y: 5.0, w: 11.8, h: 0.85,
    fontFace: F.body, fontSize: 15, color: C.ink, margin: 0, valign: "top",
  });
  s.addText("Cabling is still an estimate: 20 Cat6 drops at about $200 installed, $4,000. The patch panel, jacks, and patch cords are priced at $228. Downtown buildings vary. Get a Tacoma quote before the final number.", {
    x: 0.75, y: 5.85, w: 11.8, h: 0.8,
    fontFace: F.body, fontSize: 15, color: C.bodyMuted, margin: 0, valign: "top",
  });
  addFooter(s, 3);
  s.addNotes("Speaker: Jeremy. About 90 seconds. Point left to right: circuit, gateway, switches, Wi-Fi. Then the gray panel. The port sentence is the part that shows the team counted. Do not quote a fiber bill. Say the monthly price is a blank until someone calls Lumen or Quantum Fiber for that address.");
}

// ---------------------------------------------------------------------------
// 4. Server and mail
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "EQUIPMENT");
  addTitle(s, "One server in a closet, and no more Hotmail");

  const panels = [
    {
      k: "SERVER",
      t: "Dell PowerEdge T160",
      price: "$3,199",
      body: "Dell.com order code pe_t160_15330_os_vi_vp, viewed November 9, 2026. A second listing that day was $3,119. Confirm at checkout.\n\nXeon 6315P, 16 GB of RAM, two 2 TB drives, Windows Server 2025 Essentials, 3 years of ProSupport.\n\nRoles: Active Directory, DNS, DHCP, file shares, and the print queue. Essentials is the small-office edition, described for up to 25 users and 50 devices, which covers this staff of 20. Confirm that limit in Microsoft's current licensing guide before purchase.\n\nAsk Dell whether those two drives are mirrored before client files depend on them.",
    },
    {
      k: "MAIL, TWO OPTIONS",
      t: "A: Microsoft 365 Business Standard",
      price: "$5,640",
      body: "Our pick. About $23.50 per user per month, annual, times 20 people, from a November 1, 2026 summary of Microsoft's list price. Recheck microsoft.com. Accountants need desktop Excel, so Business Basic is the wrong cut. Nothing new to run in the closet.\n\nB: Exchange Server in our own closet. The backup if mail has to stay in the office. Exchange will not run on Essentials. It needs a second server with Windows Server Standard, and Microsoft recommends 128 GB of RAM. The server license and 20 CALs need Software Assurance. Microsoft publishes no US list price, so B is a partner quote.\n\nEither way, the firm needs a domain it owns.",
    },
  ];
  panels.forEach((p, i) => {
    const x = 0.5 + i * 6.4;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.15, w: 6.15, h: 5.7,
      fill: { color: C.white }, line: { color: C.lightGray, width: 0.75 },
    });
    s.addText(p.k, {
      x: x + 0.25, y: 1.3, w: 5.7, h: 0.24,
      fontFace: F.label, fontSize: 13, color: C.green, charSpacing: 1.2, margin: 0,
    });
    s.addText(p.t, {
      x: x + 0.25, y: 1.55, w: 5.7, h: 0.4,
      fontFace: F.body, fontSize: 18, bold: true, color: C.ink, margin: 0,
    });
    s.addText(p.price, {
      x: x + 0.25, y: 2.0, w: 5.7, h: 0.45,
      fontFace: F.title, fontSize: 28, bold: true, color: C.green, margin: 0,
    });
    s.addText(p.body, {
      x: x + 0.25, y: 2.55, w: 5.7, h: 4.05,
      fontFace: F.body, fontSize: 13, color: C.bodyMuted, margin: 0, valign: "top",
    });
  });
  addFooter(s, 4);
  s.addNotes("Speaker: Jeremy. About 90 seconds. Left side first. Say the closet is locked and the janitor does not get that key. Right side: Hotmail has no company admin and no way to require multi-factor sign-in. The $5,640 has to be rechecked on Microsoft's own page. Option A is the plan. Option B is the backup if mail has to stay in the office: it costs a second server and a licensing quote, which is why we did not pick it. Do not pretend the server can grow past the Essentials user cap.");
}

// ---------------------------------------------------------------------------
// 5. Desks
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "EQUIPMENT");
  addTitle(s, "Twenty of the same desk");

  const cards = [
    { n: "$30,520", k: "THE PC", t: "Dell Pro Micro, Windows 11 Pro", d: "20 at $1,526. Core Ultra 5 235T, 16 GB of RAM, 512 GB SSD. Dell.com price on November 9, 2026, bought from Dell so each PC carries Dell's warranty. Confirm at checkout." },
    { n: "$3,700", k: "THE SCREEN", t: "Dell Pro 24 Plus, P2425H", d: "20 at $184.99 on Dell.com, November 9, 2026. 3-year warranty with Advanced Exchange. Listed as temporarily out of stock that day, so confirm at checkout. The 17-inch CRTs leave." },
    { n: "$400", k: "THE INPUT", t: "Dell Pro 3 keyboard and mouse", d: "KM300C, wired USB. 20 at $19.99 on Dell.com, November 9, 2026, with a 1-year warranty. PS/2 mice and the mix of keyboards leave with the old PCs." },
  ];
  cards.forEach((c, i) => {
    const x = 0.5 + i * 4.2;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.15, w: 4.02, h: 3.55,
      fill: { color: C.white }, line: { color: C.lightGray, width: 0.75 },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.15, w: 4.02, h: 0.08,
      fill: { color: i === 0 ? C.green : C.goldDark }, line: { width: 0 },
    });
    s.addText(c.n, {
      x: x + 0.18, y: 1.35, w: 3.65, h: 0.5,
      fontFace: F.title, fontSize: 28, bold: true, color: i === 0 ? C.green : C.goldDark, margin: 0,
    });
    s.addText(c.k, {
      x: x + 0.18, y: 1.9, w: 3.65, h: 0.22,
      fontFace: F.label, fontSize: 12, color: C.bodyMuted, charSpacing: 1.1, margin: 0,
    });
    s.addText(c.t, {
      x: x + 0.18, y: 2.15, w: 3.65, h: 0.55,
      fontFace: F.body, fontSize: 15, bold: true, color: C.ink, margin: 0, valign: "top",
    });
    s.addText(c.d, {
      x: x + 0.18, y: 2.75, w: 3.65, h: 1.75,
      fontFace: F.body, fontSize: 13, color: C.bodyMuted, margin: 0, valign: "top",
    });
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.9, w: 6.15, h: 1.95,
    fill: { color: C.green }, line: { width: 0 },
  });
  s.addText("WHY ONE MODEL", {
    x: 0.72, y: 5.05, w: 5.7, h: 0.26,
    fontFace: F.label, fontSize: 13, color: C.gold, charSpacing: 1.2, margin: 0,
  });
  s.addText("One image, one spare, one set of drivers. A broken PC is replaced with the same PC.", {
    x: 0.72, y: 5.4, w: 5.7, h: 1.15,
    fontFace: F.body, fontSize: 16, color: C.white, margin: 0, valign: "top",
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.85, y: 4.9, w: 6.0, h: 1.95,
    fill: { color: C.band }, line: { width: 0 },
  });
  s.addText("WHAT LEAVES", {
    x: 7.07, y: 5.05, w: 5.55, h: 0.26,
    fontFace: F.label, fontSize: 13, color: C.green, charSpacing: 1.2, margin: 0,
  });
  s.addText("The CRTs, the XP, 7, and 10 PCs, and every personal inkjet. The check printer stays.", {
    x: 7.07, y: 5.4, w: 5.55, h: 1.15,
    fontFace: F.body, fontSize: 16, color: C.ink, margin: 0, valign: "top",
  });
  addFooter(s, 5);
  s.addNotes("Speaker: Jeremy. About a minute. Every desk number is now from a real Dell.com listing, so the PC, the monitor, and the keyboard all carry Dell's warranty. The monitor has the best coverage, three years with Advanced Exchange. The point of identical PCs is the spare and the image, not the brand. End on the check printer so nobody thinks the inkjets and the check printer are the same decision.");
}

// ---------------------------------------------------------------------------
// 6. Keep
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "EQUIPMENT");
  addTitle(s, "What we refuse to replace");

  const headerOpts = { fill: { color: C.green }, color: C.white, bold: true, align: "left" };
  const raw = [
    ["20 PCs on Windows XP, 7, and 10", "The offsite storage facility, as the second copy"],
    ["17-inch CRTs, PS/2 mice, mixed keyboards", "The dot matrix check printer. Multipart checks need impact."],
    ["20 standalone USB inkjets", "The leased Xerox, put on the network, until the lease ends"],
    ["Qwest / CenturyLink DSL", "Keys to the front door for the staff"],
    ["Hotmail", "A different key for the server closet"],
    ["Flash drives as the backup plan", "Floppies and CDs, until each disk has been copied"],
  ];
  const table = [
    [
      { text: "Remove", options: headerOpts },
      { text: "Keep, or change how it is used", options: headerOpts },
    ],
    ...raw.map((r, idx) => {
      const bg = idx % 2 === 0 ? C.band : C.white;
      return r.map((cell) => ({ text: cell, options: { fill: { color: bg }, color: C.ink, align: "left" } }));
    }),
  ];
  s.addTable(table, {
    x: 0.5, y: 1.15, w: W - 1.0, h: 5.7,
    colW: [(W - 1.0) / 2, (W - 1.0) / 2],
    border: [
      { pt: 0.5, color: C.lightGray },
      { pt: 0.5, color: C.lightGray },
      { pt: 0.5, color: C.lightGray },
      { pt: 0.5, color: C.lightGray },
    ],
    fontFace: F.body,
    fontSize: 14,
    color: C.ink,
    valign: "middle",
  });
  addFooter(s, 6);
  s.addNotes("Speaker: Jeremy. About a minute. Spend the time on the right column. The check printer stays because a laser will not print multipart check stock. The Xerox stays if it has a network port or the lease vendor can turn one on. Buying a new copier is not this project. Floppies get read once, on one migration PC with a USB floppy drive and a DVD drive, then the disks go to the storage facility. The janitor still cleans. The janitor does not open the closet.");
}

// ---------------------------------------------------------------------------
// 7. Budget summary
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "BUDGET");
  addTitle(s, "Planning total, before tax");

  const stats = [
    { n: "$40,038", l: "Vendor pages", s: "PCs, monitors, keyboards, server, network, cabinet, UPS, patch parts, migration drives. Viewed November 9, 2026." },
    { n: "$4,000", l: "Still an estimate", s: "Cabling only: 20 Cat6 drops, installed. Needs a Tacoma low-voltage quote." },
    { n: "$5,640", l: "Mail, year one", s: "Option A, Microsoft 365 Business Standard, 20 people. Option B, Exchange on-site, is a partner quote." },
  ];
  stats.forEach((st, i) => {
    const x = 0.5 + i * 4.2;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.2, w: 4.02, h: 2.7,
      fill: { color: C.white }, line: { color: C.lightGray, width: 0.75 },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.2, w: 4.02, h: 0.08,
      fill: { color: i === 0 ? C.green : C.goldDark }, line: { width: 0 },
    });
    s.addText(st.n, {
      x: x + 0.18, y: 1.45, w: 3.65, h: 0.6,
      fontFace: F.title, fontSize: 32, bold: true, color: i === 0 ? C.green : C.goldDark, margin: 0,
    });
    s.addText(st.l, {
      x: x + 0.18, y: 2.15, w: 3.65, h: 0.35,
      fontFace: F.body, fontSize: 16, bold: true, color: C.ink, margin: 0,
    });
    s.addText(st.s, {
      x: x + 0.18, y: 2.55, w: 3.65, h: 1.15,
      fontFace: F.body, fontSize: 14, color: C.bodyMuted, margin: 0, valign: "top",
    });
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.15, w: W - 1.0, h: 1.15,
    fill: { color: C.green }, line: { width: 0 },
  });
  s.addText("$49,678", {
    x: 0.75, y: 4.28, w: 4.2, h: 0.5,
    fontFace: F.title, fontSize: 32, bold: true, color: C.white, margin: 0,
  });
  s.addText("Year one, before tax. About $49,700 if you round it. Fiber service and sales tax are not in this number.", {
    x: 5.1, y: 4.3, w: 7.4, h: 0.85,
    fontFace: F.body, fontSize: 16, color: C.cream, margin: 0, valign: "middle",
  });

  const excluded = [
    ["Not included", "Sales tax. The monthly fiber bill. Labor to sit and copy floppies. A new copier. A new check printer."],
  ];
  s.addText(excluded[0][0].toUpperCase(), {
    x: 0.5, y: 5.55, w: 12.3, h: 0.28,
    fontFace: F.label, fontSize: 13, color: C.green, charSpacing: 1.2, margin: 0,
  });
  s.addText(excluded[0][1], {
    x: 0.5, y: 5.9, w: 12.3, h: 0.9,
    fontFace: F.body, fontSize: 16, color: C.ink, margin: 0, valign: "top",
  });
  addFooter(s, 7);
  s.addNotes("Budget speaker not assigned yet. Ninety seconds. Say planning total, then the three piles, then the green bar. 40038 plus 4000 plus 5640 is 49678. Line amounts are rounded to the whole dollar. The kickoff deck rounded the first pile to $40,000 and mail to $5,600. Cabling is the only estimate left. Do not call this a bid.");
}

// ---------------------------------------------------------------------------
// 8. Budget lines
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "BUDGET");
  addTitle(s, "Where the $49,678 comes from");

  const headerOpts = { fill: { color: C.green }, color: C.white, bold: true, align: "left" };
  const rows = [
    ["20 Dell Pro Micro desktops", "$30,520", "Dell.com, with warranty"],
    ["PowerEdge T160, Server 2025 Essentials", "$3,199", "Dell.com list"],
    ["Gateway, two switches, two access points", "$815", "Ubiquiti list"],
    ["20 Dell monitors and keyboard sets", "$4,100", "Dell.com, with warranty"],
    ["Wall cabinet, UPS, patch panel and cords", "$1,050", "Retail list, Nov 9"],
    ["Floppy, DVD, and backup disks", "$354", "Retail list, Nov 9"],
    ["Cabling, 20 Cat6 drops installed", "$4,000", "Estimate"],
    ["Mail option A: Microsoft 365, year one", "$5,640", "Recheck Microsoft"],
    ["Mail option B: Exchange on-site, instead of A", "Quote", "Not in total"],
    ["Total before tax", "$49,678", "Not a bid"],
  ];
  const table = [
    [
      { text: "Item", options: headerOpts },
      { text: "Amount", options: headerOpts },
      { text: "Basis", options: headerOpts },
    ],
    ...rows.map((r, idx) => {
      const last = idx === rows.length - 1;
      const bg = last ? "E7F0EA" : idx % 2 === 0 ? C.band : C.white;
      return r.map((cell, col) => ({
        text: cell,
        options: { fill: { color: bg }, color: C.ink, align: "left", bold: last || col === 1 },
      }));
    }),
  ];
  s.addTable(table, {
    x: 0.5, y: 1.15, w: W - 1.0, h: 5.7,
    colW: [7.3, 2.3, 3.03],
    border: [
      { pt: 0.5, color: C.lightGray },
      { pt: 0.5, color: C.lightGray },
      { pt: 0.5, color: C.lightGray },
      { pt: 0.5, color: C.lightGray },
    ],
    fontFace: F.body,
    fontSize: 14,
    valign: "middle",
  });
  addFooter(s, 8);
  s.addNotes("Budget speaker not assigned yet. One minute, or skip this slide if the clock is behind and leave it for questions. Network electronics: 129 plus 379 plus 109 plus 198 is 815. Monitors 3700 plus keyboards 400 is 4100. Cabinet 482 plus UPS 340 plus patch panel, jacks, and cords 228 is 1050. Floppy 22, DVD 64, and two 2 TB drives 268 is 354. Cabling labor is the one estimate. The line-by-line sources live in notes/budget-strawman.md in the project repo. Offer to send that page.");
}

// ---------------------------------------------------------------------------
// 9. Timeline
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "IMPLEMENTATION");
  addTitle(s, "Install around tax season, not through it");

  const phases = [
    { n: "1", d: "Dec 10–18", t: "Order", b: "Owner approves on December 9. Order the gear, book cabling, pick the closet, and pick the domain. Old PCs stay in use." },
    { n: "2", d: "Dec 28–Jan 2", t: "Closet", b: "The office is quiet. Pull cable. Set the cabinet, the UPS, the gateway, both switches, and the server. Nobody moves yet." },
    { n: "3", d: "Jan 4–8", t: "Pilot", b: "Two people move. Copy their files. Put the Xerox and the check printer on the network. Fix what breaks before anyone else moves." },
    { n: "4", d: "Jan 11–15", t: "The rest", b: "Five desks at a time, after hours. If the pilot was not clean, stop here and finish after April 15." },
    { n: "5", d: "That same window", t: "Mail", b: "Turn on the firm domain and multi-factor sign-in. Forward Hotmail for 30 days, then close it." },
    { n: "6", d: "Jan 16–Apr 15", t: "Freeze", b: "No new cutovers during the busy season. Copy any leftover floppies and CDs after tax day." },
  ];
  phases.forEach((p, i) => {
    const x = 0.5 + (i % 3) * 4.2;
    const y = 1.15 + Math.floor(i / 3) * 2.85;
    s.addShape(pres.shapes.OVAL, {
      x, y, w: 0.38, h: 0.38,
      fill: { color: C.green }, line: { width: 0 },
    });
    s.addText(p.n, {
      x, y, w: 0.38, h: 0.38,
      fontFace: F.label, fontSize: 14, bold: true, color: C.white, align: "center", valign: "middle", margin: 0,
    });
    s.addText(p.d, {
      x: x + 0.48, y, w: 3.4, h: 0.38,
      fontFace: F.title, fontSize: 16, bold: true, color: C.ink, margin: 0, valign: "middle",
    });
    s.addText(p.t.toUpperCase(), {
      x, y: y + 0.46, w: 3.85, h: 0.24,
      fontFace: F.label, fontSize: 13, color: C.green, charSpacing: 1, margin: 0,
    });
    s.addText(p.b, {
      x, y: y + 0.74, w: 3.9, h: 1.85,
      fontFace: F.body, fontSize: 13, color: C.bodyMuted, margin: 0, valign: "top",
    });
  });
  addFooter(s, 9);
  s.addNotes("Speaker: Ray. Two minutes. This is the firm's install, not the class homework calendar. The rule is the last card: if the January pilot is messy, the office does not discover that during tax season. Say the dates assume the owner approves on December 9. Christmas week is when the closet work happens because the desks can stay dark. Five people a night is deliberate. Twenty people on one morning is how you stop an accounting office.");
}

// ---------------------------------------------------------------------------
// 10. Lessons
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "LESSONS LEARNED");
  addTitle(s, "Four things this design taught us");

  const lessons = [
    { n: "01", t: "The CRTs were a distraction", d: "The room looks old because of the monitors. The risk is client files on Windows XP and in Hotmail. A new screen does not fix that." },
    { n: "02", t: "Twenty desks is not twenty ports", d: "Printers, the server, and the access points count. A single 24-port switch would have arrived full, with nowhere to plug the uplink." },
    { n: "03", t: "The check printer is a process", d: "Replacing it with a laser would break multipart checks. Keeping it is a design decision, not a leftover." },
    { n: "04", t: "January is the wrong month to gamble", d: "The quiet week is the end of December. After January 15 the office should freeze. A price without a date next to it is not a price. These numbers are from November 9, 2026." },
  ];
  lessons.forEach((ls, i) => {
    const y = 1.15 + i * 1.4;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y, w: W - 1.0, h: 1.25,
      fill: { color: i % 2 === 0 ? C.band : C.white },
      line: { color: C.lightGray, width: 0.75 },
    });
    s.addText(ls.n, {
      x: 0.7, y, w: 1.1, h: 1.25,
      fontFace: F.title, fontSize: 22, bold: true, color: C.green, margin: 0, valign: "middle",
    });
    s.addText(ls.t, {
      x: 2.0, y: y + 0.12, w: 10.3, h: 0.38,
      fontFace: F.body, fontSize: 16, bold: true, color: C.ink, margin: 0,
    });
    s.addText(ls.d, {
      x: 2.0, y: y + 0.52, w: 10.3, h: 0.6,
      fontFace: F.body, fontSize: 14, color: C.bodyMuted, margin: 0,
    });
  });
  addFooter(s, 10);
  s.addNotes("Speaker: Joeii. Ninety seconds. These are lessons from building the proposal, not from a finished install. Say that in one clause so the owner, and the instructor, know you are not pretending the office is already upgraded. Lesson 4 is two ideas on purpose: the calendar, and the habit of dating every price. If you are short on time, cut lesson 2. Do not cut the check printer or the tax-season freeze.");
}

// ---------------------------------------------------------------------------
// 11. References
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "REFERENCES");
  addTitle(s, "Sources for the numbers");

  const refs = [
    { n: "01", t: "Dell PowerEdge T160", d: "dell.com, order code pe_t160_15330_os_vi_vp, $3,199. A second listing the same day showed $3,119. Viewed November 9, 2026.", url: "https://www.dell.com/en-us/shop/ipovw/poweredge-t160" },
    { n: "02", t: "Dell Pro Micro desktops", d: "dell.com, Dell Pro Micro (QCM1250), Core Ultra 5 235T, Windows 11 Pro, 16 GB, 512 GB, $1,526 with Dell's base warranty. Viewed November 9, 2026.", url: "https://www.dell.com/en-us/shop/desktop-computers/spd/dellpromicroqcm1250" },
    { n: "03", t: "Ubiquiti store list prices", d: "UCG-Ultra $129, USW-24-PoE $379, USW-Lite-8-PoE $109, U7-Lite $99. store.ui.com, viewed November 9, 2026.", url: "https://store.ui.com/us/en" },
    { n: "04", t: "Microsoft 365 Business Standard", d: "About $23.50 per user per month, annual, from a November 1, 2026 summary of Microsoft's US list prices. Other pages that month disagreed. Confirm on Microsoft's plan page.", url: "https://www.microsoft.com/en-us/microsoft-365/business" },
    { n: "05", t: "Windows Server 2025 Essentials, and Exchange", d: "Essentials is described for up to 25 users and 50 devices. Exchange Server SE runs only on Windows Server Standard or Datacenter, per Microsoft's Exchange supportability matrix.", url: "https://www.microsoft.com/en-us/windows-server" },
    { n: "06", t: "Dell monitor and keyboard", d: "Dell Pro 24 Plus P2425H, $184.99, 3-year Advanced Exchange. Dell Pro 3 KM300C keyboard and mouse, $19.99, 1-year. dell.com, viewed November 9, 2026.", url: "https://www.dell.com/en-us/shop/dell-24-monitor-p2425h/apd/210-bmgh/monitors-monitor-accessories" },
    { n: "07", t: "Closet and migration parts", d: "Tripp Lite SRW12U cabinet $481.79, APC BR1500MS2 UPS $339.99, Cat6 patch cords $46.96 per 10 (Staples). UniFi patch panel $29, Cat6 jacks $29 per 12 (store.ui.com). Dell DW316 DVD $63.99, USB floppy $22.09, WD Elements 2TB $133.99 each.", url: "https://www.staples.com/tripp-lite-srw12u-wall-mount-rack-enclosure-cabinet/product_IM1PX7136" },
    { n: "08", t: "The assignment brief", d: "Accounting firm on Pacific Avenue in downtown Tacoma. Equipment list, Hotmail, DSL, the janitor, and the offsite storage facility come from the instructor's problem statement.", url: null },
  ];
  refs.forEach((r, i) => {
    const y = 1.0 + i * 0.74;
    s.addText(r.n, {
      x: 0.5, y, w: 0.7, h: 0.8,
      fontFace: F.title, fontSize: 16, bold: true, color: C.green, margin: 0, valign: "top",
    });
    const titleOpts = {
      x: 1.3, y, w: 11.3, h: 0.3,
      fontFace: F.body, fontSize: 15, bold: true, color: C.ink, margin: 0,
    };
    if (r.url) titleOpts.hyperlink = { url: r.url };
    s.addText(r.t, titleOpts);
    s.addText(r.d, {
      x: 1.3, y: y + 0.3, w: 11.3, h: 0.55,
      fontFace: F.body, fontSize: 12, color: C.bodyMuted, margin: 0, valign: "top",
    });
  });
  addFooter(s, 11);
  s.addNotes("References speaker not assigned yet. Twenty seconds unless someone asks. Do not read the URLs aloud. Say the prices were viewed November 9, 2026, the mail price still needs Microsoft's own page, and the client facts come from the assignment. The titles on this slide are links. Cabling labor is the one estimate left, and it is labeled as an estimate on the budget slides, not dressed up as a source.");
}

// ---------------------------------------------------------------------------
// 12. The ask
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s, "THE ASK");
  addTitle(s, "Four decisions before anyone orders");

  const asks = [
    ["1", "Approve the direction", "Accept this design and the $49,678 planning total, knowing fiber and tax are extra."],
    ["2", "Name the domain", "Either mail option needs a domain the firm owns before Hotmail can go."],
    ["3", "Name the closet", "Which room locks, and which person holds a key the janitor does not have."],
    ["4", "Choose the freeze", "A January cutover only if the pilot is clean. Otherwise wait until after April 15."],
  ];
  asks.forEach((a, i) => {
    const y = 1.2 + i * 1.35;
    s.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y + 0.2, w: 0.52, h: 0.52,
      fill: { color: C.green }, line: { width: 0 },
    });
    s.addText(a[0], {
      x: 0.5, y: y + 0.2, w: 0.52, h: 0.52,
      fontFace: F.title, fontSize: 18, bold: true, color: C.white, align: "center", valign: "middle", margin: 0,
    });
    s.addText(a[1], {
      x: 1.3, y: y + 0.08, w: 11, h: 0.4,
      fontFace: F.body, fontSize: 20, bold: true, color: C.ink, margin: 0,
    });
    s.addText(a[2], {
      x: 1.3, y: y + 0.52, w: 11, h: 0.45,
      fontFace: F.body, fontSize: 16, color: C.bodyMuted, margin: 0,
    });
  });
  addFooter(s, 12);
  s.addNotes("Speaker: Joeii. One minute, then stop talking. Ask the room, as if they were the owner, which of the four they would decide today. That gives the last speaker a clean ending and gives classmates a chance to ask about the check printer, the mail price, or the January freeze. Thank them. Do not add a new product in the question period.");
}

pres.writeFile({ fileName: path.join(__dirname, "Project-Idylewood-Proposal.pptx") })
  .then(() => console.log("wrote proposal deck"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
