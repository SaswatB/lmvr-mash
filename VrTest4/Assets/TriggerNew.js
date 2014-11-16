#pragma strict
var bullet:Rigidbody;
var ball:Transform;
function Start () {

}

function Update () {
if(Input.GetKeyDown("k")) {
	Instantiate(bullet, ball.transform.position,ball.transform.rotation);
}
}