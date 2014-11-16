#pragma strict
var speed = 1000.0;
var bullet:Rigidbody;
var ball:Transform;
function Start () {
}

function Update () {
if(Input.GetKeyDown("g")) {
	rigidbody.AddForce(new Vector3(1,1,0) * speed, ForceMode.Impulse);
}
	/*if(Input.GetKeyDown("space")) {
		var clone : Rigidbody;
		clone = Instantiate(bullet, ball.transform.position,ball.transform.rotation);
		clone.AddForce(new Vector3(0,1,1) * speed, ForceMode.Impulse); //Add impulse force in correct direction.
	}*/
}

	function FixedUpdate () {
		
	}
