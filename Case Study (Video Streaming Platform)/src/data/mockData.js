// Mock video data for the streaming platform

export const mockVideos = [
    // Trending
    {
        id: 1,
        title: "Epic Mountain Climbing Adventure 2024",
        description: "Join us on an incredible journey to the summit of the highest peaks in the world. Experience breathtaking views, challenging terrain, and the triumph of reaching the top.",
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        category: "Trending",
        duration: "15:30",
        views: "2.3M",
        uploadDate: "2024-01-15",
        channel: {
            name: "Adventure Seekers",
            avatar: "https://i.pravatar.cc/150?img=1",
            subscribers: "5.2M"
        }
    },
    {
        id: 2,
        title: "Ultimate Gaming Highlights - Best Moments 2024",
        description: "The most epic gaming moments from the biggest titles of 2024. Watch as professional gamers pull off incredible plays and nail-biting clutches.",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        category: "Gaming",
        duration: "20:15",
        views: "5.1M",
        uploadDate: "2024-01-18",
        channel: {
            name: "Pro Gaming Hub",
            avatar: "https://i.pravatar.cc/150?img=2",
            subscribers: "8.9M"
        }
    },
    {
        id: 3,
        title: "Relaxing Piano Music for Study & Focus",
        description: "3 hours of peaceful piano melodies designed to help you concentrate, study, and relax. Perfect background music for work or meditation.",
        thumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        category: "Music",
        duration: "180:00",
        views: "12.5M",
        uploadDate: "2024-01-10",
        channel: {
            name: "Peaceful Melodies",
            avatar: "https://i.pravatar.cc/150?img=3",
            subscribers: "15.3M"
        }
    },
    {
        id: 4,
        title: "How AI is Changing the World in 2024",
        description: "An in-depth look at the latest artificial intelligence breakthroughs and how they're transforming industries, healthcare, and daily life.",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        category: "Tech",
        duration: "25:45",
        views: "3.8M",
        uploadDate: "2024-01-20",
        channel: {
            name: "Tech Explained",
            avatar: "https://i.pravatar.cc/150?img=4",
            subscribers: "6.7M"
        }
    },
    {
        id: 5,
        title: "Champions League Final 2024 - Full Match Highlights",
        description: "Watch the most exciting moments from the UEFA Champions League final. Goals, saves, and unforgettable plays from Europe's best teams.",
        thumbnail: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        category: "Sports",
        duration: "18:20",
        views: "9.2M",
        uploadDate: "2024-01-17",
        channel: {
            name: "Football World",
            avatar: "https://i.pravatar.cc/150?img=5",
            subscribers: "22.1M"
        }
    },

    // Gaming
    {
        id: 6,
        title: "Minecraft Survival - Building the Ultimate Base",
        description: "Watch as we construct an incredible underground fortress complete with automatic farms, secret rooms, and epic redstone contraptions.",
        thumbnail: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        category: "Gaming",
        duration: "35:12",
        views: "4.2M",
        uploadDate: "2024-01-14",
        channel: {
            name: "Minecraft Masters",
            avatar: "https://i.pravatar.cc/150?img=6",
            subscribers: "11.5M"
        }
    },
    {
        id: 7,
        title: "Fortnite Chapter 5 - New Map Exploration",
        description: "Full map tour of the brand new Fortnite chapter! Discover all the new locations, weapons, and secrets hidden across the island.",
        thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        category: "Gaming",
        duration: "22:30",
        views: "6.8M",
        uploadDate: "2024-01-16",
        channel: {
            name: "Battle Royale Pro",
            avatar: "https://i.pravatar.cc/150?img=7",
            subscribers: "9.3M"
        }
    },
    {
        id: 8,
        title: "Dark Souls Complete Walkthrough - Part 1",
        description: "The ultimate guide to beating Dark Souls! Follow along as we explore every area, defeat every boss, and find all the secrets.",
        thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        category: "Gaming",
        duration: "45:18",
        views: "2.1M",
        uploadDate: "2024-01-12",
        channel: {
            name: "Souls Speedrunner",
            avatar: "https://i.pravatar.cc/150?img=8",
            subscribers: "4.6M"
        }
    },

    // Music
    {
        id: 9,
        title: "Epic Orchestral Music - Powerful & Dramatic",
        description: "Feel the power of a full symphony orchestra performing the most dramatic and inspiring classical compositions.",
        thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        category: "Music",
        duration: "60:00",
        views: "8.9M",
        uploadDate: "2024-01-11",
        channel: {
            name: "Epic Music World",
            avatar: "https://i.pravatar.cc/150?img=9",
            subscribers: "18.7M"
        }
    },
    {
        id: 10,
        title: "Jazz Night - Smooth Saxophone & Piano",
        description: "Unwind with smooth jazz featuring incredible saxophone solos and delicate piano melodies. Perfect for evening relaxation.",
        thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        category: "Music",
        duration: "90:00",
        views: "5.4M",
        uploadDate: "2024-01-09",
        channel: {
            name: "Jazz Lounge",
            avatar: "https://i.pravatar.cc/150?img=10",
            subscribers: "7.2M"
        }
    },
    {
        id: 11,
        title: "Top 50 Pop Hits 2024 - Non Stop Mix",
        description: "The biggest pop hits of 2024 in one continuous mix. Dance, sing along, and enjoy the best music of the year!",
        thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        category: "Music",
        duration: "120:00",
        views: "15.2M",
        uploadDate: "2024-01-19",
        channel: {
            name: "Pop Music Daily",
            avatar: "https://i.pravatar.cc/150?img=11",
            subscribers: "25.8M"
        }
    },

    // Movies & Entertainment
    {
        id: 12,
        title: "Behind the Scenes: Making of a Blockbuster",
        description: "Go behind the camera and see how Hollywood's biggest movies are made. Exclusive interviews, set tours, and visual effects breakdowns.",
        thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        category: "Movies",
        duration: "42:15",
        views: "7.6M",
        uploadDate: "2024-01-13",
        channel: {
            name: "Movie Magic",
            avatar: "https://i.pravatar.cc/150?img=12",
            subscribers: "13.4M"
        }
    },
    {
        id: 13,
        title: "Best Movie Scenes of All Time - Epic Compilation",
        description: "Relive the most iconic moments in cinema history. From thriller showdowns to heartwarming dramas, these scenes defined generations.",
        thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        category: "Movies",
        duration: "55:30",
        views: "11.3M",
        uploadDate: "2024-01-08",
        channel: {
            name: "Cinema Classics",
            avatar: "https://i.pravatar.cc/150?img=13",
            subscribers: "19.2M"
        }
    },

    // Tech
    {
        id: 14,
        title: "Building Your First PC in 2024 - Complete Guide",
        description: "Step-by-step tutorial for building a high-performance gaming PC. Everything you need to know from choosing parts to cable management.",
        thumbnail: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        category: "Tech",
        duration: "38:45",
        views: "4.9M",
        uploadDate: "2024-01-15",
        channel: {
            name: "PC Build Guide",
            avatar: "https://i.pravatar.cc/150?img=14",
            subscribers: "8.1M"
        }
    },
    {
        id: 15,
        title: "iPhone 16 Pro Max Review - Is It Worth It?",
        description: "Comprehensive review of Apple's latest flagship smartphone. Camera tests, performance benchmarks, and real-world usage over 2 weeks.",
        thumbnail: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        category: "Tech",
        duration: "28:20",
        views: "8.7M",
        uploadDate: "2024-01-18",
        channel: {
            name: "Tech Reviews Pro",
            avatar: "https://i.pravatar.cc/150?img=15",
            subscribers: "12.6M"
        }
    },
    {
        id: 16,
        title: "Future of Electric Vehicles - 2024 & Beyond",
        description: "Exploring the latest innovations in EV technology, battery advancements, and what's coming in the next generation of electric cars.",
        thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        category: "Tech",
        duration: "31:55",
        views: "3.2M",
        uploadDate: "2024-01-14",
        channel: {
            name: "Future Tech Daily",
            avatar: "https://i.pravatar.cc/150?img=16",
            subscribers: "6.8M"
        }
    },

    // Sports
    {
        id: 17,
        title: "NBA Top 10 Plays of the Week",
        description: "The most incredible dunks, blocks, and buzzer-beaters from this week's NBA games. Watch the best athletes in basketball do the impossible.",
        thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        category: "Sports",
        duration: "12:40",
        views: "6.5M",
        uploadDate: "2024-01-17",
        channel: {
            name: "NBA Highlights",
            avatar: "https://i.pravatar.cc/150?img=17",
            subscribers: "16.3M"
        }
    },
    {
        id: 18,
        title: "Ultimate Skateboarding Tricks - Pro Montage",
        description: "Watch pro skaters land the most insane tricks at the world's best skate parks. Kickflips, grinds, and aerials that defy gravity.",
        thumbnail: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        category: "Sports",
        duration: "16:25",
        views: "2.8M",
        uploadDate: "2024-01-12",
        channel: {
            name: "Skate Life",
            avatar: "https://i.pravatar.cc/150?img=18",
            subscribers: "5.9M"
        }
    },
    {
        id: 19,
        title: "F1 Monaco Grand Prix 2024 - Race Highlights",
        description: "Experience the thrills of Formula 1's most prestigious race through the streets of Monte Carlo. Overtakes, crashes, and championship drama.",
        thumbnail: "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        category: "Sports",
        duration: "24:50",
        views: "10.1M",
        uploadDate: "2024-01-16",
        channel: {
            name: "F1 Racing",
            avatar: "https://i.pravatar.cc/150?img=19",
            subscribers: "14.7M"
        }
    },

    // Education
    {
        id: 20,
        title: "Learn Python in 60 Minutes - Complete Beginner Course",
        description: "Master the basics of Python programming in just one hour. Perfect for absolute beginners with no coding experience required.",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        category: "Education",
        duration: "60:00",
        views: "5.7M",
        uploadDate: "2024-01-10",
        channel: {
            name: "Code Academy",
            avatar: "https://i.pravatar.cc/150?img=20",
            subscribers: "9.4M"
        }
    },
    {
        id: 21,
        title: "The Complete History of Ancient Rome",
        description: "Journey through 1000 years of Roman civilization. From the founding of Rome to the fall of the Western Empire, explore it all.",
        thumbnail: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        category: "Education",
        duration: "75:30",
        views: "3.9M",
        uploadDate: "2024-01-09",
        channel: {
            name: "History Explained",
            avatar: "https://i.pravatar.cc/150?img=21",
            subscribers: "7.8M"
        }
    },
    {
        id: 22,
        title: "Quantum Physics Explained for Beginners",
        description: "Unlock the mysteries of quantum mechanics with simple explanations and visual demonstrations. Make sense of the subatomic world.",
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        category: "Education",
        duration: "42:15",
        views: "4.3M",
        uploadDate: "2024-01-11",
        channel: {
            name: "Science Simplified",
            avatar: "https://i.pravatar.cc/150?img=22",
            subscribers: "11.2M"
        }
    },

    // More Trending
    {
        id: 23,
        title: "Exploring Tokyo's Hidden Gems - Travel Vlog",
        description: "Discover the secret spots that tourists never see. From underground bars to rooftop gardens, experience the real Tokyo.",
        thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        category: "Trending",
        duration: "32:45",
        views: "6.2M",
        uploadDate: "2024-01-19",
        channel: {
            name: "World Wanderer",
            avatar: "https://i.pravatar.cc/150?img=23",
            subscribers: "10.5M"
        }
    },
    {
        id: 24,
        title: "Gordon Ramsay Cooks the Perfect Steak",
        description: "Learn from the master chef himself as he demonstrates the techniques for cooking restaurant-quality steak at home.",
        thumbnail: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        category: "Trending",
        duration: "18:30",
        views: "14.8M",
        uploadDate: "2024-01-20",
        channel: {
            name: "Master Chef Kitchen",
            avatar: "https://i.pravatar.cc/150?img=24",
            subscribers: "28.3M"
        }
    },
    {
        id: 25,
        title: "Wildlife Documentary - Life in the Amazon Rainforest",
        description: "Stunning 4K footage of the Amazon's most incredible creatures. Witness nature's beauty and the delicate balance of the ecosystem.",
        thumbnail: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=450&fit=crop",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        category: "Trending",
        duration: "48:20",
        views: "9.7M",
        uploadDate: "2024-01-13",
        channel: {
            name: "Nature Planet",
            avatar: "https://i.pravatar.cc/150?img=25",
            subscribers: "21.6M"
        }
    }
];

export const categories = [
    "Trending",
    "Gaming",
    "Music",
    "Movies",
    "Tech",
    "Sports",
    "Education"
];

// Helper function to get videos by category
export const getVideosByCategory = (category) => {
    if (category === "All") return mockVideos;
    return mockVideos.filter(video => video.category === category);
};

// Helper function to get video by ID
export const getVideoById = (id) => {
    return mockVideos.find(video => video.id === parseInt(id));
};

// Helper function to get random videos (for recommendations)
export const getRandomVideos = (count, excludeId = null) => {
    let videos = excludeId
        ? mockVideos.filter(v => v.id !== excludeId)
        : [...mockVideos];

    // Shuffle array
    for (let i = videos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [videos[i], videos[j]] = [videos[j], videos[i]];
    }

    return videos.slice(0, count);
};
