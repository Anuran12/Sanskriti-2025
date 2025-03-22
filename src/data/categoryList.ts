import { tiaraAssetsPrefix } from "@/lib/utils";

// Define the path to events images
const eventsImagesPath = "/images/events/";

// Define constants for event images
const ANTAKSHARI_IMAGE = "antakshari.jpg";
const BEATBOX_IMAGE = "beatbox.jpg";
const CREATIVE_WRITING_IMAGE = "creativewriting.jpg";
const DANCEBOUT_IMAGE = "dancebout.jpg";
const GHOOGROOZ_IMAGE = "ghoogrooz.jpg";
const GRAFFITI_WARS_IMAGE = "graffitiwars.jpg";
const GUITAR_WARS_IMAGE = "guitarwars.jpg";
const INQUIZZITIVE_IMAGE = "inquizzitive.jpg";
const INSTRUMENTAL_IMAGE = "instrumental.jpg";
const JAMIT_IMAGE = "jamit.jpg";
const MOON_WALK_IMAGE = "moonwalk.jpg";
const NATYALAYA_IMAGE = "natyalaya.jpg";
const POSTER_TSHIRT_FACEPAINTING_IMAGE = "postertshirtfacepainting.jpg";
const RAAGNJOSH_IMAGE = "raagnjosh.jpg";
const RANGOLI_IMAGE = "rangoli.jpg";
const RAPBATTLE_IMAGE = "rapbattle.jpg";
const RENDITION_IMAGE = "rendition.jpg";
const SHOOTATSIGHT_IMAGE = "shootatsight.jpg";
const SKETCHOPHILE_IMAGE = "sketchophile.jpg";
const STUDENTS_PERFORMANCE_IMAGE = "studentsperformance.jpg";
const TARANA_IMAGE = "tarana.jpg";
const THINKTWICE_IMAGE = "thinktwice.jpg";

// Define a constant for the event poster image URL (kept for fallback)
const EVENT_POSTER_IMAGE = "/images/poster.png";

