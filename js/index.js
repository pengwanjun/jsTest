window.onload = function() {

	//页面加载渲染数据
	var parent = Menu;
	var child = Menu[0].value;
	render(parent, child, 'firstList', 0);

	var stage = 7;
	var itemHeight = document.querySelector(".listItem.focus").offsetHeight;
	document.querySelector('#container').style.height = Number(itemHeight) * stage + 'px';

	var navList = [];

	document.onkeyup = function(e) {
		var curItem = document.querySelector(".listItem.focus");
		var className = curItem.parentElement.getAttribute('class');
		var parentList = curItem.parentElement.children;
		var curIndex = [].indexOf.call(parentList, curItem);
		//下键
		if(e.keyCode == 40) {
			if(curIndex == parentList.length - 1) {
				if(className == 'firstList') {
					var oIndex = canOpera1(parent);
					changePage(0, className);
					child = parent[oIndex].value;
					render(parent, child, className, oIndex);
				} else {
					if(Object.prototype.toString.call(child) == '[object Array]') {
						changePage(0,'secondList');
					}
					removeClass(parentList[parentList.length - 1], 'focus');
					addClass(parentList[0], 'focus');
				}
			} else {
				if(className == 'firstList') {
					var oIndex = canOpera2(parent, curIndex + 1);
					changePage(oIndex, className);
//					var floorIndex = Math.floor(oIndex / stage);
					document.querySelector(".secondList").style.top = '0px';
					child = parent[oIndex].value;
					render(parent, child, className, oIndex);
				} else {
					if(Object.prototype.toString.call(child) == '[object Array]') {
						changePage((curIndex + 1), 'secondList');
//						var floorIndex = Math.floor((curIndex + 1) / stage);
//						document.querySelector(".secondList").style.top = -(floorIndex * stage * Number(itemHeight)) + 'px';
					}
					removeClass(parentList[curIndex], 'focus');
					addClass(parentList[curIndex + 1], 'focus');
				}
			}
		}
		//上键
		if(e.keyCode == 38) {
			if(curIndex == 0) {
				if(className == 'firstList') {
					var oIndex = canOpera3(parent);
					changePage(oIndex,className);
//					var floorIndex = Math.floor(oIndex / stage);
//					document.querySelector(".firstList").style.top = -(floorIndex * stage * Number(itemHeight)) + 'px';
					child = parent[oIndex].value;
					render(parent, child, className, oIndex);
				} else {
					if(Object.prototype.toString.call(child) == '[object Array]') {
						changePage((parentList.length - 1),className);
//						var floorIndex = Math.floor((parentList.length - 1) / stage);
//						document.querySelector(".secondList").style.top = -(floorIndex * stage * Number(itemHeight)) + 'px';
					}
					removeClass(parentList[0], 'focus');
					addClass(parentList[parentList.length - 1], 'focus');
				}
			} else {
				if(className == 'firstList') {
					var oIndex = canOpera4(parent, curIndex - 1);
					changePage(oIndex,className);
//					var floorIndex = Math.floor(oIndex / stage);
//					document.querySelector(".firstList").style.top = -(floorIndex * stage * Number(itemHeight)) + 'px';
					child = parent[oIndex].value;
					render(parent, child, className, oIndex);
				} else {
					if(Object.prototype.toString.call(child) == '[object Array]') {
						changePage((curIndex - 1),className);
//						var floorIndex = Math.floor((curIndex - 1) / stage);
//						document.querySelector(".secondList").style.top = -(floorIndex * stage * Number(itemHeight)) + 'px';
					}
					removeClass(parentList[curIndex], 'focus');
					addClass(parentList[curIndex - 1], 'focus');
				}
			}
		}
		//右键
		if(e.keyCode == 39) {
			if(className == 'firstList') {
				var obj = {
					arr: parent,
					mark: curIndex
				}
				navList.push(obj);
				if(parent[curIndex].valType == 'list') {
					parent = child;
					var oIndex = canOpera1(parent);
					changePage(oIndex,className);
//					document.querySelector(".firstList").style.top = '0px';
					child = parent[oIndex].value;
					render(parent, child, className, oIndex);
				} else if(parent[curIndex].valType == 'sel') {
					for(var i = 0; i < child.length; i++) {
						if(parent[curIndex].curVal == child[i]) {
							oIndex = i;
							break;
						}
					}
					var nextList = curItem.parentElement.nextElementSibling.children;
					removeClass(parentList[curIndex], 'focus');
					addClass(nextList[oIndex], 'focus');
				} else {
					var nextList = curItem.parentElement.nextElementSibling.children;
					removeClass(parentList[curIndex], 'focus');
					addClass(nextList[0], 'focus');
				}
			} else if(typeof child == 'number') {
				//第二列---右键---数值增大
				console.log('增加');
			}
		}
		//左键
		if(e.keyCode == 37) {
			if(className == 'firstList') {
				if(navList.length != 0) {
					parent = navList[navList.length - 1].arr;
					child = parent[navList[navList.length - 1].mark].value;
					changePage(navList[navList.length - 1].mark,className);
//					var floorIndex = Math.floor(navList[navList.length - 1].mark / stage);
//					document.querySelector(".firstList").style.top = -(floorIndex * stage * Number(itemHeight)) + 'px';
					render(parent, child, className, navList[navList.length - 1].mark);
					navList.pop();
				}
			} else {
				if(typeof child == 'number') {
					//第二列---左键---数值减小
					console.log('减小');
				} else {
					className = 'firstList';
					parent = navList[navList.length - 1].arr;
					render(parent, child, className, navList[navList.length - 1].mark);
					navList.pop();
				}
			}
		}
	}

	//列表分页效果
	function changePage(index, classname) {
		var floorIndex = Math.floor(index / stage);
		document.querySelector('.'+classname+'').style.top = -(floorIndex * stage * Number(itemHeight)) + 'px';
	}

	//渲染数据
	function render(parent, child, className, index) {
		var firstList = document.querySelector('.firstList');
		var html1 = '';
		for(var i = 0; i < parent.length; i++) {
			if(className == 'firstList' && i == index) {
				html1 += '<div class="listItem focus">' + parent[i].name + '</div>';
			} else {
				if(parent[i].opera) {
					html1 += '<div class="listItem">' + parent[i].name + '</div>';
				} else {
					html1 += '<div class="listItem disabled">' + parent[i].name + '</div>';
				}
			}
		}
		firstList.innerHTML = html1;

		var secondList = document.querySelector('.secondList');
		var html2 = '';
		var type = parent[index].valType;
		if(type == 'list') {
			for(var j = 0; j < child.length; j++) {
				if(className == 'secondList' && j == index) {
					html2 += '<div class="listItem focus">' + child[j].name + '<span>>></span></div>';
				} else {
					if(child[j].opera) {
						html2 += '<div class="listItem">' + child[j].name + '<span>>></span></div>';
					} else {
						html2 += '<div class="listItem disabled">' + child[j].name + '<span>>></span></div>';
					}
				}
			}
		} else if(type == 'sel') {
			for(var j = 0; j < child.length; j++) {
				if(className == 'secondList' && j == index) {
					html2 += '<div class="listItem focus"><span>请选择：</span>' + child[j] + '</div>';
				} else {
					html2 += '<div class="listItem"><span>请选择：</span>' + child[j] + '</div>';
				}
			}
		} else if(type == 'str') {
			if(className == 'secondList') {
				html2 += '<div class="listItem focus"><span>str值为：</span>' + child + '</div>';
			} else {
				html2 += '<div class="listItem"><span>str值为：</span>' + child + '</div>';
			}
		} else { //valType为num
			if(className == 'secondList') {
				html2 += '<div class="listItem focus"><span>num值为：</span>' + child + '</div>';
			} else {
				html2 += '<div class="listItem"><span>num值为：</span>' + child + '</div>';
			}
		}
		secondList.innerHTML = html2;
	}

	//返回列表中第一个可以操作的下标-----上键
	function canOpera4(parent, index) {
		var thisIndex;
		for(var i = index; i >= 0; i--) {
			if(parent[i].opera) {
				thisIndex = i;
				break;
			}
		}
		if(typeof(thisIndex) == 'undefined') {
			return canOpera3(parent);
		} else {
			return thisIndex;
		}
	}

	//返回列表中第一个可以操作的下标-----上键
	function canOpera3(parent) {
		for(var i = parent.length - 1; i >= 0; i--) {
			if(parent[i].opera) {
				return i;
				break;
			}
		}
	}

	//返回列表中第一个可以操作的下标-----下键
	function canOpera2(parent, index) {
		var thisIndex;
		for(var i = index; i < parent.length; i++) {
			if(parent[i].opera) {
				thisIndex = i;
				break;
			}
		}
		if(typeof(thisIndex) == 'undefined') {
			return canOpera1(parent);
		} else {
			return thisIndex;
		}
	}

	//返回列表中第一个可以操作的下标-----下键
	function canOpera1(parent) {
		for(var i = 0; i < parent.length; i++) {
			if(parent[i].opera) {
				return i;
				break;
			}
		}
	}

	//判断dom元素是否有某个class值
	function hasClass(ele, cls) {
		return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
	}
	//为指定的dom元素添加样式
	function addClass(ele, cls) {
		if(!hasClass(ele, cls)) ele.className += " " + cls;
	}
	//删除指定dom元素的样式
	function removeClass(ele, cls) {
		if(hasClass(ele, cls)) {
			var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
			ele.className = ele.className.replace(reg, " ");
		}
	}
	//如果存在(不存在)，就删除(添加)一个样式
	function toggleClass(ele, cls) {
		if(hasClass(ele, cls)) {
			removeClass(ele, cls);
		} else {
			addClass(ele, cls);
		}
	}

}