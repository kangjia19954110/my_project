
var app = new Vue({
	el:"#app",
	data:function data(){
		return {
			current:'',
			changeMode:true
		};
	},

	methods:{
		press:function press(event){
			var me = this;
			var key = event.target.textContent;

			if(key != '=' && key != 'C' && key != '*' && key != '/' && key != '√' && key != 'x²' && key != '%' && key != '<=' && key != '±' && key != 'sin' && key != 'cos' && key != 'tan' && key != 'log' && key != 'ln' && key != 'x^' && key != 'x !' && key != 'π' && key != 'e' && key != 'rad' && key != '○'){
				me.current += key;
			}else if(key === '='){
				if(me.current.indexOf('^') > -1){
					var base = me.current.slice(0,me.current.indexOf('^'));

					var exponent = me.current.slice(me.current.indexOf('^') + 1);
					me.current = eval('Math.pow('+ base +','+ exponent +')');
				}else{
					me.current = eval(me.current);
				}
			}else if(key === 'C'){
				me.current = '';
			}else if(key === '*'){
				me.current += '*';
			}else if(key === '/'){
				me.current += '/';

			}else if(key === '+'){

				me.current += '+';

			}else if(key === '-'){

				me.current += '-';
			}else if(key === '±'){

				if(me.current.charAt(0) === '-'){

					me.current = me.current.slice(1);

				}else{

					me.current = '-' + me.current;
				}
			}else if(key === '<='){

				me.current = me.current.substring(0, me.current.length - 1);
			}else if(key === '%'){

				me.current = me.current / 100;
			}else if(key === 'π'){

				me.current = me.current * Math.PI;

			}else if(key === 'x²'){

				me.current = eval(me.current * me.current);

			}else if(key === '√'){

				me.current = Math.sqrt(me.current);
			}else if(key === 'sin'){

				me.current = Math.sin(me.current);
			}else if(key === 'cos'){

				me.current = Math.cos(me.current);

			}else if(key === 'log'){

				me.current = Math.log10(me.current);
			}else if(key === 'ln'){

				me.current = Math.log(me.current);

			}else if(key === 'x^'){

				me.current += '^';

			}else if(key === 'x !'){

				var number = 1;

				if(me.current === 0){

					me.current = '1';
				}else if(me.current < 0){

					me.current = NaN;
				}else{

					var _number = 1;

					for(var i = me.current; i > 0; i--){

						_number *= i;
					}

					me.current = _number;
				}
			}else if(key === 'e'){

				me.current = Math.exp(me.current);
			}else if(key === 'rad'){

				me.current = me.current * (Math.PI / 180);
			}else if(key === '∘'){

				me.current = me.current * (180 / Math.PI);
			}
		},
		changeModeEvent:function changeModeEvent(){

			var me = this;

			me.changeMode = !me.changeMode;
		}
	}
});