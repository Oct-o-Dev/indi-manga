// prisma/seed.ts
import { prisma } from '../src/lib/db';

const MANGAS = [
  // --- ACTION / ADVENTURE ---
  {
    title: "Solo Leveling",
    slug: "solo-leveling",
    description: "In a world where hunters, humans who possess magical abilities, must battle deadly monsters...",
    author: "Chugong",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/9/9c/Solo_Leveling_Webtoon_cover.png",
    status: "Completed",
    releaseYear: 2018,
    rating: 4.9,
    genres: ["Action", "Fantasy", "System"],
    views: 250000,
    totalChapters: 200 // <--- ADDED THIS
  },
  {
    title: "One Piece",
    slug: "one-piece",
    description: "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger.",
    author: "Eiichiro Oda",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Home%29.jpg",
    status: "Ongoing",
    releaseYear: 1997,
    rating: 4.9,
    genres: ["Adventure", "Action", "Comedy"],
    views: 500000,
    totalChapters: 1100 // Real count!
  },
  {
    title: "Jujutsu Kaisen",
    slug: "jujutsu-kaisen",
    description: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself.",
    author: "Gege Akutami",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen_cover.jpg",
    status: "Ongoing",
    releaseYear: 2018,
    rating: 4.8,
    genres: ["Action", "Supernatural", "School"],
    views: 320000,
    totalChapters: 250
  },
  {
    title: "Chainsaw Man",
    slug: "chainsaw-man",
    description: "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes.",
    author: "Tatsuki Fujimoto",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/3/34/Chainsaw_Man_vol_1.jpg",
    status: "Ongoing",
    releaseYear: 2018,
    rating: 4.8,
    genres: ["Action", "Horror", "Comedy"],
    views: 280000,
    totalChapters: 160
  },
  {
    title: "Naruto",
    slug: "naruto",
    description: "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, searches for recognition from everyone in his village.",
    author: "Masashi Kishimoto",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    status: "Completed",
    releaseYear: 1999,
    rating: 4.7,
    genres: ["Action", "Adventure", "Martial Arts"],
    views: 400000,
    totalChapters: 700
  },
  {
    title: "Bleach",
    slug: "bleach",
    description: "Ichigo Kurosaki has always been able to see ghosts, but this ability doesn't change his life nearly as much as his close encounter with Rukia Kuchiki.",
    author: "Tite Kubo",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/7/72/Bleach_Vol._1_cover.png",
    status: "Completed",
    releaseYear: 2001,
    rating: 4.6,
    genres: ["Action", "Supernatural"],
    views: 180000,
    totalChapters: 686
  },
  {
    title: "Demon Slayer",
    slug: "demon-slayer",
    description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko.",
    author: "Koyoharu Gotouge",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg",
    status: "Completed",
    releaseYear: 2016,
    rating: 4.8,
    genres: ["Action", "Historical", "Supernatural"],
    views: 350000,
    totalChapters: 205
  },
  {
    title: "Hunter x Hunter",
    slug: "hunter-x-hunter",
    description: "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness.",
    author: "Yoshihiro Togashi",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/0/0f/Hunter_x_Hunter_cover_-_vol1.jpg",
    status: "Hiatus",
    releaseYear: 1998,
    rating: 4.9,
    genres: ["Adventure", "Fantasy"],
    views: 220000,
    totalChapters: 400
  },
  {
    title: "Dragon Ball Z",
    slug: "dragon-ball-z",
    description: "Son Goku, a fighter with a monkey tail, goes on a quest with an assortment of odd characters.",
    author: "Akira Toriyama",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/c/c9/DB_Vol_1_Cover.jpg",
    status: "Completed",
    releaseYear: 1984,
    rating: 4.8,
    genres: ["Action", "Martial Arts", "Sci-Fi"],
    views: 450000,
    totalChapters: 519
  },

  // --- SEINEN / DARK / PSYCHOLOGICAL ---
  {
    title: "Berserk",
    slug: "berserk",
    description: "Guts, a wandering mercenary known as the Black Swordsman, seeks sanctuary from the demonic forces that pursue him.",
    author: "Kentaro Miura",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/4/45/Berserk_vol01.jpg",
    status: "Ongoing",
    releaseYear: 1989,
    rating: 4.9,
    genres: ["Dark Fantasy", "Horror", "Tragedy"],
    views: 310000,
    totalChapters: 370
  },
  {
    title: "Vinland Saga",
    slug: "vinland-saga",
    description: "Thorfinn, the son of one of the Vikings' greatest warriors, is among the finest fighters.",
    author: "Makoto Yukimura",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Vinland_Saga_volume_1_cover.jpg/220px-Vinland_Saga_volume_1_cover.jpg",
    status: "Ongoing",
    releaseYear: 2005,
    rating: 4.8,
    genres: ["Historical", "Action", "Drama"],
    views: 180000,
    totalChapters: 210
  },
  {
    title: "Vagabond",
    slug: "vagabond",
    description: "Growing up in 16th century Sengoku era Japan, Shinmen Takezo is shunned by the local villagers as a devil child.",
    author: "Takehiko Inoue",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/3/30/Vagabond_1.jpg",
    status: "Hiatus",
    releaseYear: 1998,
    rating: 4.9,
    genres: ["Historical", "Samurai", "Art"],
    views: 160000,
    totalChapters: 327
  },
  {
    title: "Monster",
    slug: "monster",
    description: "Dr. Kenzo Tenma saves the life of a young boy, Johan Liebert, only to discover later that the boy is a monstrous serial killer.",
    author: "Naoki Urasawa",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/2/23/Monster_manga_Vol_1_cover.jpg",
    status: "Completed",
    releaseYear: 1994,
    rating: 4.9,
    genres: ["Mystery", "Psychological", "Thriller"],
    views: 140000,
    totalChapters: 162
  },
  {
    title: "Tokyo Ghoul",
    slug: "tokyo-ghoul",
    description: "A college student is attacked by a ghoul, a being that feeds on human flesh.",
    author: "Sui Ishida",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/e/e5/Tokyo_Ghoul_volume_1_cover.jpg",
    status: "Completed",
    releaseYear: 2011,
    rating: 4.6,
    genres: ["Horror", "Supernatural", "Action"],
    views: 260000,
    totalChapters: 143
  },

  // --- SPORTS ---
  {
    title: "Haikyuu!!",
    slug: "haikyuu",
    description: "Determined to be like the volleyball championship's star player nicknamed 'the Small Giant', Shoyo joins his school's volleyball club.",
    author: "Haruichi Furudate",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/Haikyu_Volume_1.jpg",
    status: "Completed",
    releaseYear: 2012,
    rating: 4.8,
    genres: ["Sports", "School", "Comedy"],
    views: 210000,
    totalChapters: 402
  },
  {
    title: "Blue Lock",
    slug: "blue-lock",
    description: "A split-second decision costs Yoichi Isagi the chance to go to Nationals. He is invited to join 'Blue Lock'.",
    author: "Muneyuki Kaneshiro",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/1/1d/Blue_Lock_volume_1_cover.jpg",
    status: "Ongoing",
    releaseYear: 2018,
    rating: 4.7,
    genres: ["Sports", "Psychological"],
    views: 230000,
    totalChapters: 250
  },
  {
    title: "Slam Dunk",
    slug: "slam-dunk",
    description: "Hanamichi Sakuragi is a delinquent and the leader of a gang. He joins the basketball team to impress a girl.",
    author: "Takehiko Inoue",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/8/80/Slam_Dunk_cover.jpg",
    status: "Completed",
    releaseYear: 1990,
    rating: 4.9,
    genres: ["Sports", "Comedy", "Drama"],
    views: 190000,
    totalChapters: 276
  },

  // --- ROMANCE / COMEDY / SOL ---
  {
    title: "Kaguya-sama: Love is War",
    slug: "kaguya-sama",
    description: "Two geniuses, Kaguya Shinomiya and Miyuki Shirogane, have fallen for each other, but are too proud to confess.",
    author: "Aka Akasaka",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/3/30/Kaguya-sama_Love_Is_War_volume_1_cover.jpg",
    status: "Completed",
    releaseYear: 2015,
    rating: 4.8,
    genres: ["Romance", "Comedy", "Psychological"],
    views: 175000,
    totalChapters: 281
  },
  {
    title: "Spy x Family",
    slug: "spy-x-family",
    description: "A spy on an undercover mission gets married and adopts a child as part of his cover.",
    author: "Tatsuya Endo",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Spy_x_Family_vol_1.jpg",
    status: "Ongoing",
    releaseYear: 2019,
    rating: 4.8,
    genres: ["Comedy", "Action", "Slice of Life"],
    views: 310000,
    totalChapters: 95
  },
  {
    title: "Horimiya",
    slug: "horimiya",
    description: "A secret life is the one thing they have in common.",
    author: "HERO",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/5/5d/Horimiya_volume_1_cover.jpg",
    status: "Completed",
    releaseYear: 2011,
    rating: 4.7,
    genres: ["Romance", "School", "Slice of Life"],
    views: 155000,
    totalChapters: 125
  },

  // --- MANHWA / OTHERS ---
  {
    title: "Tower of God",
    slug: "tower-of-god",
    description: "Twenty-Fifth Bam has spent his life trapped beneath a vast and mysterious Tower.",
    author: "SIU",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/3/36/Tower_of_God_Volume_1_Cover.jpg",
    status: "Ongoing",
    releaseYear: 2010,
    rating: 4.7,
    genres: ["Fantasy", "Adventure"],
    views: 210000,
    totalChapters: 550
  },
  {
    title: "The Beginning After The End",
    slug: "tbate",
    description: "King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability.",
    author: "TurtleMe",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/d/d4/The_Beginning_After_the_End_Volume_1.jpg",
    status: "Ongoing",
    releaseYear: 2018,
    rating: 4.8,
    genres: ["Isekai", "Fantasy", "Action"],
    views: 240000,
    totalChapters: 175
  },
  {
    title: "Omniscient Reader",
    slug: "omniscient-reader",
    description: "Kim Dokja does not consider himself the protagonist of his own life. He is merely a reader of a web novel.",
    author: "SingNsong",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/1/1a/Omniscient_Reader_Viewpoint_Manhwa_cover.jpg",
    status: "Ongoing",
    releaseYear: 2020,
    rating: 4.9,
    genres: ["Fantasy", "Apocalypse"],
    views: 270000,
    totalChapters: 180
  }
];

