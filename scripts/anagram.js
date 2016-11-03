// A simple javascript to check anagrams. Returns a tuple:
function anagram() {
						var s1 = (' ' + document.getElementById("name").elements[0].value).slice(1);
						var s2 = (' ' + document.getElementById("name").elements[1].value).slice(1);
						
						possible_characters = "abcdefghijklmnopqrstuvwxyz0123456789"
						s1_char_count = {};
						s2_char_count = {};
						
						for (i = 0; i<possible_characters.length; i++){
							s1_char_count[possible_characters.charAt(i)]=0;
							s2_char_count[possible_characters.charAt(i)]=0;
						}
						
						populate_chars(s1.toLowerCase(),s1_char_count);
						populate_chars(s2.toLowerCase(),s2_char_count);
						
						is_anagram = true;
						for(key in s1_char_count){
							if(s1_char_count[key]!=s2_char_count[key]){
								is_anagram = false;
									break;
							}
						}
						
						if(is_anagram){
							alert(s1.concat(" is an anagram of ").concat(s2));
						}else{
							alert(s1.concat(" is not an anagram of ").concat(s2));
						}
							
						
					}
					
					function populate_chars(str,char_count){
						for(i=0;i<str.length;i++){
							val = char_count[str.charAt(i)]
							if (val!=null){
								char_count[str.charAt(i)]=val+1;
							}
						}
					}