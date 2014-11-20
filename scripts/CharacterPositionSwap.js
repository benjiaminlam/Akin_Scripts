#pragma strict
private var boyPosition:Vector3;
private var creaturePosition: Vector3;
function Start () {
 
  
}

function Update () {
  
  boyPosition = gameObject.Find("player").transform.position;
  creaturePosition = gameObject.Find("player2").transform.position;

 
  if(Input.GetKeyDown("space"))
  {
   var temp:Vector3;
   temp = boyPosition;
   boyPosition = creaturePosition;
   creaturePosition = temp;
   
   
   
   //gameObject.Find("Boy").GetComponent("Character Controller").active=false;
   //gameObject.Find("Boy").GetComponent("ThirdPersonController").active=false;
   //gameObject.Find("Creature").GetComponent("Character Controller").active =true;
   //gameObject.Find("Creature").GetComponent("ThirdPersonController").active =true;
  }
  gameObject.Find("player").transform.position = boyPosition;
  gameObject.Find("player2").transform.position = creaturePosition;
  
  
}
