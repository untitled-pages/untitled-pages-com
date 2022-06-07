const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

(async () => {
  const urls = [
    [
      "https://www.privateproperty.co.za/developments/Newlands/96-on-newlands/X6151.htm",
      "96-on-newlands",
      "96 On Newlands",
      "96 on Newlands offers an exclusive opportunity to enjoy a lock-up & go lifestyle in one of 3 unique properties in Cape Town's sought-after 'green' suburb, nestled at the foothills of Table Mountain. Situated near the edge of Newlands Forest, this brand-new development is ideally located in an area characterised by tree-lined roads, mountain views, streams, forests and picturesque walks along with a charming mix of characterful homes of varying ages and sizes.",
    ],
    [
      "https://www.privateproperty.co.za/developments/Tokai/3-on-buckingham/X6142.htm",
      "3-on-buckingham",
      "3 On Buckingham",
      "If your perfect lifestyle is relaxed, luxurious, imbued with rural charm and within easy reach of the excitement of a cosmopolitan city, you'll be delighted by the rich opportunity presented at 3 on Buckingham.",
    ],
    [
      "https://www.privateproperty.co.za/developments/Brackenfell-Central/arnim-apartments/X6140.htm",
      "arnim-apartments",
      "Arnim Apartments",
      "Arnim Apartments situated in Brackenfell, one of the Cape's quickest developing suburban areas, offers 256 exclusive designer luxury apartments.",
    ],
    [
      "https://www.privateproperty.co.za/developments/Cape-Town-City-Centre/the-carrington/X6138.htm",
      "the-carrington",
      "The Carrington",
      "The Carrington is Rawson Developers’ latest premium boutique development in the heart of one of the world’s most-loved city centres. With only 49 apartments priced from R1,19million, The Carrington is an obvious choice for investors with projected net returns up to 9,7% pa.",
    ],
    [
      "https://www.privateproperty.co.za/developments/Vredehoek/the-holly/X6137.htm",
      "the-holly",
      "Your Home in Harmony",
      "Welcome to The Holly, Horizon Capital Residential's newest development situated at 30 Bradwell Road, Vredehoek. Inspired by the art deco heritage of the neighbourhood, The Holly's design brings contemporary urban living to life in harmony with its environment.",
      "/images/pages/the-holly.jpg",
    ],
    [
      "https://www.privateproperty.co.za/developments/Camps-Bay/medburn-villas/X6134.htm",
      "medburn-villas",
      "Medburn Villas",
      "Delivering a next-level standard in refined living, this hallowed new boutique development on Camps Bay's Exclusive Medburn Drive, offers 4 thoughtfully designed private residences capitalizing on the naturally rich Cape coastal surrounds. What can only be described as ultra-luxe, your Medburn Villa artfully conceptualized by award-winning Architects, Gerd Weideman and Jenny Mills has a design dialogue that captures every need and desire.",
    ],
    [
      "https://www.privateproperty.co.za/developments/Claremont/19-on-torquay/X6132.htm",
      "19-on-torquay",
      "19 On Torquay",
      "Without compromising on luxury, 19 on Torquay simplifies modern life with a refreshing approach to lock-up & go living. The peak of exclusivity, this idyllic new 4 home development in Claremont Upper is the finest balance of leading-edge security, privacy, and curated design. Wrapped in chic glamour, 19 on Torquay offers residents a unique blend of upmarket suburbia with everyday city access, an uncompromising urban oasis connected to the best Cape Town amenities. Here, life is a series of unlocking one-of-a-kind experiences, the perfect balance of serenity and indulgence. At last, paradise.",
    ],
    [
      "https://www.privateproperty.co.za/developments/Sea-Point/eighty2-on-m/X6127.htm",
      "eighty2-on-m",
      "Eighty2 On M",
      "EIGHTY2 ON M is a bold new development, located in the heart of Sea Point's high street within close proximity to the beachfront and Promenade. The building will house 100 units – Micro, Studio, One Bedroom and Two Bedroom apartments. Intelligently and thoughtfully designed, this development conceptualises a modern playfulness and discerning attention to detail. EIGHTY2 ON M is a green building, not only in terms of natural spaces but also energy. The building boasts green, landscaped spaces with an urban garden.",
    ],
    [
      "https://www.privateproperty.co.za/developments/Durbanville-Central/kings-corner/X6126.htm",
      "kings-corner",
      "King's Corner",
      "King's Corner has been created for living and enjoying life. The development comprises 27 expertly designed luxury studios & 2-bedroom apartments located in the popular Durbanville Central, the “new” hub of Cape Town.",
    ],
    [
      "https://www.privateproperty.co.za/developments/Vredekloof/glenwood/X6121.htm",
      "glenwood",
      "Glenwood",
      "Amazing investment opportunity awaits. Brand new two bedroom one full bathroom apartments in Secure Estate. Apartments vary from 60 sqm to 73 sqm. Great estimated rental returns.",
    ],
    [
      "https://www.privateproperty.co.za/developments/Fresnaye/station-house/X5982.htm",
      "station-house",
      "Station House",
      "Located on the border of Fresnaye and Sea Point and within a stone's throw from the beachfront promenade, Station House is the ultimate address for convenient living and offers savvy Investors excellent growth opportunities. You do not just live large when you are at Station House. Conveniently located in the trendy and affluent Fresnaye area, within greater Sea Point, Station House is mere minutes away from everywhere else you might want to be. Within 10 minutes of the famous Clifton beaches and the V&A Waterfront and Table Mountain, Station House is well located.",
    ],
    [
      "https://www.privateproperty.co.za/developments/Riebeek-West/allesverloren/X6104.htm",
      "allesverloren",
      "Allesverloren",
      "Allesverloren sets a new standard for luxury multi-generational living. Nestled on a gentle rise neighbouring the world-famous Allesverloren Wine Estate, it’s conveniently close to Cape Town yet still a whole world away.",
    ],
    [
      "https://www.privateproperty.co.za/developments/Simons-Town/harbour-bay/X6106.htm",
      "harbour-bay",
      "Harbour Bay",
      "Phase 2 of the Cape’s most exclusive retirement development, Noble Resorts - Harbour Bay, is now selling. Harbour Bay represents a massive R1 Billion investment into Simon's Town and the surrounding area.",
    ],
  ];

  const objs = [];

  for (const url of urls) {
    objs.push(await handle(url[0], url[1], url[2], url[3], url[4]));
  }

  fs.writeFileSync(
    path.join(__dirname, "..", "public", "data", "pages", `pages.json`),
    JSON.stringify([
      "breeze-rentals",
      "charles-leedo",
      "david-longmore",
      "founder",
      ...objs.map((x) => x.slug),
    ])
  );
})();

async function handle(url, slug, title, description, image) {
  const response = await axios.get(url);

  const $ = cheerio.load(response.data);

  if (!title) {
    title = $("#description.description h2:nth-of-type(1)").html();
  }

  if (!description) {
    description = $("#description.description p:nth-of-type(1)").html();
  }

  if (!image) {
    image = $("#imagesGallery.imageGallery img:nth-of-type(1)")
      .attr("srcset")
      .split(",")
      .at(-1)
      .split(" ")[1];
  }

  const obj = {
    airtable: {
      apiKey: "keywUEWZniOrHqDgC",
      baseId: "appWR4jHBZKYWT5bf",
      tableName: "Leads",
    },
    completeText: "Get in touch",
    image,
    meta: {
      description,
      image,
      title,
    },
    pages: [
      {
        description,
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
        title,
      },
      {
        description: null,
        elements: [],
        name: "page2",
        title: "We'll talk soon!",
      },
    ],
    slug,
    template: "squeeze-page",
  };

  fs.writeFileSync(
    path.join(__dirname, "..", "public", "data", "pages", `${obj.slug}.json`),
    JSON.stringify(obj)
  );

  return obj;
}
