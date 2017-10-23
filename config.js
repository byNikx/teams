var SLIDE_RELOAD_INTERVAL_HOUR = 1;
var SLIDE_INTERVAL_SECONDS = 30;
var SLIDE_INTERVAL_SECONDS_TOP_LEFT = 15;
var SLIDE_INTERVAL_SECONDS_TOP_RIGHT = 15;

var IMG_7N = 'team/7n.png';

var IMG_PATH_ONLINE = "file://Bdfilserver/bd$/Afdelinger/BTA-jpgfiler/Personale/";
var IMG_PATH = "img/";
var IMG_PATH_COPY = "copy \\\\Bdfilserver\\bd$\\Afdelinger\\BTA-jpgfiler\\Personale\\";

var SCROLL_TEXT = 'B-AGILE TEST FOUNDATION 100 % GENNEMFØRT - ALLE TEAMS ER CERTIFICEREDE!';


var slides = [
//{ what: 'image', data: 'img/governanceniveau.png' },
{ what: 'statsimage', data: 'img/Slide6.jpg' },
{ what: 'image', data: 'img/Slide1.png' },
{ what: 'image', data: 'img/Slide2.png' },
{ what: 'image', data: 'img/Slide3.png' },
//{ what: 'image', data: 'img/Slide4.png' },
//{ what: 'image', data: 'img/Slide5.png' },
{ what: 'statsimage', data: 'img/Slide5.png' },
{ what: 'statsimage', data: 'img/Slide4.png' },
{ what: 'statsimage', data: 'img/Slide6.jpg' },
//{ what: 'image', data: 'incidents-januar-2017/Slide1.jpg' },
//{ what: 'image', data: 'incidents-januar-2017/Slide2.jpg' },
{ what: 'team', data: {							
							name: 'Avengers',
							backlog: 'Mobile apps',
							sprintgoal: 'Unknown',
							team: [
								{name: 'Anja Frydenholm', title: 'Avengers', img: 'AMF-1.JPG'},
								{name: 'Nikolaj Mols Hansen', title: 'Avengers', img: 'NIM-1.JPG'},
								{name: 'Camilla Larsen', title: 'Avengers', img: 'CLR-1.JPG'},
								{name: 'Jack Ord Rasmussen', title: 'Avengers', img: 'JRN-1.JPG'},
								{name: 'Line Nielsen', title: 'Avengers', img: 'LIN-1.JPG'},
								{name: 'Peter Holst', title: 'Avengers', img: 'PHL-1.JPG'},
								{name: 'Thomas Norsted', title: 'Avengers', img: 'TNO-1.JPG'}
]							
}},
{ what: 'team', data: {							
							name: 'DenIn',
							backlog: 'Netbank Privat',
							sprintgoal: 'Unknown',
							team: [
								{name: 'Anja Frydenholm', title: 'DenIn', img: 'AMF-1.JPG'},
					{name: 'Birgitte Worm Due', title: 'DenIn', img: 'BWD-1.JPG'},
					{name: 'Louise Kjærgaard', title: 'DenIn', img: 'LOK-1.JPG'},
					{name: 'Sten Kjærsgaard', title: 'DenIn', img: 'SKD-1.JPG'},					
					{name: 'Susanne Lund', title: 'DenIn', img: 'SRA-1.JPG'},
					{name: 'Gagandeep Sharma', title: 'DenIn', img: 'GAG-1.JPG'},
					{name: 'Praveena Chordia', title: 'DenIn', img: 'PRC-1.JPG'},
					{name: 'Raju Athokpam Singh', title: 'DenIn', img: 'ATS-1.JPG'},
					{name: 'Tabish Zia', title: 'DenIn', img: 'TAZ-1.JPG'},
					{name: 'Gaurav Kumar', title: 'DenIn', img: 'GAK-1.JPG'}

]							
}},
{ what: 'team', data: {
							name: 'Grønne mænd',
							backlog: 'Kundevendt sikkerhed',
							sprintgoal: 'Unknown',
							team: [	
					{name: 'Bo Grønbæk', title: 'Grønne mæ.', img: 'BOG-1.JPG'},
					{name: 'Vita Klit', title: 'Grønne mæ.', img: 'VTK-1.JPG'},
					{name: 'Kjeld Christensen', title: 'Grønne mæ.', img: 'KJC-1.JPG'}
									]
}},
{ what: 'team', data: {
							name: 'Ledelse',
							backlog: 'Ledelse',
							sprintgoal: 'Unknown',
							team: [	
									{name: 'Anne-Sofie Rosbjerg Touray', title: 'Ledelse', img: 'AST-1.JPG'},
			{name: 'Jesper Rohde', title: 'Ledelse', img: 'JRO-1.JPG'},
			{name: 'Michael Lægdsgaard', title: 'Ledelse', img: 'MHL-1.JPG'}
									]
}},
{ what: 'team', data: {
							name: 'Mario',
							backlog: 'Mobile apps',
							sprintgoal: 'Unknown',
							team: [	
				{name: 'Brian Højland Nielsen', title: 'Mario', img: 'BHN-1.JPG'},
				{name: 'Birte Træholt Klitte', title: 'Mario', img: 'BTK-1.JPG'},
				{name: 'Finn Norrbohm', title: 'Mario', img: 'FNO-1.JPG'},
				{name: 'Kenneth Bøgedahl', title: 'Mario', img: 'KBH-1.JPG'},
				{name: 'Morten Sangill', title: 'Mario', img: 'MDS-1.JPG'},
				{name: 'Morten Gregersen', title: 'Mario', img: 'MGR-1.JPG'}
									]
}},
{ what: 'team', data: {
							name: 'Munchkin',
							backlog: 'UMA platform',
							sprintgoal: 'Unknown',
							team: [	
								{name: 'Casper Green', title: 'Munchkin', img: 'CGR-1.JPG'},
			{name: 'Daniel Brask Filbert', title: 'Munchkin', img: 'DBF-1.JPG'}
									]
}},
{ what: 'team', data: {
							name: 'Sikkerhed',
							backlog: 'Kundevendt sikkerhed',
							sprintgoal: '',
							team: [									
			{name: 'Bjarne Flugt', title: 'Sikkerhed', img: 'BFJ-1.JPG'},
			{name: 'Benny Kristensen', title: 'Sikkerhed', img: 'BKR-1.JPG'},
			{name: 'Flemming Nielsen', title: 'Sikkerhed', img: 'FNN-1.JPG'},
			{name: 'Holger Klausnitzer', title: 'Sikkerhed', img: 'HOK-1.JPG'},
			{name: 'Jesper Petersen', title: 'Sikkerhed', img: 'JPN-1.JPG'},
			{name: 'Lene Andersen', title: 'Sikkerhed', img: 'LSS-1.JPG'},
			{name: 'Claus Rune Westergaard', title: 'Sikkerhed', img: 'CWJ-1.JPG'},
			{name: 'Frits Andersen', title: 'Sikkerhed', img: 'FAN-1.JPG'}
									]
}},
{ what: 'team', data: {
							name: 'Fitbits',
							backlog: 'WCM',
							sprintgoal: 'Unknown',
							team: [	
								{name: 'Merete Junge Simonsen', title: 'Team Fitbits', img: 'MJS-1.JPG'},
				{name: 'Marianne Aagaard', title: 'Team Fitbits', img: 'MAG-1.JPG'},
				{name: 'Abhishek Kaushik', title: 'Team Fitbits', img: 'ABH-1.JPG'},
				{name: 'Pradeep Kumar Sharma', title: 'Team Fitbits', img: 'PKS-1.JPG'},
				{name: 'Vijay Kumar Gupta', title: 'Team Fitbits', img: 'VKG-1.JPG'},
				{name: 'Mandeep Singh', title: 'Team Fitbits', img: 'MDG-1.JPG'},
				{name: 'Amaresh Kumar Dhankhar', title: 'Team Fitbits', img: 'AKD-1.JPG'}
									]
}},
{ what: 'team', data: {
							name: 'Team Minions',
							backlog: 'WCM',
							sprintgoal: '',
							team: [	
								{name: 'Ann Sofie Skjoldager', title: 'Team Minions', img: 'ASK-1.JPG'},				
					{name: 'Camilla Linnemann', title: 'Team Minions', img: 'CML-1.JPG'},
					{name: 'Dennis Francek', title: 'Team Minions', img: 'DFR-1.JPG'},
					{name: 'Dat Nguyen', title: 'Team Minions', img: 'DNG-1.JPG'},
					{name: 'Jette Ejby', title: 'Team Minions', img: 'JEE-1.JPG'},
					{name: 'Morten Vandel', title: 'Team Minions', img: 'MVA-1.JPG'}
									]
}},
{ what: 'team', data: {
							name: 'Top Gun',
							backlog: 'IFRS9 og Netbank Erhverv',
							sprintgoal: 'Unknown',
							team: [	
								{name: 'Bodil Højgaard Strandby', title: 'Top Gun', img: 'BHS-1.JPG'},
				{name: 'Michael Søgaard', title: 'Top Gun', img: 'MSD-1.JPG'},
				{name: 'Søren Bardino Kaa', title: 'Top Gun', img: 'SNK-1.JPG'},
				{name: 'Dorte Lundum', title: 'Top Gun', img: 'DLN-1.JPG'},
				{name: 'Jørgen Jegsen', title: 'Top Gun', img: 'JJG-1.JPG'},
				{name: 'Kirsten Hoffmeyer', title: 'Top Gun', img: 'KHO-1.JPG'},
				{name: 'Lars Bruun', title: 'Top Gun', img: 'LAB-1.JPG'},
				{name: 'Mikkel Bovbjerg Hansen', title: 'Top Gun', img: 'MBO-1.JPG'}									
									]
}},
{ what: 'team', data: {
							name: 'Turtle',
							backlog: 'Netbank privat',
							sprintgoal: 'Vi kan lave en 13er',
							team: [
				{name: 'Jørgen Vrou', title: 'Turtle', img: 'JVH-1.JPG'},
				{name: 'Rikke Volff Svendsen', title: 'Turtle', img: 'RVS-1.JPG'},
				{name: 'Sander Jespersen', title: 'Turtle', img: 'SAJ-1.JPG'},
				{name: 'Tommy Madsen', title: 'Turtle', img: 'TMA-1.JPG'},
				{name: 'Jens Fredholm', title: 'Turtle', img: 'JFR-1.JPG'},
				{name: 'Lars BangMadsen', title: 'Turtle', img: 'LBM-1.JPG'},
				{name: 'Mikael Kristoffersen', title: 'Turtle', img: 'MKT-1.JPG'},
				{name: 'Thomas Nis Westergaard', title: 'Turtle', img: 'TNW-1.JPG'},
				{name: 'Subhasish Patnaik', title: 'Turtle', img: 'SPA-1.JPG'},
				{name: 'Nadeem Ahmad', title: 'Turtle', img: 'NAD-1.JPG'},
				{name: 'Shalini Sethi', title: 'Turtle', img: 'SSE-1.JPG'}									
									]
}},
{ what: 'team', data: {
							name: 'Tværgående',
							backlog: 'Agile, Coach, excellence, UX, og meget mere',
							sprintgoal: 'Unknown',
							team: [	
					{name: 'Jakob Sørensen', title: 'Tværgående', img: 'JAO-1.JPG'},
					{name: 'Lars Behn-Segall', title: 'Tværgående', img: 'LBS-1.JPG'},
					{name: 'Peter Bering', title: 'Tværgående', img: 'PBG-1.JPG'},
					{name: 'Rikke Volff Svendsen', title: 'Tværgående', img: 'RVS-1.JPG'},
					{name: 'Claus Broholm', title: 'Tværgående', img: 'CLB-1.JPG'},
					{name: 'Frits Andersen', title: 'Tværgående', img: 'FAN-1.JPG'},
					{name: 'Flemming Rubak', title: 'Tværgående', img: 'FRU-1.JPG'},					
					{name: 'Morten Vandel', title: 'Tværgående', img: 'MVA-1.JPG'},
					{name: 'Tine Heidi', title: 'Tværgående', img: 'TIH-1.JPG'}
									]
}}


];

