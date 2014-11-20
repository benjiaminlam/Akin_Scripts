#pragma strict

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.name =="popuptrigger1"){
		Debug.Log("greeeeeeeeeeeeeeeeeen");
		gameObject.Find("popuptrigger1").GetComponent(MeshRenderer).enabled = true;
		//popupLayer2.GetComponent(MeshRenderer).enabled = true;
       	yield WaitForSeconds(10);
       	Debug.Log("offfffffffffffffffff");
       	gameObject.Find("popuptrigger1").GetComponent(MeshRenderer).enabled = true;
       	//popupLayer1.GetComponent(MeshRenderer).enabled = false;
       	//popupLayer2.GetComponent(MeshRenderer).enabled = false;
       	
    }
    
}
	