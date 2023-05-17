-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: poppinpass
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cinemaroom`
--

DROP TABLE IF EXISTS `cinemaroom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cinemaroom` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `roomnumber` varchar(45) NOT NULL,
  `availability` varchar(45) NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `roomnumber_UNIQUE` (`roomnumber`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinemaroom`
--

LOCK TABLES `cinemaroom` WRITE;
/*!40000 ALTER TABLE `cinemaroom` DISABLE KEYS */;
INSERT INTO `cinemaroom` VALUES (7,'F1','Suspended'),(9,'Room1','active'),(10,'Room2','active'),(11,'g1','active');
/*!40000 ALTER TABLE `cinemaroom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `name` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `smallprice` int NOT NULL,
  `mediumprice` int NOT NULL,
  `largeprice` int NOT NULL,
  `availability` varchar(45) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (2,'nachos.jpeg','Nacho Cheese','Snacks',4,6,8,'active'),(3,'popcorn.jpeg','Popcorn','Snacks',4,6,8,'active'),(4,'hotdog.jpeg','Hotdog','Snacks',4,6,8,'active'),(5,'hotchocolate.jpeg','Hot Chocolate','Drinks',4,5,6,'active'),(6,'coffee.jpeg','Coffee','Drinks',4,5,6,'active'),(7,'softdrinks.jpeg','Free Flow Soft Drink','Drinks',5,7,10,'active'),(8,'combo1.jpeg','Mario Combo','Combo',12,15,17,'active'),(9,'combo2.jpg','Spongebob Combo','Combo',12,14,16,'active'),(10,'combo3.png','Family Combo','Combo',15,17,19,'active');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `story` text NOT NULL,
  `buy` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `video1` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `thumb` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `video2` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `poster` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `advice` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `cast` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `director` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `genre` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `duration` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `release` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `availability` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=376 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (2,'The electrifying 1973 tennis match between World number one Billie Jean King (Emma Stone) and ex-champ and serial hustler Bobby Riggs (Steve Carell) was billed as THE BATTLE OF THE SEXES and became the most watched televised sports event of all time. The match caught the zeitgeist and sparked a global conversation on gender equality, spurring on the feminist movement. \n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=109 27 116 207 227 78 68 124 164 75 219 102 240 232 75 56','http://www.youtube.com/embed/WMdzBwsZRX8','Battle Of The Sexes.jpg','http://www.youtube.com/embed/oLBHSuxwyuo','Battle Of The Sexes_poster.jpg','R21','Battle Of The Sexes ','Emma Stone, Steve Carell, Elisabeth Shue','Jonathan Dayton, Valerie Faris','Drama','122 minutes','Thursday, 23 Nov 2017','Now Showing'),(3,'Join us for Movies with the Little Ones that happens every first weekend of the month. \n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=249 234 158 210 180 235 207 147 233 31 241 175 151 62 214 253','http://www.youtube.com/embed/2pac60N8tMY','Sing.jpg','http://www.youtube.com/embed/OOEkauITk3Q','Sing_poster.jpg','PG13','Sing ','Matthew McConaughey, Reese Witherspoon, Seth MacFarlane, Scarlett Johansson, John C. Reilly, Taron Egerton, Tori Kelly, Nick Kroll, Jennifer Saunders, Peter Serafinowicz','Garth Jennings','Comedy','108 minutes','Thursday, 8 Dec 2016','Now Showing'),(4,'In the Xuanguang Temple resides a Buddhist monk with supernatural powers named Butong (Zheng Kai). One day, Butong’s mentor, Kong, is struck by lightning and realises that he is the reincarnation of Crouching Tiger Arhat, who came to the human world to give guidance to Butong. Butong was the original Golden Child, punished by God to experience life and death one hundred times as he broke a sacred rule by falling in love with another fairy, Jade (Zhang Yu Qi). While Golden Child’s memories were erased, Jade refused to forget their love and accumulated goodwill over one hundred reincarnations…\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=105 58 59 160 183 137 191 170 89 92 25 197 90 119 10 172','http://www.youtube.com/embed/SZoaaB_65H8','The Golden Monk.jpg','http://www.youtube.com/embed/STLjNO4IJXc','The Golden Monk_poster.jpg','Some Violence','The Golden Monk ','Zheng Kai, Zhang Yu Qi, Evonne Hsieh, Mao Junjie, Law Kar Ying','Wong Jing, Billy Chung','Comedy, Fantasy','91 minutes','Thursday, 23 Nov 2017','Now Showing'),(5,'From producers Basil Iwanyk (“Sicario,” “The Town”), Peter Berg (“Lone Survivor,” “Battleship”), and Matthew George (“LBJ”) comes the gripping thriller WIND RIVER. Cory Lambert (Jeremy Renner) is an experienced tracker and hunter who uncovers the frozen dead body of a teenage girl.','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=147 170 254 137 229 61 2 88 51 14 12 69 181 147 18 138','http://www.youtube.com/embed/gg7ZknrV7gM','Wind River.jpg','http://www.youtube.com/embed/zN9PDOoLAfg','Wind River_poster.jpg','NC16','Wind River ','Jeremy Renner, Elizabeth Olsen, Kelsey Asbille, Julia Jones','Taylor Sheridan','Action','108 minutes','Thursday, 23 Nov 2017','Now Showing'),(6,'Despite his family’s baffling generations-old ban on music, Miguel (voice of newcomer Anthony Gonzalez) dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz (voice of Benjamin Bratt). Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector (voice of Gael García Bernal), and together, they set off on an extraordinary journey to unlock the real story behind Miguel\'s family history.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=122 104 247 144 10 190 193 39 75 153 213 210 144 11 97 101','http://www.youtube.com/embed/OF9Ixfq4BCI','Disney pixa_poster.jpg','http://www.youtube.com/embed/t1uM8yyKIUw','Disney pixa.jpg','Consumer Advice Not Available','Disney / Pixar`s Coco With Olaf`s Frozen Adventure ','Gael García Bernal, Anthony Gonzalez, Benjamin Bratt, Renée Victor','Lee Unkrich, Adrian Molina','Family','127 minutes','Thursday, 23 Nov 2017','Now Showing'),(7,'Fueled by his restored faith in humanity and inspired by Superman\'s selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy. Together, Batman and Wonder Woman work quickly to find and recruit a team of metahumans to stand against this newly awakened threat. But despite the formation of this unprecedented league of heroes-Batman, Wonder Woman, Aquaman, Cyborg and The Flash-it may already be too late to save the planet from an assault of catastrophic proportions.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=186 59 253 53 14 219 210 221 83 240 193 168 219 73 205 215','http://www.youtube.com/embed/FlJCnOvTAFE','Justice League.jpg','http://www.youtube.com/embed/gQexFxeThGQ','Justice League_poster.jpg','Some Violence','Justice League ','Ben Affleck, Henry Cavill, Gal Gadot, Ezra Miller, Ray Fisher, Jason Momoa','Zack Snyder','Action, Adventure','120 minutes','Thursday, 16 Nov 2017','Now Showing'),(9,'In Marvel Studios\' \"Thor: Ragnarok\", Thor is imprisoned on the other side of the universe without his mighty hammer and finds himself in a race against time to get back to Asgard to stop Ragnarok- the destruction of his homeworld and the end of Asgardian civilization- the hands of an all-powerful new threat, the ruthless Hela. But first he must survive a deadly gladiatorial contest that pits him against his former ally and fellow Avenger- the Incredible Hulk!\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=154 83 226 57 227 111 57 245 173 47 178 217 190 185 254 7','http://www.youtube.com/embed/ue80QwXMRHg','ragnarok_thumb.jpg','http://www.youtube.com/embed/lWyJRZRqLgM','ragnarok.jpg','Some Violence','Marvel`s Thor: Ragnarok ','Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Idris Elba, Jeff Goldblum, Tessa Thompson, Karl Urban, Mark Ruffalo, Anthony Hopkins','Taika Waititi','Action, Adventure','130 minutes','Thursday, 26 Oct 2017','Now Showing'),(10,'A new dark force threatens Ponyville, and the Mane 6—Twilight Sparkle, Applejack, Rainbow Dash, Pinkie Pie, Fluttershy, and Rarity—embark on an unforgettable journey beyond Equestria where they meet new friends and exciting challenges on a quest to use the magic of friendship and save their home.\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=211 2 147 52 246 80 150 32 76 154 203 221 195 94 169 165','http://www.youtube.com/embed/2o-AjlhI9mg','pony.jpg','http://www.youtube.com/embed/1Amk3FzLS5k','pony_poster.jpg','Consumer Advice Not Available','My Little Pony: The Movie ','Emily Blunt, Kristin Chenoweth, Liev Schreiber, Michael Peña, Sia, Taye Diggs, Uzo Aduba, Zoe Saldana','Jayson Thiessen','Animation','99 minutes','Thursday, 2 Nov 2017','Now Showing'),(11,'In 1997, the financial crash, known in Thailand as the Tom Yum Goong Crisis, was a disastrous event that crept over Asia and left millionaires bankrupt overnight. A bright future which two best friends, Boum and Ib, pictured together fell apart when they found out that their families were going bankrupt. All of their assets were seized to satisfy their debts. The construction of a premium luxury condominium, which their parents jointly invested in, had been suspended. Unable to accept the harsh truth, they decided to end their lives together at the unfinished tower, where they promised to be together forever. In the end, Ib died all alone. Twenty years later, Boum (Numthip Jongrachatawiboon) becomes a successful real estate entrepreneur. One day, she gets to visit the abandoned tower with her beloved daughter, Bell (Apichaya Thongkham). That night, however, Boum wakes up and finds Bell sleepwalking and talking to herself in the dark. Bell’s sleepwalking condition continues to worsen every night. What concerns Boum the most is that Bell’s action and words in her sleepwalking state frighteningly remind Boum of Ib. What measures will Boum take to release herself from the promise that binds her? “Promise me you won’t leave me.” \n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=169 245 237 149 101 39 1 104 207 103 57 129 221 228 83 23','http://www.youtube.com/embed/_M4xjmRA0XQ','The Promise.jpg','http://www.youtube.com/embed/gnwgMYeaqr4','The Promise_poster.jpg','Horror','The Promise ','Numthip Jongrachatawiboon, Apichaya Thongkham, Thunyaphat Pattarateerachaicharoen','Sophon Sakdaphisit','Horror','114 minutes','Thursday, 16 Nov 2017','Now Showing'),(12,'Singapore\'s most successful movie franchise is back! After leaving the military, Lobang, Wayang King, Sergeant Ong, and Ken Chow are all busy with their respective career as civilians. That\'s until they are called back to serve the nation again under the Singapore Armed Forces\' Armoured Formation. Now they must juggle between work and their reservist duties. What hilarious situations will happen as they train together and their military roles are reversed? There\'ll be new enemy threats and their brotherhood will be put to the test. \n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=43 49 13 62 232 15 142 213 111 216 242 103 147 105 40 45','http://www.youtube.com/embed/h5FTv65A5ec','Ah Boys To Men 4.jpg','http://www.youtube.com/embed/Qiehhi2EI_0','Ah Boys To Men 4_poster.jpg','Some Coarse Language','Ah Boys To Men 4 ','Tosh Zhang, Wang Weiliang, Joshua Tan, Maxi Lim, Noah Yap, Apple Chan','Jack Neo','Action, Comedy','133 minutes','Thursday, 9 Nov 2017','Now Showing'),(13,'Directed by Marc Forster, this psychological drama defies genre to tell this obsessive love story. Gina (Blake Lively) & husband James (Jason Clarke) have an almost perfect marriage. After being blinded as a child in a nearly fatal car crash, Gina depends on James to feel and “see” the world around her, and it appears only to solidify their extremely passionate relationship. She envisions the world in her own vivid imagination with help from James\' descriptions. While the two enjoy a colorful existence living in Bangkok, their life and relationship are upended after Gina receives a corneal transplant & regains her sight. With her restored vision, Gina experiences the world with a new sense of wonder & independence which James finds threatening. It is only when Gina suddenly begins to lose her sight again that she finally realizes the disturbing reality of their marriage and their lives.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=172 237 127 248 73 122 12 18 40 121 249 162 224 153 147 8','http://www.youtube.com/embed/lJ1sCzPd9k8','All I See Is You.jpg','http://www.youtube.com/embed/67BpOpJDzfM','All I See Is You_poster.jpg','Sexual Scenes','All I See Is You ','Blake Lively, Jason Clarke, Ahna O\'Reilly, Yvonne Strahovski, Wes Chatham, Danny Huston','Marc Forster','Drama','110 minutes','Thursday, 16 Nov 2017','Now Showing'),(14,'David (Julian Cheung) was drunk and lost control of his car to the opposite lane. The off-duty police officer, Sam (Louis Koo) and his wife Ah Si (Charmaine Sheh), were able to avoid the collision and kept safe by switching their steering wheel immediately. David’s car smashed Patrick’s car on the opposite lane eventually and Patrick was killed. Ms Xiao Hung, after breaking up with her boyfriend, committed suicide by jumping off a building and hit exactly on top of Patrick’s car.\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=165 128 8 43 72 249 96 35 51 223 242 0 68 75 184 152','http://www.youtube.com/embed/KjxUpRHeNug','Always Be With You.jpg','http://www.youtube.com/embed/ldcoK98XDV0','Always Be With You_poster.jpg','Violence And Disturbing Scenes','Always Be With You ','Louis Koo, Julian Cheung, Charmaine Sheh, Gordon Lam, Charlene Choi','Herman Yau','Horror','98 minutes','Thursday, 2 Nov 2017','Now Showing'),(15,'AMERICAN ASSASSIN follows the rise of Mitch Rapp (Dylan O’Brien – Maze Runner), a CIA black ops recruit under the instruction of Cold War veteran Stan Hurley (Michael Keaton – Batman, Birdman).  The pair is then enlisted by CIA Deputy Director Irene Kennedy (Sanaa Lathan – Now You See Me 2) to investigate a wave of apparently random attacks on both military and civilian targets.  ','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=124 61 9 24 159 125 248 252 51 28 105 115 108 65 35 112','http://www.youtube.com/embed/VW0PrPgI8F8','American Assassin.jpg','http://www.youtube.com/embed/bGnrnGpi8IE','American Assassin_poster.jpg','Violence and Coarse Language','American Assassin ','Dylan O’Brien, Scott Adkins, Taylor Kitsch, Michael Keaton','Michael Cuesta','Action, Thriller','112 minutes','Wednesday, 18 Oct 2017','Now Showing'),(17,'A father takes his son to tour colleges on the East Coast and meets up with an old friend who makes him feel inferior about his life\'s choices.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=27 145 168 74 144 52 50 253 246 105 106 100 45 236 252 64','http://www.youtube.com/embed/22w8T9K8iRU','Brad`s Status.jpg','http://www.youtube.com/embed/RAbt3OYhTtA','Brad`s Status_poster.jpg','Some Mature Content','Brad`s Status ','Ben Stiller, Jenna Fischer, Austin Abrams, Luke Wilson, Michael Sheen, Jemaine Clement','Mike White','Drama','102 minutes','Thursday, 2 Nov 2017','Now Showing'),(18,'In 1963, illegal immigrant Ho (Donnie Yen) snuck into Hong Kong. Equipped with guts and combat skills, he plunged into the underground world. After many adversaries, the once good-natured man is physically crippled and transforms into a monster more atrocious than the most corrupted cops and ruthless drug dealers. \n\nFinally, Ho emerges as the most powerful Drug Lord under the control of the Chief Chinese Detective Sergeant, Lee Rock (Andy Lau). With the establishment of the Independent Commission Against Corruption (ICAC) in 1974, Rock is forced into premature retirement, but Ho still would not be stopped, as he is determined to become the sole dictator of the drug empire…… \n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=224 196 160 220 64 154 219 30 170 100 73 137 97 80 193 106','http://www.youtube.com/embed/7wO0XPT44i0','Chasing The Dragon.jpg','http://www.youtube.com/embed/O_bkhxx7bdE','Chasing The Dragon_poster.jpg','Violence And Some Drug Use','Chasing The Dragon ','Donnie Yen, Andy Lau','Wong Jing','Action, Crime, Thriller','128 minutes','Thursday, 5 Oct 2017','Now Showing'),(19,'Blumhouse (Split, Get Out, Whiplash) produces an original and inventive rewinding thriller in Happy Death Day, in which a college student (Jessica Rothe, La La Land) relives the day of her murder with both its unexceptional details and terrifying end until she discovers her killer\'s identity.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=209 52 50 94 75 71 189 129 20 40 116 76 78 230 182 60','http://www.youtube.com/embed/wiPD9X43knU','Happy Death Day.jpg','http://www.youtube.com/embed/1NTaDm3atkc','Happy Death Day_poster.jpg','Some Violence And Sexual References','Happy Death Day ','Jessica Rothe, Israel Broussard, Ruby Modine, Charles Aitken, Laura Clifton','Christopher Landon','Thriller','96 minutes','Wednesday, 18 Oct 2017','Now Showing'),(20,'Thirteen years ago on Halloween weekend – SAW and the character of JIGSAW introduced the world to a new face of horror. For seven straight years “If it’s Halloween it must be SAW” was a holiday tradition. \n\nAfter a series of murders bearing all the markings of the Jigsaw killer, law enforcement find themselves chasing the ghost of a man dead for over a decade and embroiled in a new game that’s only just begun. Is John Kramer back from the dead to remind the world to be grateful for the gift of life? Or is this a trap set by a killer with designs of their own?\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=5 29 18 103 192 142 7 247 110 36 246 71 203 48 235 80','http://www.youtube.com/embed/vPP6aIw1vgY','Jigsaw.jpg','http://www.youtube.com/embed/i2yPP17Ing0','Jigsaw_poster.jpg','Violence And Gore','Jigsaw ','Laura Vandervoot, Tobin Bell, Mandela Van Peebles, Matt Passmore','Michael Spierig, Peter Spierig','Horror, Thriller','92 minutes','Thursday, 2 Nov 2017','Now Showing'),(21,'Suburbicon is a peaceful, idyllic suburban community with affordable homes and manicured lawns …the perfect place to raise a family, and in the summer of 1959, the Lodge family is doing just that. But the tranquil surface masks a disturbing reality, as husband and father Gardner Lodge (Matt Damon) must navigate the town’s dark underbelly of betrayal, deceit, and violence. This is a tale of very flawed people making very bad choices. This is Suburbicon.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=75 77 17 102 223 190 170 183 103 142 55 25 71 177 12 128','http://www.youtube.com/embed/cBezc1S1BAQ','Suburbicon.jpg','http://www.youtube.com/embed/IYga2m0V2O0','Suburbicon_poster.jpg','Violence And Some Coarse Language','Suburbicon ','George Clooney, Matt Damon, Oscar Issac, Julianne Moore, Josh Brolin','George Clooney','Comedy, Crime, Mystery','105 minutes','Thursday, 9 Nov 2017','Now Showing'),(22,'The extraordinary true story of an unexpected friendship in the later years of Queen Victoria’s (Academy Award winner Judi Dench) remarkable rule. When Abdul Karim (Ali Fazal), a young clerk, travels from India to participate in the Queen’s Golden Jubilee, he is surprised to find favor with the Queen herself. As the Queen questions the constrictions of her long-held position, the two forge an unlikely and devoted alliance with a loyalty to one another that her household and inner circle all attempt to destroy. As the friendship deepens, the Queen begins to see a changing world through new eyes and joyfully reclaims her humanity.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=255 184 51 216 192 248 85 38 53 158 176 131 72 152 123 45','http://www.youtube.com/embed/BT2Ph_9bGPs','Victoria And Abdul.jpg','http://www.youtube.com/embed/T504u17Ao9A','Victoria And Abdul_poster.jpg','Some Coarse Language','Victoria And Abdul ','Judi Dench, Ali Fazal, Adeel Akhtar, Simon Callow, Michael Gambon, Eddie Izzard, Ruth McCabe, Tim Pigott-Smith, Julian Wadham, Olivia Williams','Stephen Frears','Comedy, Drama','112 minutes','Thursday, 9 Nov 2017','Now Showing'),(23,' Sixteen year old Leïla wakes up in an empty city. Where are her parents? Where has everyone gone? Thinking she must be the sole survivor of a mysterious catastrophe, Leïla wanders the strangely deserted streets of Fortville and eventually meets four other teenagers. \n\nTogether they join forces and attempt to survive in a desolate and increasingly hostile world. But are they really alone?\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=212 25 212 84 169 153 60 110 18 186 67 167 33 76 99 55','http://www.youtube.com/embed/13E2PrG2kYM','Alone.jpg','http://www.youtube.com/embed/Pr0D5y1A49o','Alone_poster.jpg','Brief Nudity','Alone ','Sofia LeSaffre, Stéphane Bak, Jean-Stan du Pac','David Moreau','Adventure, Sci-Fi, Thriller','98 minutes','Thursday, 30 Nov 2017','Sneak Previews'),(24,'The sequel to the 2015 global smash, father and stepfather, Dusty (Mark Wahlberg) and Brad (Will Ferrell) have joined forces to provide their kids with the perfect Christmas. Their newfound partnership is put to the test when Dusty’s old-school, macho Dad (Mel Gibson) and Brad’s ultra-affectionate and emotional Dad (John Lithgow) arrive just in time to throw the holiday into complete chaos.\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=240 114 157 208 10 95 218 124 177 58 175 114 48 14 69 216','http://www.youtube.com/embed/yyW_EX7iRW0','Daddy`s Home 2.jpg','http://www.youtube.com/embed/huaGQdrkrK0','Daddy`s Home 2_poster.jpg','Some Sexual References','Daddy`s Home 2 ','Will Ferrell, Mark Wahlberg, Linda Cardellini, John Cena,  John Lithgow & Mel Gibson','Sean Anders','Comedy, Family','100 minutes','Thursday, 30 Nov 2017','Coming Soon'),(25,'What starts out as a lavish train ride through Europe quickly unfolds into one of the most stylish, suspenseful and thrilling mysteries ever told. From the novel by best-selling author Agatha Christie, \"Murder on the Orient Express\" tells the tale of thirteen strangers stranded on a train, where everyone\'s a suspect. One man must race against time to solve the puzzle before the murderer strikes again. Kenneth Branagh directs and leads an all-star cast including- Penelope Cruz, Willem Dafoe, Judi Dench, Johnny Depp, Michelle Pfeiffer, Daisy Ridley and Josh Gad.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=49 59 10 94 226 105 189 12 222 3 183 57 222 132 32 8','http://www.youtube.com/embed/KcdbyFzZHHY','Murder on the  Orient Express.jpg','http://www.youtube.com/embed/z68frP9Q7XA','Murder on the  Orient Express_poster.jpg','Some Violence','Murder on the  Orient Express ','Tom Bateman, Kenneth Branagh, Penelope Cruz, Willem Dafoe, Judi Dench, Johnny Depp, Josh Gad, Derek Jacobi, Leslie Odom Jr., Michelle Pfeiffer, Daisy Ridley, Marwan Kenzari, Olivia Colman, Lucy Boynton, Manuel Garcia-Rulfo, Sergei Polunin','Kenneth Branagh','Drama','114 minutes','Thursday, 30 Nov 2017','Coming Soon'),(26,'Reckless police inspector Tung (Zhang Jin) is on a mission to crackdown on criminal Shing’s (Shawn Yue) gold smuggling scheme, yet fails to arrest him. As Tung continues his manhunt, he discovers Shing’s involvement with triad boss Blackie (Yasuaki Kurata), who hides on a casino cruise ship on the high seas.\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=0 255 11 57 212 164 95 232 50 51 21 86 43 139 7 247','http://www.youtube.com/embed/3F81sPk0u4o','The Brink.jpg','http://www.youtube.com/embed/z9SJxSXySSo','The Brink_poster.jpg','Violence','The Brink ','Zhang Jin, Shawn Yue, Wu Yue, Lam Ka Tung, Janice Man','Jonathan Li','Action, Crime, Drama','100 minutes','Thursday, 30 Nov 2017','Coming Soon'),(27,'The Man Who Invented Christmas tells the magical journey that led to the creation of Ebenezer Scrooge (Christopher Plummer), Tiny Tim and other classic characters from A Christmas Carol. Directed by Bharat Nalluri (Miss Pettigrew Lives for a Day), the film shows how Charles Dickens (Dan Stevens) mixed real life inspirations with his vivid imagination to conjure up unforgettable characters and a timeless tale, forever changing the holiday season into the celebration we know today.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=112 145 133 249 243 213 212 240 34 95 171 96 229 161 97 137','http://www.youtube.com/embed/nx3ctBjG6yI','The Man Who Invented Christmas.jpg','http://www.youtube.com/embed/UxcnYR3mcPU','The Man Who Invented Christmas_poster.jpg','Consumer Advice Not Available','The Man Who Invented Christmas ','Dan Stevens, Jonathan Pryce, Christopher Plummer','Bharat Nalluri','Biography, Comedy, Drama','104 minutes','Thursday, 30 Nov 2017','Coming Soon'),(28,'Anne and Bob, an American couple living in Paris, organise a dinner party and invite ten friends. To their surprise, Bob\'s son arrives, and the total number of people for dinner now becomes 13. \n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=142 83 109 154 15 200 177 213 222 207 178 239 167 13 244 184','http://www.youtube.com/embed/-564kllgDWo','Madame.jpg','http://www.youtube.com/embed/PXK6b-wnWwg','Madame_poster.jpg','Some Nudity And Sexual References','Madame ','Harvey Keitel, Toni Collette, Rossy de Palma','Amanda Sthers','Comedy, Drama','92 minutes','Thursday, 7 Dec 2017','Sneak Previews'),(29,' The world’s favourite bear returns to the big screen in 2017. \nHappily settled with the Brown family in Windsor Gardens, Paddington has become a popular member of the community, spreading joy and marmalade wherever he goes. While searching for the perfect present for his beloved Aunt Lucy’s 100th birthday, Paddington spots a unique pop-up book in Mr Gruber’s antique shop, and embarks upon a series of odd jobs to buy it. But when the book is stolen, it’s up to Paddington and the Browns to unmask the thief...\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=63 172 75 33 231 236 37 121 252 102 206 137 203 18 241 222','http://www.youtube.com/embed/52x5HJ9H8DM','Paddington 2.jpg','http://www.youtube.com/embed/1XT-SQ2DPyk','Paddington 2_poster.jpg','Consumer Advice Not Available','Paddington 2 ','Hugh Grant, Brendan Gleeson, Hugh Bonneville, Sally Hawkins, Julie Walters, Jim Broadbent, Peter Capaldi, Madeleine Harris, Samuel Joslin, Ben Whishaw, Imelda Staunton','Paul King','Animation, Comedy, Family','104 minutes','Thursday, 7 Dec 2017','Coming Soon'),(30,' The world’s favourite bear returns to the big screen in 2017. \nHappily settled with the Brown family in Windsor Gardens, Paddington has become a popular member of the community, spreading joy and marmalade wherever he goes. While searching for the perfect present for his beloved Aunt Lucy’s 100th birthday, Paddington spots a unique pop-up book in Mr Gruber’s antique shop, and embarks upon a series of odd jobs to buy it. But when the book is stolen, it’s up to Paddington and the Browns to unmask the thief...\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=175 190 12 182 73 43 249 5 220 35 210 140 168 100 24 210','http://www.youtube.com/embed/52x5HJ9H8DM','Paddington 2.jpg','http://www.youtube.com/embed/1XT-SQ2DPyk','Paddington 2_poster.jpg','Consumer Advice Not Available','Paddington 2 ','Hugh Grant, Brendan Gleeson, Hugh Bonneville, Sally Hawkins, Julie Walters, Jim Broadbent, Peter Capaldi, Madeleine Harris, Samuel Joslin, Ben Whishaw, Imelda Staunton','Paul King','Animation, Comedy, Family','104 minutes','Thursday, 7 Dec 2017','Coming Soon'),(31,'Michael Fassbender (X-Men series), Rebecca Ferguson (Mission: Impossible—Rogue Nation), Charlotte Gainsbourg (Independence Day: Resurgence), Val Kilmer (Heat) and Academy Award® winner J.K. Simmons (Whiplash) star in The Snowman, a terrifying thriller from director Tomas Alfredson (Let the Right One In, Tinker Tailor Soldier Spy), based on Jo Nesbø’s global bestseller. When an elite crime squad’s lead detective (Fassbender) investigates the disappearance of a victim on the first snow of winter, he fears an elusive serial killer may be active again. With the help of a brilliant recruit (Ferguson), the cop must connect decades-old cold cases to the brutal new one if he hopes to outwit this unthinkable evil before the next snowfall. The Snowman is produced by Working Title’s Tim Bevan and Eric Fellner (The Theory of Everything, Les Misérables), as well as Piodor Gustafsson and Robyn Slovo\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=211 0 93 222 156 214 11 58 191 232 122 212 164 50 69 142','http://www.youtube.com/embed/E8LttobzeQ4','The Snowman.jpg','http://www.youtube.com/embed/5A3THighARU','The Snowman_poster.jpg','Consumer Advice Not Available','The Snowman ','Michael Fassbender, Rebecca Ferguson, Charlotte Gainsbourg, Val Kilmer, J.K. Simmons','Thomas Alfredson','Thriller','N.A.','Thursday, 7 Dec 2017','Coming Soon'),(32,'Based on the New York Times bestseller, WONDER tells the inspiring and heartwarming story of August Pullman. Born with facial differences that, up until now, have prevented him from going to a mainstream school, Auggie becomes the most unlikely of heroes when he enters the local fifth grade. As his family, his new classmates, and the larger community all struggle to find their compassion and acceptance, Auggie\'s extraordinary journey will unite them all and prove you can\'t blend in when you were born to stand out. Lionsgate presents, in association with Walden Media and Participant Media, a Mandeville Films / Lionsgate production.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=207 147 15 248 207 126 205 154 238 173 159 204 97 14 28 195','http://www.youtube.com/embed/ngiK1gQKgK8','Wonder.jpg','http://www.youtube.com/embed/HZ46yR-Lo8c','Wonder_poster.jpg','Consumer Advice Not Available','Wonder ','Julia Roberts, Owen Wilson, Jacob Tremblay, Mandy Patinkin, Daveed Diggs','Stephen Chbosky','Family','114 minutes','Thursday, 14 Dec 2017','Coming Soon'),(33,'Earth: One Amazing Day follows the journey of the sun for twenty four hours as it’s awesome power shapes the lives of all the animals on the amazing planet we call home. Even the most familiar species – ourselves. A breathtaking voyage across the continents and through the oceans and skies; Earth: One Amazing Day is an enchanting, big screen family friendly adventure that proves every day on Earth is heartwarming and inspiring.\n\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=141 10 14 197 231 77 167 130 235 96 150 126 209 76 35 137','http://www.youtube.com/embed/LlmNg-27MrU','earth.jpg','http://www.youtube.com/embed/ZbTbHNtYV_4','earth_poster.jpg','Consumer Advice Not Available','Earth: One Amazing Day ','Robert Redford','Richard Dale, Lixin Fan, Peter Webber','Documentary','N.A.','Thursday, 21 Dec 2017','Coming Soon'),(34,'Owen Wilson and Ed Helms are Kyle and Peter Reynolds, brothers whose eccentric mother raised them to believe their father had died when they were young. When they discover this to be a lie, they set out together to find their real father, and end up learning more about their mother than they probably ever wanted to know.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=29 98 99 97 42 48 2 114 11 11 227 96 213 0 180 198','http://www.youtube.com/embed/TB7gXV1MD5E','Father Figures.jpg','http://www.youtube.com/embed/3GOjf9ZGnIQ','Father Figures_poster.jpg','Consumer Advice Not Available','Father Figures ','Owen Wilson, Ed Helms, J.K. Simmons, Terry Bradshaw, Ving Rhames, Harry Shearer, June Squibb, Christopher Walken, Glenn Close','Lawrence Sher','Comedy','N.A.','Thursday, 21 Dec 2017','Coming Soon'),(35,'\"Ferdinand\" tells the story of a giant bull with a big heart. After being mistaken for a dangerous beast, he is captured and torn from his home. Determined to return to his family, he rallies a misfit team on the ultimate adventure. Set in Spain, Ferdinand proves you can\'t judge a bull by its cover. From Blue Sky Studios and Carlos Saldanha, the director of \"Rio\" and inspired by the beloved book\"The Story of Ferdinand\" by Munro Leaf and Robert Lawson, \"Ferdinand\" is a heartwarming animated comedy adventure with an all-star cast that includes John Cena, Kate McKinnon, Gina Rodriguez, Anthony Anderson and many more.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=154 82 21 6 195 122 151 177 170 81 157 74 80 222 96 143','http://www.youtube.com/embed/KBofcN9NoVs','Ferdinand.jpg','http://www.youtube.com/embed/n7RkOfN8KvE','Ferdinand_poster.jpg','Consumer Advice Not Available','Ferdinand ','John Cena, Kate McKinnon, Gina Rodriguez, Daveed Diggs, Gabriel Iglesias, Bobby Cannavale, David Tennant, Anthony Anderson, Flula Borg, Sally Phillips, Boris Kodjoe, Jerrod Carmichael, Raul Esparza, Karla Martínez, Miguel Ángel Silvestre','Carlos Saldanha','Animation, Drama, Family','N.A.','Thursday, 21 Dec 2017','Coming Soon'),(38,'Inspired by the imagination of P.T. Barnum, The Greatest Showman is an original musical that celebrates the birth of show business & tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=112 151 165 141 40 179 93 200 210 27 29 42 104 38 27 58','http://www.youtube.com/embed/jr9QtXwC9vc','The Greatest Showman.jpg','http://www.youtube.com/embed/AXCTMGYUg9A','The Greatest Showman_poster.jpg','Consumer Advice Not Available','The Greatest Showman ','Hugh Jackman, Zac Efron, Michelle Williams, Rebecca Ferguson, Zendaya','Michael Gracey','Musical','105 minutes','Thursday, 28 Dec 2017','Coming Soon'),(39,'During the early days of World War II, with the fall of France imminent, Britain faces its darkest hour as the threat of invasion looms. As the seemingly unstoppable Nazi forces advance, and with the Allied army cornered on the beaches of Dunkirk, the fate of Western Europe hangs on the leadership of the newly-appointed British Prime Minister Winston Churchill (Academy Award nominee Gary Oldman). While maneuvering his political rivals, he must confront the ultimate choice: negotiate with Hitler and save the British people at a terrible cost or rally the nation and fight on against incredible odds. Directed by Joe Wright, DARKEST HOUR is the dramatic and inspiring story of four weeks in 1940 during which Churchill’s courage to lead changed the course of world history.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=93 230 199 11 131 230 255 227 209 204 115 24 236 205 163 202','http://www.youtube.com/embed/2TwB_w83G1I','Darkest Hour.jpg','http://www.youtube.com/embed/4pNOCzV5jG0','Darkest Hour_poster.jpg','Consumer Advice Not Available','Darkest Hour ','Gary Oldman, Kristin Scott Thomas, Lily James, Stephen Dillane, Ben Mendelsohn','Joe Wright','Drama, Thriller','N.A.','Thursday, 4 Jan 2018','Coming Soon'),(41,'When scientists discover how to shrink humans to five inches tall as a solution to over-population, Paul (Matt Damon) and his wife Audrey (Kristen Wiig) decide to abandon their stressed lives in order to get small and move to a new downsized community — a choice that triggers life-changing adventures.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=215 138 144 82 33 65 126 146 119 74 163 123 225 82 208 203','http://www.youtube.com/embed/UCrBICYM0yM','Downsizing.jpg','http://www.youtube.com/embed/0Md0XJZlbAk','Downsizing_poster.jpg','Consumer Advice Not Available','Downsizing  ','Matt Damon, Christoph Waltz, Hong Chau, Kristen Wiig','Alexander Payne','Comedy, Drama','N.A.','Thursday, 11 Jan 2018','Coming Soon'),(42,'Taraji P. Henson is Mary, a hit woman working for an organized crime family in Boston, whose life is completely turned around when she meets a young boy whose path she crosses when a professional hit goes bad.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=108 226 38 8 169 21 64 146 110 209 59 143 137 100 135 62','http://www.youtube.com/embed/cUWKn4p2s_s','Proud Mary.jpg','http://www.youtube.com/embed/FWQcAgQxiRI','Proud Mary_poster.jpg','Consumer Advice Not Available','Proud Mary ','Taraji P. Henson, Billy Brown, Jahi Di\'Allo Winston, Danny Glover','Babak Najafi','Action, Adventure','N.A.','Thursday, 11 Jan 2018','Coming Soon'),(44,'The story of a young boy in the Midwest is told simultaneously with a tale about a young girl in New York from fifty years ago as they both seek the same mysterious connection.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=67 171 111 1 8 199 230 208 175 180 201 230 85 242 185 68','http://www.youtube.com/embed/nu8X9ALV4fo','Wonderstruck.jpg','http://www.youtube.com/embed/Q8MUn9ddFzU','Wonderstruck_poster.jpg','Consumer Advice Not Available','Wonderstruck ','Amy Hargreaves, Michelle Williams, Julianne Moore','Todd Haynes','Drama','116 minutes','Thursday, 11 Jan 2018','Coming Soon'),(45,'For his directorial debut, Andy Serkis brings to life the inspiring true love story between Robin and Diana Cavendish (Andrew Garfield, Claire Foy), an adventurous couple who refuse to give up in the face of a devastating disease. When Robin is struck down by polio at the age of 28, he is confined to a hospital bed and given only a few months to live. With the help of Diana\'s twin brothers (Tom Hollander) and the groundbreaking ideas of inventor Teddy Hall (Hugh Bonneville), Robin and Diana dare to escape the hospital ward to seek out a full and passionate life together — raising their young son, traveling and devoting their lives to helping other polio patients. Written by two-time Academy Award nominated writer William Nicholson, and shot by three-time Academy Award winner Robert Richardson, BREATHE is a heartwarming celebration of love and human possibility.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=56 102 252 160 116 132 168 223 56 157 241 32 151 102 224 77','http://www.youtube.com/embed/7_YnYrLfjxA','Breathe.jpg','http://www.youtube.com/embed/JycCFypvgmI','Breathe_poster.jpg','Some Mature Content','Breathe ','Andrew Garfield, Claire Foy, Hugh Bonneville, Tom Hollander','Andy Serkis','Drama','118 minutes','Thursday, 18 Jan 2018','Coming Soon'),(46,'On 27th July 1890 a gaunt figure stumbled down a drowsy high street at twilight in the small French country town of Auvers. ','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=120 249 18 166 128 35 223 46 193 81 228 95 250 236 232 68','http://www.youtube.com/embed/CGzKnyhYDQI','Loving Vincent.jpg','http://www.youtube.com/embed/k8xcLdOjX6w','Loving Vincent_poster.jpg','Sexual Scene','Loving Vincent ','Robert Gulaczyk, Jerome Flynn, Aidan Turner, Eleanor Tomlinson','Dorota Kobiela and Hugh Welchman','Biography','95 minutes','Thursday, 18 Jan 2018','Coming Soon'),(47,'In a superhero origin tale unlike any other, the film is the incredible true story of what inspired Harvard psychologist Dr. William Moulton Marston to create the iconic Wonder Woman character in the 1940\'s. While Marston\'s feminist superhero was criticized by censors for her \'sexual perversity\', he was keeping a secret that could have destroyed him. Marston’s muses for the Wonder Woman character were his wife Elizabeth Marston and their lover Olive Byrne, two empowered women who defied convention: working with Marston on human behavior research -- while building a hidden life with him that rivaled the greatest of superhero disguises.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=193 201 158 200 43 61 246 189 168 30 61 109 28 115 201 43','http://www.youtube.com/embed/r991pr4Fohk','Professor Marston  & The Wonder Women.jpg','http://www.youtube.com/embed/T4cMJ3rzdpI','Professor Marston  & The Wonder Women_poster.jpg','Consumer Advice Not Available','Professor Marston  & The Wonder Women ','Luke Evans, Rebecca Hall, Bella Heathcote, Connie Britton','Angela Robinson','Drama','N.A.','Thursday, 18 Jan 2018','Coming Soon'),(48,'From master story teller, Guillermo del Toro, comes THE SHAPE OF WATER - an other-worldly fairy tale, set against the backdrop of Cold War era America circa 1963. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of silence and isolation. Elisa’s life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=15 96 180 89 16 241 209 94 153 235 69 4 138 214 245 45','http://www.youtube.com/embed/uiA4B5Y63IQ','The Shape Of Water.jpg','http://www.youtube.com/embed/XFYWazblaUA','The Shape Of Water_poster.jpg','Consumer Advice Not Available','The Shape Of Water ','Sally Hawkins, Michael Shannon, Richard Jenkins, Doug Jones, Michael Stuhlbarg, Octavia Spencer','Guillermo del Toro','Drama','N.A.','Thursday, 18 Jan 2018','Coming Soon'),(49,'In the epic finale to the Maze Runner saga, Thomas leads his group of escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary Last City, a WCKD-controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get answers to the questions the Gladers have been asking since they first arrived in the maze.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=121 152 214 35 78 131 196 116 103 201 78 82 253 133 229 19','http://www.youtube.com/embed/S_9OSktlm6s','maze.jpeg','http://www.youtube.com/embed/Otu900mPT2c','maze_poster.jpeg','Consumer Advice Not Available','Maze Runner: The Death Cure ','Kaya Scodelario, Dylan O\'Brien, Walton Goggins','Wes Ball','Action, Adventure, Sci-Fi, Suspense, Thriller','N.A.','Thursday, 25 Jan 2018','Coming Soon'),(51,'THREE BILLBOARDS OUTSIDE EBBING, MISSOURI is a darkly comedic drama from Academy Award® winner Martin McDonagh (IN BRUGES). After months have passed without a culprit in her daughter’s murder case, Mildred Hayes (Academy Award® winner Frances McDormand) makes a bold move, commissioning three signs leading into her town with a controversial message directed at William Willoughby (Academy Award® nominee Woody Harrelson), the town\'s revered chief of police. When his second-in-command Officer Dixon (Sam Rockwell), an immature mother’s boy with a penchant for violence, gets involved, the battle between Mildred and Ebbing\'s law enforcement is only exacerbated.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=148 92 240 163 119 123 182 115 160 16 223 47 98 112 40 2','http://www.youtube.com/embed/Jit3YhGx5pU','Three Billboards Outside Ebbing, Missouri.jpg','http://www.youtube.com/embed/nefD7UOhLCo','Three Billboards Outside Ebbing, Missouri_poster.jpg','Consumer Advice Not Available','Three Billboards Outside Ebbing, Missouri ','Frances McDormand, Sam Rockwell, Woody Harrelson, Abbie Cornish, John Hawkes, Lucas Hedges, Peter Dinklage','Martin McDonagh','Comedy, Drama','N.A.','Thursday, 25 Jan 2018','Coming Soon'),(52,'Based on the unbelievable, but true events, I, TONYA is a darkly comedic tale of American figure skater, Tonya Harding, and one of the most sensational scandals in sports history. Though Harding was the first American woman to complete a triple axel in competition, her legacy was forever defined by her association with an infamous, ill-conceived, and even more poorly executed attack on fellow Olympic competitor Nancy Kerrigan. Featuring an iconic turn by Margot Robbie as the fiery Harding, a mustachioed Sebastian Stan as her impetuous ex-husband Jeff Gillooly, a tour-de-force performance from Allison Janney as her acid-tongued mother, LaVona Golden, and an original screenplay by Steven Rogers, Craig Gillespie’s I, TONYA is an absurd, irreverent, and piercing portrayal of Harding’s life and career in all of its unchecked - and checkered - glory.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=140 129 230 98 21 225 255 236 82 73 97 195 49 195 109 185','http://www.youtube.com/embed/KuDQOMICfr0','I,Tonya.jpg','http://www.youtube.com/embed/fbpWmvPGGws','I,Tonya_poster.jpg','Consumer Advice Not Available','I,Tonya ','Margot Robbie, Sebastian Stan, Allison Janney, Julianne Nicholson, Paul Walter Hauser, Bobby Cannavale','Craig Gillespie','Comedy','N.A.','Thursday, 1 Feb 2018','Coming Soon'),(53,'Jamie Dornan and Dakota Johnson return as Christian Grey and Anastasia Steele in Fifty Shades Freed, the climactic chapter based on the worldwide bestselling “Fifty Shades” phenomenon. \n\nBringing to a shocking conclusion events set in motion in 2015 and 2017’s blockbuster films that grossed almost $950 million globally, the film arrives for Valentine’s Day 2018.Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=144 169 18 63 221 34 188 203 68 104 170 132 81 79 253 243','http://www.youtube.com/embed/nJCc5HRPxYA','Fifty Shades Freed.jpg','http://www.youtube.com/embed/6dOxeQNUs7U','Fifty Shades Freed_poster.jpg','Consumer Advice Not Available','Fifty Shades Freed ','Dakota Johnson, Jamie Dornan, Eric Johnson, Rita Ora, Luke Grimes, Victor Rasuk, Jennifer Ehle, Eloise Mumford, Max Martini, Callum Keith Rennie','James Foley','Drama','N.A.','Thursday, 8 Feb 2018','Coming Soon'),(54,'Marvel Studios\' Black Panther follows T\'Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T\'Challa\'s mettle as king -and Black Panther- is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.\n\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=138 19 19 79 1 86 199 89 198 79 193 209 246 243 233 52','http://www.youtube.com/embed/dxWvtMOGAhw','Marvel`s Black Panther.jpg','http://www.youtube.com/embed/xjDjIWPwcPU','Marvel`s Black Panther_poster.jpg','Consumer Advice Not Available','Marvel`s Black Panther ','Chadwick Boseman, Michael B. Jordan, Lupita Nyong’o, Danai Gurira, Martin Freeman, Daniel Kaluuya, Letitia Wright, Winston Duke, Angela Bassett, Forest Whitaker, Andy Serkis','Ryan Coogler','Action, Adventure','N.A.','Thursday, 15 Feb 2018','Coming Soon'),(55,'An epic adventure set in the last Ice Age. Europe, 20,000 years ago. While on his first hunt with his tribe’s most elite group, a young man is injured and left for dead. Awakening to find himself broken and alone -- he must learn to survive and navigate the harsh and unforgiving wilderness. Reluctantly taming a lone wolf abandoned by its pack, the pair learn to rely on each other and become unlikely allies, enduring countless dangers and overwhelming odds in order to find their way home before the deadly winter arrives.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=170 228 155 32 59 104 226 89 11 128 100 153 240 200 68 135','http://www.youtube.com/embed/Dq6Il_RmMRE','Alpha.jpg','http://www.youtube.com/embed/MU7YUQabmSE','Alpha_poster.jpg','Consumer Advice Not Available','Alpha ','Kodi Smit-McPhee, Jóhannes Haukur Johannesson','Albert Hughes','Action, Adventure','N.A.','Thursday, 1 Mar 2018','Coming Soon'),(56,'Dominika Egorova is many things. A devoted daughter determined to protect her mother at all costs. A prima ballerina whose ferocity has pushed her body and mind to the absolute limit. A master of seductive and manipulative combat. When she suffers a career-ending injury, Dominika and her mother are facing a bleak and uncertain future. That is why she finds herself manipulated into becoming the newest recruit for Sparrow School, a secret intelligence service that trains exceptional young people like her to use their bodies and minds as weapons. After enduring the perverse and sadistic training process, she emerges as the most dangerous Sparrow the program has ever produced. Dominika must now reconcile the person she was with the power she now commands, with her own life and everyone she cares about at risk, including an American CIA agent who tries to convince her he is the only person she can trust.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=128 10 60 42 12 190 231 35 88 85 34 201 98 218 8 55','http://www.youtube.com/embed/ZQUBjoGm1ls','Red Sparrow.jpg','http://www.youtube.com/embed/vVkZmff5KK8','Red Sparrow_poster.jpg','Consumer Advice Not Available','Red Sparrow ','Jennifer Lawrence, Joel Edgerton, Matthias Schoenaerts, Charlotte Rampling, Mary-Louise Parker, Jeremy Irons','Francis Lawrence','Action, Adventure','N.A.','Thursday, 1 Mar 2018','Coming Soon'),(57,'After the disappearance of her scientist father, three peculiar beings send Meg, her brother, and her friend to space in order to find him. Directed by Ava DuVernay from a screenplay by Jennifer Lee based upon the beloved novel by Madeleine L\'Engle, \"A Wrinkle in Time\" is produced by Jim Whitaker and Catherine Hand with Doug Merrifield serving as executive producer.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=186 181 208 102 49 220 136 172 36 212 18 99 196 116 186 232','http://www.youtube.com/embed/UhZ56rcWwRQ','A Wrinkle In Time.jpg','http://www.youtube.com/embed/E4U3TeY2wtM','A Wrinkle In Time_poster.jpg','Consumer Advice Not Available','A Wrinkle In Time ','Oprah Winfrey, Reese Witherspoon, Mindy Kaling, Guru Mbatha-Raw, Michael Pena, Levi Miller, Deric McCabe, André Holland, Rowan Blanchard, Zach Galifianakis, Chris Pine, Storm Reid','Ava DuVernay','Drama','N.A.','Thursday, 8 Mar 2018','Coming Soon'),(58,'Dr. Paul Kersey (Bruce Willis) is a surgeon who only sees the aftermath of Chicago violence as it’s rushed into his ER – until his wife (Elisabeth Shue) and college-age daughter (Camila Morrone) are viciously attacked in their suburban home. With the police overloaded with crimes, Paul, burning for revenge, hunts for his family’s assailants to deliver justice. As the anonymous slayings of criminals grabs the media’s attention, the city wonders if this deadly vigilante is a guardian angel…or a grim reaper. Fury and fate collide in the intense, action-thriller Death Wish. \n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=56 19 182 69 12 132 76 253 172 199 149 34 166 242 177 193','http://www.youtube.com/embed/t4-Wa6cqWJo','Death Wish.jpg','http://www.youtube.com/embed/v_I4zqC7GN8','Death Wish_poster.jpg','Violence And Some Coarse Language','Death Wish ','Bruce Willis, Vincent D\'Onofrio, Elisabeth Shue, Camila Morrone, Dean Norris, Kimberly Elise','Eli Roth','Thriller','108 minutes','Thursday, 8 Mar 2018','Coming Soon'),(59,'Peter Rabbit, the mischievous and adventurous hero who has captivated generations of readers, now takes on the starring role of his own irreverent, contemporary comedy with attitude. In the film, Peter\'s feud with Mr. McGregor (Domhnall Gleeson) escalates to greater heights than ever before as they rival for the affections of the warm-hearted animal lover who lives next door (Rose Byrne). James Corden voices the character of Peter with playful spirit and wild charm, with Margot Robbie, Elizabeth Debicki, and Daisy Ridley performing the voice roles of the triplets, Flopsy, Mopsy, and Cottontail.\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=13 53 63 74 22 213 188 0 218 127 79 205 198 72 225 92','http://www.youtube.com/embed/c3ZlyIh9QZw','Peter Rabbit.jpg','http://www.youtube.com/embed/bx5zeorHvdE','Peter Rabbit_poster.jpg','Consumer Advice Not Available','Peter Rabbit ','Rose Byrne, Domhnall Gleeson, Sam Neill, Daisy Ridley, Elizabeth Debicki, Margot Robbie, James Corden','Will Gluck','Comedy','N.A.','Thursday, 8 Mar 2018','Coming Soon'),(60,'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared. From Warner Bros. Pictures and Metro-Goldwyn-Mayer Pictures.\n\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=203 251 225 202 230 102 183 255 232 219 193 212 232 43 115 224','http://www.youtube.com/embed/8ndhidEmUbI','Tomb Raider.jpg','http://www.youtube.com/embed/QKJ4CsZUWUo','Tomb Raider_poster.jpg','Consumer Advice Not Available','Tomb Raider ','Alicia Vikander, Dominic West, Walton Goggins, Daniel Wu','Roar Uthaug','Action, Adventure','N.A.','Thursday, 15 Mar 2018','Coming Soon'),(61,'Join our favorite monster family as they embark on a vacation on a luxury monster cruise ship so Drac can take a summer vacation from providing everyone else\'s vacation at the hotel. It’s smooth sailing for Drac’s Pack as the monsters indulge in all of the shipboard fun the cruise has to offer, from monster volleyball to exotic excursions, and catching up on their moon tans. But the dream vacation turns into a nightmare when Mavis realizes Drac has fallen for the mysterious captain of the ship, Ericka, who hides a dangerous secret that could destroy all of monsterkind.\n\n','http://www.shaw.sg/sw_moviedetails.aspx?filmCode=36 100 192 228 165 122 41 39 86 30 186 229 133 177 147 162','http://www.youtube.com/embed/5TEylOMhZWw','hotel.jpg','http://www.youtube.com/embed/d5exSS74Lh0','hotel_poster.jpg','Consumer Advice Not Available','Hotel Transylvania 3: Monster Vacation ','Adam Sandler, Andy Samberg, Selena Gomez, Kevin James, David Spade, Steve Buscemi, Keegan-Michael Key, Molly Shannon, Fran Drescher, Mel Brooks','Genndy Tartakovsky','Family','N.A.','Thursday, 12 Jul 2018','Coming Soon'),(369,'When the best game ever meets mobile, our lord and saviour is born again. Get back to nature in Animal Crossing™: Pocket Camp, the new Animal Crossing mobile game where you take on the role of campsite manager! You\'re in charge, so you can decorate your own campsite however you like! Make it ridiculous, make it retarded, make it weeby—it’s up to you to craft the kind of furniture and toys that will make your camp a must-see for animals and creeps visiting the area! -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------CLICK BUY TO DOWNLOAD NOW! IT\'S FREE!!!@!@1---------------------------------','https://play.google.com/store/apps/details?id=com.nintendo.zaca&hl=en','https://www.youtube.com/embed/oX3wxl10qeo','animal crossing_poster.jpg','https://www.youtube.com/embed/YwRo31IrfIg','animal_crossing_poster.jpg','5 million downloads in 5 days from launch!! And that\'s just on Google Play, there are still those....pfft....iOS users too.','Animal Crossing: Pocket Camp','The yellow colour dog, Another yellow dog, The llama twins, Some other random animals, and YOU!!','The Animal God','Beastiality','Every night 15 mins before bed','Wednesday, 22 November 2017','Suspended');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movieticket`
--

DROP TABLE IF EXISTS `movieticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movieticket` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `age` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movieticket`
--

LOCK TABLES `movieticket` WRITE;
/*!40000 ALTER TABLE `movieticket` DISABLE KEYS */;
INSERT INTO `movieticket` VALUES (2,'Senior Citizen','65 and Above','$7'),(3,'Adult','21 above','$14'),(4,'Children','12 Below','$7');
/*!40000 ALTER TABLE `movieticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `occupancy`
--

DROP TABLE IF EXISTS `occupancy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `occupancy` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `seatno` varchar(45) NOT NULL,
  `row` varchar(45) NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `seatno_UNIQUE` (`seatno`),
  KEY `row` (`row`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `occupancy`
--

LOCK TABLES `occupancy` WRITE;
/*!40000 ALTER TABLE `occupancy` DISABLE KEYS */;
INSERT INTO `occupancy` VALUES (1,'A1','A'),(2,'A2','A'),(3,'A3','A'),(4,'A4','A'),(5,'A5','A'),(6,'B1','B'),(7,'B2','B'),(8,'B3','B'),(9,'B4','B'),(10,'B5','B'),(11,'C1','C'),(12,'C2','C'),(13,'C3','C'),(14,'C4','C'),(15,'C5','C'),(16,'D1','D'),(17,'D2','D'),(18,'D3','D'),(19,'D4','D'),(20,'D5','D'),(21,'E1','E'),(22,'E2','E'),(23,'E3','E'),(24,'E4','E'),(25,'E5','E'),(26,'F2','F');
/*!40000 ALTER TABLE `occupancy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `rating` int NOT NULL,
  `review` varchar(45) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (5,'Ray','a@a.com',1,'i aSDFGHLKHDSJKDHQWKEJCND ASK'),(6,'Tam','Tam@tam.com',1,'I LOVE DADDY SIONGGO'),(7,'Shing','s@s.com',1,'qwerth'),(20,'your mum','YOUR MUM\'S EMAIL',3,'BEST MUM SERVICE EVER'),(21,'CD','SDBB',1,'`1SADFDVCBN');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `screentime`
--

DROP TABLE IF EXISTS `screentime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `screentime` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `day` varchar(45) NOT NULL,
  `time` varchar(45) NOT NULL,
  `roomnumber` varchar(45) NOT NULL,
  `title` varchar(45) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `screentime`
--

LOCK TABLES `screentime` WRITE;
/*!40000 ALTER TABLE `screentime` DISABLE KEYS */;
INSERT INTO `screentime` VALUES (12,'Monday','3pm','Room1','Battle Of The Sexes'),(14,'Tuesday','3pm','Room2','Sing'),(15,'Wednesday','3pm','g1','All I See Is You');
/*!40000 ALTER TABLE `screentime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seatmap`
--

DROP TABLE IF EXISTS `seatmap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seatmap` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `seatno` varchar(45) NOT NULL,
  `row` varchar(45) NOT NULL,
  `roomnumber` varchar(45) NOT NULL,
  `avaliability` varchar(45) NOT NULL,
  PRIMARY KEY (`_id`),
  KEY `roomnumber` (`row`),
  KEY `seat_idx` (`seatno`),
  KEY `roomnumber_idx` (`roomnumber`),
  CONSTRAINT `roomnumber` FOREIGN KEY (`roomnumber`) REFERENCES `cinemaroom` (`roomnumber`),
  CONSTRAINT `row` FOREIGN KEY (`row`) REFERENCES `occupancy` (`row`),
  CONSTRAINT `seat` FOREIGN KEY (`seatno`) REFERENCES `occupancy` (`seatno`)
) ENGINE=InnoDB AUTO_INCREMENT=203 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seatmap`
--

LOCK TABLES `seatmap` WRITE;
/*!40000 ALTER TABLE `seatmap` DISABLE KEYS */;
INSERT INTO `seatmap` VALUES (173,'A1','A','Room1','active'),(175,'C1','C','Room1','active'),(177,'E1','E','Room1','Booked'),(178,'E2','E','Room1','active'),(179,'D2','D','Room1','active'),(180,'C2','C','Room1','active'),(181,'B2','B','Room1','active'),(182,'A2','A','Room1','active'),(183,'A3','A','Room1','active'),(184,'B3','B','Room1','active'),(185,'C3','C','Room1','active'),(186,'D3','D','Room1','active'),(188,'E4','E','Room1','Booked'),(189,'D4','D','Room1','active'),(190,'C4','C','Room1','active'),(191,'B4','B','Room1','active'),(192,'A4','A','Room1','active'),(193,'A5','A','Room1','active'),(194,'B5','B','Room1','active'),(195,'C5','C','Room1','active'),(196,'D5','D','Room1','active'),(198,'E3','E','Room1','Booked'),(199,'A3','A','F1','active'),(200,'A1','A','Room2','active'),(201,'E3','E','F1','active'),(202,'A5','A','F1','active');
/*!40000 ALTER TABLE `seatmap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactionhistory`
--

DROP TABLE IF EXISTS `transactionhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactionhistory` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `accountname` varchar(45) NOT NULL,
  `movietitle` varchar(45) NOT NULL,
  `tickettype` varchar(45) NOT NULL,
  `screentime` varchar(45) NOT NULL,
  `roomno` varchar(45) NOT NULL,
  `seatno` varchar(45) NOT NULL,
  `foodname` varchar(45) NOT NULL,
  `totalprice` varchar(45) NOT NULL,
  `date` varchar(255) NOT NULL,
  PRIMARY KEY (`_id`),
  KEY `accountname` (`accountname`) /*!80000 INVISIBLE */,
  KEY `movietitle` (`movietitle`),
  CONSTRAINT `accountname` FOREIGN KEY (`accountname`) REFERENCES `useraccount` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactionhistory`
--

LOCK TABLES `transactionhistory` WRITE;
/*!40000 ALTER TABLE `transactionhistory` DISABLE KEYS */;
INSERT INTO `transactionhistory` VALUES (2,'c','movietitle','tickettype','screentime','roomno','seatno','foodname','totalprice','2023-05-15'),(3,'c','Battle Of The Sexes','Senior Citizen','3pm,3pm','Room1',' E1','Nacho Cheese','FREE (points redeemed)','2023-05-15'),(4,'c','Battle Of The Sexes','Senior Citizen','Monday,3pm','Room1',' E4','Popcorn','FREE (points redeemed)','2023-05-15');
/*!40000 ALTER TABLE `transactionhistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `useraccount`
--

