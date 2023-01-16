# ZUJ Backend Coding Test

## Description
This project serves a purpose of fetching sports fixtures and lives-core data from other 3rd party providers. However, in this case, due to time constraint. I chose LiveScore as the only provider for this project.

## Design Decisions
- I picked `NestJS` over other frameworks as this framework currently is one of the most sophisticated one with very strong community supports with TypeScript Language supported natively. It also can be effortlessly integrated/migrated into micro-services architecture.
- Based on the 2 scenarios provided in the test requirements, I felt like it can do a very simple database design as well as only 1 API endpoint is needed to view fixtures (by default, it will return today's fixtures if no date parameter is provided).

## Notes on Improvements
- This project needs a lot of improvements:
  - Better Unit Test Cases Coverage
  - Better Database Design for Additional Providers
  - I only showed fixtures but not with the score, so another endpoint for live score is needed but I ran out of time.

## Pre-Requisites
- You will need MySQL installed either locally or via provided `docker-compose` file.
- Node.js version >= 14 is solely recommended.
- You can also use my `.env` below.

```dotenv
PORT=3000
API_KEY={{Provided Separately}}
API_SECRET={{Provided Separately}}
HOST=127.0.0.1
PORT_DB=3306
DATABASE=zuj_coding_test
USER=vuminhkhoi1802
PASSWORD=khoi1802
LIVE_SCORE_URL=https://livescore-api.com/api-client/fixtures/matches.json
```

## Installation

- For testing purpose, I purposefully created a user with full privileges. But this is not recommended at all for an actual product as this is a risky action.

```mysql
CREATE USER 'vuminhkhoi1802'@'localhost'IDENTIFIED WITH mysql_native_password BY 'khoi1802';
GRANT ALL PRIVILEGES ON *.* TO 'vuminhkhoi1802'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES ;
```

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Document
- Please go to http://localhost:3000/docs#

Sample API Response:

[GET]/api/fixtures - 200 Response

```json
[
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "00:30:00",
    "competitionId": 282,
    "competitionName": "Premier League",
    "homeTeam": {
      "name": "Waterhouse FC",
      "id": 2762
    },
    "awayTeam": {
      "name": "Tivoli Gardens",
      "id": 2661
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "00:30:00",
    "competitionId": 370,
    "competitionName": "Club Friendlies",
    "homeTeam": {
      "name": "CD Nacional",
      "id": 1746
    },
    "awayTeam": {
      "name": "Belgrano Cordoba",
      "id": 451
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "03:05:00",
    "competitionId": 45,
    "competitionName": "Liga MX",
    "homeTeam": {
      "name": "Leon",
      "id": 769
    },
    "awayTeam": {
      "name": "Necaxa",
      "id": 765
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "11:00:00",
    "competitionId": 370,
    "competitionName": "Club Friendlies",
    "homeTeam": {
      "name": "Zemplin Michalovce",
      "id": 1186
    },
    "awayTeam": {
      "name": "Kazincbarcikai SC",
      "id": 3074
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "11:30:00",
    "competitionId": 347,
    "competitionName": "Cup",
    "homeTeam": {
      "name": "Sivasspor",
      "id": 867
    },
    "awayTeam": {
      "name": "Karacabey Birlik Spor A.S",
      "id": 3685
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "12:00:00",
    "competitionId": 131,
    "competitionName": "Cup",
    "homeTeam": {
      "name": "KS Lushnja",
      "id": 5088
    },
    "awayTeam": {
      "name": "KF Tirana",
      "id": 2001
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "12:00:00",
    "competitionId": 131,
    "competitionName": "Cup",
    "homeTeam": {
      "name": "Korabi Peshkopi",
      "id": 5411
    },
    "awayTeam": {
      "name": "Partizan",
      "id": 1995
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "12:00:00",
    "competitionId": 131,
    "competitionName": "Cup",
    "homeTeam": {
      "name": "Bylis",
      "id": 4406
    },
    "awayTeam": {
      "name": "Vllaznia Shkodër",
      "id": 4407
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "12:00:00",
    "competitionId": 131,
    "competitionName": "Cup",
    "homeTeam": {
      "name": "Dinamo Tirana",
      "id": 5417
    },
    "awayTeam": {
      "name": "Kastrioti",
      "id": 1463
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "12:00:00",
    "competitionId": 131,
    "competitionName": "Cup",
    "homeTeam": {
      "name": "Tomori Berat",
      "id": 6537
    },
    "awayTeam": {
      "name": "Laci",
      "id": 1996
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "12:00:00",
    "competitionId": 370,
    "competitionName": "Club Friendlies",
    "homeTeam": {
      "name": "1.SK Prostejov",
      "id": 1467
    },
    "awayTeam": {
      "name": "Dukla Banska Bystrica",
      "id": 4568
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "12:35:00",
    "competitionId": 314,
    "competitionName": "Division 1",
    "homeTeam": {
      "name": "Al Arabi Unaizah",
      "id": 7526
    },
    "awayTeam": {
      "name": "Al Qadasiya",
      "id": 127
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "12:55:00",
    "competitionId": 314,
    "competitionName": "Division 1",
    "homeTeam": {
      "name": "Ohod",
      "id": 126
    },
    "awayTeam": {
      "name": "Hajer Club",
      "id": 3359
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:00:00",
    "competitionId": 80,
    "competitionName": "Premier League",
    "homeTeam": {
      "name": "Singida Big Stars",
      "id": 7507
    },
    "awayTeam": {
      "name": "Kagera Sugar",
      "id": 2940
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:00:00",
    "competitionId": 42,
    "competitionName": "Ligue I",
    "homeTeam": {
      "name": "CA Bizertin",
      "id": 393
    },
    "awayTeam": {
      "name": "Chebba",
      "id": 4778
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:00:00",
    "competitionId": 42,
    "competitionName": "Ligue I",
    "homeTeam": {
      "name": "Hammam-Sousse",
      "id": 6713
    },
    "awayTeam": {
      "name": "Stade Tunisien",
      "id": 1029
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:00:00",
    "competitionId": 42,
    "competitionName": "Ligue I",
    "homeTeam": {
      "name": "Us Tataouine",
      "id": 2188
    },
    "awayTeam": {
      "name": "Etoile du Sahel",
      "id": 397
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:00:00",
    "competitionId": 42,
    "competitionName": "Ligue I",
    "homeTeam": {
      "name": "CS Sfaxien",
      "id": 1287
    },
    "awayTeam": {
      "name": "Esperance",
      "id": 1031
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:00:00",
    "competitionId": 370,
    "competitionName": "Club Friendlies",
    "homeTeam": {
      "name": "Cherno More Varna",
      "id": 1111
    },
    "awayTeam": {
      "name": "CSKA 1948",
      "id": 2568
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:00:00",
    "competitionId": 370,
    "competitionName": "Club Friendlies",
    "homeTeam": {
      "name": "LASK",
      "id": 653
    },
    "awayTeam": {
      "name": "Kapfenberger SV",
      "id": 370
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:00:00",
    "competitionId": 370,
    "competitionName": "Club Friendlies",
    "homeTeam": {
      "name": "Krylya Sovetov Samara",
      "id": 1195
    },
    "awayTeam": {
      "name": "Sumqayit",
      "id": 417
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:00:00",
    "competitionId": 370,
    "competitionName": "Club Friendlies",
    "homeTeam": {
      "name": "Zalaegerszegi TE",
      "id": 1333
    },
    "awayTeam": {
      "name": "Ruzomberok",
      "id": 1182
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:25:00",
    "competitionId": 305,
    "competitionName": "Qatar Stars League",
    "homeTeam": {
      "name": "Al Rayyan SC",
      "id": 3662
    },
    "awayTeam": {
      "name": "Al Wakrah",
      "id": 3814
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:25:00",
    "competitionId": 305,
    "competitionName": "Qatar Stars League",
    "homeTeam": {
      "name": "Al-Sailiya SC",
      "id": 3094
    },
    "awayTeam": {
      "name": "Al Markhiya",
      "id": 3812
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:30:00",
    "competitionId": 327,
    "competitionName": "1st Division",
    "homeTeam": {
      "name": "Cape Town All Stars",
      "id": 6571
    },
    "awayTeam": {
      "name": "Black Leopards FC",
      "id": 2163
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:30:00",
    "competitionId": 327,
    "competitionName": "1st Division",
    "homeTeam": {
      "name": "Casric Stars",
      "id": 7554
    },
    "awayTeam": {
      "name": "Ajax Cape Town",
      "id": 1243
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:30:00",
    "competitionId": 327,
    "competitionName": "1st Division",
    "homeTeam": {
      "name": "JDR Stars",
      "id": 5298
    },
    "awayTeam": {
      "name": "Baroka FC",
      "id": 1036
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "13:30:00",
    "competitionId": 327,
    "competitionName": "1st Division",
    "homeTeam": {
      "name": "Tshakhuma Madzivhadila FC",
      "id": 3937
    },
    "awayTeam": {
      "name": "University Of Pretoria Fc",
      "id": 5270
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "14:00:00",
    "competitionId": 370,
    "competitionName": "Club Friendlies",
    "homeTeam": {
      "name": "Amstetten",
      "id": 2027
    },
    "awayTeam": {
      "name": "Hartberg",
      "id": 367
    }
  },
  {
    "fixtureDate": "2023-01-17",
    "matchTime": "14:30:00",
    "competitionId": 347,
    "competitionName": "Cup",
    "homeTeam": {
      "name": "Antalyaspor",
      "id": 1272
    },
    "awayTeam": {
      "name": "Kayserispor",
      "id": 1403
    }
  }
]
```

## Third Party API Reference
[LiveScore](https://live-score-api.com/documentation)

## License

Nest is [MIT licensed](LICENSE).
