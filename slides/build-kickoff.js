// Project Idylewood team kickoff, November 9, 2026.
// Visual system adapted from the forest-green academic template:
// Cambria titles, Calibri body, green / gold / brick on white.
// Usage: node slides/build-kickoff.js

const pptxgen = require("pptxgenjs");
const path = require("path");

const C = {
  green: "005035",
  gold: "A49665",
  red: "802F2D",
  olive: "899064",
  ink: "101820",
  body: "333333",
  bodyMuted: "4C5258",
  label: "79808A",
  muted: "A6ACB3",
  lightGray: "E8E8E8",
  cream: "FAF5E0",
  white: "FFFFFF",
};

const F = {
  title: "Cambria",
  body: "Calibri",
  label: "Arial Narrow",
};

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "Project Idylewood Team Kickoff";
pres.author = "Project Idylewood";
pres.subject = "Strawman for the November 9, 2026 team meeting. Final presentation is December 9, 2026.";

const W = 13.333;
const PAGES = 9;

function addHeader(slide) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: W, h: 0.38,
    fill: { color: C.green }, line: { color: C.green, width: 0 },
  });
  slide.addText("PROJECT IDYLEWOOD", {
    x: 0.5, y: 0.05, w: 5, h: 0.28,
    fontFace: F.label, fontSize: 12, color: C.gold, charSpacing: 2, margin: 0, valign: "middle",
  });
  slide.addText("TEAM MEETING  ·  NOVEMBER 9, 2026", {
    x: W - 6.2, y: 0.05, w: 5.7, h: 0.28,
    fontFace: F.label, fontSize: 12, color: C.white, align: "right", charSpacing: 1.5, margin: 0, valign: "middle",
  });
}

function addFooter(slide, pageNum) {
  slide.addShape(pres.shapes.LINE, {
    x: 0.5, y: 7.05, w: W - 1.0, h: 0,
    line: { color: C.lightGray, width: 0.75 },
  });
  slide.addText(`${pageNum}  /  ${PAGES}`, {
    x: 0.5, y: 7.12, w: 2, h: 0.26,
    fontFace: F.label, fontSize: 11, color: C.muted, margin: 0,
  });
  slide.addText("STRAWMAN  ·  NOT THE FINAL DECK", {
    x: W - 5.2, y: 7.12, w: 4.7, h: 0.26,
    fontFace: F.label, fontSize: 11, color: C.muted, align: "right", charSpacing: 1.2, margin: 0,
  });
}

function addTitle(slide, text) {
  slide.addText(text, {
    x: 0.5, y: 0.52, w: W - 1.0, h: 0.48,
    fontFace: F.title, fontSize: 26, bold: true, color: C.ink, margin: 0, valign: "middle",
  });
}

// ---------------------------------------------------------------------------
// 1. Title
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.green };

  s.addText("TEAM KICKOFF  ·  NOVEMBER 9, 2026", {
    x: 0.7, y: 1.45, w: 11, h: 0.32,
    fontFace: F.label, fontSize: 14, color: C.gold, charSpacing: 2.5, margin: 0,
  });
  s.addText("Project Idylewood", {
    x: 0.7, y: 1.95, w: 11.5, h: 0.95,
    fontFace: F.title, fontSize: 54, bold: true, color: C.white, margin: 0,
  });
  s.addText("A strawman IT upgrade for the accounting firm on Pacific Avenue in downtown Tacoma.", {
    x: 0.7, y: 3.1, w: 10.5, h: 0.7,
    fontFace: F.body, fontSize: 20, italic: true, color: C.white, margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.15, w: 2.2, h: 0.06,
    fill: { color: C.gold }, line: { color: C.gold, width: 0 },
  });

  s.addText("Class presentation  ·  December 9, 2026  ·  15 minutes  ·  every person talks", {
    x: 0.7, y: 4.45, w: 11, h: 0.35,
    fontFace: F.body, fontSize: 16, color: C.white, margin: 0,
  });
  s.addText("Nothing in this deck is final. It exists so the team can edit a direction instead of inventing one in the room.", {
    x: 0.7, y: 5.0, w: 10.5, h: 0.4,
    fontFace: F.body, fontSize: 15, color: C.cream, margin: 0,
  });

  s.addNotes("Open by saying this is a strawman you brought so the meeting can decide, not a finished design. The graded deck is a different file, due December 9. Ask the team to mark what they accept and what they want changed. Do not defend every product pick.");
}

