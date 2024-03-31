export default function ProxyHandler(req, res) {
	res.status(200).json({ test: true });
}
