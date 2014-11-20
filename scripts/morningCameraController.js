#pragma strict
var target:Transform;
var distance:float;
var	distanceforLevelAkin:float = 5;
var distanceforLevelMorning:float =5; 

function Start () {

}

function Update () {
		
	distance = Vector3.Distance(gameObject.Find("player").transform.position, gameObject.Find("player2").transform.position);
	
   
			if(MorningChangeController.isCreatureAlone ==true && distance >distanceforLevelMorning)
			{
				creatureAloneCameraSetting();
				
			}
			else
			{
			
				generalCameraSetting();
			}
   
}
	
function generalCameraSetting()
{
	
	if(Input.GetKeyDown("space"))
		{
			if(target==gameObject.Find("player").transform)
			{
				target=gameObject.Find("player2").transform;
			}
			else if(target==gameObject.Find("player2").transform)
			{
				target=gameObject.Find("player").transform;
			}
		
	     }
		transform.position = target.position;
}

function boyAloneCameraSetting()
{
	target = gameObject.Find("player").transform;
	gameObject.Find("green").GetComponent(MeshRenderer).enabled = false;
    gameObject.Find("green_dark").GetComponent(MeshRenderer).enabled = false;
}

function creatureAloneCameraSetting()
{
	target = gameObject.Find("player2").transform;
	gameObject.Find("green").GetComponent(MeshRenderer).enabled = true;
    gameObject.Find("green_dark").GetComponent(MeshRenderer).enabled = true;
}