// ---------------------------------------------------------------------------
// 2. What the class grades
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s);
  addTitle(s, "What the class will grade");

  const items = [
    ["01", "Title page"],
    ["02", "Overview page"],
    ["03", "Equipment descriptions and examples"],
    ["04", "Budget"],
    ["05", "Implementation plan and timeline"],
    ["06", "Lessons learned"],
    ["07", "References"],
  ];
  items.forEach((item, i) => {
    const y = 1.25 + i * 0.62;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 7.3, h: 0.52,
      fill: { color: i % 2 === 0 ? "F7F6F2" : C.white },
      line: { color: C.lightGray, width: 0.5 },
    });
    s.addText(item[0], {
      x: 0.68, y: y, w: 0.7, h: 0.52,
      fontFace: F.title, fontSize: 16, bold: true, color: C.green, margin: 0, valign: "middle",
    });
    s.addText(item[1], {
      x: 1.5, y: y, w: 6.0, h: 0.52,
      fontFace: F.body, fontSize: 16, color: C.ink, margin: 0, valign: "middle",
    });
  });

  const facts = [
    { n: "Dec 9", label: "Presentation day", sub: "Last class meeting" },
    { n: "15 min", label: "Time on the floor", sub: "Rehearse out loud" },
    { n: "All", label: "Every member talks", sub: "Split the minutes" },
  ];
  facts.forEach((f, i) => {
    const y = 1.25 + i * 1.45;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 8.15, y: y, w: 4.65, h: 1.3,
      fill: { color: C.white }, line: { color: C.lightGray, width: 0.75 },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 8.15, y: y, w: 0.08, h: 1.3,
      fill: { color: C.green }, line: { color: C.green, width: 0 },
    });
    s.addText(f.n, {
      x: 8.45, y: y + 0.12, w: 4.15, h: 0.5,
      fontFace: F.title, fontSize: 26, bold: true, color: C.green, margin: 0,
    });
    s.addText(f.label, {
      x: 8.45, y: y + 0.62, w: 4.15, h: 0.28,
      fontFace: F.body, fontSize: 14, bold: true, color: C.ink, margin: 0,
    });
    s.addText(f.sub, {
      x: 8.45, y: y + 0.9, w: 4.15, h: 0.24,
      fontFace: F.body, fontSize: 13, color: C.bodyMuted, margin: 0,
    });
  });

  addFooter(s, 2);
  s.addNotes("Read the seven slides as the whole grade. There is no separate invention or product-ad assignment. Today's meeting should put a name next to each of the seven. Lessons learned stays empty until the team has actually done the research.");
}

