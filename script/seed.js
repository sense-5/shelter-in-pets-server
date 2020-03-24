'use strict'

const db = require('../server/db')
const {User, Dog, LikedDogs, ViewedDogs} = require('../server/db/models')
const users = [
  {
    firstName: 'Alta',
    lastName: 'Sinnett',
    email: 'asinnett0@nhs.uk',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Florencia',
    lastName: 'Secker',
    email: 'fsecker1@forbes.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Bren',
    lastName: 'Nudds',
    email: 'bnudds2@wiley.com',
    password: '12345',
    googleId: '12345',
    zipcode: '2152'
  },
  {
    firstName: 'Orbadiah',
    lastName: 'McGinlay',
    email: 'omcginlay3@ucoz.ru',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Galvan',
    lastName: 'Tesauro',
    email: 'gtesauro4@prnewswire.com',
    password: '12345',
    googleId: '12345',
    zipcode: '413244'
  },
  {
    firstName: 'Kirby',
    lastName: "O'Growgane",
    email: 'kogrowgane5@tiny.cc',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Red',
    lastName: 'Axcel',
    email: 'raxcel6@skyrock.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Lindsy',
    lastName: 'Hillock',
    email: 'lhillock7@odnoklassniki.ru',
    password: '12345',
    googleId: '12345',
    zipcode: '59680-000'
  },
  {
    firstName: 'Missy',
    lastName: 'Dimnage',
    email: 'mdimnage8@merriam-webster.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Kayley',
    lastName: 'Wingham',
    email: 'kwingham9@wikipedia.org',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Darn',
    lastName: 'Callinan',
    email: 'dcallinana@domainmarket.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Isabella',
    lastName: 'Winchurch',
    email: 'iwinchurchb@businessinsider.com',
    password: '12345',
    googleId: '12345',
    zipcode: '32-744'
  },
  {
    firstName: 'Ursuline',
    lastName: 'Elsley',
    email: 'uelsleyc@intel.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Sheri',
    lastName: 'Darling',
    email: 'sdarlingd@shop-pro.jp',
    password: '12345',
    googleId: '12345',
    zipcode: '3212'
  },
  {
    firstName: 'Samaria',
    lastName: 'Coram',
    email: 'scorame@twitpic.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Ryley',
    lastName: 'Bradneck',
    email: 'rbradneckf@cbslocal.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Valma',
    lastName: 'Staton',
    email: 'vstatong@freewebs.com',
    password: '12345',
    googleId: '12345',
    zipcode: '606488'
  },
  {
    firstName: 'Boonie',
    lastName: 'Todd',
    email: 'btoddh@weather.com',
    password: '12345',
    googleId: '12345',
    zipcode: '303461'
  },
  {
    firstName: 'Clarey',
    lastName: 'Bilovus',
    email: 'cbilovusi@ning.com',
    password: '12345',
    googleId: '12345',
    zipcode: '2680-005'
  },
  {
    firstName: 'Bondon',
    lastName: 'Pretswell',
    email: 'bpretswellj@sfgate.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Crawford',
    lastName: 'Nardoni',
    email: 'cnardonik@rambler.ru',
    password: '12345',
    googleId: '12345',
    zipcode: '4503'
  },
  {
    firstName: 'Savina',
    lastName: "O'Cahey",
    email: 'socaheyl@biglobe.ne.jp',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Venus',
    lastName: 'Muir',
    email: 'vmuirm@irs.gov',
    password: '12345',
    googleId: '12345',
    zipcode: '8708'
  },
  {
    firstName: 'Dolph',
    lastName: 'Trahearn',
    email: 'dtrahearnn@yelp.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Franchot',
    lastName: 'Barbe',
    email: 'fbarbeo@sphinn.com',
    password: '12345',
    googleId: '12345',
    zipcode: '416 70'
  },
  {
    firstName: 'Tulley',
    lastName: 'Misselbrook',
    email: 'tmisselbrookp@cargocollective.com',
    password: '12345',
    googleId: '12345',
    zipcode: 'G6B'
  },
  {
    firstName: 'Beulah',
    lastName: 'Alben',
    email: 'balbenq@ox.ac.uk',
    password: '12345',
    googleId: '12345',
    zipcode: '10807'
  },
  {
    firstName: 'Nealon',
    lastName: 'Chessman',
    email: 'nchessmanr@sakura.ne.jp',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Egan',
    lastName: 'Chicchetto',
    email: 'echicchettos@free.fr',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Earl',
    lastName: 'Lassells',
    email: 'elassellst@nydailynews.com',
    password: '12345',
    googleId: '12345',
    zipcode: '7505'
  },
  {
    firstName: 'Kelila',
    lastName: 'Swidenbank',
    email: 'kswidenbanku@parallels.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Brendon',
    lastName: 'Breming',
    email: 'bbremingv@yahoo.co.jp',
    password: '12345',
    googleId: '12345',
    zipcode: '391625'
  },
  {
    firstName: 'Skye',
    lastName: 'Headrick',
    email: 'sheadrickw@sina.com.cn',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Daniella',
    lastName: 'Saul',
    email: 'dsaulx@flavors.me',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Ermengarde',
    lastName: 'Ragless',
    email: 'eraglessy@facebook.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Denis',
    lastName: 'Cavendish',
    email: 'dcavendishz@nba.com',
    password: '12345',
    googleId: '12345',
    zipcode: '249432'
  },
  {
    firstName: 'Christyna',
    lastName: 'Edmonstone',
    email: 'cedmonstone10@harvard.edu',
    password: '12345',
    googleId: '12345',
    zipcode: '6696'
  },
  {
    firstName: 'Valentine',
    lastName: 'Volet',
    email: 'vvolet11@google.pl',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Urson',
    lastName: 'Bastone',
    email: 'ubastone12@boston.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Danyelle',
    lastName: 'Goodread',
    email: 'dgoodread13@mtv.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Gardie',
    lastName: 'Fleisch',
    email: 'gfleisch14@whitehouse.gov',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Eartha',
    lastName: 'Costerd',
    email: 'ecosterd15@vistaprint.com',
    password: '12345',
    googleId: '12345',
    zipcode: '3303'
  },
  {
    firstName: 'Padraig',
    lastName: 'Titmus',
    email: 'ptitmus16@addtoany.com',
    password: '12345',
    googleId: '12345',
    zipcode: '10214'
  },
  {
    firstName: 'Valli',
    lastName: 'Sollett',
    email: 'vsollett17@ebay.com',
    password: '12345',
    googleId: '12345',
    zipcode: '55540-000'
  },
  {
    firstName: 'Nicolina',
    lastName: 'Ettles',
    email: 'nettles18@mtv.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Allie',
    lastName: 'Forestall',
    email: 'aforestall19@ebay.com',
    password: '12345',
    googleId: '12345',
    zipcode: '10370'
  },
  {
    firstName: 'Forster',
    lastName: 'Crutch',
    email: 'fcrutch1a@theatlantic.com',
    password: '12345',
    googleId: '12345',
    zipcode: '93-154'
  },
  {
    firstName: 'Odele',
    lastName: 'Billings',
    email: 'obillings1b@mit.edu',
    password: '12345',
    googleId: '12345',
    zipcode: '45957 CEDEX 9'
  },
  {
    firstName: 'Cornelius',
    lastName: 'Younghusband',
    email: 'cyounghusband1c@163.com',
    password: '12345',
    googleId: '12345',
    zipcode: 'D17'
  },
  {
    firstName: 'Vinny',
    lastName: 'Baalham',
    email: 'vbaalham1d@virginia.edu',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Cordelia',
    lastName: 'Kippins',
    email: 'ckippins1e@nhs.uk',
    password: '12345',
    googleId: '12345',
    zipcode: '606525'
  },
  {
    firstName: 'Imogene',
    lastName: 'Pulver',
    email: 'ipulver1f@blogs.com',
    password: '12345',
    googleId: '12345',
    zipcode: '51130'
  },
  {
    firstName: 'Lynelle',
    lastName: 'Cuberley',
    email: 'lcuberley1g@freewebs.com',
    password: '12345',
    googleId: '12345',
    zipcode: '65110-000'
  },
  {
    firstName: 'Gillian',
    lastName: 'Storms',
    email: 'gstorms1h@etsy.com',
    password: '12345',
    googleId: '12345',
    zipcode: '30625'
  },
  {
    firstName: 'Duffie',
    lastName: 'Olding',
    email: 'dolding1i@360.cn',
    password: '12345',
    googleId: '12345',
    zipcode: '76200-000'
  },
  {
    firstName: 'Marnia',
    lastName: 'Poyzer',
    email: 'mpoyzer1j@mapy.cz',
    password: '12345',
    googleId: '12345',
    zipcode: '347674'
  },
  {
    firstName: 'Pepe',
    lastName: 'Scinelli',
    email: 'pscinelli1k@psu.edu',
    password: '12345',
    googleId: '12345',
    zipcode: '4615-092'
  },
  {
    firstName: 'Kissiah',
    lastName: 'Cade',
    email: 'kcade1l@wunderground.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Amerigo',
    lastName: 'Arnowitz',
    email: 'aarnowitz1m@ucoz.ru',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Sidonia',
    lastName: 'Redparth',
    email: 'sredparth1n@4shared.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Darryl',
    lastName: 'Cotterel',
    email: 'dcotterel1o@discovery.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Wadsworth',
    lastName: 'Martell',
    email: 'wmartell1p@pagesperso-orange.fr',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Giana',
    lastName: 'MacArthur',
    email: 'gmacarthur1q@ow.ly',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Constancy',
    lastName: 'Mishow',
    email: 'cmishow1r@baidu.com',
    password: '12345',
    googleId: '12345',
    zipcode: '3270'
  },
  {
    firstName: 'Heda',
    lastName: 'Joint',
    email: 'hjoint1s@webnode.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Barnaby',
    lastName: 'Finnis',
    email: 'bfinnis1t@hp.com',
    password: '12345',
    googleId: '12345',
    zipcode: '2818'
  },
  {
    firstName: 'Anett',
    lastName: 'McWaters',
    email: 'amcwaters1u@uol.com.br',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Gerrie',
    lastName: 'Bosanko',
    email: 'gbosanko1v@ning.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'James',
    lastName: 'Rosenfelt',
    email: 'jrosenfelt1w@tinypic.com',
    password: '12345',
    googleId: '12345',
    zipcode: '98-360'
  },
  {
    firstName: 'Hedy',
    lastName: 'Cauderlie',
    email: 'hcauderlie1x@cdbaby.com',
    password: '12345',
    googleId: '12345',
    zipcode: '26110'
  },
  {
    firstName: 'Lethia',
    lastName: 'Dobby',
    email: 'ldobby1y@baidu.com',
    password: '12345',
    googleId: '12345',
    zipcode: '3261'
  },
  {
    firstName: 'Martie',
    lastName: 'Dominici',
    email: 'mdominici1z@ihg.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Izak',
    lastName: 'Kenninghan',
    email: 'ikenninghan20@posterous.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Alfie',
    lastName: 'Bayston',
    email: 'abayston21@sphinn.com',
    password: '12345',
    googleId: '12345',
    zipcode: '1024'
  },
  {
    firstName: 'Katine',
    lastName: 'Sporgeon',
    email: 'ksporgeon22@buzzfeed.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Sissie',
    lastName: 'Steele',
    email: 'ssteele23@xinhuanet.com',
    password: '12345',
    googleId: '12345',
    zipcode: '26070'
  },
  {
    firstName: 'Rockey',
    lastName: 'Brastead',
    email: 'rbrastead24@hugedomains.com',
    password: '12345',
    googleId: '12345',
    zipcode: '13730-000'
  },
  {
    firstName: 'Alford',
    lastName: 'McLleese',
    email: 'amclleese25@google.ca',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Terri',
    lastName: 'Haughin',
    email: 'thaughin26@icq.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Ermengarde',
    lastName: 'Pratchett',
    email: 'epratchett27@amazon.co.uk',
    password: '12345',
    googleId: '12345',
    zipcode: '95600'
  },
  {
    firstName: 'Britney',
    lastName: 'McCrystal',
    email: 'bmccrystal28@salon.com',
    password: '12345',
    googleId: '12345',
    zipcode: '03104 CEDEX'
  },
  {
    firstName: 'Meredeth',
    lastName: 'Grundwater',
    email: 'mgrundwater29@dailymotion.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Gus',
    lastName: 'Barfitt',
    email: 'gbarfitt2a@creativecommons.org',
    password: '12345',
    googleId: '12345',
    zipcode: '357839'
  },
  {
    firstName: 'Truda',
    lastName: 'Tarborn',
    email: 'ttarborn2b@netscape.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Deeanne',
    lastName: 'Blakeley',
    email: 'dblakeley2c@blogger.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Iris',
    lastName: 'Gennings',
    email: 'igennings2d@feedburner.com',
    password: '12345',
    googleId: '12345',
    zipcode: '91560'
  },
  {
    firstName: 'Carrol',
    lastName: 'Bonaire',
    email: 'cbonaire2e@gravatar.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Nickola',
    lastName: 'Brower',
    email: 'nbrower2f@hibu.com',
    password: '12345',
    googleId: '12345',
    zipcode: '793 26'
  },
  {
    firstName: 'Hanny',
    lastName: 'Swancock',
    email: 'hswancock2g@wix.com',
    password: '12345',
    googleId: '12345',
    zipcode: '2826'
  },
  {
    firstName: 'Jerrilyn',
    lastName: 'Greener',
    email: 'jgreener2h@squarespace.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Barrie',
    lastName: 'Halbord',
    email: 'bhalbord2i@cloudflare.com',
    password: '12345',
    googleId: '12345',
    zipcode: '32-865'
  },
  {
    firstName: 'Olia',
    lastName: 'Blinde',
    email: 'oblinde2j@ifeng.com',
    password: '12345',
    googleId: '12345',
    zipcode: '353664'
  },
  {
    firstName: 'Ricky',
    lastName: 'McGebenay',
    email: 'rmcgebenay2k@ow.ly',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Ardelis',
    lastName: 'Lonsbrough',
    email: 'alonsbrough2l@linkedin.com',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Shepard',
    lastName: 'Shadbolt',
    email: 'sshadbolt2m@umn.edu',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Axe',
    lastName: 'McGown',
    email: 'amcgown2n@guardian.co.uk',
    password: '12345',
    googleId: '12345',
    zipcode: '18680-000'
  },
  {
    firstName: 'Heinrick',
    lastName: 'Arnaudot',
    email: 'harnaudot2o@state.gov',
    password: '12345',
    googleId: '12345'
  },
  {
    firstName: 'Ximenes',
    lastName: 'Sutterfield',
    email: 'xsutterfield2p@wikispaces.com',
    password: '12345',
    googleId: '12345',
    zipcode: '9600-213'
  },
  {
    firstName: 'Archibald',
    lastName: 'Moohan',
    email: 'amoohan2q@un.org',
    password: '12345',
    googleId: '12345',
    zipcode: '97340-000'
  },
  {
    firstName: 'Esteban',
    lastName: 'Galbreth',
    email: 'egalbreth2r@woothemes.com',
    password: '12345',
    googleId: '12345',
    zipcode: '12-160'
  }
]

async function seed() {
  try {
    await db.sync({force: true})
    console.log('db synced!')
    await Promise.all(
      users.map(element => {
        return User.create(element)
      })
    )
  } catch (err) {
    console.error(err)
  }
}
// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// we export the seed function for testing purposes (see `./seed.spec.js`)

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
