export default function loadEpisodes() {
  const episodes = [
    {
        "title": "Michael’s Last Dundies",
        "link": "2cMS9hG4lGvU871LQA3sYf"
    },
    {
        "title": "Training Day",
        "link": "3FFXJKJhl9SprB6FnHm31H"
    },
    {
        "title": "Garage Sale",
        "link": "71hrSmOTMA2dZ6AsBt2Mpn"
    },
    {
        "title": "Todd Packer",
        "link": "7jdk8IdaiR3XKOsjglfFzH"
    },
    {
        "title": "Threat Level Midnight with B.J. Novak",
        "link": "3oQtk02cZxHUV5PjFkfBcq"
    },
    {
        "title": "A Conversation with Billie Eilish",
        "link": "61Nu0hEYD0TnyquVi3mpdd"
    },
    {
        "title": "A Look Back on Casino Night with John Krasinski",
        "link": "3NTO4Koy1zW7QWDgrGO62m"
    },
    {
        "title": "Holiday Mailbag",
        "link": "02p9KmaIwbaJfiwYMSNKbV"
    },
    {
        "title": "PDA with Greg Daniels",
        "link": "1wE3J0eSf137X69qQmDAKx"
    },
    {
        "title": "The Search",
        "link": "3xFPmXh2oh3OX1V22QhSB5"
    },
    {
        "title": "The Seminar",
        "link": "6skrimTe7QNj1F3ELtxfwu"
    },
    {
        "title": "A Look Back on Company Picnic",
        "link": "4JMMSQdtMEE34rzv03hJJh"
    },
    {
        "title": "Ultimatum",
        "link": "6Br8T9C2EqBwptIjO44RPK"
    },
    {
        "title": "Classy Christmas, Part 2",
        "link": "6oAxiYaO562o3SX7WZpYaa"
    },
    {
        "title": "Classy Christmas, Part 1",
        "link": "0QBPOHzajFsEhByML457zp"
    },
    {
        "title": "China",
        "link": "6j3uyepWjLh0U8WPiVUl10"
    },
    {
        "title": "WUPHF.com with Aaron Shure",
        "link": "7qZPgx4UbGjA55DRYj1hU5"
    },
    {
        "title": "Viewing Party",
        "link": "7e5BL0SOkSaaXyHIbzKn0J"
    },
    {
        "title": "Christening",
        "link": "6n4F3QYp39BYBtFIWAsVTe"
    },
    {
        "title": "Costume Contest",
        "link": "38UuH6CRgdxRm70xloE4G5"
    },
    {
        "title": "The Sting with Craig Robinson",
        "link": "73EetlACh3iPzi65qijWrH"
    },
    {
        "title": "Sex Ed with Nancy Walls Carell",
        "link": "3SjKLb4OPYLxF4XedPFh3N"
    },
    {
        "title": "Andy's Play with Ed Helms",
        "link": "6Vn89KavRFAKuiNAtcOM0u"
    },
    {
        "title": "Counseling",
        "link": "67v18G9BcmQPNafX1vFQkf"
    },
    {
        "title": "A Look Back on Beach Games",
        "link": "0qwepRJG1k9lY70YTn8E49"
    },
    {
        "title": "Nepotism",
        "link": "44l4WmmReF4HnBWOXyJY3a"
    },
    {
        "title": "Whistleblower",
        "link": "2Th1E7Wpnld4aL0JN80jAh"
    },
    {
        "title": "The Chump",
        "link": "5OjPbDsIawMCmAcGefiol1"
    },
    {
        "title": "The Cover-Up",
        "link": "18pHL7rl8B4EhKGsUbu80c"
    },
    {
        "title": "Body Language",
        "link": "7ptOzBBVUqPGpaBrHHGUaS"
    },
    {
        "title": "Secretary's Day with Ellie Kemper",
        "link": "1OxMI00rQ7FadbkagDDHxj"
    },
    {
        "title": "Happy Hour",
        "link": "1XKlhW2mLXqC7nLOxHdg5a"
    },
    {
        "title": "New Leads",
        "link": "3iVh886L92OtmBUOBe3OOU"
    },
    {
        "title": "St. Patrick’s Day",
        "link": "2ui1tbjkcl7q6c2FzaNzYs"
    },
    {
        "title": "The Delivery, Pt 2 with Lee Kirk",
        "link": "66FVcl5dgQgiyDisBPakjl"
    },
    {
        "title": "The Delivery, Pt 1",
        "link": "3fUjhGoqbcQenMV9Ana8Fh"
    },
    {
        "title": "“The Office BFFs” Book Q&A",
        "link": "5pYOoi9qaI8hnb9SMlw0fH"
    },
    {
        "title": "Chapter 1 from “The Office BFFs” Audiobook",
        "link": "7AzaJsVSjA00obIWfWSpdL"
    },
    {
        "title": "The Manager and the Salesman",
        "link": "1iXM6Dug8Besy5RWPc0FjY"
    },
    {
        "title": "Sabre",
        "link": "1d0sLQo9mxirjwryt7X4Fi"
    },
    {
        "title": "The Banker",
        "link": "0lpgl1S3JBfLW5reOlBkAf"
    },
    {
        "title": "Secret Santa",
        "link": "3r65v7CfcVoifiLazY4lH7"
    },
    {
        "title": "Scott’s Tots with B.J. Novak",
        "link": "25rbfyqkxhJ61dKt5qXREG"
    },
    {
        "title": "Shareholder Meeting",
        "link": "4ZBFSr6CtylWLfObOo5jl7"
    },
    {
        "title": "Happy Spring Break and a Look Back on \"Chair Model\"",
        "link": "2xd9RyNwDxzHaXcVfQvbms"
    },
    {
        "title": "Murder",
        "link": "7IaIg4z64S9bdFUuwsyOQW"
    },
    {
        "title": "Double Date",
        "link": "47SkmKd85PYkNG86ugg2Dd"
    },
    {
        "title": "Koi Pond",
        "link": "0Jlz6iQcyrCPFypVymciY3"
    },
    {
        "title": "The Lover",
        "link": "3t4QDi4NVVcYPvxMiOtjmc"
    },
    {
        "title": "Mafia",
        "link": "1Qs5ExoxtkCxIAJbFTpcVP"
    },
    {
        "title": "Niagara, Pt 2",
        "link": "2TLHEx22AKrYfGGDaBL3j7"
    },
    {
        "title": "Niagara, Pt 1 with Greg Daniels",
        "link": "4kqJmPXRjhROsDFOofkWfc"
    },
    {
        "title": "The Promotion",
        "link": "0AVODJ1tgtfNl0asB8s3Yl"
    },
    {
        "title": "Interview with Mike Schur",
        "link": "2dqzJiyjRGddObnVQO6XIv"
    },
    {
        "title": "The Meeting",
        "link": "1160FMSpijYoeUE4V0IMTh"
    },
    {
        "title": "Gossip",
        "link": "3RFlxiDWVwdxtzyfQjdngk"
    },
    {
        "title": "Company Picnic",
        "link": "0wIxWmhkIrBB8I1YAhyAzp"
    },
    {
        "title": "Happy New Year & A Look Back on Traveling Salesman",
        "link": "32PJ6KRvM6MECRAhpz68h0"
    },
    {
        "title": "Happy Holidays and A Look Back on Christmas Party",
        "link": "1cCpuIiIEbudnQw8j6Zyo5"
    },
    {
        "title": "Cafe Disco",
        "link": "4Ld11Wd3uva21bNvN9ujJ6"
    },
    {
        "title": "Casual Friday with Brian Baumgartner",
        "link": "2f4Wok53idVKA7FOOoaeND"
    },
    {
        "title": "Broke",
        "link": "4ItlAcB1j6pQ5cwtKLVbGa"
    },
    {
        "title": "A Look Back on Diwali",
        "link": "3PloNtl4wzSMydZhhfKkcg"
    },
    {
        "title": "Heavy Competition",
        "link": "190j1pmCloBQ9Bkvy4tu8s"
    },
    {
        "title": "Michael Scott Paper Company",
        "link": "5HJnfZM8jIChtbBHDnrm3u"
    },
    {
        "title": "Dream Team",
        "link": "1UYhPyjReelwEYMvVYLuyp"
    },
    {
        "title": "Two Weeks",
        "link": "3NLChtotTKVcBbuQZCYMNa"
    },
    {
        "title": "New Boss",
        "link": "73QBFUKoJsa7KKQQHtQA8U"
    },
    {
        "title": "Golden Ticket with Rainn Wilson",
        "link": "7nElhg9YaqsV8bUtybDFlo"
    },
    {
        "title": "Blood Drive",
        "link": "0qLSx06SDSGraisd4khYdr"
    },
    {
        "title": "Lecture Circuit, Pt 2",
        "link": "4Tl5HCCJgkuouqIuVoaEEN"
    },
    {
        "title": "Lecture Circuit, Pt 1",
        "link": "0v9Cb5R4zYeFNGOL2ZRKww"
    },
    {
        "title": "Stress Relief, Pt 2",
        "link": "0k7d8d6M1IYZg9tm0Ra3ca"
    },
    {
        "title": "Stress Relief Pt 1",
        "link": "3XDJohIgyhnPZDnEVuzroV"
    },
    {
        "title": "Prince Family Paper",
        "link": "74xY8rf7hBB3AsJ2FuSRmZ"
    },
    {
        "title": "A Look Back on Conflict Resolution",
        "link": "2fEsSomp4qN8tANODAztBx"
    },
    {
        "title": "The Duel",
        "link": "5VJvVlO01Gu4trePsHYqlw"
    },
    {
        "title": "Moroccan Christmas",
        "link": "5w53Dpyp7v1DQ4TpaaQd8U"
    },
    {
        "title": "The Surplus",
        "link": "1gJG5DOxh4ApZv8PFxsktJ"
    },
    {
        "title": "A Look Back on Branch Closing",
        "link": "21cUi14dgHniZikuiFof1u"
    },
    {
        "title": "Frame Toby",
        "link": "4pe80HojGAO5Wh4zMdspdj"
    },
    {
        "title": "Business Trip with Rich Sommer",
        "link": "18tauv0yFRNEHGhVoBI6m8"
    },
    {
        "title": "Customer Survey with Stephen Merchant",
        "link": "4YQ22ETUOLqjtI9sjnV5te"
    },
    {
        "title": "Employee Transfer",
        "link": "2HUK5BIFxiUWZohXUAn4a1"
    },
    {
        "title": "Crime Aid",
        "link": "1qaKBonCf24dHUbNZuPdOt"
    },
    {
        "title": "Revisited with Carey Bennett",
        "link": "01T7Wy58XhPO5X5AyO6BEb"
    },
    {
        "title": "Baby Shower",
        "link": "1dZPynw6oa4JolBrhIn2sM"
    },
    {
        "title": "Business Ethics with Amy Ryan",
        "link": "2BIq3qu28pc7V3FTZC70uW"
    },
    {
        "title": "Weight Loss, Part 2",
        "link": "4gltC0CQoLrg6KNt6hlFGx"
    },
    {
        "title": "Weight Loss, Part 1",
        "link": "7vLjwfuZJSIXfwgNmeaEiL"
    },
    {
        "title": "A Look Back on Grief Counseling",
        "link": "4PyD60GcR5J8q4OmtMEmpg"
    },
    {
        "title": "Goodbye Toby, Part 2",
        "link": "5XLUUXm5YcdHlCEvqdip6Z"
    },
    {
        "title": "Bonus Episode: Monday Motivation",
        "link": "3TZrkNwWqC4TdZuthDv8uf"
    },
    {
        "title": "Goodbye Toby, Part 1",
        "link": "5aEO9PUX919qIl0YtHhn6W"
    },
    {
        "title": "Job Fair",
        "link": "4S2pm2pi4rRrGTF3SKiJTS"
    },
    {
        "title": "Did I Stutter?",
        "link": "1DA0Pj9qFcz2yXdUKf4YRc"
    },
    {
        "title": "Night Out",
        "link": "6RRREieF7G8MH4mfeGFK0t"
    },
    {
        "title": "Chair Model",
        "link": "6tIZZXzcnh4lN1M9Ij1fbV"
    },
    {
        "title": "Happy Spring Break and A Look Back on Booze Cruise with Greg Daniels",
        "link": "7DHAqhqLuM7MsJplaiMPrV"
    },
    {
        "title": "Dinner Party",
        "link": "0vPoglGsZ614fdv7AlEHSv"
    },
    {
        "title": "The Deposition",
        "link": "4Ai58UR7mI48nOenkabpng"
    },
    {
        "title": "Survivor Man",
        "link": "7cvh8YDetQD9WJaOEVyneR"
    },
    {
        "title": "Branch Wars",
        "link": "4Xo0PTL0SENCOnlfKyreQj"
    },
    {
        "title": "Local Ad",
        "link": "3v9GEMswQb6GRqg3ApOmBd"
    },
    {
        "title": "Revisited with Randall Einhorn",
        "link": "1mgbGaIGCgCYXLDrxIMSFR"
    },
    {
        "title": "Money Part 2",
        "link": "44RmbYmx3WssjzwWl2RAwc"
    },
    {
        "title": "Money Part 1",
        "link": "2JO03LIzqMlNDq6g3LU2nI"
    },
    {
        "title": "Launch Party Part 2",
        "link": "7zsR4uZCjt6sNnChVAMGMf"
    },
    {
        "title": "Launch Party Part 1",
        "link": "7vskvtxzud0DV1IEzov7Du"
    },
    {
        "title": "Dunder Mifflin Infinity Pt 2",
        "link": "2tBc6ae9oOks85Fvwvsedx"
    },
    {
        "title": "A New Years Message from your friends at The Office and Halloween with Creed Bratton",
        "link": "4pAESZYJpyNtFSqfazVF4p"
    },
    {
        "title": "Happy Holidays And A Look Back At An Office Christmas",
        "link": "39UbYSeXLJCTD4z1AGWfyk"
    },
    {
        "title": "Dunder Mifflin Infinity Pt 1",
        "link": "1jTnrF6GFYdtFBpbPIpzd3"
    },
    {
        "title": "Fun Run Pt 2",
        "link": "00W1GGnKSKGg5CMFwV4DWt"
    },
    {
        "title": "Fun Run Pt 1",
        "link": "1HOWo8LY1sDPCg7s8Ibuno"
    },
    {
        "title": "Revisited: Season 1",
        "link": "56VsgMRtIKBzZDn3MkFucr"
    },
    {
        "title": "The Job Part 2",
        "link": "2Akn4YeTEhnbLwMCCGzFTZ"
    },
    {
        "title": "The Job Part 1 w/ Paul Lieberstein",
        "link": "6W8ICnAf48bPT1cP11VeTi"
    },
    {
        "title": "Beach Games",
        "link": "48r3YpAe3chxNhqqEzDmGk"
    },
    {
        "title": "Women's Appreciation",
        "link": "6OuwcO5b0su3BIURTXsELn"
    },
    {
        "title": "Product Recall",
        "link": "0lp0eIXbS3BqbBiYw801xJ"
    },
    {
        "title": "Safety Training",
        "link": "5Va2VYTNpnC9QFsW0mRpSR"
    },
    {
        "title": "The Negotiation w/ David Denman",
        "link": "3xOeeDqhmDSNkhEnxm27h3"
    },
    {
        "title": "Cocktails",
        "link": "5bMqScAhW6YHLYlEJa7R2t"
    },
    {
        "title": "Business School",
        "link": "66J2Kcgx5uDqXJgUg9uWIX"
    },
    {
        "title": "Revisited w/ Dave Rogers",
        "link": "53BRlQsgvFpyjTkv4WHU1Q"
    },
    {
        "title": "Phyllis' Wedding w/ Ken Whittingham",
        "link": "18Gcm6ghSpwcpoNBEvS2Od"
    },
    {
        "title": "Ben Franklin",
        "link": "2DWiLQ78tYWxrJMf39UHrn"
    },
    {
        "title": "The Return w/ Ed Helms",
        "link": "5pLmetmRoL2EyO0tlPdyzn"
    },
    {
        "title": "Traveling Salesmen",
        "link": "2xVjkNmylkrw0hXkcC7UZz"
    },
    {
        "title": "Back From Vacation",
        "link": "1jLxXtCKBJTIQhJgA9Q6fV"
    },
    {
        "title": "A Benihana Christmas w/ Rashida Jones and Jen Celotta",
        "link": "42pSs9MqzEsMpV7PdVufcW"
    },
    {
        "title": "The Convict",
        "link": "4b74I4nCGRBIPxHq6E6SXe"
    },
    {
        "title": "The Merger",
        "link": "66Nbai5iRMVJCVFCtvEmHO"
    },
    {
        "title": "Casino Night Revisited w/ Ken Kwapis",
        "link": "1szA8XavfHUr8v3ZWTf8MR"
    },
    {
        "title": "Branch Closing w/ Charles Esten",
        "link": "2w730yUQ0G8ME57HecPvFh"
    },
    {
        "title": "Diwali w/ Mindy Kaling",
        "link": "0WQVLyEhV1z6UVLvxqyOHM"
    },
    {
        "title": "Initiation w/ B.J. Novak and Rainn Wilson",
        "link": "6vZ97UKMP9l3WLDDf9hfdV"
    },
    {
        "title": "Grief Counseling",
        "link": "2ZWrXGWw3nLmVxzHdNvtMO"
    },
    {
        "title": "The Coup",
        "link": "2r7ZpEkouLvt9nNAkCHjr1"
    },
    {
        "title": "The Convention",
        "link": "3OEMeIkbqdKV2ZxAVJGK7G"
    },
    {
        "title": "Gay Witch Hunt w/ Oscar Nuñez",
        "link": "7rngJBIJ8FsRQrTAzZ6BcO"
    },
    {
        "title": "Casino Night w/ John Krasinski",
        "link": "7FhFe5YM14VfhTIQDnqu4i"
    },
    {
        "title": "Conflict Resolution",
        "link": "5cZ6GkoqcpsNieiRivQ9LD"
    },
    {
        "title": "Drug Testing",
        "link": "51jRBzhbH0mIXnozkEYrNv"
    },
    {
        "title": "Michael's Birthday",
        "link": "1oKG5T0g0iKy5huIr3H1Zp"
    },
    {
        "title": "Take Your Daughter To Work Day",
        "link": "3KzPhR63EJ9wcICapZcwFL"
    },
    {
        "title": "Dwight's Speech",
        "link": "0rrqs43PoK3laV6Lh8xnaF"
    },
    {
        "title": "Valentines Day with Andy Buckley",
        "link": "2EssSRapO8gUhlB7O3AG1U"
    },
    {
        "title": "Boys and Girls",
        "link": "67Z0KoxGgS4GVwoJDWinyH"
    },
    {
        "title": "The Carpet",
        "link": "4pjWnWNnSOWu09iZmHWNUz"
    },
    {
        "title": "The Secret",
        "link": "4VCfC88QyQLIBa3PvbXSDh"
    },
    {
        "title": "The Injury",
        "link": "57nFdXzj5AEthsV1m6dIFX"
    },
    {
        "title": "Booze Cruise w/ Greg Daniels",
        "link": "72afXjx3DCoV6ktMqJldg7"
    },
    {
        "title": "Christmas Party",
        "link": "2jmgUEb8BX8U1ncUygtHp6"
    },
    {
        "title": "Email Surveillance w/ Ken Jeong",
        "link": "7HNYMAFdBZRsO5h2xpVGUD"
    },
    {
        "title": "Performance Review w/ Larry Wilmore",
        "link": "086C8FaPGm43us5Adi5Wmp"
    },
    {
        "title": "The Client w/ Melora Hardin",
        "link": "5X3zVFaffC3IfRHumScDip"
    },
    {
        "title": "The Fight",
        "link": "72S4mUjQtbexCVECSBbUC3"
    },
    {
        "title": "Halloween w/ Creed Bratton",
        "link": "4AlzqgTSI7uiOTW7iUlLJa"
    },
    {
        "title": "The Fire",
        "link": "1KZVrqBeeQ6TKTyzq6k7Uz"
    },
    {
        "title": "Happy New Year!",
        "link": "5PVgJRVJzabrrkEreR326P"
    },
    {
        "title": "Christmas Greetings!",
        "link": "2ilHJTGiF8uYLCSsZf7F4K"
    },
    {
        "title": "Office Olympics w/ Paul Feig",
        "link": "4uXgGoMPiAxQKNuC9m9i9c"
    },
    {
        "title": "Sexual Harassment",
        "link": "5Dc4NVK67uyzDRiZuK2Slo"
    },
    {
        "title": "The Dundies",
        "link": "0W2fIOtAWcty0GroICniIS"
    },
    {
        "title": "Happy Thanksgiving Week!",
        "link": "0WkP3akFs6lHKsZjrpHk9k"
    },
    {
        "title": "Hot Girl",
        "link": "5peJUXKM8sKun6SqChjm2Y"
    },
    {
        "title": "Basketball",
        "link": "6dfZeLcnKJSoTOJ2BpLxZ1"
    },
    {
        "title": "The Alliance with Phil Shea",
        "link": "3199vnsdgYJ19yPaf2ZYsx"
    },
    {
        "title": "Health Care with Rainn Wilson",
        "link": "5dm3kt1lWMHlsCFyBJoJ9v"
    },
    {
        "title": "Diversity Day",
        "link": "5MT71F2E1v1Kk8vnevyYnp"
    },
    {
        "title": "The Pilot",
        "link": "6TcrvDgs40fdsek9HcntVJ"
    }
]

  return episodes
}

/*

const titles = []
document.querySelectorAll('.bG5fSAAS6rRL8xxU5iyG').forEach(
    item => titles.push(item.innerText)
)

const links = []
document.querySelectorAll('.g5gZaZVzR0tGT4pK6iEU').forEach(
    item => {
        const linkArr = item.href.split('/')
        links.push(linkArr[linkArr.length - 1])
    }
)

const episodes = []

if(titles.length === links.length) {
  titles.forEach((item, index) => {
    episodes.push({ title: titles[index], link: links[index] })
  })
}

episodes


*/
