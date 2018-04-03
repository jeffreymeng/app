function getQuery(name, url) {
	var url = url || window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return "";
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getData() {
	if (getQuery("d")) {
		data = JSON.parse(atob(decodeURIComponent(getQuery("d"))));
	} else {
		//https://stackoverflow.com/a/8649003/5511561 except we remove the decodeURI part and do decodeURIComponent below.
		//if no data parameter is provided, we assume data is added in the form to a URL search parameter.
		var search = location.search.substring(1);
		if (search) {
			var data = JSON.parse(
				'{"' +
					search
						.replace(/"/g, '\\"')
						.replace(/&/g, '","')
						.replace(/=/g, '":"') +
					'"}'
			);
		} else {
			var data = {};
		}
	}
	// loop through the object and change whitespace only/no charcter properties to undefined
	for (var key in data) {
		if (data.hasOwnProperty(key)) {
			if (data[key].match(/^\s*$/g) || data[key] == null) {
				delete data[key]; //remove the element
			} else {
				data[key] = decodeURIComponent(data[key]);
			}
		}
	}

	return data;
}
