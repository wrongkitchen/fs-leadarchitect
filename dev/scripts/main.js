'use strict';
require.config({
    paths: {
    	global: 'modules/global',
    	about: 'modules/about',
    	workList: 'modules/work-list'
    }
});

require(['global'], function (global) {

	global.init();

	if(window.page){
		if(window.page == 'about'){
			require(['about'], function (about) {
				about.init();
			});
		}
		if(window.page == 'work-list'){
			require(['workList'], function (workList) {
				workList.init();
			});
		}
	}

});