// ---------------------------------------------------------------------------
// 3. Why it cannot wait
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s);
  addTitle(s, "The risk is the client files, not the old monitors");

  const cards = [
    { k: "01", cat: "UNSUPPORTED", title: "Windows XP and 7", body: "Those PCs no longer get security fixes. Client tax files are sitting on them." },
    { k: "02", cat: "NO SINGLE COPY", title: "Files live everywhere", body: "Each PC, a flash drive, floppies, and CDs. One failed disk can erase a client." },
    { k: "03", cat: "HOTMAIL", title: "No company control", body: "There is no admin, no retention rule, and no way to require multi-factor sign-in." },
    { k: "04", cat: "AFTER HOURS", title: "Keys and a janitor", body: "Every employee has a key. A janitor is inside every evening. Printouts sit unattended." },
  ];
  const cardW = 2.95;
  const gap = 0.16;
  cards.forEach((c, i) => {
    const x = 0.5 + i * (cardW + gap);
    const y = 1.3;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: cardW, h: 0.08,
      fill: { color: i === 3 ? C.red : C.green }, line: { width: 0 },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y + 0.08, w: cardW, h: 3.85,
      fill: { color: C.white }, line: { color: C.lightGray, width: 0.75 },
    });
    s.addText(c.k, {
      x: x + 0.18, y: y + 0.25, w: cardW - 0.36, h: 0.5,
      fontFace: F.title, fontSize: 26, bold: true, color: C.green, margin: 0,
    });
    s.addText(c.cat, {
      x: x + 0.18, y: y + 0.82, w: cardW - 0.36, h: 0.26,
      fontFace: F.label, fontSize: 12, color: C.bodyMuted, charSpacing: 1.2, margin: 0, valign: "top",
    });
    s.addText(c.title, {
      x: x + 0.18, y: y + 1.12, w: cardW - 0.36, h: 0.42,
      fontFace: F.body, fontSize: 18, bold: true, color: C.ink, margin: 0, valign: "top",
    });
    s.addText(c.body, {
      x: x + 0.18, y: y + 1.58, w: cardW - 0.36, h: 1.7,
      fontFace: F.body, fontSize: 14, color: C.bodyMuted, margin: 0, valign: "top",
    });
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.45, w: W - 1.0, h: 1.35,
    fill: { color: C.green }, line: { width: 0 },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.45, w: 0.08, h: 1.35,
    fill: { color: C.gold }, line: { width: 0 },
  });
  s.addText("SAY THIS OUT LOUD", {
    x: 0.8, y: 5.58, w: 11.5, h: 0.28,
    fontFace: F.label, fontSize: 12, color: C.gold, charSpacing: 1.5, margin: 0,
  });
  s.addText("This is a confidentiality upgrade. New computers are how the firm gets there. Twenty personal inkjets and a pile of flash drives are part of the same problem.", {
    x: 0.8, y: 5.95, w: 11.6, h: 0.65,
    fontFace: F.body, fontSize: 16, italic: true, color: C.white, margin: 0,
  });

  addFooter(s, 3);
  s.addNotes("The CRTs and PS/2 mice make the room look old, but they are not the grade. Lead with client files on unsupported Windows, Hotmail, and the fact that a janitor is alone in the office every night. The check printer and the offsite storage facility stay. They are not the problem.");
}

// ---------------------------------------------------------------------------
// 4. Strawman
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s);
  addTitle(s, "Strawman: four pieces, one closet");

  const cards = [
    { cat: "NETWORK", title: "Gateway and switches", body: "UniFi Cloud Gateway Ultra at the internet edge. A 24-port PoE switch for the desks, plus an 8-port PoE switch so the access points and spare ports fit. Two U7 Lite access points. Guest Wi-Fi stays off the office network. Replace the DSL line after a fiber quote." },
    { cat: "SERVER", title: "One tower, locked", body: "Dell PowerEdge T160 with Windows Server 2025 Essentials, in a closet the janitor does not open. It provides Active Directory, DNS, DHCP, file shares, and the print queue." },
    { cat: "DESKS", title: "Twenty of the same PC", body: "Dell Pro Micro desktops with Windows 11 Pro, a 24-inch monitor, and a USB keyboard and mouse. Retire the CRTs. Retire the personal inkjets." },
    { cat: "IDENTITY", title: "Retire Hotmail", body: "Microsoft 365 Business Standard on a domain the firm owns. Accountants need desktop Excel, so the Basic plan is the wrong cut. The closet server still does files, printing, and sign-in." },
  ];
  const cardW = 2.95;
  const gap = 0.16;
  cards.forEach((c, i) => {
    const x = 0.5 + i * (cardW + gap);
    const y = 1.22;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: cardW, h: 5.15,
      fill: { color: C.white }, line: { color: C.lightGray, width: 0.75 },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: cardW, h: 0.08,
      fill: { color: C.green }, line: { width: 0 },
    });
    s.addText(c.cat, {
      x: x + 0.16, y: y + 0.22, w: cardW - 0.32, h: 0.24,
      fontFace: F.label, fontSize: 12, color: C.green, charSpacing: 1.2, margin: 0, valign: "top",
    });
    s.addText(c.title, {
      x: x + 0.16, y: y + 0.5, w: cardW - 0.32, h: 0.6,
      fontFace: F.body, fontSize: 16, bold: true, color: C.ink, margin: 0, valign: "top",
    });
    s.addText(c.body, {
      x: x + 0.16, y: y + 1.15, w: cardW - 0.32, h: 3.7,
      fontFace: F.body, fontSize: 13, color: C.bodyMuted, margin: 0, valign: "top",
    });
  });

  addFooter(s, 4);
  s.addNotes("Walk the four columns left to right. The assignment asks for server services that provide internet access. In this design the gateway provides the internet path, and the server provides DNS, DHCP, files, and printing. Say that split on purpose. If the instructor wants the Windows server itself to be the router, that is decision 2 on the decisions slide. Also say the check printer stays a dot matrix on a controlled queue. Do not propose replacing it with a laser.");
}

