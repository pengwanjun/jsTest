
//video下所有数据
var mjc = [{
		name: 'Effect',
		value: ['Middle', 'High', 'Off', 'Low'],
		curVal: 'Middle',
		valType: 'sel'
	},
	{
		name: 'Demo Partition',
		value: ['All', 'Right', 'Left'],
		curVal: 'All',
		valType: 'sel'
	},
	{
		name: 'Demo',
		value: 'MJC Demo',
		valType: 'str'
	}
];

var colorTemperature = [{
		name: 'Color Temperature',
		value: ['User', 'Cool', 'Standard', 'Warm'],
		curVal: 'User',
		valType: 'sel'
	},
	{
		name: 'R Gain',
		value: 0,
		valType: 'num'
	},
	{
		name: 'G Gain',
		value: 0,
		valType: 'num'
	},
	{
		name: 'B Gain',
		value: 0,
		valType: 'num'
	}
];
var advancedVideo = [{
		name: 'DNR',
		value: ['Medium', 'strong', 'Auto', 'Off', 'Low'],
		curVal: 'Medium',
		valType: 'sel'
	},
	{
		name: 'MPEG NR',
		value: ['Medium', 'strong', 'Off', 'Low'],
		curVal: 'Medium',
		valType: 'sel'
	},
	{
		name: 'Adaptive Luma Control',
		value: ['Medium', 'strong', 'Off', 'Low'],
		curVal: 'Medium',
		valType: 'sel'
	},
	{
		name: 'Flesh Tone',
		value: ['Medium', 'High', 'Off', 'Low'],
		curVal: 'Medium',
		valType: 'sel'
	},
	{
		name: 'Dl Film Mode',
		value: ['Auto', 'Off'],
		curVal: 'Auto',
		valType: 'sel'
	},
	{
		name: 'Blue stretch',
		value: ['Off', 'On'],
		curVal: 'Off',
		valType: 'sel'
	},
	{
		name: 'Game Mode',
		value: ['Off', 'On'],
		curVal: 'Off',
		canOpera: false,
		valType: 'sel'
	},
	{
		name: 'MJC',
		value: mjc,
		valType: 'list'
	},
	{
		name: 'Black Bar Detection',
		value: ['Off', 'On'],
		curVal: 'Off',
		valType: 'sel'
	},
	{
		name: 'Super Resolution',
		value: ['On', 'Off'],
		curVal: 'On',
		valType: 'sel'
	}
];
var video = [{
		name: 'Picture Mode',
		value: ['User', 'Cinema', 'Sport', 'Vivid', 'Hi-Bright'],
		curVal: 'User',
		valType: 'sel'
	},
	{
		name: 'Back Light',
		value: 50,
		valType: 'num'
	},
	{
		name: 'Brightness',
		value: 50,
		valType: 'num'
	},
	{
		name: 'Contrast',
		value: 80,
		valType: 'num'
	},
	{
		name: 'Saturation',
		value: 60,
		valType: 'num'
	},
	{
		name: 'HUE',
		value: 0,
		valType: 'num'
	},
	{
		name: 'Sharpness',
		value: 12,
		valType: 'num'
	},
	{
		name: 'Blue Light',
		value: 0,
		valType: 'num'
	},
	{
		name: 'Dolby Vision Notification',
		value: ['Off', 'On'],
		curVal: 'Off',
		valType: 'sel'
	},
	{
		name: 'Gamma',
		value: ['Middle', 'Bright', 'Dark'],
		curVal: 'Middle',
		valType: 'sel'
	},
	{
		name: 'HDR',
		value: ['Auto', 'Off'],
		curVal: 'Auto',
		valType: 'sel'
	},
	{
		name: 'Color Temperature',
		value: colorTemperature,
		valType: 'list'
	},
	{
		name: 'Advanced Video',
		value: advancedVideo,
		valType: 'list'
	}
];

//audio下所有数据

var dolbyAudioProcessing=[
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

var Advanced=[
	{
		name:'Dolby Audio Processing',
		value:dolbyAudioProcessing,
		valType: 'str'
	}
];

var audio=[
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
		value:Advanced,
		valType: 'list'
	}
];


//tv下所有数据（数据未完成）

var Channels=[
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

var tv=[
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
		value:Channels,
		valType: 'list'
	}
];


//setup下所有数据（数据未完成）
var setup=[
	{
		name:'OSD Language',
		value:['English','Vasco','Catalan','Hrvatski'],
		valType: 'sel'
	}
];


//parental下所有数据
var parental=[
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
		value: video,
		valType: 'list'
	}, 
	{
		name: 'Audio',
		value: audio,
		valType: 'list'
	},
	{
		name:'TV',
		value: tv,
		valType: 'list'
	},
	{
		name:'Setup',
		value: setup,
		valType: 'list'
	},
	{
		name:'Parental',
		value:parental,
		valType: 'list'
	}
];