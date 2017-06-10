var string1, foo;

function submitAttachedFile() {
				        	
				        $("#text-area")[0].value = foo;

				        	var texts = foo
				        	

							.replace(/[\f|\n|\r|\t|\v|\u1680|\u180e|\u2000|\u2001|\u2002|\u2003|\u2004|\u2005|\u2006|\u2007|\u2008|\u2009|\u200a|\u2028|\u2029|\u202f|\u205f|\u3000|\u3031|\u3035|\u309b|\u309c|\u30a0|\u30fc|\uff70]/g, " ")
				        	.replace(/[\.|\-|\—|\,|\?|\!]/g, " ")
				        	.replace(/[\xa1|\xa7|\xab|\xb6|\xb7|\xbb|\xbf|\u037e|\u0387|\u055a|\u055f|\u0589|\u058a|\u05be|\u05c0|\u05c3|\u05c6|\u05f3|\u05f4|\u0609|\u060a|\u060c|\u060d|\u061b|\u061e|\u061f|\u066a|\u066d|\u06d4|\u0700|\u070d|\u07f7|\u07f9|\u0830|\u083e|\u085e|\u0964|\u0965|\u0970|\u0af0|\u0df4|\u0e4f|\u0e5a|\u0e5b|\u0f04|\u0f12|\u0f14|\u0f3a|\u0f3d|\u0f85|\u0fd0|\u0fd4|\u0fd9|\u0fda|\u104a|\u104f|\u10fb|\u1360|\u1368|\u1400|\u166d|\u166e|\u169b|\u169c|\u16eb|\u16ed|\u1735|\u1736|\u17d4|\u17d6|\u17d8|\u17da|\u1800|\u180a|\u1944|\u1945|\u1a1e|\u1a1f|\u1aa0|\u1aa6|\u1aa8|\u1aad|\u1b5a|\u1b60|\u1bfc|\u1bff|\u1c3b|\u1c3f|\u1c7e|\u1c7f|\u1cc0|\u1cc7|\u1cd3|\u2010|\u2027|\u2030|\u2043|\u2045|\u2051|\u2053|\u205e|\u207d|\u207e|\u208d|\u208e|\u2329|\u232a|\u2768|\u2775|\u27c5|\u27c6|\u27e6|\u27ef|\u2983|\u2998|\u29d8|\u29db|\u29fc|\u29fd|\u2cf9|\u2cfc|\u2cfe|\u2cff|\u2d70|\u2e00|\u2e2e|\u2e30|\u2e3b|\u3001|\u3003|\u3008|\u3011|\u3014|\u301f|\u3030|\u303d|\u30a0|\u30fb|\ua4fe|\ua4ff|\ua60d|\ua60f|\ua673|\ua67e|\ua6f2|\ua6f7|\ua874|\ua877|\ua8ce|\ua8cf|\ua8f8|\ua8fa|\ua92e|\ua92f|\ua95f|\ua9c1|\ua9cd|\ua9de|\ua9df|\uaa5c|\uaa5f|\uaade|\uaadf|\uaaf0|\uaaf1|\uabeb|\ufd3e|\ufd3f|\ufe10|\ufe19|\ufe30|\ufe52|\ufe54|\ufe61|\ufe63|\ufe68|\ufe6a|\ufe6b|\uff01|\uff03|\uff05|\uff0a|\uff0c|\uff0f|\uff1a|\uff1b|\uff1f|\uff20|\uff3b|\uff3d|\uff3f|\uff5b|\uff5d|\uff5f|\uff65]/g, " ")
				        	.replace(/ /g, "  ")
				        	.replace(/ i | me | my | myself | we | us | our | ours | ourselves | you | your | yours | yourself | yourselves | he | him | his | himself | she | her | hers | herself | it | its | itself | they | them | their | theirs | themselves | what | which | who | whom | whose | this | that | these | those | am | is | are | was | were | be | been | being | have | has | had | having | do | does | did | doing | will | would | should | can | could | ought | i'm | you're | he's | she's | it's | we're | they're | i've | you've | we've | they've | i'd | you'd | he'd | she'd | we'd | they'd | i'll | you'll | he'll | she'll | we'll | they'll | isn't | aren't | wasn't | weren't | hasn't | haven't | hadn't | doesn't | don't | didn't | won't | wouldn't | shan't | shouldn't | can't | cannot | couldn't | mustn't | let's | that's | who's | what's | here's | there's | when's | where's | why's | how's | a | A | an | the | and | but | if | or | because | as | until | while | of | at | by | for | with | about | against | between | into | through | during | before | after | above | below | to | from | up | upon | down | in | out | on | off | over | under | again | further | then | once | here | there | when | where | why | how | all | any | both | each | few | more | most | other | some | such | no | nor | not | only | own | same | so | than | too | very | say | says | said | shall /gi, " ")
				        	.replace(/\'s/gi, " ")
				        	.replace(/\(/g, " ")
				        	.replace(/\)/g, " ")
				        	.replace(/0/g, " ")
				        	.replace(/1/g, " ")
				        	.replace(/2/g, " ")
				        	.replace(/3/g, " ")
				        	.replace(/4/g, " ")
				        	.replace(/5/g, " ")
				        	.replace(/6/g, " ")
				        	.replace(/7/g, " ")
				        	.replace(/8/g, " ")
				        	.replace(/9/g, " ")
				        	.replace(/'/g, " ")
				        	.replace(/’s/g, " ")
				        	.replace(/–/g, " ")

				        	.replace(/’/g, " ")
							.replace(/\;/g, " ")

				        	.replace(/\:/g, " ")
				        	.replace(/\//g, " ")
				        	.replace(/‘/g, " ")
				        	.replace(/“/g, " ")
				        	.replace(/"/g, " ")
				        	.replace(/”/g, " ")
				        	.replace(/    /g, " ")
				        	.replace(/   /g, " ")
				        	.replace(/  /g, " ")
				        	.replace(/ /g, " ")
				        	.split(" ");


				        	//alert("Submit Success!");


							var words = [];
							
							for(var i = 0; i < texts.length; i++){
								var existInWords = 0;
								for(var j = 0; j < words.length; j++){
									if(words[j].text == texts[i]){
										words[j].size++;
										existInWords = 1;
									}
								}
								if(existInWords == 0){


								words.push({
									text: texts[i],
									size: 1,
									href: 'http://www.thesaurus.com/browse/' + texts[i] + '?s=t'

								});
								}

							}
							var highest = words[0];
							var tmp = {};
							var higest_idx = 0;
							for (var i = words.length-1; i>=0; i--){
								tmp = words[i];
								if (tmp.size > highest.size) {
									highest = tmp;
									higest_idx = i;}

							}
							tmp = words[0];
							words[0] = highest;
							words[higest_idx] = tmp;

							var sortable = [];
							for (var i = 0; i < words.length; i++) {
								sortable.push([words[i].text, words[i].size]);
							}
							sortable.sort(function(a,b) {
								return b[1]-a[1];
							});


							$('#wordRank1').html(sortable[0][0]);
							$('#wordRank2').html(sortable[1][0]);
							$('#wordRank3').html(sortable[2][0]);
							$('#wordRank4').html(sortable[3][0]);
							$('#wordRank5').html(sortable[4][0]);
							$('#wordRank6').html(sortable[5][0]);
							$('#wordRank7').html(sortable[6][0]);
							$('#wordRank8').html(sortable[7][0]);
							$('#wordRank9').html(sortable[8][0]);
							$('#wordRank10').html(sortable[9][0]);

							$('#wordCount1').html(sortable[0][1]);
							$('#wordCount2').html(sortable[1][1]);
							$('#wordCount3').html(sortable[2][1]);
							$('#wordCount4').html(sortable[3][1]);
							$('#wordCount5').html(sortable[4][1]);
							$('#wordCount6').html(sortable[5][1]);
							$('#wordCount7').html(sortable[6][1]);
							$('#wordCount8').html(sortable[7][1]);
							$('#wordCount9').html(sortable[8][1]);
							$('#wordCount10').html(sortable[9][1]);
						
						$("#wordcloud").html("");

						d3.wordcloud()
				        .size([800, 350])
				        .fill(d3.scale.ordinal().range(["#884400", "#448800", "#888800", "#444400"]))
				        .words(words)
				        .onwordclick(function(d, i) {
				          if (d.href) { 
				          window.open(d.href,'_blank'); }
				        })
				        .start();
							



				        
				        }


	window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		//var fileDisplayArea = document.getElementById('fileDisplayArea');
		
		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					//fileDisplayArea.innerText = reader.result;
					
					string1 = reader.result;
					foo=string1.toString();
					submitAttachedFile();
					fnMove('zen-supporting');
				}

				reader.readAsText(file, 'UTF-8');	
			} else {
				fileDisplayArea.innerText = "File not supported!";
			}
		});
}