// ---------------------------------------------------------------------------
// 5. Keep or replace
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s);
  addTitle(s, "What leaves, and what stays");

  const rows = [
    [
      { text: "Replace", options: { fill: { color: C.green }, color: C.white, bold: true, align: "left" } },
      { text: "Keep, or change how it is used", options: { fill: { color: C.green }, color: C.white, bold: true, align: "left" } },
    ],
    ["20 PCs on Windows XP, 7, and 10", "The offsite storage facility, as a second copy"],
    ["17-inch CRTs, PS/2 mice, mixed keyboards", "The large-format dot matrix check printer"],
    ["20 standalone USB inkjet printers", "The leased Xerox, if it can be put on the network"],
    ["Qwest / CenturyLink DSL", "Office keys for the staff entrance"],
    ["Hotmail for work mail", "A separate lock on the server closet"],
    ["Flash drives as the backup plan", "Floppies and CDs, until each one is copied"],
  ];

  const tableRows = rows.map((row, idx) => {
    if (idx === 0) return row;
    const bg = idx % 2 === 0 ? "F7F6F2" : C.white;
    return [
      { text: row[0], options: { fill: { color: bg }, color: C.ink, align: "left" } },
      { text: row[1], options: { fill: { color: bg }, color: C.ink, align: "left" } },
    ];
  });

  s.addTable(tableRows, {
    x: 0.5, y: 1.25, w: W - 1.0, h: 5.4,
    colW: [(W - 1.0) / 2, (W - 1.0) / 2],
    border: [{ pt: 0.5, color: C.lightGray }, { pt: 0.5, color: C.lightGray }, { pt: 0.5, color: C.lightGray }, { pt: 0.5, color: C.lightGray }],
    fontFace: F.body,
    fontSize: 15,
    color: C.ink,
    valign: "middle",
    align: "left",
  });

  addFooter(s, 5);
  s.addNotes("Spend time on the right column. The check printer stays because multipart checks need impact printing. The Xerox stays if the lease can simply be networked. Buying a new copier is not the project. Floppies get copied once, on a single migration PC with a USB floppy drive and a DVD drive, then the disks go to the storage facility. The janitor keeps building access. The janitor does not get the closet key.");
}

