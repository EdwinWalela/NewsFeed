
var arr = [
	{
		quote:'Technology is anything that wasn’t around when you were born.',
		author:'Alan Kay (Computer Scientist)'
	},
	{
		quote:'Any sufficiently advanced technology is equivalent to magic.',
		author:'Arthur C. Clarke (Author)'
	},
	{
		quote:'The human spirit must prevail over technology. ',
		author:'Albert Einstein (Scientist)'
	},
	{
		quote:'So much technology, so little talent.',
		author:'Vernor Vinge.'
	},
	{
		quote:'Creativity is just connecting things.',
		author:'Steve Jobs.'
	},
	{
		quote:'So much technology, so little talent.',
		author:'Vernor Vinge.'
	},
	{
		quote:'Creativity is just connecting things.',
		author:'Steve Jobs.'
	},
]
var rand =  d = quote =  now = '';

function picker(arr){
	d = new Date()
	now = d.getDay()
	quote = arr[now]
}
picker(arr)
module.exports.quote = quote

