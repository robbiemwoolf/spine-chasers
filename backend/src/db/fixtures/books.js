const books = [
    {   
        isbn: 9781683964681,
        tags: [ 'bodyhorror', 'darkweb', 'horror', 'graphicnovel' ]
    },
    {
        isbn: 9780593124819,
        tags: [ 'headbangers' ]
    },
    {
        isbn: 9781984818676,
        tags: [ 'antihero', 'magic', 'sleepingbeauty', 'retelling', ]
    },
    {
        isbn: 9780375703768,
        tags: [ 'spookyhouse' ]
    },
    {
        isbn: 9781974711826,
        tags: [ 'inaband', 'bl', 'gay', 'lgbtqia' ]
    },
    {
        isbn: 9781974723676,
        tags: [ 'inaband', 'bl', 'gay', 'lgbtqia' ]
    },
    {
        isbn: 9781974711833,
        tags: [ 'inaband', 'bl', 'gay', 'lgbtqia' ]
    },
    {
        isbn: 9781974711857,
        tags: [ 'inaband', 'bl', 'gay', 'lgbtqia' ]
    },
    {
        isbn: 9781974711864,
        tags: [ 'inaband', 'bl', 'gay', 'lgbtqia' ]
    },
    {
        isbn: 9781974711840,
        tags: [ 'inaband', 'bl', 'gay', 'lgbtqia' ]
    },
    {
        isbn: 9780062943149,
        tags: [ 'werewolves', 'meangirls', 'lgbtqia', 'sapphic' ]
    },
    {
        isbn: 9780553448184,
        tags: [ 'femalenarrator', 'drama', 'foreign' ]
    },
    {
        isbn: 9780738767529,
        tags: [ 'nonfiction', 'selfhelp', 'selflove' ]
    },
    {
        isbn: 9781335212795,
        tags: [ 'witches', 'fae', 'magic', 'fantasy' ]
    },
    {
        isbn: 9780142422939,
        tags: [ 'sad', 'contemporary', 'lgbtqia' ]
    },
    {
        isbn: 9780061148514,
        tags: [ 'classics', 'depression' ]
    },
    {
        isbn: 9781492658276,
        tags: [ 'contemporary', 'gay', 'lgbtqia' ]
    },
    {
        isbn: 9781982150921,
        tags: [ 'cannibalism', 'dystopian', 'horror', 'foreign' ]
    },
    {
        isbn: 9781250800152,
        tags: [ 'nonfiction', 'witchcraft' ]
    },
    {
        isbn: 9781612197760,
        tags: [ 'nonfiction', '1970s', 'music' ]
    },
    {
        isbn: 9780679763307,
        tags: [ 'nonfiction', 'bipolar', 'memoir' ]
    },
    {
        isbn: 9780738756035,
        tags: [ 'nonfiction', 'magic', 'astrology', 'sacredfeminine' ]
    },
    {
        isbn: 9780593327791,
        tags: [ 'nonfiction', 'luciddreaming', 'dreaminterpretation' ]
    },
    {
        isbn: 9781402778711,
        tags: [ 'nonfiction', 'reference', 'crystals' ]
    },
    {
        isbn: 9781591430926,
        tags: [ 'nonfiction', 'reference', 'sacredgeometry' ]
    },
    {
        isbn: 9781549304002,
        tags: [ 'nonfiction', 'lgbtqia', 'memoir', 'graphicnovel', 'nonbinary', 'asexuality' ]
    },
    {
        isbn: 9781338089516,
        tags: [ 'magic', 'shapeshifters', 'lgbtqia', 'transgender', 'graphicnovel' ]
    },
    {
        isbn: 9781250135025,
        tags: [ 'highfantasy', 'magic', 'enemiestolovers', 'lgbtqia', 'gay' ]
    },
    {
        isbn: 9780008244125,
        tags: [ 'asexuality', 'college', 'comingofage', 'lgbtqia' ]
    },
    {
        isbn: 9781534455023,
        tags: [ 'rollerderby', 'contemporary', 'lgbtqia', 'sapphic' ]
    },
    {
        isbn: 9781503946546,
        tags: [ 'southerngothic', 'magic', 'immortality' ]
    },
    {
        isbn: 9781338617436,
        tags: [ 'contemporary', 'romance', 'lgbtqia', 'gay', 'graphicnovel' ]
    },
    {
        isbn: 9781626726413,
        tags: [ 'comingofage', 'food', 'lgbtqia', 'gay', 'romance', 'graphicnovel' ]
    },
    {
        isbn: 9781595147233,
        tags: [ 'meangirls', 'magic', 'fantasy' ]
    },
    {
        isbn: 9781401290818,
        tags: [ 'dcsuperheroes', 'romance', 'comingofage', 'lgbtqia', 'gay', 'graphicnovel' ]
    },
    {
        isbn: 9781779514882,
        tags: [ 'dcsuperheroes', 'graphicnovel', 'comingofage' ]
    },
    {
        isbn: 9781779507297,
        tags: [ 'dcsuperheroes', 'graphicnovel', 'comingofage' ]
    },
    {
        isbn: 9781779507273,
        tags: [ 'dcsuperheroes', 'graphicnovel', 'comingofage' ]
    },
    {
        isbn: 9781338617528,
        tags: [ 'romance', 'lgbtqia', 'gay', 'comingofage', 'graphicnovel' ]
    },
    {
        isbn: 9781338617474,
        tags: [ 'romance', 'lgbtqia', 'gay', 'comingofage', 'graphicnovel' ]
    },
    {
        isbn: 9780374538552,
        tags: [ 'southerngothic', 'witches' ]
    },
    {
        isbn: 9781492652786,
        tags: [ 'highfantasy', 'necromancy' ]
    },
    {
        isbn: 9780316422048,
        tags: [ 'witches', 'alternativehistory', 'feminism' ]
    },
    {
        isbn: 9780373212316,
        tags: [ 'fantasy', 'witches' ]
    },
    {
        isbn: 9780062878021,
        tags: [ 'magic', 'fantasy', 'witches', 'alternatehistory' ]
    },
    {
        isbn: 9781468306583,
        tags: [ 'magic', 'witches', 'dark', 'ensemblecast', 'foreign' ]
    },
    {
        isbn: 9780759555433,
        tags: [ 'neurodivergency', 'magic', 'witches', 'fantasy', 'celticmythology', 'lgbtqia' ]
    },
    {
        isbn: 9780765376466,
        tags: [ 'highfantasy', 'magic', 'parallelworlds' ]
    },
    {
        isbn: 9780374536435,
        tags: [ 'nonfiction', 'witches', 'paganism', 'memoir' ]
    },
    {
        isbn: 9780312575434,
        tags: [ 'nonfiction', 'environmentalism' ]
    },
    {
        isbn: 9780865477483,
        tags: [ 'nonfiction', 'sustainability' ]
    },
    {
        isbn: 9780865475878,
        tags: [ 'nonfiction', 'sustainability', 'recycle' ]
    },
    {
        isbn: 9781623363857,
        tags: [ 'nonfiction', 'urbanwildlife' ]
    },
    {
        isbn: 9780865477728,
        tags: [ 'nonfiction', 'urbanplanning' ]
    },
    {
        isbn: 9780307347336,
        tags: [ 'nonfiction', 'eatinglocally', '100milediet', 'memoir' ]
    },
    {
        isbn: 9780393356571,
        tags: [ 'nonfiction', 'crafting', 'origin' ]
    },
    {
        isbn: 9780375760396,
        tags: [ 'nonfiction', 'botany', 'evolution' ]
    },
    {
        isbn: 9781524745547,
        tags: [ 'nonfiction', 'math' ]
    },
    {
        isbn: 9780861716456,
        tags: [ 'nonfiction', 'buddhism', 'zen' ]
    },
    {
        isbn: 9780803237759,
        tags: [ 'nonfiction', 'cleanenergy', 'alternativeenergy', 'environmentalism' ]
    },
    {
        isbn: 9780062748799,
        tags: [ 'nonfiction', 'lagom', 'balance', 'happylife' ]
    },
    {
        isbn: 9780062836786,
        tags: [ 'nonfiction', 'anxiety' ]
    },
    {
        isbn: 9781781775639,
        tags: [ 'nonfiction', 'factbook' ]
    },
    {
        isbn: 9780156031448,
        tags: [ 'nonfiction', 'autism', 'animalbehavior' ]
    },
    {
        isbn: 9780998994611,
        tags: [ 'nonfiction', 'veganism', 'diversity' ]
    },
    {
        isbn: 9781473633810,
        tags: [ 'fantasy', 'angels', 'dystopian' ]
    },
    {
        isbn: 9781250073808,
        tags: [ 'newadult', 'college', 'romance', 'comingofage', 'tearjerker' ]
    },
    {
        isbn: 9781250313188,
        tags: [ 'highfantasy', 'necromancy', 'scifi' ]
    },
    {
        isbn: 9780307744432,
        tags: [ 'fantasy', 'romance', 'magic' ]
    },
    {
        isbn: 9780593108253,
        tags: [ 'contemporary', 'comingofage', 'lgbtqia', 'iran', 'food' ]
    },
    {
        isbn: 9780525552970,
        tags: [ 'contemporary', 'comingofage', 'iran', 'food', 'lgbtqia', 'gay', 'romance', 'tearjerker' ]
    },
    {
        isbn: 9781534480506,
        tags: [ 'fantasy', 'lgbtqia', 'gay', 'mermaids', 'pirates' ]
    },
    {
        isbn: 9780316310277,
        tags: [ 'fae', 'enemiestolovers', 'betrayal' ]
    },
    {
        isbn: 9780316310352,
        tags: [ 'fae', 'enemiestolovers', 'betrayal' ]
    },
    {
        isbn: 9780316310420,
        tags: [ 'fae', 'enemiestolovers', 'betrayal' ]
    },
    {
        isbn: 9781484715772,
        tags: [ 'timetravel', 'fantasy' ]
    },
    {
        isbn: 9781944515744,
        tags: [ 'nonfiction', 'reference', 'crossstitch', 'patterns' ]
    },
    {
        isbn: 9781743795750,
        tags: [ 'nonfiction', 'cookbook', 'reference' ]
    },
    {
        isbn: 9781250250469,
        tags: [ 'fantasy', 'brujo', 'magic', 'ghosts', 'diversity' ]
    },
    {
        isbn: 9781732399983,
        tags: [ 'werewolves', 'abo', 'gay', 'lgbtqia' ]
    },
    {
        isbn: 9780452296299,
        tags: [ 'magicalrealism' ]
    },
    {
        isbn: 9781034932390,
        tags: [ 'nonfiction', 'reference', 'tarot' ]
    },
    
    {
        isbn: 9781578636174,
        tags: [ 'nonfiction', 'reference', 'tarot' ]
    },
    {
        isbn: 9781567185379,
        tags: [ 'nonfiction', 'chakras' ]
    },
    {
        isbn: 9780767903325,
        tags: [ 'nonfiction', 'buddhism' ]
    },
    {
        isbn: 9781250313300,
        tags: [ 'nonfiction', 'zodiac', 'astrology', 'poetry' ]
    },
    {
        isbn: 9781335146779,
        tags: [ 'lgbtqia', 'sapphic', 'music', 'romance' ]
    },
    {
        isbn: 9781250169440,
        tags: [ 'lgbtqia', 'comingofage', 'romance' ]
    },
    {
        isbn: 9781786892454,
        tags: [ 'classics', 'lgbtqia', 'historical', 'transgender' ]
    },
    {
        isbn: 9781594749766,
        tags: [ 'horror', '1980s', 'thriller' ]
    },
    {
        isbn: 9780691166292,
        tags: [ 'nonfiction', 'horrorfilms', 'gender' ]
    },
    {
        isbn: 9780875420509,
        tags: [ 'nonfiction', 'witchcraft', 'wicca' ]
    },
    {
        isbn: 9781571311771,
        tags: [ 'nonfiction', 'plants', 'science', 'indigenouswisdom' ]
    },
    {
        isbn: 9781620109045,
        tags: [ 'food', 'lgbtq', 'graphicnovel' ]
    },    
    {
        isbn: 9781419728556,
        tags: [ 'bipoc', 'dystopian' ]
    },   
    {
        isbn: 9780838919019,
        tags: [ 'nonfiction', 'reference', 'bannedbooks' ]
    },  
    {
        isbn: 9780671027346,
        tags: [ 'comingofage', 'lgbtq' ]
    },  
    {
        isbn: 9781250044464,
        tags: [ 'essays', 'anthology' ]
    },  
    {
        isbn: 9781974710027,
        tags: [ 'manga', 'demons', 'curses' ]
    },  
    {
        isbn: 9781427867933,
        tags: [ 'manga', 'lgbtq', 'vampires' ]
    },  
    {
        isbn: 9781427863195,
        tags: [ 'manga', 'lgbtq', 'bl' ]
    },  
    {
        isbn: 9780143114741,
        tags: [ 'nonfiction', 'architecture', 'daydream' ]
    },  
    {
        isbn: 9780789458780,
        tags: [ 'eyewitness', 'nonfiction', 'reference', 'witches', 'magic', 'history' ]
    },  
    {
        isbn: 9781682633243,
        tags: [ 'lgbtq', 'cult', 'religion', 'biblicalangels' ]
    },  
    {
        isbn: 9781984851598,
        tags: [ 'bipoc', 'graphicnovel', 'language', 'family' ]
    },   
    {
        isbn: 9781739983413,
        tags: [ 'lgbtq', 'werewolves', 'fatedmates' ]
    },  
    {
        isbn: 9781728206141,
        tags: [ 'lgbtq', 'romcom', 'pretenddating' ]
    },  
    {
        isbn: 9780316562898,
        tags: [ 'manga', 'privateschool', 'gambling' ]
    },  
    {
        isbn: 9781421561325,
        tags: [ 'horror', 'spirals', 'manga' ]
    },  
    {
        isbn: 9780060533229,
        tags: [ 'nonfiction', 'biomimicry' ]
    },  
    {
        isbn: 9780374534882,
        tags: [ 'nonfiction', 'urbanplanning', 'happiness' ]
    },  
    {
        isbn: 9780593359235,
        tags: [ 'horror', 'amusementpark', 'competition' ]
    },  
    {
        isbn: 9781536225266,
        tags: [ 'fantasy', 'tarot', 'witches', 'lgbtq' ]
    },  
    {
        isbn: 9780345404473,
        tags: [ 'scifi', 'androids', 'speculative', 'classics', 'dystopia' ]
    },  
    {
        isbn: 9780451524935,
        tags: [ 'scifi', 'dystopia' ]
    },  
    {
        isbn: 9780689867040,
        tags: [ 'fae', 'fantasy', 'enemiestolovers' ]
    },  
    {
        isbn: 9781250170767,
        tags: [ 'horror', 'evilchildren' ]
    },  
    {
        isbn: 9780385739504,
        tags: [ 'omnibus', 'shapeshifters', 'enemiestolovers', 'feudingfamilies', 'fantasy' ]
    },  
    {
        isbn: 9781941360385,
        tags: [ 'horror', 'classics', 'vampires', 'lgbtq', 'sapphic' ]
    },  
    {
        isbn: 9780316556347,
        tags: [ 'fantasy', 'retelling' ]
    },  
    {
        isbn: 9781435164987,
        tags: [ 'reference', 'norsemythology' ]
    },  
    {
        isbn: 9780316213073,
        tags: [ 'fae', 'highfantasy' ]
    },  
    {
        isbn: 9780689868207,
        tags: [ 'fae', 'fantasy' ]
    },  
    {
        isbn: 9780689868227,
        tags: [ 'fae', 'fantasy' ]
    },  
    {
        isbn: 9781619635180,
        tags: [ 'fae', 'highfantasy', 'enemiestolovers', 'retelling' ]
    },  
    {
        isbn: 9781684152995,
        tags: [ 'fantasy', 'mixedmedia' ]
    },  
    {
        isbn: 9781943679072,
        tags: [ 'classics' ]
    },  
    {
        isbn: 9780140390315,
        tags: [ 'classics', 'historical', 'slaughterhouse' ]
    },  
    {
        isbn: 9780143105435,
        tags: [ 'classics', 'romance', 'paranormal', 'historical' ]
    },  
    {
        isbn: 9780143106159,
        tags: [ 'classics', 'romance', 'historical' ]
    },
    {
        isbn: 9780142414910,
        tags: [ 'fantasy', 'romance', 'paranormal' ]
    },
    {
        isbn: 9780060850524,
        tags: [ 'classics', 'scifi', 'dystopia' ]
    },
    {
        isbn: 9781101911815,
        tags: [ 'speculative', 'memory', 'foreign', 'dystopia' ]
    },
    {
        isbn: 9781070723310,
        tags: [ 'fantasy', 'retelling' ]
    },
    {
        isbn: 9780062060624,
        tags: [ 'lgbtq', 'retelling', 'historical', 'greekmythology' ]
    },
    {
        isbn: 9780525578468,
        tags: [ 'mystery', 'thriller', 'boardingschool' ]
    },
    {
        isbn: 9781538748213,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9781984806376,
        tags: [ 'library', 'fantasy', 'religion' ]
    },
    {
        isbn: 9781250211682,
        tags: [ 'historical', 'library' ]
    },
    {
        isbn: 9781645672357,
        tags: [ 'horror', 'fantasy', 'library', 'darkacademia' ]
    },
    {
        isbn: 9781594746031,
        tags: [ 'horror', 'mystery', 'mixedmedia', 'fantasy', 'paranormal' ]
    },
    {
        isbn: 9781635575637,
        tags: [ 'fantasy', 'mythology', 'mystery' ]
    },
    {
        isbn: 9781984806390,
        tags: [ 'library', 'religion', 'fantasy' ]
    },
    {
        isbn: 9781984812537,
        tags: [ 'horror', 'fantasy', 'lgbtq', 'paranormal' ]
    },
    {
        isbn: 9780525645580,
        tags: [ 'horror', 'dystopia', 'lgbtq' ]
    },
    {
        isbn: 9780374314309,
        tags: [ 'lgbtq', 'werewolves', 'horror', 'fantasy' ]
    },
    {
        isbn: 9780553591712,
        tags: [ 'horror', 'thriller', 'mystery' ]
    },
    {
        isbn: 9780425128164,
        tags: [ 'thriller', 'horror', 'mystery' ]
    },
    {
        isbn: 9780553582925,
        tags: [ 'mystery', 'thriller', 'horror' ]
    },
    {
        isbn: 9780425098648,
        tags: [ 'mystery', 'thriller', 'horror' ]
    },
    {
        isbn: 9780440246084,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9780553591729,
        tags: [ 'thriller', 'horror', 'mystery' ]
    },
    {
        isbn: 9780553580191,
        tags: [ 'mystery', 'thriller', 'paranormal' ]
    },
    {
        isbn: 9780451219244,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9780451229328,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9781101974445,
        tags: [ 'horror', 'mystery', 'paranormal', 'lgbtq' ]
    },
    {
        isbn: 9780062840363,
        tags: [ 'bipoc', 'mystery', 'thriller' ]
    },
    {
        isbn: 9781501182099,
        tags: [ 'horror', 'fantasy' ]
    },
    {
        isbn: 9781250170972,
        tags: [ 'highfantasy', 'bipoc' ]
    },
    {
        isbn: 9780451150325,
        tags: [ 'horror', 'paranormal' ]
    },
    {
        isbn: 9780451528956,
        tags: [ 'horror', 'classics' ]
    },
    {
        isbn: 9780143039983,
        tags: [ 'horror', 'paranormal', 'classics' ]
    },
    {
        isbn: 9781908533142,
        tags: [ 'horror', 'scifi', 'classics' ]
    },
    {
        isbn: 9780734410795,
        tags: [ 'mystery', 'romance', 'spyschool' ]
    },
    {
        isbn: 9780778311027,
        tags: [ 'newadult', 'lgbtq', 'romance' ]
    },
    {
        isbn: 9780061214677,
        tags: [ 'fae', 'fantasy' ]
    },
    {
        isbn: 9780061214714,
        tags: [ 'fae', 'fantasy' ]
    },
    {
        isbn: 9780061659232,
        tags: [ 'fae', 'fantasy' ]
    },
    {
        isbn: 9780061214684,
        tags: [ 'fae', 'fantasy' ]
    },
    {
        isbn: 9781484716434,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9781423168232,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9781484757321,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9781423168324,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9780062385437,
        tags: [ 'highfantasy', 'family', 'magic' ]
    },
    {
        isbn: 9781442409057,
        tags: [ 'fantasy', 'scifi', 'dystopia' ]
    },
    {
        isbn: 9780316509886,
        tags: [ 'scifi', 'speculative', 'fantasy' ]
    },
    {
        isbn: 9780373210848,
        tags: [ 'omnibus', 'fantasy' ]
    },
    {
        isbn: 9780373210831,
        tags: [ 'omnibus', 'fantasy' ]
    },
    {
        isbn: 9780373210794,
        tags: [ 'omnibus', 'fantasy' ]
    },
    {
        isbn: 9780373210602,
        tags: [ 'omnibus', 'fantasy' ]
    },
    {
        isbn: 9781416989400,
        tags: [ 'fantasy', 'paranormal', 'horror' ]
    },
    {
        isbn: 9781416974512,
        tags: [ 'fantasy', 'omnibus', 'vampires', 'soulmates' ]
    },
    {
        isbn: 9781416974505,
        tags: [ 'omnibus', 'fantasy', 'vampires', 'soulmates' ]
    },
    {
        isbn: 9781416974529,
        tags: [ 'omnibus', 'fantasy', 'vampires', 'soulmates' ]
    },
    {
        isbn: 9781416989561,
        tags: [ 'omnibus', 'fantasy', 'psychicvampires', 'psychicpowers' ]
    },
    {
        isbn: 9781633100305,
        tags: [ 'horror' ]
    },
    {
        isbn: 9781250625120,
        tags: [ 'lgbtq', 'transgender', 'romance' ]
    },
    {
        isbn: 9781250209153,
        tags: [ 'lgbtq', 'romance', 'enemiestolovers' ]
    },
    {
        isbn: 9781338503265,
        tags: [ 'lgbtq', 'romance', 'competition' ]
    },
    {
        isbn: 9781338306125,
        tags: [ 'lgbtq', 'nonbinary', 'romance', 'comingofage' ]
    },
    {
        isbn: 9780374312718,
        tags: [ 'nonfiction', 'memoir', 'lgbtq', 'bipoc' ]
    },
    {
        isbn: 9780062382870,
        tags: [ 'lgbtq', 'contemporary', 'transgender' ]
    },
    {
        isbn: 9781335470454,
        tags: [ 'anthology', 'lgbtq', 'fantasy' ]
    },
    {
        isbn: 9781250244499,
        tags: [ 'lgbtq', 'romance', 'historical', 'scifi' ]
    },
    {
        isbn: 9781442426719,
        tags: [ 'bipoc', 'romance', 'contemporary' ]
    },
    {
        isbn: 9781481404549,
        tags: [ 'contemporary', 'romance' ]
    },
    {
        isbn: 9781250762016,
        tags: [ 'horror', 'paranormal', 'lgbtq' ]
    },
    {
        isbn: 9781250830746,
        tags: [ 'fantasy', 'historical', 'lgbtq', 'romance' ]
    },
    {
        isbn: 9780316418423,
        tags: [ 'horror', 'necromancy' ]
    },
    {
        isbn: 9780525955108,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9781538748145,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9780525950127,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9780451213204,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9780440236733,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9780440235392,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9780440246190,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9780345535153,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9780440246336,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9780440246091,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9780451233936,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9780345542229,
        tags: [ 'mystery', 'thriller' ]
    },
    {
        isbn: 9781538103005,
        tags: [ 'library', 'lis', 'reference', 'nonfiction' ]
    },
    {
        isbn: 9781440866937,
        tags: [ 'yaliterature', 'library', 'lis', 'nonfiction', 'reference', 'guide' ]
    },
    {
        isbn: 9780838914625,
        tags: [ 'yaliterature', 'library', 'lis', 'nonfiction', 'references' ]
    },
    {
        isbn: 9780262536219,
        tags: [ 'ya', 'digitalworld', 'nonfiction' ]
    },
    {
        isbn: 9780838917749,
        tags: [ 'yaservies', 'lis', 'library', 'nonfiction', 'reference' ]
    },
    {
        isbn: 9781440844515,
        tags: [ 'nonfiction', 'reference', 'lis', 'informationliteracy' ]
    },
    {
        isbn: 9780838913420,
        tags: [ 'yaservices', 'teenservices', 'lis', 'library', 'nonfiction', 'reference' ]
    },
    {
        isbn: 9781433832161,
        tags: [ 'nonfiction', 'apastyle', 'writing', 'bibliography', 'reference' ]
    },
    {
        isbn: 9781604692327,
        tags: [ 'nonfiction', 'reference', 'nativelandscape' ]
    },
    {
        isbn: 9780999870013,
        tags: [ 'gamebook', 'nonfiction', 'reference', 'dialect', 'language' ]
    },
    {
        isbn: 9781627950824,
        tags: [ 'math', 'numbers', 'history', 'nonfiction', 'reference' ]
    },
    {
        isbn: 9781937715373,
        tags: [ 'roadbike', 'bikemaintenance', 'nonfiction', 'reference' ]
    },
    {
        isbn: 9781422157992,
        tags: [ 'nonfiction', 'selfhelp', 'selfimprovement' ]
    },
    {
        isbn: 9781422157978,
        tags: [ 'nonfiction', 'selfhelp', 'leadership', 'selfimprovement' ]
    },
    {
        isbn: 9781782497134,
        tags: [ 'plants', 'nonfiction' ]
    },
    {
        isbn: 9781628873009,
        tags: [ 'nonfiction', 'reference', 'portland' ]
    },
    {
        isbn: 9781631212789,
        tags: [ 'nonfiction', 'reference', 'portland' ]
    },
    {
        isbn: 9780897326988,
        tags: [ 'nonfiction', 'reference', 'sacramento', 'hiking' ]
    },
    {
        isbn: 9781568821122,
        tags: [ 'childrens', 'cthulhu', 'drseuss' ]
    },
    {
        isbn: 9781524860677,
        tags: [ 'graphicnovel', 'vampires', 'werewolves', 'romance', 'fantasy' ]
    },
    {
        isbn: 9781534420598,
        tags: [ 'graphicnovel', 'fantasy', 'anthroanimals' ]
    },
    {
        isbn: 9781402733840,
        tags: [ 'oddities', 'attractions', 'california', 'nonfiction', 'reference' ]
    },
    {
        isbn: 9780760748442,
        tags: [ 'germanenglish', 'language', 'dictionary', 'nonfiction', 'reference' ]
    },
    {
        isbn: 9781609499396,
        tags: [ 'history', 'sacramento', 'nonfiction', 'reference' ]
    },
    {
        isbn: 9781582435671,
        tags: [ 'nonfiction', 'environmentalism' ]
    },
    {
        isbn: 9780061730337,
        tags: [ 'nonfiction', 'windpower', 'invention', 'engineering' ]
    },
    {
        isbn: 9781451675047,
        tags: [ 'nonfiction', 'science' ]
    },
    {
        isbn: 9781603584326,
        tags: [ 'nonfiction', 'climatechange', 'biodiversity' ]
    },
    {
        isbn: 9781942733850,
        tags: [ 'nonfiction', 'reference', 'shibari' ]
    },
    {
        isbn: 9780425129388,
        tags: [ 'nonfiction', 'reference', 'babynames' ]
    },
    {
        isbn: 9781579655556,
        tags: [ 'nonfiction', 'veganism', 'reference' ]
    },
    {
        isbn: 9780143117384,
        tags: [ 'nonfiction', 'offthegrid' ]
    },
    {
        isbn: 9781782438335,
        tags: [ 'nonfiction', 'science', 'historyofscience' ]
    },
    {
        isbn: 9789913888721,
        tags: [ 'nonfiction', 'femalechauvinisticpigs' ]
    },
    {
        isbn: 9781784286750,
        tags: [ 'collection', 'hplovecraft', 'fantasy', 'horror' ]
    },
    {
        isbn: 9780061671357,
        tags: [ 'fantasy', 'witches', 'omnibus' ]
    },
    {
        isbn: 9780061670855,
        tags: [ 'fantasy', 'witches', 'omnibus' ]
    },
    {
        isbn: 9780984782857,
        tags: [ 'nonfiction', 'reference', 'career', 'webdeveloper', 'coding' ]
    },
    {
        isbn: 9781974718900,
        tags: [ 'horror', 'manga', 'anthology' ]
    },
    {
        isbn: 9781421580791,
        tags: [ 'horror', 'manga', 'anthology' ]
    },
    {
        isbn: 9781638490845,
        tags: [ 'witches', 'vampires', 'graphicnovel' ]
    },
    {
        isbn: 9781534320529,
        tags: [ 'horror', 'hauntedhouse', 'paranormal', 'historical', 'headbangers', 'graphicnovel' ]
    },
    {
        isbn: 9781684158058,
        tags: [ 'grimreaper', 'fantasy', 'immortality', 'death', 'graphicnovel' ]
    },
    {
        isbn: 9781632156747,
        tags: [ 'fantasy', 'scifi', 'timetravel', 'graphicnovel' ]
    },
    {
        isbn: 9781606999592,
        tags: [ 'mystery', 'thriller', 'monsters', 'fantasy', 'graphicnovel' ]
    },
    {
        isbn: 9780399581991,
        tags: [ 'cookbook', 'nonfiction', 'graphicnovel', 'reference' ]
    },
    {
        isbn: 9781534306752,
        tags: [ 'anthology', 'horror', 'graphicnovel' ]
    },
    {
        isbn: 9781534308763,
        tags: [ 'anthology', 'horror', 'graphicnovel' ]
    },
    {
        isbn: 9781534312265,
        tags: [ 'anthology', 'horror', 'graphicnovel' ]
    },
    {
        isbn: 9781534313767,
        tags: [ 'anthology', 'horror', 'graphicnovel' ]
    },
    {
        isbn: 9781534315976,
        tags: [ 'anthology', 'horror', 'graphicnovel' ]
    },
    {
        isbn: 9781607066019,
        tags: [ 'graphicnovel', 'highfantasy', 'scifi' ]
    },
    {
        isbn: 9781534319141,
        tags: [ 'clowns', 'anthology', 'horror', 'graphicnovel' ]
    },
    {
        isbn: 9781632152121,
        tags: [ 'lgbtq', 'bdsm', 'graphicnovel', 'erotica' ]
    },
    {
        isbn: 9781632152299,
        tags: [ 'lgbtq', 'bdsm', 'graphicnovel', 'erotica' ]
    },
    {
        isbn: 9781632153999,
        tags: [ 'lgbtq', 'bdsm', 'graphicnovel', 'erotica' ]
    },
    {
        isbn: 9781632156099,
        tags: [ 'lgbtq', 'bdsm', 'graphicnovel', 'erotica' ]
    },
    {
        isbn: 9781632157249,
        tags: [ 'lgbtq', 'bdsm', 'graphicnovel', 'erotica' ]
    },
    {
        isbn: 9781534310049,
        tags: [ 'lgbtq', 'bdsm', 'graphicnovel', 'erotica' ]
    },
    {
        isbn: 9781534318861,
        tags: [ 'lgbtq', 'bdsm', 'graphicnovel', 'erotica' ]
    },
    {
        isbn: 9781534320703,
        tags: [ 'lgbtq', 'erotica', 'graphicnovel', 'religion', 'heavenandhell', 'angels', 'demons' ]
    },
    {
        isbn: 9781632153661,
        tags: [ 'lgbtq', 'feminism', 'graphicnovel' ]
    },
    {
        isbn: 9781632157171,
        tags: [ 'lgbtq', 'feminism', 'graphicnovel' ]
    },
    {
        isbn: 9781534305298,
        tags: [ 'lgbtq', 'feminism', 'graphicnovel' ]
    },
    {
        isbn: 9781632158956,
        tags: [ 'fantasy', 'scifi', 'timetravel', 'graphicnovel' ]
    },
    {
        isbn: 9781534302235,
        tags: [ 'fantasy', 'scifi', 'timetravel', 'graphicnovel' ]
    },
    {
        isbn: 9781534305106,
        tags: [ 'fantasy', 'scifi', 'timetravel', 'graphicnovel' ]
    },
    {
        isbn: 9781534308671,
        tags: [ 'fantasy', 'scifi', 'timetravel', 'graphicnovel' ]
    },
    {
        isbn: 9781534313248,
        tags: [ 'fantasy', 'scifi', 'timetravel', 'graphicnovel' ]
    },
    {
        isbn: 9781607069454,
        tags: [ 'highfantasy', 'lgbtq', 'graphicnovel' ]
    },
    {
        isbn: 9781632150400,
        tags: [ 'highfantasy', 'lgbtq', 'graphicnovel' ]
    },
    {
        isbn: 9781632157355,
        tags: [ 'highfantasy', 'lgbtq', 'graphicnovel' ]
    },
    {
        isbn: 9781534318922,
        tags: [ 'hauntedhouse', 'horror', 'paranormal', 'graphicnovel', 'headbangers', 'historical' ]
    },
    {
        isbn: 9781684155583,
        tags: [ 'horror', 'monsters', 'graphicnovel', 'fantasy' ]
    },
    {
        isbn: 9781684156498,
        tags: [ 'horror', 'monsters', 'fantasy', 'graphicnovel' ]
    },
    {
        isbn: 9781684157075,
        tags: [ 'horror', 'fantasy', 'monsters', 'graphicnovel' ]
    },
    {
        isbn: 9781684158041,
        tags: [ 'horror', 'fantasy', 'monsters', 'graphicnovel' ]
    },
    {
        isbn: 9781401284770,
        tags: [ 'mythology', 'historical', 'fantasy', 'dreams', 'graphicnovel' ]
    }
]
const arrayForBatchUpdate = []
books.map((book)=> {
    arrayForBatchUpdate.push(book.isbn)
})
// console.log(arrayForBatchUpdate)

module.exports = {
    books,
    arrayForBatchUpdate
}