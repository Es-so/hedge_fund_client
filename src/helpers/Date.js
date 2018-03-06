
const pad = n => (
	n < 10 ? '0' + n : n
)

const date_to_str = date => {
	const d = new Date(date);
	const date_str  = d.getFullYear() + "-" +  pad(d.getMonth() + 1 ) + "-" +  pad(d.getDate())  + " " + d.getHours() + ":" + d.getMinutes() + ':' + d.getSeconds();

	return date_str;
}

export const formatDate = date => {
	const str_date = date_to_str(date)
	const formated = new Date(str_date).toISOString().split("T");

	return formated
}