async function main() {
  console.log('🌱 Starting seed...');

  for (const mangaData of MANGAS) {
    // 1. Upsert Manga
    const manga = await prisma.manga.upsert({
      where: { slug: mangaData.slug },
      update: {}, // Don't update if exists
      create: {
        title: mangaData.title,
        slug: mangaData.slug,
        description: mangaData.description,
        author: mangaData.author,
        coverUrl: mangaData.coverUrl,
        status: mangaData.status,
        releaseYear: mangaData.releaseYear,
        views: mangaData.views,
        rating: mangaData.rating,
        genres: mangaData.genres,
      }
    });

    console.log(`Checking chapters for: ${manga.title} (${mangaData.totalChapters} chapters)`);

    // 2. Generate Chapter Data in Bulk
    // We only create chapters if they don't exist to avoid duplicates or slow "upserts" on 1000 items
    
    const existingChaptersCount = await prisma.chapter.count({
        where: { mangaId: manga.id }
    });

    if (existingChaptersCount === 0) {
        console.log(` - Creating ${mangaData.totalChapters} chapters...`);
        
        const chaptersToCreate = [];
        
        // Loop to create the large array of objects
        for (let i = 1; i <= mangaData.totalChapters; i++) {
            chaptersToCreate.push({
                number: i,
                title: `Chapter ${i}`,
                mangaId: manga.id,
                pages: [
                    "https://placehold.co/800x1200/1a1a1a/white?text=Page+1",
                    "https://placehold.co/800x1200/2a2a2a/white?text=Page+2",
                    "https://placehold.co/800x1200/3a3a3a/white?text=Page+3"
                ]
            });
        }

        // 3. Batch Insert (High Performance)
        // createMany is much faster than looping through create()
        await prisma.chapter.createMany({
            data: chaptersToCreate,
            skipDuplicates: true
        });
        
        console.log(` - Done.`);
    } else {
        console.log(` - Chapters already exist. Skipping.`);
    }
  }

  console.log('✅ Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });