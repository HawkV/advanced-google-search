let googleClasses = {
	'searchBarContainer': 'A8SBwf',
	'searchBar': 'RNNXgb'
}

let searchButtonHTML = `
<div class="advanced-search-button">  
        <span jsname="s1VaRe" class="separator"></span>
	<button type="button" class="search-button" id="search-button" aria-label="Advanced search"> 
		<div class="looking-glass"> 
			<span>
				<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
				<svg class="looking-glass-icon" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path id="Vector" d="M7 10H10M10 10H13M10 10V7M10 10V13M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</span> 
		</div> 
	</button> 
</div>
`

let searchDropdown = `
<div class="search-dropdown-container" id="search-dropdown-container">
	<div class="search-dropdown-inner">
		<div aria-label="Close" class="search-dropdown-close" id="search-dropdown-close" tabindex="0" role="button" jsaction="yZGKvf">
			<span style="height:20px;line-height:20px;width:20px" class="z1asCe wuXmqc">
				<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
				</svg>
			</span>
		</div>
		<div class="search-dropdown-header">Advanced Google Search </div>
		<div class="search-dropdown-content">
			<div class="search-dropdown-input column-1">
				<label class="search-dropdown-input-label" for="search-dropdown-input-field">All these words or phrases (write -word to exclude it):</label>
				<input autocomplete="false" autocorrect="false" id="all-phrases-input" text="text" class="search-dropdown-input-field" placeholder="Comma-separated list of words and phrases">	
			</div>			
			<div class="search-dropdown-input column-1">
				<label class="search-dropdown-input-label" for="search-dropdown-input-field">Any of these words or phrases:</label>
				<input autocomplete="false" autocorrect="false" id="any-phrases-input" text="text" class="search-dropdown-input-field" placeholder="Comma-separated list of words and phrases">	
			</div>					
			<div class="search-dropdown-input column-1">
				<label class="search-dropdown-input-label" for="search-dropdown-input-field">URL contains:</label>
				<input autocomplete="false" autocorrect="false" id="url-input" text="text" class="search-dropdown-input-field" placeholder="Comma-separated list of words">	
			</div>					
			<div class="search-dropdown-input column-1">
				<label class="search-dropdown-input-label" for="search-dropdown-input-field">Title contains:</label>
				<input autocomplete="false" autocorrect="false" id="title-input" text="text" class="search-dropdown-input-field" placeholder="Comma-separated list of words and phrases">	
			</div>					
			<div class="search-dropdown-input column-1">
				<label class="search-dropdown-input-label" for="search-dropdown-input-field">Text contains:</label>
				<input autocomplete="false" autocorrect="false" id="text-input" text="text" class="search-dropdown-input-field" placeholder="Comma-separated list of words and phrases">	
			</div>			
			<div class="search-dropdown-input column-1">
				<label class="search-dropdown-input-label" for="search-dropdown-input-field">Numbers ranging from:</label>
				<div style="display: flex;">
					<input autocomplete="false" id="lower-bound-input" autocorrect="false" text="number" class="search-dropdown-input-field short" placeholder="Lower bound">		
					<div style="padding: 10px">-</div> 			
					<input autocomplete="false" id="upper-bound-input" autocorrect="false" text="number" class="search-dropdown-input-field short right" placeholder="Upper bound">
				</div>	
			</div>		


			<!-- next column -->

			<div class="search-dropdown-input column-2 row-1">
				<label class="search-dropdown-input-label" for="search-dropdown-input-field">Site or domain:</label>
				<input autocomplete="false" autocorrect="false" id="domain-input" text="text" class="search-dropdown-input-field" placeholder="Domain name">	
			</div>	
			<div class="search-dropdown-input column-2 row-2">
				<label class="search-dropdown-input-label" for="search-dropdown-input-field">Language:</label>
				<div class="dark">
					<select class='fstdropdown-select' id='language-select'>
					</select> 	
				</div>
			</div>			
			<div class="search-dropdown-input column-2 row-3">
				<label class="search-dropdown-input-label" for="search-dropdown-input-field">Region:</label>

				<div class="dark">
					<select class='fstdropdown-select' id='region-select'>
					</select> 	
				</div>	
			</div>
			<div class="search-dropdown-input column-2 row-4">
				<label class="search-dropdown-input-label" for="search-dropdown-input-field">Last update (<input type=checkbox class="label-checkbox" id="date-checkbox"> Use date range instead):</label>
				<div class="dark" id="date-dropdown">
					<select class='fstdropdown-select' id='period-select'>
					</select> 	
				</div>					
				<div style="display: none;" id="date-picker">
					<input type="date" autocomplete="false" id="after-date-input" autocorrect="false" text="text" class="search-dropdown-input-field short">		
					<div style="padding: 10px">-</div> 			
					<input type="date" autocomplete="false" id="before-date-input" autocorrect="false" text="text" class="search-dropdown-input-field short right">
				</div>	
			</div>			
			<div class="search-dropdown-input column-2 row-5">
				<label class="search-dropdown-input-label" for="search-dropdown-input-field">Terms appearing:</label>
				<div class="dark">
					<select class='fstdropdown-select' id='terms-select'> 
					</select> 	
				</div>	
			</div>			
			<div class="search-dropdown-input column-2 row-6">
				<label class="search-dropdown-input-label" for="search-dropdown-input-field">File type (<input type=checkbox class="label-checkbox" id="type-checkbox"> Use type list input instead):</label>
				<div class="dark" id="type-dropdown">
					<select class='fstdropdown-select' id='type-select'> 
					</select> 	
				</div>		
				<input autocomplete="false" autocorrect="false" id="type-input" text="text" class="search-dropdown-input-field" id="type-input" style="display:none" placeholder="Comma-separated list of file types">
			</div>		
			<div class="search-dropdown-button-container column-2 row-7">
				<div class="search-dropdown-button" id="search-dropdown-button" tabindex="0" role="button">Advanced Search</div>
			</div>
		</div>
	</div>
</div>
`

