function initDesmos() {
	var elt = document.getElementById('calculator');
	var calculator = Desmos.Calculator(elt);
	calculator.setExpression({id:'graph1', latex:'y=x^2'});
}