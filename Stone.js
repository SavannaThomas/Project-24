class Stone{
	constructor(x,y,r)
	{
	var options ={
		'restitution':0.8,
		'friction':0.9,
		'density':12
    }
	this.body = Bodies.rectangle(x, y, 50, 50, options);
	
  }
}
 