const fs = require("fs");
const path = require("path");

function toSlug(str) {
  if (!str) {
    return str;
  }

  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

const data1 = [
  {
    "First Name": "David",
    "Last Name": "Longmore",
    "Email Address": "david.longmore@harcourts.co.za",
    "Mobile Number": "0796994993",
    "Ice Breaker": "",
    Area: "Western Seaboard",
  },
  {
    "First Name": "David",
    "Last Name": "Moafo",
    "Email Address": "david.moafo@harcourts.co.za",
    "Mobile Number": "0712203473",
    "Ice Breaker": "",
    Area: "Western Seaboard",
  },
  {
    "First Name": "Lawrence",
    "Last Name": "Hakuna",
    "Email Address": "lawrence.hakuna@harcourts.co.za",
    "Mobile Number": "0746251400",
    "Ice Breaker": "",
    Area: "Western Seaboard",
  },
  {
    "First Name": "Silvestar",
    "Last Name": "Dube",
    "Email Address": "silvestar.dube@harcourts.co.za",
    "Mobile Number": "0742324246",
    "Ice Breaker": "",
    Area: "Western Seaboard",
  },
  {
    "First Name": "Alexandra",
    "Last Name": "May",
    "Email Address": "",
    "Mobile Number": "0823191985",
    "Ice Breaker": "",
    Area: "Cape Town",
  },
  {
    "First Name": "Jeremy",
    "Last Name": "Thomson",
    "Email Address": "pangolins@mail.com",
    "Mobile Number": "0825210032",
    "Ice Breaker": "",
    Area: "Atlantic Seaboard",
  },
  {
    "First Name": "Charles",
    "Last Name": "Leedo",
    "Email Address": "charles.leedo@galetti.co.za",
    "Mobile Number": "0764442284",
    "Ice Breaker": "",
    Area: "Cape Town",
  },
].map((x) => {
  return {
    airtable: {
      apiKey: "keywUEWZniOrHqDgC",
      baseId: "appWR4jHBZKYWT5bf",
      tableName: "Leads",
    },
    completeText: "Get in touch",
    image: "/images/pages/example.jpg",
    pages: [
      {
        description: `With my sharp knowledge of the local market, I've helped over 500 families in the ${x.Area} area find their dream home — and I'm confident I can help you find yours too.`,
        elements: [
          {
            autoComplete: "name",
            name: "name",
            placeholder: "Enter your name",
            title: "Name",
            type: "text",
          },
          {
            autoComplete: "email",
            name: "emailAddress",
            placeholder: "Enter your email address",
            title: "Email Address",
            type: "email",
          },
          {
            autoComplete: "tel",
            name: "mobileNumber",
            placeholder: "Enter your mobile number",
            title: "Mobile Number",
            type: "tel",
          },
        ],
        name: "page1",
        title: `I'm ${x["First Name"]} ${x["Last Name"]}`,
      },
      {
        description: null,
        elements: [],
        name: "page2",
        title: "We'll talk soon!",
      },
    ],
    slug: toSlug(`${x["First Name"]} ${x["Last Name"]}`),
  };
});

for (const datum of data1) {
  fs.writeFileSync(
    path.join(__dirname, "..", "public", "data", "pages", `${datum.slug}.json`),
    JSON.stringify(datum)
  );
}

fs.writeFileSync(
  path.join(__dirname, "..", "public", "data", "pages", `pages.json`),
  JSON.stringify(["founder", "the-holly", ...data1.map((x) => x.slug)])
);
