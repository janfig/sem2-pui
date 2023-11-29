import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieMockService {

  movieList!: Movie[]

  constructor() {
    this.movieList = mockMovies
  }

  getMovies(){
    return this. movieList
  }

  getMovieById(id: number){
    return this.movieList.find(value => value.id == id)
  }
}



export interface Movie {
  id?: number,
  name: string,
  director: Director,
  country: string,
  genre: string,
  premiere: string,
  awards: string | null,
  rating: number,
  numberOfRatings: number,
  trailer: string,
  description: string,
  actors: Actor[],
  gallery: Gallery
}

export interface Actor {
  name: string,
  surname: string,
  role: string
}

export interface Director {
  name: string,
  surname: string,
}

export interface Gallery {
  url: string,
  altText: string
}

const mockMovies: Movie[] = [
  {
    "id": 1,
    "name": "Do zmiany",
    "director": {
      "name": "Cyryl",
      "surname": "Florek"
    },
    "country": "Mongolia",
    "genre": "Horror",
    "premiere": "1999-12-23",
    "awards": "Brak",
    "rating": 2.7,
    "numberOfRatings": 1966506,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Lilla",
        "surname": "Kędziora",
        "role": "Naomi Pouros"
      },
      {
        "name": "Nazary",
        "surname": "Głogowski",
        "role": "Marion Klocko"
      },
      {
        "name": "Zoe",
        "surname": "Piórkowski",
        "role": "Cecelia Hagenes"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "eiusmod voluptate minim cupidatat consequat aliquip nulla magna voluptate"
    }
  },
  {
    "id": 2,
    "name": "Do zmiany",
    "director": {
      "name": "Korneli",
      "surname": "Andrzejczak"
    },
    "country": "Thailand",
    "genre": "Akcja",
    "premiere": "2010-02-17",
    "awards": "Saturn",
    "rating": 4.86,
    "numberOfRatings": 9664378,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Roger",
        "surname": "Tracz",
        "role": "Sheldon Schimmel"
      },
      {
        "name": "Waleria",
        "surname": "Jędrzejewski",
        "role": "Christina Ernser"
      },
      {
        "name": "Renata",
        "surname": "Tomczak",
        "role": "Ian Medhurst"
      },
      {
        "name": "Jerzy",
        "surname": "Szulc",
        "role": "Iris Maggio"
      },
      {
        "name": "Helena",
        "surname": "Maliszewski",
        "role": "Ruben Rutherford"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "enim incididunt tempor dolor culpa incididunt duis elit culpa aliquip laboris dolor"
    }
  },
  {
    "id": 3,
    "name": "Zmieniony",
    "director": {
      "name": "Berta",
      "surname": "Kaniewski"
    },
    "country": "Cote d'Ivoire",
    "genre": "Horror",
    "premiere": "2022-09-20",
    "awards": "Brak",
    "rating": 2.88,
    "numberOfRatings": 6374756,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Hanna",
        "surname": "Raczyński",
        "role": "Darrin Wolf"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "fugiat irure"
    }
  },
  {
    "id": 4,
    "name": "Do zmiany",
    "director": {
      "name": "Katarzyna",
      "surname": "Grzesiak"
    },
    "country": "Nigeria",
    "genre": "Animacja",
    "premiere": "2001-03-12",
    "awards": "Saturn",
    "rating": 4.42,
    "numberOfRatings": 3056973,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Józefina",
        "surname": "Juszczak",
        "role": "Laurie VonRueden"
      },
      {
        "name": "Joanna",
        "surname": "Jankowiak",
        "role": "Alexander Cruickshank"
      },
      {
        "name": "Stella",
        "surname": "Gawlik",
        "role": "Megan Gutkowski"
      },
      {
        "name": "Sergiusz",
        "surname": "Kłos",
        "role": "Brittany Stroman"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "sint adipisicing elit non excepteur officia deserunt aute mollit est elit consequat et elit"
    }
  },
  {
    "id": 5,
    "name": "Do zmiany",
    "director": {
      "name": "Monika",
      "surname": "Miller"
    },
    "country": "Virgin Islands, British",
    "genre": "Akcja",
    "premiere": "2013-08-06",
    "awards": "Brak",
    "rating": 2.34,
    "numberOfRatings": 459187,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Arkady",
        "surname": "Duda",
        "role": "Clarence Crooks"
      },
      {
        "name": "Diana",
        "surname": "Leśniak",
        "role": "Horace Bogan"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "veniam ipsum do mollit ut cillum eu anim ipsum ipsum irure Lorem velit velit officia sint incididunt commodo minim nisi"
    }
  },
  {
    "id": 6,
    "name": "Do zmiany",
    "director": {
      "name": "Spirydion",
      "surname": "Słowik"
    },
    "country": "Ethiopia",
    "genre": "Akcja",
    "premiere": "2023-06-07",
    "awards": "Oscar",
    "rating": 3.92,
    "numberOfRatings": 712485,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Lilia",
        "surname": "Bartczak",
        "role": "Jay Nitzsche"
      },
      {
        "name": "Barbara",
        "surname": "Więcek",
        "role": "Amber Runolfsson"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "magna eiusmod"
    }
  },
  {
    "id": 7,
    "name": "Do zmiany",
    "director": {
      "name": "Ksawera",
      "surname": "Noga"
    },
    "country": "Sweden",
    "genre": "Horror",
    "premiere": "2008-11-26",
    "awards": "Brak",
    "rating": 4.1,
    "numberOfRatings": 2663244,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Helena",
        "surname": "Rogala",
        "role": "Ruth Lueilwitz"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "enim adipisicing magna proident sit duis do duis nostrud ex"
    }
  },
  {
    "id": 8,
    "name": "Do zmiany",
    "director": {
      "name": "Seweryn",
      "surname": "Krysiak"
    },
    "country": "Suriname",
    "genre": "Dokument",
    "premiere": "2004-07-11",
    "awards": "Brak",
    "rating": 1.04,
    "numberOfRatings": 707330,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Daniel",
        "surname": "Jagielski",
        "role": "Roger Mills"
      },
      {
        "name": "Konstantyn",
        "surname": "Skoczylas",
        "role": "Clarence Kassulke"
      },
      {
        "name": "Helena",
        "surname": "Krajewski",
        "role": "Rodolfo Hand"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "sint aliqua ut dolore enim magna fugiat culpa aliqua voluptate adipisicing adipisicing duis est fugiat aliquip dolor exercitation incididunt sit"
    }
  },
  {
    "id": 9,
    "name": "Do zmiany",
    "director": {
      "name": "Berta",
      "surname": "Jastrzębski"
    },
    "country": "United Kingdom",
    "genre": "Animacja",
    "premiere": "2006-09-10",
    "awards": "Brak",
    "rating": 1.55,
    "numberOfRatings": 898232,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Kira",
        "surname": "Kiełbasa",
        "role": "Todd Schinner"
      },
      {
        "name": "Magdalena",
        "surname": "Borowiec",
        "role": "Johanna Kulas"
      },
      {
        "name": "Beatrycze",
        "surname": "Witek",
        "role": "Sharon Feeney"
      },
      {
        "name": "Wilhelm",
        "surname": "Sawicki",
        "role": "Kristopher Daniel"
      },
      {
        "name": "Oliwia",
        "surname": "Bogusz",
        "role": "Paula Waelchi"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "proident non anim velit id"
    }
  },
  {
    "id": 10,
    "name": "Do zmiany",
    "director": {
      "name": "Gerald",
      "surname": "Rogalski"
    },
    "country": "Kyrgyz Republic",
    "genre": "Dokument",
    "premiere": "2009-05-17",
    "awards": "Brak",
    "rating": 4.3,
    "numberOfRatings": 7303122,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Makary",
        "surname": "Jakubiak",
        "role": "Mandy Koepp"
      },
      {
        "name": "Marta",
        "surname": "Duda",
        "role": "Travis Ebert"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "anim est sint consectetur voluptate aute eiusmod sunt minim aliquip mollit elit cupidatat ullamco ad ipsum minim"
    }
  },
  {
    "id": 11,
    "name": "Do zmiany",
    "director": {
      "name": "Lea",
      "surname": "Lech"
    },
    "country": "Venezuela",
    "genre": "Fantasy",
    "premiere": "1999-04-23",
    "awards": "Saturn",
    "rating": 1.8,
    "numberOfRatings": 4872287,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Dorota",
        "surname": "Niemiec",
        "role": "Damon Funk"
      },
      {
        "name": "Olga",
        "surname": "Radomski",
        "role": "Curtis Pollich"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "sit minim amet sunt officia qui adipisicing quis quis aute Lorem velit esse eu ea magna"
    }
  },
  {
    "id": 12,
    "name": "Do zmiany",
    "director": {
      "name": "Abraham",
      "surname": "Krysiak"
    },
    "country": "Antigua and Barbuda",
    "genre": "Fantasy",
    "premiere": "2006-07-08",
    "awards": "Brak",
    "rating": 4.05,
    "numberOfRatings": 8189035,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Ignacy",
        "surname": "Skibiński",
        "role": "Pam Little"
      },
      {
        "name": "Hubert",
        "surname": "Piekarski",
        "role": "Terrance Fisher"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "ex magna officia voluptate consectetur do et magna consequat anim incididunt"
    }
  },
  {
    "id": 13,
    "name": "Do zmiany",
    "director": {
      "name": "Monika",
      "surname": "Zaręba"
    },
    "country": "Liechtenstein",
    "genre": "Animacja",
    "premiere": "1993-10-09",
    "awards": "Oscar",
    "rating": 2.98,
    "numberOfRatings": 6093523,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Leila",
        "surname": "Tracz",
        "role": "Archie Ankunding"
      },
      {
        "name": "Roman",
        "surname": "Jaśkiewicz",
        "role": "Lee Stark"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "dolore duis incididunt"
    }
  },
  {
    "id": 14,
    "name": "Do zmiany",
    "director": {
      "name": "Brajan",
      "surname": "Wiśniewski"
    },
    "country": "Dominica",
    "genre": "Fantasy",
    "premiere": "1994-04-11",
    "awards": "Brak",
    "rating": 1.38,
    "numberOfRatings": 1915029,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Anna",
        "surname": "Stolarski",
        "role": "Jonathan Cartwright"
      },
      {
        "name": "Wincenty",
        "surname": "Popławski",
        "role": "Perry Powlowski"
      },
      {
        "name": "Karolina",
        "surname": "Jóźwiak",
        "role": "Tony Douglas"
      },
      {
        "name": "Hilarion",
        "surname": "Grzesiak",
        "role": "Ronald Robel"
      },
      {
        "name": "Roger",
        "surname": "Miller",
        "role": "Wanda Mosciski"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "excepteur ullamco dolore ullamco enim minim aliqua velit eu irure cillum reprehenderit tempor est eu ipsum cillum laboris"
    }
  },
  {
    "id": 15,
    "name": "Do zmiany",
    "director": {
      "name": "Damian",
      "surname": "Szymczak"
    },
    "country": "Seychelles",
    "genre": "Horror",
    "premiere": "2014-09-08",
    "awards": "Saturn",
    "rating": 3.91,
    "numberOfRatings": 825191,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Randolf",
        "surname": "Strzelczyk",
        "role": "Jeff Parisian"
      },
      {
        "name": "Bazyli",
        "surname": "Pająk",
        "role": "Guillermo Hoppe"
      },
      {
        "name": "Alicja",
        "surname": "Orzechowski",
        "role": "Matthew Greenfelder"
      },
      {
        "name": "Beatrycze",
        "surname": "Czyżewski",
        "role": "Phillip Lindgren"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "eiusmod aliquip commodo consectetur pariatur sit in ut"
    }
  },
  {
    "id": 16,
    "name": "Do zmiany",
    "director": {
      "name": "Justyn",
      "surname": "Pawlikowski"
    },
    "country": "Finland",
    "genre": "Animacja",
    "premiere": "1996-12-28",
    "awards": "Malina",
    "rating": 4.72,
    "numberOfRatings": 3646816,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Kornel",
        "surname": "Skalski",
        "role": "Dana Quigley"
      },
      {
        "name": "Lilia",
        "surname": "Krupiński",
        "role": "Ralph Weimann"
      },
      {
        "name": "Jozue",
        "surname": "Królikowski",
        "role": "Tamara Stoltenberg"
      },
      {
        "name": "Cyra",
        "surname": "Pakuła",
        "role": "Eric Barton"
      },
      {
        "name": "Kazimierz",
        "surname": "Jasiński",
        "role": "Darnell Bernier"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "deserunt quis et qui nisi nisi mollit excepteur pariatur eiusmod non dolor fugiat occaecat tempor ad ad cillum"
    }
  },
  {
    "id": 17,
    "name": "Do zmiany",
    "director": {
      "name": "Miron",
      "surname": "Morawski"
    },
    "country": "El Salvador",
    "genre": "Horror",
    "premiere": "2021-03-30",
    "awards": "Brak",
    "rating": 1.84,
    "numberOfRatings": 6397377,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Ludwik",
        "surname": "Nowicki",
        "role": "Kristie Dickinson"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "consequat laboris adipisicing incididunt nulla cupidatat mollit culpa id excepteur ea reprehenderit sunt pariatur consequat aliqua"
    }
  },
  {
    "id": 18,
    "name": "Do zmiany",
    "director": {
      "name": "Cyra",
      "surname": "Rzepka"
    },
    "country": "Sierra Leone",
    "genre": "Animacja",
    "premiere": "2018-05-29",
    "awards": "Brak",
    "rating": 4,
    "numberOfRatings": 5912703,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Romeo",
        "surname": "Lesiak",
        "role": "Nora Herman"
      },
      {
        "name": "Oleg",
        "surname": "Andrzejewski",
        "role": "Thomas Daniel"
      },
      {
        "name": "Helena",
        "surname": "Musiał",
        "role": "Ollie Fay"
      },
      {
        "name": "Oliwier",
        "surname": "Laskowski",
        "role": "Keith Pfannerstill"
      },
      {
        "name": "Cecyliusz",
        "surname": "Drzewiecki",
        "role": "Marcos Beatty"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "labore ea mollit laborum ullamco enim aute exercitation eiusmod culpa ex laboris ipsum aute"
    }
  },
  {
    "id": 19,
    "name": "Do zmiany",
    "director": {
      "name": "Sylwia",
      "surname": "Trzciński"
    },
    "country": "Bolivia",
    "genre": "Akcja",
    "premiere": "1993-03-16",
    "awards": "Brak",
    "rating": 4.55,
    "numberOfRatings": 1518113,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Bertram",
        "surname": "Czyżewski",
        "role": "Emmett Frami"
      },
      {
        "name": "Klara",
        "surname": "Lis",
        "role": "Della Cruickshank"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "quis proident enim in dolore officia aute cupidatat"
    }
  },
  {
    "id": 20,
    "name": "Do zmiany",
    "director": {
      "name": "Larysa",
      "surname": "Antczak"
    },
    "country": "Brunei Darussalam",
    "genre": "Horror",
    "premiere": "2004-08-14",
    "awards": "Brak",
    "rating": 1.33,
    "numberOfRatings": 9926938,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Lea",
        "surname": "Matysiak",
        "role": "Annie Cassin"
      },
      {
        "name": "Żaneta",
        "surname": "Młynarczyk",
        "role": "Chad Reynolds"
      },
      {
        "name": "Roger",
        "surname": "Lech",
        "role": "Kerry Berge"
      },
      {
        "name": "Justyn",
        "surname": "Czajka",
        "role": "Santos Luettgen"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "dolore nisi veniam sint eu aliquip ipsum"
    }
  },
  {
    "id": 21,
    "name": "Do zmiany",
    "director": {
      "name": "Karolina",
      "surname": "Włodarczyk"
    },
    "country": "Uruguay",
    "genre": "Fantasy",
    "premiere": "2004-12-13",
    "awards": "Brak",
    "rating": 1.48,
    "numberOfRatings": 3993652,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Piotr",
        "surname": "Lech",
        "role": "Margarita Ruecker"
      },
      {
        "name": "Aida",
        "surname": "Jaros",
        "role": "Lance Thiel"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "ut labore proident cillum consectetur ipsum reprehenderit et aliquip"
    }
  },
  {
    "id": 22,
    "name": "Do zmiany",
    "director": {
      "name": "Karolina",
      "surname": "Tomczak"
    },
    "country": "France",
    "genre": "Horror",
    "premiere": "2006-03-24",
    "awards": "Brak",
    "rating": 1.51,
    "numberOfRatings": 3286114,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Gonsalwy",
        "surname": "Pietrzyk",
        "role": "Gwendolyn McClure"
      },
      {
        "name": "Aida",
        "surname": "Szafrański",
        "role": "Jeffrey Wiza"
      },
      {
        "name": "Marek",
        "surname": "Napierała",
        "role": "Dana Yundt"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "cillum pariatur reprehenderit amet incididunt eiusmod cupidatat minim ut veniam"
    }
  },
  {
    "id": 23,
    "name": "Do zmiany",
    "director": {
      "name": "Tobiasz",
      "surname": "Marszałek"
    },
    "country": "Azerbaijan",
    "genre": "Akcja",
    "premiere": "2010-12-30",
    "awards": "Brak",
    "rating": 3.64,
    "numberOfRatings": 6368831,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Rufina",
        "surname": "Krupiński",
        "role": "Debbie Collier"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "dolore minim laboris"
    }
  },
  {
    "id": 24,
    "name": "Do zmiany",
    "director": {
      "name": "Oliwier",
      "surname": "Rakowski"
    },
    "country": "Bhutan",
    "genre": "Dokument",
    "premiere": "2003-06-02",
    "awards": "Oscar",
    "rating": 1.42,
    "numberOfRatings": 9117887,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Daria",
        "surname": "Wroński",
        "role": "Roosevelt Kemmer"
      },
      {
        "name": "Daria",
        "surname": "Pawlik",
        "role": "Shari Schuppe"
      },
      {
        "name": "Tymoteusz",
        "surname": "Kubacki",
        "role": "Ervin Abernathy"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "veniam sint ipsum duis"
    }
  },
  {
    "id": 25,
    "name": "Do zmiany",
    "director": {
      "name": "Emil",
      "surname": "Kaczmarek"
    },
    "country": "Latvia",
    "genre": "Dokument",
    "premiere": "2009-10-29",
    "awards": "Brak",
    "rating": 3.42,
    "numberOfRatings": 328934,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Florencja",
        "surname": "Węgrzyn",
        "role": "Austin Prohaska"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "ea nostrud ullamco irure do non labore dolore deserunt laboris nulla dolor esse eiusmod officia ea anim minim ad"
    }
  },
  {
    "id": 26,
    "name": "Do zmiany",
    "director": {
      "name": "Stella",
      "surname": "Kuś"
    },
    "country": "Barbados",
    "genre": "Fantasy",
    "premiere": "2013-09-14",
    "awards": "Brak",
    "rating": 4.06,
    "numberOfRatings": 1126257,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Izydor",
        "surname": "Bartosik",
        "role": "Dominick Nicolas"
      },
      {
        "name": "Arystarch",
        "surname": "Nawrot",
        "role": "Shaun Bechtelar"
      },
      {
        "name": "Erwin",
        "surname": "Banasiak",
        "role": "Kristin Trantow"
      },
      {
        "name": "Jakubina",
        "surname": "Bielski",
        "role": "Darryl Hilpert"
      },
      {
        "name": "Ludwik",
        "surname": "Szatkowski",
        "role": "Laurie Conroy"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "in commodo labore irure tempor cillum dolor adipisicing tempor consequat id fugiat"
    }
  },
  {
    "id": 27,
    "name": "Do zmiany",
    "director": {
      "name": "Ksenia",
      "surname": "Majcher"
    },
    "country": "Japan",
    "genre": "Fantasy",
    "premiere": "1992-07-04",
    "awards": "Oscar",
    "rating": 1.47,
    "numberOfRatings": 5220175,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Arystarch",
        "surname": "Mazurek",
        "role": "Jared Bernier"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "dolor commodo aliquip voluptate Lorem sint id minim consectetur dolor enim"
    }
  },
  {
    "id": 28,
    "name": "Do zmiany",
    "director": {
      "name": "Abraham",
      "surname": "Czajkowski"
    },
    "country": "Niue",
    "genre": "Dokument",
    "premiere": "1999-05-15",
    "awards": "Oscar",
    "rating": 3.57,
    "numberOfRatings": 9822764,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Jadwiga",
        "surname": "Smoliński",
        "role": "John Bashirian"
      },
      {
        "name": "Sylwia",
        "surname": "Dąbkowski",
        "role": "Kristine Hirthe"
      },
      {
        "name": "Dorota",
        "surname": "Flak",
        "role": "Pablo Wolf"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "do et fugiat labore mollit magna minim deserunt aute"
    }
  },
  {
    "id": 29,
    "name": "Do zmiany",
    "director": {
      "name": "Maja",
      "surname": "Kasprzyk"
    },
    "country": "Kazakhstan",
    "genre": "Dokument",
    "premiere": "1997-08-07",
    "awards": "Malina",
    "rating": 4.4,
    "numberOfRatings": 1172055,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Ksawery",
        "surname": "Jagiełło",
        "role": "Thelma Crist"
      },
      {
        "name": "Lidia",
        "surname": "Janas",
        "role": "Alonzo Kohler"
      },
      {
        "name": "Emil",
        "surname": "Więcek",
        "role": "Jerry Hermann"
      },
      {
        "name": "Aaron",
        "surname": "Kruszewski",
        "role": "Roger Hane"
      },
      {
        "name": "Irena",
        "surname": "Woźniak",
        "role": "Lyle Prosacco"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "magna incididunt pariatur sit eu et fugiat duis ipsum cupidatat non laborum duis irure fugiat irure quis excepteur Lorem"
    }
  },
  {
    "id": 30,
    "name": "Do zmiany",
    "director": {
      "name": "Krystyna",
      "surname": "Zielonka"
    },
    "country": "Armenia",
    "genre": "Animacja",
    "premiere": "1996-04-21",
    "awards": "Brak",
    "rating": 1.9,
    "numberOfRatings": 8549886,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Ksenia",
        "surname": "Dudziak",
        "role": "Maryann Turner"
      },
      {
        "name": "Izydor",
        "surname": "Przybysz",
        "role": "Annette Schmidt"
      },
      {
        "name": "Ksenofont",
        "surname": "Koza",
        "role": "Natasha Adams"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "aute tempor ad ad ipsum sint aliquip officia anim minim sint proident"
    }
  },
  {
    "id": 31,
    "name": "Do zmiany",
    "director": {
      "name": "Ada",
      "surname": "Szafrański"
    },
    "country": "Jersey",
    "genre": "Horror",
    "premiere": "2007-03-08",
    "awards": "Brak",
    "rating": 2.31,
    "numberOfRatings": 4896128,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Sara",
        "surname": "Janiszewski",
        "role": "Tyler Leuschke"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "exercitation amet est nulla consectetur duis irure cupidatat sint in eu aliqua voluptate enim sit minim ut dolor"
    }
  },
  {
    "id": 32,
    "name": "Do zmiany",
    "director": {
      "name": "Amabela",
      "surname": "Kmieć"
    },
    "country": "Saint Vincent and the Grenadines",
    "genre": "Animacja",
    "premiere": "2008-11-14",
    "awards": "Oscar",
    "rating": 4.62,
    "numberOfRatings": 4346612,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Oliwier",
        "surname": "Filipek",
        "role": "Faith Von"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "mollit culpa ut aute labore eu esse adipisicing qui voluptate nostrud Lorem enim laborum ipsum Lorem est qui sint"
    }
  },
  {
    "id": 33,
    "name": "Do zmiany",
    "director": {
      "name": "Wacław",
      "surname": "Ciszewski"
    },
    "country": "Angola",
    "genre": "Horror",
    "premiere": "2005-01-21",
    "awards": "Brak",
    "rating": 4.33,
    "numberOfRatings": 1947990,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Jan",
        "surname": "Czapla",
        "role": "Phil Cronin"
      },
      {
        "name": "Walentyn",
        "surname": "Kasprzyk",
        "role": "Sheri Paucek"
      },
      {
        "name": "Serafina",
        "surname": "Stankiewicz",
        "role": "Johnny Padberg"
      },
      {
        "name": "Luiza",
        "surname": "Kowalczuk",
        "role": "Lisa Waters"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "dolore velit enim in ut non occaecat sit minim nostrud"
    }
  },
  {
    "id": 34,
    "name": "Do zmiany",
    "director": {
      "name": "Izabela",
      "surname": "Kołodziejski"
    },
    "country": "Cayman Islands",
    "genre": "Horror",
    "premiere": "1999-02-13",
    "awards": "Saturn",
    "rating": 4.14,
    "numberOfRatings": 2338995,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Alicja",
        "surname": "Grzesik",
        "role": "Kay Cruickshank"
      },
      {
        "name": "Kamila",
        "surname": "Wasilewski",
        "role": "Audrey Kautzer"
      },
      {
        "name": "Nikola",
        "surname": "Skowron",
        "role": "Jacquelyn Mayert"
      },
      {
        "name": "Wawrzyniec",
        "surname": "Owczarek",
        "role": "Benjamin Weissnat"
      },
      {
        "name": "Konstanty",
        "surname": "Kostrzewa",
        "role": "Ada Huels"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "aute reprehenderit dolor anim deserunt ex commodo culpa velit enim consectetur officia"
    }
  },
  {
    "id": 35,
    "name": "Do zmiany",
    "director": {
      "name": "Ofelia",
      "surname": "Augustyniak"
    },
    "country": "Maldives",
    "genre": "Horror",
    "premiere": "2014-03-27",
    "awards": "Brak",
    "rating": 1.39,
    "numberOfRatings": 3533216,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Beatrycze",
        "surname": "Duszyński",
        "role": "Gabriel Schaden"
      },
      {
        "name": "Herman",
        "surname": "Chrzanowski",
        "role": "Meredith Daniel"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "aliquip et et reprehenderit Lorem in labore nisi consequat eiusmod sit deserunt ex"
    }
  },
  {
    "id": 36,
    "name": "Do zmiany",
    "director": {
      "name": "Roksana",
      "surname": "Bąkowski"
    },
    "country": "Cambodia",
    "genre": "Fantasy",
    "premiere": "2016-07-02",
    "awards": "Brak",
    "rating": 1.59,
    "numberOfRatings": 2250971,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Weronika",
        "surname": "Czajka",
        "role": "Robert Muller"
      },
      {
        "name": "Donald",
        "surname": "Skrzypek",
        "role": "Patricia Leannon"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "deserunt amet duis esse fugiat dolor deserunt tempor dolore id voluptate occaecat elit id mollit"
    }
  },
  {
    "id": 37,
    "name": "Do zmiany",
    "director": {
      "name": "Efrem",
      "surname": "Zych"
    },
    "country": "Paraguay",
    "genre": "Fantasy",
    "premiere": "2013-01-15",
    "awards": "Brak",
    "rating": 4.52,
    "numberOfRatings": 9660321,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Zoe",
        "surname": "Kołodziejczyk",
        "role": "Moses Robel"
      },
      {
        "name": "Innocenty",
        "surname": "Romanowski",
        "role": "Hugo Bauch"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "nulla et ipsum amet ad minim sit incididunt culpa laboris Lorem occaecat non culpa"
    }
  },
  {
    "id": 38,
    "name": "Do zmiany",
    "director": {
      "name": "Piotr",
      "surname": "Janusz"
    },
    "country": "Argentina",
    "genre": "Akcja",
    "premiere": "2008-05-22",
    "awards": "Brak",
    "rating": 3.61,
    "numberOfRatings": 8521600,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Ksawery",
        "surname": "Gawron",
        "role": "Joe Bartell"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "reprehenderit elit"
    }
  },
  {
    "id": 39,
    "name": "Do zmiany",
    "director": {
      "name": "Alwar",
      "surname": "Zaręba"
    },
    "country": "Afghanistan",
    "genre": "Dokument",
    "premiere": "2016-10-12",
    "awards": "Saturn",
    "rating": 4.25,
    "numberOfRatings": 5588254,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Bertram",
        "surname": "Kopczyński",
        "role": "Darrel Hegmann"
      },
      {
        "name": "Izabela",
        "surname": "Milewski",
        "role": "Judy Prosacco"
      },
      {
        "name": "Stefan",
        "surname": "Pawlicki",
        "role": "Roderick Schmidt"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "laboris amet occaecat nulla in elit magna et proident irure ut officia aliqua consequat ad et dolore consequat"
    }
  },
  {
    "id": 40,
    "name": "Do zmiany",
    "director": {
      "name": "Salomon",
      "surname": "Ziółkowski"
    },
    "country": "Christmas Island",
    "genre": "Animacja",
    "premiere": "2003-12-29",
    "awards": "Brak",
    "rating": 4.89,
    "numberOfRatings": 4736499,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Eugenia",
        "surname": "Mucha",
        "role": "Stewart Windler"
      },
      {
        "name": "Diana",
        "surname": "Kopeć",
        "role": "Leon Cruickshank"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "ex dolore tempor enim reprehenderit veniam id officia cupidatat adipisicing cillum enim labore ex enim officia eu culpa exercitation"
    }
  },
  {
    "id": 41,
    "name": "Do zmiany",
    "director": {
      "name": "Anastazja",
      "surname": "Szczygieł"
    },
    "country": "Malaysia",
    "genre": "Fantasy",
    "premiere": "2006-08-01",
    "awards": "Brak",
    "rating": 4.79,
    "numberOfRatings": 2824344,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Róża",
        "surname": "Flak",
        "role": "Ben Lang"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "ipsum"
    }
  },
  {
    "id": 42,
    "name": "Do zmiany",
    "director": {
      "name": "Oliwia",
      "surname": "Dębowski"
    },
    "country": "French Guiana",
    "genre": "Fantasy",
    "premiere": "2001-01-20",
    "awards": "Brak",
    "rating": 2.69,
    "numberOfRatings": 9674869,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Klementyna",
        "surname": "Dziuba",
        "role": "Amelia Muller"
      },
      {
        "name": "Alan",
        "surname": "Kania",
        "role": "Boyd Wolff"
      },
      {
        "name": "Marceli",
        "surname": "Krzyżanowski",
        "role": "Eula King"
      },
      {
        "name": "Gerazym",
        "surname": "Jędrzejewski",
        "role": "Geneva Glover"
      },
      {
        "name": "Albert",
        "surname": "Filipiak",
        "role": "Lowell Klocko"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "amet magna irure excepteur aliqua est cupidatat ex esse dolor ea consequat ut voluptate dolore"
    }
  },
  {
    "id": 43,
    "name": "Do zmiany",
    "director": {
      "name": "Agaton",
      "surname": "Duszyński"
    },
    "country": "Czech Republic",
    "genre": "Dokument",
    "premiere": "1995-08-02",
    "awards": "Saturn",
    "rating": 3.58,
    "numberOfRatings": 2795576,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Konrad",
        "surname": "Wnuk",
        "role": "Cheryl Conroy"
      },
      {
        "name": "Rajnold",
        "surname": "Wojciechowski",
        "role": "Jimmy Lynch"
      },
      {
        "name": "Filipa",
        "surname": "Dominiak",
        "role": "Shelia Hansen"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": ""
    }
  },
  {
    "id": 44,
    "name": "Do zmiany",
    "director": {
      "name": "Rafał",
      "surname": "Filipek"
    },
    "country": "Suriname",
    "genre": "Animacja",
    "premiere": "2015-02-11",
    "awards": "Brak",
    "rating": 4.56,
    "numberOfRatings": 9829791,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Agnieszka",
        "surname": "Wojtczak",
        "role": "Lee Wilkinson"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "qui qui adipisicing veniam minim ex do aliquip in deserunt occaecat est cillum adipisicing elit occaecat labore magna magna"
    }
  },
  {
    "id": 45,
    "name": "Do zmiany",
    "director": {
      "name": "Fryderyk",
      "surname": "Kasprzyk"
    },
    "country": "Belize",
    "genre": "Dokument",
    "premiere": "2009-10-11",
    "awards": "Malina",
    "rating": 3.06,
    "numberOfRatings": 264391,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Marek",
        "surname": "Sobczyk",
        "role": "Miriam Armstrong"
      },
      {
        "name": "Julia",
        "surname": "Urbańczyk",
        "role": "Lydia Olson"
      },
      {
        "name": "Franciszka",
        "surname": "Bartosik",
        "role": "Dexter Hilpert"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "ut incididunt laboris excepteur cupidatat velit ex amet aute adipisicing"
    }
  },
  {
    "id": 46,
    "name": "Do zmiany",
    "director": {
      "name": "Beniamin",
      "surname": "Długosz"
    },
    "country": "South Africa",
    "genre": "Animacja",
    "premiere": "2022-10-15",
    "awards": "Malina",
    "rating": 3.32,
    "numberOfRatings": 8998260,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Zachariasz",
        "surname": "Wawrzyniak",
        "role": "Patrick Konopelski"
      },
      {
        "name": "Witalis",
        "surname": "Domański",
        "role": "Dixie Lindgren"
      },
      {
        "name": "Stella",
        "surname": "Bednarz",
        "role": "Darrin Littel"
      },
      {
        "name": "Anna",
        "surname": "Sadowski",
        "role": "Gregg Koch"
      },
      {
        "name": "Liliana",
        "surname": "Ratajczak",
        "role": "Leona Wehner"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "esse cillum do"
    }
  },
  {
    "id": 47,
    "name": "Do zmiany",
    "director": {
      "name": "Marceli",
      "surname": "Florczak"
    },
    "country": "Bahamas",
    "genre": "Fantasy",
    "premiere": "1992-03-31",
    "awards": "Saturn",
    "rating": 1.63,
    "numberOfRatings": 4879428,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Lucjan",
        "surname": "Żuk",
        "role": "Johnathan Howe"
      },
      {
        "name": "Agata",
        "surname": "Dubiel",
        "role": "Cornelius Gleichner"
      },
      {
        "name": "Paula",
        "surname": "Polak",
        "role": "Laurie Steuber"
      },
      {
        "name": "Katarzyna",
        "surname": "Filipowicz",
        "role": "Alison Marvin"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "sunt non magna consequat deserunt do mollit reprehenderit aliqua"
    }
  },
  {
    "id": 48,
    "name": "Do zmiany",
    "director": {
      "name": "Angela",
      "surname": "Lech"
    },
    "country": "Austria",
    "genre": "Animacja",
    "premiere": "2011-05-30",
    "awards": "Malina",
    "rating": 2.01,
    "numberOfRatings": 8391472,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Witalis",
        "surname": "Adamus",
        "role": "Maryann Schuster"
      },
      {
        "name": "Rachela",
        "surname": "Kłosowski",
        "role": "Greg O'Conner"
      },
      {
        "name": "Patryk",
        "surname": "Żmuda",
        "role": "Oliver Lockman"
      },
      {
        "name": "Kira",
        "surname": "Zawadzki",
        "role": "Jeffrey Hagenes"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "exercitation deserunt Lorem occaecat veniam sunt culpa consequat nulla eu velit"
    }
  },
  {
    "id": 49,
    "name": "Do zmiany",
    "director": {
      "name": "Aaron",
      "surname": "Świderski"
    },
    "country": "Botswana",
    "genre": "Dokument",
    "premiere": "1998-11-05",
    "awards": "Oscar",
    "rating": 4.81,
    "numberOfRatings": 4687378,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Nazariusz",
        "surname": "Białas",
        "role": "Gwen Schiller"
      },
      {
        "name": "Korneli",
        "surname": "Zawada",
        "role": "Melvin Wolff"
      },
      {
        "name": "Paulina",
        "surname": "Jakubowski",
        "role": "Nancy Stehr"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "amet sit ipsum commodo in laborum aliquip ad nulla nisi pariatur nostrud Lorem ut laboris aliquip quis mollit exercitation"
    }
  },
  {
    "id": 50,
    "name": "Do zmiany",
    "director": {
      "name": "Maryna",
      "surname": "Kaczorowski"
    },
    "country": "Sao Tome and Principe",
    "genre": "Akcja",
    "premiere": "2019-06-07",
    "awards": "Oscar",
    "rating": 3.76,
    "numberOfRatings": 5875704,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Eugenia",
        "surname": "Świątek",
        "role": "Leroy Bartoletti"
      },
      {
        "name": "Alina",
        "surname": "Kruszewski",
        "role": "John Willms"
      },
      {
        "name": "Konstantyn",
        "surname": "Gaweł",
        "role": "Dolores Barton"
      },
      {
        "name": "Efrem",
        "surname": "Sienkiewicz",
        "role": "Faith Medhurst"
      },
      {
        "name": "Brygida",
        "surname": "Augustyn",
        "role": "Juan Hickle"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": ""
    }
  },
  {
    "id": 51,
    "name": "Do zmiany",
    "director": {
      "name": "Angela",
      "surname": "Szymański"
    },
    "country": "Saint Vincent and the Grenadines",
    "genre": "Akcja",
    "premiere": "2002-03-26",
    "awards": "Malina",
    "rating": 3.01,
    "numberOfRatings": 120054,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Hugo",
        "surname": "Nowak",
        "role": "Monique Heller"
      },
      {
        "name": "Gerald",
        "surname": "Michałowski",
        "role": "Shaun Runte"
      },
      {
        "name": "Adelajda",
        "surname": "Bednarczyk",
        "role": "Estelle Armstrong"
      },
      {
        "name": "Osmund",
        "surname": "Jankowiak",
        "role": "Malcolm Paucek"
      },
      {
        "name": "Brajan",
        "surname": "Sobolewski",
        "role": "Emmett Gottlieb"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "sunt exercitation cupidatat elit excepteur est do sint pariatur Lorem dolore eu in in"
    }
  },
  {
    "id": 52,
    "name": "Do zmiany",
    "director": {
      "name": "Nikola",
      "surname": "Kruk"
    },
    "country": "Cocos (Keeling) Islands",
    "genre": "Akcja",
    "premiere": "2012-06-04",
    "awards": "Brak",
    "rating": 1.37,
    "numberOfRatings": 8194471,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Malwina",
        "surname": "Kawa",
        "role": "Jonathon Schimmel"
      },
      {
        "name": "Lilia",
        "surname": "Chrzanowski",
        "role": "Lorene Bernier"
      },
      {
        "name": "Rebeka",
        "surname": "Cebula",
        "role": "Yolanda Goyette"
      },
      {
        "name": "Prokles",
        "surname": "Kuczyński",
        "role": "Marshall Effertz"
      },
      {
        "name": "Żaneta",
        "surname": "Wojtas",
        "role": "Al Feest"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "reprehenderit culpa esse magna nisi laborum nostrud nisi anim ullamco est occaecat cupidatat adipisicing in veniam commodo commodo"
    }
  },
  {
    "id": 53,
    "name": "Do zmiany",
    "director": {
      "name": "Izaak",
      "surname": "Majchrzak"
    },
    "country": "Jersey",
    "genre": "Akcja",
    "premiere": "2022-11-09",
    "awards": "Saturn",
    "rating": 1.37,
    "numberOfRatings": 4930155,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Sylwia",
        "surname": "Szulc",
        "role": "Miguel Cruickshank"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "ut aute fugiat velit et eiusmod exercitation consectetur"
    }
  },
  {
    "id": 54,
    "name": "Do zmiany",
    "director": {
      "name": "Paula",
      "surname": "Niedzielski"
    },
    "country": "Indonesia",
    "genre": "Horror",
    "premiere": "2009-05-26",
    "awards": "Brak",
    "rating": 3.75,
    "numberOfRatings": 6577852,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Żaneta",
        "surname": "Bieńkowski",
        "role": "Cornelius Veum"
      },
      {
        "name": "Konrad",
        "surname": "Piątek",
        "role": "Tamara Paucek"
      },
      {
        "name": "Władysław",
        "surname": "Górka",
        "role": "Jeff Schroeder"
      },
      {
        "name": "Walentyn",
        "surname": "Cieśla",
        "role": "Roman Keebler"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "sit cillum eiusmod reprehenderit nostrud voluptate est"
    }
  },
  {
    "id": 55,
    "name": "Do zmiany",
    "director": {
      "name": "Irena",
      "surname": "Dębowski"
    },
    "country": "Costa Rica",
    "genre": "Dokument",
    "premiere": "2020-01-15",
    "awards": "Brak",
    "rating": 1.61,
    "numberOfRatings": 2788906,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Demetriusz",
        "surname": "Wróbel",
        "role": "Rex Shields"
      },
      {
        "name": "Erast",
        "surname": "Królikowski",
        "role": "Cameron Macejkovic"
      },
      {
        "name": "Apollo",
        "surname": "Nowaczyk",
        "role": "Dale Erdman"
      },
      {
        "name": "Wacław",
        "surname": "Juszczak",
        "role": "Henrietta Schamberger"
      },
      {
        "name": "Randolf",
        "surname": "Grzyb",
        "role": "Cora Friesen"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "ex"
    }
  },
  {
    "id": 56,
    "name": "Do zmiany",
    "director": {
      "name": "Lilla",
      "surname": "Zajączkowski"
    },
    "country": "Tuvalu",
    "genre": "Akcja",
    "premiere": "2014-12-08",
    "awards": "Saturn",
    "rating": 1.54,
    "numberOfRatings": 9700528,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Róża",
        "surname": "Rudzki",
        "role": "Bradford Gorczany"
      },
      {
        "name": "Robert",
        "surname": "Krawiec",
        "role": "Winston Thiel"
      },
      {
        "name": "Elżbieta",
        "surname": "Rusin",
        "role": "Guadalupe Bailey"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "do sit mollit aliquip fugiat sint deserunt incididunt et deserunt voluptate"
    }
  },
  {
    "id": 57,
    "name": "Do zmiany",
    "director": {
      "name": "Alan",
      "surname": "Wawrzyniak"
    },
    "country": "Bolivia",
    "genre": "Fantasy",
    "premiere": "2010-04-03",
    "awards": "Brak",
    "rating": 3.02,
    "numberOfRatings": 5447678,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Walentyn",
        "surname": "Jurkowski",
        "role": "Dan Schmitt"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "anim"
    }
  },
  {
    "id": 58,
    "name": "Do zmiany",
    "director": {
      "name": "Kleopatra",
      "surname": "Woźniak"
    },
    "country": "Uzbekistan",
    "genre": "Dokument",
    "premiere": "1991-07-08",
    "awards": "Brak",
    "rating": 1.6,
    "numberOfRatings": 151350,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Krystian",
        "surname": "Borkowski",
        "role": "Bernadette Wolf"
      },
      {
        "name": "Izabela",
        "surname": "Sobieraj",
        "role": "Amos Okuneva"
      },
      {
        "name": "Dina",
        "surname": "Radecki",
        "role": "Gerald Osinski"
      },
      {
        "name": "Izaak",
        "surname": "Białek",
        "role": "Wilma Johns"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "nisi labore sit excepteur enim fugiat eiusmod ex amet officia id"
    }
  },
  {
    "id": 59,
    "name": "Do zmiany",
    "director": {
      "name": "Maryna",
      "surname": "Bednarek"
    },
    "country": "United States Minor Outlying Islands",
    "genre": "Horror",
    "premiere": "1990-02-14",
    "awards": "Oscar",
    "rating": 3.59,
    "numberOfRatings": 8219613,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Nadzieja",
        "surname": "Chudzik",
        "role": "Greg Hamill"
      },
      {
        "name": "Ireneusz",
        "surname": "Ślusarczyk",
        "role": "Edna Sauer"
      },
      {
        "name": "Walerian",
        "surname": "Stec",
        "role": "Michelle Renner"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "consectetur duis culpa culpa fugiat tempor aliqua quis laborum qui ex laboris pariatur nulla Lorem sunt et"
    }
  },
  {
    "id": 60,
    "name": "Do zmiany",
    "director": {
      "name": "Jeremi",
      "surname": "Rzepka"
    },
    "country": "Republic of Korea",
    "genre": "Horror",
    "premiere": "1996-02-25",
    "awards": "Oscar",
    "rating": 1.77,
    "numberOfRatings": 9406810,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Irena",
        "surname": "Pakuła",
        "role": "Oscar Hintz"
      },
      {
        "name": "Ambroży",
        "surname": "Misztal",
        "role": "Jana Lynch"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "nostrud exercitation enim anim reprehenderit culpa incididunt id deserunt enim"
    }
  },
  {
    "id": 61,
    "name": "Do zmiany",
    "director": {
      "name": "Gabriel",
      "surname": "Dec"
    },
    "country": "Peru",
    "genre": "Akcja",
    "premiere": "2014-09-15",
    "awards": "Malina",
    "rating": 1.4,
    "numberOfRatings": 1075439,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Katarzyna",
        "surname": "Kmiecik",
        "role": "Glenda DuBuque"
      },
      {
        "name": "Oliwia",
        "surname": "Czapla",
        "role": "Felicia Rohan"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "excepteur nostrud duis ipsum nulla"
    }
  },
  {
    "id": 62,
    "name": "Do zmiany",
    "director": {
      "name": "Angela",
      "surname": "Dudziak"
    },
    "country": "Morocco",
    "genre": "Horror",
    "premiere": "1997-02-21",
    "awards": "Saturn",
    "rating": 3.29,
    "numberOfRatings": 9948133,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Eleonora",
        "surname": "Szczerba",
        "role": "Chelsea West"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "commodo aliquip ipsum pariatur eu do"
    }
  },
  {
    "id": 63,
    "name": "Do zmiany",
    "director": {
      "name": "Emanuel",
      "surname": "Kruszewski"
    },
    "country": "Guinea-Bissau",
    "genre": "Horror",
    "premiere": "2012-01-18",
    "awards": "Malina",
    "rating": 1.36,
    "numberOfRatings": 3853799,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Henryka",
        "surname": "Janicki",
        "role": "Janice Metz"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "quis et exercitation exercitation qui mollit duis Lorem aliqua pariatur laborum irure officia amet minim do"
    }
  },
  {
    "id": 64,
    "name": "Do zmiany",
    "director": {
      "name": "Salomon",
      "surname": "Szymkowiak"
    },
    "country": "Philippines",
    "genre": "Dokument",
    "premiere": "1997-04-05",
    "awards": "Malina",
    "rating": 1.15,
    "numberOfRatings": 726505,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Monika",
        "surname": "Dębowski",
        "role": "Derrick Aufderhar"
      },
      {
        "name": "Ofelia",
        "surname": "Kaczmarczyk",
        "role": "Kristi Heller"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "excepteur qui irure adipisicing proident sit est"
    }
  },
  {
    "id": 65,
    "name": "Do zmiany",
    "director": {
      "name": "Michał",
      "surname": "Iwanowski"
    },
    "country": "Tunisia",
    "genre": "Dokument",
    "premiere": "1994-08-11",
    "awards": "Brak",
    "rating": 1.58,
    "numberOfRatings": 3211389,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Nikodem",
        "surname": "Żmuda",
        "role": "Naomi Hartmann"
      },
      {
        "name": "Lilianna",
        "surname": "Konopka",
        "role": "Sonia Rolfson"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "excepteur culpa consequat ipsum ad eiusmod sint"
    }
  },
  {
    "id": 66,
    "name": "Do zmiany",
    "director": {
      "name": "Baldwin",
      "surname": "Bartczak"
    },
    "country": "Burundi",
    "genre": "Dokument",
    "premiere": "2013-11-09",
    "awards": "Brak",
    "rating": 1.13,
    "numberOfRatings": 8868449,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Ryszard",
        "surname": "Bober",
        "role": "Rudy Kozey"
      },
      {
        "name": "Rachela",
        "surname": "Mazurkiewicz",
        "role": "Verna Satterfield"
      },
      {
        "name": "Albert",
        "surname": "Bąkowski",
        "role": "Josh Goyette"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "culpa irure anim nulla voluptate dolor incididunt velit nulla eu magna nisi Lorem veniam dolor in sunt"
    }
  },
  {
    "id": 67,
    "name": "Do zmiany",
    "director": {
      "name": "Gilbert",
      "surname": "Sołtysiak"
    },
    "country": "Cote d'Ivoire",
    "genre": "Dokument",
    "premiere": "1997-11-14",
    "awards": "Oscar",
    "rating": 3.03,
    "numberOfRatings": 9971055,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Eudokia",
        "surname": "Bąk",
        "role": "Kurt Deckow"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "nulla enim adipisicing id duis ad ex id excepteur"
    }
  },
  {
    "id": 68,
    "name": "Do zmiany",
    "director": {
      "name": "Izabela",
      "surname": "Szymczyk"
    },
    "country": "Christmas Island",
    "genre": "Akcja",
    "premiere": "2009-11-29",
    "awards": "Brak",
    "rating": 3.34,
    "numberOfRatings": 7844698,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Antoni",
        "surname": "Ptak",
        "role": "Greg Gerlach"
      },
      {
        "name": "Edward",
        "surname": "Zakrzewski",
        "role": "Jon Nicolas"
      },
      {
        "name": "Walenty",
        "surname": "Więcek",
        "role": "Marcus Schinner"
      },
      {
        "name": "Stefan",
        "surname": "Godlewski",
        "role": "Sergio Johnston"
      },
      {
        "name": "Korneli",
        "surname": "Grochowski",
        "role": "Jesus Labadie"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "consectetur magna commodo nulla id"
    }
  },
  {
    "id": 69,
    "name": "Do zmiany",
    "director": {
      "name": "Sylwia",
      "surname": "Wąsik"
    },
    "country": "South Africa",
    "genre": "Dokument",
    "premiere": "2000-03-04",
    "awards": "Oscar",
    "rating": 3.58,
    "numberOfRatings": 5931064,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Leon",
        "surname": "Marchewka",
        "role": "Amber Rodriguez"
      },
      {
        "name": "Tacjana",
        "surname": "Mackiewicz",
        "role": "Marc Walker"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "non qui"
    }
  },
  {
    "id": 70,
    "name": "Do zmiany",
    "director": {
      "name": "Adelajda",
      "surname": "Lesiak"
    },
    "country": "Nauru",
    "genre": "Dokument",
    "premiere": "1999-03-12",
    "awards": "Oscar",
    "rating": 1.59,
    "numberOfRatings": 4826865,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Matylda",
        "surname": "Augustyniak",
        "role": "Beatrice Stanton"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "est nisi minim consequat"
    }
  },
  {
    "id": 71,
    "name": "Do zmiany",
    "director": {
      "name": "Marcin",
      "surname": "Tomys"
    },
    "country": "Croatia",
    "genre": "Horror",
    "premiere": "2012-12-06",
    "awards": "Malina",
    "rating": 3.03,
    "numberOfRatings": 4639081,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Tamara",
        "surname": "Iwański",
        "role": "Levi Hickle"
      },
      {
        "name": "Gracja",
        "surname": "Dominiak",
        "role": "Lawrence Bruen"
      },
      {
        "name": "Franciszka",
        "surname": "Makowski",
        "role": "Kenny Collier"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "aliquip sunt et exercitation exercitation"
    }
  },
  {
    "id": 72,
    "name": "Do zmiany",
    "director": {
      "name": "Henryk",
      "surname": "Cygan"
    },
    "country": "Samoa",
    "genre": "Akcja",
    "premiere": "1997-05-03",
    "awards": "Brak",
    "rating": 2.68,
    "numberOfRatings": 7347807,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Lilla",
        "surname": "Kaźmierczak",
        "role": "Iris Kozey"
      },
      {
        "name": "Brajan",
        "surname": "Stolarczyk",
        "role": "Jacqueline Anderson"
      },
      {
        "name": "Karolina",
        "surname": "Kołodziejczyk",
        "role": "Eloise Ratke"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "irure adipisicing do esse labore esse quis dolor"
    }
  },
  {
    "id": 73,
    "name": "Do zmiany",
    "director": {
      "name": "Porfiry",
      "surname": "Bartczak"
    },
    "country": "Faroe Islands",
    "genre": "Akcja",
    "premiere": "1990-10-21",
    "awards": "Brak",
    "rating": 3.59,
    "numberOfRatings": 9340050,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Monika",
        "surname": "Miśkiewicz",
        "role": "Lewis Rau"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": ""
    }
  },
  {
    "id": 74,
    "name": "Do zmiany",
    "director": {
      "name": "Aleksy",
      "surname": "Bednarek"
    },
    "country": "Cameroon",
    "genre": "Horror",
    "premiere": "2017-01-13",
    "awards": "Brak",
    "rating": 3.7,
    "numberOfRatings": 268597,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Wirginia",
        "surname": "Niedziela",
        "role": "Ashley Nikolaus"
      },
      {
        "name": "Rajnold",
        "surname": "Popławski",
        "role": "Luther Langworth"
      },
      {
        "name": "Konstanty",
        "surname": "Biernacki",
        "role": "Mae Feest"
      },
      {
        "name": "Stefan",
        "surname": "Marchewka",
        "role": "Margarita Hand"
      },
      {
        "name": "Larysa",
        "surname": "Frankowski",
        "role": "Marcus Doyle"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "ipsum"
    }
  },
  {
    "id": 75,
    "name": "Do zmiany",
    "director": {
      "name": "Aaron",
      "surname": "Młynarczyk"
    },
    "country": "Bosnia and Herzegovina",
    "genre": "Fantasy",
    "premiere": "2005-11-04",
    "awards": "Oscar",
    "rating": 3.08,
    "numberOfRatings": 2025223,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Walter",
        "surname": "Jaros",
        "role": "Patsy Davis"
      },
      {
        "name": "Ambroży",
        "surname": "Rusin",
        "role": "Stephen Fadel"
      },
      {
        "name": "Lucja",
        "surname": "Piwowarczyk",
        "role": "Courtney Spencer"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": ""
    }
  },
  {
    "id": 76,
    "name": "Do zmiany",
    "director": {
      "name": "Gonsalwy",
      "surname": "Stefaniak"
    },
    "country": "Heard Island and McDonald Islands",
    "genre": "Fantasy",
    "premiere": "2022-03-04",
    "awards": "Brak",
    "rating": 2.81,
    "numberOfRatings": 135404,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Agata",
        "surname": "Jurek",
        "role": "Bernadette Emmerich"
      },
      {
        "name": "Nikola",
        "surname": "Gajewski",
        "role": "Dolores Koch"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "aliqua fugiat Lorem pariatur nostrud nulla consequat non aliqua elit qui in sint excepteur do"
    }
  },
  {
    "id": 77,
    "name": "Do zmiany",
    "director": {
      "name": "Gwido",
      "surname": "Rudziński"
    },
    "country": "Ukraine",
    "genre": "Dokument",
    "premiere": "2013-08-18",
    "awards": "Brak",
    "rating": 3.04,
    "numberOfRatings": 2806549,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Katarzyna",
        "surname": "Markowski",
        "role": "Colleen Schinner"
      },
      {
        "name": "Gloria",
        "surname": "Czerwiński",
        "role": "Mario Murphy"
      },
      {
        "name": "Eliza",
        "surname": "Wolak",
        "role": "Margaret Waters"
      },
      {
        "name": "Wirginia",
        "surname": "Pawłowski",
        "role": "Stuart Kerluke"
      },
      {
        "name": "Makary",
        "surname": "Leśniak",
        "role": "Matthew Purdy"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "non et qui commodo cillum consectetur"
    }
  },
  {
    "id": 78,
    "name": "Do zmiany",
    "director": {
      "name": "Rajnold",
      "surname": "Smoliński"
    },
    "country": "Mauritius",
    "genre": "Akcja",
    "premiere": "2010-10-01",
    "awards": "Brak",
    "rating": 1.62,
    "numberOfRatings": 9817720,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Ksenia",
        "surname": "Zaręba",
        "role": "Antonio Kling"
      },
      {
        "name": "Angela",
        "surname": "Wierzbicki",
        "role": "Louis Heller"
      },
      {
        "name": "Jerzy",
        "surname": "Kulig",
        "role": "Brad Davis"
      },
      {
        "name": "Tamara",
        "surname": "Wilczyński",
        "role": "Herbert Harvey"
      },
      {
        "name": "Elżbieta",
        "surname": "Jaśkiewicz",
        "role": "Courtney Gaylord"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "occaecat magna nisi laboris et esse"
    }
  },
  {
    "id": 79,
    "name": "Do zmiany",
    "director": {
      "name": "Konrad",
      "surname": "Żurek"
    },
    "country": "Montserrat",
    "genre": "Dokument",
    "premiere": "2003-08-11",
    "awards": "Oscar",
    "rating": 1.63,
    "numberOfRatings": 5221521,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Wacław",
        "surname": "Sołtys",
        "role": "Louis Conn"
      },
      {
        "name": "Ofelia",
        "surname": "Jarząbek",
        "role": "Rufus Bailey"
      },
      {
        "name": "Zachary",
        "surname": "Kałuża",
        "role": "Allan Brekke"
      },
      {
        "name": "Maja",
        "surname": "Bartnik",
        "role": "Terence Gerhold"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "cillum ea ea velit irure magna aliqua elit do ut tempor anim aute minim irure laborum labore ut dolore"
    }
  },
  {
    "id": 80,
    "name": "Do zmiany",
    "director": {
      "name": "Wiktoria",
      "surname": "Wolski"
    },
    "country": "Mali",
    "genre": "Dokument",
    "premiere": "2017-03-20",
    "awards": "Brak",
    "rating": 1.6,
    "numberOfRatings": 1266130,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Greta",
        "surname": "Kucharski",
        "role": "Lora McKenzie"
      },
      {
        "name": "Demetriusz",
        "surname": "Kołodziej",
        "role": "Michael Gutkowski"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "sint labore proident tempor"
    }
  },
  {
    "id": 81,
    "name": "Do zmiany",
    "director": {
      "name": "Zachary",
      "surname": "Rutkowski"
    },
    "country": "Kyrgyz Republic",
    "genre": "Akcja",
    "premiere": "2000-02-27",
    "awards": "Brak",
    "rating": 4.39,
    "numberOfRatings": 7223482,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Arystarch",
        "surname": "Twardowski",
        "role": "Gwen Bradtke"
      },
      {
        "name": "Randolf",
        "surname": "Kotowski",
        "role": "Darin Leffler"
      },
      {
        "name": "Samuel",
        "surname": "Andrzejczak",
        "role": "Amber Reinger"
      },
      {
        "name": "Michał",
        "surname": "Adamus",
        "role": "Charlene Grant"
      },
      {
        "name": "Spirydion",
        "surname": "Bagiński",
        "role": "Candace Schmeler"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "occaecat sit occaecat exercitation mollit velit dolor consectetur nisi cillum est nostrud labore excepteur deserunt"
    }
  },
  {
    "id": 82,
    "name": "Do zmiany",
    "director": {
      "name": "Erast",
      "surname": "Majka"
    },
    "country": "Cayman Islands",
    "genre": "Akcja",
    "premiere": "2023-05-02",
    "awards": "Malina",
    "rating": 3.13,
    "numberOfRatings": 4509744,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Izabela",
        "surname": "Nawrocki",
        "role": "Emanuel Thiel"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "sunt tempor in nisi reprehenderit sunt adipisicing occaecat nostrud cillum voluptate deserunt eu officia non nostrud do duis ad ipsum"
    }
  },
  {
    "id": 83,
    "name": "Do zmiany",
    "director": {
      "name": "Hilarion",
      "surname": "Paszkowski"
    },
    "country": "Oman",
    "genre": "Animacja",
    "premiere": "1990-07-26",
    "awards": "Brak",
    "rating": 3.79,
    "numberOfRatings": 2309686,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Walenty",
        "surname": "Jastrzębski",
        "role": "Donna Dickens"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": ""
    }
  },
  {
    "id": 84,
    "name": "Do zmiany",
    "director": {
      "name": "Reginald",
      "surname": "Malicki"
    },
    "country": "Kenya",
    "genre": "Horror",
    "premiere": "2016-07-23",
    "awards": "Saturn",
    "rating": 1.89,
    "numberOfRatings": 1276832,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Maria",
        "surname": "Piórkowski",
        "role": "Eric O'Keefe"
      },
      {
        "name": "Henryka",
        "surname": "Białkowski",
        "role": "Jordan Bogan"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "mollit eiusmod aliqua"
    }
  },
  {
    "id": 85,
    "name": "Do zmiany",
    "director": {
      "name": "Roderyk",
      "surname": "Ratajczak"
    },
    "country": "Fiji",
    "genre": "Animacja",
    "premiere": "2006-05-05",
    "awards": "Saturn",
    "rating": 3.86,
    "numberOfRatings": 5171721,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Izabela",
        "surname": "Jagodziński",
        "role": "Lorraine Swift"
      },
      {
        "name": "Elwira",
        "surname": "Jarząbek",
        "role": "Mario Blick"
      },
      {
        "name": "Sara",
        "surname": "Paszkowski",
        "role": "Edward Hermiston"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "quis"
    }
  },
  {
    "id": 86,
    "name": "Do zmiany",
    "director": {
      "name": "Chloe",
      "surname": "Dąbkowski"
    },
    "country": "Turkey",
    "genre": "Animacja",
    "premiere": "1997-06-12",
    "awards": "Brak",
    "rating": 2.08,
    "numberOfRatings": 8707355,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Ferdynanda",
        "surname": "Orzechowski",
        "role": "Dan Wisozk"
      },
      {
        "name": "Nestor",
        "surname": "Rybicki",
        "role": "Gilberto Pagac"
      },
      {
        "name": "Eleonora",
        "surname": "Czyż",
        "role": "Eula Hilll"
      },
      {
        "name": "Arkady",
        "surname": "Kotowski",
        "role": "Rafael McDermott"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "irure veniam elit velit amet et"
    }
  },
  {
    "id": 87,
    "name": "Do zmiany",
    "director": {
      "name": "Feliks",
      "surname": "Janas"
    },
    "country": "United Kingdom",
    "genre": "Horror",
    "premiere": "2008-01-01",
    "awards": "Malina",
    "rating": 1.46,
    "numberOfRatings": 2609526,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Renata",
        "surname": "Chmielewski",
        "role": "Darnell Pfeffer"
      },
      {
        "name": "Wanda",
        "surname": "Rojek",
        "role": "Marguerite Hintz"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "nisi aliquip sit cupidatat sint sint"
    }
  },
  {
    "id": 88,
    "name": "Do zmiany",
    "director": {
      "name": "Andrzej",
      "surname": "Kaczor"
    },
    "country": "Bhutan",
    "genre": "Dokument",
    "premiere": "2001-05-14",
    "awards": "Oscar",
    "rating": 4.33,
    "numberOfRatings": 7586111,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Sylwia",
        "surname": "Kuczyński",
        "role": "Eloise Cartwright"
      },
      {
        "name": "Ewa",
        "surname": "Różański",
        "role": "Alice Zulauf"
      },
      {
        "name": "Witalis",
        "surname": "Sobczak",
        "role": "Dexter Cremin"
      },
      {
        "name": "Ksawery",
        "surname": "Podgórski",
        "role": "Winifred Price"
      },
      {
        "name": "Prokul",
        "surname": "Skoczylas",
        "role": "Elmer Mosciski"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "irure ut adipisicing laboris ex culpa nulla anim nisi irure elit"
    }
  },
  {
    "id": 89,
    "name": "Do zmiany",
    "director": {
      "name": "Michalina",
      "surname": "Włodarski"
    },
    "country": "Benin",
    "genre": "Akcja",
    "premiere": "2008-04-21",
    "awards": "Brak",
    "rating": 2.54,
    "numberOfRatings": 3586076,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Ida",
        "surname": "Mazurkiewicz",
        "role": "Tomas Kris"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "culpa velit dolore nostrud veniam"
    }
  },
  {
    "id": 90,
    "name": "Do zmiany",
    "director": {
      "name": "Filemon",
      "surname": "Wierzbicki"
    },
    "country": "Mexico",
    "genre": "Akcja",
    "premiere": "2006-05-22",
    "awards": "Brak",
    "rating": 1.15,
    "numberOfRatings": 559975,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Krystyna",
        "surname": "Zwoliński",
        "role": "Carlos Littel"
      },
      {
        "name": "Jakubina",
        "surname": "Ziętek",
        "role": "Rudy Erdman"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "do amet duis culpa labore veniam officia laborum"
    }
  },
  {
    "id": 91,
    "name": "Do zmiany",
    "director": {
      "name": "Jozue",
      "surname": "Wyszyński"
    },
    "country": "Micronesia",
    "genre": "Dokument",
    "premiere": "2019-04-01",
    "awards": "Brak",
    "rating": 1.08,
    "numberOfRatings": 3634332,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Zuzanna",
        "surname": "Urbanek",
        "role": "Kathleen Parker"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "aliqua consectetur ipsum est sunt"
    }
  },
  {
    "id": 92,
    "name": "Do zmiany",
    "director": {
      "name": "Konstanty",
      "surname": "Olejniczak"
    },
    "country": "Bouvet Island (Bouvetoya)",
    "genre": "Akcja",
    "premiere": "1995-01-09",
    "awards": "Saturn",
    "rating": 4.74,
    "numberOfRatings": 3661055,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Larysa",
        "surname": "Górniak",
        "role": "Marlon Rodriguez"
      },
      {
        "name": "Magdalena",
        "surname": "Tomczak",
        "role": "Bert Crooks"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "voluptate ex occaecat non tempor nisi ea ipsum sit eiusmod veniam consectetur consequat irure voluptate pariatur sint in"
    }
  },
  {
    "id": 93,
    "name": "Do zmiany",
    "director": {
      "name": "Łukasz",
      "surname": "Zwoliński"
    },
    "country": "Micronesia",
    "genre": "Animacja",
    "premiere": "2022-04-24",
    "awards": "Brak",
    "rating": 4.95,
    "numberOfRatings": 7534413,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Karolina",
        "surname": "Marek",
        "role": "Willard Miller"
      },
      {
        "name": "Justyn",
        "surname": "Leszczyński",
        "role": "Miranda Kohler"
      },
      {
        "name": "Apollinary",
        "surname": "Majewski",
        "role": "Lance Rau"
      },
      {
        "name": "Cyrus",
        "surname": "Puchalski",
        "role": "Marlon Dibbert"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "in Lorem ex consectetur amet"
    }
  },
  {
    "id": 94,
    "name": "Do zmiany",
    "director": {
      "name": "Kornel",
      "surname": "Morawski"
    },
    "country": "Mauritius",
    "genre": "Akcja",
    "premiere": "2003-02-18",
    "awards": "Saturn",
    "rating": 2.6,
    "numberOfRatings": 7594717,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Florencja",
        "surname": "Nawrocki",
        "role": "Ida Blick"
      },
      {
        "name": "Izabela",
        "surname": "Cieślak",
        "role": "Myrtle Hills"
      },
      {
        "name": "Łucja",
        "surname": "Wysocki",
        "role": "Vickie Pacocha"
      },
      {
        "name": "Terencjusz",
        "surname": "Górniak",
        "role": "Connie Doyle"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "eiusmod sunt deserunt minim nisi irure in eiusmod minim ea sunt labore nostrud ut officia laboris ea ex ad laboris"
    }
  },
  {
    "id": 95,
    "name": "Do zmiany",
    "director": {
      "name": "Luiza",
      "surname": "Cieśla"
    },
    "country": "Belgium",
    "genre": "Akcja",
    "premiere": "2023-10-26",
    "awards": "Brak",
    "rating": 4.84,
    "numberOfRatings": 9776714,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Sara",
        "surname": "Misztal",
        "role": "Sylvia Sipes"
      },
      {
        "name": "Angelina",
        "surname": "Grabowski",
        "role": "Andy White"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "minim voluptate esse amet"
    }
  },
  {
    "id": 96,
    "name": "Do zmiany",
    "director": {
      "name": "Filemon",
      "surname": "Wypych"
    },
    "country": "Niger",
    "genre": "Animacja",
    "premiere": "2020-02-23",
    "awards": "Malina",
    "rating": 2.84,
    "numberOfRatings": 9587273,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Izajasz",
        "surname": "Stachura",
        "role": "Alice D'Amore"
      },
      {
        "name": "Helena",
        "surname": "Wojtczak",
        "role": "Kelly Schmeler"
      },
      {
        "name": "Andrzej",
        "surname": "Mikołajczak",
        "role": "Brian Klocko"
      },
      {
        "name": "Natalia",
        "surname": "Skalski",
        "role": "Reginald Spinka"
      },
      {
        "name": "Ilona",
        "surname": "Ossowski",
        "role": "Lela Keeling"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "labore cillum veniam est culpa"
    }
  },
  {
    "id": 97,
    "name": "Do zmiany",
    "director": {
      "name": "Walentyna",
      "surname": "Marciniak"
    },
    "country": "Faroe Islands",
    "genre": "Dokument",
    "premiere": "2010-08-22",
    "awards": "Brak",
    "rating": 2.98,
    "numberOfRatings": 4194464,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Aleksander",
        "surname": "Kos",
        "role": "Angela Pagac"
      },
      {
        "name": "Nadzieja",
        "surname": "Ślusarczyk",
        "role": "Velma Kerluke"
      },
      {
        "name": "Eudoksja",
        "surname": "Karpiński",
        "role": "Jeannette McKenzie"
      },
      {
        "name": "Paweł",
        "surname": "Misiak",
        "role": "Salvador Waelchi"
      },
      {
        "name": "Aaron",
        "surname": "Jóźwiak",
        "role": "Holly Schroeder"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "exercitation occaecat occaecat adipisicing laboris minim proident ea deserunt est aliquip amet elit"
    }
  },
  {
    "id": 98,
    "name": "Do zmiany",
    "director": {
      "name": "Gertruda",
      "surname": "Zaręba"
    },
    "country": "Isle of Man",
    "genre": "Akcja",
    "premiere": "1998-08-07",
    "awards": "Brak",
    "rating": 4.64,
    "numberOfRatings": 5851695,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Miron",
        "surname": "Góral",
        "role": "Leroy Pfeffer"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "aliqua dolor amet ex ullamco aute excepteur exercitation mollit id et minim dolore Lorem fugiat culpa laborum exercitation commodo pariatur"
    }
  },
  {
    "id": 99,
    "name": "Do zmiany",
    "director": {
      "name": "Ansgary",
      "surname": "Dobrowolski"
    },
    "country": "Mozambique",
    "genre": "Animacja",
    "premiere": "2015-07-24",
    "awards": "Brak",
    "rating": 4.55,
    "numberOfRatings": 8948006,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Klaudia",
        "surname": "Twardowski",
        "role": "Alberta Lynch"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": ""
    }
  },
  {
    "id": 100,
    "name": "Do zmiany",
    "director": {
      "name": "Emilia",
      "surname": "Janik"
    },
    "country": "Montenegro",
    "genre": "Horror",
    "premiere": "2015-11-16",
    "awards": "Brak",
    "rating": 1.35,
    "numberOfRatings": 2864271,
    "trailer": "https://youtu.be/dQw4w9WgXcQ?si=iBcqlYK4rZF59T2o",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "actors": [
      {
        "name": "Malwina",
        "surname": "Kot",
        "role": "Rachael Heller"
      },
      {
        "name": "Borys",
        "surname": "Dudek",
        "role": "Cora Ward"
      }
    ],
    "gallery": {
      "url": "assets/images/pepe.png",
      "altText": "aute sunt minim velit elit excepteur Lorem magna in minim laborum nisi consequat et ad"
    }
  }
]



