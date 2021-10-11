import {
  FETCH_ALL_NEWS,
  WEB_LINK,
  COUNTRY_CHOOSE,
  OVERLAY_OPEN
} from "../Action/types";

const initialState = {
  NextNews: [
    {
      source: {
        id: null,
        name: "Lifehacker.com"
      },
      author: "Lisa Rowan on Two Cents, shared by Lisa Rowan to Lifehacker",
      title: "Invest in Crypto Stocks Instead of Actual Cryptocurrency",
      description:
        "Just a few short years ago, buying up cryptocurrency was all the rage. In theory, you could spend a little on Bitcoin or one of the other popular cryptocurrencies, and cash out with an astonishing rate of return.",
      url:
        "https://twocents.lifehacker.com/invest-in-crypto-stocks-instead-of-actual-cryptocurrenc-1840264223",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/valka9d65wlgqgm18cis.jpg",
      publishedAt: "2019-12-06T16:00:00Z",
      content:
        "Just a few short years ago, buying up cryptocurrency was all the rage. In theory, you could spend a little on Bitcoin or one of the other popular cryptocurrencies, and cash out with an astonishing rate of return. \r\nBut as you might have noticed, Bitcoin and s… [+3033 chars]"
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com"
      },
      author: "Whitney Kimball",
      title:
        "Bitcoin's Carbon Footprint May Not Be As Massive As Previously Estimated",
      description:
        "Whether Bitcoin, an immaterial resource derived from hype and blind faith, will vanish into thin air is uncertain, but it will leave behind a dark cloud of carbon pollution. Cryptocurrency mining facilities use so much energy that the government of Abkhazia c…",
      url:
        "https://gizmodo.com/bitcoins-carbon-footprint-may-not-be-as-massive-as-prev-1839965090",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/myb2apjmnqlbszfzxomk.jpg",
      publishedAt: "2019-11-20T20:05:00Z",
      content:
        "Whether Bitcoin, an immaterial resource derived from hype and blind faith, will vanish into thin air is uncertain, but it will leave behind a dark cloud of carbon pollution. Cryptocurrency mining facilities use so much energy that the government of Abkhazia c… [+3402 chars]"
    },
    {
      source: {
        id: "the-new-york-times",
        name: "The New York Times"
      },
      author: "Victoria Shannon and Hiroko Masuike",
      title: "Trump Letter, F.B.I., Bitcoin: Your Tuesday Evening Briefing",
      description: "Here’s what you need to know at the end of the day.",
      url:
        "https://www.nytimes.com/2019/12/17/briefing/trump-letter-fbi-bitcoin.html",
      urlToImage:
        "https://static01.nyt.com/images/2019/12/17/briefing/121719evening-briefing-promo/121719evening-briefing-promo-facebookJumbo.jpg",
      publishedAt: "2019-12-17T23:36:21Z",
      content:
        "4. A big step toward avoiding a government shutdown. \r\nThe House approved two spending packages allocating $1.4 trillion for the federal budget, designating priorities like raising the tobacco purchase age to 21.\r\nThe measures were designed to have enough goo… [+641 chars]"
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch"
      },
      author: "Josh Constine",
      title: "Alchemy is secretly fixing blockchain’s node nightmare",
      description:
        "The top cryptocurrency companies have quietly begun to outsource their infrastructure problems to a tiny stealth startup. It’s called Alchemy. Today it’s making the big public reveal of it’s technology that could help developers finally build the killer use c…",
      url: "http://techcrunch.com/2019/12/17/alchemy-blockchain/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2019/12/Alchemy-Blockchain.png?w=709",
      publishedAt: "2019-12-17T12:00:08Z",
      content:
        "The top cryptocurrency companies have quietly begun to outsource their infrastructure problems to a tiny stealth startup. It’s called Alchemy. Today it’s making the big public reveal of it’s technology that could help developers finally build the killer use c… [+3366 chars]"
    },
    {
      source: {
        id: null,
        name: "Slashdot.org"
      },
      author: "EditorDavid",
      title:
        "Price of Bitcoin Plummets Below 'Psychological' $7,000 Level After China Promises Crackdown",
      description:
        'Friday Forbes wrote that price of Bitcoin had dropped 10% over the previous 24 hours, dipping below the "psychological" $7,000 level. That\'s after starting the week at over $8,000, and less than a month after it rose to $10,000. Apparently cryptocurrencies ha…',
      url:
        "https://news.slashdot.org/story/19/11/25/0154259/price-of-bitcoin-plummets-below-psychological-7000-level-after-china-promises-crackdown",
      urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      publishedAt: "2019-11-25T03:04:00Z",
      content:
        "As well as the May bitcoin halving, which will see the number of bitcoin rewarded to miners cut by half from 12.5 bitcoin to 6.25 bitcoin, bitcoin investors are hopeful next year will bring an increase in the number of bitcoin retail investors and people usin… [+882 chars]"
    }
  ],
  WebViewLink: "",
  Country: "Country",
  OverLay: false,
  SavedData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_NEWS:
      return {
        ...state,
        NextNews: action.payload
      };

    case WEB_LINK:
      return {
        ...state,
        WebViewLink: action.payload
      };

    case OVERLAY_OPEN:
      return {
        ...state,
        OverLay: !state.OverLay
      };

    case COUNTRY_CHOOSE:
      return {
        ...state,
        Country: action.payload
      };

    default:
      return state;
  }
}
