from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
import urlparse
import urllib
import urllib2
from urllib2 import urlopen, HTTPError

HOST='localhost'
PORT=8080

URL="https://api.particle.io/v1/devices/{!s}/led/"
DEVICES = ['51ff6f065082554910260887']
ACCESS_TOKEN="2228662ce1e5a04e7fb21f9b81aa3bc390b72506"
COMMAND = "command=on"
class MyHandler(BaseHTTPRequestHandler):
	def do_GET(self):
		print("Just received a GET request")
		qs={}
		path = self.path
		if '?' in path:
			path, tmp = path.split('?')
			qs = urlparse.parse_qs(tmp)
		param = qs['params'][0].split(',')
		time   = (param[0])
		device = int(param[1])
		self.processGet(time,device)
				
		print qs
	
		print "End of parsing get"
	def processGet(self,t,d):
		print "time: %s"%t
		print "device: %d"%d
		data = urllib.urlencode({
			'access_token' : ACCESS_TOKEN,
			'command':t
			}
			);	
		content =urllib.urlopen(url=(URL.format(DEVICES[d])),data=data).read()
		print content
#		return ()
					
	
	def log_request(self, code=None, size=None):
		print('Req')
if __name__ == "__main__":
	try:
		server = HTTPServer((HOST, PORT), MyHandler)
		print('Started http server')
		server.serve_forever()
	except KeyboardInterrupt:
		print('^C received, shutting down server')
		server.socket.close()

