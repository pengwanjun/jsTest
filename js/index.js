window.onload = function() {

	//页面加载渲染数据
	var parent = Menu;
	var child = Menu[0].value;
	render(parent, child, 'firstList', 0);

	var navList = [];

	document.onkeydown = function(e) {
		var curItem = document.querySelector(".listItem.focus");
		var className = curItem.parentElement.getAttribute('class');
		var parentList = curItem.parentElement.children;
		var curIndex = [].indexOf.call(parentList, curItem);
		//下键
		if(e.keyCode == 40) {
			if(curIndex == parentList.length - 1) {
				if(className == 'firstList') {
					child = parent[0].value;
					render(parent, child, className, 0);
				} else {
					removeClass(parentList[parentList.length - 1], 'focus');
					addClass(parentList[0], 'focus');
				}
			} else {
				if(className == 'firstList') {
					child = parent[curIndex + 1].value;
					render(parent, child, className, curIndex + 1);
				} else {
					removeClass(parentList[curIndex], 'focus');
					addClass(parentList[curIndex + 1], 'focus');
				}
			}
		}
		//上键
		if(e.keyCode == 38) {
			if(curIndex == 0) {
				if(className == 'firstList') {
					child = parent[parent.length - 1].value;
					render(parent, child, className, parent.length - 1);
				} else {
					removeClass(parentList[0], 'focus');
					addClass(parentList[parentList.length - 1], 'focus');
				}
			} else {
				if(className == 'firstList') {
					child = parent[curIndex - 1].value;
					render(parent, child, className, curIndex - 1);
				} else {
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
					child = parent[0].value;
					render(parent, child, className, 0);
				} else if(parent[curIndex].valType=='sel'){
					className = 'secondList';
					render(parent, child, className, 0);
				}else {
					className = 'secondList';
					render(parent, child, className, curIndex);
				}
			} else {
				//第二列---没有下一级列表，根据valType判断是加减数字还是选择列表项
			}
		}
		//左键
		if(e.keyCode == 37) {
			if(className == 'firstList') {
				if(navList.length != 0) {
					parent = navList[navList.length - 1].arr;
					child = parent[navList[navList.length - 1].mark].value;
					render(parent, child, className, navList[navList.length - 1].mark);
					navList.pop();
				}
			} else {
				className='firstList';
				parent = navList[navList.length - 1].arr;
				render(parent, child, className, navList[navList.length - 1].mark);
				navList.pop();
			}
		}
	}
}

//渲染数据
function render(parent, child, className, index) {
	var firstList = document.querySelector('.firstList');
	var html1 = '';
	for(var i = 0; i < parent.length; i++) {
		if(className == 'firstList' && i == index) {
			html1 += '<div class="listItem focus">' + parent[i].name + '</div>';
		} else {
			html1 += '<div class="listItem">' + parent[i].name + '</div>';
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
				html2 += '<div class="listItem">' + child[j].name + '<span>>></span></div>';
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