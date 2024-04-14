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

function separateIncludeAndExclude(phraseArray) {
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

// to use only on encoded words and phrases; it checks for '+' as word separator
function enquoteEncodedPhrase(element) {
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
	if (element.startsWith('-')) {
		// .replace replaces the first occurrence of an element
		return element.replace('-', '');
	}

	return element;
}

function prependKeywordToEachPhrase(data, keyword, includeSeparator, excludeSeparator, overallSeparator) {
	phrases = splitAndTrim(data);
	[include, exclude] = separateIncludeAndExclude(phrases);
	include = include.map(encodeURIWithoutSpaces).map(enquoteEncodedPhrase).map(prependStringFunc(`${keyword}`)).join(includeSeparator);
	exclude = exclude.map(encodeURIWithoutSpaces).map(trimLeftMinus).map(enquoteEncodedPhrase).map(prependStringFunc(`-${keyword}`)).join(excludeSeparator);
	return `${include}${overallSeparator}${exclude}`;
}

function onSearchButtonClick() {
	saveLocalStorage(); 

	let queryParameters = new Map([
		['q', ''], // general query, allows using special commands not included in query parameters (inurl/intitle/intext/before/after/-)
		['as_q', ''], // all of these words or phrases
		['as_epq', ''], // exact occurrence, for now isn't used
		['as_eq', ''], // exclude query argument, doesn't work with phrases (or maybe it works but it produces results like -"jack -russell"), for now isn't used
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

	let extendedQueryParameters = [];

	let allPhrases = getSanitizedValue(inputs, 'all-phrases');
	queryParameters.set('as_q', prependKeywordToEachPhrase(allPhrases, '', '+', '+', '+')); // trivial case of no actual keyword

	let anyPhrases = getSanitizedValue(inputs, 'any-phrases');
	queryParameters.set('as_oq', prependKeywordToEachPhrase(anyPhrases, '', '+', '+', '+'));

	let urlContains = getSanitizedValue(inputs, 'url');
	extendedQueryParameters.push(prependKeywordToEachPhrase(urlContains, 'inurl:', '+', '+', '+'));

	let titleContains = getSanitizedValue(inputs, 'title');
	extendedQueryParameters.push(prependKeywordToEachPhrase(titleContains, 'intitle:', '+', '+', '+'));

	let textContains = getSanitizedValue(inputs, 'text');
	extendedQueryParameters.push(prependKeywordToEachPhrase(textContains, 'intext:', '+', '+', '+'));

	queryParameters.set('as_nlo', getSanitizedValue(inputs, 'lower-bound'));
	queryParameters.set('as_nhi', getSanitizedValue(inputs, 'upper-bound'));
	queryParameters.set('as_sitesearch', getSanitizedValue(inputs, 'domain'));

	queryParameters.set('lr', getSanitizedValue(selectors, 'language'));
	queryParameters.set('cr', getSanitizedValue(selectors, 'region'));
	queryParameters.set('as_occt', getSanitizedValue(selectors, 'terms'));

	if (!isDatePickerEnabled()) {
		queryParameters.set('as_qdr', getSanitizedValue(selectors, 'period'));
	} else {
		let beforeDate = getSanitizedValue(inputs, 'before-date');
		let afterDate = getSanitizedValue(inputs, 'after-date');
		
		if (beforeDate) {
			extendedQueryParameters.push(`before:${beforeDate}`);
		}

		if (afterDate) {
			extendedQueryParameters.push(`after:${afterDate}`);
		}
	}

	if (!isTypeInputEnabled()) {
		queryParameters.set('filetype', getSanitizedValue(selectors, 'type'));
	} else {
		let filetypeList = getSanitizedValue(inputs, 'type');
		extendedQueryParameters.push(prependKeywordToEachPhrase(filetypeList, 'filetype:', '+OR+', '+', '+'));
	}

	queryParameters.set('q', extendedQueryParameters.join('+'));

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
	return checkboxes.get('date').getValue();
}

function isTypeInputEnabled() {
	return checkboxes.get('type').getValue();
}

function loadLocalStorage() {
	inputs.forEach((element, key, map) => {
		let storedValue =  localStorage.getItem(`input-${key}`);
		if (storedValue) {
			element.setValue(storedValue);
		}
	});

	selectors.forEach((element, key, map) => {
		let storedValue =  localStorage.getItem(`selector-${key}`);
		if (storedValue) {
			element.setValue(storedValue);
		}
	});

	checkboxes.forEach((element, key, map) => {
		let storedValue =  localStorage.getItem(`checkbox-${key}`);
		if (storedValue) {
			element.setValue(true);
		} else {
			element.setValue(false);
		}
	});
}

function saveLocalStorage() {
	inputs.forEach((element, key, map) => {
		localStorage.setItem(`input-${key}`, element.getValue());
	});

	selectors.forEach((element, key, map) => {
		localStorage.setItem(`selector-${key}`, element.getValue());
	});

	checkboxes.forEach((element, key, map) => {
		let localKey = `checkbox-${key}`;

		// localStorage can store only strings. "false" evaluates as true because string is not empty
		// here, existence of value is 'true', its absence is 'false'
		if (element.getValue()) {
			localStorage.setItem(localKey, true);
		} else {
			localStorage.removeItem(localKey);
		}
	});
}

function getSanitizedValue(inputCollection, key) {
	let inputData = inputCollection.get(key);
	if (!inputData) {
		return '';
	}

	let value = inputData.getValue();

	if (inputData.sanitizer) {
		return inputData.sanitizer(value);
	}

	return value;
}

function typeInputSanitizer(value) {
	// removes all dots from file types
	return value.replaceAll('.', '');
}

function numericalInputSanitizer(value) {
	// removes all non-numeric characters except . and ,
	return value.replaceAll(/[^0-9.,]/gi, '');
}

let inputs = new Map([
	['all-phrases', {}],
	['any-phrases', {}],
	['url', {}],
	['title', {}],
	['text', {}],
	['lower-bound', {sanitizer: numericalInputSanitizer}],
	['upper-bound', {sanitizer: numericalInputSanitizer}],
	['domain', {}],
	['type', {sanitizer: typeInputSanitizer}],
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
		let data = map.get(key);
		data.htmlElement = document.getElementById(`${key}-input`);

		data.getValue = () => data.htmlElement.value;
		data.setValue = (value) => data.htmlElement.value = value;
	});

	selectors.forEach((value, key, map) => {
		let data = map.get(key);
		data.htmlElement = document.getElementById(`${key}-select`);

		data.getValue = () => data.htmlElement.value;
		data.setValue = data.htmlElement.fstdropdown.setValue;
	});

	checkboxes.forEach((value, key, map) => {
		let data = map.get(key);
		data.htmlElement = document.getElementById(`${key}-checkbox`);

		data.getValue = () => data.htmlElement.checked;
		data.setValue = (value) => {
			data.htmlElement.checked = value;
			
			// triggering onChange manually
			const event = new Event("change");
			data.htmlElement.dispatchEvent(event);
		};
	});

	/**
	 * adding event handlers
	 */

	checkboxes.get('date').htmlElement.addEventListener("change", (event) => {
		enableDatePicker(event.currentTarget.checked);
	});

	checkboxes.get('type').htmlElement.addEventListener("change", (event) => {
		enableTypeInput(event.currentTarget.checked);
	});

	document.getElementById('search-button').onclick = onSearchClick;
	document.getElementById('search-dropdown-close').onclick = onCloseClick;
	document.getElementById('search-dropdown-button').onclick = onSearchButtonClick;
}

main();
loadLocalStorage();