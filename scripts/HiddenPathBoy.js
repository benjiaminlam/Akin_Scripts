#pragma strict

var flag:boolean;
var count_cross:int;
var boyFollow:BoyFollowCreature;
var creatureFollow:CreatureFollowBoy;
function Start () {
	
	flag= true;
	count_cross = 2;
	boyFollow = gameObject.Find("player").GetComponent("BoyFollowCreature");
    creatureFollow = gameObject.Find("player2").GetComponent("CreatureFollowBoy");
	
}

function Update () {
	
	
	if(count_cross%2==0)
	{
		creatureFollow.enabled = true;
	}else
	{
		creatureFollow.enabled = false;
	}
}



function OnControllerColliderHit(hit: ControllerColliderHit)
{
	
	if(hit.collider.gameObject.name =="Hidden_path_boy")
	{
		hit.collider.isTrigger = true;
		count_cross++;
		Debug.Log(count_cross);
	}
}

function OnTriggerExit(hit: Collider)
{
	if(hit.collider.gameObject.name =="Hidden_path_boy")
	{
		hit.collider.isTrigger = false;
		
	}
}