// ---------------------------------------------------------------------------
// 6. Budget
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s);
  addTitle(s, "Planning budget, before tax");

  const stats = [
    { n: "$40,000", label: "Priced from vendor pages", sub: "PCs, monitors, keyboards, server, network, closet, migration drives", color: C.green },
    { n: "$4,000", label: "Still an estimate", sub: "Cabling: 20 Cat6 drops, installed. Needs a Tacoma quote.", color: "6B5A32" },
    { n: "$5,600", label: "Microsoft 365, year one", sub: "20 people, Business Standard, annual", color: "3E5230" },
  ];
  stats.forEach((st, i) => {
    const x = 0.5 + i * 4.2;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.25, w: 4.0, h: 2.35,
      fill: { color: C.white }, line: { color: C.lightGray, width: 0.75 },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.25, w: 4.0, h: 0.08,
      fill: { color: st.color }, line: { width: 0 },
    });
    s.addText(st.n, {
      x: x + 0.2, y: 1.45, w: 3.6, h: 0.75,
      fontFace: F.title, fontSize: 36, bold: true, color: st.color, margin: 0,
    });
    s.addText(st.label, {
      x: x + 0.2, y: 2.25, w: 3.6, h: 0.4,
      fontFace: F.body, fontSize: 16, bold: true, color: C.ink, margin: 0,
    });
    s.addText(st.sub, {
      x: x + 0.2, y: 2.7, w: 3.6, h: 0.6,
      fontFace: F.body, fontSize: 14, color: C.bodyMuted, margin: 0,
    });
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.85, w: W - 1.0, h: 1.15,
    fill: { color: C.green }, line: { width: 0 },
  });
  s.addText("ABOUT  $49,700", {
    x: 0.75, y: 3.98, w: 5.5, h: 0.45,
    fontFace: F.title, fontSize: 28, bold: true, color: C.white, margin: 0,
  });
  s.addText("Year-one planning total. Fiber to replace DSL is a separate quote. Sales tax is not in this number.", {
    x: 0.75, y: 4.48, w: 11.5, h: 0.35,
    fontFace: F.body, fontSize: 15, color: C.cream, margin: 0,
  });

  const notes = [
    ["PCs", "20 × $1,526 Dell Pro Micro, Core Ultra 5, Windows 11 Pro, 16 GB, 512 GB. Dell.com, includes Dell warranty."],
    ["Server", "Dell PowerEdge T160 with Windows Server 2025 Essentials, $3,199 on Dell.com."],
    ["Desk + closet", "Dell P2425H monitor $184.99, Dell KM300C keyboard and mouse $19.99. Cabinet, UPS, patch parts $1,050. Ubiquiti network $815."],
    ["Mail", "About $23.50 per user per month. Confirm on microsoft.com before the final deck."],
  ];
  notes.forEach((n, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 6.4;
    const y = 5.2 + row * 0.8;
    s.addText(n[0], {
      x, y, w: 1.3, h: 0.7,
      fontFace: F.label, fontSize: 12, bold: true, color: C.green, margin: 0, valign: "top",
    });
    s.addText(n[1], {
      x: x + 1.3, y, w: 4.9, h: 0.7,
      fontFace: F.body, fontSize: 12, color: C.bodyMuted, margin: 0,
    });
  });

  addFooter(s, 6);
  s.addNotes("Say the words planning budget. The $40,000 is from vendor pages checked November 9: PCs $30,520, monitors $3,700, keyboard sets $400, server $3,199, Ubiquiti network $815, cabinet, UPS and patch parts $1,050, migration drives $354. That adds to $40,038, which this slide rounds to $40,000. The PCs, monitors, and keyboards are all bought on Dell.com so they carry Dell's warranty. The only estimate left is cabling, 20 drops at about $200 installed, and it needs a real Tacoma quote. Microsoft 365 at $23.50 times 20 times 12 is $5,640, shown as $5,600. Line items and links are in notes/budget-strawman.md. Do not let the team treat $49,700 as a bid.");
}

// ---------------------------------------------------------------------------
// 7. Calendar
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s);
  addTitle(s, "Our calendar through December 9");

  s.addText("This is the homework calendar. The firm's install timeline is its own graded slide, and we draft that later.", {
    x: 0.5, y: 1.12, w: 12, h: 0.32,
    fontFace: F.body, fontSize: 14, italic: true, color: C.bodyMuted, margin: 0,
  });

  const marks = [
    { d: "Nov 9", t: "Today", b: "Accept or edit this strawman. Put a name on each graded slide." },
    { d: "Nov 16", t: "Prices", b: "Get quotes for cabling and fiber. Recheck Microsoft 365." },
    { d: "Nov 23", t: "Short week", b: "Draft the install timeline and start lessons learned. Thanksgiving is the 26th." },
    { d: "Dec 2", t: "Full draft", b: "Every required slide exists, including references." },
    { d: "Dec 7", t: "Rehearse", b: "Read it aloud. Cut until it fits in 15 minutes." },
    { d: "Dec 9", t: "Present", b: "Last class meeting. Every person speaks." },
  ];
  marks.forEach((m, i) => {
    const x = 0.5 + (i % 3) * 4.2;
    const y = 1.55 + Math.floor(i / 3) * 1.75;
    s.addShape(pres.shapes.OVAL, {
      x, y, w: 0.38, h: 0.38,
      fill: { color: i === 0 || i === 5 ? C.green : C.white },
      line: { color: C.green, width: 1.5 },
    });
    s.addText(String(i + 1), {
      x, y, w: 0.38, h: 0.38,
      fontFace: F.label, fontSize: 13, bold: true, color: i === 0 || i === 5 ? C.white : C.green,
      align: "center", valign: "middle", margin: 0,
    });
    s.addText(m.d, {
      x: x + 0.5, y: y, w: 3.3, h: 0.38,
      fontFace: F.title, fontSize: 18, bold: true, color: C.ink, margin: 0, valign: "middle",
    });
    s.addText(m.t.toUpperCase(), {
      x, y: y + 0.5, w: 3.7, h: 0.28,
      fontFace: F.label, fontSize: 13, color: C.gold, charSpacing: 1, margin: 0,
    });
    s.addText(m.b, {
      x, y: y + 0.82, w: 3.85, h: 0.95,
      fontFace: F.body, fontSize: 14, color: C.bodyMuted, margin: 0, valign: "top",
    });
  });

  addFooter(s, 7);
  s.addNotes("Do not let the team start writing the client install plan today. First they have to agree on the design. The November 23 week is short because Thanksgiving is November 26. The December 7 rehearsal is not optional. Fifteen minutes goes faster than a group expects, and the grade includes everyone talking.");
}