function requireSingleElementWithClass(name) {
	elementList = document.getElementsByClassName(name);
	if (elementList.length != 1) {
		let elementCount; 

		if (elementList.length == 0) {
			elementCount = 'no elements';
		} else {
			elementCount = 'more than one element';
		}

		console.log(`Extension error, ${elementCount} with class ${name}`);
		process.exit(1);
	}

	return elementList[0];
}

function onSearchClick() {
	enableDropdown(true);
}

function onCloseClick() {
	enableDropdown(false);
}

function splitAndTrim(value) {
	return value.split(',').filter((word) => word).map((item) => item.trim());
}

function splitIncludeAndExclude(phraseArray) {
	let include = [];
	let exclude = [];

	phraseArray.forEach((element) => {
		if (element.startsWith('-')) {
			exclude.push(element);
		} else {
			include.push(element);
		}
	});

	return [include, exclude];
}
 
function encodeURIWithoutSpaces(element) {
	return encodeURIComponent(element).replaceAll('%20', '+');
}

function enquotePhrase(element) {
	if (element.includes('+')) {
		return `"${element}"`;
	}

	return element;
}

function prependString(string, element) {
	return `${string}${element}`;
}

function prependStringFunc(string) {
	return (element) => prependString(string, element);
}

function trimLeftMinus(element) {
	return element.replace('-', '');
}

