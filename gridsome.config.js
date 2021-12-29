// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { defaultExcludes } = require("@gridsome/source-drupal");

const collections = [
  {
    query: `{
      allDrupalNodeEvent {
        edges {
          node {
            id
            title
            field_starting_time
            field_speakers {
              value
            }
            field_organizers {
              value
            }
            field_event_mode
            field_event_category
            field_description {
              value
            }
          }
        }
      }
    }`,
    transformer: ({ data }) =>
      data.allDrupalNodeEvent.edges.map(({ node }) => node),
    indexName: process.env.ALGOLIA_INDEX_NAME || "events", // Algolia index name
    itemFormatter: (item) => {
      return {
        objectID: item.id,
        title: item.title,
        description: item.field_description,
        organizers: item.field_organizers,
        speakers: item.field_speakers,
        starting_time: Date.parse(item.field_starting_time),
        mode: item.field_event_mode,
        category: item.field_event_category,
      };
    }, // optional
    matchFields: ["title", "organizers", "speakers", "description"], // Array<String> required with PartialUpdates
  },
];

module.exports = {
  siteName: "International Chinese Studies Event Database",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      /**
      * These are the default options.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
      */
    },
    {
      use: "@gridsome/source-drupal",
      options: {
        typeName: "drupal",
        baseUrl: "http://3.227.105.202",
        exclude: [...defaultExcludes],
      },
    },
    {
      use: "gridsome-plugin-flexsearch",
      options: {
        autoSetup: false,
        searchFields: [
          "title",
          "field_description",
          "field_speakers",
          "field_organizers",
        ],
        collections: [
          {
            typeName: "DrupalNodeEvent",
            indexName: "DrupalNodeEvent",
            fields: [
              "id",
              "title",
              "field_description",
              "field_speakers",
              "field_organizers",
              "field_event_mode",
              "field_event_category",
              "field_registration",
              "field_starting_time",
            ],
            flexsearch: {
              encode: false,
              tokenize: function(str) {
                const cjkItems = str.replace(/[\x00-\x7F]/g, "").split("");
                const asciiItems = str
                  .replace(/[^\x00-\x7F]/g, "")
                  .split(/\W+/);
                return cjkItems.concat(asciiItems);
              },
            },
          },
        ],
      },
    },
    {
      use: `gridsome-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        collections,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // default: false
      },
    },
  ],
  templates: {
    DrupalNodeEvent: "/event/:id",
  },
};
