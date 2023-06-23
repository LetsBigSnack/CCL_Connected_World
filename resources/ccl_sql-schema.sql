-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 23, 2023 at 02:08 PM
-- Server version: 10.6.12-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_cc221019_10110`
--

-- --------------------------------------------------------

--
-- Table structure for table `abilities`
--

CREATE TABLE `abilities` (
  `abilityID` int(11) NOT NULL,
  `abilityName` varchar(128) NOT NULL,
  `abilityDescription` text NOT NULL,
  `abilityImagePath` text NOT NULL,
  `abilityJSON` text NOT NULL,
  `championID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `abilities`
--

INSERT INTO `abilities` (`abilityID`, `abilityName`, `abilityDescription`, `abilityImagePath`, `abilityJSON`, `championID`) VALUES
(44, 'Draconic Corruption', 'Fafnir transforms into a terrifying dragon, gaining increased power and new abilities.', 'abilityImage/draconic_corruption_image.jpg', '{\'powerIncrease\': 25}', 16),
(45, 'Cursed Strength', 'Fafnir curses his enemies, reducing their attack speed and damaging them over time.', 'abilityImage/cursed_strength_image.jpg', '{\'attackSpeedReduction\': 30, \'damagePerTick\': 40, \'duration\': 6}', 16),
(46, 'Rending Bite', 'Fenrir bites down on his target, dealing damage and applying a bleeding effect.', 'abilityImage/rending_bite_image.jpg', '{\'damage\': 60, \'bleedDamage\': 20, \'bleedDuration\': 6}', 17),
(47, 'Feral Roar', 'Fenrir lets out a feral roar, intimidating enemies and reducing their attack damage.', 'abilityImage/feral_roar_image.jpg', '{\'duration\': 8, \'attackDamageReduction\': 20}', 17),
(48, 'Northern Lights', 'Freya calls upon the power of the Northern Lights, damaging and slowing enemies in an area.', 'abilityImage/northern_lights_image.jpg', '{\'damage\': 80, \'slowPercentage\': 30, \'radius\': 10}', 18),
(49, 'Valkyrie\'s Discretion', 'Freya transforms into a Valkyrie, gaining new abilities and increased attack speed.', 'abilityImage/valkyries_discretion_image.jpg', '{\'attackSpeedIncrease\': 50}', 18),
(50, 'Bifrost', 'Heimdallr creates a Bifrost bridge, allowing allies to quickly travel across the map.', 'abilityImage/bifrost_image.jpg', '{\'duration\': 10, \'speedIncrease\': 50}', 19),
(51, 'Vigilant Sight', 'Heimdallr gains enhanced vision, revealing hidden enemies and increasing his attack range.', 'abilityImage/vigilant_sight_image.jpg', '{\'duration\': 8, \'attackRangeIncrease\': 30}', 19),
(52, 'Light Stance', 'Hel enters her Light Stance, gaining increased healing power and a damaging ability.', 'abilityImage/light_stance_image.jpg', '{\'healingIncrease\': 30, \'damage\': 70}', 20),
(53, 'Dark Stance', 'Hel enters her Dark Stance, gaining increased damage and a healing reduction ability.', 'abilityImage/dark_stance_image.jpg', '{\'damageIncrease\': 40, \'healingReduction\': 50}', 20),
(54, 'Venomous Haze', 'Jormungandr releases a cloud of toxic gas, damaging and slowing enemies within the area.', 'abilityImage/venomous_haze_image.jpg', '{\'damage\': 90, \'slowPercentage\': 40, \'radius\': 12}', 21),
(55, 'The World Serpent', 'Jormungandr becomes the World Serpent, increasing in size and gaining powerful area damage abilities.', 'abilityImage/the_world_serpent_image.jpg', '{\'sizeIncrease\': 30, \'areaDamage\': 120}', 21),
(56, 'Vanish', 'Loki disappears from sight, becoming stealthed and gaining movement speed.', 'abilityImage/vanish_image.jpg', '{\'duration\': 6, \'movementSpeedIncrease\': 30}', 22),
(57, 'Assassinate', 'Loki prepares to strike a target, dealing massive damage if successful.', 'abilityImage/assassinate_image.jpg', '{\'damageMultiplier\': 3}', 22),
(58, 'Raven Shout', 'Odin lets out a mighty shout, damaging and silencing enemies in an area.', 'abilityImage/raven_shout_image.jpg', '{\'damage\': 70, \'silenceDuration\': 3, \'radius\': 8}', 23),
(59, 'Gungnir\'s Might', 'Odin charges forward with Gungnir, damaging and stunning enemies in his path.', 'abilityImage/gungnirs_might_image.jpg', '{\'damage\': 100, \'stunDuration\': 2}', 23),
(60, 'Dart', 'Ratatoskr dashes forward, damaging enemies and gaining bonus attack speed.', 'abilityImage/dart_image.jpg', '{\'damage\': 50, \'attackSpeedBonus\': 20}', 24),
(61, 'Acorn Blast', 'Ratatoskr fires a blast of acorns, damaging and stunning the first enemy hit.', 'abilityImage/acorn_blast_image.jpg', '{\'damage\': 80, \'stunDuration\': 1}', 24),
(62, 'Permafrost', 'Skadi creates a field of ice, damaging and rooting enemies within the area.', 'abilityImage/permafrost_image.jpg', '{\'damage\': 60, \'rootDuration\': 2, \'radius\': 8}', 25),
(63, 'Winter\'s Grasp', 'Skadi summons Kaldr, her loyal wolf companion, to aid her in battle.', 'abilityImage/winters_grasp_image.jpg', '{\'summonDuration\': 10}', 25),
(64, 'Stellar Burst', 'Sol unleashes a burst of solar energy, damaging and slowing enemies in an area.', 'abilityImage/stellar_burst_image.jpg', '{\'damage\': 80, \'slowPercentage\': 30, \'radius\': 10}', 26),
(65, 'Supernova', 'Sol becomes a supernova, gaining increased power and damaging enemies around her.', 'abilityImage/supernova_image.jpg', '{\'powerIncrease\': 30, \'damage\': 120}', 26),
(66, 'Fire Giant\'s Breath', 'Surtr exhales a fiery breath, damaging and burning enemies within the area.', 'abilityImage/fire_giants_breath_image.jpg', '{\'damage\': 90, \'burnDamage\': 30, \'burnDuration\': 6, \'radius\': 12}', 27),
(67, 'Blazing Sword', 'Surtr wields his blazing sword, striking enemies in front of him with searing flames.', 'abilityImage/blazing_sword_image.jpg', '{\'damage\': 110, \'burnDamage\': 40, \'burnDuration\': 4}', 27),
(68, 'Mjolnir\'s Attunement', 'Thor charges up Mjolnir, gaining increased attack speed and dealing bonus damage.', 'abilityImage/mjolnirs_attunement_image.jpg', '{\'attackSpeedIncrease\': 40, \'bonusDamage\': 30}', 28),
(69, 'Anvil of Dawn', 'Thor summons a barrage of lightning strikes, damaging and stunning enemies within the area.', 'abilityImage/anvil_of_dawn_image.jpg', '{\'damage\': 100, \'stunDuration\': 2, \'radius\': 8}', 28),
(70, 'Fearless Assault', 'Tyr charges forward, damaging enemies and pushing them in the direction of his choice.', 'abilityImage/fearless_assault_image.jpg', '{\'damage\': 70, \'pushDirection\': \'forward\'}', 29),
(71, 'Lawbringer', 'Tyr leaps into the air and slams down with his sword, damaging and knocking up enemies.', 'abilityImage/lawbringer_image.jpg', '{\'damage\': 90, \'knockupDuration\': 1}', 29),
(72, 'Bladed Arrow', 'Ullr fires a bladed arrow, damaging enemies in a line and reducing their healing.', 'abilityImage/bladed_arrow_image.jpg', '{\'damage\': 60, \'healingReduction\': 40, \'lineLength\': 15}', 30),
(73, 'Glacial Strike', 'Ullr throws an axe, damaging and stunning enemies in a target area.', 'abilityImage/glacial_strike_image.jpg', '{\'damage\': 80, \'stunDuration\': 1, \'radius\': 8}', 30),
(74, 'Frost Breath', 'Ymir breathes out a cone of freezing breath, damaging and slowing enemies within range.', 'abilityImage/frost_breath_image.jpg', '{\'damage\': 70, \'slowPercentage\': 30, \'coneAngle\': 90}', 31),
(75, 'Shards of Ice', 'Ymir summons shards of ice, damaging and rooting enemies in an area.', 'abilityImage/shards_of_ice_image.jpg', '{\'damage\': 90, \'rootDuration\': 2, \'radius\': 10}', 31);