function onSearchButtonClick() {
	saveLocalStorage(); 

	let queryParameters = new Map([
		['q', ''], // general query, allows using special commands not included in query parameters (inurl/intitle/intext/before/after/-)
		['as_q', ''], // all of these words or phrases
		['as_epq', ''], // exact occurrence, for now isn't used
		['as_eq', ''], // exclude query argument, doesn't work with phrases, for now isn't used
		['as_oq', ''], // any of these words or phrases
		['as_nlo', ''], // lower numerical bound
		['as_nhi', ''], // upper numerical bound
		['lr', ''], // language
		['cr', ''], // region
		['as_qdr', ''], // last updated
		['as_sitesearch', ''], // website
		['as_occt', 'any'], // term location
		['as_filetype', ''], // file type
	]);

	let extendedQueryParameters = new Map([
		['before', ''],
		['after', ''],
		['intitle', ''],
		['inurl', ''],
		['intext', ''],
		['-intitle', ''],
		['-inurl', ''],
		['-intext', ''],
		['filetype', ''],
		['-filetype', ''],
	]);

	let allPhrases = splitAndTrim(inputs.get('all-phrases').value);
	let [include, exclude] = splitIncludeAndExclude(allPhrases);
	include = include.map(encodeURIWithoutSpaces).map(enquotePhrase);
	exclude = exclude.map(encodeURIWithoutSpaces).map(trimLeftMinus).map(enquotePhrase).map(prependStringFunc('-'));
	allPhrases = [...include, ...exclude].join('+');
	queryParameters.set('as_q', allPhrases);

	let anyPhrases = splitAndTrim(inputs.get('any-phrases').value);
	anyPhrases = anyPhrases.map(encodeURIWithoutSpaces).map(enquotePhrase).join('+');
	queryParameters.set('as_oq', anyPhrases);

	let urlContains = splitAndTrim(inputs.get('url').value);
	[include, exclude] = splitIncludeAndExclude(urlContains);
	include = include.map(encodeURIWithoutSpaces).map(enquotePhrase).map(prependStringFunc('inurl:')).join('+');
	exclude = exclude.map(encodeURIWithoutSpaces).map(trimLeftMinus).map(enquotePhrase).map(prependStringFunc('-inurl:')).join('+');

	extendedQueryParameters.set('inurl', include);
	extendedQueryParameters.set('-inurl', exclude);

	let titleContains = splitAndTrim(inputs.get('title').value);
	[include, exclude] = splitIncludeAndExclude(titleContains);
	include = include.map(encodeURIWithoutSpaces).map(enquotePhrase).map(prependStringFunc('intitle:')).join('+');
	exclude = exclude.map(encodeURIWithoutSpaces).map(trimLeftMinus).map(enquotePhrase).map(prependStringFunc('-intitle:')).join('+');

	extendedQueryParameters.set('intitle', include);
	extendedQueryParameters.set('-intitle', exclude);

	let textContains = splitAndTrim(inputs.get('text').value);
	[include, exclude] = splitIncludeAndExclude(textContains);
	include = include.map(encodeURIWithoutSpaces).map(enquotePhrase).map(prependStringFunc('intext:')).join('+');
	exclude = exclude.map(encodeURIWithoutSpaces).map(trimLeftMinus).map(enquotePhrase).map(prependStringFunc('-intext:')).join('+');

	extendedQueryParameters.set('intext', include);
	extendedQueryParameters.set('-intext', exclude);

	queryParameters.set('as_nlo', inputs.get('lower-bound').value);
	queryParameters.set('as_nhi', inputs.get('upper-bound').value);
	queryParameters.set('as_sitesearch', inputs.get('domain').value);

	queryParameters.set('lr', selectors.get('language').value);
	queryParameters.set('cr', selectors.get('region').value);
	queryParameters.set('as_occt', selectors.get('terms').value);

	if (!isDatePickerEnabled()) {
		queryParameters.set('as_qdr', selectors.get('period').value);
	} else {
		extendedQueryParameters.set('before', inputs.get('before-date').value);
		extendedQueryParameters.set('after', inputs.get('after-date').value);
	}

	if (!isTypeInputEnabled()) {
		queryParameters.set('filetype', selectors.get('type').value);
	} else {
		let textContains = splitAndTrim(inputs.get('type').value);
		[include, exclude] = splitIncludeAndExclude(textContains);
		include = include.map(encodeURIWithoutSpaces).map(enquotePhrase).map(prependStringFunc('filetype:')).join('+OR+');
		exclude = exclude.map(encodeURIWithoutSpaces).map(trimLeftMinus).map(enquotePhrase).map(prependStringFunc('-filetype:')).join('+');

		extendedQueryParameters.set('filetype', include);
		extendedQueryParameters.set('-filetype', exclude);
	}

	let parameters = [];
	extendedQueryParameters.forEach((value, key, map) => {
		if (value) {
			if (['inurl', '-inurl', 'intext', '-intext', 'intitle', '-intitle', 'filetype', '-filetype'].includes(key)) { // rework
				parameters.push(value);
			} else {
				parameters.push(`${key}:${value}`);
			}
		} 
	});
	let extendedQuery = parameters.join('+');
	queryParameters.set('q', extendedQuery);

	parameters = [];
	queryParameters.forEach((value, key, map) => {
		parameters.push(`${key}=${value}`);
	});
	let mergedParameters = parameters.join('&');

	let query = `https://www.google.com/search?${mergedParameters}`;

	document.location=query;
}

function enableDropdown(status) {
	let searchDropdown = document.getElementById('search-dropdown-container');
	if (status == true) {
		searchDropdown.style.display = "block";
	} else {
		searchDropdown.style.display = "none";
	}
}

