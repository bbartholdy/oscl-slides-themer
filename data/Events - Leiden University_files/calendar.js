(function(g){var a=g(".datepicker");if(a.length&&"undefined"!==typeof g.datepicker){var l=function(c){return[c.getFullYear(),("0"+(c.getMonth()+1)).slice(-2),("0"+c.getDate()).slice(-2)].join("-")},d=new Date,p=["pageNumber","ckcachecontrol"];location.get={};if(location.search){var m=location.search.substring(1).split("\x26"),n;for(n in m){var e=m[n].split("\x3d"),f=e[0],e=e[1]||null;switch(typeof location.get[f]){case "string":case "number":location.get[f]=[location.get[f],e];break;case "array":case "object":location.get[f].push(e);
break;default:location.get[f]=e}}}location.set=function(){var c=[],b;for(b in this.get)if(-1==p.indexOf(b)){var a=this.get[b];switch(typeof a){case "array":case "object":for(var d in a)c.push(b+"\x3d"+a[d]);break;default:c.push(b+"\x3d"+a)}}c.length&&(this.search="?"+c.join("\x26"))};var h=function(){var c=location.get.year?parseInt(location.get.year):d.getFullYear(),b=location.get.month?parseInt(location.get.month)-1:d.getMonth(),a=location.get.day?parseInt(location.get.day):null;a||(a=c===d.getFullYear()&&
b===d.getMonth()?d.getDate():1);return new Date(c,b,a)}(),k={onSelect:function(a,b){location.get.year=b.selectedYear;location.get.month=b.selectedMonth+1;location.get.day=b.selectedDay;location.set()},onChangeMonthYear:function(a,b){location.get.year=a;location.get.month=b;location.get.day=null;location.set()},defaultDate:h,firstDay:1,showOtherMonths:!0},k=g.extend(k,UL2.Locale.datepicker());a.empty();a.datepicker(k);a.find(".ui-datepicker-title").on("click",function(){if(!a.find("table").is(":visible")||
a.hasClass("open"))a.toggleClass("open");else k.onChangeMonthYear(h.getFullYear(),h.getMonth()+1)});l(h)===l(d)&&a.prepend(g("\x3cdiv/\x3e").addClass("today").text(d.getDate()))}})(jQuery);