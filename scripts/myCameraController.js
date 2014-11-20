#pragma strict
var target:Transform;
var distance:float;
var	distanceforLevelAkin:float = 5;
var distanceforLevelMorning:float =5; 

function Start () {
	if(Application.loadedLevelName == "Morning"||Application.loadedLevelName == "Night2")
	{
		target = gameObject.Find("player2").transform;
	}else if(Application.loadedLevelName == "Akin"||Application.loadedLevelName == "Night"||
	Application.loadedLevelName == "Evening"||Application.loadedLevelName == "MiddayRevisit")
	{
		target = gameObject.Find("player").transform;
	}
}

function Update () {
		
	distance = Vector3.Distance(gameObject.Find("player").transform.position, gameObject.Find("player2").transform.position);
	
	if(Application.loadedLevelName == "Akin")
	{
		if(ChangeController.isBoyAlone == true || distance>distanceforLevelAkin){
			boyAloneCameraSetting();
		}
		else{
			generalCameraSetting();
		}
	}
		
	
	else if(Application.loadedLevelName == "Evening"||Application.loadedLevelName == "Night"
	||Application.loadedLevelName == "MiddayRevisit")
	{
			generalCameraSetting();
	}
	
	else if(Application.loadedLevelName == "Night2")
	{
			creatureAloneCameraSetting();
	}
	else if(Application.loadedLevelName == "Morning")
	{
			if(ChangeController.isCreatureAlone == true|| distance>distanceforLevelMorning)
			{
				creatureAloneCameraSetting();
				
			}
			else
			{
				gameObject.Find("green").GetComponent(MeshRenderer).enabled = false;
    			gameObject.Find("green_dark").GetComponent(MeshRenderer).enabled = false;
				generalCameraSetting();
			}
	}
	transform.position = target.position;
   
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