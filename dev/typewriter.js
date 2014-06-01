// nexusUI - Typewriter (computer keyboard)

function typewriter(target, transmitCommand) {

	//self awareness
	var self = this;
	this.defaultSize = { width: 400, height: 150 };
	
	//get common attributes and methods
	getTemplate(self, target, transmitCommand);

	
	this.letter = ""
	this.keywid = self.width/14.5;

	this.rows = [
		[
			{ symbol: "`", value: 192, width: 1, on: false },
			{ symbol: "1", value: 49, width: 1, on: false  },
			{ symbol: "2", value: 50, width: 1, on: false  },
			{ symbol: "3", value: 51, width: 1, on: false  },
			{ symbol: "4", value: 52, width: 1, on: false  },
			{ symbol: "5", value: 53, width: 1, on: false  },
			{ symbol: "6", value: 54, width: 1, on: false  },
			{ symbol: "7", value: 55, width: 1, on: false  },
			{ symbol: "8", value: 56, width: 1, on: false  },
			{ symbol: "9", value: 57, width: 1, on: false  },
			{ symbol: "0", value: 48, width: 1, on: false  },
			{ symbol: "-", value: 59, width: 1, on: false  },
			{ symbol: "=", value: 60, width: 1, on: false  },
			{ symbol: "delete", value: 61, width: 1.5, on: false  }
		],
		[
			{ symbol: "tab", value: 10, width: 1.5, on: false  },
			{ symbol: "q", value: 10, width: 1, on: false  },
			{ symbol: "w", value: 10, width: 1, on: false  },
			{ symbol: "e", value: 10, width: 1, on: false  },
			{ symbol: "r", value: 10, width: 1, on: false  },
			{ symbol: "t", value: 10, width: 1, on: false  },
			{ symbol: "y", value: 10, width: 1, on: false  },
			{ symbol: "u", value: 10, width: 1, on: false  },
			{ symbol: "i", value: 10, width: 1, on: false  },
			{ symbol: "o", value: 10, width: 1, on: false  },
			{ symbol: "p", value: 10, width: 1, on: false  },
			{ symbol: "[", value: 10, width: 1, on: false  },
			{ symbol: "]", value: 10, width: 1, on: false  },
			{ symbol: "\\", value: 10, width: 1, on: false  }
		],
		[
			{ symbol: "caps", value: 10, width: 1.75, on: false  },
			{ symbol: "a", value: 10, width: 1, on: false  },
			{ symbol: "s", value: 10, width: 1, on: false  },
			{ symbol: "d", value: 10, width: 1, on: false  },
			{ symbol: "f", value: 10, width: 1, on: false  },
			{ symbol: "g", value: 10, width: 1, on: false  },
			{ symbol: "h", value: 10, width: 1, on: false  },
			{ symbol: "j", value: 10, width: 1, on: false  },
			{ symbol: "k", value: 10, width: 1, on: false  },
			{ symbol: "l", value: 10, width: 1, on: false  },
			{ symbol: ";", value: 10, width: 1, on: false  },
			{ symbol: "'", value: 10, width: 1, on: false  },
			{ symbol: "enter", value: 10, width: 1.75, on: false }
		],
		[
			{ symbol: "shift", value: 10, width: 2.25, on: false  },
			{ symbol: "z", value: 10, width: 1, on: false  },
			{ symbol: "x", value: 10, width: 1, on: false  },
			{ symbol: "c", value: 10, width: 1, on: false  },
			{ symbol: "v", value: 10, width: 1, on: false  },
			{ symbol: "b", value: 10, width: 1, on: false  },
			{ symbol: "n", value: 10, width: 1, on: false  },
			{ symbol: "m", value: 10, width: 1, on: false  },
			{ symbol: ",", value: 10, width: 1, on: false  },
			{ symbol: ".", value: 10, width: 1, on: false  },
			{ symbol: "/", value: 10, width: 1, on: false  },
			{ symbol: "shift", value: 10, width: 2.25, on: false }
		],
		[
			{ symbol: "fn", value: 10, width: 1, on: false  },
			{ symbol: "ctrl", value: 10, width: 1, on: false  },
			{ symbol: "opt", value: 10, width: 1, on: false  },
			{ symbol: "cmd", value: 10, width: 1.25, on: false  },
			{ symbol: "space", value: 10, width: 5, on: false  },
			{ symbol: "cmd", value: 10, width: 1, on: false  },
			{ symbol: "opt", value: 10, width: 1, on: false  },
			{ symbol: "<", value: 10, width: .81, on: false  },
			{ symbol: "^", value: 10, width: .81, on: false  },
			{ symbol: "v", value: 10, width: .81, on: false  },
			{ symbol: ">", value: 10, width: .81, on: false  }
		]
	]
		
	this.init = function() {
		document.addEventListener("keydown", self.type);
		document.addEventListener("keyup", self.untype);
		
		self.draw();
	}

	this.draw = function() {	// erase
		self.erase();

		//make background path
		self.makeRoundedBG();

		with (self.context) {
			//fill in background path
			strokeStyle = self.colors.border;
			fillStyle = self.colors.fill;
			lineWidth = self.lineWidth;
			stroke();
			fill();

			strokeStyle = self.colors.black 
			fillStyle = self.colors.accent 
			lineWidth = 1

			for (var i=0;i<self.rows.length;i++) {
				var currkeyL = 0;
				for (var j=0;j<self.rows[i].length;j++) {

					nx.makeRoundRect(self.context, currkeyL,i*30,self.keywid*self.rows[i][j].width,30,8);
						
					if (self.rows[i][j].on) {
						fill()
						//fillRect(currkeyL,i*30,self.keywid*self.rows[i][j].width,30);
					} else {
						stroke()
						//strokeRect(currkeyL,i*30,self.keywid*self.rows[i][j].width,30);
					}

			/*		fillStyle = self.colors.border;
					font = self.keywid/2+"px courier";
					textAlign = "center";
					fillText(self.rows[i][j].symbol, currkeyL + self.keywid/2, i*30+15);
			*/
					

		
					currkeyL += self.keywid*self.rows[i][j].width;

				}
			}

			globalAlpha = 0.3
			fillStyle = self.colors.border;
			font = self.height+"px courier";
			textAlign = "center";
			fillText(self.letter, self.width/2, self.height/1.25);
			
			globalAlpha = 1

		}
		self.drawLabel();
	}


	// 
	this.click = function(e) {
	
		self.nxTransmit(note);
		self.draw();	
	}

	this.move = function(e) {
		if (self.clicked) {
			self.draw();
		}
	}

	this.release = function(e) {
	
		self.nxTransmit([midi_note, 0]);
		self.draw();
	}

	
	this.type = function(e) {
		var currKey = e.which;
		for (var i=0;i<self.rows.length;i++) {
			for (var j=0;j<self.rows[i].length;j++) {
				if (currKey == self.rows[i][j].value) {
					console.log(self.rows[i][j].symbol)
					self.rows[i][j].on = true;
					self.letter = self.rows[i][j].symbol;
					break;
				}
			}
		}
		//self.nxTransmit();
		self.draw();	
	}
	
	this.untype = function(e) {
	
		var currKey = e.which;
		for (var i=0;i<self.rows.length;i++) {
			for (var j=0;j<self.rows[i].length;j++) {
				if (currKey == self.rows[i][j].value) {
					console.log(self.rows[i][j].symbol)
					self.rows[i][j].on = false;
					break;
				}
			}
		}
		//self.nxTransmit();
		self.draw();
	}
	
}
