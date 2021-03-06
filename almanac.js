const almanac = [
	{ "name": "Acamar", "ra": 2.984863888888889, "dec": -40.212250000000004 },
	{ "name": "Achernar", "ra": 1.642263888888889, "dec": -57.11913888888889 },
	{ "name": "Acrux", "ra": 12.464002777777777, "dec": -63.22683333333334 },
	{ "name": "Adhara", "ra": 6.991244444444445, "dec": -29.002194444444445 },
	{ "name": "Al Na'ir", "ra": 22.16085, "dec": -46.84930555555556 },
	{ "name": "Aldebaran", "ra": 4.6196527777777785, "dec": 16.55313888888889 },
	{ "name": "Alioth", "ra": 12.916905555555555, "dec": 55.84411111111111 },
	{ "name": "Alkaid", "ra": 13.807208333333334, "dec": 49.206250000000004 },
	{ "name": "Alnilam", "ra": 5.622033333333333, "dec": -1.1875277777777777 },
	{ "name": "Alphard", "ra": 9.477727777777778, "dec": -8.755333333333333 },
	{ "name": "Alphecca", "ra": 15.594169444444445, "dec": 26.641777777777776 },
	{ "name": "Altair", "ra": 19.864830555555557, "dec": 8.92736111111111 },
	{ "name": "Alpheratz", "ra": 0.1590361111111111, "dec": 29.210805555555556 },
	{ "name": "Ankaa", "ra": 0.45642777777777777, "dec": -42.18147222222222 },
	{ "name": "Antares", "ra": 16.513266666666667, "dec": -26.48183333333333 },
	{ "name": "Arcturus", "ra": 14.278194444444445, "dec": 19.067166666666665 },
	{ "name": "Atria", "ra": 16.851519444444445, "dec": -69.06880555555556 },
	{ "name": "Avior", "ra": 8.382052777777778, "dec": -59.582527777777784 },
	{ "name": "Bellatrix", "ra": 5.438402777777778, "dec": 6.369722222222221 },
	{ "name": "Betelgeuse", "ra": 5.93925, "dec": 7.411138888888889 },
	{ "name": "Canopus", "ra": 6.406808333333334, "dec": -52.70666666666667 },
	{ "name": "Capella", "ra": 5.305124999999999, "dec": 46.01844444444444 },
	{ "name": "Deneb", "ra": 20.703569444444444, "dec": 45.35772222222222 },
	{ "name": "Denebola", "ra": 11.836502777777778, "dec": 14.449333333333334 },
	{ "name": "Diphda", "ra": 0.7450666666666667, "dec": -17.862472222222223 },
	{ "name": "Dubhe", "ra": 11.084616666666667, "dec": 61.636694444444444 },
	{ "name": "Elnath", "ra": 5.461250000000001, "dec": 28.625 },
	{ "name": "Eltanin", "ra": 17.952655555555555, "dec": 51.486555555555555 },
	{ "name": "Enif", "ra": 21.754883333333332, "dec": 9.976694444444444 },
	{ "name": "Fomalhaut", "ra": 22.981477777777776, "dec": -29.501638888888888 },
	{ "name": "Gacrux", "ra": 12.53995, "dec": -57.24225 },
	{ "name": "Gienah", "ra": 12.282525000000001, "dec": -17.666861111111114 },
	{ "name": "Hadar", "ra": 14.09036388888889, "dec": -60.484 },
	{ "name": "Hamal", "ra": 2.140327777777778, "dec": 23.56613888888889 },
	{ "name": "Kaus Australis", "ra": 18.4279, "dec": -34.373083333333334 },
	{ "name": "Kochab", "ra": 14.845422222222222, "dec": 74.06786111111111 },
	{ "name": "Markab", "ra": 23.09795833333333, "dec": 15.324111111111112 },
	{ "name": "Menkar", "ra": 3.0571888888888887, "dec": 4.176833333333334 },
	{ "name": "Menkent", "ra": 14.133408333333334, "dec": -36.481500000000004 },
	{ "name": "Miaplacidus", "ra": 9.222844444444444, "dec": -69.81219444444444 },
	{ "name": "Mirfak", "ra": 3.431583333333333, "dec": 49.936749999999996 },
	{ "name": "Nunki", "ra": 18.944483333333334, "dec": -26.268027777777778 },
	{ "name": "Peacock", "ra": 20.457280555555556, "dec": -56.66038888888889 },
	{ "name": "Polaris", "ra": 2.979425, "dec": 89.35374999999999 },
	{ "name": "Pollux", "ra": 7.777522222222222, "dec": 27.97236111111111 },
	{ "name": "Procyon", "ra": 7.674061111111111, "dec": 5.168055555555556 },
	{ "name": "Rasalhague", "ra": 17.59983611111111, "dec": 12.544555555555556 },
	{ "name": "Regulus", "ra": 10.159033333333333, "dec": 11.859916666666667 },
	{ "name": "Rigel", "ra": 5.259788888888889, "dec": -8.175444444444445 },
	{ "name": "Rigil Kent.", "ra": 14.686883333333334, "dec": -60.91383333333333 },
	{ "name": "Sabik", "ra": 17.19461111111111, "dec": -15.752444444444444 },
	{ "name": "Scheat", "ra": 23.081041666666668, "dec": 28.2015 },
	{ "name": "Shaula", "ra": 17.585805555555556, "dec": -37.11988888888889 },
	{ "name": "Sirius", "ra": 6.768386111111111, "dec": -16.74688888888889 },
	{ "name": "Spica", "ra": 13.439538888888888, "dec": -11.278083333333335 },
	{ "name": "Suhail", "ra": 9.146458333333333, "dec": -43.52436111111111 },
	{ "name": "Vega", "ra": 18.628619444444446, "dec": 38.80466666666666 },
	{ "name": "Zuben'ubi", "ra": 15.08985, "dec": -25.37063888888889 },
];
