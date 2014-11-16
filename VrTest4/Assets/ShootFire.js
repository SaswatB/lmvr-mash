#pragma strict
var speed = 100.0;
var bullet:Rigidbody;
var ball:Transform;

var timeOut = 0;

function Start () {

}

function Update () {
	if(timeOut > 0) {
		timeOut--;
	}
}

function OnTriggerEnter () {
	if(timeOut > 0) {
		return;
	}
	var clone : Rigidbody;
	clone = Instantiate(bullet, ball.transform.position,ball.transform.rotation);
	clone.AddForce(new Vector3(0,1,1) * speed, ForceMode.Impulse);
	Debug.Log("Work");
	timeOut = 30;
}