-- --------------------------------------------------------

--
-- Table structure for table `champions`
--

CREATE TABLE `champions` (
  `championID` int(11) NOT NULL,
  `championName` varchar(128) NOT NULL,
  `championDescription` text NOT NULL,
  `championImagePath` text NOT NULL,
  `championPrice` float NOT NULL,
  `championHealth` float NOT NULL,
  `championStrength` float NOT NULL,
  `championSpeed` float NOT NULL,
  `championArmor` float NOT NULL,
  `championType` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `champions`
--

INSERT INTO `champions` (`championID`, `championName`, `championDescription`, `championImagePath`, `championPrice`, `championHealth`, `championStrength`, `championSpeed`, `championArmor`, `championType`) VALUES
(16, 'Fafnir', 'The Greedy Dragon', 'champions/fafnir_image.jpg', 185, 174, 193, 98, 73, 'Tank'),
(17, 'Fenrir', 'The Legendary Wolf', 'champions/fenrir_image.jpg', 300, 200, 220, 120, 90, 'Bruiser'),
(18, 'Freya', 'The Norse Goddess of Love and War', 'champions/freya_image.jpg', 220, 188, 207, 112, 83, 'Mage'),
(19, 'Heimdallr', 'The Norse God of Vigilance and the Bifrost', 'champions/heimdallr_image.jpg', 250, 180, 200, 105, 78, 'Support'),
(20, 'Hel', 'The Norse Goddess of the Underworld', 'champions/hel_image.jpg', 150, 150, 170, 85, 63, 'Mage'),
(21, 'Jormungandr', 'The World Serpent', 'champions/jormungandr_image.jpg', 280, 190, 210, 115, 86, 'Bruiser'),
(22, 'Loki', 'The Trickster God', 'champions/loki_image.jpg', 270, 185, 205, 110, 82, 'Assassin'),
(23, 'Odin', 'The Allfather', 'champions/odin_image.jpg', 290, 195, 215, 120, 90, 'Support'),
(24, 'Ratatoskr', 'The Squirrel Messenger', 'champions/ratatoskr_image.jpg', 160, 155, 175, 90, 67, 'Assassin'),
(25, 'Skadi', 'The Norse Goddess of Winter', 'champions/skadi_image.jpg', 180, 165, 185, 95, 71, 'Mage'),
(26, 'Sol', 'The Norse Goddess of the Sun', 'champions/sol_image.jpg', 200, 170, 190, 100, 75, 'Mage'),
(27, 'Surtr', 'The Fire Giant', 'champions/surtr_image.jpg', 280, 190, 210, 115, 86, 'Tank'),
(28, 'Thor', 'The God of Thunder', 'champions/thor_image.jpg', 275, 190, 210, 115, 86, 'Tank'),
(29, 'Tyr', 'The Norse God of War and Justice', 'champions/tyr_image.jpg', 260, 185, 205, 110, 82, 'Tank'),
(30, 'Ullr', 'The Norse God of Winter Hunting', 'champions/ullr_image.jpg', 210, 175, 195, 105, 78, 'Hunter'),
(31, 'Ymir', 'The Frost Giant', 'champions/ymir_image.jpg', 240, 180, 200, 100, 75, 'Tank');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `newsID` int(11) NOT NULL,
  `newsTitle` varchar(128) NOT NULL,
  `newsContent` text NOT NULL,
  `newsDate` timestamp NULL DEFAULT current_timestamp(),
  `newsImagePath` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`newsID`, `newsTitle`, `newsContent`, `newsDate`, `newsImagePath`) VALUES