function enableDatePicker(status) {
	let dateDropdown = document.getElementById('date-dropdown');
	let datePicker = document.getElementById('date-picker');

	if (status == true) {
		dateDropdown.style.display = "none";
		datePicker.style.display = "flex";
	} else {
		dateDropdown.style.display = "block";
		datePicker.style.display = "none";
	}
}

function enableTypeInput(status) {
	let typeDropdown = document.getElementById('type-dropdown');
	let typeInput = document.getElementById('type-input');

	if (status == true) {
		typeDropdown.style.display = "none";
		typeInput.style.display = "block";
	} else {
		typeDropdown.style.display = "block";
		typeInput.style.display = "none";
	}
}

function isDatePickerEnabled() {
	return checkboxes.get('date').checked;
}

function isTypeInputEnabled() {
	return checkboxes.get('type').checked;
}

function loadLocalStorage() {
	inputs.forEach((element, key, map) => {
		let storedValue =  localStorage.getItem(`input-${key}`);
		if (storedValue) {
			element.value = storedValue;
		}
	});

	selectors.forEach((element, key, map) => {
		let storedValue =  localStorage.getItem(`selector-${key}`);
		if (storedValue) {
			element.fstdropdown.setValue(storedValue);
		}
	});

	checkboxes.forEach((element, key, map) => {
		let storedValue =  localStorage.getItem(`checkbox-${key}`);
		if (storedValue) {
			element.checked = true;
		} else {
			element.checked = false;
		}

		// triggering onChange manually
		const event = new Event("change");
    	element.dispatchEvent(event);
	});
}

function saveLocalStorage() {
	inputs.forEach((element, key, map) => {
		localStorage.setItem(`input-${key}`, element.value);
	});

	selectors.forEach((element, key, map) => {
		localStorage.setItem(`selector-${key}`, element.value);
	});

	checkboxes.forEach((element, key, map) => {
		let localKey = `checkbox-${key}`;

		// localStorage can store only strings. "false" evaluates as true because the string is not empty
		// here, existence of value is 'true', its absence is 'false'
		if (element.checked) {
			localStorage.setItem(localKey, true);
		} else {
			localStorage.removeItem(localKey);
		}
	});
}

let inputs = new Map([
	['all-phrases', {}],
	['any-phrases', {}],
	['url', {}],
	['title', {}],
	['text', {}],
	['lower-bound', {}],
	['upper-bound', {}],
	['domain', {}],
	['type', {}],
	['after-date', {}],
	['before-date', {}],
]);

let selectors = new Map([
	['language', {}],
	['region', {}],
	['period', {}],
	['terms', {}],
	['type', {}],
]);

let checkboxes = new Map([
	['date', {}],
	['type', {}]
]);

function main() {
	/** 
	 * updating page's HTML
	 */

	let searchBar = requireSingleElementWithClass(googleClasses['searchBar'])
	searchBar.insertAdjacentHTML('beforeend', searchButtonHTML);
	searchBar.insertAdjacentHTML('afterend', searchDropdown);

	optionsMap.forEach((value, key, map) => {
		let select = document.getElementById(`${key}-select`);
		value.forEach((element) => select.insertAdjacentHTML('beforeend', `<option value="${element.value}">${element.content}</option>`));
	});

	setFstDropdown();

	/** 
	 * initializing collections with user input elements for ease of future reference
	 */

	inputs.forEach((value, key, map) => {
		map.set(key, document.getElementById(`${key}-input`));
	});

	selectors.forEach((value, key, map) => {
		map.set(key, document.getElementById(`${key}-select`));
	});

	checkboxes.forEach((value, key, map) => {
		map.set(key, document.getElementById(`${key}-checkbox`));
	});

	/**
	 * adding event handlers
	 */

	checkboxes.get('date').addEventListener("change", (event) => {
		enableDatePicker(event.currentTarget.checked);
	});

	checkboxes.get('type').addEventListener("change", (event) => {
		enableTypeInput(event.currentTarget.checked);
	});

	document.getElementById('search-button').onclick = onSearchClick;
	document.getElementById('search-dropdown-close').onclick = onCloseClick;
	document.getElementById('search-dropdown-button').onclick = onSearchButtonClick;
}

main();
loadLocalStorage();