// ---------------------------------------------------------------------------
// 8. Decisions
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s);
  addTitle(s, "Leave the room with these five answers");

  const decisions = [
    ["1", "Direction", "Is this strawman the design we will defend, or what do we change before we split the work?"],
    ["2", "Email", "Does the class allow Microsoft 365, or does email have to run on the Windows server?"],
    ["3", "Owners", "Which person owns each of the seven graded slides?"],
    ["4", "Voices", "Who speaks which minutes of the 15? Write the names today."],
    ["5", "Next meeting", "What day do we meet again, and who gets the fiber and cabling quotes?"],
  ];
  decisions.forEach((d, i) => {
    const y = 1.2 + i * 1.05;
    s.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y + 0.15, w: 0.52, h: 0.52,
      fill: { color: C.green }, line: { width: 0 },
    });
    s.addText(d[0], {
      x: 0.5, y: y + 0.15, w: 0.52, h: 0.52,
      fontFace: F.title, fontSize: 18, bold: true, color: C.white, align: "center", valign: "middle", margin: 0,
    });
    s.addText(d[1], {
      x: 1.25, y: y + 0.05, w: 3.2, h: 0.7,
      fontFace: F.body, fontSize: 18, bold: true, color: C.ink, margin: 0, valign: "middle",
    });
    s.addText(d[2], {
      x: 4.5, y: y + 0.05, w: 8.2, h: 0.7,
      fontFace: F.body, fontSize: 16, color: C.bodyMuted, margin: 0, valign: "middle",
    });
  });

  addFooter(s, 8);
  s.addNotes("This is the slide to camp on. Hand the room a pen or a shared doc and fill the five answers before anyone leaves. If the team rejects cloud email, the budget and the server slide both change, and you need to say so before you promise the $49,700 number. If you run out of time, decisions 3 and 4 are the ones that hurt on December 9.");
}

// ---------------------------------------------------------------------------
// 9. Owners
// ---------------------------------------------------------------------------
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addHeader(s);
  addTitle(s, "Suggested work, names still blank");

  const headerOpts = { fill: { color: C.green }, color: C.white, bold: true, align: "left" };
  const bodyRows = [
    ["Title", "Firm name, team names, December 9", ""],
    ["Overview", "Today versus the proposed office, in one page", ""],
    ["Equipment", "One example product per category, with a picture and a reason", ""],
    ["Budget", "Swap the cabling estimate for a quote. Keep the sources.", ""],
    ["Timeline", "A phased install that does not stop tax-season work", ""],
    ["Lessons", "Write this after the research. Leave it blank today.", ""],
    ["References", "Vendor pages, Microsoft's price page, and the assignment", ""],
  ];
  const table = [
    [
      { text: "Graded slide", options: headerOpts },
      { text: "Work still to do", options: headerOpts },
      { text: "Owner", options: headerOpts },
    ],
    ...bodyRows.map((r, idx) => {
      const bg = idx % 2 === 0 ? "F7F6F2" : C.white;
      return r.map((cell) => ({ text: cell, options: { fill: { color: bg }, color: C.ink, align: "left" } }));
    }),
  ];

  s.addTable(table, {
    x: 0.5, y: 1.2, w: W - 1.0, h: 5.5,
    colW: [2.3, 8.3, 2.03],
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

  addFooter(s, 9);
  s.addNotes("Pass this slide around and write names in the Owner column. Lessons learned is a trap if someone drafts it tonight from imagination. The final deck should also say, in the equipment section, why the check printer and the Xerox were kept. That judgment is part of the design. Repo for everything after this meeting: github.com/jxstjoeii/project-idylewood.");
}

pres.writeFile({ fileName: path.join(__dirname, "Project-Idylewood-Kickoff.pptx") })
  .then(() => console.log("wrote kickoff deck"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
