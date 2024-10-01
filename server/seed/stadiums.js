const db = require('../db')
const Stadium = require('../models/stadium')

// connect to the db
db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
  const stadiums = [
    {
      name: 'Acrisure Stadium',
      imageUrl:
        'https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/20220711MTHeinzFieldAerials01-1657562902.jpg',
      location: 'Pittsburgh, PA',
      homeTeam: 'Pittsburgh Steelers',
      capacity: 68400,
      fieldSurface: 'Grass'
    },
    {
      name: 'Allegiant Stadium',
      imageUrl:
        'https://static.clubs.nfl.com/image/private/t_new_photo_album/raiders/drllv1iuqinjfvqrjb2j.jpg',
      location: 'Paradise, NV',
      homeTeam: 'Las Vegas Raiders',
      capacity: 65000,
      fieldSurface: 'Grass'
    },
    {
      name: 'Arrowhead Stadium',
      imageUrl:
        'https://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/arrow16_top.jpg',
      location: 'Kansas City, MO',
      homeTeam: 'Kansas City Chiefs',
      capacity: 76416,
      fieldSurface: 'Grass'
    },
    {
      name: 'AT&T Stadium',
      imageUrl:
        'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/denton/att-stadium-5201668_1280_FA6D2F43-5056-A348-3AB1AA462F23E0A1-fa6d2e9b5056a34_fa6d2fb0-5056-a348-3a347812dae831cc.jpg',
      location: 'Arlington, TX',
      homeTeam: 'Dallas Cowboys',
      capacity: 80000,
      fieldSurface: 'Field Turf'
    },
    {
      name: 'Bank of America Stadium',
      imageUrl:
        'https://d2j8c2rj2f9b78.cloudfront.net/uploads/poster-images/BofA-Stadium_TEST.jpg',
      location: 'Charlotte, NC',
      homeTeam: 'Carolina Panthers',
      capacity: 74867,
      fieldSurface: 'Grass'
    },
    {
      name: 'Ceasars Superdome',
      imageUrl:
        'https://trahanarchitects.com/wp-content/uploads/2020/09/SDNRP_190524_View5-Stadium-2.jpg',
      location: 'New Orleans, LA',
      homeTeam: 'New Orleans Saints',
      capacity: 74295,
      fieldSurface: 'Field Turf'
    },
    {
      name: 'Empower Field',
      imageUrl:
        'https://broncoswire.usatoday.com/wp-content/uploads/sites/68/2021/08/Broncos-Stadium-Rank.jpg?w=1000&h=600&crop=1',
      location: 'Denver CO',
      homeTeam: 'Denver Broncos',
      capacity: 76125,
      fieldSurface: 'Grass'
    },
    {
      name: 'FedEx Field',
      imageUrl:
        'https://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/fedex23950.jpg',
      location: 'Landover, MD',
      homeTeam: 'Washington Commanders',
      capacity: 79000,
      fieldSurface: 'Grass'
    },
    {
      name: 'First Energy Stadium',
      imageUrl:
        'https://static1.gensler.com/uploads/image/64878/project_FirstEnergy-Stadium_01_2000x_1600281948.jpg',
      location: 'Cleveland, OH',
      homeTeam: 'Cleveland Browns',
      capacity: 67895,
      fieldSurface: 'Grass'
    },
    {
      name: 'Ford Field',
      imageUrl:
        'https://static.wixstatic.com/media/d50ee7_90778d8072584f82a9d03f3b9ef1f345~mv2.jpeg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpeg',
      location: 'Detroit, MI',
      homeTeam: 'Detroit Lions',
      capacity: 65000,
      fieldSurface: 'Field Turf'
    },
    {
      name: 'Gillette Stadium',
      imageUrl:
        'https://assets2.cbsnewsstatic.com/hub/i/r/2021/09/15/aef750b4-bcc6-4cc8-85c6-276ead33f134/thumbnail/1200x630/ee683fd3daad10f1fffccc45a018e8ad/GettyImages-84778981.jpg',
      location: 'Foxborough, MA',
      homeTeam: 'New England Patriots',
      capacity: 65878,
      fieldSurface: 'Field Turf'
    },
    {
      name: 'Hard Rock Stadium',
      imageUrl:
        'https://www.hok.com/wp-content/uploads/2019/05/Hard-Rock-Stadium_Seating-Bowl-with-Canopy_1900-1600x1069.jpg',
      location: 'Miami Gardens, FL',
      homeTeam: 'Miami Dolphins',
      capacity: 65326,
      fieldSurface: 'Grass'
    },
    {
      name: 'Highmark Stadium',
      imageUrl:
        'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/buffalo-bills-stadium-1617129388.jpg',
      location: 'Orchard Park, NY',
      homeTeam: 'Buffalo Bills',
      capacity: 71608,
      fieldSurface: 'Field Turf'
    },
    {
      name: 'Lambeau Field',
      imageUrl:
        'https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/packers/hbldcp5kpoam8vt8c1ux',
      location: 'Green Bay, WI',
      homeTeam: 'Green Bay Packers',
      capacity: 81441,
      fieldSurface: 'Grass'
    },
    {
      name: 'Levi Stadium',
      imageUrl:
        'https://www.levisstadium.com/wp-content/uploads/2023/01/011822-Stadium-FB.jpg',
      location: 'Santa Clara, CA',
      homeTeam: 'San Francisco 49ers',
      capacity: 68500,
      fieldSurface: 'Grass'
    },
    {
      name: 'Lincoln Financial Field',
      imageUrl:
        'https://static2.gensler.com/uploads/image/64870/project_lincoln-financial-field_01_1417652046.jpg',
      location: 'Philadelphia, PA',
      homeTeam: 'Philadelphia Eagles',
      capacity: 67594,
      fieldSurface: 'Grass'
    },
    {
      name: 'Lucas Oil Stadium',
      imageUrl:
        'https://www.hksinc.com/wp-content/uploads/2018/10/LucasOil_01.jpg',
      location: 'Indianapolis, IN',
      homeTeam: 'Indianapolis Colts',
      capacity: 67000,
      fieldSurface: 'Field Turf'
    },
    {
      name: 'Lumen Field',
      imageUrl:
        'https://cdn.geekwire.com/wp-content/uploads/2020/11/40109761251_33ec56ca5b_k.jpeg',
      location: 'Seattle, WA',
      homeTeam: 'Seattle Seahawks',
      capacity: 68740,
      fieldSurface: 'Field Turf'
    },
    {
      name: 'M&T Bank Stadium',
      imageUrl:
        'https://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/mtbank16_top.jpg',
      location: 'Baltimore, MD',
      homeTeam: 'Baltimore Ravens',
      capacity: 71008,
      fieldSurface: 'Field Turf'
    },
    {
      name: 'Mercedes Benz Stadium',
      imageUrl:
        'https://www.stadiumsofprofootball.com/wp-content/uploads/2016/08/mbs21950.jpg',
      location: 'Atlanta, GA',
      homeTeam: 'Atlanta Falcons',
      capacity: 71000,
      fieldSurface: 'Field Turf'
    },
    {
      name: 'MetLife Stadium',
      imageUrl:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/8c/39/99/metlife-stadium.jpg?w=1200&h=-1&s=1',
      location: 'East Rutherford, NJ',
      homeTeam: 'New York Giants and New York Jets',
      capacity: 82500,
      fieldSurface: 'Field Turf'
    },
    {
      name: 'Nissan Stadium',
      imageUrl: 'https://www.getzippin.com/hubfs/Titans-1.jpeg',
      location: 'Nashville, TN',
      homeTeam: 'Tennessee Titans',
      capacity: 69143,
      fieldSurface: 'Grass'
    },
    {
      name: 'NRG Stadium',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/Reliantstadium.jpg',
      location: 'Houston, TX',
      homeTeam: 'Houston Texans',
      capacity: 71795,
      fieldSurface: 'Grass'
    },
    {
      name: 'Paycor Stadium',
      imageUrl:
        'https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/bengals/ipgu80xsvnmhwzxrsm5q',
      location: 'Cincinnati, OH',
      homeTeam: 'Cincinnati Bengals',
      capacity: 65515,
      fieldSurface: 'Field Turf'
    },
    {
      name: 'Raymond James Stadium',
      imageUrl:
        'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/tampabay/151227_EL_Bears_Bucs_08210_7cd82657-5056-a36a-08d8167afab403be.jpg',
      location: 'Tampa, FL',
      homeTeam: 'Tampa Bay Buccaneers',
      capacity: 65890,
      fieldSurface: 'Grass'
    },
    {
      name: 'SoFi Stadium',
      imageUrl:
        'https://sports.betmgm.com/en/blog/wp-content/uploads/2022/08/nfl-sofi-stadium-betmgm.jpg',
      location: 'Inglewood, CA',
      homeTeam: 'Los Angeles Chargers and Los Angeles Rams',
      capacity: 70000,
      fieldSurface: 'Field Turf'
    },
    {
      name: 'Soldier Field',
      imageUrl:
        'https://www.soldierfield.com/assets/img/L1120512-171205735c.jpg',
      location: 'Chicago, IL',
      homeTeam: 'Chicago Bears',
      capacity: 61500,
      fieldSurface: 'Grass'
    },
    {
      name: 'State Farm Stadium',
      imageUrl:
        'https://gray-kold-prod.cdn.arcpublishing.com/resizer/NRBPLyDNhvonmGJISNG3FGzoWw4=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/OM5NG3C4Q5FZJJ3EEKSQAXKLSA.jpg',
      location: 'Glendale, Arizona',
      homeTeam: 'Arizona Cardinals',
      capacity: 63400,
      fieldSurface: 'Grass'
    },
    {
      name: 'TIAA Bank Field',
      imageUrl:
        'https://media.bleacherreport.com/image/upload/v1668890072/gdggwx6rrq3jkwquvpq1.jpg',
      location: 'Jacksonville, FL',
      homeTeam: 'Jacksonville Jaguars',
      capacity: 67264,
      fieldSurface: 'Grass'
    },
    {
      name: 'US Bank Stadium',
      imageUrl:
        'https://img.apmcdn.org/d62c51a8154d401fd8aac5c4f5b8415709dddcd0/normal/253651-20160828-vikes01.jpg',
      location: 'Minneapolis, MN',
      homeTeam: 'Minnesota Vikings',
      capacity: 66200,
      fieldSurface: 'Field Turf'
    }
  ]

  await Stadium.insertMany(stadiums)
  console.log('Created the Stadiums')
}
const run = async () => {
  await main()
  db.close()
}

run()
