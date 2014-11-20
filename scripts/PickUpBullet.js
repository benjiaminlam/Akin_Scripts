#pragma strict
public static var numberofbullet = 0;
function OnTriggerEnter (other : Collider) {
		if(other.gameObject.tag =="bullet"){
		numberofbullet+=1;
		Destroy(other.gameObject);
		Debug.Log("On Hit");}
	}