using UnityEngine;
using System.Collections;

public class TouchInput : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		foreach(Touch touch in Input.touches) {
			if(touch.phase == TouchPhase.Began) {
				rigidbody.AddForce(new Vector3(1,1,0) * 10, ForceMode.Impulse);
			}
		}
	}
}
