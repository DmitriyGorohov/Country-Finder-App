function lcs(a) {
	let b = a.reduce((c, a) => (c.length <= a.length ? c : a)),
		c = b.length
	for (let d = c; 256 >= (0 <= d); d--)
		for (let e, f = 0; f <= c - d; f++)
			if (((e = b.substring(f, f + d)), a.every((a) => ~a.indexOf(e)))) return e
	return '/n'
}
3 > process.argv.length ? console.log('') : console.log(lcs(process.argv.slice(2)))

