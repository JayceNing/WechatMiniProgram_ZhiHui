// miniprogram/pages/reserve/reserve.js
const app = getApp()

Page({
  data: {
    TabCur: 0,
    scrollLeft:0,
    setting: { // 使用setting配置，方便统一还原
			rotate: 0,
			skew: 0,
			enableRotate: true,
		},
		IUCN: [{
      id: '0',
      level:'LC',
      color:'green',
		},{
      id: '1',
      level:'NT',
      color:'olive',
    },{
      id: '2',
      level:'VU',
      color:'yellow',
    },{
      id: '3',
      level:'EN',
      color:'orange',
    },{
      id: '4',
      level:'CR',
      color:'red',
    },{
      id: '5',
      level:'EW',
      color:'brown',
    },{
      id: '6',
      level:'EX',
      color:'black',
    },],
		markers: [
			{
				callout: {
					content: '北戴河森林公园湿地',
					padding: 10,
					borderRadius: 2,
					display: 'ALWAYS'
				},
				id:0,
				latitude: 39.841761,
				longitude: 119.516626,
				iconPath: './imgs/Marker1_Activated@3x.png',
				width: '34px',
				height: '34px',
				rotate: 0,
				alpha: 1,
			},
			{
				callout: {
					content: '昌黎七里海湿地',
					padding: 10,
					borderRadius: 2,
					display: 'ALWAYS'
				},
				id:1,
				latitude: 39.583907,
				longitude: 119.273761,
				iconPath: './imgs/Marker1_Activated@3x.png',
				width: '34px',
				height: '34px',
				rotate: 0,
				alpha: 1,
			},
			{
				callout: {
					content: '山海关石河入海口湿地',
					padding: 10,
					borderRadius: 2,
					display: 'ALWAYS'
				},
				id:2,
				latitude: 39.96,
        longitude: 119.783,
				iconPath: './imgs/Marker1_Activated@3x.png',
				width: '34px',
				height: '34px',
				rotate: 0,
				alpha: 1,
			},
		],
		polygon:[{  //此处为北京区属周边数组 其他城市或精确到区级请去“http://datav.aliyun.com/tools/atlas/#&lat=33.578014746143985&lng=104.150390625&zoom=3”获取JSON文件
			points: [
				{longitude:119.612722,latitude:40.32073},
{longitude:119.616204,latitude:40.318346},
{longitude:119.62146,latitude:40.30356},
{longitude:119.628267,latitude:40.300094},
{longitude:119.634462,latitude:40.294064},
{longitude:119.642143,latitude:40.291311},
{longitude:119.647021,latitude:40.285803},
{longitude:119.651429,latitude:40.273408},
{longitude:119.647268,latitude:40.268468},
{longitude:119.642143,latitude:40.265072},
{longitude:119.643969,latitude:40.259479},
{longitude:119.637944,latitude:40.256391},
{longitude:119.636561,latitude:40.249693},
{longitude:119.632675,latitude:40.246331},
{longitude:119.630419,latitude:40.238218},
{longitude:119.626976,latitude:40.231054},
{longitude:119.623951,latitude:40.22692},
{longitude:119.62948,latitude:40.223153},
{longitude:119.632062,latitude:40.226492},
{longitude:119.639091,latitude:40.231779},
{longitude:119.643069,latitude:40.229807},
{longitude:119.65032,latitude:40.23128},
{longitude:119.655745,latitude:40.234476},
{longitude:119.666283,latitude:40.239251},
{longitude:119.674277,latitude:40.236828},
{longitude:119.676246,latitude:40.224508},
{longitude:119.696291,latitude:40.208845},
{longitude:119.710323,latitude:40.19898},
{longitude:119.716804,latitude:40.196092},
{longitude:119.719295,latitude:40.204995},
{longitude:119.731137,latitude:40.202653},
{longitude:119.736288,latitude:40.204579},
{longitude:119.745952,latitude:40.207966},
{longitude:119.75122,latitude:40.187806},
{longitude:119.752772,latitude:40.170459},
{longitude:119.757259,latitude:40.159994},
{longitude:119.755498,latitude:40.153167},
{longitude:119.762462,latitude:40.144745},
{longitude:119.760336,latitude:40.136143},
{longitude:119.755902,latitude:40.128065},
{longitude:119.741505,latitude:40.111202},
{longitude:119.736692,latitude:40.104858},
{longitude:119.762319,latitude:40.085584},
{longitude:119.771578,latitude:40.082262},
{longitude:119.765475,latitude:40.076809},
{longitude:119.76078,latitude:40.067699},
{longitude:119.763245,latitude:40.061053},
{longitude:119.769009,latitude:40.055693},
{longitude:119.76554,latitude:40.053013},
{longitude:119.770887,latitude:40.048796},
{longitude:119.78252,latitude:40.048379},
{longitude:119.78222,latitude:40.04577},
{longitude:119.787514,latitude:40.043328},
{longitude:119.791688,latitude:40.042804},
{longitude:119.794817,latitude:40.042553},
{longitude:119.799604,latitude:40.041314},
{longitude:119.802499,latitude:40.043506},
{longitude:119.80765,latitude:40.044078},
{longitude:119.810545,latitude:40.045877},
{longitude:119.81481,latitude:40.050976},
{longitude:119.816636,latitude:40.051035},
{longitude:119.820874,latitude:40.049344},
{longitude:119.834985,latitude:40.050261},
{longitude:119.835898,latitude:40.046449},
{longitude:119.844687,latitude:40.037109},
{longitude:119.854234,latitude:40.032295},
{longitude:119.849604,latitude:40.026289},
{longitude:119.8489,latitude:40.022297},
{longitude:119.848978,latitude:40.017673},
{longitude:119.843148,latitude:40.012131},
{longitude:119.841518,latitude:40.010414},
{longitude:119.843331,latitude:40.005968},
{longitude:119.847035,latitude:40.002785},
{longitude:119.845535,latitude:39.999102},
{longitude:119.852616,latitude:39.993642},
{longitude:119.872374,latitude:39.960597},
{longitude:119.86241,latitude:39.951531},
{longitude:119.835506,latitude:39.964438},
{longitude:119.835741,latitude:39.975875},
{longitude:119.830146,latitude:39.972989},
{longitude:119.827147,latitude:39.96569},
{longitude:119.82879,latitude:39.976722},
{longitude:119.838988,latitude:39.98427},
{longitude:119.834776,latitude:39.983805},
{longitude:119.829116,latitude:39.979119},
{longitude:119.820574,latitude:39.979238},
{longitude:119.811954,latitude:39.973526},
{longitude:119.803112,latitude:39.967896},
{longitude:119.791179,latitude:39.952318},
{longitude:119.779233,latitude:39.948608},
{longitude:119.743239,latitude:39.944552},
{longitude:119.734736,latitude:39.941318},
{longitude:119.726272,latitude:39.941044},
{longitude:119.721904,latitude:39.934768},
{longitude:119.697842,latitude:39.923622},
{longitude:119.681228,latitude:39.923908},
{longitude:119.676768,latitude:39.932978},
{longitude:119.668878,latitude:39.932441},
{longitude:119.668069,latitude:39.924362},
{longitude:119.662318,latitude:39.920363},
{longitude:119.651937,latitude:39.924039},
{longitude:119.643904,latitude:39.922607},
{longitude:119.640448,latitude:39.924708},
{longitude:119.630197,latitude:39.918287},
{longitude:119.624133,latitude:39.910922},
{longitude:119.612957,latitude:39.898936},
{longitude:119.607636,latitude:39.899259},
{longitude:119.613374,latitude:39.904619},
{longitude:119.608288,latitude:39.903891},
{longitude:119.607805,latitude:39.906207},
{longitude:119.597607,latitude:39.906625},
{longitude:119.590669,latitude:39.910695},
{longitude:119.588896,latitude:39.900154},
{longitude:119.581801,latitude:39.898698},
{longitude:119.579023,latitude:39.906923},
{longitude:119.574602,latitude:39.90413},
{longitude:119.570129,latitude:39.906207},
{longitude:119.546316,latitude:39.892895},
{longitude:119.539834,latitude:39.886352},
{longitude:119.531188,latitude:39.866276},
{longitude:119.528867,latitude:39.854175},
{longitude:119.520351,latitude:39.838165},
{longitude:119.523154,latitude:39.838714},
{longitude:119.529662,latitude:39.837926},
{longitude:119.535296,latitude:39.832704},
{longitude:119.535544,latitude:39.82919},
{longitude:119.535152,latitude:39.825497},
{longitude:119.538895,latitude:39.823274},
{longitude:119.537826,latitude:39.820214},
{longitude:119.539104,latitude:39.813544},
{longitude:119.531005,latitude:39.807854},
{longitude:119.526245,latitude:39.811919},
{longitude:119.523676,latitude:39.815039},
{longitude:119.514404,latitude:39.814262},
{longitude:119.508196,latitude:39.816688},
{longitude:119.493486,latitude:39.812361},
{longitude:119.487356,latitude:39.812827},
{longitude:119.47318,latitude:39.812851},
{longitude:119.464729,latitude:39.809241},
{longitude:119.441412,latitude:39.793519},
{longitude:119.42185,latitude:39.776131},
{longitude:119.396889,latitude:39.761131},
{longitude:119.392911,latitude:39.755197},
{longitude:119.395663,latitude:39.748832},
{longitude:119.391072,latitude:39.739786},
{longitude:119.377079,latitude:39.74042},
{longitude:119.366516,latitude:39.735191},
{longitude:119.358104,latitude:39.721738},
{longitude:119.347684,latitude:39.69261},
{longitude:119.342102,latitude:39.675568},
{longitude:119.324157,latitude:39.630397},
{longitude:119.312746,latitude:39.605883},
{longitude:119.306043,latitude:39.588783},
{longitude:119.287603,latitude:39.482602},
{longitude:119.316437,latitude:39.437162},
{longitude:119.306213,latitude:39.432029},
{longitude:119.294228,latitude:39.426596},
{longitude:119.280404,latitude:39.422882},
{longitude:119.269084,latitude:39.424216},
{longitude:119.257425,latitude:39.429757},
{longitude:119.246053,latitude:39.437666},
{longitude:119.23755,latitude:39.445298},
{longitude:119.224196,latitude:39.451475},
{longitude:119.214402,latitude:39.46218},
{longitude:119.205951,latitude:39.464043},
{longitude:119.191997,latitude:39.461303},
{longitude:119.175669,latitude:39.460859},
{longitude:119.161141,latitude:39.460895},
{longitude:119.144475,latitude:39.464968},
{longitude:119.125356,latitude:39.466722},
{longitude:119.093496,latitude:39.468872},
{longitude:119.080951,latitude:39.475179},
{longitude:119.068209,latitude:39.476068},
{longitude:119.062171,latitude:39.470674},
{longitude:119.054581,latitude:39.459874},
{longitude:119.040744,latitude:39.462048},
{longitude:119.02576,latitude:39.464571},
{longitude:119.016135,latitude:39.46665},
{longitude:119.013149,latitude:39.464667},
{longitude:119.004881,latitude:39.467479},
{longitude:119.007606,latitude:39.476476},
{longitude:119.015627,latitude:39.482098},
{longitude:119.017166,latitude:39.493063},
{longitude:119.012849,latitude:39.495717},
{longitude:119.011962,latitude:39.505299},
{longitude:119.008128,latitude:39.509346},
{longitude:118.989179,latitude:39.510498},
{longitude:118.986323,latitude:39.513692},
{longitude:118.974547,latitude:39.514917},
{longitude:118.970034,latitude:39.511891},
{longitude:118.967896,latitude:39.51715},
{longitude:118.966213,latitude:39.515169},
{longitude:118.960984,latitude:39.518326},
{longitude:118.963866,latitude:39.520787},
{longitude:118.964883,latitude:39.521459},
{longitude:118.964701,latitude:39.522432},
{longitude:118.963735,latitude:39.523452},
{longitude:118.958141,latitude:39.524964},
{longitude:118.965522,latitude:39.526165},
{longitude:118.960645,latitude:39.527917},
{longitude:118.96607,latitude:39.529526},
{longitude:118.983037,latitude:39.53231},
{longitude:118.965666,latitude:39.542344},
{longitude:118.958949,latitude:39.544888},
{longitude:118.948816,latitude:39.54394},
{longitude:118.945452,latitude:39.547984},
{longitude:118.945243,latitude:39.55216},
{longitude:118.944121,latitude:39.558243},
{longitude:118.929046,latitude:39.555051},
{longitude:118.906145,latitude:39.551164},
{longitude:118.895151,latitude:39.547048},
{longitude:118.886766,latitude:39.55096},
{longitude:118.885592,latitude:39.559551},
{longitude:118.88224,latitude:39.566581},
{longitude:118.871651,latitude:39.570024},
{longitude:118.868873,latitude:39.570648},
{longitude:118.865339,latitude:39.574606},
{longitude:118.861218,latitude:39.578804},
{longitude:118.858101,latitude:39.584729},
{longitude:118.857253,latitude:39.586648},
{longitude:118.851333,latitude:39.590234},
{longitude:118.853198,latitude:39.594084},
{longitude:118.851424,latitude:39.59695},
{longitude:118.847407,latitude:39.606986},
{longitude:118.844564,latitude:39.615006},
{longitude:118.85012,latitude:39.622738},
{longitude:118.839322,latitude:39.634604},
{longitude:118.828106,latitude:39.645773},
{longitude:118.827924,latitude:39.652064},
{longitude:118.822224,latitude:39.669004},
{longitude:118.814804,latitude:39.671256},
{longitude:118.810526,latitude:39.674562},
{longitude:118.809261,latitude:39.675843},
{longitude:118.804136,latitude:39.679964},
{longitude:118.803289,latitude:39.689317},
{longitude:118.800602,latitude:39.693807},
{longitude:118.796481,latitude:39.697663},
{longitude:118.793521,latitude:39.707493},
{longitude:118.791669,latitude:39.71944},
{longitude:118.783935,latitude:39.723247},
{longitude:118.781757,latitude:39.7406},
{longitude:118.776697,latitude:39.755975},
{longitude:118.774259,latitude:39.763117},
{longitude:118.781966,latitude:39.767447},
{longitude:118.796585,latitude:39.772052},
{longitude:118.798607,latitude:39.784933},
{longitude:118.799702,latitude:39.79145},
{longitude:118.824246,latitude:39.796544},
{longitude:118.817973,latitude:39.805164},
{longitude:118.815365,latitude:39.811895},
{longitude:118.826137,latitude:39.839658},
{longitude:118.839126,latitude:39.850639},
{longitude:118.839517,latitude:39.863839},
{longitude:118.846012,latitude:39.872403},
{longitude:118.852193,latitude:39.881038},
{longitude:118.853328,latitude:39.890041},
{longitude:118.857253,latitude:39.902339},
{longitude:118.856458,latitude:39.921772},
{longitude:118.86007,latitude:39.934863},
{longitude:118.869695,latitude:39.937977},
{longitude:118.87512,latitude:39.941103},
{longitude:118.882697,latitude:39.957579},
{longitude:118.884014,latitude:39.96569},
{longitude:118.883023,latitude:39.976567},
{longitude:118.882527,latitude:39.987299},
{longitude:118.882423,latitude:39.999138},
{longitude:118.88511,latitude:40.00542},
{longitude:118.879463,latitude:40.013978},
{longitude:118.865613,latitude:40.023798},
{longitude:118.866526,latitude:40.041958},
{longitude:118.866317,latitude:40.061946},
{longitude:118.883519,latitude:40.072236},
{longitude:118.900537,latitude:40.086513},
{longitude:118.913709,latitude:40.087275},
{longitude:118.918261,latitude:40.092192},
{longitude:118.920047,latitude:40.109786},
{longitude:118.92156,latitude:40.127565},
{longitude:118.916591,latitude:40.127291},
{longitude:118.922695,latitude:40.1328},
{longitude:118.924859,latitude:40.142972},
{longitude:118.924768,latitude:40.149669},
{longitude:118.910814,latitude:40.158447},
{longitude:118.906745,latitude:40.169674},
{longitude:118.893039,latitude:40.168651},
{longitude:118.878798,latitude:40.173146},
{longitude:118.867647,latitude:40.180601},
{longitude:118.85994,latitude:40.180958},
{longitude:118.849155,latitude:40.178973},
{longitude:118.833583,latitude:40.184144},
{longitude:118.822146,latitude:40.191087},
{longitude:118.801111,latitude:40.199943},
{longitude:118.790652,latitude:40.206017},
{longitude:118.782462,latitude:40.202653},
{longitude:118.775576,latitude:40.194178},
{longitude:118.753745,latitude:40.1906},
{longitude:118.743586,latitude:40.191765},
{longitude:118.746024,latitude:40.204186},
{longitude:118.743755,latitude:40.210878},
{longitude:118.734704,latitude:40.210711},
{longitude:118.730622,latitude:40.209131},
{longitude:118.727336,latitude:40.211412},
{longitude:118.720946,latitude:40.216891},
{longitude:118.712104,latitude:40.216843},
{longitude:118.70334,latitude:40.220028},
{longitude:118.68803,latitude:40.228951},
{longitude:118.680896,latitude:40.233003},
{longitude:118.673997,latitude:40.235759},
{longitude:118.665638,latitude:40.242566},
{longitude:118.618572,latitude:40.253422},
{longitude:118.585408,latitude:40.264799},
{longitude:118.57384,latitude:40.267352},
{longitude:118.569093,latitude:40.274263},
{longitude:118.568937,latitude:40.287548},
{longitude:118.580126,latitude:40.30585},
{longitude:118.585369,latitude:40.309434},
{longitude:118.59871,latitude:40.309968},
{longitude:118.605048,latitude:40.324444},
{longitude:118.616081,latitude:40.331752},
{longitude:118.640168,latitude:40.354549},
{longitude:118.645254,latitude:40.369941},
{longitude:118.641368,latitude:40.386075},
{longitude:118.62641,latitude:40.408261},
{longitude:118.618376,latitude:40.425204},
{longitude:118.620997,latitude:40.434503},
{longitude:118.629813,latitude:40.441539},
{longitude:118.652427,latitude:40.448159},
{longitude:118.661073,latitude:40.448313},
{longitude:118.666172,latitude:40.452328},
{longitude:118.670567,latitude:40.45839},
{longitude:118.67058,latitude:40.465128},
{longitude:118.676462,latitude:40.467803},
{longitude:118.67851,latitude:40.471272},
{longitude:118.68177,latitude:40.47667},
{longitude:118.685343,latitude:40.479322},
{longitude:118.69116,latitude:40.48382},
{longitude:118.699284,latitude:40.491028},
{longitude:118.704579,latitude:40.489607},
{longitude:118.712756,latitude:40.482707},
{longitude:118.72212,latitude:40.474184},
{longitude:118.736282,latitude:40.475877},
{longitude:118.742099,latitude:40.474705},
{longitude:118.753067,latitude:40.476481},
{longitude:118.755453,latitude:40.48002},
{longitude:118.766616,latitude:40.479748},
{longitude:118.772955,latitude:40.479736},
{longitude:118.782605,latitude:40.487051},
{longitude:118.792125,latitude:40.492412},
{longitude:118.792386,latitude:40.500933},
{longitude:118.798946,latitude:40.512197},
{longitude:118.802806,latitude:40.518373},
{longitude:118.811739,latitude:40.522833},
{longitude:118.821325,latitude:40.531965},
{longitude:118.834835,latitude:40.530853},
{longitude:118.838748,latitude:40.527718},
{longitude:118.85042,latitude:40.526701},
{longitude:118.863904,latitude:40.527162},
{longitude:118.869656,latitude:40.532485},
{longitude:118.883362,latitude:40.538954},
{longitude:118.891161,latitude:40.540208},
{longitude:118.899272,latitude:40.53996},
{longitude:118.906432,latitude:40.536695},
{longitude:118.913618,latitude:40.532875},
{longitude:118.91903,latitude:40.530947},
{longitude:118.928589,latitude:40.532047},
{longitude:118.942074,latitude:40.535146},
{longitude:118.952285,latitude:40.531657},
{longitude:118.959015,latitude:40.531326},
{longitude:118.964766,latitude:40.534235},
{longitude:118.963318,latitude:40.541911},
{longitude:118.962131,latitude:40.544974},
{longitude:118.959367,latitude:40.549929},
{longitude:118.962053,latitude:40.553322},
{longitude:118.955845,latitude:40.556491},
{longitude:118.952011,latitude:40.558004},
{longitude:118.960488,latitude:40.558903},
{longitude:118.971013,latitude:40.562001},
{longitude:118.97649,latitude:40.56206},
{longitude:118.983089,latitude:40.563419},
{longitude:118.985397,latitude:40.572947},
{longitude:118.99836,latitude:40.578928},
{longitude:119.009758,latitude:40.578042},
{longitude:119.014479,latitude:40.579318},
{longitude:119.020556,latitude:40.58394},
{longitude:119.027299,latitude:40.589849},
{longitude:119.035345,latitude:40.589423},
{longitude:119.040992,latitude:40.593429},
{longitude:119.047082,latitude:40.597447},
{longitude:119.055559,latitude:40.601453},
{longitude:119.063423,latitude:40.606167},
{longitude:119.070491,latitude:40.605493},
{longitude:119.073178,latitude:40.598499},
{longitude:119.079073,latitude:40.594174},
{longitude:119.081185,latitude:40.589778},
{longitude:119.093209,latitude:40.593311},
{longitude:119.099821,latitude:40.594658},
{longitude:119.103447,latitude:40.599633},
{longitude:119.11058,latitude:40.604028},
{longitude:119.121261,latitude:40.60612},
{longitude:119.126113,latitude:40.604052},
{longitude:119.134941,latitude:40.605493},
{longitude:119.143157,latitude:40.610337},
{longitude:119.149743,latitude:40.614602},
{longitude:119.157672,latitude:40.604016},
{longitude:119.167988,latitude:40.601819},
{longitude:119.178199,latitude:40.609333},
{longitude:119.185424,latitude:40.609841},
{longitude:119.201087,latitude:40.60417},
{longitude:119.211898,latitude:40.604123},
{longitude:119.222162,latitude:40.605233},
{longitude:119.230808,latitude:40.603863},
{longitude:119.23592,latitude:40.597104},
{longitude:119.2288,latitude:40.585381},
{longitude:119.219801,latitude:40.578515},
{longitude:119.220597,latitude:40.569117},
{longitude:119.227561,latitude:40.563455},
{longitude:119.248818,latitude:40.548048},
{longitude:119.269723,latitude:40.53815},
{longitude:119.294423,latitude:40.532071},
{longitude:119.313594,latitude:40.530013},
{longitude:119.334421,latitude:40.5309},
{longitude:119.345976,latitude:40.533372},
{longitude:119.361808,latitude:40.537346},
{longitude:119.381148,latitude:40.538931},
{longitude:119.396928,latitude:40.535335},
{longitude:119.414142,latitude:40.53718},
{longitude:119.429296,latitude:40.540208},
{longitude:119.46053,latitude:40.534981},
{longitude:119.484748,latitude:40.534046},
{longitude:119.490186,latitude:40.537736},
{longitude:119.492886,latitude:40.541674},
{longitude:119.499458,latitude:40.549054},
{longitude:119.503906,latitude:40.553961},
{longitude:119.506162,latitude:40.551395},
{longitude:119.510452,latitude:40.550532},
{longitude:119.517234,latitude:40.549385},
{longitude:119.528345,latitude:40.549385},
{longitude:119.537135,latitude:40.552518},
{longitude:119.543003,latitude:40.550603},
{longitude:119.559044,latitude:40.547847},
{longitude:119.571003,latitude:40.540858},
{longitude:119.573611,latitude:40.532781},
{longitude:119.568838,latitude:40.520786},
{longitude:119.555458,latitude:40.516835},
{longitude:119.550906,latitude:40.509417},
{longitude:119.562917,latitude:40.496259},
{longitude:119.571759,latitude:40.488211},
{longitude:119.581775,latitude:40.472361},
{longitude:119.590721,latitude:40.471426},
{longitude:119.59852,latitude:40.465258},
{longitude:119.604036,latitude:40.449308},
{longitude:119.594816,latitude:40.43859},
{longitude:119.595286,latitude:40.429884},
{longitude:119.596473,latitude:40.423439},
{longitude:119.597099,latitude:40.417705},
{longitude:119.600385,latitude:40.411437},
{longitude:119.595012,latitude:40.399468},
{longitude:119.589887,latitude:40.386561},
{longitude:119.586652,latitude:40.375454},
{longitude:119.590447,latitude:40.367332},
{longitude:119.599798,latitude:40.356553},
{longitude:119.596759,latitude:40.343128},
{longitude:119.598116,latitude:40.334172},
{longitude:119.610792,latitude:40.323993},


			],
				// fillColor: "#4F94CD33",
		    // fillColor: "#d2f1f0",
				strokeColor: "#FFF",
				strokeWidth: 2,
				zIndex: 1
	}]	,
		location: {
			latitude: 39.841761,
			longitude: 119.516626,
		},
		scale: 8,
		isOverLooking: false,
		place: 'beidaihe',
		is3D: true,
		isShowScale: true,
		isShowCompass: true,
		minScale: 3,
		maxScale: 20,
  
  },

  onLoad: function() {
    const titles = ['鸟类生境', '鸟类保护', '观鸟指南']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})
    
  },
  onShow(){
    this.getTabBar().setData({
      selected: 0
    })
	},
		// 标注点击回调
		onTapMarker (event) {
			const mapCtx = wx.createMapContext('map', this);
			console.log(event.detail.markerId)
			if (event.detail.markerId === 0) {
				mapCtx.moveToLocation({
					latitude: 39.841761,
					longitude: 119.516626,
					success: () => {
						this.setData({
							place: 'beidaihe',
							location: {
								latitude: 39.841761,
								longitude: 119.516626,
							},
							scale: 14,
						});
					},
					fail: () => {
						this.setData({
							place: 'beidaihe',
							location: {
								latitude: 39.841761,
								longitude: 119.516626,
							},
							scale: 14,
						});
					}
				});
			}
			if (event.detail.markerId === 1) {
				mapCtx.moveToLocation({
					latitude: 39.583907,
					longitude: 119.273761,
					success: () => {
						this.setData({
							place: 'changli',
							location: {
								latitude: 39.583907,
								longitude: 119.273761,
							},
							scale: 13,
						});
					},
					fail: () => {
						this.setData({
							place: 'changli',
							location: {
								latitude: 39.583907,
								longitude: 119.273761,
							},
							scale: 13,
						});
					}
				});
			}
			if (event.detail.markerId === 2) {
				mapCtx.moveToLocation({
					latitude: 39.96,
					longitude: 119.783,
					success: () => {
						this.setData({
							place: 'shanhaiguan',
							location: {
								latitude: 39.96,
								longitude: 119.783,
							},
							scale: 14,
						});
					},
					fail: () => {
						this.setData({
							place: 'shanhaiguan',
							location: {
								latitude: 39.96,
								longitude: 119.783,
							},
							scale: 14,
						});
					}
				});
			}
			
		},
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },

  directToTimeline: function(){
    wx.navigateTo({
      url: '../reserve/timeline/timeline',
    })
	},
	directToRegulations: function(){
    wx.navigateTo({
      url: '../regulations/regulations',
    })
  },
  onChangeView () {
    this.setData({
			location: {
				latitude: 39.841761,
				longitude: 119.516626,
			},
			scale: 8,
		});

	},
	CopyLink(e) {
		wx.setClipboardData({
			data: e.currentTarget.dataset.link,
			success: res => {
				wx.showToast({
					title: '已复制',
					duration: 1000,
				})
			}
		})
	},
})