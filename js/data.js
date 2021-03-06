
//video下所有数据
var gMenuVideoMjc = [{
		name: 'Effect',
		value: ['Middle', 'High', 'Off', 'Low'],
		curVal: 'Middle',
		valType: 'sel',
		opera: true
	},
	{
		name: 'Demo Partition',
		value: ['All', 'Right', 'Left'],
		curVal: 'All',
		valType: 'sel',
		opera: false
	},
	{
		name: 'Demo',
		value: 'MJC Demo',
		valType: 'str',
		opera: false
	}
];

var gMenuVideoCt = [{
		name: 'Color Temperature',
		value: ['User', 'Cool', 'Standard', 'Warm'],
		curVal: 'User',
		valType: 'sel',
		opera: false,
		callback(){
			
		},
		params(){
			
		}
	},
	{
		name: 'R Gain',
		value: 0,
		valType: 'num',
		opera: true
	},
	{
		name: 'G Gain',
		value: 0,
		valType: 'num',
		opera: false
	},
	{
		name: 'B Gain',
		value: 0,
		valType: 'num',
		opera: false
	}
];
var gMenuVideoAv = [{
		name: 'DNR',
		value: ['Medium', 'strong', 'Auto', 'Off', 'Low'],
		curVal: 'Medium',
		valType: 'sel',
		opera: false
	},
	{
		name: 'MPEG NR',
		value: ['Medium', 'strong', 'Off', 'Low'],
		curVal: 'Medium',
		valType: 'sel',
		opera: true
	},
	{
		name: 'Adaptive Luma Control',
		value: ['Medium', 'strong', 'Off', 'Low'],
		curVal: 'Medium',
		valType: 'sel',
		opera: true
	},
	{
		name: 'Flesh Tone',
		value: ['Medium', 'High', 'Off', 'Low'],
		curVal: 'Medium',
		valType: 'sel',
		opera: true
	},
	{
		name: 'Dl Film Mode',
		value: ['Auto', 'Off'],
		curVal: 'Auto',
		valType: 'sel',
		opera: false
	},
	{
		name: 'Blue stretch',
		value: ['Off', 'On'],
		curVal: 'Off',
		valType: 'sel',
		opera: false
	},
	{
		name: 'Game Mode',
		value: ['Off', 'On'],
		curVal: 'Off',
		valType: 'sel',
		opera: true
	},
	{
		name: 'MJC',
		value: gMenuVideoMjc,
		valType: 'list',
		opera: true
	},
	{
		name: 'Black Bar Detection',
		value: ['Off', 'On'],
		curVal: 'Off',
		valType: 'sel',
		opera: false
	},
	{
		name: 'Super Resolution',
		value: ['On', 'Off'],
		curVal: 'On',
		valType: 'sel',
		opera: true
	}
];
var gMenuVideo = [{
		name: 'Picture Mode',
		value: ['User', 'Cinema', 'Sport', 'Vivid', 'Hi-Bright'],
		curVal: 'User',
		valType: 'sel',
		opera: true
	},
	{
		name: 'Back Light',
		value: 50,
		valType: 'num',
		opera: true
	},
	{
		name: 'Brightness',
		value: 50,
		valType: 'num',
		opera: true
	},
	{
		name: 'Contrast',
		value: 80,
		valType: 'num',
		opera: true
	},
	{
		name: 'Saturation',
		value: 60,
		valType: 'num',
		opera: true
	},
	{
		name: 'HUE',
		value: 0,
		valType: 'num',
		opera: true
	},
	{
		name: 'Sharpness',
		value: 12,
		valType: 'num',
		opera: true
	},
	{
		name: 'Blue Light',
		value: 0,
		valType: 'num',
		opera: true
	},
	{
		name: 'Dolby Vision Notification',
		value: ['Off', 'On'],
		curVal: 'Off',
		valType: 'sel',
		opera: true
	},
	{
		name: 'Gamma',
		value: ['Middle', 'Bright', 'Dark'],
		curVal: 'Middle',
		valType: 'sel',
		opera: true
	},
	{
		name: 'HDR',
		value: ['Auto', 'Off'],
		curVal: 'Auto',
		valType: 'sel',
		opera: true
	},
	{
		name: 'Color Temperature',
		value: gMenuVideoCt,
		valType: 'list',
		opera: true
	},
	{
		name: 'Advanced Video',
		value: gMenuVideoAv,
		valType: 'list',
		opera: true
	}
];

