const axios = require("axios");
const cheerio = require("cheerio");

(async () => {
  const objs = [];

  objs.push(
    await handle(
      "https://www.privateproperty.co.za/developments/Vredehoek/the-holly/X6137.htm",
      "the-holly"
    )
  );

  fs.writeFileSync(
    path.join(__dirname, "..", "public", "data", "pages", `pages.json`),
    JSON.stringify(["founder", ...objs.map((x) => x.slug)])
  );
})();

async function handle(url, slug) {
  const response = await axios.get(url);

  const $ = cheerio.load(response.data);

  const title = $("#description.description h2:nth-of-type(1)").html();

  const description = $("#description.description p:nth-of-type(1)").html();

  const image = $("#imagesGallery.imageGallery img:nth-of-type(1)")
    .attr("srcset")
    .split(",")[0];

  const obj = {
    airtable: {
      apiKey: "keywUEWZniOrHqDgC",
      baseId: "appWR4jHBZKYWT5bf",
      tableName: "Leads",
    },
    completeText: "Get in touch",
    image,
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
    slug: "the-holly",
  };

  fs.writeFileSync(
    path.join(__dirname, "..", "public", "data", "pages", `${obj.slug}.json`),
    JSON.stringify(datum)
  );
}