DROP TABLE IF EXISTS `useraccount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `useraccount` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `loyaltypoints` int NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `role_idx` (`role`),
  CONSTRAINT `role` FOREIGN KEY (`role`) REFERENCES `userprofile` (`role`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useraccount`
--

LOCK TABLES `useraccount` WRITE;
/*!40000 ALTER TABLE `useraccount` DISABLE KEYS */;
INSERT INTO `useraccount` VALUES (1,'a','a@a.a','a','User Admin','active',0),(4,'b','b','b','Cinema Manager','active',0),(5,'c','c','c','Customer','active',100),(6,'d','d','d','User Admin','active',0),(7,'e','e','e','Customer','active',0);
/*!40000 ALTER TABLE `useraccount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userprofile`
--

DROP TABLE IF EXISTS `userprofile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userprofile` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`_id`),
  KEY `role` (`role`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userprofile`
--

LOCK TABLES `userprofile` WRITE;
/*!40000 ALTER TABLE `userprofile` DISABLE KEYS */;
INSERT INTO `userprofile` VALUES (2,'User Admin','Manage Accounts'),(3,'Cinema Manager','Handles Ticketing, Movies, Seat allocation etc...'),(4,'Customer','Purchasing Movie Ticket, Beverages and Giving Reviews etc..'),(5,'Cinema Owner','Generating Report'),(6,'q','q');
/*!40000 ALTER TABLE `userprofile` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-16  0:09:10