(1, 'Get BattleChamp today', 'dsadads dasdas dsadasdas dasdsasd', '2023-06-16 07:05:56', 'newsImages/1.jpg'),
(2, 'Get BattleChamp tomorrow', 'test dasdas dsadasdas dasdsasd', '2023-06-16 07:06:09', 'newsImages/2.jpg'),
(3, 'BattleChamp\'s Multiplayer Madness!', 'Experience the thrilling multiplayer battles in BattleChamp! Choose from a variety of characters and fight your way to the top!', '2023-06-16 08:21:25', 'newsImages/1.jpg'),
(4, 'Character Customization in BattleChamp', 'Tailor your gameplay experience to your liking with our vast range of characters, each with unique stats and skills. Purchase new characters in our in-game store today!', '2023-06-16 08:21:25', 'newsImages/2.jpg'),
(5, 'New Updates for BattleChamp', 'Check out the exciting new updates and features for BattleChamp! Stay tuned for more information.', '2023-06-16 08:21:25', 'newsImages/3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `patchnotes`
--

CREATE TABLE `patchnotes` (
  `patchID` int(11) NOT NULL,
  `patchTitel` varchar(256) NOT NULL,
  `patchVersion` varchar(128) NOT NULL,
  `patchContent` text NOT NULL,
  `patchDate` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `patchnotes`
--

INSERT INTO `patchnotes` (`patchID`, `patchTitel`, `patchVersion`, `patchContent`, `patchDate`) VALUES
(1, 'Lorem Bibsum', '0.0.1', 'This is a Test Patch', '2023-06-16 09:20:50'),
(2, 'Lorem Bibsum', '0.1.1', 'This is a Test Patch', '2023-06-16 09:20:51'),
(3, 'Lorem Bibsum', '0.6.9', 'This is a Test Patch', '2023-06-16 09:21:50');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `transactionID` int(11) NOT NULL,
  `userWalletID` int(11) NOT NULL,
  `transactionAmount` float DEFAULT NULL,
  `transactionDate` timestamp NULL DEFAULT current_timestamp(),
  `transactionDescription` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `userChampions`
--

CREATE TABLE `userChampions` (
  `userChampionID` int(11) NOT NULL,
  `championID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `userChampionBuyDate` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `userFriends`
--

CREATE TABLE `userFriends` (
  `userFriendID` int(11) NOT NULL,
  `userID_1` int(11) NOT NULL,
  `userID_2` int(11) NOT NULL,
  `userFriendDate` timestamp NULL DEFAULT current_timestamp(),
  `userFriendAccept` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `userPictures`
--

CREATE TABLE `userPictures` (
  `userPictureID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `userPicturePath` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `userName` varchar(32) NOT NULL,
  `userEmail` varchar(128) NOT NULL,
  `userPassword` varchar(256) NOT NULL,
  `userElo` int(11) NOT NULL DEFAULT 0,
  `userRole` varchar(32) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `userWallets`
--

CREATE TABLE `userWallets` (
  `userWalletID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `userWalletAmount` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `abilities`
--
ALTER TABLE `abilities`
  ADD PRIMARY KEY (`abilityID`),
  ADD KEY `championID` (`championID`);

--
-- Indexes for table `champions`
--
ALTER TABLE `champions`
  ADD PRIMARY KEY (`championID`),
  ADD UNIQUE KEY `championName` (`championName`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsID`);

--
-- Indexes for table `patchnotes`
--
ALTER TABLE `patchnotes`
  ADD PRIMARY KEY (`patchID`),
  ADD UNIQUE KEY `patchVersion` (`patchVersion`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`transactionID`),
  ADD KEY `userWalletID` (`userWalletID`);

--
-- Indexes for table `userChampions`
--
ALTER TABLE `userChampions`
  ADD PRIMARY KEY (`userChampionID`),
  ADD UNIQUE KEY `no_duplicate_champions` (`championID`,`userID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `userFriends`
--
ALTER TABLE `userFriends`
  ADD PRIMARY KEY (`userFriendID`),
  ADD UNIQUE KEY `userID_1` (`userID_1`,`userID_2`),
  ADD KEY `userID_2` (`userID_2`);

--
-- Indexes for table `userPictures`
--
ALTER TABLE `userPictures`
  ADD PRIMARY KEY (`userPictureID`),
  ADD UNIQUE KEY `userID` (`userID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `userName` (`userName`),
  ADD UNIQUE KEY `userEmail` (`userEmail`);

--
-- Indexes for table `userWallets`
--
ALTER TABLE `userWallets`
  ADD PRIMARY KEY (`userWalletID`),
  ADD KEY `userID` (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `abilities`
--
ALTER TABLE `abilities`
  MODIFY `abilityID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `champions`
--
ALTER TABLE `champions`
  MODIFY `championID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `newsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `patchnotes`
--
ALTER TABLE `patchnotes`
  MODIFY `patchID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `transactionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `userChampions`
--
ALTER TABLE `userChampions`
  MODIFY `userChampionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `userFriends`
--
ALTER TABLE `userFriends`
  MODIFY `userFriendID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `userPictures`
--
ALTER TABLE `userPictures`
  MODIFY `userPictureID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `userWallets`
--
ALTER TABLE `userWallets`
  MODIFY `userWalletID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `abilities`
--
ALTER TABLE `abilities`
  ADD CONSTRAINT `abilities_ibfk_1` FOREIGN KEY (`championID`) REFERENCES `champions` (`championID`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userWalletID`) REFERENCES `userWallets` (`userWalletID`);

--
-- Constraints for table `userChampions`
--
ALTER TABLE `userChampions`
  ADD CONSTRAINT `userChampions_ibfk_1` FOREIGN KEY (`championID`) REFERENCES `champions` (`championID`),
  ADD CONSTRAINT `userChampions_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`);

--
-- Constraints for table `userFriends`
--
ALTER TABLE `userFriends`
  ADD CONSTRAINT `userFriends_ibfk_1` FOREIGN KEY (`userID_1`) REFERENCES `users` (`userID`),
  ADD CONSTRAINT `userFriends_ibfk_2` FOREIGN KEY (`userID_2`) REFERENCES `users` (`userID`);

--
-- Constraints for table `userPictures`
--
ALTER TABLE `userPictures`
  ADD CONSTRAINT `userPictures_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`);

--
-- Constraints for table `userWallets`
--
ALTER TABLE `userWallets`
  ADD CONSTRAINT `userWallets_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