const categoriesList = {
  curtain_raiser: {
    // Small description of the category
    description: "5th April, 2025. Jadavpur University Salt Lake Campus",
    thumbnail: `${tiaraAssetsPrefix}/technical/technical_thumbnail.avif`,
    events: [{}],
  },

  prelims: {
    description: "6th April, 2025. OAT, Jadavpur Campus",
    thumbnail: `${tiaraAssetsPrefix}/nontechnical/nontechnical_thumbnail.avif`,
    events: [
      {
        "0": {
          name: "GRAFFITI WARS Registrations",
          description:
            "Unleash your creativity in an intense graffiti and wall-art competition! Compete with your team to transform a designated space into a masterpiece over seven days.",
          rules: [
            "This is a graffiti/wall-art competition.",
            "Each team can have a maximum of 5 members.",
            "A designated wall area will be provided.",
            "Participants will have 7 days (06/04/2025 to 12/04/2025) to complete their graffiti.",
            "Teams must bring their own paints, brushes, and necessary materials.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${GRAFFITI_WARS_IMAGE}`,
          startTime: "2025-04-06 12:00:00",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSeRpxEaiGsZ1trLG-wmUZdqAr5JHgEcZvGoJGS0NQM3R7wFDA/viewform",
          studentCoordinators: [
            {
              name: "Akansha",
              phone: "7439440355",
            },
            {
              name: "Shubhamita",
              phone: "9073062840",
            },
          ],
        },
        "1": {
          name: "Jam It (Western Bands) Registration",
          description:
            "Unleash your band's energy in this electrifying western band competition! Open to all bands, college or otherwise.",
          rules: [
            "This is an ON-STAGE competition.",
            "Registration is open to any western band, college or otherwise.",
            "Time limit during prelims is 10+2 minutes, inclusive of sound check.",
            "8 bands will qualify for the finals.",
            "Time limit during finals is 12+3 minutes, inclusive of sound check.",
            "Each band must play a minimum of two songs during the finals.",
            "Marks will be deducted for exceeding the time limit.",
            "Equipment provided: Drums, Adequate Microphones, plug-ins, and sufficient sound requirements.",
            "Bands must bring their own musical instruments. Programmed music is not allowed.",
            "Extra credit will be given for original compositions in the finals.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${JAMIT_IMAGE}`,
          startTime: "2025-04-06 16:00:00",
          finalsStartTime: "2025-04-11 11:00:00",
          venue: "Jadavpur Campus, OAT",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLScN02fQMls8stYP8BVLzn1osmv9cmjJkhafsS5tmrZpwdoR3A/viewform",
          studentCoordinators: [
            {
              name: "Dhruba Mahato",
              phone: "8617615996",
            },
            {
              name: "Shreshtha",
              phone: "8389945831",
            },
          ],
        },
        "2": {
          name: "Raag 'N' Josh (Eastern Bands) Registration",
          description:
            "Showcase your musical prowess in this thrilling Eastern Bands competition, open to college and non-college bands alike!",
          rules: [
            "Registration for RAAG 'N' JOSH is open to any eastern band, college or otherwise.",
            "This is an ON-STAGE competition.",
            "Time limit during prelims is 10+2 minutes, inclusive of sound check.",
            "8 bands will qualify to the finals.",
            "Time limit during finals is 12+3 minutes, inclusive of sound check.",
            "Marks will be deducted for exceeding the time limit.",
            "Equipment provided: Drums, adequate microphones, plug-ins, and sufficient sound requirements.",
            "Bands must bring their own musical instruments. Programmed music is not allowed.",
            "In the finals, extra credit will be given for original compositions.",
            "Each band must perform a minimum of two songs during the finals.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${RAAGNJOSH_IMAGE}`,
          startTime: "2025-04-06 10:00:00",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLScipbqcS67Uj4v0jJjPa6y7k8I9N6cAAmnKqXdj8EURXBISag/viewform",
          studentCoordinators: [
            {
              name: "Dipesh Mahato",
              phone: "7029014262",
            },
            {
              name: "Sayani Lath Roy",
              phone: "9064060188",
            },
          ],
        },
        "3": {
          name: "THINK TWICE - Debate Competition Registration",
          description:
            "Engage in a battle of wits and words in this exciting debate competition! Only 10 teams can participate, so register fast!",
          rules: [
            "This is an OFF-STAGE event.",
            "There will be only 10 teams for the event; registration is on a first-come, first-serve basis.",
            "The team size is 2, with one member speaking for the topic and another against it.",
            "The time allotted per speaker is 4 + 1 minutes.",
            "Exceeding the time limit will result in a penalty.",
            "The speaker who sets the motion first will be allowed to wrap up at the end of the debate.",
            "Participants will not be allowed to read from any material but may carry plain papers to jot down points if required.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          venue: "Jadavpur Campus, TEQIP",
          thumbnail: `${eventsImagesPath}${THINKTWICE_IMAGE}`,
          startTime: "2025-03-06 12:00:00",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSdFwmj-3DMICnLVBfaiqmYthtWqAuxeozS8O2-0ocApgGmY5w/viewform",
          studentCoordinators: [
            {
              name: "Gourav Bose",
              phone: "8017469943",
            },
            {
              name: "Souvik",
              phone: "7029273580",
            },
          ],
        },
      },
    ],
  },

  students_performance: {
    description: "7th April, 2025. OAT, Jadavpur Campus.",
    thumbnail: `${tiaraAssetsPrefix}/cultural/cultural_thumbnail.avif`,
    events: [
      {
        "0": {
          name: "SHOOT AT SIGHT Registration",
          description:
            "Capture the moment and showcase your photography skills in this spot photography contest. Bring your creativity and let your lens do the talking!",
          rules: [
            "This is a spot photography contest. Participants must bring their own equipment (mobile photography allowed).",
            "The theme of the contest will be informed one day prior to the event.",
            "Each participant can submit a maximum of 3 entries.",
            "File format: JPEG / JPG ONLY | Aspect ratio: 3:2, 4:3.",
            "File size: 300 DPI, not less than 2MB and not more than 5MB each. At least 2000 pixels at the longest edge, no upper pixel limit.",
            "Name, signature, watermarks, border, or company name must not be affixed on the pictures or captions. Such entries will be disqualified.",
            "Post-processing is limited to brightness, contrast, highlights, shadows, color correction, and conversion to grayscale.",
            "Participants may be asked to supply RAW images (or original images for phone photography). Failing to do so will lead to disqualification.",
            "Photographs shall be disqualified if they contain anything illegal or unlawful.",
            "All photographs must be submitted by 4th April, 2025, 06:00 pm at events.contact@fetsanskritiju.in.",
            "All participants must report to the registration desk by 11:30 AM, and they will be allowed to start clicking pictures by 12:00 PM.",
            "The photographs will be displayed at the Open Air Theatre during the Reunion and Final Nights.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${SHOOTATSIGHT_IMAGE}`,
          startTime: "2025-04-07 12:00:00",
          venue: "To be announced",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSe10xOqMUCRCVigC6Bakzt5NWCl7ZjtRJPwbGPpZRe1a1hMzw/viewform",
          studentCoordinators: [
            {
              name: "Souvik",
              phone: "8910398827",
            },
            {
              name: "Atridev Debsharma",
              phone: "8768180541",
            },
          ],
        },
        "1": {
          name: "NATYALAYA - Drama Competition Registrations",
          description:
            "Step into the spotlight and bring your stories to life in this thrilling drama competition. Open to all groups and teams!",
          rules: [
            "This is an ON-STAGE competition.",
            "Registration is open to any group or team, college or otherwise.",
            "Languages allowed: Bengali, Hindi, and English.",
            "The competition consists of two rounds.",
            "Round 1: Teams perform a drama on any topic of their choice.",
            "No limit on the number of members in a team.",
            "Time limit for Round 1: 15(+5 or -5) minutes, including stage setup.",
            "Round 2: Teams will perform a short play on a topic provided by the judges.",
            "Time limit for Round 2: 5-7 minutes.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${NATYALAYA_IMAGE}`,
          startTime: "2025-04-07 14:00:00",
          venue: "Jadavpur Campus, OAT",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLScQGtvJqbyw2IPzpuAuPYsrfvvJbCgU41DfkNdR3r8CMnsatw/viewform",
          studentCoordinators: [
            {
              name: "Nilimesh Mondal",
              phone: "9339935383",
            },
            {
              name: "Tarpan Roy",
              phone: "7908595400",
            },
          ],
        },
        "2": {
          name: "ANTAKSHARI Registrations",
          description:
            "A thrilling on-stage Antakshari competition with two exciting rounds: Prelims and Finals!",
          rules: [
            "This is an ON-STAGE competition.",
            "There will be two rounds: prelims and finals.",
            "Team size is three.",
            "The prelims will be a written test.",
            "The finals will be a conventional Antakshari format, rules to be declared during the event.",
            "Mobile phones are not allowed.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${ANTAKSHARI_IMAGE}`,
          startTime: "2025-04-07 16:00:00",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLScXlQbnn7Fb9mxcJ9hwVxFduEBg9W4egs-zP4jOixkI1ztedg/viewform",
          studentCoordinators: [
            {
              name: "Gourav Bose",
              phone: "8017469943",
            },
            {
              name: "Saptarshi",
              phone: "9434156901",
            },
          ],
        },
        "3": {
          name: "Students' Performance Registrations",
          description:
            "THE DAYS ARE FINALLY HERE! The same O.A.T., the same lights, the same stage waiting to host your musical talents and a fresh surge of enthusiasm. Start training your chords, polishing your instruments, and get ready for SANSKRITI 2024 Students' Performances, which is just around the corner!",
          rules: [],
          prerequisites: [],
          thumbnail: `${eventsImagesPath}${STUDENTS_PERFORMANCE_IMAGE}`,
          startTime: "2025-04-07 18:00:00",
          venue: "To be announced",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSesMRzFgOVjPolTvDcO1Eja5yKcln3gojAPg-HcrVbvEcD-UQ/viewform",
          studentCoordinators: [
            {
              name: "Tiyasa",
              phone: "9903898874",
            },
            {
              name: "Gourav Bose",
              phone: "8017469943",
            },
            {
              name: "Dipesh Mahato",
              phone: "7029014262",
            },
          ],
        },
        "4": {
          name: "TARANA - Eastern Solo Vocals Registrations",
          description:
            "Showcase your vocal talent in this prestigious Eastern solo singing competition! Open to individuals and teams from colleges or otherwise.",
          rules: [
            "This is an ON-STAGE event.",
            "Registration for TARANA is open to any individual/team, college or otherwise.",
            "One singer and one instrument (might be played by another person) is allowed.",
            "Competitors are expected to bring their own instruments.",
            "Backing tracks will not be allowed.",
            "Time limit during prelims is 5+1 minutes, inclusive of sound check, or 2 songs, whichever is less.",
            "8 individuals/teams will qualify to the finals.",
            "Time limit during finals is 7+1 minutes, inclusive of sound check.",
            "It is compulsory to sing two songs during the finals.",
            "Marks will be deducted for exceeding the time limit.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${TARANA_IMAGE}`,
          startTime: "2025-04-07 10:00:00",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfl5hYhaxWm1ll62qDbmIJJQ5AzdmPEWT1Q7eiMHyssfX74ng/viewform",
          studentCoordinators: [
            {
              name: "Brohmani",
              phone: "7501689409",
            },
            {
              name: "Ankit",
              phone: "9800068545",
            },
          ],
        },
      },
    ],
  },

  dance_night: {
    description: "8th April,2025.OAT, Jadavpur Campus.",
    thumbnail: `${tiaraAssetsPrefix}/mega/mega_thumbnail.avif`,
    events: [
      {
        "0": {
          name: "GHOONGROOZ - Eastern Choreography Registrations",
          description:
            "Grace the stage with your mesmerizing Eastern dance performances. Compete solo, as a duet, or in a group to showcase your talent in this captivating choreography competition!",
          rules: [
            "This is an ON-STAGE competition.",
            "This is an EASTERN dance competition with two categories: Solo/Duet or Group.",
            "Registration is open to any individual or group, college or otherwise.",
            "Time limit for Solo/Duet: 4+1 minutes (empty stage to empty stage).",
            "Time limit for Group: 6+2 minutes (empty stage to empty stage).",
            "Marks will be deducted for exceeding the time limit.",
            "No limit on the maximum number of participants in a group.",
            "Participants must arrange their own accessories and costumes.",
            "Performance music must be brought on a CD or Pen Drive.",
            "Bollywood dance is restricted, but Bollywood songs are allowed.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${GHOOGROOZ_IMAGE}`,
          startTime: "2025-04-08 10:00:00",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLScAMMY7r4gMztWAE_hjaQTEYOwojP2U00M-iZbTUj9XNxzB1A/viewform",
          studentCoordinators: [
            {
              name: "Shreshtha",
              phone: "8389945831",
            },
            {
              name: "Dipesh Mahato",
              phone: "7029014262",
            },
          ],
        },
        "1": {
          name: "SKETCHOPHILE Registrations",
          description:
            "Unleash your creativity and artistic skills in this exciting drawing competition open for all college students!",
          rules: [
            "This is an OFF-STAGE event.",
            "Drawing competition open for all college students or otherwise.",
            "The theme or topic will be revealed prior to the event.",
            "Each participant will be allotted a time of 2 hours.",
            "Participants are expected to bring their own equipment, including paints, paint brushes, pencils, etc.",
            "Participants are allowed to use any art form or genre of painting as long as it stays relevant to the mentioned theme.",
            "Judge's choices will be exhibited inside Jadavpur Campus.",
            "Winner will be decided by the judge and their decision stands undisputed.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${SKETCHOPHILE_IMAGE}`,
          startTime: "2025-04-08 10:00:00",
          venue: "TEQIP BUILDING",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSe6lR2GV--Yybc1Kiq_U38TFVMA5bG0QyuTWoWrQxIZJdalUA/viewform",
          studentCoordinators: [
            {
              name: "Upasma Mondal",
              phone: "9875604621",
            },
            {
              name: "Dipesh Mahato",
              phone: "7029014262",
            },
          ],
        },
        "2": {
          name: "POSTER PAINTING/T-SHIRT PAINTING/FACE PAINTING Registrations",
          description:
            "Unleash your creativity in this artistic showdown! Compete in Poster Painting, T-Shirt Painting, or Face Painting and showcase your talent.",
          rules: [
            "These are three different OFF-STAGE competitions.",
            "Registration is open only to college students.",
            "Colleges may send any number of contestants.",
            "Face Painting teams must comprise an artist and a model.",
            "Paper/T-shirts will be supplied at the venue.",
            "The topic will be announced an hour before the competition.",
            "Contestants are not allowed to refer to any material for assistance.",
            "Judges' decisions are final and binding.",
          ],
          prerequisites: [
            "Participants must reach an hour prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${POSTER_TSHIRT_FACEPAINTING_IMAGE}`,
          startTime: "2025-04-08 12:00:00",
          venue: "TEQIP BUILDING",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSf1lUbNqwk7Fe-CnXseQyZiMBUMzqoIbz8jt23xBQe7VJQlTA/viewform",
          studentCoordinators: [
            {
              name: "Akansha",
              phone: "7439440355",
            },
            {
              name: "Ayon Roy",
              phone: "8167330356 (W), 8910143558",
            },
          ],
        },
        "3": {
          name: "Moon Walk - Western Choreography Registrations",
          description:
            "Showcase your best moves in this thrilling western dance competition, open to all! Compete in Solo, Duet, or Group categories.",
          rules: [
            "This is an ON-STAGE competition.",
            "Registration is open to any individual or group, college or otherwise.",
            "Time limit for solo category: 4+1 minutes (empty stage to empty stage).",
            "Time limit for duet category: 4+1 minutes (empty stage to empty stage).",
            "Time limit for group category: 6+2 minutes (empty stage to empty stage).",
            "Marks will be deducted for exceeding the time limit.",
            "No limit on the maximum number of participants in a group.",
            "Participants must arrange their own accessories and costumes.",
            "Performance music must be brought on a CD or Pen Drive.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${MOON_WALK_IMAGE}`,
          startTime: "2025-04-08 14:30:00",
          venue: "Jadavpur Campus, OAT",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSdES2KYqbG35a3hlpBHalDxzKAEX8fKRdag2gCWCJf4JpphuA/viewform",
          studentCoordinators: [
            {
              name: "Saptorsho Basu",
              phone: "9804688606",
            },
            {
              name: "Adrija Chatterjee",
              phone: "7439849303",
            },
          ],
        },
        "4": {
          name: "RANGOLI Registrations",
          description:
            "Unleash your creativity with vibrant colors in this exciting Rangoli competition! Open to all teams ready to showcase their artistic flair.",
          rules: [
            "This is an OFF-STAGE competition.",
            "Rangoli event teams should comprise of 2 members.",
            "Contestants are expected to bring their own colors and brushes.",
            "Contestants are expected to bring any material that they may need. No material will be supplied at the venue.",
            "The topic will be given an hour before the competition.",
          ],
          prerequisites: [
            "Participants must reach an hour prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${RANGOLI_IMAGE}`,
          startTime: "2025-04-08 12:00:00",
          venue: "TEQIP BUILDING",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSed5WEB8nDFK7V4w6lzAKVR51eWDu2hUC4KsHUBrwpgYt86Cg/viewform",
          studentCoordinators: [
            {
              name: "Dhruba Mahato",
              phone: "8617615996",
            },
            {
              name: "Manab Patowary",
              phone: "9064792800",
            },
          ],
        },
      },
    ],
  },
  all_events_day: {
    description: "9th April,2025.OAT, Jadavpur Campus.",
    thumbnail: `${tiaraAssetsPrefix}/mega/mega_thumbnail.avif`,
    events: [
      {
        "0": {
          name: "RENDITION - Western Solo Vocals Registrations",
          description:
            "A spectacular Western solo singing competition open to all, showcasing vocal prowess on stage!",
          rules: [
            "This is a Western solo singing competition.",
            "This is an ON-STAGE event.",
            "Registration for RENDITION is open to any individual/team, college or otherwise.",
            "One singer and one instrument (might be played by another person) is allowed.",
            "Competitors are expected to bring their own instruments.",
            "Backing tracks will not be allowed.",
            "Time limit during prelims is 5+1 minutes, inclusive of sound check, or 2 songs, whichever is less.",
            "8 individuals/teams will qualify to the finals.",
            "Time limit during finals is 7+1 minutes, inclusive of sound check.",
            "It is compulsory to sing two songs during the finals.",
            "Marks will be deducted for exceeding the time limit.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${RENDITION_IMAGE}`,
          startTime: "2025-04-09 10:00:00",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfXQqP486kNYRfOnxa_8nxUmZuo8LvALGTlBWAn6MbxtawmmA/viewform",
          studentCoordinators: [
            {
              name: "Bhimesh Murmu",
              phone: "9007000670",
            },
            {
              name: "Tarpan Roy",
              phone: "7908595400",
            },
          ],
        },
        "1": {
          name: "RAP BATTLE Registrations",
          description:
            "Step up to the mic and showcase your lyrical skills in this epic rap battle! Compete against the best and prove your dominance on stage.",
          rules: [
            "Registration is open to any individual, college or otherwise.",
            "This is an ON-STAGE competition.",
            "This will be a showcase act.",
            "Backing tracks are allowed, but no backing vocals should be present in the track.",
            "Any form of ghostwriting will lead to immediate disqualification.",
            "Marks will be awarded for performance and lyrical relevance.",
            "Finalists will be shortlisted based on their performance.",
            "Explicit or offensive content is strictly prohibited.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${RAPBATTLE_IMAGE}`,
          startTime: "2025-04-09 15:30:00",
          venue: "To be announced",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSc6YNJtKtoEKj_zXsujsYtYxnVm2cTzkDzBYMOPRv17ehsySQ/viewform",
          studentCoordinators: [
            {
              name: "Akansha",
              phone: "7439440355",
            },
            {
              name: "Bandhan Barma",
              phone: "9547745496",
            },
          ],
        },
        "2": {
          name: "INQUIZZITIVE - Quiz Competition Registration",
          description:
            "Test your knowledge and compete in this thrilling general quiz competition! Open to all U-25 college students, with exciting rounds and engaging challenges.",
          rules: [
            "This is an OFF-STAGE event.",
            "General quiz open to all U-25/College students.",
            "Maximum of three members per team. Cross-college teams allowed.",
            "Highest scoring 8 teams from prelims qualify for the finals.",
            "Bounce-pounce and other modalities to be announced during the quiz.",
            "The Quiz Master's decisions are final and binding.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${INQUIZZITIVE_IMAGE}`,
          startTime: "2025-04-09 12:00:00",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSc72-3voe2bCmUlX00ZAxrHtTP9EtNcuM5e1KMtN6r8L4Ui5w/viewform",
          studentCoordinators: [
            {
              name: "Farhan Jamil",
              phone: "8981166626",
            },
            {
              name: "Arijit Bose",
              phone: "7003793158",
            },
          ],
        },
        "3": {
          name: "BEAT-BOX Registrations",
          description:
            "Showcase your beatboxing skills in an electrifying on-stage competition. Compete in intense battles and impress the judges with your rhythm and creativity!",
          rules: [
            "Registration is open to any individual, college or otherwise.",
            "This is an ON-STAGE competition.",
            "Backing tracks will not be allowed.",
            "1-minute showcase round for all registered participants.",
            "Battles will be among the top 8 participants:",
            "  a) 1 min, 2 rounds except finals.",
            "  b) 1.5 mins, 2 rounds in the finals.",
            "The judging panel's decision will be final and irrevocable.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${BEATBOX_IMAGE}`,
          startTime: "2025-04-09 14:00:00",
          formLink: "https://forms.gle/YourSpecificEventFormLink", // Add the Google Form link here
          studentCoordinators: [
            {
              name: "Souvik",
              phone: "7029273580",
            },
            {
              name: "Ayon Roy",
              phone: "8167330356 (W), 8910143558",
            },
          ],
        },
        "4": {
          name: "DANCE BOUT Registrations",
          description:
            "Show off your best moves in an electrifying one-on-one all-style dance battle. Compete in cyphers and head-to-head battles to claim the top spot!",
          rules: [
            "ONE-ON-ONE ALL-STYLE BATTLE.",
            "Music will be provided by crew members and will vary across genres (e.g., hip hop, house, funk, dubstep).",
            "Street dance should be a mix of styles: Popping, B-boying, Wacking/Punking, Vogueing, House Dance, Hip Hop Dance, Krumping, Stepping/Gumboots, etc.",
            "Dance moves must be age-appropriate and should not be distasteful or crude.",
            "Dancers are responsible for ensuring their own safety while performing any move or style.",
            "Lewd gestures, comments, or movements will result in elimination from the competition.",
            "Round 1: Qualification via Cypher - 16 dancers will be selected. The judge's decision is final.",
            "Round 2: One-on-one battles until the final winner is determined.",
            "Organizers are not responsible for participants' insurance.",
            "The organizing committee reserves the right to make rule changes.",
            "Registration is open for the first 40 participants.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${DANCEBOUT_IMAGE}`,
          startTime: "2025-04-09 17:00:00",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLScp6njXFwYccm7wQpAmjRClqvvcLIk3GX-ahWUSHNL81Lwgrw/viewform",
          studentCoordinators: [
            {
              name: "Brohmani",
              phone: "7501689409",
            },
            {
              name: "Manab Patowary",
              phone: "9064792800",
            },
          ],
        },
      },
    ],
  },
  eastern_night: {
    description:
      "10th April, 2025. Genre: Eastern Music. OAT Jadavpur University.",
    thumbnail: `${tiaraAssetsPrefix}/mega/mega_thumbnail.avif`,
    events: [{}],
  },
  western_night: {
    description:
      "11th April, 2025. Genre: Western Music. OAT Jadavpur University.",
    thumbnail: `${tiaraAssetsPrefix}/mega/mega_thumbnail.avif`,
    events: [
      {
        "0": {
          name: "CREATIVE WRITING Registrations",
          description:
            "Unleash your creativity in an engaging off-stage writing competition. Choose between Prose and Poetry, and express yourself in English, Bengali, or Hindi!",
          rules: [
            "This is an OFF-STAGE competition.",
            "This event has 2 categories: Prose and Poetry.",
            "Contestants may write in English, Bengali, or Hindi.",
            "Registration is open only to college students.",
            "Colleges may send any number of contestants.",
            "Contestants must bring their own pens, pencils, etc.",
            "Paper will be supplied at the venue.",
            "The topic will be announced on the spot before the competition.",
            "Contestants will not be allowed to refer to any material for assistance.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          venue: "TEQIP BUILDING",
          thumbnail: `${eventsImagesPath}${CREATIVE_WRITING_IMAGE}`,
          startTime: "2025-04-11 12:00:00",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSd7eiJowSGjrSa8Wk9pqlLvu-KVIQpzmHrkpdCmgsQ2CFyj0A/viewform",
          studentCoordinators: [
            {
              name: "Bhimesh Murmu",
              phone: "9007000670",
            },
            {
              name: "Ankit",
              phone: "9800068545",
            },
          ],
        },
      },
    ],
  },
  reunion_night: {
    description:
      "12th April, 2025. Genre: World Music. OAT Jadavpur University.",
    thumbnail: `${tiaraAssetsPrefix}/mega/mega_thumbnail.avif`,
    events: [
      {
        "0": {
          name: "GUITAR WARS Registrations",
          description:
            "Showcase your guitar skills in this intense Western solo guitar competition! Perform an impromptu piece over a provided backing track and impress the judges.",
          rules: [
            "This is an ON-STAGE competition.",
            "Western Guitar Solo Playing Competition.",
            "Time Limit: 2.5 minutes (excluding sound check).",
            "Open registration for all participants.",
            "Participants must bring their own guitar.",
            "A live backing track (genre dependent upon the judge) will be provided for an impromptu performance.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${GUITAR_WARS_IMAGE}`,
          startTime: "2025-04-12 11:00:00",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSeIQkEYuvGveh2zJYLeBvaF45PW5oDhEgeeySRBkjvG_ddukg/viewform",
          studentCoordinators: [
            {
              name: "Sayani Lath Roy",
              phone: "9064060188",
            },
            {
              name: "Saikat",
              phone: "8509660368",
            },
          ],
        },
        "1": {
          name: "INSTRUMENTAL Registration",
          description:
            "Showcase your musical talent in this thrilling instrumental solo competition! Open to all individual participants, college or otherwise.",
          rules: [
            "This is an instrumental solo competition.",
            "Registration for INSTRUMENTAL is open to any individual, college or otherwise.",
            "This is an ON-STAGE competition.",
            "One participant with one set of instrument is allowed.",
            "Competitors are expected to bring their own instrument.",
            "Time limit is 5 minutes, inclusive of sound check.",
            "Marks will be deducted for exceeding the time limit.",
          ],
          prerequisites: [
            "Participants must reach 30 minutes prior to the event.",
          ],
          thumbnail: `${eventsImagesPath}${INSTRUMENTAL_IMAGE}`,
          startTime: "2025-04-12 12:30:00",
          formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSeQ8FPdEZ20zGh5kld-EibLjPe1tadMDBDBO7yqXr2LPZ5IJw/viewform",
          studentCoordinators: [
            {
              name: "Tiyasa",
              phone: "9903898874",
            },
            {
              name: "Manjina Bhattacharya",
              phone: "7029936889",
            },
          ],
        },
      },
    ],
  },
  final_night: {
    description: "13th April, 2025. OAT Jadavpur University.",
    thumbnail: `${tiaraAssetsPrefix}/mega/mega_thumbnail.avif`,
    events: [{}],
  },
};

export { categoriesList };