//audio下所有数据

var gMenuAudioDol=[
	{
		name:'Dolby Audio Processing',
		value:['On','Off'],
		curVal:'On',
		valType: 'sel'
	},
	{
		name:'Sound Mode',
		value:['Off','Auto','Movie','Game','News','Night','VolP'],
		curVal:'Off',
		valType: 'sel'
	},
	{
		name:'Volume Leveler',
		value:['Off','On'],
		curVal:'Off',
		valType: 'sel'
	},
	{
		name:'Dialogue Enhancement',
		value:['Off','Low','Medium','High'],
		curVal:'Off',
		valType: 'sel'
	},
	{
		name:'Speaker Virtualizer',
		value:['Off','On','Auto'],
		curVal:'Off',
		valType: 'sel'
	}
];

var gMenuAudioAdvanced=[
	{
		name:'Dolby Audio Processing',
		value:gMenuAudioDol,
		valType: 'str'
	}
];

var gMenuAudio=[
	{
		name:'Speaker',
		value:['On','Off'],
		curVal:'On',
		valType: 'sel'
	},
	{
		name:'SPDIF Type',
		value:['PCM','Dolby Digital','Dolby Digital Plus','Off'],
		curVal:'PCM',
		valType: 'sel'
	},
	{
		name:'SPDIF Delay',
		value:140,
		valType: 'num'		
	},
	{
		name:'Type',
		value:['Normal','Hearing Impaired','Visually Impaired'],
		curVal:'Normal',
		valType: 'sel'
	},
	{
		name:'Visually Impaired',
		value:[]
	},
	{
		name:'Downmix Mode',
		value:['Surround','Stereo','Auto Stereo'],
		curVal:'Surround',
		valType: 'sel'
	},
	{
		name:'Soundtracks',
		value:[]
	},
	{
		name:'Advanced',
		value:gMenuAudioAdvanced,
		valType: 'list'
	}
];


//tv下所有数据（数据未完成）

var gMenuTvChannels=[
	{
		name:'Channel Scan',
		value:[]
	},
	{
		name:'Update Scan',
		value:[]
	},
	{
		name:'Analog Manual Scan',
		value:[]
	},
	{
		name:'Single RF Scan',
		value:[]
	},
	{
		name:'Favorite Network select',
		value:[]
	},
	{
		name:'Channel Skip',
		value:[]
	},
	{
		name:'Channel Sort',
		value:[]
	},
	{
		name:'CHannel Edit',
		value:[]
	},
	{
		name:'Analog Channel Fine Tune',
		value:[]
	}
];

var gMenuTv=[
	{
		name:'Tuner Mode',
		value:['Antenna','Cable','Satellite'],
		curVal:'Antenna',
		valType: 'sel'
	},
	{
		name:'Audio Channel',
		value:['Stereo','Dual1','Dual2','Mono'],
		curVal:'Stereo',
		valType: 'sel'
	},
	{
		name:'Channels',
		value: gMenuTvChannels,
		valType: 'list'
	}
];


//setup下所有数据（数据未完成）
var gMenuSetup=[
	{
		name:'OSD Language',
		value:['English','Vasco','Catalan','Hrvatski'],
		valType: 'sel'
	}
];


//parental下所有数据
var gMenuParental=[
	{
		name:'Password',
		value:'password',
		valType: 'str'
	}
];


//主目录menu
var Menu = [
	{
		name: 'Video',
		value: gMenuVideo,
		valType: 'list',
		opera: true
	}, 
	{
		name: 'Audio',
		value: gMenuAudio,
		valType: 'list',
		opera: true
	},
	{
		name:'TV',
		value: gMenuTv,
		valType: 'list',
		opera: true
	},
	{
		name:'Setup',
		value: gMenuSetup,
		valType: 'list',
		opera: true
	},
	{
		name:'Parental',
		value: gMenuParental,
		valType: 'list',
		opera: true
	}
];